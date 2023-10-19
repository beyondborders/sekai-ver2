'use client'

import Image from "next/image"
import { useState } from 'react'
import styles from "./Inquiry.module.scss"
import Link from "next/link"

export default function Inquiry() {
  const [currentStep, setCurrentStep] = useState(0)
  const [experience, setExperience] = useState('')
  const [name, setName] = useState('')

  const formWidth = '200%';

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

  return (
    <section>
      <div className="container">
        <div className={styles.InquiryContainer}>
          {renderStep(currentStep)}
          <div className={styles.formSlider} style={{ width: formWidth, marginLeft: `${-100 * currentStep}%` }}>
            <div className={styles.sliderItem}>
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
              <div></div>
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
                <div class={`${styles.secureInput} mt-2`}>
                  <input className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='お名前をご入力ください' />
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
              <div></div>
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
                <div class={`${styles.secureInput} mt-2`}>
                  <input className='form-control' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='お名前をご入力ください' />
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
          </div>
        </div>
      </div>
    </section>
  );
}