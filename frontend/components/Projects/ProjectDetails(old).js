import React from "react";
import PropTypes from 'prop-types';
import { ITEM } from '../defaultProps';
import DefaultLayout from "../layouts/DefaultLayout";
import ItemMap, {Marker} from '../components_renewal/Map';
import Link from '../components_renewal/LinkWrapper';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link as ScrollLink, Element as ScrollElement, scroller} from 'react-scroll';
import MediaQuery from 'react-responsive';
import Lightbox from 'react-images';

import Breadcrumb from "../components_renewal/Breadcrumb";
import Image from "../components_renewal/Image";
import Icon from "../components_renewal/Icon";
import Button from "../components_renewal/Button";
import Gallery from "../components_renewal/Gallery";
import HubspotForm from "../components_renewal/HubspotForm";
import MultiValue from '../components/MultiValue.jsx';
import LocaleMixin from '../utils/LocaleMixin';
import PropertyInquiry from '../components/PropertyInquiry.jsx';
import ProjectInquiry from '../components/ProjectInquiry.jsx';
import Item from "../components_renewal/Item";
import ReactMixin from 'react-mixin';
import FavoriteActions from '../actions/FavoriteActions';
import FavoriteStore from '../stores/FavoriteStore';
import NotificationStore from '../stores/NotificationStore';
import DetailItems from '../components_renewal/DetailItems';
import LandDetailItems from '../components_renewal/LandDetailItems';
import WholeBuildingDetailItems from '../components_renewal/WholeBuildingDetailItems';
import u from '../utils/UtilFunctions';

import { items, mapStyle } from '../data'
import API from "../components_renewal/API";

