import styles from './DropdownMobile.module.scss';

const DropdownMobile = (props) => {
  const { dropdownTrigger, dropdownItems } = props
  return (
    <div className={styles.dropdownTrigger}>
      <input type="checkbox" />
      <div className={styles.plusminus}></div>
      {dropdownTrigger}
      <div className={styles.dropdownItems}>
        {dropdownItems}
      </div>
    </div>
  );
};

export default DropdownMobile;