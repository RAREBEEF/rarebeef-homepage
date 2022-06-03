import styles from "./ScrollDown.module.scss";
import icon from "../images/icons/angles-down-solid.svg";
import { ScrollDownPropType } from "../types";
import classNames from "classnames";

const ScrollDown: React.FC<ScrollDownPropType> = ({}) => {
  return (
    <div className={classNames(styles.container)}>
      <img className={styles["icon-down"]} src={icon} alt="Scroll down" />
    </div>
  );
};

export default ScrollDown;
