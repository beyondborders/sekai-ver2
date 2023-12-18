import React from "react";
import PropTypes from "prop-types";
import { ITEM } from '../defaultProps';

import MultiValue from '../components/MultiValue.jsx';
import utils from "../utils/UtilFunctions.js";

export default class DetailItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  static defaultProps = {
    item: ITEM
  }

  generate_company_information_advertisement = (item) => {
    let result = null;
    if (!!item.advertiser_name){
      result = [item.advertiser_name, item.notary_license_number, item.advertiser_address].join(' ');
      if(!!item.advertiser_tel){
        result += ' [TEL] ' + item.advertiser_tel;
      }
    }
    return result
  }

  stations = (item) => {
    return item.stations.map((s) => {
      return <div>{i18n.t('message.access_detail', {
        line_name: s.line_name,
        name: s.name,
        minutes_to_walk: s.minutes_to_walk
      })}</div>
    })
  };

  stations_with_access = (item) => {
    let access_text = [];
    if (item.stations.length !== 0){
      access_text.push(this.stations(item));
    }
    access_text.push(item.access);
    return access_text != "" ? access_text : null
  };

  // Display "building area" when the building type is 'house'.
  size_label = (item) => {
        let label = '';
        if (item.building.building_type_raw == "house") {
            label = i18n.t('label.building_size');
        } else {
            label = i18n.t('label.size');
        }
        label += (item.area_measurement_method ? `(${item.area_measurement_method})` : '');
        return label;
  };

  // Returns mode price value
  mode_price = (item) => {
      if (item.mode_prices && item.mode_prices.length !== 0) {
          return item.mode_prices.map(x => x.text).join(' · ');
      } else {
          // If project-type located in Japan, returns " - "
          return (item.type == "project" && item.building.country_code == "JPN") ? " - " : null;
      }
  };

  size_value = (item) => {
      return (
          <div>
              <MultiValue min={item.square_meter || item.square_meter_min} max={item.square_meter_max} suffix="sqm(㎡)" emptyLabel={i18n.t('message.unknown')}/>
              <span> / </span>
              <MultiValue min={item.square_feet || item.square_feet_min} max={item.square_feet_max} suffix="sqf" emptyLabel={i18n.t('message.unknown')}/>
          </div>
      )
  };

  site_area = (item) => {
      if (item.building.building_type_raw == "house") {
          if (item.site_area_min_sqm || item.site_area_max_sqm) {
              return (
                  <div>
                      <MultiValue min={item.site_area_min_sqm} max={item.site_area_max_sqm} suffix="sqm(㎡)" emptyLabel={i18n.t('message.unknown')}/>
                      <span> / </span>
                      <MultiValue min={item.site_area_min_sqft} max={item.site_area_max_sqft} suffix="sqf" emptyLabel={i18n.t('message.unknown')}/>
                  </div>
              )
          } else {
              return null;
          }
      } else {
          let site_area = (item.site_area_sqm ?  `${item.site_area_sqm} sqm(㎡)` : '');
          site_area += ' / ';
          site_area += (item.site_area_sqft ?  `${item.site_area_sqft} sqf` : '');
          return site_area == ' / ' ? null : site_area;
      }
  };

  management_fee = (item) => {
      let management_fee_present = item.management_fee_formatted || item.management_fee_min_formatted || item.management_fee_max_formatted;
      if (item.building.building_type_raw == "house" && !management_fee_present) {
          return null;
      } else {
          return (
              <MultiValue min={item.management_fee_formatted || item.management_fee_min_formatted}
                          max={item.management_fee_max_formatted} emptyLabel={i18n.t('message.unknown')}/>
          )
      }
  };

  maintenance_fee = (item) => {
      let maintenance_fee_present = item.maintenance_fee_formatted || item.maintenance_fee_min_formatted || item.maintenance_fee_max_formatted;
      if (item.building.building_type_raw == "house" && !maintenance_fee_present) {
          return null;
      } else {
          return (
              <MultiValue min={item.maintenance_fee_formatted || item.maintenance_fee_min_formatted}
                          max={item.maintenance_fee_max_formatted} emptyLabel={i18n.t('message.unknown')}/>
          )
      }
  };

  parking_fee = (item) => {
      let parking_fee_present = item.parking_fee_formatted || item.parking_fee_min_formatted || item.parking_fee_max_formatted;
      if (item.building.building_type_raw == "house" && !parking_fee_present) {
          return null;
      } else {
          return (
              <MultiValue min={item.parking_fee_formatted || item.parking_fee_min_formatted}
                          max={item.parking_fee_max_formatted} emptyLabel={i18n.t('message.unknown')}/>
          )
      }
  };

  render() {
    const {item} = this.props;
    return (
      <table className="table table-style-1">
        <tbody>
          {[
            {label: i18n.t('label.property_type'), value:
              `${i18n.t(`label.${item.building.building_type_raw}`)}${item.building.building_type_detail ? ` (${item.building.building_type_detail})` :''}`
            },
            {
                label: i18n.t('label.access'),
                value: this.stations_with_access(item)
            },
            {label: i18n.t('label.number_of_story'), value: <span>
              {item.building.number_of_floors ? i18n.t('label.total_floors', {total_floors: item.building.number_of_floors}) : null}
              {item.building.basement_floors ? i18n.t('label.basement_floors', {basement_floors: item.building.basement_floors}) : null}
              </span>},
            {label: i18n.t('label.constructed_at'),
             value: !!item.building.constructed_at_display ? item.building.constructed_at_display :
                    utils.generate_constructed_at(item.building.constructed_at)
            },
            {label: i18n.t('label.number_of_units'), value: item.building.number_of_units },
            // {label: i18n.t('label.official_price'), value:
            //   <MultiValue
            //     prefix={item.currency_code + ' '}
            //     min={item.price_formatted || item.price_min_formatted}
            //     max={item.price_max_formatted}
            //     emptyLabel={ i18n.t('label.not_determined')}/>
            // },
            {label: i18n.t('label.immediate_move_in'), value: item.immediate_move_in ? i18n.t('message.present') : i18n.t('message.absent')},
            {label: i18n.t('label.expected_move_in'), value: item.immediate_move_in ? '-' :
                item.expected_move_in.year ? i18n.t('formats.date1',{year: item.expected_move_in.year,
                    month: i18n.t(`month_names.${Number(item.expected_move_in.month)}`),
                    date: item.expected_move_in.period ? i18n.t(`season_names.${item.expected_move_in.period}`) : ''}) :
                i18n.t('label.negotiable')},
            {label: i18n.t('label.seller'), value: !!item.newly_built ? item.seller.map((s, i)=> i === 0 ? s.name : ", " + s.name ) : null},
            // {label: i18n.t('label.constructor'), value: item.constructor.join(', ') },
            {label: i18n.t('label.management'), value: item.management.join(', ')},
            {
                label: this.size_label(item),
                value: this.size_value(item)
            },
            // {
            //     label: `${i18n.t('label.maintenance_fee')}(${item.currency_code})`,
            //     value: this.management_fee(item)
            // },
            // {
            //     label: `${i18n.t('label.repair_fee')}(${item.currency_code})`,
            //     value: this.maintenance_fee(item)
            // },
            // {
            //     label: `${i18n.t('label.parking_fee')}(${item.currency_code})`,
            //     value: this.parking_fee(item)
            // },
            // {label: i18n.t('label.yield_rate'), value:
            //   <MultiValue min={item.yield_rate || item.yield_rate_min} max={item.yield_rate_max} suffix="%" emptyLabel={i18n.t('message.unknown_yield_rate')}/>
            // },
            {label: i18n.t('label.land_rights'), value: item.ownership},
            // {label: i18n.t('label.foundation') ,value: item.building.foundation},
            // {label: i18n.t('label.type_of_agreement') ,value: item.type_of_agreement},
            // {label: i18n.t('label.organizer_name') ,value: item.organizer_name},
            // {label: i18n.t('label.units_for_sell') ,value: item.units_for_sell},
            // {
            //     label: i18n.t('label.site_area'),
            //     value: this.site_area(item)
            // },
            // {label: i18n.t('label.has_management_association') ,value: ((v) => {
            //   if(v === null){return  null} // 未設定(null)の場合があるのでその時は表示時しない
            //   else if(v){return i18n.t('message.present')}
            //   else {return i18n.t('message.absent')}
            // })(item.has_management_association)},
            // {label: i18n.t('label.management_operation') ,value: item.management_operation},
            // {label: i18n.t('label.management_situation') ,value: item.management_situation},
            // {label: i18n.t('label.construction_confirmation_number') ,value: item.construction_confirmation_number},
            // {label: i18n.t('label.zoning') ,value: item.zoning},
            // {
            //   label: i18n.t('label.mode_price'),
            //   value: this.mode_price(item)
            // },
            // {label: i18n.t('label.other_fees') ,value: item.other_costs && item.other_costs.length !== 0 ? item.other_costs.map((x, i) => {
            //   return <span>{i !== 0 ? ' · ' : ''}{x.cost_name} {x.remarks ? `(${x.remarks}) ` : '' }<MultiValue min={x.cost_min_formatted} max={x.cost_max_formatted} prefix={item.currency_code} emptyLabel={i18n.t('label.not_determined')}/></span>
            // }) : null},
            // {
            //   label: i18n.t('label.building_coverage_ratio'),
            //   value: item.building.building_coverage_ratio ? item.building.building_coverage_ratio + "%" : null
            // },
            // {
            //   label: i18n.t('label.floor_area_ratio'),
            //   value: item.building.floor_area_ratio ? item.building.floor_area_ratio + "%" : null
            // },
            // {label: i18n.t('label.company_information_source') ,value: item.info_source ? <p className="value" dangerouslySetInnerHTML={{__html: item.info_source}}></p> : null},
            // {label: i18n.t('label.company_information_advertisement') ,value: this.generate_company_information_advertisement(item)},
            // {label: i18n.t('label.company_information_organizer') ,value: item.organizer_name},
            // {label: i18n.t('label.affiliated_organization_name') ,value: item.affiliated_organization_name},
          ].filter(v => v.value).map((v, index)=> {
            return (
              <tr key={index}>
                <th className="text-nowrap w-30 fw-3 fz-xs" dangerouslySetInnerHTML={{__html: v.label}}></th>
                <td className="fz-xs">{v.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}
