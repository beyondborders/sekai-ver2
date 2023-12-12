import Image from "next/image"
import styles from "./page.module.scss";
import Link from "next/link";

import { notFound } from 'next/navigation';
import Posts from "@/components/Posts/Index";
import PostDetails from "@/components/Posts/PostDetails";

const getPosts = async (type, currentPage, countryCode) => {
  const data = await fetch(`http://${process.env.API_BASE_URL}/api/v1/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: {
        "category_eq": type,
        "countries_country_code_eq": countryCode
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
      page_count: "5"
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

export default async function ArticleDetails({ params, searchParams }) {
  const defaultSlugMap = {
    'malaysia': "MYS",
    'philippines': "PHP",
    'cambodia': "KHM",
    'thailand': "THA",
    'vietnam': "VNM",
    'dubai': "ARA",
    'united-states': "USA",
    'asset-management': "AS3"
  }
  const renderIndex = async () => {
    const type = "knowhow"
    const currentPage = searchParams.page
    const posts = await getPosts(type, currentPage, defaultSlugMap[params.slug]);
    const seminars = getSeminars()
    return (
      <div>
        <div className={styles.FV}>
          <div className="d-none d-lg-block">
            <Image
              src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/column_PC.png"}
              priority={true}
              fill={true}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="d-block d-lg-none">
            <Image
              src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/column_SP.png"}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div className={styles.FVText}>
            <h1>海外不動産コラム</h1>
            <div className="mt-3">
              国ごとの特徴やメリット・デメリットなど<br />
              海外不動産投資のお役立ち情報をお届けしています。
            </div>
          </div>
        </div>
        <div className={styles.breadcrumbContainer}>
          <div className={styles.breadcrumb}>
            <Link href='/'>TOP</Link>
            <span className="mx-1">/</span>
            <Link href='/article'>海外不動産コラム</Link>
          </div>
        </div>
        <div className={styles.articlesContainer}>
          <Posts
            paginationBaseURL={`/article/${params.slug}`}
            posts={posts}
            seminars={seminars}
          />
        </div>
      </div>
    )
  }

  if (!!defaultSlugMap[params.slug]) {
    return (renderIndex(params))
  } else {
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
        link: '/united-states',
      },
      AS3: {
        label: "資産運用",
        link: '/asset-management',
      },
    }

    return (
      <section className={styles.postDetailContainer}>
        <div className={styles.breadcrumbContainer}>
          <div className={styles.breadcrumb}>
            <Link href='/'>TOP</Link>
            <span className="mx-1">/</span>
            <Link href='/article'>海外不動産コラム</Link>
            <span className="mx-1">/</span>
            {countryJP[post.countries[0]?.country_code] &&
              <Link href={`/article${countryJP[post.countries[0]?.country_code]?.link}`}>{countryJP[post.countries[0]?.country_code]?.label}コラム</Link>
            }
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="mb-2">{post.publish_date}</div>
              <h1 className={`${styles.postTitle} mb-2`}>{post.title}</h1>
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

}