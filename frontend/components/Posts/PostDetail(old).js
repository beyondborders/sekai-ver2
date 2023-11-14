import React from "react";
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
import Link from '../components_renewal/LinkWrapper';

import DefaultLayout from "../layouts/DefaultLayout";

import Breadcrumb from "../components_renewal/Breadcrumb";
import Icon from "../components_renewal/Icon";
import reactMixin from 'react-mixin';
import LocaleMixin from '../utils/LocaleMixin';
import Item from "../components_renewal/Item";
import Post from "../components_renewal/Post";
import SnsShare from "../components_renewal/SnsShare";
import PostsSideContent from "../components_renewal/PostsSideContent";
import PostsActions from '../actions/PostsActions';
import PostsStore from '../stores/PostsStore';
import HubspotForm from "../components_renewal/HubspotForm";
import u from '../utils/UtilFunctions';
import { sideBannerListNew } from '../data';
import DissapearingMenubar from "../components_renewal/DissapearingMenubar";

export default class PostDetailPage extends React.Component {
  state = {
    news: [],
  }

  componentWillMount() {
    PostsStore.onGetDataCompleted.listen((data) => {
      const state = Object.assign({}, this.state);
      state.news = data.posts;
      this.setState(state);
    });

    PostsActions.get({
      'category': 'news',
      'limit': 3
    });
  }

  generateTableOfContent() {
    if (!document.getElementById('toc')) {
      var h2 = document.getElementsByTagName('h2');
      if (!!h2[0]) {
        h2[0].insertAdjacentHTML('beforebegin', `<div id='toc'><input id="hide-toc" type="checkbox" checked=""><label for='hide-toc' id='toc-header'><span>${i18n.t('label.table_of_contents')}</span></label><div id='toc-content'></div></div>`);
        var documentRef = documentRef || document;
        var toc = documentRef.getElementById('toc-content');
        var headings = [].slice.call(documentRef.body.querySelectorAll('#wysiwig h2'));
        headings.forEach(function (heading, index) {
          var anchor = documentRef.createElement('a');
          anchor.setAttribute('name', 'toc' + index);
          anchor.setAttribute('id', 'toc' + index);
          anchor.setAttribute('class', 'scroll-anchor');

          var link = documentRef.createElement('a');
          link.setAttribute('href', '#toc' + index);
          link.textContent = heading.textContent;

          var div = documentRef.createElement('div');
          div.setAttribute('class', heading.tagName.toLowerCase());

          div.appendChild(link);
          toc.appendChild(div);
          heading.parentNode.insertBefore(anchor, heading);
        });
      }
    }
  }

  generateGuidebannerMobile() {
    if (!document.getElementById('guidebook-mobile')) {
      var h2 = document.getElementsByTagName('h2');
      if (!!h2[0]) {
        var guide = { link: '', img: '' };
        if (!!this.props.post.guide_url) {
          guide = {
            link: this.props.post.guide_url,
            img: this.props.post.guide_post_image_url,
            img_mobile: this.props.post.guide_post_image_url_mobile || this.props.post.guide_post_image_url,
          }
        } else {
          var target_countries = '';
          if (!!this.props.post && !!this.props.post.target_countries && !!this.props.post.target_countries.length > 0) {
            target_countries = this.props.post.target_countries[0].country_code;
          }
          switch (target_countries) {
            case 'MYS': guide = { link: '/global/malaysia-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-malaysia.png' }; break;
            case 'KHM': guide = { link: '/global/cambodia-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-cambodia.png' }; break;
            case 'THA': guide = { link: '/global/thailand-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-thailand.png' }; break;
            case 'VNM': guide = { link: '/global/vietnam-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-vietnam.png' }; break;
            case 'PHL': guide = { link: '/global/philippines-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-philippines.png' }; break;
            case 'USA': guide = { link: '/global/america-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-america.png' }; break;
          }
        }

        if (!!guide.link) {
          h2[0].insertAdjacentHTML('beforebegin', `<div id='guidebook-mobile' class='mt-4'><a href=${guide.link}><img data-src=${guide.img} width='100%' class='d-none d-xl-block lazyload'/><img data-src=${guide.img_mobile || guide.img} width='100%' class='d-block d-xl-none lazyload'/></a></div>`);
        }
      }
    }
  }

