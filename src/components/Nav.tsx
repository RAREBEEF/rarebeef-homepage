import { ReactElement, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavPropType } from "../types";
import styles from "./Nav.module.scss";
import menuIcon from "../images/circle-bars.svg";
import classNames from "classnames";
import dotsIcon from "../images/ellipsis-vertical-solid.svg";
import scrollIcon from "../images/angle-left-solid.svg";
import { ucs2 } from "punycode";

const Nav: React.FC<NavPropType> = ({
  scrollMod,
  setScrollMod,
}): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const [size, setSize] = useState<number>(30);
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const update = () => {
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const onModChange = useCallback(() => {
    setScrollMod(true);
  }, [setScrollMod])

  const onClick = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const dragCb = useCallback(
    (e: any) => {
      e.preventDefault();
      setSize((prev) =>
        prev - (e.movementX / clientWidth) * 50 < 0
          ? 0
          : prev - (e.movementX / clientWidth) * 50 > 100
          ? 100
          : prev - (e.movementX / clientWidth) * 50
      );
    },
    [clientWidth]
  );

  const onMouseUpCb = useCallback(() => {
    setResizing(false);
    window.removeEventListener("mousemove", dragCb);
  }, [dragCb]);

  const onResizeStart = useCallback(
    (e: any) => {
      e.preventDefault();
      setResizing(true);
      window.addEventListener("mousemove", dragCb);
      window.addEventListener("mouseup", onMouseUpCb, { once: true });
    },
    [dragCb, onMouseUpCb]
  );

  return (
    <div
      className={classNames(styles.container, showMenu && styles["show-menu"])}
    >
      <div
        className={classNames(styles["scroll-mod"], styles["mod-changer"])}
        onClick={onModChange}
        style={{
          opacity: scrollMod ? 0 : 1,
          pointerEvents: scrollMod ? "none" : "all",
        }}
      >
        <img
          className={styles["icon--scroll-mod"]}
          src={scrollIcon}
          alt="Back"
        />
        &nbsp;Back to scroll mod
      </div>
      <img
        className={styles["icon--menu"]}
        src={menuIcon}
        alt="menu"
        onClick={onClick}
      />
      <div className={styles["menu"]}>
        <div className={styles["menu__left-side"]} onClick={onClick} />
        <div className={styles["menu__resizer"]} onMouseDown={onResizeStart}>
          <img className={styles["icon--resize"]} src={dotsIcon} alt="resize" />
        </div>
        <ul
          className={styles["menu__right-side"]}
          style={{
            width: showMenu ? `${size}vw` : 0,
            transition: resizing ? "none" : "all 1s",
          }}
        >
          <NavLink
            to="/"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item)
                : classNames(styles.deactive, styles.item)
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item)
                : classNames(styles.deactive, styles.item)
            }
          >
            <li>About me</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item)
                : classNames(styles.deactive, styles.item)
            }
          >
            <li>Contact</li>
          </NavLink>
          <footer className={classNames(styles.footer, styles.item)}>
            &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
          </footer>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
