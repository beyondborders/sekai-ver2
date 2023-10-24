import Image from "next/image"
import Link from "next/link"
import styles from "./Guide.module.scss"
import Inquiry from '@/components/Inquiry/Inquiry';
import MultiItemCarousel from "@/components/Carousel/MultiItemCarousel"
import { notFound } from 'next/navigation';

const getGuides = async (slug) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/property_materials/search`, {
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

export default async function Guide(props) {
  const { guide } = props
  const guides = await getGuides();
  console.log(guides)

  return (
    <section className={styles.guideContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <div className={styles.breadcrumb}>
            <Link href='/'>TOP</Link>
            <span className="mx-1">/</span>
            <Link href='/property_materials'>おすすめ物件資料</Link>
            <span className="mx-1">/</span>
            <Link href={`/property_materials#${guide.country}`}>{guide.country}物件一覧</Link>
            <span className="mx-1">/</span>
            <span>{guide.label}</span>
          </div>
          <div className={styles.phoneContainer}>
            <div className={styles.phone}>0120-643-293</div>
            受付時間9:00-20:30（年中無休）
          </div>
        </div>
        <div className={styles.mainTitle}>
          <div>{guide.main_title.split(`\r\n`)[0]}</div>
          <div className={styles.bold}>{guide.main_title.split(`\r\n`)[1]}</div>
        </div>
        <div className={styles.subtitle}>{guide.subtitle}</div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descTitle}>ー　こんな方におすすめです　ー</div>
          <div className={styles.description}>
            {guide.description}
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.formTitle}>簡単30秒で完了 ガイドダウンロード</div>
        <div className={styles.formContainer}>
          <Inquiry
            thanksPage={`/inquiry_thanks${guide.url}`}
          />
        </div>
      </div>

      <section className={styles.otherGuideContainer}>
        <div className={styles.title}>国別の海外不動産投資ガイド</div>
        <MultiItemCarousel
          slidesToShow={3}
          arrows
          items={
            guides.map((g, index) =>
              <div className={styles.guideCard} key={index}>
                <div className={styles.guideImage}>
                  <Image
                    fill={true}
                    sizes="25vw"
                    style={{ objectFit: "cover" }}
                    src={g.image_url.split(';')[0]}
                  />
                </div>
                <div className={styles.mainTitle}>
                  <div>{g.label.split(`\r\n`)[0]}</div>
                  <div className={styles.bold}>{g.label.split(`\r\n`)[1]}</div>
                </div>
              </div>
            )
          } />
        <div className='mt-4 mt-lg-5 text-center'>
          <Link href='/property_materials' className={`${styles.blueButton} new-btn btn-shadow-blue`}>
            海外不動産資料をすべて見る
          </Link>
        </div>
      </section>
    </section >
  );
}