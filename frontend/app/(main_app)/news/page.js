import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts/Index";
import { notFound } from 'next/navigation';

const getPosts = async (type, currentPage) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: {
        "category_eq": type
      },
      page: currentPage,
      page_count: "15"
    }),
    cache: 'no-store'
  });
  if (data.status !== 200) {
    console.log(data.status)
    notFound();
  }
  const posts = await data.json()
  return posts
}

const getSeminars = async () => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/seminars/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      page_count: "3"
    }),
    cache: 'no-store'
  });
  if (data.status !== 200) {
    console.log(data.status)
    notFound();
  }
  const seminars = await data.json()
  return seminars
}

export default async function Page({ searchParams }) {
  const type = "news"
  const currentPage = searchParams.page
  const posts = await getPosts(type, currentPage);
  const seminars = await getSeminars();
  return (
    <div>
      <div className={styles.FV}>
        <div className="d-none d-lg-block">
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/news_PC.png"}
            sizes="100vw"
            width={1920}
            height={771}
          />
        </div>
        <div className="d-block d-lg-none">
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/news_SP.png"}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className={styles.FVText}>
          <h1>海外不動産ニュース</h1>
          <div className="mt-3">
            為替や経済情勢、インフラ情報など<br />
            海外不動産に関する最新ニュースをお届けいたします。
          </div>
        </div>
      </div>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          <span className="mx-1">/</span>
          <Link href='/news'>海外不動産ニュース</Link>
        </div>
      </div>
      <div className={styles.articlesContainer}>
        <Posts
          baseURL="/news"
          paginationBaseURL={`/news`}
          type="knowhow"
          currentPage={searchParams.page}
          posts={posts}
          seminars={seminars}
        />
      </div>
    </div >
  )
}