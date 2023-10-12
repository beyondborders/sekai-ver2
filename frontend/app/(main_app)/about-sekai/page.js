import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

const getAboutSekai = async () => {
  const data = await fetch("http://localhost:3001/api/v1/about_sekai");
  const posts = await data.json();

  return posts.about_sekai;
};

export default async function AboutSekai() {
  const aboutSekai = await getAboutSekai();

  return (
    <section>
      <div className={styles.FV}>
        <Image
          src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/FV-new.jpg"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className={styles.FVtext}>
          <div className={styles.biggest}>
            セカイプロパティは、国内最大級の<br />
            海外不動産ポータルサイトです。<br />
          </div>
          <div className={`${styles.bigger} mt-3`}>
            物件選びから購入、売却までを<br className="d-sm-none" />一気通貫でサポートいたします。<br />
          </div>
          <div className="mt-5">
            昨今、注目されている海外不動産。<br />
            しかし、情報の非対称さ、不透明さゆえに不安を抱く方も多くいらっしゃいます。<br />
          </div>
          <div className="mt-4">
            「どんな基準で物件を選べばいいのだろう…？」<br />
            「海外の法律や税金について相談できる人がいない…」<br />
            「物件を買ってもそのあとの管理まで出来ない...」<br />
          </div>
          <div className="mt-4">
            そのようなお客様に、<br className="d-sm-none" />安心して海外不動産を購入いただけるよう、<br />
            物件選び・購入・管理・売却までを<br className="d-sm-none" />一気通貫でサポートいたします。
          </div>
        </div>
      </div>
      <section className={styles.section2Container}>
        <h2 className={styles.h2}>セカイプロパティが選ばれる<br className="d-sm-none" />4つの理由</h2>
        <div className="container">
          <div className={styles.section2BoxContainer}>
            <div className={styles.section2Box}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/01new.jpg"
                  width={1788}
                  height={1292}
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
                  width={1788}
                  height={1292}
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
                  width={1788}
                  height={1292}
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
                  width={1788}
                  height={1292}
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
          <div className={styles.part1}>
            <div className={styles.title}>1.<br className="d-sm-none" />業界最大級の<br className="d-sm-none" />海外不動産サイトを運営</div>
            <div className="mt-3">
              <div className={styles.mainContent}><span className={styles.part1desc}>■ 会員数</span><span className={styles.part1answer}>: a</span></div>
              <div className={styles.mainContent}><span className={styles.part1desc}>■ 月間PV数</span><span className={styles.part1answer}>: a</span></div>
              <div className={styles.mainContent}><span className={styles.part1desc}>■ 月間問合せ数</span><span className={styles.part1answer}>: a</span></div>
              <div className={styles.mainContent}><span className={styles.part1desc}>■ ご紹介可能国</span><span className={styles.part1answer}>: a</span></div>
              <div className={styles.mainContent}><span className={styles.part1desc}>■ ご紹介可能物件</span><span className={styles.part1answer}>: a</span></div>
              <div className={styles.mainContent}><span className={styles.part1desc}>■ 掲載物件（一部）</span><span className={styles.part1answer}>: a</span></div>
            </div>
            <div className="mt-4">

            </div>
            <div className="mt-4">
              <Image
                src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/2023_JOorganic_aboutUS_1.png"
                width={996}
                height={527}
              />
            </div>
          </div>
          <div className={styles.part2}>
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
          <div className={styles.part3}>
            <div className={styles.title}>
              3.業界最大の独自ネットワークを活用した売却サービス
            </div>
            <div>
              <div className={styles.part3Content}>
                <div>現地提携エージェント<span className={styles.red}>{aboutSekai.total_sale_agent}</span><span className={styles.sm}>（{aboutSekai.total_sale_as_of}時点）</span>を介して、スピーディーに売却を成功させます。</div>
                <div>提携不動産仲介エージェント数は他社と比べて圧倒的。お客様の物件を効率的にPRできます。</div>
              </div>
              <div className={styles.part3Img}>
                <Image
                  src={aboutSekai.about_sekai_3_image_url}
                  width={1920}
                  height={720}
                  className={`d-none d-lg-block mt-4`}
                />
              </div>
              <img className='d-block d-lg-none mt-3' src={aboutSekai.about_sekai_3_image_url_mobile} width='100%' />
            </div>
          </div>
          <div className={styles.part4}>
            <div className={styles.title}>
              4.各種ライセンスも保持
            </div>
            <div className="mt-4 d-block d-lg-flex">
              <div className={styles.text}>
                ◎宅地建物取引業免許（日本）<br />
                東京都知事（2）第98329号<br /><br />
                ◎MSCステータスライセンス（マレーシア）<br />
                MSC Status CS/3/9824<br /><br />
                →マレーシア政府IT産業推進企業認定<br />
                ◎カンボジア不動産取引ライセンス（カンボジア）
              </div>
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/license.jpg`}
                width={599}
                height={218}
                className="mt-4 mt-lg-0"
              />
            </div>
          </div>
          <div className={styles.part5}>
            <div className={styles.title}>
              5.海外への送金も安心
            </div>
            <div className="mt-4">
              <div className={styles.text}>
                海外送金に関しては、銀行窓口での手続きが必要ですが、弊社のエスクローサービスを活用することで、インターネットバンキング等を活用した国内送金が可能。<br />
                慣れない海外送金でも安心して取り組めます。
              </div>
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/EAJ.jpg`}
                width={1199}
                height={486}
                className="mt-4 d-none d-lg-block"
              />
              <Image
                src={`https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/about-sekai/EAJ_SP.png`}
                width={552}
                height={355}
                className="mt-4 d-block d-lg-none"
              />
            </div>
          </div>
        </div>
        <div className={styles.blueButtonContainer}>
          <Link href={'/contact-ja'}>
            <div class="mt-5 new-btn btn-shadow-blue">自分に合った物件の提案を受ける</div>
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
              <div class="mt-5 new-btn btn-shadow-blue">自分に合った物件の提案を受ける</div>
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