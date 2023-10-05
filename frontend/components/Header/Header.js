import Image from "next/image"
import styles from "./Header.module.scss"
import Link from "next/link"
import Dropdown from "../Dropdown/Dropdown"
import DropdownMobile from "../DropdownMobile/DropdownMobile"

export default function Header() {
  return (
    <>
      <section className={styles.headerContainerPC}>
        <div className={styles.logo}>
          <Image
            src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/logo-201911.png"
            width={400}
            height={166}
          />
        </div>
        <div className={styles.menuContainer}>
          <Link href={`/about-sekai`}>セカイプロパティとは</Link>
          <Dropdown
            dropdownTrigger={<Link href={`/library`}>海外不動産ガイド</Link>}
            dropdownItems={
              <div className={styles.headerDropdownItems}>
                <Link href={"/library"}>全て</Link>
                <Link href={"/global/malaysia-guide"}>マレーシア</Link>
                <Link href={"/global/philippines-guide"}>フィリピン</Link>
                <Link href={"/global/cambodia-guide"}>カンボジア</Link>
                <Link href={"/global/thailand-guide"}>タイ</Link>
                <Link href={"/global/vietnam-guide"}>ベトナム</Link>
                <Link href={"/global/dubai-guide"}>ドバイ</Link>
                <Link href={"/global/america-guide"}>アメリカ</Link>
                <Link href={"/global/hawaii-guide"}>ハワイ</Link>
                <Link href={"/global/mongol-guide"}>モンゴル</Link>
              </div>
            }
          />
          <Link href={`/property_materials`}>おすすめ物件資料</Link>
          <Dropdown
            dropdownTrigger={<Link href={`/article`}>コラム</Link>}
            dropdownItems={
              <div className={styles.headerDropdownItems}>
                <Link href={"/article"}>全て</Link>
                <Link href={"/article/malaysia"}>マレーシア</Link>
                <Link href={"/article/philippines"}>フィリピン</Link>
                <Link href={"/article/cambodia"}>カンボジア</Link>
                <Link href={"/article/thailand"}>タイ</Link>
                <Link href={"/article/vietnam"}>ベトナム</Link>
                <Link href={"/article/dubai"}>ドバイ</Link>
                <Link href={"/article/united states"}>アメリカ</Link>
                <Link href={"/article/hawaii"}>ハワイ</Link>
                <Link href={"/article/asset-management"}>資産運用</Link>
              </div>
            }
          />
          <Dropdown
            dropdownTrigger={<Link href={`/news`}>NEWS</Link>}
            dropdownItems={
              <div className={styles.headerDropdownItems}>
                <Link href={"/news"}>全て</Link>
                <Link href={"/news/malaysia"}>マレーシア</Link>
                <Link href={"/news/philippines"}>フィリピン</Link>
                <Link href={"/news/cambodia"}>カンボジア</Link>
                <Link href={"/news/thailand"}>タイ</Link>
                <Link href={"/news/vietnam"}>ベトナム</Link>
                <Link href={"/news/united states"}>アメリカ</Link>
                <Link href={"/news/hawaii"}>ハワイ</Link>
              </div>
            }
          />
          <Link href={`/interview`}>オーナー様の声</Link>
          <Link href={`/seminar`}>海外不動産セミナー</Link>
          <div className={styles.searchIconContainer}>
            <div className={styles.iconMglass}></div>
            <div>物件検索</div>
          </div>
        </div>
      </section>
      <section className={styles.headerContainerSP}>
        <div className={styles.hamburgerMenu}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className={styles.hamburgerModal}>
            <li><Link href={`/about-sekai`}>セカイプロパティとは</Link></li>
            <li>
              <DropdownMobile
                dropdownTrigger={'海外不動産ガイド'}
                dropdownItems={
                  <div className="row">
                    <div className="col-6 mt-1"><Link href={"/library"}>全て</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/malaysia-guide"}>マレーシア</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/philippines-guide"}>フィリピン</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/cambodia-guide"}>カンボジア</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/thailand-guide"}>タイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/vietnam-guide"}>ベトナム</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/dubai-guide"}>ドバイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/america-guide"}>アメリカ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/hawaii-guide"}>ハワイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/global/mongol-guide"}>モンゴル</Link></div>
                  </div>
                }
              />
            </li>
            <li><Link href={`/property_materials`}>おすすめ物件資料</Link></li>
            <li>
              <DropdownMobile
                dropdownTrigger={'コラム'}
                dropdownItems={
                  <div className='row'>
                    <div className="col-6 mt-1"><Link href={"/article"}>全て</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/malaysia"}>マレーシア</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/philippines"}>フィリピン</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/cambodia"}>カンボジア</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/thailand"}>タイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/vietnam"}>ベトナム</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/dubai"}>ドバイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/united states"}>アメリカ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/hawaii"}>ハワイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/article/asset-management"}>資産運用</Link></div>
                  </div>
                }
              />
            </li>
            <li>
            <DropdownMobile
                dropdownTrigger={'NEWS'}
                dropdownItems={
                  <div className='row'>
                    <div className="col-6 mt-1"><Link href={"/news"}>全て</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/malaysia"}>マレーシア</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/philippines"}>フィリピン</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/cambodia"}>カンボジア</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/thailand"}>タイ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/vietnam"}>ベトナム</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/united states"}>アメリカ</Link></div>
                    <div className="col-6 mt-1"><Link href={"/news/hawaii"}>ハワイ</Link></div>
                  </div>
                }
              />
            </li>
            <li><Link href={`/interview`}>オーナー様の声</Link></li>
            <li><Link href={`/seminar`}>海外不動産セミナー</Link></li>
          </ul>
        </div>
        <div className={styles.logo}>
          <Image
            src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/logo-201911.png"
            width={400}
            height={166}
          />
        </div>
        <div className={styles.searchIconContainer}>
          <div className={styles.iconMglass}></div>
          <div>物件検索</div>
        </div>
      </section>
    </>
  )
}