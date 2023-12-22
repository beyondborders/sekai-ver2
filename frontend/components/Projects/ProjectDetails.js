'use client'

import Image from "next/image"
import Link from "next/link"
import Inquiry from '@/components/Inquiry/Inquiry';
import MultiItemCarousel from "@/components/Carousel/MultiItemCarousel"
import ProjectInquiryTop from "@/components/Inquiry/ProjectInquiryTop"
import ProjectInquiryBottom from "@/components/Inquiry/ProjectInquiryBottom"
import { notFound } from 'next/navigation';
import { useEffect, useState } from "react";

import styles from "./ProjectDetails.module.scss"
import Map from "../Map/Map";
import Lightbox from "../Lightbox/Lightbox";

const ProjectDetails = (props) => {
  const [openLightBox, setOpenLightBox] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const { project, recommendedProperties } = props
  const [FVImage, setFVImage] = useState(project?.image_url?.split(';')[0])
  const translateLabel = {
    house: "一戸建て",
    beginning: "予定",
    mid: "中旬",
    end: "下旬",
  }

  const generateVideoUrl = (url) => {
    if (url.includes('youtu')) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length > 10) {
        return `//www.youtube.com/embed/${match[2]}`;
      }
    }
    return url
  }

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
      <section className={styles.projectContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.contentHeader}>
            <div className={styles.breadcrumb}>
              <Link href='/'>TOP</Link>
              <span className="mx-1">/</span>
              <Link href={`/search/${project?.building?.country_en}`}>{project?.building?.country}</Link>
              <span className="mx-1">/</span>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}`}>{project?.building?.prefecture}</Link>
              <span className="mx-1">/</span>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/${project?.building?.city_en}`}>{project?.building?.city}</Link>
              <span className="mx-1">/</span>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/${project?.building?.city_en}/${project?.building?.building_type_raw}`}>{translateLabel[project?.building?.building_type_raw]}</Link>
            </div>
          </div>

          <div className={`${styles.carouselContainer} ${styles.propertyMaterialCarousel}`}>
            {/* {project.image_url?.split(`;`).length > 1 &&
              <MultiItemCarousel
                slidesToShow={4}
                slidesToShowMobile={3}
                autoPlay
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  project.image_url.split(`;`).map((imageUrl, index) => {
                    if (index != 0) {
                      return (
                        <div key={index}>
                          <div className={styles.imageGallery} onClick={() => { setFVImage(imageUrl) }}>
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
            } */}
          </div>
          <div className={styles.mainTitle}>
            <div>{project?.building?.name}</div>
          </div>
          <div className={styles.subtitle}>{project?.building?.address}</div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className={styles.guideDetails}>
                  <div className={`${styles.guideDetailsContent} mt-4`}>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>建物タイプ</div>
                      <div className={styles.propertymaterialTableContent}>{translateLabel[project?.building?.building_type_raw]}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>価格</div>
                      <div className={styles.propertymaterialTableContent}>{project.price}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>総階数</div>
                      <div className={styles.propertymaterialTableContent}>{project.building.number_of_floors}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>総戸数</div>
                      <div className={styles.propertymaterialTableContent}>{project.building.number_of_units}戸</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>部屋タイプ</div>
                      <div className={styles.propertymaterialTableContent}>{project.building.number_of_bedrooms}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>専有面積</div>
                      <div className={styles.propertymaterialTableContent}>{project.building.square_meter}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>完成</div>
                      <div className={styles.propertymaterialTableContent}>{project.building.constructed_at}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>即入居可</div>
                      <div className={styles.propertymaterialTableContent}>{project.immediate_move_in ? "あり" : "なし"}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>入居予定年月</div>
                      <div className={styles.propertymaterialTableContent}>
                        {project.immediate_move_in ? "-" :
                          !!project.expected_move_in?.year ? `${project.expected_move_in.year}年 ${project.expected_move_in.month}月 ${translateLabel[project.expected_move_in.period]}` : "ご相談"}
                      </div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>開発会社 / 不動産会社</div>
                      <div className={styles.propertymaterialTableContent}>{project.seller.name}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>管理</div>
                      <div className={styles.propertymaterialTableContent}>{project.management}</div>
                    </div>
                    <div className={styles.propertymaterialTableRow}>
                      <div className={styles.propertymaterialTableTitle}>所有形態</div>
                      <div className={styles.propertymaterialTableContent}>{project.ownership}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 d-none d-lg-flex">
                <div className="mt-4">
                  <ProjectInquiryTop />
                </div>
              </div>
            </div>
          </div>
          {
            !!project.video_url &&
            <section className="container my-5" id="wysiwig">
              <span className="fr-video fr-dvb">
                <iframe width="100%" className={styles.youtubeIframe} src={generateVideoUrl(project.video_url)} frameBorder="0" allowFullScreen="true"></iframe>
              </span>
            </section>
          }
        </div>
        <div className={styles.floorplanContainer}>
          <div className="container py-5">
            <h3 className={styles.h3}>フロアプラン</h3>
            <div className="row">
              {project.floor_plans.map((floorplan, index) => {
                return (
                  <div className="col-6 col-lg-3 px-2 my-2" key={index}>
                    <div className="text-center mt-4 mb-3">{floorplan.name}</div>
                    <img src={floorplan.image_url} onClick={() => { setLightboxIndex(index); setOpenLightBox(true) }} />
                    <div className={`${styles.floorplanDetails}`}>
                      <div className={styles.detailsWrapper}>
                        <div className={styles.icon}>
                          <Image
                            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/icon-house.png"}
                            width={60}
                            height={60}
                          />
                        </div>
                        <span>{floorplan.square_meter}</span>
                      </div>
                      <div className={styles.detailsWrapper}>
                        <div className={styles.icon}>
                          <Image
                            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/icon-bed.png"}
                            width={60}
                            height={60}
                          />
                        </div>
                        <span>{floorplan.number_of_bedrooms}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <Lightbox
              open={openLightBox}
              close={() => setOpenLightBox(false)}
              slides={project.floor_plans.map((floorplan, index) => { return { src: floorplan.image_url } })}
              index={lightboxIndex}
            />
          </div>
        </div>
        {
          !!project.description &&
          <div className="container pt-5">
            <h3 className={styles.h3}>担当者コメント</h3>
            <div className={`${styles.slightlyLeft} mt-4`} dangerouslySetInnerHTML={{ __html: project.description }}></div>
          </div>
        }
        {
          !!project.seller &&
          <div className="container py-5">
            <h3 className={styles.h3}>売主情報</h3>
            <div className={`${styles.slightlyLeft} ${styles.sellerContainer} mt-4`}>

              <div className={styles.sellerImg}>
                <img
                  src={project.seller.image_url}
                />
              </div>

              <div className={styles.sellerInfo}>
                <div className="mb-2">{project.seller.name}</div>
                <div>{project.seller.description}</div>
              </div>
            </div>
          </div>
        }
        {
          !!project.building?.latitude &&
          <div className="container pt-5">
            <h3 className={styles.h3}>所在地</h3>
            <div className="mt-5">
              <Map
                lat={project.building?.latitude}
                lng={project.building?.longitude}
              />
            </div>
          </div>
        }

        <div className="my-5 container">
          <div className={styles.inquiryHeader}>
            <div className={styles.inquiryTitle}>お問い合わせはこちらから</div>
            <a className={styles.inquiryPhone} href="tel:0120-643-293">0120-643-293</a>
            <div>受付時間 9:00 - 20:30（年中無休）</div>
          </div>
          <ProjectInquiryBottom />
        </div>


        {/* <div className={styles.formTitle}>簡単30秒で完了 ガイドダウンロード</div>
        <div className={styles.formContainer}>
          <Inquiry
            thanksPage={`/inquiry_thanks${project.url}`}
          />
        </div> */}

        <section className={styles.otherGuideContainer}>
          <div className={styles.title}>おすすめの海外不動産物件資料</div>
          <div className={styles.carouselContainer}>
            <MultiItemCarousel
              slidesToShow={3}
              arrows
              nextArrow={<arrow2></arrow2>}
              prevArrow={<arrow2></arrow2>}
              items={
                recommendedProperties?.map((g, index) =>
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

        <section className={`${styles.otherLinkContainer} container my-5`}>
          <div className="mt-5">
            <div className={styles.title}>{project?.building?.prefecture}の不動産物件を部屋の大きさから探す</div>
            <div className={`${styles.linkContainer} mt-3`}>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/less-than-30-sqm`}>
                {project?.building?.prefecture}の30㎡以下の不動産物件
              </Link>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/less-than-30-to-60-sqm`}>
                {project?.building?.prefecture}の30㎡から60㎡の不動産物件
              </Link>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/less-than-60-to-90-sqm`}>
                {project?.building?.prefecture}の60㎡から90㎡の不動産物件
              </Link>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/less-than-90-to-120-sqm`}>
                {project?.building?.prefecture}の90㎡から120㎡の不動産物件
              </Link>
              <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/more-than-120-sqm`}>
                {project?.building?.prefecture}の120㎡以上の不動産物件
              </Link>
            </div>

            <div className="mt-5">
              <div className={styles.title}>{project?.building?.prefecture}のベッドルームの数から不動産物件を探す</div>
              <div className={`${styles.linkContainer} mt-3`}>
                <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/1-bedrooms`}>
                  {project?.building?.prefecture}の1ベッドルームの不動産物件
                </Link>
                <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/2-bedrooms`}>
                  {project?.building?.prefecture}の2ベッドルームの不動産物件
                </Link>
                <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/3-bedrooms`}>
                  {project?.building?.prefecture}の3ベッドルームの不動産物件
                </Link>
                <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/4-bedrooms`}>
                  {project?.building?.prefecture}の4ベッドルームの不動産物件
                </Link>
                <Link href={`/search/${project?.building?.country_en}/${project?.building?.prefecture_en}/5-bedrooms`}>
                  {project?.building?.prefecture}の5ベッドルームの不動産物件
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section >
    </>
  );
};

export default ProjectDetails;