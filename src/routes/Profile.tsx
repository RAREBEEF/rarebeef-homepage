import styles from "./Profile.module.scss";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";

import { ProfilePropType } from "../types";
import Skill from "../components/Skill";

const Profile: React.FC<ProfilePropType> = () => {
  // const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);
  const [age, setAge] = useState<number>(0);
  // const [infoText, setInfoText] = useState<string>("");
  // const infoWindowRef = useRef<any>(null);

  useEffect(() => {
    const date = new Date();
    setAge(
      date.getMonth() < 10 || (date.getMonth() === 10 && date.getDate() < 6)
        ? date.getFullYear() - 1998
        : date.getFullYear() - 1997
    );

    // const windowScrollListner = (): void => {
    //   setShowInfoWindow(false);
    // };

    // window.addEventListener("scroll", windowScrollListner);

    // return () => {
    //   window.removeEventListener("scroll", windowScrollListner);
    // };
  }, []);

  // const onMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
  //   if (!infoWindowRef.current || !showInfoWindow) {
  //     return;
  //   }

  //   const currentRef = infoWindowRef.current;

  //   const x = e.clientX;
  //   const y = e.clientY;
  //   currentRef.style.transform = `translate(${x}px, ${y}px)`;
  // };

  // const onMouseEnter = (e: any): void => {
  //   setShowInfoWindow(true);

  //   if (e.target.id === "name") {
  //     setInfoText("본명 : 송의영");

  //     return;
  //   }

  //   if (e.target.id === "birth-date") {
  //     setInfoText(`${age}살`);

  //     return;
  //   }

  //   if (e.target.id === "first-plan") {
  //     setInfoText("제작한 웹 앱을 모바일 앱으로 이식하기");

  //     return;
  //   }

  //   if (e.target.id === "second-plan") {
  //     setInfoText("메타버스에 대비하기");

  //     return;
  //   }
  // };

  // const onTouch = (e: any): void => {
  //   if (!e.target.alt) {
  //     return;
  //   }

  //   setShowInfoWindow(true);

  //   const currentRef = infoWindowRef.current;

  //   const x = e.clientX;
  //   const y = e.clientY;
  //   currentRef.style.transform = `translate(${x}px, ${y}px)`;
  //   setShowInfoWindow(true);

  //   if (e.target.id === "name") {
  //     setInfoText("본명 : 송의영");

  //     return;
  //   }

  //   if (e.target.id === "birth-date") {
  //     setInfoText(`${age}살`);

  //     return;
  //   }

  //   if (e.target.id === "first-plan") {
  //     setInfoText("제작한 웹 앱을 모바일 앱으로 이식하기");

  //     return;
  //   }

  //   if (e.target.id === "second-plan") {
  //     setInfoText("메타버스에 대비하기");

  //     return;
  //   }
  // };

  // const onMouseLeave = (): void => {
  //   setShowInfoWindow(false);
  //   setInfoText("");
  // };

  return (
    <div className={styles.container} /* onMouseMove={onMouseMove} */>
      <Header
        title={["About", "me"]}
        subTitle={["Junior Developer"]}
        classes={["Profile"]}
      />
      {/* <div
        ref={infoWindowRef}
        className={classNames(
          styles["info-window"],
          showInfoWindow && styles.show
        )}
      >
        <span className={styles["info-text"]}>{infoText}</span>
      </div> */}
      <div className={styles.content}>
        <section
          className={styles.section}
          id="name"
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          // onTouchStart={onTouch}
        >
          <h2 className={styles.header}>Name</h2>
          <span className={styles.text}>소고기는레어</span>
        </section>
        <section
          className={styles.section}
          id="birth-date"
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          // onTouchStart={onTouch}
        >
          <h2 className={styles.header}>Birth date</h2>
          <span className={styles.text}>1998/10/06&nbsp;&nbsp;[{age}살]</span>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Skills</h2>
          <ul>
            <li>
              <h3 className={styles["sub-header"]}>Front-end</h3>
              <ul className={styles["skills__front-end"]}>
                <Skill skill="HTML" />
                <Skill skill="CSS" />
                <Skill skill="JavaScript" />
                <Skill skill="TypeScript" />
                <Skill skill="React" />
                <Skill skill="Sass" />
                <Skill skill="Redux" />
                <Skill skill="Three.js" />
                <Skill skill="Firebase" />
                <Skill skill="Netlify" />
              </ul>
            </li>
            <li>
              <h3 className={styles["sub-header"]}>Design</h3>
              <ul className={styles["skills__design"]}>
                <Skill skill="Illustrator" />
                <Skill skill="Blender" />
              </ul>
            </li>
          </ul>
        </section>
        <section className={classNames(styles.section, styles.plan)}>
          <h2 className={styles.header}>Next plan...</h2>
          <ol>
            <li
              id={"first-plan"}
              className={styles["sub-header"]}
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
              // onTouchStart={onTouch}
            >
              1. React Native
            </li>
            <li
              id={"second-plan"}
              className={styles["sub-header"]}
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
              // onTouchStart={onTouch}
            >
              2. React VR
            </li>
          </ol>
        </section>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Profile;
