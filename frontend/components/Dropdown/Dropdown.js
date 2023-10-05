import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const {dropdownTrigger, dropdownItems} = props
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownTrigger}>
        {dropdownTrigger}
      </div>

      <div className={styles.dropdownContent}>
        {dropdownItems}
      </div>

    </div>
  );
};

export default Dropdown;