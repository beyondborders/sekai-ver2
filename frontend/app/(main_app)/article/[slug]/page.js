import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

import { notFound } from 'next/navigation';
import PostDetails from "@/components/Posts/PostDetails";

const getPost = async (slug) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/${slug}`, { cache: 'no-store' });
  if (data.status !== 200) {
    notFound();
  }
  const post = data.json()
  return post
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

export default async function ArticleDetails({ params }) {
  let post = await getPost(params.slug);
  const seminars = await getSeminars();
  post = post.post;
  const countryJP = {
    KHM: {
      label: "カンボジア",
      link: '/cambodia',
    },
    MYS: {
      label: "マレーシア",
      link: '/malaysia',
    },
    PHP: {
      label: "フィリピン",
      link: '/philippines',
    },
    THA: {
      label: "タイ",
      link: '/thailand',
    },
    ARA: {
      label: "ドバイ",
      link: '/dubai',
    },
    VNM: {
      label: "ベトナム",
      link: '/vietnam',
    },
    USA: {
      label: "アメリカ",
      link: '/united states',
    },
    AS3: {
      label: "資産運用",
      link: '/asset-management',
    },
  }

  return (
    <section>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href='/'>TOP</Link>
          <span className="mx-1">/</span>
          <Link href='/article'>海外不動産コラム</Link>
          <span className="mx-1">/</span>
          <Link href={`/article${countryJP[post.countries[0]?.country_code]?.link}`}>{countryJP[post.countries[0]?.country_code]?.label}コラム</Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="mb-2">{post.publish_date}</div>
            <h1 className={`${styles.postTitle} mb-2`}>{post.title}</h1>
            <div className={`${styles.colorMain} mb-2`}>海外不動産コラム</div>
          </div>
        </div>

        <PostDetails
          post={post}
          seminars={seminars}
        />
      </div>
    </section>
  )
}