class ItemDetailPage extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    params: PropTypes.object,
    pr_properties: PropTypes.object,
    type: PropTypes.string
  }

  static defaultProps = {
    item: ITEM
  }

  state = {
    headerOffset: 0,
    gallery: {
      images: [],
      select: 0,
      isOpen: false
    },
    floorPlan: {
      images: [],
      select: 0,
      isOpen: false
    },
    favorited: this.props.item.favorited,
    showDisclaimer: false
  }

  lightBoxGotoPrev(name) {
    const state = Object.assign({}, this.state);
    state[name].select -= 1;
    this.setState(state);
  }

  lightBoxGotoNext(name) {
    const state = Object.assign({}, this.state);
    state[name].select += 1;
    this.setState(state);
  }

  closeLightbox(name) {
    const state = Object.assign({}, this.state);
    state[name].isOpen = false;
    this.setState(state);
  }

  openLightbox(name, select) {
    const state = Object.assign({}, this.state[name]);
    state.isOpen = true;
    state.select = select;
    this.setState({[name]: state});
  }

  headerSizeOffsetRefresh() {
    const header = document.getElementsByClassName('header')[0]
    if(header) {
      this.setState({ headerOffset: header.offsetHeight })
    }
  }

  handleOnSubmit(props){
    let url = null
    if(props.type === 'property'){
      url = `/inquiry_thanks/properties/${props.item.id}`
    } else {
      url = `/inquiry_thanks/projects/${props.item.id}`
    }

    if(window.locale == 'en'){
      API.post(`/properties/${this.props.item.id}/send_memo_to_slack`, {url: window.location.href}).then((res)=>{
        window.setTimeout(() => {
          window.pushState(url);
        }, 1000);
      })
    }else{
      window.setTimeout(() => {
        window.pushState(url);
      }, 1000);
    }
  }

  renderForm(form_name) {
    return(
      <section className="border-gray-lighter border-double color-bg__gray__50">
        <div className="py-4">
          <Link to={`tel:${i18n.t('label.inquiry_tel_number')}`} className='text-black'>
            <p className="text-center font-oswald fw-1 h4 letter-spacing-sm">
              <Icon name="im-phone-call"/> {i18n.t('label.inquiry_tel_number')}
            </p>
          </Link>
          {/* {this.props.type === 'property' ? <PropertyInquiry form_name={form_name} item={this.props.item} property_id={this.props.item.id}/> : <ProjectInquiry form_name={form_name} item={this.props.item} project_id={this.props.item.id}/>} */}
          <div className='px-4'>
          {
            window.locale == 'ja' ?
            <HubspotForm
              portalId= "5650588"
              formId= "c53c941b-a643-4e17-be06-4854caba2cc3"
              onSubmit={() => this.handleOnSubmit(this.props)}
            /> :
            <HubspotForm
              portalId= "5650588"
              formId= "afeff7f7-eb6e-42ee-b6ca-47ff16364cbe"
              onSubmit={() => this.handleOnSubmit(this.props)}
            />
          }
          </div>
          <div className="text-center">
            <div className='fz-11 color-text__inherit'>
              上記フォーム内容を送信することにより、<br className='d-block d-lg-none' /><a target='_blank' href='/ja_terms-privacypolicy.html' className=''>プライバシーポリシー・利用規約</a>についてへ同意したこととなります。
            </div>
          </div>
        </div>
      </section>
    );
  }

  componentWillMount() {
    const state = Object.assign({}, this.state);
    // imageのURLをConcat
    state.gallery.images = [{url: this.props.item.images.main_image_url, category: this.props.item.images.main_image_category}].concat(this.props.item.images.image_urls).map(image => {return {src: image.url, category: image.category}});
    if(state.gallery.images.length == 1 && !state.gallery.images[0].src){
      state.gallery.images = u.generatePreImage(this.props.item.building.country_en)
      if (this.state.gallery.images.length > 1){
        state.showDisclaimer = true
      }
    }

    // projectの場合はフロアプランを設定
    if (this.props.type === 'project') {
      state.floorPlan.images = this.props.item.floor_plans.map(v => {
        return {
          id: v.id,
          name: v.name,
          src: v.image_url,
          caption: `${v.name}${v.square_meter ?  ' | '+v.square_meter+'㎡' : ''}${v.number_of_bedrooms ? ' | '+v.number_of_bedrooms+'beds' : ''}${v.balcony_size_sqm ? ' | balcony '+v.balcony_size_sqm+'㎡' : ''}`,
          bedrooms: v.number_of_bedrooms,
          square_meter: v.square_meter,
        }
      });
    } else {
      state.floorPlan.images = [];
    }
    this.setState(state);

    FavoriteStore.onPostDataCompleted.listen((data) => {
      this.setState({favorited: true});
    });

    FavoriteStore.onDeleteDataCompleted.listen((data) => {
      this.setState({favorited: false});
    });

    FavoriteStore.onPostDataFailed.listen((data) => {
      NotificationStore.setState({
        isVisible: true,
        isError: true,
        message: data.user_message
      });
    });
  }

  componentDidMount() {
    this.headerSizeOffsetRefresh();
    window.addEventListener('resize', this.headerSizeOffsetRefresh.bind(this));
    window.addEventListener('scroll', this.headerSizeOffsetRefresh.bind(this));
    if (location.hash === '#inquiry') {
      scroller.scrollTo('anc-inquiry', {offset:-(this.state.headerOffset + 160)});
    }
  }


  favoriteButtonHandler(ev) {
    if (this.state.favorited) {
      FavoriteActions.unFavorite(this.props.type, this.props.params.id);
    } else {
      FavoriteActions.favorite(this.props.type, this.props.params.id);
    }
  }

  render() {
    const { headerOffset, gallery, floorPlan } = this.state;
    const {item} = this.props;
    const allAddress = window.getAddress({
      country       : item.building.country,
      prefecture    : item.building.prefecture,
      city          : item.building.city,
      subarea       : item.building.subarea,
      street        : item.building.street,
      street_address: item.building.street_address
    }, " ");
    const area = item.building.prefecture || item.building.country
    const area_link = u.generateLinkFromArea(item.building.country_en, item.building.prefecture_en)

    // 表示の出し分け
    const detailList = ['properties_overview']; // 物件概要
    if(item.floor_plans && item.floor_plans.length) detailList.push('floor_plans'); // フロアプラン
    if(item.description) detailList.push('description'); // 物件詳細
    if(this.props.type === 'project' && item.seller && item.seller.length) detailList.push('seller_info'); // 売主情報
    if(parseFloat(item.building.latitude) && parseFloat(item.building.longitude)) detailList.push('properties_place'); // 所在地

    return (
      <DefaultLayout>
        <article>
          <MediaQuery query='(min-width: 576px)'>
            <div className="mv-detail">
              {gallery.images.slice(0, 5).map((v, index)=> {
                return(
                  <div key={index} onClick={v.src ? this.openLightbox.bind(this, 'gallery', index) : null} className={`mv-detail__item ${v.src ? 'action-alpha' : ''}`}>
                    <div className="img-cover h-100">
                      <Image className="img-cover__item" src={v.src} alt={item.building.name + ' ' + v.category}/>
                      {index == 4 &&
                        <div className="img-cover__overlay d-flex justify-content-center align-items-center">
                          <p className="text-white font-oswald fw-1 h1 letter-spacing-md">
                            +{gallery.images.length}
                          </p>
                        </div>
                      }
                    </div>
                  </div>
                );
              })}
              <div className={`img-disclaimer fz-12 ${this.state.showDisclaimer ? '' : 'd-none'}`}>{i18n.t('label.illustrative_purpose_only')}</div>
            </div>
          </MediaQuery>
          <MediaQuery query='(max-width: 575px)'>
            <Gallery photos={gallery.images} />
          </MediaQuery>

          <StickyContainer>
            <Sticky topOffset={headerOffset * -1} bottomOffset={headerOffset}>
              {(opt) => {
                if( opt.isSticky ) {
                  opt.style.marginTop = headerOffset;
                  opt.style.zIndex = 200;
                }
                return (
                  <div className="bg-white border-bottom border-gray-dark border-solid border-width-2px" style={{...opt.style}}>
                    <div className="container">
                      <ul className="list-unstyled mb-0 py-2 align-items-center row">
                        {detailList.map((v, index)=> {
                          return (
                            <li key={index} className="col-sm hidden-md-down line-height-1 text-nowrap">
                              <ScrollLink
                                to={`anc-${v}`}
                                offset={-(headerOffset + 80)}
                                duration={200}
                                smooth={true}
                                className="text-gray-dark fz-xs action-alpha d-block py-2">
                                {i18n.t('label.'+v)}
                              </ScrollLink>
                            </li>
                          );
                        })}
                        <li className="col-12 col-lg-4 ml-md-auto">
                          <div className="row mx-1-n">
                            <div className="col-6 px-1">
                              <Button block={true} color="gray-lightest" rounded="lg" size="lg" onClick={this.favoriteButtonHandler.bind(this)}>
                                <Icon className="text-red" size="lg" name={this.state.favorited ? "fa-heart" : "fa-heart-o"}/> {i18n.t('label.favorite')}
                              </Button>
                            </div>
                            <div className="col-6 px-1">
                              <ScrollLink to="anc-inquiry" offset={-(headerOffset + 80)} duration={200} smooth={true} >
                                <Button block={true} color="blue" className="px-0" rounded="lg" size="lg">{i18n.t('menu.contact')}</Button>
                              </ScrollLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              }}
            </Sticky>

            <ScrollElement name="anc-properties_overview">
              <section className="container my-3">
                <div className="row">
                  <div className="col-lg-8 pr-lg-5">
                    <Breadcrumb list={u.generateBreadcrumbList([
                                      [item.building.country,item.building.country_en],
                                      [item.building.prefecture, item.building.prefecture_en],
                                      [item.building.city, item.building.city_en],
                                      [i18n.t(`label.${item.building.building_type_raw}`), item.building.building_type_raw]
                                      ])}/>
                    <div className="row">
                      <div className="col-12 my-2 col-md-auto flex-md-last ml-md-auto letter-spacing-md text-nowrap font-oswald line-height-1">
                        <p className="my-0 fz-2xs fw-1">{item.updated_at} {i18n.t('label.updated_label')}</p>
                        <p className="my-2 display-4 fw-1">
                          {window.locale == 'ja' && item.users_currency_code == 'JPY'?
                            <MultiValue
                              min={item.users_currency_price_min_formatted_jp || item.users_currency_price_formatted_jp }
                              max={item.users_currency_price_max_formatted_jp}
                              emptyLabel={i18n.t('message.unknown')}/> :
                            <MultiValue
                              min={item.users_currency_price_min_formatted || item.users_currency_price_formatted }
                              max={item.users_currency_price_max_formatted}
                              prefix={item.users_currency_code + ' '} emptyLabel={i18n.t('message.unknown')}/>  
                          }
                        </p>
                      </div>
                      <div className="col-12 my-2 col-md flex-md-first">
                        <h2>
                          { u.showBedrooms(item.type, item.building.name) &&
                          <MultiValue
                            min={item.number_of_bedrooms || item.bedrooms_min }
                            max={item.bedrooms_max} suffix={i18n.t('label.bedrooms_label') + ' '}
                            emptyLabel=""/>
                          }
                          {item.building.name}
                        </h2>
                        <p className="fz-2xs">{allAddress}</p>
                      </div>
                    </div>
                    <p className="h5 mb-4">
                      <MultiValue
                        min={item.square_meter || item.square_meter_min }
                        max={item.square_meter_max} suffix="㎡"
                        emptyLabel=""/>
                        &nbsp; &nbsp;
                      <MultiValue
                        min={item.number_of_bedrooms || item.bedrooms_min }
                        max={item.bedrooms_max} suffix={i18n.t('label.bedrooms_label')}
                        emptyLabel=""/>
                    </p>
                    <p className="fz-xs">{item.point}</p>
                    {(()=>{
                      switch (item.building.building_type_raw) {
                        case 'land':
                          return <LandDetailItems item={item} />
                        case 'whole_building':
                          return <WholeBuildingDetailItems item={item} />
                        default:
                          return <DetailItems item={item} />
                      }
                    })()}
                  </div>
                  <div className="col-4 hidden-md-down">
                    {this.renderForm('upper')}
                  </div>
                </div>
              </section>
            </ScrollElement>
            {
              item.video_url &&
              <section className="container my-6" id="wysiwig">
                <span className="fr-video fr-dvb">
                  <iframe width="100%" height="460" src={u.generateVideoUrl(item.video_url)} frameBorder="0" allowFullScreen="true"></iframe>
                </span>
              </section>
            }
            {
              item.video_url &&
              <section className="container my-6" id="wysiwig">
                <span className="fr-video fr-dvb">
                  <iframe width="100%" height="460" src={u.generateVideoUrl(item.video_url)} frameBorder="0" allowFullScreen="true"></iframe>
                </span>
              </section>
            }

            {(() => {
              if(detailList.indexOf('floor_plans') === -1) return;
              return <ScrollElement name="anc-floor_plans">
                <section className="my-6">
                  <h3 className="text-center h5 mb-5">{i18n.t('label.floor_plans')}</h3>
                  <div className="bg-gray-lightest py-5">
                    <div className="container">
                      <ul className="row list-unstyled mx-2-n">
                        {floorPlan.images.slice(0,4).map((v, index)=> {
                          return (
                            <li key={index} className="col-6 col-lg-3 px-2 my-2">
                              <h4 className="text-center fz-md mb-3">{v.name}</h4>
                              <div
                                onClick={this.openLightbox.bind(this, 'floorPlan', index)} className="img-contain bg-white action-alpha"
                                style={{height: '12rem'}}
                              >
                                <Image className="img-contain__item" src={v.src}/>
                              </div>
                              <ul className="list-unstyled py-3 bg-black text-white fz-2xs d-flex">
                                {v.square_meter
                                  ? <li className="col p-0 text-center border-white text-nowrap">
                                      <Icon name="im-home" className="align-bottom" size="2x"/> {v.square_meter ? v.square_meter+'㎡' : null}
                                    </li>
                                  : null
                                }
                                {v.bedrooms
                                  ? <li className="col p-0 text-center border-white text-nowrap border-left border-solid">
                                      <Icon name="im-bed" className="align-bottom" size="2x"/> {v.bedrooms}
                                    </li>
                                  : null
                                }
                              </ul>
                            </li>
                          )
                        })}
                      </ul>
                      {
                        (window.locale == 'ja' && !!item.guide_url) &&
                        <div className='col-6 offset-3 mt-3'>
                          <Link to={item.guide_url} target='_blank'>
                            <Button block={true} color="blue" className="px-0" rounded="lg" size="lg">物件資料ダウンロード</Button>
                          </Link>
                        </div>
                      }
                    </div>
                  </div>
                </section>
              </ScrollElement>
            })()}

            {(() => {
              if(detailList.indexOf('description') === -1) return;
              return <ScrollElement name="anc-description">
                <section className="container my-6">
                  <h3 className="text-center h5 mb-5">{i18n.t('label.description')}</h3>
                  <div className="row justify-content-center">
                    <div className="col-lg-11">
                      <p className="fz-xs" dangerouslySetInnerHTML={{__html: item.description}}></p>
                    </div>
                  </div>
                </section>
              </ScrollElement>
            })()}

            {(() => {
              if(detailList.indexOf('seller_info') === -1) return;
              return <ScrollElement name="anc-seller_info">
                <section className="container my-6">
                  <div className="border-black border-solid px-4 py-5 px-sm-5">
                    <h3 className="text-center h5 mb-5">{i18n.t('label.seller_info')}</h3>
                    {item.seller.map((v, index)=> {
                      return (
                        <div key={index} className="row px-xl-6 mt-4">
                          <div className="col-md-5 col-lg-4">
                            <Image src={v.image_url} className="w-100 h-auto mb-3" />
                          </div>
                          <div className="col-md-7 col-lg-8">
                            <h4 className="h6 letter-spacing-sm">{v.name}</h4>
                            <p className="fz-xs">{[v.tel, v.notary_license_number].filter(v => v).join(' : ')}</p>
                            <p className="fz-xs" dangerouslySetInnerHTML={{__html: v.description}}></p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </ScrollElement>
            })()}

            {(() => {
              if(detailList.indexOf('properties_place') === -1) return;
              return <ScrollElement name="anc-properties_place">
                <section className="container mt-6">
                  <h3 className="text-center h5 mb-5">{i18n.t('label.properties_place')}</h3>
                  <div className="map map--size1">
                    <ItemMap
                      options={{ styles: mapStyle, gestureHandling: 'greedy', scrollwheel: false }}
                      zoom={17}
                      center={{lat: parseFloat(item.building.latitude), lng: parseFloat(item.building.longitude)}}
                      >
                      <Marker lat={parseFloat(item.building.latitude)} lng={parseFloat(item.building.longitude)}
                        svgViewBox="0 0 34 51"
                        svgPath={<path d="M17,.5h0A16.5,16.5,0,0,0,2.7,25.2L17,50,31.3,25.3A16.5,16.5,0,0,0,17,.5Zm0,22.9A6.4,6.4,0,1,1,23.4,17,6.4,6.4,0,0,1,17,23.4Z"/>}
                      />
                    </ItemMap>
                  </div>
                </section>
              </ScrollElement>
            })()}

            <ScrollElement name="anc-inquiry">
              <div className="container">
                {this.renderForm('bottom')}
              </div>
            </ScrollElement>
          </StickyContainer>
          <Lightbox
            currentImage={gallery.select}
            images={gallery.images}
            isOpen={gallery.isOpen}
            onClickPrev={this.lightBoxGotoPrev.bind(this, 'gallery')}
            onClickNext={this.lightBoxGotoNext.bind(this, 'gallery')}
            onClose={this.closeLightbox.bind(this, 'gallery')}
          />
          <Lightbox
            currentImage={floorPlan.select}
            images={floorPlan.images}
            isOpen={floorPlan.isOpen}
            onClickPrev={this.lightBoxGotoPrev.bind(this, 'floorPlan')}
            onClickNext={this.lightBoxGotoNext.bind(this, 'floorPlan')}
            onClose={this.closeLightbox.bind(this, 'floorPlan')}
          />
        </article>

        <aside className="py-6">
          <div className="container">
            <h3 className="fz-lg mb-4 text-black text-effect-blue">{i18n.t('label.similar_properties')}</h3>
            <div className="row mx-2-n">
              {(item.similar_properties ? item.similar_properties : item.similar_projects).map((v, index)=> {
                return (
                  <article key={index} className="col-6 col-md-3 px-2 my-2 text-white">
                    <Item item={v} index={index} className="text-black"/>
                  </article>
                )})}
            </div>
            <div className='row pt-4'>
              <div className='col-md-12'>
                <h3 className="fz-lg text-black text-effect-blue">{i18n.t('label.find_by_size', {area: area})}</h3>
                <div>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/less-than-30-sqm`}>
                    {i18n.t('label.find_less_than_30', {area: area})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/30-to-60-sqm`}>
                    {i18n.t('label.find_by_size_x_to_y', {area: area, min: 30, max: 60})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/60-to-90-sqm`}>
                  {i18n.t('label.find_by_size_x_to_y', {area: area, min: 60, max: 90})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/90-to-120-sqm`}>
                  {i18n.t('label.find_by_size_x_to_y', {area: area, min: 90, max: 120})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 d-inline-block" to={`/search/${area_link}/more-than-120-sqm`}>
                    {i18n.t('label.find_more_than_120', {area: area})}
                  </Link>
                </div>
              </div>
              <div className='col-md-12 mt-5'>
                <h3 className="fz-lg text-black text-effect-blue">{i18n.t('label.find_by_number_of_bedrooms', {area: area})}</h3>
                <div>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/1-bedrooms`}>
                    {i18n.t('label.find_bedrooms', {bedrooms: 1, area: area})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/2-bedrooms`}>
                    {i18n.t('label.find_bedrooms', {bedrooms: 2, area: area})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/3-bedrooms`}>
                    {i18n.t('label.find_bedrooms', {bedrooms: 3, area: area})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 mr-4 d-inline-block" to={`/search/${area_link}/4-bedrooms`}>
                    {i18n.t('label.find_bedrooms', {bedrooms: 4, area: area})}
                  </Link>
                  <Link className="fz-3xs color-text__main__500 d-inline-block" to={`/search/${area_link}/5-bedrooms`}>
                    {i18n.t('label.find_bedrooms', {bedrooms: 5, area: area})}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {
          window.locale !== 'ja' && !!this.props.pr_properties &&
          <aside className="bg-gray-darker py-6">
            <div className="container">
              <h3 className="text-center fz-lg mb-4 text-white">{i18n.t('label.promoted_property')}</h3>
              <div className="row mx-2-n">
                {this.props.pr_properties.results.map((v, index)=> {
                  return (
                    <article key={index} className="col-6 col-md-3 px-2 my-2 text-white">
                      <Item item={v} className="text-white"/>
                    </article>
                  )})}
              </div>
            </div>
          </aside>
        }
      </DefaultLayout>
    );
  }
}

ReactMixin(ItemDetailPage.prototype, LocaleMixin);
export default ItemDetailPage;
