import Image from "next/image"
import Link from "next/link"
import SearchInput from "./SearchInput";
import styles from "./posts.module.scss"

export default function SidePost(props) {
  const { seminars, relatedPosts, hideOnMobile } = props;
  return (
    <div className={`${styles.sideContentContainer} ${hideOnMobile ? styles.hideOnMobile : ""}`}>
      <div>
        <div className={styles.sideText}>コンテンツ検索</div>
        <div>
          <SearchInput />
        </div>
        {!!relatedPosts && relatedPosts.length > 0 &&
          <>
            <div className={`${styles.sideText} mt-4`}>よく読まれている記事</div>
            <div>
              {relatedPosts?.map((post, index) => {
                let category = post.category === 'knowhow' ? 'article' : post.category;
                return (
                  <div className="mb-2">
                    <Link href={`/${category}/${post.id}`} key={index} className={`${styles.postsCard} col-12 col-lg-4`}>
                      <img className={styles.image} src={post.eyecatch_image?.url} />
                      <div>{post.title}</div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </>
        }
        <div className={`${styles.sideText} mt-4`}>最近のセミナー</div>
        <div>
          {seminars?.seminars?.map((seminar, index) => {
            return (
              <div key={index} className="mt-3">
                <Link href={`/seminar/${seminar.id}`} className={`${styles.seminarCard}`}>
                  <div className={styles.seminarImage}>
                    <img
                      src={seminar.eyecatch_images[0]?.url}
                      width='100%'
                    />
                  </div>
                  <div className={styles.seminarTitle}>{seminar.title}</div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-4">
        <Link href="/signup" className={styles.bannerContainer}>
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/membership-square.jpg"}
            width={257}
            height={275}
          />
        </Link>
      </div>
      <div className="mt-4">
        <a href="https://line.me/R/ti/p/@dzn0852l" className={styles.bannerContainer}>
          <Image
            src={"https://s3-ap-northeast-1.amazonaws.com/sekai-property-assets/images/line%401x.png"}
            width={257}
            height={215}
          />
        </a>
      </div>
      <div className="mt-4 d-none d-lg-block">
        <a href="https://twitter.com/jasekaiproperty" target="_blank" className={styles.bannerContainer}>
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/x.png"}
            width={872}
            height={260}
          />
        </a>
      </div>
      <div className="mt-4 d-none d-lg-block">
        <a href="https://business.facebook.com/sekaiproperty" target="_blank" className={styles.bannerContainer}>
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/fb.png"}
            width={872}
            height={260}
          />
        </a>
      </div>
      <div className="mt-4 d-none d-lg-block">
        <a href="https://www.instagram.com/sekaiproperty_jp" target="_blank" className={styles.bannerContainer}>
          <Image
            src={"https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/ig.png"}
            width={872}
            height={260}
          />
        </a>
      </div>
    </div>
  )
}