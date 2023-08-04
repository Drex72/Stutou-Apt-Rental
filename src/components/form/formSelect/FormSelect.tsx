/* eslint-disable react/jsx-props-no-spreading */
import Select from "react-select";
import styles from "./formSelect.module.css";
import { FormSelectProps } from "./propType";

function FormSelect(props: FormSelectProps) {
  const { error, id, options, bottomLabel, disabled, dropdownProps, isMulti, label, loading, placeholder, small, subLabel } = props
  return (
    <div className={`${styles.FormSelect} ${small ? styles["FormSelect-small"] : ""} ${styles["transparent"]}`}>
      <div className={styles["label-wrapper"]}>
        <label htmlFor={id}>{label}</label>
      </div>


      {subLabel && <p className={styles.subLabel}>{subLabel}</p>}
      <div data-testid={id}>
        <Select
          options={options}
          placeholder={placeholder}
          isDisabled={disabled}
          isMulti={isMulti}
          {...dropdownProps}
          isLoading={loading}
          id={id}
        />
      </div>
      {bottomLabel && <p className={styles["bottom-label"]}>{bottomLabel}</p>}
      {error && (
        <p className={styles.formfeedback}>
          {`${id} ${error}`}
        </p>
      )}
    </div>
  );
}

export default FormSelect;
