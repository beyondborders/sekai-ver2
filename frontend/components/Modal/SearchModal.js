"use client"

import { useState } from "react"
import styles from "./SearchModal.module.scss"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SearchModal(props) {
  const { open, close } = props

  const router = useRouter()
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [buildingType, setBuildingType] = useState("")
  const [bedroomNo, setBedroomsNo] = useState("")
  const [priceMin, setPriceMin] = useState("")
  const [priceMax, setPriceMax] = useState("")
  const [widthMin, setWidthMin] = useState("")
  const [widthMax, setWidthMax] = useState("")
  const [yieldMin, setYieldMin] = useState("")
  const [yieldMax, setYieldMax] = useState("")
  const [keyword, setKeyword] = useState("")
  const cityList = {
    "united-states": [
      { label: "カリフォルニア", value: "california" },
      { label: "フロリダ", value: "florida" },
      { label: "ハワイ", value: "hawaii" },
      { label: "テネシー", value: "tennessee" },
    ],
    "united-arab-emirates": [
      { label: "アブダビ", value: "abu-dhabi" },
      { label: "ドバイ", value: "dubai" },
    ],
    "australia": [
      { label: "Queensland", value: "queensland" },
      { label: "Western Australia", value: "western-australia" },
    ],
    "cambodia": [
      { label: "チャムカモーン", value: "chamkarmorn" },
      { label: "プノンペン", value: "phnom-penh" },
      { label: "シェムリアップ", value: "siem-reap" },
    ],
    "singapore": [
      { label: "シンガポール", value: "singapore" },
    ],
    "thailand": [
      { label: "バンコク", value: "bangkok" },
      { label: "チャンタブリー", value: "chanthaburi" },
      { label: "チェンマイ", value: "chiang-mai" },
      { label: "チョンブリー", value: "chon-buri" },
      { label: "クラビ", value: "krabi" },
      { label: "ナコーン ラチャシーマー", value: "nakhon-ratchasima" },
      { label: "ノンタブリー", value: "nonthaburi" },
      { label: "ペッチャブリー", value: "phetchaburi" },
      { label: "プーケット", value: "phuket" },
      { label: "プラチュワップキーリーカン", value: "prachuap-khiri-khan" },
      { label: "ラヨーン ", value: "rayong" },
      { label: "サムットプラーカーン", value: "samut-prakan" },
      { label: "スラーターニー", value: "surat-thani" }
    ],
    "philippines": [
      { label: "バターン", value: "bataan" },
      { label: "バタンガス", value: "batangas" },
      { label: "ボラカイ", value: "boracay" },
      { label: "ブラカン", value: "bulacan" },
      { label: "カバナチュアン", value: "cabanatuan-city" },
      { label: "カヴィテ", value: "cavite" },
      { label: "セブ", value: "cebu" },
      { label: "南ダバオ", value: "davao-del-sur" },
      { label: "イロイロ市", value: "iloilo" },
      { label: "ラグナ", value: "laguna" },
      { label: "マニラ", value: "manila" },
      { label: "Metro Manila", value: "metro-manila" },
      { label: "ミンダナオ", value: "mindanao" },
      { label: "西ネグロス", value: "negros-occidental" },
      { label: "パンパンガ", value: "pampanga" },
      { label: "パンガシナン", value: "pangasinan" },
      { label: "パラニャーケ", value: "parañaque-city" },
      { label: "パシッグ", value: "pasig-city" },
      { label: "ケソン", value: "quezon-city" },
      { label: "タギッグ", value: "taguig" },
      { label: "タルラック", value: "tarlac" },
    ],
    "vietnam": [
      { label: "バリア＝ブンタウ", value: "bà-rịa-vũng-tàu" },
      { label: "バクザン", value: "bắc-giang" },
      { label: "バクニン", value: "bắc-ninh" },
      { label: "ベンチェ", value: "bến-tre" },
      { label: "ビンズオン", value: "bình-dương" },
      { label: "ビンディン", value: "bình-Định" },
      { label: "ビントゥアン", value: "bình-thuận" },
      { label: "カマウ", value: "cà-mau" },
      { label: "カントー", value: "cần-thơ" },
      { label: "ダナン", value: "da-nang" },
      { label: "ダクラク", value: "Đắk-lắk" },
      { label: "ドンナイ", value: "Đồng-nai" },
      { label: "ザライ", value: "gia-lai" },
      { label: "ハイズオン", value: "hải-dương" },
      { label: "ハイフォン", value: "hải-phòng-city" },
      { label: "ハノイ", value: "hanoi" },
      { label: "ホーチミン", value: "ho-chi-minh-city" },
      { label: "ホアビン", value: "hòa-bình" },
      { label: "フンイエン", value: "hưng-yên" },
      { label: "カインホア", value: "khánh-hòa" },
      { label: "キエンザン", value: "kiên-giang" },
      { label: "コントゥム", value: "kon-tum" },
      { label: "ライチャウ", value: "lai-châu" },
      { label: "ラムドン", value: "lâm-Đồng" },
      { label: "ランソン", value: "lạng-sơn" },
      { label: "ラオカイ", value: "lào-cai" },
      { label: "ロンアン", value: "long-an" },
      { label: "ゲアン", value: "nghệ-an" },
      { label: "フーイエン", value: "phú-yên" },
      { label: "クアンナム", value: "quảng-nam" },
      { label: "クアンガイ", value: "quang-ngai" },
      { label: "クアンニン", value: "quảng-ninh" },
      { label: "ソクチャン", value: "sóc-trăng" },
      { label: "タイビン", value: "thái-bình" },
      { label: "タインホア", value: "thanh-hóa" },
      { label: "トゥアティエン＝フエ", value: "thừa-thiên-huế" },
      { label: "チャーヴィン", value: "trà-vinh" },
      { label: "ヴィンロン", value: "vĩnh-long" },
      { label: "ヴィンフック", value: "vĩnh-phúc" },
      { label: " イエンバイ", value: "yên-bái" },
    ],
    "malaysia": [
      { "id": 49, label: "ジョホール", value: "johor" },
      { "id": 95, label: "ケダ", value: "kedah" },
      { "id": 91, label: "クランタン", value: "kelantan" },
      { "id": 55, label: "クアラルンプール", value: "kuala-lumpur" },
      { "id": 291, label: "ランカウイ", value: "langkawi" },
      { "id": 97, label: "ムラカ", value: "malacca" },
      { "id": 98, label: "ヌグリ・スンビラン", value: "negeri-sembilan" },
      { "id": 99, label: "パハン", value: "pahang" },
      { "id": 48, label: "ペナン", value: "penang" },
      { "id": 100, label: "ペラ", value: "perak" },
      { "id": 86, label: "プルリス", value: "perlis" },
      { "id": 92, label: "サバ", value: "sabah" },
      { "id": 93, label: "サラワク", value: "sarawak" },
      { "id": 80, label: "セランゴール", value: "selangor," },
      { "id": 90, label: "トレンガヌ", value: "terengganu" },
    ],
    "mongolia": [
      { label: " ウランバートル", value: "ulaanbaatar" },
    ],
  }

  const renderCityOptions = () => {
    let options = [{ label: "都市名", value: "" }]
    if (cityList[country]) {
      options = options.concat(cityList[country])
    }
    return options.map((option) => {
      return <option key={option.value} value={option.value}>{option.label}</option>
    })
  }

  const handleSearch = () => {
    let searchURL = "/search"
    if (!!country) {
      searchURL += `/${country}`
      setCountry("")
    }
    if (!!city) {
      searchURL += `/${city}`
      setCity("")
    }
    if (!!buildingType) {
      searchURL += `/${buildingType}`
      setBuildingType("")
    }
    if (!!bedroomNo || !!priceMin || !!priceMax || !!widthMin || !!widthMax || !!yieldMin || !!yieldMax || keyword) {
      searchURL += `?`
      if (!!keyword) {
        searchURL += `q=${keyword}&`
        setKeyword("")
      }
      if (!!bedroomNo) {
        searchURL += `bedrooms=${bedroomNo}&`
        setBedroomsNo("")
      }
      if (!!priceMin) {
        searchURL += `price_min=${priceMin}&`
        setPriceMin("")
      }
      if (!!priceMax) {
        searchURL += `price_max=${priceMax}&`
        setPriceMax("")
      }
      if (!!widthMin) {
        searchURL += `width_min=${widthMin}&`
        setWidthMin("")
      }
      if (!!widthMax) {
        searchURL += `width_max=${widthMax}&`
        setWidthMax("")
      }
      if (!!yieldMin) {
        searchURL += `yield_rate_min=${yieldMin}&`
        setYieldMin("")
      }
      if (!!yieldMax) {
        searchURL += `yield_rate_max=${yieldMax}&`
        setYieldMax("")
      }
      searchURL = searchURL.substring(0, searchURL.length - 1)
    }
    close();
    router.push(searchURL)
  }


  return (
    !!open &&
    <div className={styles.searchModal}>
      <div className="container">
        <div className={styles.searchModalStart}>
          <div className={styles.modalRow}>
            <div className="row align-items-center">

              <div className={styles.modalItemTitle}>エリア</div>

              <div className={`${styles.selectContainerBig} mt-1 mt-lg-0`}>
                <select className="form-control" name="country"
                  onChange={(e) => { setCountry(e.target.value); setCity("") }}>
                  <option value="">国名</option>
                  <option value="united-states">アメリカ</option>
                  <option value="united-arab-emirates">アラブ首長国連邦</option>
                  <option value="australia">オーストラリア</option>
                  <option value="cambodia">カンボジア</option>
                  <option value="singapore">シンガポール</option>
                  <option value="thailand">タイ</option>
                  <option value="philippines">フィリピン</option>
                  <option value="vietnam">ベトナム</option>
                  <option value="malaysia">マレーシア</option>
                  <option value="mongolia">モンゴル</option>
                  <option value="japan">日本</option>
                  <option value="hong-kong">香港</option>
                </select>
              </div>
              <div className={`${styles.selectContainerBig} mt-2 mt-lg-0`}>
                <select className="form-control" name="city" onChange={(e) => { setCity(e.target.value) }}>
                  {renderCityOptions()}
                </select>
              </div>
            </div>
            <div className="align-items-center d-flex">
              <div className={styles.modalItemTitle}></div>
              <Link href="/search/malaysia" className="color-main m-2 m-lg-3">マレーシア</Link>
              <Link href="/search/cambodia" className="color-main m-2 m-lg-3">カンボジア</Link>
              <Link href="/search/thailand" className="color-main m-2 m-lg-3">タイ</Link>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className="row align-items-center">
              <div className={styles.modalItemTitle}>建物タイプ</div>
              <div className={`${styles.selectContainerBig} mt-1 mt-lg-0`}>
                <select className="form-control rounded-0" name="building_type" onChange={(e) => { setBuildingType(e.target.value) }}>
                  <option value="">全て</option>
                  <option value="condominium">コンドミニアム</option>
                  <option value="house">一戸建て</option>
                  <option value="whole_building">一棟</option>
                  <option value="store_office">区分店舗・事務所</option>
                  <option value="land">土地</option>
                </select>
              </div>

              <div className={styles.adjustmentGap}></div>
              <div className={`${styles.modalItemTitle} mt-3 mt-lg-0`}>ベッドルーム数</div>
              <div className={`${styles.selectContainerBig} mt-1 mt-lg-0`}>
                <select className="form-control rounded-0" name="bedroom_no" onChange={(e) => { setBedroomsNo(e.target.value) }}>
                  <option value="">指定なし</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className="align-items-center d-block d-lg-flex">
              <div className={styles.modalItemTitle}>価格帯</div>
              <div className="d-flex align-items-center mt-1 mt-lg-0">
                <div className={styles.selectContainer}>
                  <select className="form-control rounded-0" name="price_min" onChange={(e) => { setPriceMin(e.target.value) }}>
                    <option value="">下限なし</option>
                    <option value="5000000">5,000,000</option>
                    <option value="10000000">10,000,000</option>
                    <option value="20000000">20,000,000</option>
                    <option value="30000000">30,000,000</option>
                    <option value="40000000">40,000,000</option>
                    <option value="50000000">50,000,000</option>
                    <option value="60000000">60,000,000</option>
                    <option value="70000000">70,000,000</option>
                    <option value="80000000">80,000,000</option>
                    <option value="90000000">90,000,000</option>
                  </select>
                </div>
                <div className={styles.adjustmentGap}>〜</div>
                <div className={styles.selectContainer}>
                  <select className="form-control rounded-0" name="price_max" onChange={(e) => { setPriceMax(e.target.value) }}>
                    <option value="">上限なし</option>
                    <option value="10000000">10,000,000</option>
                    <option value="20000000">20,000,000</option>
                    <option value="30000000">30,000,000</option>
                    <option value="40000000">40,000,000</option>
                    <option value="50000000">50,000,000</option>
                    <option value="60000000">60,000,000</option>
                    <option value="70000000">70,000,000</option>
                    <option value="80000000">80,000,000</option>
                    <option value="90000000">90,000,000</option>
                    <option value="1000000000">1,000,000,000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className="align-items-center d-block d-lg-flex">
              <div className={styles.modalItemTitle}>専有面積</div>
              <div className="d-flex align-items-center mt-1 mt-lg-0">
                <div className={styles.selectContainer}>
                  <select className="form-control rounded-0" name="width_min" onChange={(e) => { setWidthMin(e.target.value) }}>
                    <option value="">下限なし</option>
                    <option value="">0</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="250">250</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="4000">4000</option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                  </select>
                </div>
                <div className={styles.adjustmentGap}>〜</div>
                <div className={styles.selectContainer}>
                  <select className="form-control rounded-0" name="width_max" onChange={(e) => { setWidthMax(e.target.value) }}>
                    <option value="">上限なし</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="250">250</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                    <option value="3000">3000</option>
                    <option value="4000">4000</option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className="align-items-center d-block d-lg-flex">
              <div className={styles.modalItemTitle}>想定利回り</div>
              <div className="d-flex align-items-center mt-1 mt-lg-0">
                <div className={styles.selectContainer}>
                  <select className="form-control rounded-0" name="yield_rate_min" onChange={(e) => { setYieldMin(e.target.value) }}>
                    <option value="">下限なし</option>
                    <option value="">0%</option>
                    <option value="5">5%</option>
                    <option value="8">8%</option>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                    <option value="50">50%</option>
                    <option value="60">60%</option>
                    <option value="70">70%</option>
                    <option value="80">80%</option>
                    <option value="90">90%</option>
                    <option value="100">100%</option>
                  </select>
                </div>
                <div className={styles.adjustmentGap}>〜</div>
                <div className={styles.selectContainer}>
                  <select className="form-control rounded-0" name="yield_rate_max" onChange={(e) => { setYieldMax(e.target.value) }}>
                    <option value="-1">上限なし</option>
                    <option value="5">5%</option>
                    <option value="8">8%</option>
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                    <option value="50">50%</option>
                    <option value="60">60%</option>
                    <option value="70">70%</option>
                    <option value="80">80%</option>
                    <option value="90">90%</option>
                    <option value="100">100%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className="row align-items-center">
              <div className={styles.modalItemTitle}>フリーワード</div>
              <div className={styles.selectContainerBig}>
                <input className={"form-control"} onChange={(e) => { setKeyword(e.target.value) }}></input>
              </div>
            </div>
          </div>

          <div className={styles.modalRow}>
            <div className={`${styles.blueButtonContainer}`}>
              <div className="my-3 btn-shadow-blue" onClick={() => { handleSearch() }}>自分に合った物件の提案を受ける</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
