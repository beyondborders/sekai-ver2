import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

import { notFound, redirect } from 'next/navigation';
import SearchIndex from "@/components/Search/SearchIndex";

const getPosts = async (type, currentPage, countryCode) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: {
        "category_eq": type,
        "countries_country_code_eq": countryCode
      },
      page: currentPage,
      page_count: "15"
    }),
    cache: 'no-store'
  });
  if (data.status !== 200) {
    console.log(data.status)
    notFound();
  }
  const posts = await data.json()
  return posts
}

const getProjects = async () => {
  // const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/projects/search`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     q: {
  //       "category_eq": type,
  //       "countries_country_code_eq": countryCode
  //     },
  //     page: currentPage,
  //     page_count: "15"
  //   }),
  //   cache: 'no-store'
  // });
  // if (data.status !== 200) {
  //   console.log(data.status)
  //   notFound();
  // }
  // const projects = await data.json()
  // return projects

  const projects = {
    "projects": [
      {
        id: 1111,
        type: "projects",
        name: "ザ・リッツ・カールトンレジデンス（The Ritz-Carlton Residences）",
        building_type: "house",
        constructed_at: "2017年",
        number_of_bedrooms: "1 ~ 5 ベッドルーム",
        square_meter: "95.04 ~ 398.0 ㎡",
        "building": {
          country: "ベトナム",
          country_en: "vietnam",
          prefecture: "クアンナム",
          prefecture_en: "quảng-nam",
          city: "ホイアン",
          city_en: "hoi-an",
          latitude: 3.14683773627558,
          longitude: 101.71537671630858,

          number_of_floors: "地上48階建て",
          number_of_units: "288",
          
          

        },
        image_url: [
          "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/RCR_room_1200.png",
          "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz1.png",
          "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz2.jpg",
          "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz3.png",
          "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz4.jpg",
          "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz5.jpg",
        ],
        price: "8,238万円 ~ 3億8,940万円",
        immediate_move_in: true,
        expected_move_in: {
          year: "2026",
          month: "1",
          period: "end"
        },
        ownership: "所有権",
        management: "ザ・リッツカールトン（The Ritz-Carlton）",
        video_url: "https://youtu.be/Iskjd26hdpg",
        description: "ザ・リッツカールトン レジデンス（The Ritz-Carlton residences）はマレーシア初のリッツカールトンレジデンスであり、総階数48階、総戸数288戸からなる。クアラルンプール市内中心部（KLCC）に位置し、有名なペトロナスツインタワーまでは約5分である。本物件はベルジャヤセントラルパーク（Berjaya Central Park）にある高層ビルの1つとしてそびえ立ち、1,023スクエアフィートから2,605スクエアフィートのユニットと、45～48階部分に位置する2,605スクエアフィートから4,284スクエアフィートのペンションがある。世界的に有名なリッツカールトンブランドと同じ開発基準であり、豪華なデザインが施された本物件は他都市よりも高い生活水準が期待できる。卓越したサービスと住人のニーズに合わせた思いやりのある物件は類を見ないと自信をもっておすすめする。本物件の9階部分にはインフィニティプール、テニスコート、スパ、ジム、レジデンスクラブラウンジ、子供用スタジオ、プライベートイベント用のオープンテラスガーデンなど様々な施設が完備されている。他にも、24時間のコンシェルジュサービス、ハウスキーピングサービス、空き在宅におけるケアマネジメント、イベントサービスなどの個別サービスもあり、アメニティやサービスが充実していることが魅力の1つである。\r\n本物件はKLCCに位置し、利便性がとても高い。徒歩圏内には、高級ショッピング街、インターナショナルスクール、医療機関、レストラン、ビジネス街、世界的に有名な観光スポットなどがあり、簡単にアクセス可能である。また、市内唯一の熱帯雨林保護区であるブキッ・ナナス森林保護区（Bukit Nanas Forest Reserve）に隣接していることも特長である。本物件からザ・KLブキッ・ナナスモノレール駅（The KL Bukit Nanas Monorail Station）までは徒歩約1分であり、他にもLRTのダンワンギ駅（Dang Wangi LRT Station）が徒歩6分圏内に位置している。そのため、周囲のショッピングモールやレストランに簡単に行くことができ、とても利便性の高い場所である。\r\n本物件はペトロナスツインタワーから約5分の場所に位置し、市内中心部にある様々な場所にアクセス可能である。スリアKLCC（Suria KLCC）、アベニューK（Avenue K）、パビリオン（Pavilion）などのショッピングモールが徒歩圏内に位置し、他にもインターナショナルスクール、医療機関、商業施設が約2㎞圏内にある。モノレール駅にも近隣しているため、空港をはじめ、あらゆる場所に簡単にアクセス可能であることも魅力である。",
      }
    ],
    "_links": {
      "current_page": 1,
      "total_pages": 18,
      "page_count": 10,
      "total_count": 174
    }
  }

  return projects;
};

