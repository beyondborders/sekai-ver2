import Image from "next/image"
import Link from "next/link";
import styles from "./page.module.scss";
import Inquiry from "@/components/Inquiry/Inquiry";

export default async function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.FV}>
        <div className="d-block d-lg-none">
          <Image
            src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/kobetsu_SP.png"
            width={375}
            height={270}
          />
        </div>
        <div className="d-none d-lg-block">
          <Image
            src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/kobatsu_PC.png"
            width={1920}
            height={896}
          />
        </div>
      </div>
      <div className={`${styles.blueButtonContainer} ${styles.section3BtnContainer}`}>
        <Link href={'#consultation-form'}>
          <div className="my-5 new-btn btn-shadow-blue">【30秒で完了】無料個別相談に申し込む</div>
        </Link>
      </div>

      <section className={styles.section1Container}>
        <h2 className={styles.h2}>
          <div>
            無料個別相談の流れ<br />
            <span>※オンライン相談も可能です</span>
          </div>
        </h2>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div className={styles.title}>1.日時や場所の設定</div>
            <div className={styles.description}>
              オンラインのほか、青山オフィスやお客様のご希望の場所にて無料個別相談を実施しております。定休日はございませんため、ご希望の日時を担当者にお知らせください。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>2.会社概要説明</div>
            <div className={styles.description}>
              当日はまず、会社概要から説明させていただきます。<br />
              弊社が行っている事業や提供しているサービス内容についてご紹介いたします。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>3.国別比較</div>
            <div className={styles.description}>
              国ごとの規制や価格帯等の比較を行い、お客様に最適な国を提案いたします。<br />
              弊社スタッフも海外不動産を購入しておりますため、リアルな情報をお伝えすることが可能です。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>4.物件紹介</div>
            <div className={styles.description}>
              国が定まった後は、いよいよ物件のご紹介です。ホームページやダウンロード資料には載っていない、最新の情報をお伝えいたします。弊社ではしっかりとリスクも伝えるようにしております。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>5.お見積もり</div>
            <div className={styles.description}>
              海外不動産の購入となると、不安を抱く方もいらっしゃるかと思います。一般的な日本の支払いスケジュールとは異なる場合がございますため、いつ、いくら、どのように支払うのか、丁寧にご説明いたします。
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>6.最後に</div>
            <div className={styles.description}>
              ご紹介した国や物件にご興味をお持ちいただいた場合は、再度お時間をいただくか、メールやLINEにてご質問等に回答させていただきます。弊社では、購入から賃貸管理、売却まで、一気通貫で全てサポートしております。
            </div>
          </div>
          <div className={`${styles.blueButtonContainer} ${styles.section3BtnContainer}`}>
            <Link href={'#consultation-form'}>
              <div className="my-5 new-btn btn-shadow-blue">【30秒で完了】無料個別相談に申し込む</div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section2Container}>
        <h2 className={styles.h2}>
          <div>無料相談に参加された方の声</div>
        </h2>
        <div className={`${styles.divider} d-none d-lg-block`} />

        <div className={styles.content}>
          現地に精通している方から話を聞き、ネットだけでは分からない詳しい情報を知ることができました。 また、社員さんが現地の不動産を購入されており、信頼感が高まりました。（40代 会社員）
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>
          勧める物件のメリットだけでなくデメリットも含め、
          中立的な立場で比較提案いただき、分かりやすかったです。（30代 自営業）
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>
          大阪まで足を運んでいただき、相談させていただきました。<br />
          海外不動産は分からないことばかりで不安でしたが、
          全て日本語でサポートしていただけるとのことで、安心しました。（60代 経営者）
        </div>
        <div className={styles.divider} />
      </section>

      <div className={styles.consultationOrange} id="consultation-form">無料の個別相談は下記フォームから</div>
      <section className={styles.section3Container}>
        <h2 className={styles.h2}>
          <div>お電話でのお問い合わせはこちら</div>
          <a href="tel:0120-643-293" className={styles.phone}>0120-643-293</a>
        </h2>
        <div className={styles.formContainer}>
          <Inquiry
            thanksPage={`/inquiry_thanks/global/consultation`}/>
        </div>
      </section>

    </div >
  )
}