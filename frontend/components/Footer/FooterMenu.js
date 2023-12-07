import styles from "./FooterMenu.module.scss"

export default function FooterMenu() {
  return (

    <div className={styles.footerMenu}>
      <div className={styles.footerMenuList}>
        <div className={styles.footerMenuItem}>
          <a href="/library" className={styles.footerMenuAction}>
            <div>海外不動産<br />ガイド</div>
          </a>
        </div>
        <div className={styles.footerMenuItem}>
          <a href="/property_materials" className={styles.footerMenuAction}>
            <div>おすすめ<br />物件資料</div>
          </a>
        </div>
        <div className={styles.footerMenuItem}>
          <a href="/seminar" className={styles.footerMenuAction}>
            <div>海外不動産<br />セミナー</div>
          </a>
        </div>
        <div className={styles.footerMenuItem}>
          <a href="/contact-ja" className={styles.footerMenuAction}>
            <div>無料相談</div>
          </a>
        </div>
      </div>
    </div>
  );
}
