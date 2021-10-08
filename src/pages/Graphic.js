import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "./graphic.scss";
import "../components/card.scss";

const fontdroid = {
  fontFamily: "Droid Arabic Kufi, serif",
};
function Graphic() {
  return (
    <>
      <Navbar />
      <div className="intro-front">
        <h2 className="first">دورة التصميم الغرافيكي</h2>
        <h2 className="second">Course Graphic Design</h2>
        <p>
          تغطي دورة التصميم الغرافيكي جميع مبادئ التصميم وتحيط بأشهر البرامج
          العملاقة مثل برنامج الفوتوشوب والإلستراتور والإنديزاين، وتجعلك مؤهلا
          للدخول في سوق العمل واكتساب الخبرات اللازمة
        </p>
      </div>
      <h2 className="title-road-map">مسار الدورة </h2>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">Adobe Photoshop</div>
          <div className="number">01</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name right">Adobe Illustrator</div>
          <div className="number">02</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">Adobe InDesign</div>
          <div className="number">03</div>
        </div>
      </div>

      <div className="level-courses">
        <h2 className="title-level">مستويات الدورة</h2>
        <div className="container-level">
          <div className="level-card">
            <h3 className="title-single-level">المستوى الأول</h3>
            <ul className="content-level">
              <li>
                <span>Adobe Photoshop</span>
              </li>
              <li>
                <span style={fontdroid}>مبادئ التصميم</span>
              </li>
              <li>تطبيقات صغيرة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>7000</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الثاني</h3>
            <ul className="content-level">
              <li>
                <span>Adobe Illustrator</span>
              </li>
              <li>
                <span style={fontdroid}>مبادئ التصميم</span>
              </li>
              <li>تطبيقات صغيرة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>7000</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الثالث</h3>
            <ul className="content-level">
              <li>
                <span>Adobe InDesign</span>
              </li>
              <li>
                <span style={fontdroid}>مبادئ التصميم</span>
              </li>
              <li>تطبيقات صغيرة</li>
            </ul>
            <h3 className="price-level">
              السعر: <span>7000</span> دج
            </h3>
          </div>
        </div>
      </div>

      <h2 className="title-prices-course">أسعار الدورة </h2>
      <div className="container-card-prices">
        <Card
          price={"7000"}
          title={"مستوى واحد فقط"}
          smallinfo={"لمستوى واحد من دورة واحدة فقط"}
        />
        <Card
          price={"19500"}
          title={"الدورة كاملة"}
          smallinfo={"للاشتراك في الدورة كاملة"}
        />
        <Card
          price={"6000"}
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
          <div className="number-info">03</div>
        </div>
        <div className="part-duration">
          <div className="title-info">المجموع بالساعات</div>
          <div className="number-info">18</div>
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

export default Graphic;
