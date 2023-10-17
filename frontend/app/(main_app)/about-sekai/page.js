import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

const getAboutSekai = async () => {
  // const data = await fetch("http://bb:3001/api/v1/about_sekai");
  const data = await fetch("http://sekai-v2-staging.eba-qnzkaccx.ap-northeast-1.elasticbeanstalk.com/api/v1/about_sekai", { cache: 'no-store' });
  const posts = await data.json();
  // const posts = {
  //   "about_sekai": {
  //     "member_number": "2万",
  //     "member_number_as_of": "2022年3月",
  //     "pv": "15万",
  //     "pv_as_of": "2022年1月",
  //     "inquiries_number": "800",
  //     "inquiries_number_as_of": "2022年2月",
  //     "countries_number": "12",
  //     "countries_number_as_of": "2022年3月",
  //     "properties_number": "436",
  //     "properties_number_as_of": "2021年2月",
  //     "malaysia_properties": "ザ・リッツカールトンレジデンス クアラルンプール\r\nBBCC・ルセンティアレジデンス\r\nキアラスイーツ163",
  //     "cambodia_properties": "ラ・アトレボンケンコン\r\nアジャイルスカイレジデンス\r\nペントハウスレジデンス",
  //     "thailand_properties": "フォーシーズンズレジデンスバンコク\r\nザ・リッツカールトンレジデンスバンコク \r\nインプレッションエカマイ",
  //     "total_asset": "58億4,900万円",
  //     "malaysia_asset": "22億円8,600万円",
  //     "malaysia_asset_as_of": "2022年3月",
  //     "malaysia_contracts": "73",
  //     "cambodia_asset": "30億円1,700万円",
  //     "cambodia_asset_as_of": "2022年3月",
  //     "cambodia_contracts": "238",
  //     "other_asset": "5億4,600万円",
  //     "other_asset_as_of": "2022年3月",
  //     "other_contracts": "59",
  //     "total_sale_agent": "10,000社以上",
  //     "total_sale_people": "12,876",
  //     "total_sale_as_of": "2022年",
  //     "top_page_number_of_properties_listed": "6万",
  //     "top_page_number_of_customers": "3万",
  //     "top_page_number_of_contracts": "500",
  //     "graph_image_url": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/azukari_shisan_PC.png",
  //     "graph_image_url_mobile": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/azukari_shisan_SP.png",
  //     "top_page_post_ids": "3190, 756,1946",
  //     "about_sekai_3_image_url": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/Desktop.jpg",
  //     "about_sekai_3_image_url_mobile": "https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/Mobile.jpg",
  //   }
  // }

  return posts.about_sekai;
};

