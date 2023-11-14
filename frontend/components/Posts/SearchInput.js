'use client'

import styles from "./SearchInput.module.scss"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchInput = (props) => {
  const router = useRouter()

  const [Keyword, setKeyword] = useState('')

  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.iconMglass} onClick={()=>{router.push(window.location.href.split('?')[0] + `?search=${Keyword}`)}}></div>
      <input type="text" value={Keyword} onChange={(e)=>{setKeyword(e.target.value)}} placeholder="「記事、ニュース、インタビュー」を検索する"/>
    </div>
  );
};

export default SearchInput;