  handleFormSubmit(url) {
    window.scrollTo(0, 0);
    window.setTimeout(() => {
      window.pushState(url);
    }, 1000);
  }

  generateMalaysiaGuide() {
    return (
      <div className='row mb-4'>
        <div className='col-6'>
          <img data-src='https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/form-malaysia.jpg' className="lazyload" width='100%' />
        </div>
        <div className='col-6' id="form">
          <HubspotForm
            portalId="5650588"
            formId="99b569c9-6105-4102-ab4d-1a467e723c0d"
            onSubmit={() => this.handleFormSubmit('/inquiry_thanks/global/malaysia-guide')}
          />
        </div>
      </div>
    )
  }

  generatePhilippinesGuide() {
    return (
      <div className="mb-4">
        <Link to='/global/philippines-guide'>
          <img data-src='https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-philippines.png' className="lazyload" width='100%' />
        </Link>
      </div>
    )
  }

  generateCambodiaGuide() {
    return (
      <div className='row mb-4'>
        <div className='col-6'>
          <img data-src='https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/form-cambodia.jpg' className="lazyload" width='100%' />
        </div>
        <div className='col-6' id="form">
          <HubspotForm
            portalId="5650588"
            formId="99b569c9-6105-4102-ab4d-1a467e723c0d"
            onSubmit={() => this.handleFormSubmit('/inquiry_thanks/global/cambodia-guide')}
          />
        </div>
      </div>
    )
  }

  generateThailandGuide() {
    return (
      <div className="mb-4">
        <Link to='/global/thailand-guide'>
          <img data-src='https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-thailand.png' className="lazyload" width='100%' />
        </Link>
      </div>
    )
  }

  generateVietnamGuide() {
    return (
      <div className="mb-4">
        <Link to='/global/vietnam-guide'>
          <img data-src='https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-vietnam.png' className="lazyload" width='100%' />
        </Link>
      </div>
    )
  }

  generateBangladeshGuide() {
    return (
      <div className="color-bg__gray__200 mt-5 p-5 text-center mb-4">
        <div className='fz-30 fw-4 mb-3'>
          <div>【無料】バングラデシュの不動産ガイド</div>
        </div>
        <div className='text-left'>
          <div className='fz-18'>バングラデシュ不動産について体系的に理解できる、「バングラデシュ不動産ガイド」をPDF形式で無料で提供しています。</div>
          <p><img data-src='/images/banner/bangladesh-banner.jpg' className='mt-3 lazyload' width='100%' /></p>
          <p className='fz-18 mt-5'>
            国土は日本の半分以下にも関わらず人口約1.7億人を抱える、世界最大の人口密度を持つ国バングラデシュ。
          </p>
          <p>世界的な投資銀行「ゴールドマン・サックス」も、今後の経済成長ポテンシャルを見出し「ネクスト11」にバングラデシュを選出。</p>
          <p>今回は、そんな知られざる次の「経済大国」バングラデシュについて、</p>
          <ul className='fz-18 my-4'>
            <li>不動産投資の可能性</li>
            <li>不動産投資をするのにおすすめのエリア</li>
            <li>不動産の法規制</li>
          </ul>
          <p>など、バングラデシュの不動産について24ページに渡り解説しています。</p>
          <p>バングラデシュ不動産投資について、必要なノウハウ収集にご活用ください。</p>
          <p>
            <Link to='/global/bangladesh-guide' className='fz-lg px-0 btn pointer btn-blue btn-xl btn-block rounded-0'>
              無料で資料をダウンロードする
            </Link>
          </p>
        </div>
      </div>
    )
  }

  generateAmericaGuide() {
    return (
      <div className="mb-4">
        <Link to='/global/america-guide'>
          <img data-src='https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-america.png' className="lazyload" width='100%' />
        </Link>
      </div>
    )
  }

