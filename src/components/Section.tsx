import React, { ReactElement, useEffect, useRef } from "react";
import styles from "./Section.module.scss";
import Header from "./Header";
import Skill from "./Skill";
import classNames from "classnames";
import Button from "./Button";
import arrow from "../images/icons/angle-left-solid.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import { SectionPropType } from "../types";

const Section: React.FC<SectionPropType> = ({ data }): ReactElement => {
  const screenshotsRef = useRef<HTMLDivElement>(null);

  const swiperGeneroator = (): Array<any> => {
    if (!data.imgs) {
      return [];
    }

    const swiperReturn: Array<any> = [];

    data.imgs.forEach((img, i) => {
      swiperReturn.push(
        <SwiperSlide className={styles["swiper__item"]} key={i}>
          <img src={img} alt="Screenshot" />
        </SwiperSlide>
      );
    });

    return swiperReturn;
  };

  const skillGeneroator = (): Array<any> => {
    const skillReturn: Array<any> = [];

    data.skills.forEach((skill, i) => {
      skillReturn.push(<Skill skill={skill} key={i} />);
    });

    return skillReturn;
  };

  const linkGeneroator = (): Array<any> => {
    const linkReturn: Array<any> = [];

    data.links.forEach((link, i) => {
      linkReturn.push(
        <Button
          key={i}
          icon={link.icon}
          href={link.href}
          classes={["Home__project-link"]}
        />
      );
    });

    return linkReturn;
  };

  useEffect(() => {
    if (!data.imgs) {
      return;
    }

    const windowScrollListner = () => {
      if (!screenshotsRef.current) {
        return;
      }

      let scrollDegree =
        screenshotsRef.current.getBoundingClientRect().top - window.innerHeight;

      if (
        scrollDegree < 0 &&
        !screenshotsRef.current.classList.contains(styles.active)
      ) {
        screenshotsRef.current.classList.add(styles.active);
      } else if (
        scrollDegree > 0 &&
        screenshotsRef.current.classList.contains(styles.active)
      ) {
        screenshotsRef.current.classList.remove(styles.active);
      }
    };

    window.addEventListener("scroll", windowScrollListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
    };
  }, [data.imgs]);

  return (
    <section
      className={classNames(
        styles.container,
        data.name.map((item: string): string => styles[item])
      )}
    >
      <Header
        title={data.header.title}
        subTitle={data.header.subTitle}
        classes={data.name}
      />
      <main className={styles.content}>
        {data.imgs && (
          <div className={styles.screenshots} ref={screenshotsRef}>
            <Swiper
              color="black"
              className={styles["swiper__container"]}
              modules={[Navigation, Pagination, EffectCoverflow, Pagination]}
              navigation={{ nextEl: ".nav--next", prevEl: ".nav--prev" }}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              slidesPerView={1}
              effect="coverflow"
              coverflowEffect={{
                slideShadows: false,
              }}
              spaceBetween={20}
              grabCursor
              loop={true}
            >
              <div className={styles["swiper__navigation-wrapper"]}>
                <div className={styles["swiper__navigation"]}>
                  <img
                    className={classNames(styles["swiper__arrow"], "nav--prev")}
                    src={arrow}
                    alt="Previous screenshot"
                  />
                </div>
                <div className={styles["swiper__navigation"]}>
                  <img
                    className={classNames(styles["swiper__arrow"], "nav--next")}
                    src={arrow}
                    alt="Next screenshot"
                  />
                </div>
              </div>
              {swiperGeneroator()}
            </Swiper>
          </div>
        )}
        {data.app && <data.app />}
        <div
          className={classNames(styles.summary, styles.card, "scroll-fade-in")}
        >
          <h3 className={styles["card__title"]}>Project summary</h3>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트명</h4>
            <p
              className={classNames(
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              {data.summary.name}
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>개발 기간</h4>
            <p
              className={classNames(
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              {data.summary.date}
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>개발 인원</h4>
            <p
              className={classNames(
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              {data.summary.headCount}명
            </p>
          </div>
        </div>
        <div
          className={classNames(
            styles.description,
            styles.card,
            "scroll-fade-in"
          )}
        >
          <h3 className={styles["card__title"]}>Description</h3>
          <p
            className={classNames(
              styles["description__text"],
              styles["card__content"]
            )}
          >
            {data.description}
          </p>
        </div>
        <div
          className={classNames(styles.skills, styles.card, "scroll-fade-in")}
        >
          <h3 className={styles["card__title"]}>Skills</h3>
          <ul
            className={classNames(
              styles["skill-icons"],
              styles["card__content"]
            )}
          >
            {skillGeneroator()}
          </ul>
        </div>
        <div
          className={classNames(styles.links, styles.card, "scroll-fade-in")}
        >
          <h3 className={styles["card__title"]}>Links</h3>
          <div
            className={classNames(
              styles["links-wrapper"],
              styles["card__content"]
            )}
          >
            {linkGeneroator()}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Section;
