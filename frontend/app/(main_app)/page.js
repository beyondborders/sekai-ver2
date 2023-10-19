import SingleItemCarousel from "@/components/Carousel/SingleItemCarousel"
import MultiItemCarousel from "@/components/Carousel/MultiItemCarousel"
import Image from "next/image"
import Link from "next/link";

import styles from "./page.module.scss";

const getAboutSekai = async () => {
  // const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/about_sekai`, { cache: 'no-store' });
  // const posts = await data.json();
  const posts = {
    "about_sekai": {
      "member_number": "3万",
      "member_number_as_of": "2023年6月",
      "pv": "20万",
      "pv_as_of": "2023年5月",
      "inquiries_number": "約800",
      "inquiries_number_as_of": "2023年5月",
      "countries_number": "12",
      "countries_number_as_of": "2023年5月",
      "properties_number": "436",
      "properties_number_as_of": "2021年2月",
      "malaysia_properties": "ザ・リッツカールトンレジデンス クアラルンプール\r\nBBCC・ルセンティアレジデンス\r\nキアラスイーツ163",
      "cambodia_properties": "ラ・アトレボンケンコン\r\nアジャイルスカイレジデンス\r\nペントハウスレジデンス",
      "thailand_properties": "フォーシーズンズレジデンスバンコク\r\nザ・リッツカールトンレジデンスバンコク \r\nインプレッションエカマイ",
      "total_asset": "66億9,260万円",
      "malaysia_asset": "23億円2,480万円",
      "malaysia_asset_as_of": "2022年12月",
      "malaysia_contracts": "83",
      "cambodia_asset": "37億円3,720万円",
      "cambodia_asset_as_of": "2022年12月",
      "cambodia_contracts": "278",
      "other_asset": "6億3,060万円",
      "other_asset_as_of": "2022年12月",
      "other_contracts": "61",
      "total_sale_agent": "10,000社以上",
      "total_sale_people": "12,876",
      "total_sale_as_of": "2022年",
      "top_page_number_of_properties_listed": "6万",
      "top_page_number_of_customers": "3万",
      "top_page_number_of_contracts": "500",
      "graph_image_url": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/azukari_shisan_PC.png",
      "graph_image_url_mobile": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/azukari_shisan_SP.png",
      "top_page_post_ids": "3190, 756,1946",
      "about_sekai_3_image_url": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/Desktop.jpg",
      "about_sekai_3_image_url_mobile": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/Mobile.jpg",
      "posts": [
        {
          "id": 756,
          "category": "knowhow",
          "title": "マレーシア不動産の利回りを9つの国・4つのエリアで徹底比較",
          "eyecatch_image": "https://sekai-property-post-image.s3-ap-northeast-1.amazonaws.com/757/4511b579-cbbb-4957-8254-d8fe019bcb8c.jpg",
          "publish_date": "2020-03-16"
        },
        {
          "id": 1946,
          "category": "knowhow",
          "title": "クアラルンプールのコンドミニアムの魅力。賃貸・購入情報まで解説！",
          "eyecatch_image": "https://sekai-property-post-image.s3-ap-northeast-1.amazonaws.com/2926/4fcfec67-ced9-43bd-85cf-e92346e6997b.jpg",
          "publish_date": "2020-03-13"
        },
        {
          "id": 3190,
          "category": "knowhow",
          "title": "投資・移住を考え中の方へ。海外不動産の買い方ガイダンス",
          "eyecatch_image": "https://sekai-property-post-image.s3-ap-northeast-1.amazonaws.com/9917/d4061a3c-d6b3-46f9-a299-64a7f7ef400b.jpg",
          "publish_date": "2020-08-21"
        }
      ]
    }
  }

  return posts.about_sekai;
};

