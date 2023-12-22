import styles from "./SearchModal.module.scss"

export default function SearchModal(props) {
  const {open, close} = props
  return (
    !!open &&
    <div className={styles.searchModal}>
      a
    </div>
  )
}
