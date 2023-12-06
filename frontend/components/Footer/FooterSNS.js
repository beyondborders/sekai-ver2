'use client'
import styles from "./Footer.module.scss"
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from 'next-share';

export default function FooterSNS() {
  return (
    <div className={styles.snsShare}>
      <a href="https://business.facebook.com/sekaiproperty/" target="_blank">
        <FacebookIcon size={32} round bgStyle={{ fill: "black" }} />
      </a>
      <a href="https://www.instagram.com/sekaiproperty_jp/" target="_blank">
        <InstagramIcon size={32} round bgStyle={{ fill: "black" }} />
      </a>
      <a href="https://twitter.com/jasekaiproperty" target="_blank">
        <TwitterIcon size={32} round iconFillColor="#FFF" />
      </a>
    </div>
  );
}