export default async function Page() {
  const aboutSekai = await getAboutSekai();

  return (
    <section>
      <div className={styles.FV}>
        <SingleItemCarousel
          dots
          fade
          items={[
            <div className={styles.FVImageContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/top_1.jpg'
                priority={true}
                fill={true}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>,
            <div className={styles.FVImageContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/top_2.png'
                fill={true}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>,
            <div className={styles.FVImageContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/top_3.png'
                fill={true}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>,
            <div className={styles.FVImageContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/top_4.png'
                fill={true}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>,
            <div className={styles.FVImageContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/top_5.png'
                fill={true}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>,
            <div className={styles.FVImageContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/02_ritz.jpg'
                fill={true}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ]} />
      </div>
      <section className={`${styles.sectionContainer} ${styles.section2}`}>
        <div className={styles.FVTitle}>
          <span>セカイプロパティ</span>は国内最大級の<br />
          海外不動産投資・検索ポータルサイトです。
        </div>
        <div>
          <div className={`${styles.fv3LogoContainer}`}>
            <div className={styles.fv3Logo}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/TopFVFrame_2.png'
                width={110}
                height={84}
              />
              <div className={`${styles.fv3LogoText} ${styles.text1}`}>
                物件掲載数<br />
                <span>約</span><span className={styles.fvMainText}>{aboutSekai.top_page_number_of_properties_listed}件</span>
              </div>
            </div>
            <div className={styles.fv3Logo}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/TopFVFrame_2.png'
                width={110}
                height={84}
              />
              <div className={`${styles.fv3LogoText} ${styles.text2}`}>
                総会員数<br />
                <span>約</span><span className={styles.fvMainText}>{aboutSekai.top_page_number_of_customers}人</span>
              </div>
            </div>
            <div className={styles.fv3Logo}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/TopFVFrame_2.png'
                width={110}
                height={84}
              />
              <div className={`${styles.fv3LogoText} ${styles.text3}`}>
                物件契約数<br />
                <span>約</span><span className={styles.fvMainText}>{aboutSekai.top_page_number_of_contracts}件</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          お客様に安心して海外不動産を購入いただけるよう、<br />
          物件選び・購入・管理・売却までを一気通貫でサポートいたします。
        </div>
        <div className={`${styles.part} container`}>
          <h2 className={styles.h2}>セカイプロパティのサービス</h2>
          <div className='row mt-3 mt-lg-4 mb-3'>
            <div className='col-6 col-lg-3 pr-2 pr-lg-0'>
              <Link href='/library'>
                <div className={styles.serviceContainer}>
                  <div className={styles.serviceText}>
                    <span className='fz-18 fz-lg-24'>資料<br />ダウンロード</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-6 col-lg-3 pl-4 pr-lg-0'>
              <Link href="#property-list">
                <div className={styles.serviceContainer}>
                  <div className={styles.serviceText}>
                    <span className='fz-18 fz-lg-24'>海外物件を探す</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-6 col-lg-3 mt-3 mt-lg-0 pr-2 pl-lg-4 pr-lg-0'>
              <Link href='/seminar'>
                <div className={styles.serviceContainer}>
                  <div className={styles.serviceText}>
                    <span className='fz-18 fz-lg-24'>セミナー</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-6 col-lg-3 mt-3 mt-lg-0 pl-4 pr-lg-0'>
              <Link href='/contact-ja'>
                <div className={styles.serviceContainer}>
                  <div className={styles.serviceText}>
                    <span className='fz-18 fz-lg-24'>個別相談</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.part}`}>
          <h2 className={styles.h2}>オーナー様の声</h2>
          <MultiItemCarousel
            slidesToShow={2}
            centerMode
            arrows
            items={[
              <div className={styles.interviewContainer}>
                <div>
                  <div className={styles.interviewImage}>
                    <Image
                      src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/fukutake_sama.jpg'
                      width={445}
                      height={278}
                      sizes="200px"
                    />
                  </div>
                </div>
                <div className={styles.interviewContent}>
                  <Link href='https://ja.sekaiproperty.com/interview/3869/archive-0731'>
                    <div className={styles.interviewTitle}>
                      「スタッフ自らが海外不動産に投資」<br />
                      その姿勢が信頼につながった
                    </div>
                  </Link>
                  <div className={styles.interviewCompanyName}>
                    株式会社ベネッセホールディングス<br />
                    取締役 福武 英明 様
                  </div>
                </div>
              </div>,
              <div className={styles.interviewContainer}>
                <div>
                  <div className={styles.interviewImage}>
                    <Image
                      src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/fujio_sama.jpg'
                      width={445}
                      height={278}
                      sizes="200px"
                    />
                  </div>
                </div>
                <div className={styles.interviewContent}>
                  <Link href='https://ja.sekaiproperty.com/interview/3896'>
                    <div className={styles.interviewTitle}>
                      「言いやすい」「頼みやすい」<br />
                      親近感を持てるスタッフの対応に<br />安心感を持てた。
                    </div>
                  </Link>
                  <div className={styles.interviewCompanyName}>
                    元気寿司株式会社<br />
                    取締役会長 藤尾益雄 様
                  </div>
                </div>
              </div>,
              <div className={styles.interviewContainer}>
                <div>
                  <div className={styles.interviewImage}>
                    <Image
                      src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/umeda_sama.jpg'
                      width={445}
                      height={278}
                      sizes="200px"
                    />
                  </div>
                </div>
                <div className={styles.interviewContent}>
                  <Link href='https://ja.sekaiproperty.com/interview/3887/archive-23102019'>
                    <div className={styles.interviewTitle}>
                      「物件選びのセンスが良いと思った」<br />
                      33年間の不動産投資経験をもとに購入を即決
                    </div>
                  </Link>
                  <div className={styles.interviewCompanyName}>
                    株式会社ハウスイン京都<br />
                    代表取締役 梅田良一 様
                  </div>
                </div>
              </div>,
            ]}
          />
        </div>
        <div className="mt-4">
          <Link href='/interview' className={styles.mainLink}>
            お客様の事例をすべて見る
          </Link>
        </div>
      </section>
      <section className={`${styles.sectionContainer} ${styles.section3}`}>
        <div className={styles.mainTitle}>なぜ海外不動産なのか？</div>
        <div className="container">
          <div className={styles.sectionContent}>
            <div className={styles.contentTitle}>
              理由1
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>
                経済成長に伴う物件の値上がりを期待できる
              </div>
              <div className={styles.description}>
                日本の不動産価格は、築年数の経過とともに下がっていく傾向にあります。しかし、経済成長著しい東南アジアなどの新興国における不動産投資には、国民所得の増加と物価上昇に伴うキャピタルゲインが期待できます。
              </div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentTitle}>
              理由2
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>
                首都のコンドミニアムが1000万円台から購入可能
              </div>
              <div className={styles.description}>
                東京の不動産価格は世界の中でもかなり高い部類に入ります。その一方で、新興国の首都では不動産価格が上昇中でありながら、東京に比べて低価格のエリアも少なくありません。例えば、カンボジアの首都では1000万円台から購入できる不動産が多数あります。
              </div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.contentTitle}>
              理由3
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>
                資産分散が可能
              </div>
              <div className={styles.description}>
                日本国内に加えて海外でも不動産投資をすることで、災害や経済に関するリスクヘッジとなる可能性があります。不動産投資は災害や経済の落ち込みによって悪影響を受けることも少なくありません。しかし、エリアを分散して投資できていれば、万が一に備えることができます。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sectionContainer} ${styles.section4}`}>
        <div className={styles.mainTitle}>セカイプロパティが選ばれる4つの理由</div>
        <div className="container p-0">
          <div className={styles.sectionContent}>
            <div className={styles.sectionImage}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/06.png'
                width={215}
                height={215}
                sizes="(max-width: 992px) 100px, 215px"
              />
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>提案物件は数ある中から厳選</div>
              <div className={styles.description}>各国現地法人に国内、国外の不動産売買経験豊富なスタッフを配置。日々、市場調査、各現地開発会社との面談や現地視察を繰り返し、日本人が検討できる物件はほぼ全て把握。利益の最大化と、リスクの最小化、双方の観点でご提案する物件を厳選しています。</div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.sectionImage}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/07.png'
                width={215}
                height={215}
                sizes="(max-width: 992px) 100px, 215px"
              />
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>各種専門家チームとの連携体制</div>
              <div className={styles.description}>海外における複雑な法律、税制の解釈や申告についてのアドバイス、日本国内での確定申告に関する実務サポート等、国際法務、税務経験豊富な弁護士、税理士によるバックアップ体制、リタイアメント、教育移住に関して、その分野の専門チームとも連携し、お客様のあらゆる不安を解消します。</div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.sectionImage}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/08.png'
                width={215}
                height={215}
                sizes="(max-width: 992px) 100px, 215px"
              />
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>購入から売却まで<br className='d-block d-lg-none' />ワンストップサービス</div>
              <div className={styles.description}>物件選びのコンサルティングから、売買契約、引き渡し、物件管理、さらには賃貸・売却までワンストップでサポートいたします。日本、各国に現地法人がある弊社だからこそ可能なサポート。面倒なやりとりは弊社で全て一括いたしますので、はじめての方でも安心です。</div>
            </div>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.sectionImage}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/top/09.jpg'
                width={215}
                height={215}
                sizes="(max-width: 992px) 100px, 215px"
              />
            </div>
            <div className={styles.contentInner}>
              <div className={styles.title}>経験豊富な<br className='d-block d-lg-none' />プロフェッショナルチーム</div>
              <div className={styles.description}>国内、海外の不動産市況に精通し、現地を十分に把握したスタッフが丁寧にサポート致します。投資シュミレーションから生活環境、教育、医療情報等あらゆる観点から最適な提案が可能です。</div>
            </div>
          </div>
        </div>
        <div className={`${styles.mainTitle} mt-5`}>国別の海外不動産投資ガイド</div>
        <div className="container">
          <div className='row'>
            <Link className={`${styles.homepageGuideContainer} col-12 col-lg-6`} href='/global/cambodia-guide'>
              <div className={styles.homepageGuideContainerBg}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/free-guide/cambodia.jpg"
                  width={636}
                  height={230}
                />
              </div>
              <div className={styles.homepageGuideText}>
                <div>カンボジア</div>
                <div className={styles.homepageGuideTextSub}>Cambodia</div>
              </div>
            </Link>
            <Link className={`${styles.homepageGuideContainer} col-12 col-lg-6`} href='/global/malaysia-guide'>
              <div className={styles.homepageGuideContainerBg}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/free-guide/malaysia.jpg"
                  width={636}
                  height={230}
                />
              </div>
              <div className={styles.homepageGuideText}>
                <div>マレーシア</div>
                <div className={styles.homepageGuideTextSub}>Malaysia</div>
              </div>
            </Link>
            <Link className={`${styles.homepageGuideContainer} col-12 col-lg-6`} href='/global/philippines-guide'>
              <div className={styles.homepageGuideContainerBg}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/free-guide/philippines.jpg"
                  width={636}
                  height={230}
                />
              </div>
              <div className={styles.homepageGuideText}>
                <div>フィリピン</div>
                <div className={styles.homepageGuideTextSub}>philippines</div>
              </div>
            </Link>
            <Link className={`${styles.homepageGuideContainer} col-12 col-lg-6`} href='/global/thailand-guide'>
              <div className={styles.homepageGuideContainerBg}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/free-guide/thailand.jpg"
                  width={636}
                  height={230}
                />
              </div>
              <div className={styles.homepageGuideText}>
                <div>タイ</div>
                <div className={styles.homepageGuideTextSub}>Thailand</div>
              </div>
            </Link>
          </div>
          <div className='mt-5 text-center'>
            <Link href='/library' className={styles.mainLink}>
              国別の海外不動産投資ガイド　全てを見る
            </Link>
          </div>
        </div>
        <section className={`${styles.sectionContainer}`}>
          <div className={styles.mainTitle}>おすすめの海外不動産資料</div>
          <div className="container">
            <div className='row'>
              <Link className={`${styles.homepagePropertymaterialContainer} col-12 col-lg-6`} href='https://ja.sekaiproperty.com/global/property-leconde'>
                <div className={styles.homepagePropertymaterialContainerBg}>
                  <Image
                    src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/%E3%83%AB%E3%82%B3%E3%83%B3%E3%83%87.jpg"
                    width={600}
                    height={310}
                    />
                </div>
                <div className={styles.homepagePropertymaterialText}>
                  <div>Le Conde</div>
                  <div className={styles.homepagePropertymaterialTextSub}>
                    カンボジア・プノンペン<br />
                    日系企業による建物管理マネジメントで高品質
                  </div>
                </div>
              </Link>
              <Link className={`${styles.homepagePropertymaterialContainer} col-12 col-lg-6`} href='https://ja.sekaiproperty.com/global/property-timesquare-6'>
                <div className={styles.homepagePropertymaterialContainerBg}>
                  <Image
                    src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/202310_Time+Square+6_%E7%89%A9%E4%BB%B6%E8%B3%87%E6%96%99%E3%83%9A%E3%83%BC%E3%82%B8%E7%94%A8+(1).jpg"
                    width={600}
                    height={310}
                    />
                </div>
                <div className={styles.homepagePropertymaterialText}>
                  <div>Time Square 6</div>
                  <div className={styles.homepagePropertymaterialTextSub}>
                    カンボジア・プノンペン<br />
                    全室完売の大人気シリーズ物件
                  </div>
                </div>
              </Link>
              <Link className={`${styles.homepagePropertymaterialContainer} col-12 col-lg-6`} href='https://ja.sekaiproperty.com/global/property-seasons'>
                <div className={styles.homepagePropertymaterialContainerBg}>
                  <Image
                    src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/Seasons_buildings_1200+(1).jpg"
                    width={600}
                    height={310}
                    />
                </div>
                <div className={styles.homepagePropertymaterialText}>
                  <div>The SEASONS</div>
                  <div className={styles.homepagePropertymaterialTextSub}>
                    フィリピン・マニラ<br />
                    野村不動産&三越伊勢丹HDが参画
                  </div>
                </div>
              </Link>
              <Link className={`${styles.homepagePropertymaterialContainer} col-12 col-lg-6`} href='https://ja.sekaiproperty.com/global/property-damac-bay2'>
                <div className={styles.homepagePropertymaterialContainerBg}>
                  <Image
                    src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/BAY2_p10+(1).jpg"
                    width={600}
                    height={310}
                    />
                </div>
                <div className={styles.homepagePropertymaterialText}>
                  <div>DAMAC BAY2 by Cavalli</div>
                  <div className={styles.homepagePropertymaterialTextSub}>
                    ドバイ<br />
                    パームジュメイラ隣接の絶好な立地
                  </div>
                </div>
              </Link>
            </div>

            <div className='mt-5 text-center'>
              <Link href='/property_materials' className={styles.mainLink}>
                おすすめ物件　全てを見る
              </Link>
            </div>
          </div>
        </section>
      </section>
    </section >
  )

}