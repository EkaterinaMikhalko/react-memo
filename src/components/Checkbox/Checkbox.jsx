import { useLightMode } from "../../hooks/useLightMode";
import styles from "./Checkbox.module.css";

export default function Checkbox({ id, name, label, onChange }) {
  const { isEasyMode } = useLightMode();
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={id}
        name={name}
        className={styles.input}
        // onClick={onClick}
        onChange={onChange}
        defaultChecked={isEasyMode}
      />

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
