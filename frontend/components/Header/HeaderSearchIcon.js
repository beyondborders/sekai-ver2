"use client"

import { useState } from "react"
import SearchModal from "../Modal/SearchModal"
import styles from "./Header.module.scss"

export default function HeaderSearchIcon() {
  const [openSearchModal, setOpenSearchModal] = useState(false)
  return (
    <>
      <div className={styles.searchIconContainer} onClick={()=>{setOpenSearchModal(!openSearchModal)}}>
        <div className={styles.icon}><div className={styles.iconMglass}></div></div>
        <div>物件検索</div>
      </div>
      <SearchModal
        open={openSearchModal}
      />
    </>
  )
}