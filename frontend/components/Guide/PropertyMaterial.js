'use client'

import Image from "next/image"
import Link from "next/link"
import styles from "./Guide.module.scss"
import Inquiry from '@/components/Inquiry/Inquiry';
import MultiItemCarousel from "@/components/Carousel/MultiItemCarousel"
import { notFound } from 'next/navigation';
import { useEffect, useState } from "react";

export default function PropertyMaterial(props) {
  const { guide, propertyMaterials } = props
  // const propertyMaterials = res.property_materials.recommended
  const countryJP = {
    cambodia: "カンボジア",
    malaysia: "マレーシア",
    philippines: "フィリピン",
    thailand: "タイ",
    dubai: "ドバイ",
  }
  const [FVImage, setFVImage] = useState(guide?.image_url.split(';')[0])
  const [recommendedPropertyMaterials, setRecommendedPropertyMaterials] = useState([])

  const getRecommendedPropertyMaterial = async () => {
    const data = await fetch(`/api/property_materials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    if (data.status !== 200) {
      console.log(data.status)
    }
    const propertyMaterial = await data.json()
    setRecommendedPropertyMaterials(propertyMaterial?.data?.property_materials?.recommended)
  }
  
  useEffect(() => {
    getRecommendedPropertyMaterial();
  }, [])

  return (
    <>
      <div className={styles.FVImage}>
        <Image
          priority={true}
          fill={true}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src={FVImage}
        />
      </div>
      <section className={styles.guideContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.contentHeader}>
            <div className={styles.breadcrumb}>
              <Link href='/'>TOP</Link>
              <span className="mx-1">/</span>
              <Link href='/property_materials'>おすすめ物件資料</Link>
              <span className="mx-1">/</span>
              <Link href={`/property_materials#${guide.country}`}>{countryJP[guide.country]}物件一覧</Link>
              <span className="mx-1">/</span>
              <span>{guide.main_title}</span>
            </div>
            <div className={styles.phoneContainer}>
              <div className={styles.phone}>0120-643-293</div>
              受付時間9:00-20:30（年中無休）
            </div>
          </div>

          <div className={`${styles.carouselContainer} ${styles.propertyMaterialCarousel}`}>
            {guide.image_url.split(`;`).length > 1 &&
              <MultiItemCarousel
                slidesToShow={4}
                slidesToShowMobile={3}
                autoPlay
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  guide.image_url.split(`;`).map((imageUrl, index) => {
                    if (index != 0) {
                      return (
                        <div key={index}>
                          <div className={styles.imageGallery} onClick={()=>{setFVImage(imageUrl)}}>
                            <Image
                              fill={true}
                              sizes="15vw"
                              style={{ objectFit: "cover" }}
                              src={imageUrl}
                            />
                          </div>
                        </div>
                      )
                    }
                  })
                } />
            }
          </div>
          <div className={styles.mainTitle}>
            <div>{guide.main_title.split(`\r\n`)[0]}</div>
            <div className={styles.bold}>{guide.main_title.split(`\r\n`)[1]}</div>
          </div>
          <div className={styles.subtitle}>{guide.subtitle}</div>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              {guide.description}
            </div>
            {
              guide.show_details_table &&

              <div className={styles.guideDetails}>
                <input type="checkbox" />
                <div className="text-center">
                  <div className={styles.viewMoreButton}>
                    さらに詳細を見る▼
                  </div>
                </div>
                <div className={`${styles.guideDetailsContent} mt-4`}>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>エリア</div>
                    <div className={styles.propertymaterialTableContent}>{guide.area}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>価格</div>
                    <div className={styles.propertymaterialTableContent}>{guide.price}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>所在地</div>
                    <div className={styles.propertymaterialTableContent}>{guide.location}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>最寄り駅</div>
                    <div className={styles.propertymaterialTableContent}>{guide.nearest_station}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>完成</div>
                    <div className={styles.propertymaterialTableContent}>{guide.scheduled_for_completed}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>総階数</div>
                    <div className={styles.propertymaterialTableContent}>{guide.number_of_floors}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>部屋数</div>
                    <div className={styles.propertymaterialTableContent}>{guide.number_of_rooms}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>部屋タイプ</div>
                    <div className={styles.propertymaterialTableContent}>{guide.room_type}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>広さ</div>
                    <div className={styles.propertymaterialTableContent}>{guide.size}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>共用施設</div>
                    <div className={styles.propertymaterialTableContent}>{guide.shared_facilities}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>周辺環境</div>
                    <div className={styles.propertymaterialTableContent}>{guide.surrounding_environment}</div>
                  </div>
                  <div className={styles.propertymaterialTableRow}>
                    <div className={styles.propertymaterialTableTitle}>コメント</div>
                    <div className={styles.propertymaterialTableContent}>{guide.comment}</div>
                  </div>
                </div>
              </div>
            }
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
          <div className={styles.title}>おすすめの海外不動産物件資料</div>
          <div className={styles.carouselContainer}>
            <MultiItemCarousel
              slidesToShow={3}
              arrows
              nextArrow={<arrow2></arrow2>}
              prevArrow={<arrow2></arrow2>}
              items={
                recommendedPropertyMaterials?.map((g, index) =>
                  <Link href={g.url} key={index}>
                    <div className={styles.propertyMaterialCard}>
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
                            <div key={index} className={index == 0 ? styles.bold : ''}>{label}</div>
                          )
                        })}
                      </div>
                    </div>
                  </Link>
                )
              } />
          </div>
          <div className='mt-4 text-center'>
            <Link href='/property_materials' className={`${styles.blueButton} new-btn btn-shadow-blue`}>
              海外不動産資料をすべて見る
            </Link>
          </div>
        </section>
      </section >
    </>

  );
}