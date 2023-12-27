import Image from "next/image"
import Link from "next/link"
import styles from "./SearchIndex.module.scss"
import Pagination from "../Posts/Pagination"
import SingleItemCarousel from "@/components/Carousel/SingleItemCarousel"

export default function Search(props) {
  const { paginationBaseURL, projects } = props

  return (
    <section className={styles.SearchContainer}>
      <div className="container pb-4">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {
                projects?.projects?.map((project, index) => {
                  return (
                    <div key={index} className={`${styles.projectsCard} col-12 mt-4`}>
                      <Link href={`/${project.type}/${project.id}`} className={styles.projectName}>{project.name}</Link>
                      <div className={styles.projectItemContainer}>
                        <Link href={`/${project.type}/${project.id}`} className={styles.slideshowContainer}>
                          <SingleItemCarousel
                            arrow
                            dots
                            items={
                              project.image_url.map((img, index) => {
                                return (
                                  <div className={styles.carouselImageContainer} key={index}>
                                    <Image
                                      src={img}
                                      fill={true}
                                      sizes="40vw"
                                      style={{ objectFit: "cover" }}
                                    />
                                  </div>
                                )
                              })
                            }
                          />
                        </Link>

                        <div className={styles.contentContainer}>
                          <div className={styles.propertymaterialTableRow}>
                            <div className={styles.propertymaterialTableTitle}>エリア</div>
                            <div className={styles.propertymaterialTableContent}>{"aaaa"}</div>
                          </div>
                          <div className={styles.propertymaterialTableRow}>
                            <div className={styles.propertymaterialTableTitle}>価格</div>
                            <div className={styles.propertymaterialTableContent}>{project.price}</div>
                          </div>
                          <div className={styles.propertymaterialTableRow}>
                            <div className={styles.propertymaterialTableTitle}>完成年</div>
                            <div className={styles.propertymaterialTableContent}>{project.constructed_at}</div>
                          </div>
                          <div className={styles.propertymaterialTableRow}>
                            <div className={styles.propertymaterialTableTitle}>専有面積</div>
                            <div className={styles.propertymaterialTableContent}>{project.square_meter}</div>
                          </div>
                          <div className={styles.propertymaterialTableRow}>
                            <div className={styles.propertymaterialTableTitle}>ベッドルーム数	</div>
                            <div className={styles.propertymaterialTableContent}>{project.number_of_bedrooms}</div>
                          </div>
                          <div className={`${styles.buttonContainer} mt-4`}>
                            <Link href={`/${project.type}/${project.id}`} className={styles.greyButton}>お問い合わせ</Link>
                            <Link href={`/${project.type}/${project.id}`} className={styles.blueButton}>お問い合わせ</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <Pagination
              totalItems={projects?._links.total_pages}
              currentPage={projects?._links.current_page}
              totalPages={projects?._links.total_pages}
              baseURL={paginationBaseURL}
            />
          </div>
        </div>
      </div>
    </section >
  );
}