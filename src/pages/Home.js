import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./home.scss";
import "../app.scss";

const mySocial = {
  fbcontentRoom: "https://facebook.com/Content-Room-279217147254771/",
  fbnajah: "https://facebook.com/enajah2000/",
  instagram: "https://www.instagram.com/content_room7/",
};

function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <div className="part-img">
          <img src="/images/landing.svg" alt="landing" />
        </div>
        <div className="part-text">
          <h1 className="headertext">
            لأول مرة في ولاية سعيدة احترف البرمجة من الصفر وابدأ حياتك المالية
            مع مهنة المستقبل
          </h1>
          <p className="paratext">
            مركز النجاح للتدريب والاستشارات بولاية سعيدة ولأول مرة بالتعاون مع
            وكالة <span>Content Room</span> لخدمات التسويق وصناعة المحتوى يقدم
            عدة دورات تعليمية في مجال البرمجة والتصميم الغرافيكي والتسويق
            الإلكتروني
          </p>
        </div>
      </div>
      <div className="courses-section">
        <h2>جميع الدورات التعليمية</h2>
        <div className="courses-container">
          <Link className="course-box" to="/frontend">
            <img src="/images/frontend.jpg" alt="course" />
          </Link>
          <Link className="course-box" to="/graphic">
            <img src="/images/graphic.jpg" alt="course" />
          </Link>
          <Link className="course-box" to="/ccourse">
            <img src="/images/ccourse.jpg" alt="course" />
          </Link>
          <Link className="course-box" to="/marketing">
            <img src="/images/marketing.jpg" alt="course" />
          </Link>
        </div>
      </div>
      <div className="contact-section">
        <h2>لمعلومات أكثر لا تردد بالاتصال بنا</h2>
        <h3>Content Room: 0555275713 - 0781709662</h3>
        <h3>ELNajah School: 0562068680</h3>
      </div>
      <div className=" promote-section">
        <h2>لماذا البرمجة والتصميم والتسويق الإلكتروني؟</h2>
        <div className="container-advices">
          <div className="advice">
            <div className="icon-part">
              <i className="fas fa-money-bill-alt"></i>
            </div>
            <div className="info-part">
              <h3 className="title-info">رواتب المبرمجين من أعلى الرواتب</h3>
              <p className="parainfo">
                يحظى المبرمجون برواتب عالية جدا في جميع أنحاء العالم، فعصرنا
                الذي نعيش فيه هو عصر الذكاء الاصطناعي المبني على مهارة البرمجة،
                لهذا تعتبر البرمجة الطريق الأسرع والأمتع للوصول إلى الراحة
                المالية
              </p>
            </div>
          </div>
          <div className="advice">
            <div className="icon-part">
              <i className="fas fa-laptop"></i>
            </div>
            <div className="info-part">
              <h3 className="title-info">
                نحن لا نبيع لك الوهم، تعلم واتعب وسوف تصل
              </h3>
              <p className="parainfo">
                يبالغ كثير من المبرمجين عادة في وصف طريق تعلم البرمجة على أنَّه
                طريق سهل وبمجرد أخذ دورة سوف تصبح مبرمجا، ولكن هذا الكلام غير
                صحيح فطريق البرمجة مثل أي طريق يحتاج الصبر الكبير والدورة
                المناسبة والتطبيق الكثير.
              </p>
            </div>
          </div>
          <div className="advice">
            <div className="icon-part">
              <i className="fas fa-pen-nib"></i>
            </div>
            <div className="info-part">
              <h3 className="title-info">
                لماذا التصميم الغرافيكي والتسويق الإلكتروني؟
              </h3>
              <p className="parainfo">
                المصمم الغرافيكي له سوق عمل ضخم وكبير جدا إذا عرف كيف يسوق لنفسه
                بالطريقة الصحيحة، نحن الآن في عصر وسائل التواصل الاجتماعي وطرق
                الإشهار والتسويق تطورت تطورا رهيبا، ونتيجة لهذا فالتصميم
                الغرافيكي والتسويق الإلكتروني من أهم المهارات التي ينبغي أن
                تتعلمها حتى تصل إلى الراحة المالية.
              </p>
            </div>
          </div>
          <div className="advice">
            <div className="icon-part">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="info-part">
              <h3 className="title-info">لماذا نرشح لك دوراتنا التعليمية؟</h3>
              <p className="parainfo">
                سوف تأخذ هذه الدورات بيدك خطوة خطوة من الصفر إلى الاحتراف في
                مجال البرمجة والتصميم والتسويق الإلكتروني، وسوف تلمس نتيجة تعبك
                خلال أشهر قليلة، ونعدك إذا اتبعت الطرق الصحيحة للتعلم لن تندم
                أبدا على هذا الاختيار.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="social-media">
          <a href={mySocial.fbcontentRoom} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href={mySocial.fbnajah} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href={mySocial.instagram} target="_blank" rel="noreferrer">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
        <div className="copyright">
          <span>Content Room</span> | جميع الحقوق محفوظة © 2021
        </div>
      </footer>
    </>
  );
}

export default Home;
