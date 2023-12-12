import Image from "next/image"
import Link from "next/link"
import styles from "./posts.module.scss"
import Pagination from "./Pagination";
import SidePost from "./SidePost";

export default function Posts(props) {
  const { paginationBaseURL, posts, seminars } = props 

  return (
    <section className={styles.postsContainer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="row">
              {
                posts?.posts?.map((post, index) => {
                  let category = post.category === 'knowhow' ? 'article' : post.category;
                  return (
                    <Link href={`/${category}/${post.id}`} key={index} className={`${styles.postsCard} col-12 col-lg-4 ${index > 0 ? "mt-4" : ""} ${index > 2 ? "mt-lg-5" : "mt-lg-0"}`}>
                      <img className={styles.image} src={post.eyecatch_image?.url} />
                      <div className={styles.publishDate}>{post.publish_date.substring(0, 10).replaceAll('-', '.')}</div>
                      <div className={styles.title}>{post.title}</div>
                      <div className={styles.content}>{post.content}</div>
                    </Link>
                  )
                })
              }
            </div>
            <Pagination
              totalItems={posts?._links.total_pages}
              currentPage={posts?._links.current_page}
              totalPages={posts?._links.total_pages}
              baseURL={paginationBaseURL}
            />
          </div>
          <div className="col-12 col-lg-3 mt-4 mt-lg-0">
            <SidePost
              seminars={seminars}
            />
          </div>
        </div>
      </div>
    </section >
  );
}