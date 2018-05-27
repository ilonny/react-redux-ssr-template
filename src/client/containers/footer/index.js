import React, { PureComponent } from 'react'
import Link from 'react-router-dom/Link'
import SocialLinks from '../../components/social-links/index'
import './footer.scss'
import FooterForm from './footer-form.js'

export default class Footer extends PureComponent {
    scrollToTop(scrollDuration) {
            var cosParameter = window.scrollY / 2,
            scrollCount = 0,
            oldTimestamp = performance.now();
        function step (newTimestamp) {
            scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) window.scrollTo(0, 0);
            if (window.scrollY === 0) return;
            window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }
    render(){
        return (
            <footer>
                <div className="content">
                    <div className="left-side">
                        <div className="col__title">Меню</div>
                        <div className="hrefs-wrap">
                            <div className="hrefs hrefs-left">
                                <Link onClick={() => this.scrollToTop(250)} to="/about">О компании</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/service">Услуги</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/razrabotka-saitov">Разработка сайтов</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/marketing">Продвижение и реклама в интернете</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/mobile-apps">Разработка мобильных приложений</Link>
                            </div>
                            <div className="hrefs">
                                <Link onClick={() => this.scrollToTop(250)} to="/smm">Продвижение в социальных сетях</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/collab">Сотрудничество</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/contacts">Контакты</Link>
                                <Link onClick={() => this.scrollToTop(250)} to="/vacancy">Вакансии</Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="col-left">
                            <div className="col__title">Обратная связь</div>
                            <FooterForm />
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