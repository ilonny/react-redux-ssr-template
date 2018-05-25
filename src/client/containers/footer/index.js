import React, { PureComponent } from 'react'
import Link from 'react-router-dom/Link'
import SocialLinks from '../../components/social-links/index'
import './footer.scss'
export default class Footer extends PureComponent {
    render(){
        return (
            <footer>
                <div className="content">
                    <div className="left-side">
                        <div className="col__title">Меню</div>
                        <div className="hrefs-wrap">
                            <div className="hrefs hrefs-left">
                                <Link to="/about">О компании</Link>
                                <Link to="/service">Услуги</Link>
                                <Link to="/razrabotka-saitov">Разработка сайтов</Link>
                                <Link to="/marketing">Продвижение и реклама в интернете</Link>
                                <Link to="/mobile-apps">Разработка мобильных приложений</Link>
                            </div>
                            <div className="hrefs">
                                <Link to="/smm">Продвижение в социальных сетях</Link>
                                <Link to="/collab">Сотрудничество</Link>
                                <Link to="/contacts">Контакты</Link>
                                <Link to="/vacancy">Вакансии</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="col-left">
                            <div className="col__title">Обратная связь</div>
                            <form>
                                <input placeholder="Ваше имя" />
                                <input placeholder="Телефон" />
                                <button>Отправить</button>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                        <div className="col-right">
                            <a href="mailto:hello@fflames.ru" className="col__title">hello@flames.ru</a>
                            <a href="tel:+79195356312" className="col-right__phone">+7 (919) 535-63-12</a>
                            <SocialLinks />
                            <p className="copy">Flames Digital Agency, © 2018</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}