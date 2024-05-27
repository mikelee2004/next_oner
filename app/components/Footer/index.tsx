import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import AskQuestion from "./../../../public/Shape.png";
import Visa from "./../../../public/payments.png"
import Mastercard from "./../../../public/payments2.png"
import MIR from "./../../../public/payments3.png"

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_top}>
          <div className={styles.footer_text_block}>
            <h4 className={styles.footer_text_title}>Меню компании</h4>
            <Link href="/about" className={styles.footer_text_link}>
              Что такое Oner
            </Link>
            <Link href="/payment" className={styles.footer_text_link}>
              Реквизиты и информация
            </Link>
            <Link href="/news" className={styles.footer_text_link}>
              Новости
            </Link>
            <Link href="/employment" className={styles.footer_text_link}>
              Вакансии
            </Link>
            <Link href="/importers" className={styles.footer_text_link}>
              Поставщикам
            </Link>
            <Link href="/contacts" className={styles.footer_text_link}>
              Контакты
            </Link>
          </div>

          <div className={styles.footer_text_block}>
            <h4 className={styles.footer_text_title}>Каталоги</h4>
            <Link href="/about" className={styles.footer_text_link}>
              Оригинальные запчасти
            </Link>
            <Link href="/payment" className={styles.footer_text_link}>
              Неоригинальные запчасти
            </Link>
            <Link href="/news" className={styles.footer_text_link}>
              Запчасти для ТО
            </Link>
            <Link href="/employment" className={styles.footer_text_link}>
              Автомасла
            </Link>
            <Link href="/importers" className={styles.footer_text_link}>
              Аккумуляторы
            </Link>
            <Link href="/contacts" className={styles.footer_text_link}>
              Распродажа
            </Link>
          </div>

          <div className={styles.footer_text_block}>
            <h4 className={styles.footer_text_title}>Помощь</h4>
            <Link href="/about" className={styles.footer_text_link}>
              Часто задаваемые вопросы
            </Link>
            <Link href="/payment" className={styles.footer_text_link}>
              Консультация Online
            </Link>
            <Link href="/news" className={styles.footer_text_link}>
              Оплата
            </Link>
            <Link href="/employment" className={styles.footer_text_link}>
              Доставка заказа
            </Link>
            <Link href="/importers" className={styles.footer_text_link}>
              Возврат товара
            </Link>
            <Link href="/contacts" className={styles.footer_text_link}>
              Забыл пароль
            </Link>
          </div>

          <div className={styles.footer_text_block}>
            <h4 className={styles.footer_text_title}>Каталоги</h4>
            <Link href="/about" className={styles.footer_text_link}>
              Список брендов
            </Link>
            <Link href="/payment" className={styles.footer_text_link}>
              Популярные товары
            </Link>
            <Link href="/news" className={styles.footer_text_link}>
              Наличие на складах
            </Link>
          </div>

          <div className={styles.footer_support_service}>
            <div className={styles.support_button}>
              <div className={styles.support_button_icon}>
                <Image
                  src={AskQuestion}
                  alt="ask-question-online"
                />
              </div>
              
              <div className={styles.support_button_text}>
                <Link href="/" className={styles.support_button_title}>
                  Консультация Онлайн
                </Link>
                <Link href="/" className={styles.support_button_description}>
                  Задавайте вопросы
                </Link>
              </div>
            </div>
            <div className={styles.status}>
              <div className={styles.status_icon}>
                <div className={styles.circle}>
                  <div className={styles.smaller_circle}></div>
                </div>
              </div>
              <p className={styles.status_text}>
                Сервис работает в обычном режиме
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footer_bottom}>
            <div className={styles.footer_bottom_copyright}>
                <p>Copyright © ООО «Oner.ru» 2021. All rights reserved.</p>
            </div>
            <div className={styles.footer_bottom_payment}>
                <div className={styles.payment_methods}>
                    <p>Принимаем к оплате</p>
                    <div className={styles.payment_images}>
                        <Image src={Visa} alt="Visa-payment-method" />
                        <Image src={Mastercard} alt="mastercard-payment0-method" />
                        <Image src={MIR} alt="Mir-payment-method"/>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom_links}>
                <div className={styles.offerta}>
                    <Link href="/">Оферта</Link>
                </div>
                <div className={styles.confidency}>
                    <Link href="/">Конфиденциальность</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
