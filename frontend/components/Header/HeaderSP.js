'use client'

import Image from "next/image"
import styles from "./Header.module.scss"
import Link from "next/link"
import DropdownMobile from "../DropdownMobile/DropdownMobile"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <section className={styles.headerContainerSP}>
      <div className={`${styles.hamburgerMenu} ${open ? styles.open : ''}`}>
        <input type="checkbox" onClick={() => { setOpen(!open) }} />
        <span></span>
        <span></span>
        <span></span>
        <ul className={styles.hamburgerModal}>
          <li><Link href={`/about-sekai`} onClick={() => { setOpen(!open) }}>セカイプロパティとは</Link></li>
          <li>
            <DropdownMobile
              dropdownTrigger={'海外不動産ガイド'}
              dropdownItems={
                <div className="row">
                  <div className="col-6 mt-1"><Link href={"/library"} onClick={() => { setOpen(!open) }}>全て</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/malaysia-guide"} onClick={() => { setOpen(!open) }}>マレーシア</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/philippines-guide"} onClick={() => { setOpen(!open) }}>フィリピン</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/cambodia-guide"} onClick={() => { setOpen(!open) }}>カンボジア</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/thailand-guide"} onClick={() => { setOpen(!open) }}>タイ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/vietnam-guide"} onClick={() => { setOpen(!open) }}>ベトナム</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/dubai-guide"} onClick={() => { setOpen(!open) }}>ドバイ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/america-guide"} onClick={() => { setOpen(!open) }}>アメリカ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/hawaii-guide"} onClick={() => { setOpen(!open) }}>ハワイ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/global/mongol-guide"} onClick={() => { setOpen(!open) }}>モンゴル</Link></div>
                </div>
              }
            />
          </li>
          <li><Link href={`/property_materials`} onClick={() => { setOpen(!open) }}>おすすめ物件資料</Link></li>
          <li>
            <DropdownMobile
              dropdownTrigger={'コラム'}
              dropdownItems={
                <div className='row'>
                  <div className="col-6 mt-1"><Link href={"/article"} onClick={() => { setOpen(!open) }}>全て</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/malaysia"} onClick={() => { setOpen(!open) }}>マレーシア</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/philippines"} onClick={() => { setOpen(!open) }}>フィリピン</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/cambodia"} onClick={() => { setOpen(!open) }}>カンボジア</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/thailand"} onClick={() => { setOpen(!open) }}>タイ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/vietnam"} onClick={() => { setOpen(!open) }}>ベトナム</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/dubai"} onClick={() => { setOpen(!open) }}>ドバイ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/united-states"} onClick={() => { setOpen(!open) }}>アメリカ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/article/asset-management"} onClick={() => { setOpen(!open) }}>資産運用</Link></div>
                </div>
              }
            />
          </li>
          <li>
            <DropdownMobile
              dropdownTrigger={'NEWS'}
              dropdownItems={
                <div className='row'>
                  <div className="col-6 mt-1"><Link href={"/news"} onClick={() => { setOpen(!open) }}>全て</Link></div>
                  <div className="col-6 mt-1"><Link href={"/news/malaysia"} onClick={() => { setOpen(!open) }}>マレーシア</Link></div>
                  <div className="col-6 mt-1"><Link href={"/news/philippines"} onClick={() => { setOpen(!open) }}>フィリピン</Link></div>
                  <div className="col-6 mt-1"><Link href={"/news/cambodia"} onClick={() => { setOpen(!open) }}>カンボジア</Link></div>
                  <div className="col-6 mt-1"><Link href={"/news/thailand"} onClick={() => { setOpen(!open) }}>タイ</Link></div>
                  <div className="col-6 mt-1"><Link href={"/news/vietnam"} onClick={() => { setOpen(!open) }}>ベトナム</Link></div>
                  <div className="col-6 mt-1"><Link href={"/news/united-states"} onClick={() => { setOpen(!open) }}>アメリカ</Link></div>
                </div>
              }
            />
          </li>
          <li><Link href={`/interview`} onClick={() => { setOpen(!open) }}>オーナー様の声</Link></li>
          <li><Link href={`/seminar`} onClick={() => { setOpen(!open) }}>海外不動産セミナー</Link></li>
        </ul>
      </div>
      <Link href='/'>
        <div className={styles.logo}>
          <Image
            src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/logo-201911.png"
            width={400}
            height={166}
            alt="セカイプロパティ"
          />
        </div>
      </Link>
      <div className="d-flex">
        <div className={`${styles.searchIconContainer}`}>
          <a href="tel:0120-643-293" >
            <div className={styles.icon}>
              <Image
                src="https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/tel-icon.png"
                width={50}
                height={50}
                alt="telephone-icon"
              />
            </div>
            <div>お問い合わせ</div>
          </a>
        </div>
        <div className={styles.searchIconContainer}>
          <div className={styles.icon}><div className={styles.iconMglass}></div></div>
          <div>物件検索</div>
        </div>
      </div>
    </section>
  )
}