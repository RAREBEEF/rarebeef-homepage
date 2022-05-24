import { useCallback, useState } from "react";
import { GuestBookPropType } from "../types";
import Button from "./Button";
import styles from "./GuestBook.module.scss";
import * as FB from "../fb";
import classNames from "classnames";

const GuestBook: React.FC<GuestBookPropType> = ({ data }) => {
  const [pwCheck, setPwCheck] = useState<string>("");

  const onPwCheckChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPwCheck(e.target.value);
    },
    []
  );

  const onDelete = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (pwCheck.length === 0) {
        window.alert("비밀번호를 입력해주세요.");
        return;
      }

      if (pwCheck !== data.pw) {
        window.alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      const ok = window.confirm("삭제하시겠습니까?");

      if (!ok) {
        return;
      }

      await FB.deleteDoc(FB.doc(FB.db, "GuestBook", data.id));
    },
    [data.id, data.pw, pwCheck]
  );

  return (
    <li className={styles["container"]}>
      <div className={classNames(styles.text, styles.content)}>
        {data.content}
      </div>
      <div className={classNames(styles.text, styles.name)}>{data.name}</div>
      <div className={classNames(styles.text, styles.date)}>{`${new Date(
        data.createdAt
      ).getFullYear()}/${
        new Date(data.createdAt).getMonth() < 10 ? "0" : ""
      }${new Date(data.createdAt).getMonth()}/${
        new Date(data.createdAt).getDate() < 10 ? "0" : ""
      }${new Date(data.createdAt).getDate()} ${
        new Date(data.createdAt).getHours() < 10 ? "0" : ""
      }${new Date(data.createdAt).getHours()}:${
        new Date(data.createdAt).getMinutes() < 10 ? "0" : ""
      }${new Date(data.createdAt).getMinutes()}`}</div>
      <form className={styles.form} onSubmit={onDelete}>
        <input
          hidden
          type="text"
          autoComplete="username"
          defaultValue={data.name}
        ></input>
        <input
          type="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          value={pwCheck}
          onChange={onPwCheckChange}
          className={styles["input--check-pw"]}
        />
        <Button text="삭제" classes={["GuestBook"]} />
      </form>
    </li>
  );
};

export default GuestBook;