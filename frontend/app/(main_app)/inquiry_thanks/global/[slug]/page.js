import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

export default async function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>お問い合わせありがとうございます。</div>

      <div className={styles.mainDesc}>
        海外不動産資料はご登録頂いたメールアドレスにお送りいたしました。<br />
        ご確認くださいませ。
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://s3-ap-northeast-1.amazonaws.com/sekai-property-assets/images/line%401x.png"
            width={488}
            height={409}
          />
        </div>
      </div>

      <div className="mt-3">
        海外不動産の取引経験豊かのスタッフに相談してみませんか？<br />
        オンライン個別相談を無料で行っております！<br />
        詳しくはこちらへ
      </div>

      <div className="mt-3">
        お急ぎの方は<a className={styles.phone} href="tel(0120-643-293)">0120-643-293</a>までご連絡ください！
      </div>

    </div>
  )
}