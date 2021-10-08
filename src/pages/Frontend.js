import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "./frontend.scss";
import "../components/card.scss";

const fontdroid = {
  fontFamily: "Droid Arabic Kufi, serif",
};
function Frontend() {
  return (
    <>
      <Navbar />
      <div className="intro-front">
        <h2 className="first">
          دورة تطوير الواجهات الأمامية للمواقع الإلكترونية
        </h2>
        <h2 className="second">Course Frontend Developer</h2>
        <p>
          تغطي دورة تصميم الواجهات الأمامية للمواقع جميع المعارف والطرق والأسرار
          واللغات المتعارف عليها في عملية بناء المواقع الالكترونية
        </p>
      </div>
      <h2 className="title-road-map">مسار الدورة </h2>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">HTML5</div>
          <div className="number">01</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name right">CSS3</div>
          <div className="number">02</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">JavaScript</div>
          <div className="number">03</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name right">Sass</div>
          <div className="number">04</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">React.Js</div>
          <div className="number">05</div>
        </div>
      </div>

      <div className="level-courses">
        <h2 className="title-level">مستويات الدورة</h2>
        <div className="container-level">
          <div className="level-card">
            <h3 className="title-single-level">المستوى الأول</h3>
            <ul className="content-level">
              <li>
                <span>HTML5</span>
              </li>
              <li>
                <span>CSS3</span>
              </li>
              <li>تطبيقات صغيرة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الثاني</h3>
            <ul className="content-level">
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>ECMAScript 6</span>
              </li>
              <li>تطبيقات صغيرة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الثالث</h3>
            <ul className="content-level">
              <li>
                <span style={fontdroid}>بناء موقع كامل</span>
              </li>
              <li>
                <span style={fontdroid}>بناء متجر إلكتروني</span>
              </li>
              <li>بناء تطبيقات مشهورة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الرابع</h3>
            <ul className="content-level">
              <li>
                <span>Sass</span>
              </li>
              <li>
                <span style={fontdroid}>بناء موقع كامل</span>
              </li>
              <li>تطبيقات صغيرة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الخامس</h3>
            <ul className="content-level">
              <li>
                <span>React.js</span>
              </li>
              <li>
                <span>React Hooks</span>
              </li>
              <li>بناء موقع كامل</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
        </div>
      </div>

      <h2 className="title-prices-course">أسعار الدورة </h2>
      <div className="container-card-prices">
        <Card
          price={"8500"}
          title={"مستوى واحد فقط"}
          smallinfo={"لمستوى واحد من دورة واحدة فقط"}
        />
        <Card
          price={"40000"}
          title={"الدورة كاملة"}
          smallinfo={"للاشتراك في الدورة كاملة"}
        />
        <Card
          price={"6500"}
          title={"الاشتراك في دورتين"}
          smallinfo={"للمستوى الواحد للمشترك في أكثر من دورة"}
        />
      </div>
      <h2 className="for-anytitle">مدة كل مستوى</h2>
      <div className="duration-course">
        <div className="part-duration">
          <div className="title-info"> الحصص أسبوعيا</div>
          <div className="number-info">03</div>
        </div>
        <div className="part-duration">
          <div className="title-info">مدة الحصة (سا)</div>
          <div className="number-info">02</div>
        </div>
        <div className="part-duration">
          <div className="title-info">عدد الأسابيع</div>
          <div className="number-info">04</div>
        </div>
        <div className="part-duration">
          <div className="title-info">المجموع بالساعات</div>
          <div className="number-info">24</div>
        </div>
      </div>

      <h2 className="for-anytitle">متطلبات الدورة </h2>
      <div className="requirements">
        <div className="line-text">
          <span className="line-number">01</span>
          يجب على كل متدرب إحضار حاسوب محمول لكي يستطيع متابعة الدورة.
        </div>
        <div className="line-text">
          <span className="line-number">02</span>
          يمكن اعتماد حاسوب محمول واحد بين متدربين بشرط أن يتفقا على ذلك.
        </div>
        <div className="line-text">
          <span className="line-number">03</span>
          أن يكون المتدرب ذا معرفة مسبقة بأبجديات التعامل مع نظام ويندوز.
        </div>
        <div className="line-text">
          <span className="line-number">04</span>
          أن يتفرغ المتدرب تماما للأعمال والتطبيقات المنزلية الخاصة بالدورة.
        </div>
      </div>
    </>
  );
}

export default Frontend;