  generateHawaiiGuide() {
    return (
      <div className="color-bg__gray__200 mt-5 p-5 text-center mb-4">
        <div className='fz-30 fw-4 mb-3'>
          <div>【無料】ハワイ不動産ガイド</div>
        </div>
        <div className='text-left'>
          <div className='fz-18'>ハワイ不動産について体系的に理解できる、「ハワイ不動産ガイド」をPDF形式で無料で提供しています。</div>
          <p><img data-src='/images/guidebook/hawaii.jpg' className='mt-3 lazyload' width='100%' /></p>
          <p>
            <div>旅行者や移住者を惹きつけてやまないハワイ。</div>
            <div>近年は、節税の手段としてハワイの不動産投資が注目されています。</div>
          </p>
          <p>今回は、そんなハワイにおける</p>
          <ul>
            <li>不動産投資の可能性</li>
            <li>節税が期待できる減価償却の仕組み</li>
            <li>不動産投資をするのにおすすめのエリア</li>
          </ul>
          <p>など、25ページに渡り解説しています。</p>
          <p>ハワイ不動産投資について、必要なノウハウ収集にご活用ください。</p>
          <p>
            <Link to='/global/hawaii-guide' className='fz-lg px-0 btn pointer btn-blue btn-xl btn-block rounded-0'>
              無料で資料をダウンロードする
            </Link>
          </p>
        </div>
      </div>
    )
  }

  renderGuide(target_countries) {
    if (!!this.props.post.guide_url) {
      return (
        <div className="mb-4">
          <Link to={this.props.post.guide_url}>
            <img data-src={this.props.post.guide_post_image_url} width='100%' className="lazyload" />
          </Link>
        </div>
      )
    } else {
      switch (target_countries) {
        case 'MYS': return this.generateMalaysiaGuide();
        case 'KHM': return this.generateCambodiaGuide();
        case 'THA': return this.generateThailandGuide();
        case 'VNM': return this.generateVietnamGuide();
        case 'PHL': return this.generatePhilippinesGuide();
        case 'BGD': return this.generateBangladeshGuide();
        case 'USA': return this.generateAmericaGuide();
      }
    }
  }

