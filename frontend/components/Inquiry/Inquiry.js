'use client'

import Image from "next/image"
import { useState } from 'react'
import styles from "./Inquiry.module.scss"
import Link from "next/link"

import { useRouter } from 'next/navigation'

export default function Inquiry(props) {

  const router = useRouter()

  const { thanksPage } = props
  const formWidth = '300%'

  const [currentStep, setCurrentStep] = useState(0)
  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [Budget, setBudget] = useState('')
  const [PaymentMethod, setPaymentMethod] = useState('')
  const [TotalAssetIncludingRealEstate, setTotalAssetIncludingRealEstate] = useState('')

  const renderStep = (currentStep) => {
    return (
      <div className={styles.stepContainer}>
        <ol className={styles.stepBar}>
          <li className={`${currentStep == 0 ? styles.current : ''}`}>STEP 1</li>
          <li className={`${currentStep == 1 ? styles.current : ''}`}>STEP 2</li>
          <li className={`${currentStep == 2 ? styles.current : ''}`}>STEP 3</li>
          <li className={styles.noStep}>完了</li>
        </ol>
      </div>
    )
  }

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

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/inquiries`, {
        method: 'POST',
        body: JSON.stringify({
          inquiry: {
            name: Name,
            tel: Phone,
            email: Email,
            budget: Budget,
            payment_Method: PaymentMethod,
            total_asset_including_real_estate: TotalAssetIncludingRealEstate
          }
        }),
      });

      if (response.ok) {
        // Request was successful
        const data = await response.json();
        console.log(data);
      } else {
        // Request failed
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // console.log(thanksPage)
    // router.push(thanksPage)
  }

  return (
    <section>
      <div className={styles.InquiryContainer}>
        {renderStep(currentStep)}
        <div className={styles.formSlider} style={{ width: formWidth, marginLeft: `${-100 * currentStep}%` }}>
          <div className={styles.sliderItem}>
            {renderLock()}
            <div className={styles.questionContainer}>
              <div className={styles.icon}>
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/JO_Chatbot/ver3/chat-icon.png'
                  width={64}
                  height={59}
                />
              </div>
              <div className={styles.question}>
                お名前を入力してください。
              </div>
            </div>
            <div className={styles.answerContainer}>
              <div className={`${styles.secureInput} mt-2`}>
                <input className='form-control' value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='お名前をご入力ください' />
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className={'text-center'}>
              <div className={`${styles.baseButton} ${styles.nextButton}`} onClick={() => { setCurrentStep(currentStep + 1) }}>次のステップへ</div>
            </div>
          </div>
          <div className={styles.sliderItem}>
            {renderLock()}
            <div className={styles.questionContainer}>
              <div className={styles.icon}>
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/JO_Chatbot/ver3/chat-icon.png'
                  width={64}
                  height={59}
                />
              </div>
              <div className={styles.question}>
                ご連絡先を入力してください。
              </div>
            </div>
            <div className={styles.answerContainer}>
              <div className={`${styles.secureInput} mt-2`}>
                <input className='form-control' type="tel" value={Phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='携帯電話番号をご入力ください' />
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
                  width={16}
                  height={16}
                />
              </div>
              <div className={`${styles.secureInput} mt-2`}>
                <input className='form-control' type="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder='メールアドレスをご入力ください' />
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={`${styles.baseButton} ${styles.prevButton}`} onClick={() => { setCurrentStep(currentStep - 1) }}>戻る</div>
              <div className={`${styles.baseButton} ${styles.nextButton}`} onClick={() => { setCurrentStep(currentStep + 1) }}>次のステップへ</div>
            </div>
          </div>
          <div className={styles.sliderItem}>
            {renderLock()}
            <div className={styles.questionContainer}>
              <div className={styles.icon}>
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/JO_Chatbot/ver3/chat-icon.png'
                  width={64}
                  height={59}
                />
              </div>
              <div className={styles.question}>
                ご連絡先を入力してください。
              </div>
            </div>
            <div className={styles.answerContainer}>
              <div className={`${styles.secureInput} mt-2`}>
                <select value={Budget} className='form-control' onChange={(e) => { setBudget(e.target.value) }}>
                  <option value="" disabled selected>予算をご選択ください。</option>
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
              </div>
              <div className={`${styles.secureInput} mt-2`}>
                <select value={PaymentMethod} className='form-control' onChange={(e) => { setPaymentMethod(e.target.value) }}>
                  <option value="" disabled selected>お支払い方法をご選択ください。</option>
                  <option value="現金">現金</option>
                  <option value="ローン必須">ローン必須</option>
                </select>
                <Image
                  src='https://sekai-property-assets.s3.ap-northeast-1.amazonaws.com/images/lock.png'
                  width={16}
                  height={16}
                />
              </div>
              <div className={`${styles.secureInput} mt-2`}>
                <select value={TotalAssetIncludingRealEstate} className='form-control' onChange={(e) => { setTotalAssetIncludingRealEstate(e.target.value) }}>
                  <option value="" disabled selected>ご資産※不動産を含む</option>
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
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={`${styles.baseButtonSubmit} ${styles.prevButton}`} onClick={() => { setCurrentStep(currentStep - 1) }}>戻る</div>
              <div className={`${styles.baseButtonSubmit} ${styles.nextButton}`} onClick={() => { handleSubmit() }}>同意して、入力内容を送信する</div>
            </div>
            <div className={`${styles.privacyText} mt-3`}>
              上記フォーム内容を送信することにより、<br className="d-lg-none" />
              <a target="_blank" href="/ja_terms-privacypolicy.html" className="">個人情報の取り扱いについて</a>へ同意したこととなります。</div>
          </div>
        </div>
      </div>
    </section>
  );
}