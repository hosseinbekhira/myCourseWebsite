import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "./ccourse.scss";
import "../components/card.scss";

function CCourse() {
  return (
    <>
      <Navbar />
      <div className="intro-front">
        <h2 className="first">
          دورة تعلم البرمجة بلغة <span>C++</span>
        </h2>
        <h2 className="second">Programming Basic C++</h2>

        <p>
          تغطي دورة تعلم أساسيات البرمجة بلغة
          <span> C++ </span>
          جميع المعارف البرمجية والآلات المساعدة لتقوية التفكير المنطقي البرمجي
        </p>
      </div>
      <h2 className="title-road-map">مسار الدورة </h2>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">C++ Level 1</div>
          <div className="number">01</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name right">C++ Level 2</div>
          <div className="number">02</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name left">C++ Level 3</div>
          <div className="number">03</div>
        </div>
      </div>
      <div className="road-map">
        <div className="box-content">
          <div className="tag-name right">C++ Level 4</div>
          <div className="number">04</div>
        </div>
      </div>
      <div className="level-courses">
        <h2 className="title-level">مستويات الدورة</h2>
        <div className="container-level">
          <div className="level-card">
            <h3 className="title-single-level">المستوى الأول</h3>
            <ul className="content-level">
              <li>
                <span>Basic Syntax</span>
              </li>
              <li>
                <span>Concepts Programming</span>
              </li>
              <li>
                <span>Control Flow & more</span>
              </li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الثاني</h3>
            <ul className="content-level">
              <li>
                <span>Exercices Level 01</span>
              </li>
              <li>
                <span>Exercices Level 02</span>
              </li>
              <li>
                <span>Exercices Level 03</span>
              </li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الثالث</h3>
            <ul className="content-level">
              <li>
                <span>Basic OOP</span>
              </li>
              <li>
                <span>Exercices About OOP</span>
              </li>
              <li>
                <span>Build Small Project</span>
              </li>
            </ul>
            <h3 className="price-level">
              السعر: <span>8500</span> دج
            </h3>
          </div>
          <div className="level-card">
            <h3 className="title-single-level">المستوى الرابع</h3>
            <ul className="content-level">
              <li>
                <span>Advanced OOP</span>
              </li>
              <li>
                <span>Exercices About OOP</span>
              </li>
              <li>
                <span>Build Big Project</span>
              </li>
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

export default CCourse;
