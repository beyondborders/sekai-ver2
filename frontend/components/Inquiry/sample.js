import React from 'react';
import { Link as ScrollLink, Element as ScrollElement, scroller } from 'react-scroll';
import u from '../utils/UtilFunctions';

import API from './API';

export default class InquiryVer5WithAsset extends React.Component {

  state = {
    name: '',
    phone: '',
    email: '',
    occupation: '',
    budget: '',
    paymentMethod: '',
    totalAssetIncludingRealEstate: '',
    assetCash: '',
    assetSecurities: '',
    assetRealEstate: '',
    assetCrypto: '',
    assetOther: '',
    seminar_date_options: '',
    expected_purchase_date: '',
    validPhone: '',
    validEmail: '',
    submitDisabled: false,
    step: 1,
    openAssetPopup: false,
    alreadySubmitStep1: false,
    step1InquiryId: '',
    step1InquiryDbId: ''
  }

  handleRadioChange(stateName, val) {
    this.setState({ [stateName]: val })
  }

  handleTextChange(event, stateName) {
    this.setState({ [stateName]: event.target.value })
  }

  handleOptionChange(event, stateName) {
    this.setState({
      [stateName]: event.target.value
    })
  }

  handleClickNext() {
    this.setState({ step: this.state.step + 1 })
  }

  handleClickBack() {
    this.setState({ step: this.state.step - 1 })
  }

  renderButton(scrollTarget, disabled) {
    return (
      <div className={`pointer button button-old ${disabled ? 'btn-disabled' : ''}`} id={`btn-${scrollTarget}`} onClick={() => this.handleClickNext(scrollTarget)}>
        次のステップへ
      </div>
    )
  }

  validatePhone() {
    let result = u.validatePhone(this.state.phone)
    this.setState({
      validPhone: result
    })
  }

  validateEmail() {
    let result = u.validateEmail(this.state.email)
    this.setState({
      validEmail: result
    })
  }

