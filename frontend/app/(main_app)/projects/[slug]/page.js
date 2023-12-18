import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts/Index";
import { notFound } from 'next/navigation';
import ProjectDetails from "@/components/Projects/ProjectDetails";

const getProject = async (slug) => {
  // const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/projects/${slug}`, { cache: 'no-store' });
  // if (data.status !== 200) {
  //   notFound();
  // }
  // const project = data.json()
  // return project

  const project = {
    "project": {
      "building":{
        country: "ベトナム",
        country_en: "vietnam",
        prefecture: "クアンナム",
        prefecture_en: "quảng-nam",
        city: "ホイアン",
        city_en: "hoi-an",
        latitude: 3.14683773627558,
        longitude: 101.71537671630858,
        building_type_raw: "house",
        name: "ザ・リッツ・カールトンレジデンス（The Ritz-Carlton Residences）",
        address: "マレーシア クアラルンプール 連邦領 Kuala Lumpur City Centre Jalan Ampang 168, Jalan Imbi, Bukit Bintang",
        number_of_floors: "地上48階建て",
        number_of_units: "288",
        number_of_bedrooms: "1 ~ 5 ベッドルーム",
        square_meter: "95.04 ~ 398.0 ㎡",
        constructed_at: "2017年",
        
      },
      image_url: "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/RCR_room_1200.png;https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz1.png;https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz2.jpg;https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz3.png;https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz4.jpg;https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ritz5.jpg",
      price: "8,238万円 ~ 3億8,940万円",
      immediate_move_in: true,
      expected_move_in: "-",
      ownership: "所有権",
      management: "ザ・リッツカールトン（The Ritz-Carlton）",
      video_url: "https://youtu.be/Iskjd26hdpg",
      seller: {
        name: "ワンサティガップ",
        image_url: "https://sekai-property-developer-image.s3-ap-northeast-1.amazonaws.com/288/9a429f34-085c-4ad1-b02f-bd5515339db5.jpg",
        description: "ワンサティガップ（Wangsa Tegap Sdn Bhd）はベルジャヤコーポレーション（Berjaya Corporation）の子会社である。創業者であるタンスリ・ダトセリ・ヴィンセントタン氏（Tan Sri Dato' Seri Vincent Tan）の下、ベルジャヤコーポレーションは大企業かつ多様化企業へと成長している。当社は商業施設開発、管理、コンシューママーケティング、旅行業、ホテル・リゾート業、不動産開発など様々な事業に取り組んでいる。ベルジャヤコーポレーションの100％子会社であるベルジャヤラン バーハッド（Berjaya Land Berhad）は長い間、マレーシア国内での不動産開発業界を牽引してきた会社であり、クランバレー（Klang Valley）を拠点とし、開発を行っている。また、近年、ベルジャヤラン バーハッドは韓国やべトナムなど海外進出をしており、レンガとモルタルの物件だけでなく、住人に快適な空間を提供できるような住宅開発に力を入れている。",
      },
      floor_plans:[
        {
          name: "Type Ava",
          image_url: "https://en.sekaiproperty.com/img/sekai-property-property-image/file/123908/c4ac9b41-9245-489f-9aa0-8b9064f414dd.jpg",
          number_of_bedrooms: "2",
          square_meter: "151.99㎡",
        },
        {
          name: "Type Bella",
          image_url: "https://en.sekaiproperty.com/img/sekai-property-property-image/file/123908/c4ac9b41-9245-489f-9aa0-8b9064f414dd.jpg",
          number_of_bedrooms: "1",
          square_meter: "108.05㎡",
        },
        {
          name: "Type Citra",
          image_url: "https://en.sekaiproperty.com/img/sekai-property-property-image/file/123908/c4ac9b41-9245-489f-9aa0-8b9064f414dd.jpg",
          number_of_bedrooms: "1",
          square_meter: "95.05㎡",
        },
        {
          name: "Type Dana",
          image_url: "https://en.sekaiproperty.com/img/sekai-property-property-image/file/123908/c4ac9b41-9245-489f-9aa0-8b9064f414dd.jpg",
          number_of_bedrooms: "2",
          square_meter: "146.05㎡",
        },
      ],
      description: "ザ・リッツカールトン レジデンス（The Ritz-Carlton residences）はマレーシア初のリッツカールトンレジデンスであり、総階数48階、総戸数288戸からなる。クアラルンプール市内中心部（KLCC）に位置し、有名なペトロナスツインタワーまでは約5分である。本物件はベルジャヤセントラルパーク（Berjaya Central Park）にある高層ビルの1つとしてそびえ立ち、1,023スクエアフィートから2,605スクエアフィートのユニットと、45～48階部分に位置する2,605スクエアフィートから4,284スクエアフィートのペンションがある。世界的に有名なリッツカールトンブランドと同じ開発基準であり、豪華なデザインが施された本物件は他都市よりも高い生活水準が期待できる。卓越したサービスと住人のニーズに合わせた思いやりのある物件は類を見ないと自信をもっておすすめする。本物件の9階部分にはインフィニティプール、テニスコート、スパ、ジム、レジデンスクラブラウンジ、子供用スタジオ、プライベートイベント用のオープンテラスガーデンなど様々な施設が完備されている。他にも、24時間のコンシェルジュサービス、ハウスキーピングサービス、空き在宅におけるケアマネジメント、イベントサービスなどの個別サービスもあり、アメニティやサービスが充実していることが魅力の1つである。\r\n本物件はKLCCに位置し、利便性がとても高い。徒歩圏内には、高級ショッピング街、インターナショナルスクール、医療機関、レストラン、ビジネス街、世界的に有名な観光スポットなどがあり、簡単にアクセス可能である。また、市内唯一の熱帯雨林保護区であるブキッ・ナナス森林保護区（Bukit Nanas Forest Reserve）に隣接していることも特長である。本物件からザ・KLブキッ・ナナスモノレール駅（The KL Bukit Nanas Monorail Station）までは徒歩約1分であり、他にもLRTのダンワンギ駅（Dang Wangi LRT Station）が徒歩6分圏内に位置している。そのため、周囲のショッピングモールやレストランに簡単に行くことができ、とても利便性の高い場所である。\r\n本物件はペトロナスツインタワーから約5分の場所に位置し、市内中心部にある様々な場所にアクセス可能である。スリアKLCC（Suria KLCC）、アベニューK（Avenue K）、パビリオン（Pavilion）などのショッピングモールが徒歩圏内に位置し、他にもインターナショナルスクール、医療機関、商業施設が約2㎞圏内にある。モノレール駅にも近隣しているため、空港をはじめ、あらゆる場所に簡単にアクセス可能であることも魅力である。",
    }
  }

  return project.project;
};

export default async function Page({ params, searchParams }) {
  // const currentPage = searchParams.page
  // const searchKeyword = searchParams.search
  // const posts = await getPosts(type, currentPage, searchKeyword);
  // const seminars = await getSeminars();
  const project = await getProject(params.slug)

  return (
    <div>
      <ProjectDetails
        project={project}
      />
    </div >
  )
}