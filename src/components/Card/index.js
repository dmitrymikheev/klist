import "./styles.css";
import React from "react";
import b_ from "bem-cn";

const bemCn = b_("card");

const Card = props => (
  <div className={bemCn()}>
    <div className={bemCn("title")()}>{props.title}</div>
    <div className={bemCn("subsections")()}>{props.subsections}</div>
    <div className={bemCn("body")()}>{props.children}</div>
  </div>
);
export default Card;