  getDeviceInformation() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    return isMobile.matches ? 'SP' : 'PC'
  }

  handleSendStep1() {
    if (!this.state.alreadySubmitStep1) {
      var sendData = {}
      var properties_params = {}

      properties_params['firstname'] = { 'value': this.state.name }
      properties_params['email'] = { 'value': this.state.email }
      properties_params['phone'] = { 'value': this.state.phone }
      properties_params['budget'] = { 'value': this.state.budget }
      properties_params['payment_method'] = { 'value': this.state.paymentMethod }
      sendData['properties'] = properties_params;
      sendData['form-submissions'] = [{ 'page-url': window.location.href }]

      sendData['guide_information'] = {
        'title': this.props.email_title,
        'subject': this.props.email_subject,
        'download_url': this.props.download_url,
        'email_template': this.props.email_template,
      }

      API.post(`/hubspot_step_inquiries`, sendData).then((res) => {
        this.setState({
          step1InquiryId: res.data.inquiry_id,
          step1InquiryDbId: res.data.inquiry_db_id
        })
      })
      this.setState({
        step: this.state.step + 1,
        alreadySubmitStep1: true,
      })
    } else {
      this.setState({
        step: this.state.step + 1
      })
    }
  }

  handleSubmit() {
    if (!this.state.submitDisabled) {
      this.setState({ submitDisabled: true });
      var sendData = {}
      var properties_params = {}

      let seminar_date_data = ''
      let seminar_date = ''

      if (!!this.state.seminar_date_options) {
        seminar_date_data = this.state.seminar_date_options.match(/\d+|\D+/g)
        seminar_date = `2021-${seminar_date_data[0]}-${seminar_date_data[2]} ${seminar_date_data[4]}:${seminar_date_data[6]}`
        let seminar_date_raw = seminar_date = new Date(new Date(seminar_date).getTime() + (3600000 * 16))
        seminar_date = `${seminar_date_raw.getUTCFullYear()}-${seminar_date_raw.getMonth() + 1}-${seminar_date_raw.getDate()} ${seminar_date_raw.getHours()}:${seminar_date_raw.getMinutes()}`
      }

      const ASSET_LIST = {
        "5億円〜": 5, "〜5億円": 5, "〜3億円": 3, "〜1億円": 1,
        "〜5,000万円": 0.5, "〜3,000万円": 0.3, "〜1,000万円": 0.1,
      }
      let total_asset = ((ASSET_LIST[this.state.assetCash] || 0) + (ASSET_LIST[this.state.assetSecurities] || 0) + (ASSET_LIST[this.state.assetRealEstate] || 0)
        + (ASSET_LIST[this.state.assetCrypto] || 0) + (ASSET_LIST[this.state.assetOther] || 0)).toFixed(2)

      properties_params['firstname'] = { 'value': this.state.name }
      properties_params['email'] = { 'value': this.state.email }
      properties_params['phone'] = { 'value': this.state.phone }
      properties_params['budget'] = { 'value': this.state.budget }
      properties_params['payment_method'] = { 'value': this.state.paymentMethod }
      properties_params['expected_purchase_date'] = { 'value': this.state.expected_purchase_date }
      properties_params['total_asset_including_real_estate'] = { 'value': this.state.totalAssetIncludingRealEstate }
      // properties_params['seminar_date_options'] = {'value': this.state.seminar_date_options}
      // properties_params['seminar_content'] = {'value': this.props.seminar_content}
      // properties_params['seminar_date_zoho'] = {'value': seminar_date}
      // properties_params['seminar_date_text'] = {'value': this.state.seminar_date_options}
      properties_params['device'] = { 'value': this.getDeviceInformation() }
      // properties_params['inquiry_id'] = {'value': this.state.step1InquiryId}
      // properties_params['inquiry_db_id'] = {'value': this.state.step1InquiryDbId}
      // properties_params['asset_cash'] = {'value': this.state.assetCash || '特になし'}
      // properties_params['asset_securities'] = {'value': this.state.assetSecurities || '特になし'}
      // properties_params['asset_real_estate'] = {'value': this.state.assetRealEstate || '特になし'}
      // properties_params['asset_crypto'] = {'value': this.state.assetCrypto || '特になし'}
      // properties_params['asset_others'] = {'value': this.state.assetOther || '特になし'}
      // properties_params['total_asset'] = {'value': total_asset.toString()}
      // properties_params['occupation'] = {'value': this.state.occupation}
      properties_params['first_landing_page'] = { 'value': getCookie('first_landing_page') || '' }

      sendData['properties'] = properties_params;
      sendData['form-submissions'] = [{ 'page-url': window.location.href }]
      // sendData['guide_information'] = {
      //   'title': this.props.email_title,
      //   'subject': this.props.email_subject,
      //   'download_url': this.props.download_url,
      //   'email_template': this.props.email_template,
      // }

      // setCookie('lp_thanks_email', this.state.email, 1)
      API.post('/hubspot_inquiries', sendData).then((res) => {
        window.location = this.props.thanks_page_url
      })
    }
  }

  renderQuestionIcon() {
    return (
      <div className='icon'>
        <img src={this.props.icon_image || 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/images/JO_Chatbot/ver3/chat-icon.png'} />
        {/* <img src={this.props.icon_image || 'https://sekai-property-assets.s3-ap-northeast-1.amazonaws.com/images/JO_Chatbot/ver3/kirinuki_JO.png'} /> */}
      </div>
    );
  }

  renderStep(currentStep, maxStep) {
    const items = []
    for (let i = 1; i <= maxStep; i++) {
      items.push(<li className={`${currentStep == i ? 'current' : ''}`}>STEP {i}</li>)
    }

    if (maxStep < 4) {
      items.push(<li className="no-step">完了</li>)
    }

    return (
      <div className='this-step'>
        <ol className="stepBar">
          {items}
        </ol>
      </div>
    )
  }

  render() {
    const extraQ = !!this.props.seminar_date_options ? 100 : 0;
    const maxStep = 3 + (!!this.props.seminar_date_options ? 1 : 0);

    return (
      <div className='chatbotLP5 standalone' id='ver5'>
        <div className='chatbot-content'>
          <div className={`main ${this.props.fullWidth ? 'full-width' : ''}`}>
            <div className='chatbot-container d-block d-md-flex'>
              <div className='main-box'>
                {this.renderStep(this.state.step, maxStep)}
                <div className='stage'>
                  <div className='stage-content' style={{ left: `${0 - (100 * (this.state.step - 1))}%` }}>
                    {
                      this.props.seminar_date_options ?
                        <div>
                          <ScrollElement name="step0" className='step-container' style={{ left: 0 }}>
                            <div className='lock-container'>
                              <div className='lock-content'>
                                <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                                <div>個人情報は公開されません</div>
                              </div>
                            </div>
                            <div className='form-step-content'>
                              <div className='w-100'>
                                <div className='question-container'>
                                  {this.renderQuestionIcon()}
                                  <div className='question-bubble-old'>
                                    <div>ご希望のセミナー日程を選択してください。</div>
                                  </div>
                                </div>
                                <div className='answer-container'>
                                  <div className='secure-select-old mt-2'>
                                    <select value={this.state.seminar_date_options} className='form-control' onChange={(e) => { this.handleOptionChange(e, 'seminar_date_options') }}>
                                      <option value="" disabled selected>セミナー日程をご選択ください。</option>
                                      {
                                        this.props.seminar_date_options.split("\n").map((option, key) =>
                                          <option key={key} value={option}>{option}</option>
                                        )
                                      }
                                    </select>
                                    <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='button-wrap mt-4'>
                              <div></div>
                              {this.renderButton('step1', !this.state.seminar_date_options)}
                            </div>
                          </ScrollElement>
                          <ScrollElement style={{ left: '100%' }} name="step1" className={`step-container pt-4`}>
                            <div className='lock-container'>
                              <div className='lock-content'>
                                <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                                <div>個人情報は公開されません</div>
                              </div>
                            </div>
                            <div className='form-step-content'>
                              <div className='w-100'>
                                <div className='question-container'>
                                  {this.renderQuestionIcon()}
                                  <div className='question-bubble-old'>
                                    <div>お名前を入力してください。</div>
                                  </div>
                                </div>
                                <div className='answer-container'>
                                  <div className='secure-input-old mt-2'>
                                    <input autoComplete='new-password' className='form-control fz-18 rounded w-100 text-black' placeholder='お名前をご入力ください' name='newname' id='form-name' type='text' value={this.state.name} onChange={(e) => this.handleTextChange(e, 'name')} />
                                    <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='button-wrap mt-4'>
                              <div className="button button-old back" onClick={() => { this.handleClickBack() }}>戻る</div>
                              {this.renderButton('step2', !this.state.name)}
                            </div>
                          </ScrollElement>
                        </div> :
                        <ScrollElement style={{ left: 0 }} name="step1" className={`step-container`}>
                          <div className='lock-container'>
                            <div className='lock-content'>
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                              <div>個人情報は公開されません</div>
                            </div>
                          </div>
                          <div className='form-step-content'>
                            <div className='w-100'>
                              <div className='question-container'>
                                {this.renderQuestionIcon()}
                                <div className='question-bubble-old'>
                                  <div>お名前を入力してください。</div>
                                </div>
                              </div>
                              <div className='answer-container'>
                                <div className='secure-input-old mt-2'>
                                  <input autoComplete='new-password' className='form-control fz-18 rounded w-100 text-black' placeholder='お名前をご入力ください' name='newname' id='form-name' type='text' value={this.state.name} onChange={(e) => this.handleTextChange(e, 'name')} />
                                  <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='button-wrap mt-4 justify-content-center'>
                            {this.renderButton('step2', !this.state.name)}
                          </div>
                        </ScrollElement>
                    }
                    <ScrollElement style={{ left: `${extraQ + 100}%` }} name="step2" className={`step-container pt-4`}>
                      <div className='lock-container'>
                        <div className='lock-content'>
                          <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                          <div>個人情報は公開されません</div>
                        </div>
                      </div>
                      <div className='form-step-content'>
                        <div className='w-100'>
                          <div className='question-container'>
                            {this.renderQuestionIcon()}
                            <div className='question-bubble-old'>
                              <div>ご連絡先を入力してください。</div>
                            </div>
                          </div>
                          <div className='answer-container'>
                            {
                              // this.state.validPhone === false && <span className='ml-3 fz-14 text-red'>正しい情報をご入力ください</span>
                              this.state.validPhone === false && <span className='ml-3 fz-14 text-red'>書式が不正です</span>
                            }
                            <div className='secure-input-old mt-2'>
                              <input autoComplete='new-password' className='form-control fz-18 rounded w-100 text-black' placeholder='携帯電話番号をご入力ください' id='form-phone' name='phone' type='tel' value={this.state.phone} onBlur={() => this.validatePhone()} onChange={(e) => this.handleTextChange(e, 'phone')} />
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                            {
                              // this.state.validEmail === false && <span className='ml-3 fz-14 text-red'>正しい情報をご入力ください</span>
                              this.state.validEmail === false && <span className='ml-3 fz-14 text-red'>書式が不正です</span>

                            }
                            <div className='secure-input-old mt-2'>
                              <input autoComplete='new-password' className='form-control fz-18 rounded w-100 text-black' placeholder='メールアドレスをご入力ください' id='form-email' name='email' type='email' value={this.state.email} onBlur={() => this.validateEmail()} onChange={(e) => this.handleTextChange(e, 'email')} />
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='button-wrap mt-4'>
                        <div className="button button-old back" onClick={() => { this.handleClickBack() }}>戻る</div>
                        {this.renderButton('step3', !this.state.validPhone || !this.state.validEmail)}
                      </div>
                    </ScrollElement>
                    <ScrollElement style={{ left: `${extraQ + 200}%` }} name="step3" className={`step-container pt-4`}>
                      <div className='lock-container'>
                        <div className='lock-content'>
                          <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                          <div>個人情報は公開されません</div>
                        </div>
                      </div>
                      <div className='form-step-content'>
                        <div className='w-100'>
                          <div className='question-container'>
                            {this.renderQuestionIcon()}
                            <div className='question-bubble-old'>
                              <div>ご予算とお支払い方法を選択してください。</div>
                            </div>
                          </div>
                          <div className='answer-container'>
                            <div className='secure-select-old mt-2'>
                              <select value={this.state.budget} className='form-control' onChange={(e) => { this.handleOptionChange(e, 'budget') }}>
                                <option value="" disabled selected>予算をご選択ください。</option>
                                <option value="1億円～">1億円～</option>
                                <option value="～1億円">～1億円</option>
                                <option value="～7,000万円">～7,000万円</option>
                                <option value="～4,000万円">～4,000万円</option>
                                <option value="～2,000万円">～2,000万円</option>
                                <option value="～1,000万円">～1,000万円</option>
                                <option value="～800万円">～800万円</option>
                              </select>
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                            <div className='secure-select-old mt-2'>
                              <select value={this.state.paymentMethod} className='form-control' onChange={(e) => { this.handleOptionChange(e, 'paymentMethod') }}>
                                <option value="" disabled selected>お支払い方法をご選択ください。</option>
                                <option value="現金">現金</option>
                                <option value="ローン必須">ローン必須</option>
                              </select>
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                            <div className='secure-select-old mt-2'>
                              <select value={this.state.totalAssetIncludingRealEstate} className='form-control' onChange={(e) => { this.handleOptionChange(e, 'totalAssetIncludingRealEstate') }}>
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
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='button-wrap mt-2'>
                        <div className="button button-old back lastback" onClick={() => { this.handleClickBack() }}>戻る</div>
                        <div id='cv-button' className={`pointer button button-old submit-button ${(!this.state.budget || !this.state.paymentMethod || !this.state.totalAssetIncludingRealEstate) ? 'btn-disabled' : ''}`} onClick={() => this.handleSubmit()}>
                          {/* {this.props.buttonText || "資料を無料ダウンロードする"} */}
                          同意して、入力内容を送信する
                        </div>
                      </div>
                      <div className='center fz-11 mt-3'>
                        上記フォーム内容を送信することにより、<br className='d-block d-lg-none' /><a target='_blank' href='/ja_terms-privacypolicy.html' className=''>個人情報の取り扱いについて</a>へ同意したこととなります。
                      </div>
                    </ScrollElement>
                    <ScrollElement style={{ left: `${extraQ + 100}%` }} name="step2" className={`step-container pt-4`}>
                      <div className='lock-container'>
                        <div className='lock-content'>
                          <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                          <div>個人情報は公開されません</div>
                        </div>
                      </div>
                      <div className='form-step-content'>
                        <div className='w-100'>
                          <div className='question-container'>
                            {this.renderQuestionIcon()}
                            <div className='question-bubble-old'>
                              <div>ご連絡先を入力してください。</div>
                            </div>
                          </div>
                          <div className='answer-container'>
                            {
                              // this.state.validPhone === false && <span className='ml-3 fz-14 text-red'>正しい情報をご入力ください</span>
                              this.state.validPhone === false && <span className='ml-3 fz-14 text-red'>書式が不正です</span>
                            }
                            <div className='secure-input-old mt-2'>
                              <input autoComplete='new-password' className='form-control fz-18 rounded w-100 text-black' placeholder='携帯電話番号をご入力ください' id='form-phone' name='phone' type='tel' value={this.state.phone} onBlur={() => this.validatePhone()} onChange={(e) => this.handleTextChange(e, 'phone')} />
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                            {
                              // this.state.validEmail === false && <span className='ml-3 fz-14 text-red'>正しい情報をご入力ください</span>
                              this.state.validEmail === false && <span className='ml-3 fz-14 text-red'>書式が不正です</span>
                            }
                            <div className='secure-input-old mt-2'>
                              <input autoComplete='new-password' className='form-control fz-18 rounded w-100 text-black' placeholder='メールアドレスをご入力ください' id='form-email' name='email' type='email' value={this.state.email} onBlur={() => this.validateEmail()} onChange={(e) => this.handleTextChange(e, 'email')} />
                              <img src='https://beyondborders.jp/jinzai/lp/ver2/img/lock.png' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='button-wrap mt-4'>
                        <div className="button button-old back" onClick={() => { this.handleClickBack() }}>戻る</div>
                        {this.renderButton('step3', !this.state.validPhone || !this.state.validEmail)}
                      </div>
                    </ScrollElement>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}