const translationLabel = {
  "united-states": "アメリカ",
  "united-arab-emirates": "アラブ首長国連邦",
  "australia": "オーストラリア",
  "cambodia": "カンボジア",
  "thailand": "タイ",
  "philippines": "フィリピン",
  "vietnam": "ベトナム",
  "malaysia": "マレーシア",
  "mongolia": "モンゴル",
  "japan": "日本",
  "hong-kong": "香港",

  "condominium": "コンドミニアム",
  "house": "一戸建て",
  "whole_building": "一棟",
  "store_office": "区分店舗・事務所",
  "land": "土地",

  "california": "カリフォルニア",
  "florida": "フロリダ",
  "hawaii": "ハワイ",
  "tennessee": "テネシー",
  "abu-dhabi": "アブダビ",
  "dubai": "ドバイ",
  "queensland": "Queensland",
  "western-australia": "Western Australia",
  "chamkarmorn": "チャムカモーン",
  "phnom-penh": "プノンペン",
  "siem-reap": "シェムリアップ",
  "singapore": "シンガポール",
  "bangkok": "バンコク",
  "chanthaburi": "チャンタブリー",
  "chiang-mai": "チェンマイ",
  "chon-buri": "チョンブリー",
  "krabi": "クラビ",
  "nakhon-ratchasima": "ナコーン ラチャシーマー",
  "nonthaburi": "ノンタブリー",
  "phetchaburi": "ペッチャブリー",
  "phuket": "プーケット",
  "prachuap-khiri-khan": "プラチュワップキーリーカン",
  "rayong": "ラヨーン ",
  "samut-prakan": "サムットプラーカーン",
  "surat-thani": "スラーターニー",
  "bataan": "バターン",
  "batangas": "バタンガス",
  "boracay": "ボラカイ",
  "bulacan": "ブラカン",
  "cabanatuan-city": "カバナチュアン",
  "cavite": "カヴィテ",
  "cebu": "セブ",
  "davao-del-sur": "南ダバオ",
  "iloilo": "イロイロ市",
  "laguna": "ラグナ",
  "manila": "マニラ",
  "metro-manila": "Metro Manila",
  "mindanao": "ミンダナオ",
  "negros-occidental": "西ネグロス",
  "pampanga": "パンパンガ",
  "pangasinan": "パンガシナン",
  "parañaque-city": "パラニャーケ",
  "pasig-city": "パシッグ",
  "quezon-city": "ケソン",
  "taguig": "タギッグ",
  "tarlac": "タルラック",
  "bà-rịa-vũng-tàu": "バリア＝ブンタウ",
  "bắc-giang": "バクザン",
  "bắc-ninh": "バクニン",
  "bến-tre": "ベンチェ",
  "bình-dương": "ビンズオン",
  "bình-Định": "ビンディン",
  "bình-thuận": "ビントゥアン",
  "cà-mau": "カマウ",
  "cần-thơ": "カントー",
  "da-nang": "ダナン",
  "Đắk-lắk": "ダクラク",
  "Đồng-nai": "ドンナイ",
  "gia-lai": "ザライ",
  "hải-dương": "ハイズオン",
  "hải-phòng-city": "ハイフォン",
  "hanoi": "ハノイ",
  "ho-chi-minh-city": "ホーチミン",
  "hòa-bình": "ホアビン",
  "hưng-yên": "フンイエン",
  "khánh-hòa": "カインホア",
  "kiên-giang": "キエンザン",
  "kon-tum": "コントゥム",
  "lai-châu": "ライチャウ",
  "lâm-Đồng": "ラムドン",
  "lạng-sơn": "ランソン",
  "lào-cai": "ラオカイ",
  "long-an": "ロンアン",
  "nghệ-an": "ゲアン",
  "phú-yên": "フーイエン",
  "quảng-nam": "クアンナム",
  "quang-ngai": "クアンガイ",
  "quảng-ninh": "クアンニン",
  "sóc-trăng": "ソクチャン",
  "thái-bình": "タイビン",
  "thanh-hóa": "タインホア",
  "thừa-thiên-huế": "トゥアティエン＝フエ",
  "trà-vinh": "チャーヴィン",
  "vĩnh-long": "ヴィンロン",
  "vĩnh-phúc": "ヴィンフック",
  "yên-bái": " イエンバイ",
  "johor": "ジョホール",
  "kedah": "ケダ",
  "kelantan": "クランタン",
  "kuala-lumpur": "クアラルンプール",
  "langkawi": "ランカウイ",
  "malacca": "ムラカ",
  "negeri-sembilan": "ヌグリ・スンビラン",
  "pahang": "パハン",
  "penang": "ペナン",
  "perak": "ペラ",
  "perlis": "プルリス",
  "sabah": "サバ",
  "sarawak": "サラワク",
  "selangor,": "セランゴール",
  "terengganu": "トレンガヌ",
  "ulaanbaatar": " ウランバートル",
}

