'use client'

import styles from "./SearchInput.module.scss"
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const SearchInput = (props) => {
  const router = useRouter()
  const pathname = usePathname()

  const [Keyword, setKeyword] = useState('')

  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.iconMglass} onClick={()=>{router.push(`/${pathname.split('/')[1]}?search=${Keyword}`)}}></div>
      <input type="text" value={Keyword} onChange={(e)=>{setKeyword(e.target.value)}} placeholder="「記事、ニュース、インタビュー」を検索する"/>
    </div>
  );
};

export default SearchInput;