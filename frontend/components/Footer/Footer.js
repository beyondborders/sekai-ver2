import Image from "next/image"
import Link from "next/link"
import FooterSNS from "./FooterSNS"
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className="row justify-content-between hidden-md-down">
            <div className="col-lg-12">
              <h3 className={styles.h3}>海外の不動産を探す</h3>
              <section>
                <div className='row'>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="my-2"><Link href='/search/malaysia'>マレーシア 物件一覧</Link></div>
                    <div className="mb-1">
                      <div><Link href={'/search/malaysia/kuala-lumpur'}>- クアラルンプール</Link></div>
                      <div><Link href={'/search/malaysia/johor'}>- ジョホール</Link></div>
                      <div><Link href={'/search/malaysia/penang'}>- ペナン</Link></div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="my-2"><Link href='/search/vietnam'>ベトナム 物件一覧</Link></div>
                    <div className="mb-1">
                      <div><Link href={'/search/vietnam/hanoi'}>- ハノイ</Link></div>
                      <div><Link href={'/search/vietnam/ho-chi-minh-city'}>- ホーチミン</Link></div>
                      <div><Link href={'/search/vietnam/da-nang'}>- ダナン</Link></div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="my-2"><Link href='/search/thailand'>タイ 物件一覧</Link></div>
                    <div className="mb-1">
                      <div><Link href={'/search/thailand/bangkok'}>- バンコク</Link></div>
                      <div><Link href={'/search/thailand/chonburi'}>- チョンブリ</Link></div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="my-2"><Link href='/search/cambodia'>カンボジア 物件一覧</Link></div>
                    <div className="mb-1">
                      <div><Link href={'/search/malaysia/phnom-penh'}>- プノンペン</Link></div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="my-2">その他の国</div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="mb-1">
                      <div><Link href={'/search/united-states'}>- アメリカ</Link></div>
                      <div><Link href={'/search/philippines'}>- フィリピン</Link></div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="mb-1">
                      <div><Link href={'/search/united arab emirates'}>- アラブ首長国連邦</Link></div>
                      <div><Link href={'/search/mongolia'}>- モンゴル</Link></div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="mb-1">
                      <div><Link href={'/search/thailand/australia'}>- オーストラリア</Link></div>
                      <div><Link href={'/search/thailand/japan'}>- 日本</Link></div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-3 mb-3">
                    <div className="mb-1">
                      <div><Link href={'/search/malaysia/singapore'}>- シンガポール</Link></div>
                      <div><Link href={'/search/malaysia/hong kong'}>- 香港</Link></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="row mt-5">
                <div className="col-9">
                  <div className="row">
                    <h3 className={styles.h3}>海外の不動産を探す</h3>
                    <div className="col-4">
                      <div className="my-2">不動産ガイド</div>
                      <div className="mb-1">
                        <div><Link href={'/global/malaysia-guide'}>- マレーシア不動産ガイド</Link></div>
                        <div><Link href={'/global/vietnam-guide'}>- ベトナム不動産ガイド</Link></div>
                        <div><Link href={'/global/cambodia-guide'}>- カンボジア不動産ガイド</Link></div>
                        <div><Link href={'/global/thailand-guide'}>- タイ不動産ガイド</Link></div>
                        <div><Link href={'/global/overseas-comparison-guide'}>- 海外不動産比較ガイド</Link></div>
                        <div><Link href={'/global/philippines-guide'}>- フィリピン不動産ガイド</Link></div>
                        <div><Link href={'/global/bangladesh-guide'}>- バングラデシュ不動産ガイド</Link></div>
                        <div><Link href={'/global/america-guide'}>- アメリカ不動産ガイド</Link></div>
                        <div><Link href={'/global/hawaii-guide'}>- ハワイ不動産ガイド</Link></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="my-2">相談窓口</div>
                      <div className="mb-1">
                        <div><Link href={'/global/loan-consultation'}>- 海外不動産ローン相談窓口</Link></div>
                        <div><Link href={'/global/malaysia-selling'}>- マレーシア不動産売却窓口</Link></div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="my-2">その他リンク</div>
                      <div className="mb-1">
                        <div><Link href={'/glossaries'}>- 用語集</Link></div>
                        <div><Link href={'/archives'}>- 海外不動産アーカイブス</Link></div>
                        <div><Link href={'/tags'}>- タグ一覧</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <h3 className={styles.h3}>建物タイプで探す</h3>
                  <div className="col-12">
                    <div><Link href='/search/condominium'>- コンドミニアム</Link></div>
                    <div><Link href='/search/house'>- 一戸建て</Link></div>
                    <div><Link href='/search/whole_building'>- 一棟</Link></div>
                    <div><Link href='/search/store_office'>- 区分店舗・事務所</Link></div>
                    <div><Link href='/search/land'>- 土地</Link></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className={styles.logoContainer}>
              <Image
                src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/logo-white.png'
                width={400}
                height={173}
              />
            </div>
            <div className="col-12 col-md text-center text-lg-end">
              <div>
                <FooterSNS />
              </div>
              <div className={styles.footerBottomLink}>
                <Link href='/contact-ja'>お問い合わせ</Link>
                <Link href='http://beyondborders.jp/' target="_blank">会社概要</Link>
                <Link href='/ja_terms-privacypolicy'>利用規約</Link>
                <Link href='/ja_terms-privacypolicy#privacy-policy'>個⼈情報の取り扱いについて</Link>
                {/* <Link href='/sitemap'>サイトマップ</Link> */}
              </div>
              <p className="text-white fz-3xs my-0">Copyright SEKAI PROPERTY ALL Rights Reserved. Produced by BEYOND BORDERS</p>
            </div>
            <div className={styles.zigexnLink}>
              <a href="https://arubaito-ex.jp/" target="_blank">アルバイト一括検索ならアルバイトEX</a>
              <a href="https://tenshoku-ex.jp/" target="_blank">転職一括検索なら転職EX</a>
              <a href="https://kangokyujin-ex.jp/" target="_blank">看護転職一括検索なら看護師求人EX</a>
              <a href="https://haken-ex.jp/" target="_blank">派遣一括検索なら派遣EX</a>
              <a href="https://knoock.jp/" target="_blank">転職未経験者ならknoock</a>
              <a href="https://smocca.jp/" target="_blank">賃貸物件探しなら賃貸スモッカ</a>
              <a href="https://hikkoshi-ex.jp/" target="_blank">引越し見積もりなら引越し見積もりEX </a>
              <a href="https://areabusinessmarketing.com/" target="_blank">不動産ホームページ制作ならエリアビジネスマーケティング</a>
              <a href="https://menoreno.jp/" target="_blank"> 中古マンション・リノベーション物件購入ならミノリノ</a>
              <a href="https://kuruma-ex.jp/usedcar" target="_blank">中古車探しなら中古車EX</a>
              <a href="https://sell.tc-v.com/" target="_blank">車の買取・査定ならセルトレ</a>
              <a href="https://www.gaikoumitsumori.biz/" target="_blank">外構・エクステリア工事ならリショップナビ エクステリア</a>
              <a href="https://rehome-navi.com/" target="_blank">リフォーム一括見積ならリショップナビ</a>
              <a href="https://pronuri.com/" target="_blank">外壁・屋根塗装業者一括見積ならリショップナビ外壁塗装</a>
              <a href="https://enepi.jp/" target="_blank">プロパン(LP)ガスならenepi-エネピ</a>
              <a href="https://griene.jp/" target="_blank">太陽光発電・蓄電池ならグリエネ </a>
              <a href="https://www.fc-hikaku.net/" target="_blank">フランチャイズでの独立開業なら フランチャイズ比較ネット</a>
              <a href="https://ryugaku.kuraveil.jp/" target="_blank">留学なら留学くらべーる</a>
              <a href="https://kekkon.kuraveil.jp/" target="_blank">結婚相談所紹介なら 結婚相談所比較ネット</a>
              <a href="https://kateikyoushi.kuraveil.jp/" target="_blank">家庭教師選びなら家庭教師比較くらべーる</a>
              <a href="https://fabiz.jp/" target="_blank">ものづくり産業比較サイトならfabiz</a>
              <a href="https://clover.minden.jp/" target="_blank">恋愛メディアならClover</a>
              <a href="https://sp.minden.jp//" target="_blank">電話占いならみんなの電話占い</a>
              <a href="https://careerplus-info.com/" target="_blank">人材紹介会社向け業務管理システムならCAREER PLUS</a>
              <a href="https://www.matchingood.co.jp/" target="_blank">人材派遣・紹介会社向けクラウド業務管理システムならMatchinGood</a>
              <a href="https://pages.matchingood.co.jp/myrec.html" target="_blank">	人材ビジネス事業者向けDXプラットフォームならマイリク</a>
              <a href="https://bizcomm.net/" target="_blank">全国のお仕事探しならビズコミ</a>
              <a href="https://travelist.jp/" target="_blank">国内航空券・ホテルの予約・比較サイトならトラベリスト</a>
              <a href="https://kaigo.miraxs.co.jp/" target="_blank">介護求人、介護業界転職ならミラクス介護</a>
              <a href="https://sitter.miraxs.co.jp/" target="_blank">ベビーシッターサービスならmiraxsシッター</a>
              <a href="https://hoiku.miraxs.co.jp/" target="_blank">保育士・保育園求人・転職・募集情報ならミラクス保育</a>
              <a href="https://kango.miraxs.co.jp/" target="_blank">看護師・ナース求人・転職・募集情報ならミラクス看護</a>
              <a href="https://lp.struct-inc.co.jp/1_contents" target="_blank">建設業界の転職マッチングプラットフォームなら建設Jobs</a>
              <a href="https://ja.sekaiproperty.com/" target="_blank">海外不動産ポータルサイトならセカイプロパティ</a>
            </div>
          </div>
        </div>
      </div >
    </footer >
  );
}