export default async function ArticleDetails({ params, searchParams }) {
  //[malaysia, kuala]
  console.log(params.slugs)

  let validURL = true
  const allowedCountry = [
    "united-states",
    "united-arab-emirates",
    "australia",
    "cambodia",
    "thailand",
    "philippines",
    "vietnam",
    "malaysia",
    "mongolia",
    "japan",
    "hong-kong"
  ]

  const allowedBuildingType = [
    "condominium",
    "house",
    "whole_building",
    "store_office",
    "land"
  ]
  if (!!params.slugs) {
    if (allowedCountry.indexOf(params.slugs[0]) == -1) {
      if (allowedBuildingType.indexOf(params.slugs[0]) == -1) {
        console.log("aaaaa")
        validURL = false
      }
    }
    // if (!validURL) {
    //   redirect("/search")
    // }
  }

  const projects = await getProjects()

  const renderBreadcrumb = () => {
    let breadcrumb = []
    let url = ""
    params?.slugs?.map((slug) => {
      if (!!translationLabel[slug]) {
        url += `/${slug}`
        breadcrumb.push(<span className="mx-1">/</span>)
        breadcrumb.push(<Link href={url}>{translationLabel[slug]}</Link>)
      }
    })

    return (
      breadcrumb
    )
  }

  const baseURL = () => {
    let res = "/search"
    params?.slugs?.map((slug, index) => {
      res += `/${slug}`
    })
    return res
  }

  return (
    <section>
      <div className="container py-4">
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          {
            renderBreadcrumb()
          }
        </div>
        <div className="mt-4">
          <Link href={`/contact-ja`}>
            <Image
              src={"https://s3-ap-northeast-1.amazonaws.com/sekai-property-assets/images/banner/contact-banner.jpeg"}
              width={1200}
              height={352}
            />
          </Link>
        </div>
        <div className="mt-4">
          <div className={styles.bgGray}>
            56031件の不動産物件が該当しました。
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex align-items-center">
            <div className="font-weight-bold">並び替え</div>
            <div className={styles.selectContainer}>
              <select className="form-control">
                <option value="">指定なし</option>
                <option value="&sort_key=width&order=desc">面積の広い順</option>
                <option value="&sort_key=width&order=asc">面積の狭い順</option>
                <option value="&sort_key=bedrooms&order=desc">ベッドルームの多い順</option>
                <option value="&sort_key=bedrooms&order=asc">ベッドルームの少ない順</option>
                <option value="&sort_key=price&order=desc">金額が低い順</option>
                <option value="&sort_key=price&order=asc">金額が高い順</option>
                <option value="&sort_key=yield_rate&order=desc">想定利回りの高い順</option>
                <option value="&sort_key=yield_rate&order=asc">想定利回りの低い順</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>{params.slug}</div>
      <div>{!validURL && "invalid url"}</div>

      <SearchIndex
        projects={projects}
        paginationBaseURL={baseURL()}
      />
    </section>
  )
}