import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";
import MultiItemCarousel from "@/components/Carousel/MultiItemCarousel"

import { notFound } from 'next/navigation';

const getPropertyMaterials = async () => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/property_materials/search`, {
    method: 'POST',
    cache: 'no-store'
  });
  if (data.status !== 200) {
    console.log(data.status)
    notFound();
  }
  const guides = await data.json()

  return guides
}

export default async function PropertyMaterials(props) {
  const res = await getPropertyMaterials();
  const recommended = res.property_materials.recommended
  const propertyMaterials = res.property_materials.countries

  return (
    <section>
      <div className={styles.FVImage}>
        <Image
          priority={true}
          fill={true}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/property_material_fv_PC.png"}
        />
        <div className={styles.FVText}>
          <h1>
            海外不動産の全てがわかる<br />
            おすすめの海外不動産物件資料
          </h1>
          利益の最大化とリスクの最小化、双方の観点で弊社が厳選した物件を<br />
          無料のダウンロード資料で紹介しております。<br />
          海外不動産投資で必要な情報収集にご活用ください。
        </div>
      </div>

      <div className="container py-4 py-lg-5">
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          <span className="mx-1">/</span>
          <Link href='/property_materials'>おすすめ物件資料</Link>
        </div>
        <div className={`mt-3 mt-lg-4 row`}>
          <div className={styles.sectionTitle}>セカイプロパティ厳選3物件</div>
          <div className={styles.carouselContainer}>
            <MultiItemCarousel
              slidesToShow={3}
              arrows
              nextArrow={<arrow2></arrow2>}
              prevArrow={<arrow2></arrow2>}
              items={
                recommended.map((g, index) =>
                  <Link href={g.url} key={index}>
                    <div className={`${styles.guideCard} ${styles.recommended}`}>
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
              }
            />
          </div>
        </div>
        <div className={`${styles.section2} mt-3 mt-lg-4 row`}>
          <div className={`${styles.sectionTitle} mt-5`}>国別のおすすめ物件</div>

          <div className='d-block d-lg-none'>
            <div className={styles.countryTitleSP}>カンボジア物件一覧</div>
            <div className={styles.carouselContainer}>
              <MultiItemCarousel
                slidesToShow={3}
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  propertyMaterials.cambodia?.map((g, index) =>
                    <Link href={g.url} key={index}>
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
                          <div>{g.label.split(`\r\n`)[0]}</div>
                          <div className={styles.bold}>{g.label.split(`\r\n`)[1]}</div>
                        </div>
                      </div>
                    </Link>
                  )
                } />
            </div>
            <div className={styles.countryTitleSP}>マレーシア物件一覧</div>
            <div className={styles.carouselContainer}>
              <MultiItemCarousel
                slidesToShow={3}
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  propertyMaterials.malaysia?.map((g, index) =>
                    <Link href={g.url} key={index}>
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
                          <div>{g.label.split(`\r\n`)[0]}</div>
                          <div className={styles.bold}>{g.label.split(`\r\n`)[1]}</div>
                        </div>
                      </div>
                    </Link>
                  )
                } />
            </div>
            <div className={styles.countryTitleSP}>フィリピン物件一覧</div>
            <div className={styles.carouselContainer}>
              <MultiItemCarousel
                slidesToShow={3}
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  propertyMaterials.philippines?.map((g, index) =>
                    <Link href={g.url} key={index}>
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
                          <div>{g.label.split(`\r\n`)[0]}</div>
                          <div className={styles.bold}>{g.label.split(`\r\n`)[1]}</div>
                        </div>
                      </div>
                    </Link>
                  )
                } />
            </div>
            <div className={styles.countryTitleSP}>タイ物件一覧</div>
            <div className={styles.carouselContainer}>
              <MultiItemCarousel
                slidesToShow={3}
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  propertyMaterials.thailand?.map((g, index) =>
                    <Link href={g.url} key={index}>
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
                          <div>{g.label.split(`\r\n`)[0]}</div>
                          <div className={styles.bold}>{g.label.split(`\r\n`)[1]}</div>
                        </div>
                      </div>
                    </Link>
                  )
                } />
            </div>
            <div className={styles.countryTitleSP}>ドバイ物件一覧</div>
            <div className={styles.carouselContainer}>
              <MultiItemCarousel
                slidesToShow={3}
                arrows
                nextArrow={<arrow2></arrow2>}
                prevArrow={<arrow2></arrow2>}
                items={
                  propertyMaterials.dubai?.map((g, index) =>
                    <Link href={g.url} key={index}>
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
                          <div>{g.label.split(`\r\n`)[0]}</div>
                          <div className={styles.bold}>{g.label.split(`\r\n`)[1]}</div>
                        </div>
                      </div>
                    </Link>
                  )
                } />
            </div>
          </div>
          <div className='d-none d-lg-block'>
            <div className={`${styles.tabs} mt-5`}>
              <input type="radio" name="tabset" id="tab1" className={styles.tab1} />
              <input type="radio" name="tabset" id="tab2" className={styles.tab2} />
              <input type="radio" name="tabset" id="tab3" className={styles.tab3} />
              <input type="radio" name="tabset" id="tab4" className={styles.tab4} />
              <input type="radio" name="tabset" id="tab5" className={styles.tab5} />
              <label htmlFor="tab1" className={styles.tab1label}>カンボジア</label>
              <label htmlFor="tab2" className={styles.tab2label}>マレーシア</label>
              <label htmlFor="tab3" className={styles.tab3label}>フィリピン</label>
              <label htmlFor="tab4" className={styles.tab4label}>タイ</label>
              <label htmlFor="tab5" className={styles.tab5label}>ドバイ</label>

              <div className={styles.tabsContent}>
                <div className={`${styles.part} ${styles.part1}`}>
                  <div className="row">
                    {
                      propertyMaterials.cambodia?.map((g, index) =>
                        <div className="col-4" key={index}>
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
                                    <div key={index} className={index == 0 ? styles.bold : ''}>{label}</div>
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
                <div className={`${styles.part} ${styles.part2}`}>
                  <div className="row">
                    {
                      propertyMaterials.malaysia?.map((g, index) =>
                        <div className="col-4" key={index}>
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
                                    <div key={index} className={index == 0 ? styles.bold : ''}>{label}</div>
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
                <div className={`${styles.part} ${styles.part3}`}>
                  <div className="row">
                    {
                      propertyMaterials.philippines?.map((g, index) =>
                        <div className="col-4" key={index}>
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
                                    <div key={index} className={index == 0 ? styles.bold : ''}>{label}</div>
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
                <div className={`${styles.part} ${styles.part4}`}>
                  <div className="row">
                    {
                      propertyMaterials.thai?.map((g, index) =>
                        <div className="col-4" key={index}>
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
                                    <div key={index} className={index == 0 ? styles.bold : ''}>{label}</div>
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
                <div className={`${styles.part} ${styles.part5}`}>
                  <div className="row">
                    {
                      propertyMaterials.dubai?.map((g, index) =>
                        <div className="col-4" key={index}>
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
                                    <div key={index} className={index == 0 ? styles.bold : ''}>{label}</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}