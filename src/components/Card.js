import React from "react";
import "./card.scss";

const fontdroid = {
  fontFamily: "Droid Arabic Kufi, serif",
};
const mySocial = {
  fbnajah: "https:facebook.com/enajah2000/",
};

function Card(props) {
  return (
    <div className="card-course">
      <h2 className="title-level-course"> {props.title}</h2>
      <div className="price-course">
        {props.price}
        <span style={fontdroid}> دج </span>
      </div>
      <div className="small-info">{props.smallinfo}</div>
      <ul className="features-list">
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          تدريب حضوري مكثف وسلس
        </li>
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          مرافقة دائمة خلال التدريب
        </li>
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          الدورة باللغة العربية الواضحة
        </li>
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          التطبيق المكثف والمنظم
        </li>
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          هدايا وعروض ممتعة
        </li>
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          الحصول على شهادة معتمدة
        </li>
        <li className="feature-item">
          <i className="fas fa-check-circle"></i>
          دعم واتساب لمدة شهر بعد الدورة
        </li>
      </ul>
      <a
        href={mySocial.fbnajah}
        target="_blank"
        rel="noreferrer"
        className="regester-final"
      >
        احجز مقعدك في مركز النجاح
      </a>
    </div>
  );
}

export default Card;
