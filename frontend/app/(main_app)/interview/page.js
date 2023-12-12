import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts/Index";
import { notFound } from 'next/navigation';

const getPosts = async (type, currentPage, searchKeyword) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: {
        "category_eq": type,
        "title_cont": searchKeyword
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
  const type = "interview"
  const currentPage = searchParams.page
  const searchKeyword = searchParams.search
  const posts = await getPosts(type, currentPage, searchKeyword);
  const seminars = await getSeminars();
  return (
    <div>
      <div className={styles.FV}>
        <div className="d-none d-lg-block">
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/interview_PC.png"}
            priority={true}
            fill={true}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="d-block d-lg-none">
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/interview_SP.png"}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className={styles.FVText}>
          <h1>オーナー様の声</h1>
          <div className="mt-3">
            海外不動産を所有する目的や購入理由について<br/>
            オーナー様にお伺いいたしました。
          </div>
        </div>
      </div>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          <span className="mx-1">/</span>
          <Link href='/interview'>オーナー様の声</Link>
        </div>
      </div>
      <div className={styles.articlesContainer}>
        <Posts
          paginationBaseURL={`/interview`}
          posts={posts}
          seminars={seminars}
        />
      </div>
    </div >
  )
}