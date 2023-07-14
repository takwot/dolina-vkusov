import React from "react";
import styles from "./About.module.scss";
import photo1 from "../../assets/first_img.png";
import photo2 from "../../assets/second_img.png";
import photo3 from "../../assets/third_img.png";
import photo4 from "../../assets/fourth_img.png";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.cont}>
          <div className={styles.container}>
            <div>
              <strong className={styles.strong}>«Долина вкусов»</strong> ― это
              магазины с широким выбором деликатесов со всего мира, способными
              удовлетворить потребности даже самого искушенного гурмана. В сети
              магазинов «Долина Вкусов» можно найти не только продукты,а также
              необходимые и оригинальные товары для дома и готовые подарочные
              наборы.
            </div>
            <div>
              <strong
                style={{ fontWeight: "400" }}
                className={styles.not_strong}
              >
                Сеть
              </strong>
              магазинов «Долина Вкусов» входит в список лучших гастрономических
              магазинов на территории Кавказских минеральных вод.
            </div>
            <div>
              <p>Ассортимент магазинов «Долина Вкусов»</p>
              <strong
                style={{ fontWeight: "400" }}
                className={styles.not_strong}
              >
                В
              </strong>{" "}
              наших магазинах можно подобрать продукты не только к праздничному
              столу, но и к обычному семейному обеду или ужину.Именно поэтому
              «Долина Вкусов» ― это эксклюзивные гастрономические магазины. При
              всем этом, продавцы всегда способны дать самую полную консультацию
              по интересующему товару, а внутренняя атмосфера сделает сам
              процесс покупки удовольствием. Ассортимент магазинов насчитывает
              более 700 наименований товаров, треть из которых составляет
              эксклюзивная продукция стран ближнего востока. «Долина Вкусов»
              работает более чем с 200 поставщиками, к каждому из которых
              предъявляются самые высокие требования относительно качества
              представляемых продуктов, их перевозки и хранения.
            </div>
            <div>
              <strong className={styles.strong} style={{ fontSize: "20px" }}>
                Все товары тщательно отобраны и опробованы «на себе». Если есть
                лучший продукт в своей категории, он непременно будет
                продаваться у нас.
              </strong>
            </div>
            <div>
              <strong
                style={{ fontWeight: "400" }}
                className={styles.not_strong}
              >
                Результат
              </strong>
              стремления к совершенству в поиске гастрономических решений ― это
              правильные, здоровые продукты, приготовленные по домашним рецептам
              мам и бабушек со всего мира.
            </div>
            <div>
              <strong
                style={{ fontWeight: "400" }}
                className={styles.not_strong}
              >
                Это
              </strong>{" "}
              не только традиционные ― медовики, чак-чаки, халва и пироги, рахат
              лукум и конфеты , сделанные только из самых качественных
              продуктов. Это не только фермерские сыры и суджук. Это еще и
              лучшие французские сыры и фуа-гра, именитые испанские хамоны,
              коллекционные сорта чая и кофе, вкуснейший бельгийский шоколад, в
              том числе экологические чистые БИО продукты приготовленные по
              традиционной технологии, из местного сырья ― продукты в которых
              нет ни улучшителей вкуса, ни консервантов, что подтверждают
              сертификаты.
            </div>
          </div>
          <div className={styles.photo_container}>
            <img src={photo1} />
            <img src={photo2} />
            <img src={photo3} />
            <img src={photo4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;