export default async function AboutSekai() {
  const aboutSekai = await getAboutSekai();

  return (
    <section>
      <div className={styles.FV}>
        <Image
          src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/FV-new.jpg"
          priority={true}
          fill={true}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          alt="セカイプロパティ ビューアストン"
          quality={65}
        />
        <div className={styles.FVtext}>
          <div className={styles.biggest}>
            セカイプロパティは、国内最大級の<br />
            海外不動産ポータルサイトです。<br />
          </div>
          <div className={`${styles.bigger} mt-3`}>
            物件選びから購入、売却までを<br className="d-lg-none" />一気通貫でサポートいたします。<br />
          </div>
          <div className="mt-4 mt-lg-5">
            昨今、注目されている海外不動産。<br />
            しかし、情報の非対称さ、不透明さゆえに<br className="d-lg-none" />不安を抱く方も多くいらっしゃいます。<br />
          </div>
          <div className="mt-3 mt-lg-4">
            「どんな基準で物件を選べばいいのだろう…？」<br />
            「海外の法律や税金について相談できる人がいない…」<br />
            「物件を買ってもそのあとの管理まで出来ない...」<br />
          </div>
          <div className="mt-3 mt-lg-4">
            そのようなお客様に、<br className="d-lg-none" />安心して海外不動産を購入いただけるよう、<br />
            物件選び・購入・管理・売却までを<br className="d-lg-none" />一気通貫でサポートいたします。
          </div>
        </div>
      </div>
      <section className={styles.section2Container}>
        <h2 className={styles.h2}>セカイプロパティが選ばれる<br className="d-lg-none" />4つの理由</h2>
        <div className="container">
          <div className={styles.section2BoxContainer}>
            <div className={styles.section2Box}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/01new.jpg"
                  width={306}
                  height={221}
                  sizes="(max-width: 992px) 100px, 306px"
                  alt="セカイプロパティ ビューアストン"
                />
              </div>
              <div className={styles.text}>
                提案物件は<br />
                数ある中から厳選
              </div>
            </div>
            <div className={styles.section2Box}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/02new.jpg"
                  width={306}
                  height={221}
                  sizes="(max-width: 992px) 100px, 306px"
                  alt="セカイプロパティ"
                />
              </div>
              <div className={styles.text}>
                購入から売却まで<br />
                ワンストップサービス
              </div>
            </div>
            <div className={styles.section2Box}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/03new.jpg"
                  width={306}
                  height={221}
                  sizes="(max-width: 992px) 100px, 306px"
                  alt="セカイプロパティ"
                />
              </div>
              <div className={styles.text}>
                各種専門家チームとの<br />
                連携体制
              </div>
            </div>
            <div className={styles.section2Box}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/04new.jpg"
                  width={306}
                  height={221}
                  sizes="(max-width: 992px) 100px, 306px"
                  alt="セカイプロパティ"
                />
              </div>
              <div className={styles.text}>
                経験豊富な<br />
                プロフェッショナルチーム
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section3Container}>
        <h2 className={styles.h2}>セカイプロパティの5つの強み</h2>
        <input type="radio" name="tabset" id="tab1" className={styles.tab1} />
        <input type="radio" name="tabset" id="tab2" className={styles.tab2} />
        <input type="radio" name="tabset" id="tab3" className={styles.tab3} />
        <input type="radio" name="tabset" id="tab4" className={styles.tab4} />
        <input type="radio" name="tabset" id="tab5" className={styles.tab5} />
        <label htmlFor="tab1" className={styles.tab1label}>ポータルサイト</label>
        <label htmlFor="tab2" className={styles.tab2label}>預かり総資産</label>
        <label htmlFor="tab3" className={styles.tab3label}>売却サービス</label>
        <label htmlFor="tab4" className={styles.tab4label}>ライセンス</label>
        <label htmlFor="tab5" className={styles.tab5label}>海外送金</label>

        <div className={styles.section3Content}>
          <div className={`${styles.part} ${styles.part1}`}>
            <div className={styles.title}>1.<br className="d-lg-none" />業界最大級の<br className="d-lg-none" />海外不動産サイトを運営</div>
            <div className={styles.contentContainer}>
              <div>
                <div className={styles.mainContent}><span className={styles.part1desc}>■ 会員数</span><span className={styles.part1answer}>約{aboutSekai.member_number}名</span></div>
                <div className={styles.mainContent}><span className={styles.part1desc}>■ 月間PV数</span><span className={styles.part1answer}>約{aboutSekai.pv}PV</span></div>
                <div className={styles.mainContent}><span className={styles.part1desc}>■ 月間問合せ数</span><span className={styles.part1answer}>{aboutSekai.inquiries_number}名</span></div>
                <div className={styles.mainContent}><span className={styles.part1desc}>■ ご紹介可能国</span><span className={styles.part1answer}>{aboutSekai.countries_number}ヵ国</span></div>
                <div className={styles.mainContent}><span className={styles.part1desc}>■ ご紹介可能物件</span><span className={styles.part1answer}>{aboutSekai.properties_number}件</span></div>
                <div className={styles.mainContent}>
                  <span className={styles.part1desc}>■ 掲載物件（一部）</span>
                  <span className={styles.part1answer}>
                    {aboutSekai.malaysia_properties.split('\n').map((d, index) =>
                      <span key={index}>{d}<br /></span>
                    )}
                    {aboutSekai.cambodia_properties.split('\n').map((d, index) =>
                      <span key={index}>{d}<br /></span>
                    )}
                    {aboutSekai.thailand_properties.split('\n').map((d, index) =>
                      <span key={index}>{d}<br /></span>
                    )}
                  </span>
                </div>
              </div>
              <div>
                <div className={`${styles.fv3LogoContainer}`}>
                  <div className={styles.fv3Logo}>
                    <Image
                      src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/TopFVFrame_2.png'
                      width={110}
                      height={84}
                    />
                    <div className={`${styles.fv3LogoText}`}>
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
                    <div className={`${styles.fv3LogoText}`}>
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
                    <div className={`${styles.fv3LogoText}`}>
                      物件契約数<br />
                      <span>約</span><span className={styles.fvMainText}>{aboutSekai.top_page_number_of_contracts}件</span>
                    </div>
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/2023_JOorganic_aboutUS_1.png"
                    width={996}
                    height={527}
                    alt="セカイプロパティ"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">

            </div>
          </div>
          <div className={`${styles.part} ${styles.part2}`}>
            <div className={styles.title}>
              2.<br className='d-lg-none' />累計販売総額約{aboutSekai.total_asset}
            </div>
            <div className='d-lg-flex'>
              <div className='px-0 px-lg-5'>
                <div className='mt-4 mt-lg-5'>
                  <div>
                    <div className='d-inline-flex align-items-center'>
                      <span className={styles.malaysiaAssetBox}></span>
                      <span className={styles.assetTitle}>マレーシア</span>
                      <span className={styles.assetFontSmall}>（{aboutSekai.malaysia_asset_as_of}時点）</span>
                    </div>
                  </div>
                  <div className={`${styles.assetDetailsBox} fz-20 fz-xl-24`}>
                    <div>累計販売総額：約{aboutSekai.malaysia_asset}</div>
                    <div>契約件数：{aboutSekai.malaysia_contracts}件</div>
                  </div>
                </div>
                <div className='mt-4 mt-lg-5'>
                  <div>
                    <div className='d-inline-flex align-items-center'>
                      <span className={styles.cambodiaAssetBox}></span>
                      <span className={styles.assetTitle}>カンボジア</span>
                      <span className={styles.assetFontSmall}>（{aboutSekai.cambodia_asset_as_of}時点）</span>
                    </div>
                  </div>
                  <div className={`${styles.assetDetailsBox} fz-20 fz-xl-24`}>
                    <div>累計販売総額：約{aboutSekai.cambodia_asset}</div>
                    <div>契約件数：{aboutSekai.cambodia_contracts}件</div>
                  </div>
                </div>
                <div className='mt-4 mt-lg-5'>
                  <div>
                    <div className='d-inline-flex align-items-center'>
                      <span className={styles.othersAssetBox}></span>
                      <span className={styles.assetTitle}>その他国</span>
                      <span className={styles.assetFontSmall}>（{aboutSekai.other_asset_as_of}時点）</span>
                    </div>
                  </div>
                  <div className={`${styles.assetDetailsBox} fz-20 fz-xl-24`}>
                    <div>累計販売総額：約{aboutSekai.other_asset}</div>
                    <div>契約件数：{aboutSekai.other_contracts}件</div>
                  </div>
                </div>
              </div>
              <div className={styles.assetImgContainer}>
                <img className='asset-sekai-img mt-4 mt-lg-0 d-none d-lg-block' src={aboutSekai.graph_image_url} />
                <img className='asset-sekai-img mt-4 mt-lg-0 d-block d-lg-none' src={aboutSekai.graph_image_url_mobile} />
              </div>
            </div>
          </div>
          <div className={`${styles.part} ${styles.part3}`}>
            <div className={styles.title}>
              3.<br className='d-lg-none' />業界最大の独自ネットワークを<br className='d-lg-none' />活用した売却サービス
            </div>
            <div>
              <div className={styles.part3Content}>
                現地提携エージェント<span className={styles.red}>{aboutSekai.total_sale_agent}</span><span className={styles.sm}>（{aboutSekai.total_sale_as_of}時点）</span>を介して、スピーディーに売却を成功させます。<br className="d-none d-lg-block" />
                提携不動産仲介エージェント数は他社と比べて圧倒的。お客様の物件を効率的にPRできます。
              </div>
              <div className={styles.part3Img}>
                <Image
                  src={aboutSekai.about_sekai_3_image_url}
                  width={1920}
                  height={720}
                  alt="セカイプロパティ"
                  className={`d-none d-lg-block mt-4`}
                />
              </div>
              <img className='d-block d-lg-none mt-3' src={aboutSekai.about_sekai_3_image_url_mobile} width='100%' />
            </div>
          </div>
          <div className={`${styles.part} ${styles.part4}`}>
            <div className={styles.title}>
              4.<br className='d-lg-none' />各種ライセンスも保持
            </div>
            <div className="mt-4 d-block d-lg-flex">
              <div className={styles.text}>
                ◎宅地建物取引業免許（日本）<br />
                東京都知事（2）第98329号<br /><br />
                ◎MSCステータスライセンス（マレーシア）<br />
                MSC Status CS/3/9824<br />
                →マレーシア政府IT産業推進企業認定<br /><br />
                ◎カンボジア不動産取引ライセンス（カンボジア）
              </div>
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/license.jpg`}
                width={599}
                height={218}
                alt="セカイプロパティ"
                className="mt-4 mt-lg-0"
              />
            </div>
          </div>
          <div className={`${styles.part} ${styles.part5}`}>
            <div className={styles.title}>
              5.<br className='d-lg-none' />海外への送金も安心
            </div>
            <div className="mt-4">
              <div className={styles.text}>
                海外送金に関しては、銀行窓口での手続きが必要ですが、弊社のエスクローサービスを活用することで、インターネットバンキング等を活用した国内送金が可能。<br className='d-none d-lg-block' />
                慣れない海外送金でも安心して取り組めます。
              </div>
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/EAJ.jpg`}
                width={1199}
                height={486}
                alt="セカイプロパティ"
                className="mt-4 d-none d-lg-block"
              />
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/EAJ_SP.png`}
                width={552}
                height={355}
                alt="セカイプロパティ"
                className="mt-4 d-block d-lg-none"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.blueButtonContainer} ${styles.section3BtnContainer}`}>
          <Link href={'/contact-ja'}>
            <div className="mt-5 new-btn btn-shadow-blue">自分に合った物件の提案を受ける</div>
          </Link>
        </div>
      </section>
      <section className={styles.section4Container}>
        <h2 className={styles.h2}>ご相談から購入までの流れ</h2>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div className={styles.title}>1.情報収集・お問い合わせ</div>
            <div className={styles.description}>
              まずは気になる国のガイド資料や、物件資料をダウンロード。<br />
              より詳細な情報を知りたい場合は、海外不動産のプロにご相談ください。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>2.無料相談</div>
            <div className={styles.description}>
              お客様のご要望から最適な物件を提案。様々な国の不動産市況を把握しているからこそできるコンサルティングです。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>3.オンライン視察</div>
            <div className={styles.description}>
              現地に精通した弊社日本人スタッフが、<br />物件視察案内・通訳などのサポートを担当させて頂きます。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>4.売買契約</div>
            <div className={styles.description}>
              全て日本語でのフルサポート。<br />現地に行かずとも、日本国内で購入手続きが完結します。<br />国内の不動産契約と同様、所要時間は約1時間程度です。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>5.物件引渡し</div>
            <div className={styles.description}>
              引渡しまでの現地での工事進捗管理、中間金支払いのサポート、各種連絡事項等を全て一括して弊社から日本語で行います。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>6.管理・賃貸・売却</div>
            <div className={styles.description}>
              引渡し後の内装工事や税金関連の支払い代行、<br />賃貸付けやその後の売却等、現地のエージェントとも連携して、<br />弊社が全てサポートいたします。
            </div>
          </div>
          <div className={styles.blueButtonContainer}>
            <Link href={'/contact-ja'}>
              <div className="mt-5 new-btn btn-shadow-blue">自分に合った物件の提案を受ける</div>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section5Container}>
        <h2 className={styles.h2}>会社紹介</h2>
        <div className="container">
          <div className={styles.missionText}>私たちのミッション</div>
          <div className={styles.missionTextBig}>“幸せでつながる未来”を　<br className='d-block d-lg-none' />不動産の領域で、世界中で。</div>
          <div className='mt-2'>Working towards a prosperous future,in real estate and across the world.</div>
          <div className={`${styles.missionDesc} mt-4`}>
            不動産が見せてくれる夢、未来、可能性。その想いは、私たちの見えないところで伝播し、世界中の人々に繋がっています。<br />
            私たちは、その想いの連鎖が永遠につながる未来を、世界中で作りたい。<br />
            ワクワクする未来を、不動産の領域で叶えたい。<br />
            世界中が幸せで繋がる未来を、不動産の領域で、世界中で。
          </div>
          <div className={styles.missionText}>代表取締役</div>
          <div className='d-lg-flex mt-4'>
            <div className={styles.endoImg}>
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/endo-san.jpg`}
                width={350}
                height={393}
                alt="遠藤 忠義"
                className="mt-4 mt-lg-0"
              />
            </div>
            <div className='align-self-center'>
              <div className={styles.endoText}>遠藤 忠義</div>
              <div className={styles.endoTextSmall}>ゴールドクレストにて不動産業を経験し、当時創業後1年のエス・エム・エスに入社。年間最優秀賞等を受賞し、営業・事業開発・人事マネージャーを歴任。その後マレーシア現地法人を設立し代表に就任。海外で4年間の事業運営を経て当社設立。</div>
            </div>
          </div>
          <div className={styles.missionText}>会社概要・アクセス</div>
          <div className='p-lg-5'>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>会社名</div>
              <div>
                株式会社BEYOND BORDERS<br />
                BEYOND BORDERS CO.,LTD.
              </div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>設立年月日</div>
              <div>2015年7月</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>事業内容</div>
              <div>
                海外不動産情報ポータルサイト運営<br />
                日本・海外間の不動産売買サポート<br />
                不動産事業に特化した人材紹介事業
              </div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>所在地</div>
              <div>
                本社（渋谷オフィス）<br />
                〒153-0042 東京都目黒区青葉台3丁目1‐18 青葉台タワー ANNEX4階<br />
                虎ノ門オフィス<br />
                〒105-0001 東京都港区虎ノ門3-4-8<br />
              </div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>代表取締役</div>
              <div>遠藤 忠義</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>役員</div>
              <div>
                遠藤　忠義／CEO, Co-founder<br />
                水野　貴明／CTO<br />
                平山　一滋／CFO<br />
                小林　利光／Executive Officer
              </div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>スタッフ数</div>
              <div>44名（2022年1月現在）</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>宅建免許</div>
              <div>東京都知事(2)98329号</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>有料職業紹介免許</div>
              <div>許可番号13-ユ-311057</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>MSC Status</div>
              <div>CS/3/9824</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>Cambodian License</div>
              <div>E-20-323 / PM20-013</div>
            </div>
            <div className={styles.companyInfo}>
              <div className={styles.companyInfoTitle}>グループ会社名</div>
              <div>
                SEKAI PROPERTY SDN. BHD. （マレーシア100%子会社）<br />
                SEKAI (CAMBODIA) CO., LTD. （カンボジア100%子会社）
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}