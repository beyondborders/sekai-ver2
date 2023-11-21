'use client'

import Image from "next/image"
import Link from "next/link"
import styles from "./postDetails.module.scss"
import { notFound } from 'next/navigation';
import { useEffect, useState } from "react";
import SidePost from "./SidePost";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'next-share';

export default function PostDetails(props) {
  const { post, seminars } = props

  const [guideBanner, setGuideBanner] = useState({
    link: "",
    img: "",
    img_mobile: "",
  })
  const [latestNews, setLatestNews] = useState([])

  useEffect(() => {
    if (!!post) {
      let guide = {
        link: '',
        img: '',
        img_mobile: '',
      }
      if (!!post.guide) {
        guide = {
          link: post.guide.url,
          img: post.guide.post_image_url,
          img_mobile: post.guide.post_image_url_mobile || post.guide.post_image_url,
        }
      } else {
        var target_countries = '';
        if (!!post && !!post.countries && !!post.countries.length > 0) {
          target_countries = post.countries[0].country_code;
        }
        switch (target_countries) {
          case 'MYS': guide = { link: '/global/malaysia-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-malaysia.png' }; break;
          case 'KHM': guide = { link: '/global/cambodia-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-cambodia.png' }; break;
          case 'THA': guide = { link: '/global/thailand-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-thailand.png' }; break;
          case 'VNM': guide = { link: '/global/vietnam-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-vietnam.png' }; break;
          case 'PHL': guide = { link: '/global/philippines-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-philippines.png' }; break;
          case 'USA': guide = { link: '/global/america-guide', img: 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/banner/article-bottom/article-bottom-america.png' }; break;
        }
      }
      if (!guide.img_mobile) {
        guide.img_mobile = guide.img
      }
      setGuideBanner(guide)
    }
  }, [])

  useEffect(() => {
    if (!!post) {
      if (!document.getElementById('toc')) {
        var h2 = document.getElementsByTagName('h2');
        if (!!h2[0]) {
          h2[0].insertAdjacentHTML('beforebegin', `<div id='toc'><input id="hide-toc" type="checkbox" checked=""><label for='hide-toc' id='toc-header'><span>目次</span></label><div id='toc-content'></div></div>`);
          var documentRef = documentRef || document;
          var toc = documentRef.getElementById('toc-content');
          var headings = [].slice.call(documentRef.body.querySelectorAll('h2'));
          headings.forEach(function (heading, index) {
            var anchor = documentRef.createElement('a');
            anchor.setAttribute('name', 'toc' + index);
            anchor.setAttribute('id', 'toc' + index);
            anchor.setAttribute('class', 'scroll-anchor');

            var link = documentRef.createElement('a');
            link.setAttribute('href', '#toc' + index);
            link.textContent = heading.textContent;

            var div = documentRef.createElement('div');
            div.setAttribute('class', "toc-" + heading.tagName.toLowerCase());

            div.appendChild(link);
            toc.appendChild(div);
            heading.parentNode.insertBefore(anchor, heading);
          });
        }
      }
      if (!document.getElementById('guidebook-mobile')) {
        var h2 = document.getElementsByTagName('h2');
        if (!!h2[0]) {
          if (!!guideBanner.link) {
            h2[0].insertAdjacentHTML('beforebegin', `<div id='guidebook-mobile' class=''><a href=${guideBanner.link}><img src=${guideBanner.img} width='100%' class='d-none d-lg-block'/><img src=${guideBanner.img_mobile || guideBanner.img} width='100%' class='d-block d-lg-none'/></a></div>`);
          }
        }
      }
    }
  }, [post, guideBanner, latestNews])

  const getLatestNews = async () => {
    const data = await fetch(`/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: {
          "category_eq": "news",
        },
        page: 1,
        page_count: "3"
      }),
      cache: 'no-store'
    });
    if (data.status !== 200) {
      console.log(data.status)
      notFound();
    }
    const posts = await data.json()
    setLatestNews(posts.data.posts)
    return posts
  }

  useEffect(() => {
    getLatestNews();
  }, [])

  return (
    <section className={styles.postDetailsContainer}>
      <div className="">
        <div className="row">
          <div className="col-12 col-lg-9 mb-4">
            <div className='post-content post' dangerouslySetInnerHTML={{ __html: post.content }}></div>
            {
              post?.related_posts.length > 0 &&
              <div className={`${styles.relatedPosts} mb-4`}>
                <div className={styles.title}>この記事を読んだ人におすすめの記事</div>
                {
                  post?.related_posts?.map((post, index) => {
                    let category = post.category === 'knowhow' ? 'article' : post.category;
                    return (
                      <div key={index} className="my-1">
                        <Link href={`/${category}/${post.id}`} >
                          ▪{post.title}
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            }
            {
              !!guideBanner.link &&
              <div className={`${styles.postGuide} mb-4`}>
                <Link href={guideBanner.link}>
                  <img src={guideBanner.img} className="d-none d-lg-block" />
                  <img src={guideBanner.img_mobile} className="d-block d-lg-none" />
                </Link>
              </div>
            }
            <div className={styles.snsShare}>
              <FacebookShareButton
                url={window.location.href} >
                <FacebookIcon size={32} round title="test" />
              </FacebookShareButton>
              <TwitterShareButton
                url={window.location.href} >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LineShareButton
                url={window.location.href} >
                <LineIcon size={32} round />
              </LineShareButton>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <SidePost
              seminars={seminars}
              hideOnMobile
            />
          </div>
          {
            post?.related_posts?.length > 0 &&
            <div className={`${styles.otherPostsContainer} col-12 mb-4`}>
              <div className={styles.mainTitle}>関連する記事</div>
              <div className="row">
                {
                  post?.related_posts?.map((post, index) => {
                    let category = post.category === 'knowhow' ? 'article' : post.category;
                    return (
                      <Link href={`/${category}/${post.id}`} key={index} className={`${styles.postsCard} col-12 col-lg-4 mt-3`}>
                        <img className={styles.image} src={post.eyecatch_image?.url} />
                        <div className={styles.publishDate}>{post.publish_date.substring(0, 10).replaceAll('-', '.')}</div>
                        <div className={styles.title}>{post.title}</div>
                        <div className={styles.content}>{post.content}</div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          }
          {latestNews?.length > 0 &&
            <div className={`${styles.otherPostsContainer} col-12 d-none d-lg-block mb-4`}>
              <div className={styles.mainTitle}>最新の海外不動産ニュースをチェック</div>
              <div className="row">
                {
                  latestNews.map((post, index) => {
                    let category = post.category === 'knowhow' ? 'article' : post.category;
                    return (
                      <Link href={`/${category}/${post.id}`} key={index} className={`${styles.postsCard} col-12 col-lg-4 mt-3`}>
                        <img className={styles.image} src={post.eyecatch_image?.url} />
                        <div className={styles.publishDate}>{post.publish_date.substring(0, 10).replaceAll('-', '.')}</div>
                        <div className={styles.title}>{post.title}</div>
                        <div className={styles.content}>{post.content}</div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          }

        </div>
      </div>
    </section >
  );
}