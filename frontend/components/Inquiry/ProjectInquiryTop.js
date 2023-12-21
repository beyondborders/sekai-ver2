'use client'

import Image from "next/image"
import { useState } from 'react'
import styles from "./ProjectInquiryTop.module.scss"
import Link from "next/link"

import { useRouter } from 'next/navigation'

export default function Inquiry(props) {

  const router = useRouter()

  const { thanksPage } = props

  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [Budget, setBudget] = useState('')
  const [PaymentMethod, setPaymentMethod] = useState('')
  const [TotalAssetIncludingRealEstate, setTotalAssetIncludingRealEstate] = useState('')
  const [Content, setContent] = useState('')

  const [ErrorName, setErrorName] = useState('')
  const [ErrorPhone, setErrorPhone] = useState('')
  const [ErrorEmail, setErrorEmail] = useState('')
  const [ErrorBudget, setErrorBudget] = useState('')
  const [ErrorPaymentMethod, setErrorPaymentMethod] = useState('')
  const [ErrorTotalAssetIncludingRealEstate, setErrorTotalAssetIncludingRealEstate] = useState('')

  const renderLock = () => {
    return (
      <div className={styles.lockContainer}>
        <div className={styles.lockContent}>
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div>個人情報は公開されません</div>
        </div>
      </div>
    )
  }

  const validateEmail = (email) => {
    if (!!email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    } else {
      return false
    }
  }
  const validatePhone = (phone) => {
    if (!!phone) {
      var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(phone)
    } else {
      return false
    }
  }

  const checkError = () => {
    let error = false
    if (!Name) {
      setErrorName("この必須項目を入力してください。")
      error = true
    } else {
      setErrorName("")
    }
    if (!Phone) {
      setErrorPhone("この必須項目を入力してください。")
      error = true
    } else {
      if (!validatePhone(Phone)) {
        setErrorPhone("入力された数字は範囲外です。")
        error = true
      } else {
        setErrorPhone("")
      }
    }
    if (!Email) {
      setErrorEmail("この必須項目を入力してください。")
      error = true
    } else {
      if (!validateEmail(Email)) {
        setErrorEmail("メールアドレスの形式が正しくありません。")
        error = true
      } else {
        setErrorEmail("")
      }
    }
    if (!Budget) {
      setErrorBudget("ドロップダウンメニューからオプションを選択してください。")
      error = true
    } else {
      setErrorBudget("")
    }
    if (!PaymentMethod) {
      setErrorPaymentMethod("ドロップダウンメニューからオプションを選択してください。")
      error = true
    } else {
      setErrorPaymentMethod("")
    }
    if (!TotalAssetIncludingRealEstate) {
      setErrorTotalAssetIncludingRealEstate("ドロップダウンメニューからオプションを選択してください。")
      error = true
    } else {
      setErrorTotalAssetIncludingRealEstate("")
    }
  }

  const handleSubmit = async () => {
    let hasError = checkError()
    if (!hasError) {
      try {
        const response = await fetch(`/api/inquiries`, {
          method: 'POST',
          body: JSON.stringify({
            inquiry: {
              name: Name,
              tel: Phone,
              email: Email,
              budget: Budget,
              payment_method: PaymentMethod,
              total_asset_including_real_estate: TotalAssetIncludingRealEstate,
              content: Content,
            }
          }),
        });

        if (response.ok) {
          // Request was successful
          const data = await response.json();
          console.log(data);
          router.push(thanksPage)
        } else {
          // Request failed
          console.error('Request failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  return (
    <section>
      <div className={styles.ProjectInquiryTopContainer}>

        <label className={`${styles.label} ${styles.required}`} htmlFor="name">お名前</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <input id="name" className='form-control' value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='お名前' />
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div className={styles.errorText}>{ErrorName}</div>
        </div>

        <label className={`${styles.label} ${styles.required}`} htmlFor="email">Eメール</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <input id="email" className='form-control' type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Eメール' />
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div className={styles.errorText}>{ErrorEmail}</div>
        </div>

        <label className={`${styles.label} ${styles.required}`} htmlFor="phone">電話番号</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <input id="phone" className='form-control' type="tel" value={Phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='電話番号' />
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div className={styles.errorText}>{ErrorPhone}</div>
        </div>

        <label className={`${styles.label} ${styles.required}`} htmlFor="budget">予算</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <select id="budget" value={Budget} className='form-control' onChange={(e) => { setBudget(e.target.value) }}>
            <option value="" disabled defaultChecked>予算</option>
            <option value="1億円～">1億円～</option>
            <option value="～1億円">～1億円</option>
            <option value="～7,000万円">～7,000万円</option>
            <option value="～4,000万円">～4,000万円</option>
            <option value="～2,000万円">～2,000万円</option>
            <option value="～1,000万円">～1,000万円</option>
            <option value="～800万円">～800万円</option>
          </select>
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div className={styles.errorText}>{ErrorBudget}</div>
        </div>

        <label className={`${styles.label} ${styles.required}`} htmlFor="paymentMethod">お支払い方法</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <select id="paymentMethod" value={PaymentMethod} className='form-control' onChange={(e) => { setPaymentMethod(e.target.value) }}>
            <option value="" disabled defaultChecked>お支払い方法</option>
            <option value="現金">現金</option>
            <option value="ローン必須">ローン必須</option>
          </select>
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div className={styles.errorText}>{ErrorPaymentMethod}</div>
        </div>

        <label className={`${styles.label} ${styles.required}`} htmlFor="asset">ご資産※不動産を含む</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <select id="asset" value={TotalAssetIncludingRealEstate} className='form-control' onChange={(e) => { setTotalAssetIncludingRealEstate(e.target.value) }}>
            <option value="" disabled defaultChecked>ご資産※不動産を含む</option>
            <option value="10億円以上">10億円以上</option>
            <option value="～10億円">～10億円</option>
            <option value="～5億円">～5億円</option>
            <option value="～3億円">～3億円</option>
            <option value="～1億円">～1億円</option>
            <option value="～5,000万円">～5,000万円</option>
            <option value="～3,000万円">～3,000万円</option>
            <option value="～2,000万円">～2,000万円</option>
          </select>
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
          <div className={styles.errorText}>{ErrorTotalAssetIncludingRealEstate}</div>
        </div>

        <label className={`${styles.label}`} htmlFor="content">その他ご要望</label>
        <div className={`${styles.secureInput} mt-1 mb-2`}>
          <textarea id="content" className='form-control' value={Content} onChange={(e) => { setContent(e.target.value) }} placeholder='その他ご要望' />
          <Image
            src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
            width={16}
            height={16}
          />
        </div>

        <div className={styles.buttonContainer}>
          <div className={`${styles.submitButton}`} onClick={() => { handleSubmit() }}>同意して、入力内容を送信する</div>
        </div>
        <div className={`${styles.privacyText} mt-3`}>
          上記フォーム内容を送信することにより、<br className="d-lg-none" />
          <a target="_blank" href="/ja_terms-privacypolicy.html" className="">個人情報の取り扱いについて</a>へ同意したこととなります。</div>

      </div>
    </section >
  );
}