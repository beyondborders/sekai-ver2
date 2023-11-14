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
  const type = "knowhow"
  const currentPage = searchParams.page
  const posts = await getPosts(type, currentPage);
  const seminars = await getSeminars();
  return (
    <div className={styles.articleContainer}>
      <Posts
        baseURL="/article"
        type="knowhow"
        currentPage={searchParams.page}
        posts={posts}
        seminars={seminars}
      />
    </div>
  )
}