  renderGuideFromtags(tags) {
    var has_hawaii = false
    !!tags && tags.map((tag, index) => {
      if (!!tag.name_en && tag.name_en.toLowerCase() == 'hawaii') {
        has_hawaii = true
      }
    })

    if (has_hawaii) {
      return this.generateHawaiiGuide();
    }
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', this.generateTableOfContent());
    document.addEventListener('DOMContentLoaded', this.generateGuidebannerMobile());
  }

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.generateTableOfContent());
    document.removeEventListener('DOMContentLoaded', this.generateGuidebannerMobile());
  }

  render() {
    const { post } = this.props;
    var breadcrumbList = [];
    var category = this.props.post.category;
    var convertedCategory = category === 'knowhow' ? 'article' : category;
    var target_countries = null;
    if (!!post && !!post.target_countries && post.target_countries.length > 0) {
      target_countries = post.target_countries[0].country_code
    }
    breadcrumbList.push([i18n.t(`menu.${post.category}`), category === 'seminar' ? 'all' : '/'])
    if (!!this.props.post.target_countries && !!this.props.post.target_countries[0]) {
      var name = this.props.post.target_countries[0].name;
      var name_en = this.props.post.target_countries[0].name_en.toLowerCase();
      breadcrumbList.push([i18n.t(`label.real_estate_${category}`, { location: name }), `${name_en}`])
    }

    return (
      <DefaultLayout className="color-bg__gray__100">
        {
          convertedCategory == 'article' &&
          <div className='mt-5 d-block d-lg-none'>
            <DissapearingMenubar />
          </div>
        }
        <div className="container py-4">
          <Breadcrumb list={u.generateBreadcrumbList(breadcrumbList, `/${convertedCategory}`)} />
          <div className='row'>
            <article className="justify-content-center bg-white p-4 col-md-9 col-sm-12">
              <div className="fz-18 fw-3">
                <p className="font-oswald fz-xs my-1">{post.publish_date}</p>
                <h1 className="h1 font-weight-bold">{post.title}</h1>
                <ul className="list-inline fz-2xs text-blue">
                  <li className="list-inline-item">{i18n.t(`menu.${post.category}`)}</li>
                </ul>
                <SnsShare text={post.title} />
                <div id="wysiwig" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                <ul className="list-inline fz-2xs text-blue my-4">
                  {(() => {
                    return post.tags.map((tag, index) => <li key={index} className="list-inline-item mr-3"><Link to={`/tags/${tag.name}`}><Icon name="im-tag" />{tag.name}</Link></li>);
                  })()}
                </ul>
                <SnsShare text={post.title} />
                {
                  !!post.guide_url &&
                  <Link to={post.guide_url} className='d-block d-xl-none'>
                    <img data-src={post.guide_post_image_url_mobile} width='100%' className="lazyload"/>
                  </Link>
                }
                {
                  !post.guide_url && !!target_countries && !!sideBannerListNew[target_countries.toLowerCase()] &&
                  <Link to={sideBannerListNew[target_countries.toLowerCase()].to} className='d-block d-xl-none'>
                    <picture>
                      <source srcSet={sideBannerListNew[target_countries.toLowerCase()].image_webp} type="image/webp" />
                      <img data-src={sideBannerListNew[target_countries.toLowerCase()].image} className='lazyload' width='100%' />
                    </picture>
                  </Link>
                }
                {!!post.manual_related_posts.length > 0 &&
                  <div className='manual-related-posts-container p-3 mt-2 mb-3'>
                    <h4>{i18n.t('label.manual_related_posts')}</h4>
                    {post.manual_related_posts.map((post, index) => {
                      let category = post.category === 'knowhow' ? 'article' : post.category;
                      return (
                        <div>
                          <Link className='fz-sm' to={`/${category}/${post.id}${post.slug ? `/${post.slug}` : ''}`}>{post.title}</Link>
                        </div>
                      )
                    })}
                  </div>
                }
                {
                  window.locale === 'ja' &&
                  <div className='d-none d-md-block'>
                    {this.renderGuide(target_countries)}
                  </div>
                }
                {
                  window.locale === 'ja' &&
                  this.renderGuideFromtags(post.tags)
                }
              </div>

            </article>
            <PostsSideContent tags={post.tags} target_countries={post.target_countries} guide_url={post.guide_url} guide_post_image_url={post.guide_post_image_url} />
          </div>
        </div>

        <aside>
          <div className="container py-3">
            <div className="text-center text-blue my-3"><Icon name="im-edit" size="2x" /></div>
            <h3 className="text-center fz-lg mb-4">{i18n.t('label.related_articles')}</h3>
            <div className="row mx-2-n">
              {post.related_posts.map((post, index) => {
                return (
                  <article key={index} className="col-md-4 my-3">
                    <Post post={post} />
                  </article>
                )
              })}
            </div>
          </div>
        </aside>
        <aside>
          <div className="container py-3">
            <div className="text-center text-blue my-3"><Icon name="im-edit" size="2x" /></div>
            <h3 className="text-center fz-lg mb-4">{i18n.t('label.latest_news')}</h3>
            <div className="row mx-2-n">
              {this.state.news.map((post, index) => {
                return (
                  <article key={index} className="col-md-4 my-3">
                    <Post post={post} />
                  </article>
                )
              })}
            </div>
          </div>
        </aside>

        {
          !!post.related_properties && post.related_properties.length > 0 &&
          <aside>
            <div className="container py-3">
              <div className="text-center text-blue my-3"><Icon name="im-edit" size="2x" /></div>
              <h3 className="text-center fz-lg mb-4">{i18n.t('label.related_properties')}</h3>
              <div className="row mx-2-n">
                {post.related_properties.slice(0, 3).map((property, index) => {
                  return (
                    <article key={index} className="col-md-4 my-3">
                      <Item item={property} className='text-black' />
                    </article>
                  )
                })}
              </div>
            </div>
          </aside>
        }
        {
          window.locale !== 'ja' && !!this.props.pr_properties &&
          <aside className="bg-gray-darker mt-3 mt-md-6">
            <div className="container py-6">
              <h3 className="text-center fz-lg mb-4 text-white">{i18n.t('label.promoted_property')}</h3>
              <div className="row mx-2-n">
                {this.props.pr_properties.results.map((v, index) => {
                  return (
                    <article key={index} className="col-6 col-md-3 px-2 my-2 text-white">
                      <Item item={v} className="text-white" />
                    </article>
                  )
                })}
              </div>
            </div>
          </aside>
        }

      </DefaultLayout>
    );
  }
}

reactMixin(PostDetailPage.prototype, LocaleMixin);
