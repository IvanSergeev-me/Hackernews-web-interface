import type { FunctionComponent } from "react";
import style from "./NotFound.module.scss";

const NotFound: FunctionComponent = () => {
  return (
    <section className={style.nf_container}>
      <p className={style.nf_container__upper_text}>This page is</p>
      <p className={style.nf_container__bottom_text}>Not found</p>
    </section>
  );
};

export default NotFound;
