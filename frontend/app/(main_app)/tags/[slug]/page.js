import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";
import Posts from "@/components/Posts/Index";
import { notFound } from 'next/navigation';

const getPosts = async (tagName, currentPage) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: {
        "tags_name_ja_eq": tagName
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

export default async function Page({ params, searchParams }) {
  const tagName = decodeURI(params.slug)
  const currentPage = searchParams.page
  const posts = await getPosts(tagName, currentPage);
  const seminars = await getSeminars();
  console.log(params)
  return (
    <div>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          <span className="mx-1">/</span>
          <span>{tagName}</span>
        </div>
      </div>
      <h3 className="text-center">{tagName}</h3>
      <div className={styles.articlesContainer}>
        <Posts
          paginationBaseURL={`/tags/${tagName}`}
          posts={posts}
          seminars={seminars}
        />
      </div>
    </div >
  )
}