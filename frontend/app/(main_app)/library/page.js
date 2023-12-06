import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

import { notFound } from 'next/navigation';

const getGuides = async (slug) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/guides/search`, {
    method: 'POST',
    cache: 'no-store'
  });
  if (data.status !== 200) {
    console.log(data.status)
    notFound();
  }
  const guides = await data.json()
  return guides.guides
}

export default async function Library() {
  let guides = await getGuides();
  return (
    <section>
      <div className={styles.FVImage}>
        <Image
          priority={true}
          fill={true}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/guide_fv_PC.png"}
        />
        <div className={styles.FVText}>
          <h1>
            海外不動産の全てがわかる<br />
            お役立ち資料 無料ダウンロード
          </h1>
          各国の不動産を購入するメリットやデメリット、<br className="d-lg-none" />購入規制、おすすめの都市などを、<br />
          無料のダウンロード資料で紹介しています。<br />
          海外不動産投資で必要な情報収集にご活用ください。
        </div>
      </div>

      <div className="container py-4 py-lg-5">
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          <span className="mx-1">/</span>
          <Link href='/library'>海外不動産ガイド</Link>
        </div>
        <div className={`${styles.guidesContainer} mt-3 mt-lg-4`}>
          <div className="row">
            {
              guides.map((g, index) =>
                <div className="col-12 col-lg-4" key={index}>
                  <Link href={g.url}>

                    <div className={styles.guideCard}>
                      <div className={styles.guideImage}>
                        <Image
                          fill={true}
                          sizes="25vw"
                          style={{ objectFit: "cover" }}
                          src={g.image_url.split(';')[0]}
                        />
                      </div>
                      <div className={styles.mainTitle}>
                        {g.label.split(`\r\n`).map((label, index) => {
                          return (
                            <div key={index} className={index != 0 ? styles.bold : ''}>{label}</div>
                          )
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}