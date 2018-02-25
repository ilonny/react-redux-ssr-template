import React, { Component } from 'react'
import Link from 'react-router-dom/Link';
import videoWebm from '../../assets/video/video-background.webm'
import videoMP4 from '../../assets/video/video-background.mp4'
import './home-page.scss'

export default class Home extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <section class="main-video">
                <div className="video-wrap">
                    <video id="home-page-video" class="video-src" loop width="100%" height="100%"  autoPlay={true}>
                        <source src={videoWebm} type="video/webm; codecs='vp8, vorbis'"/>
                        <source src={videoMP4} type="video/mp4"/>
                    </video>
                    <div className="content">
                        <h1>Digital агентство %NAME%</h1>
                        <h2>
                            Разработка и комплексное продвижение сайтов.<br/>
                            Создание мобильных приложений
                        </h2>
                        <div className="services">
                            <div className="services__title">Мы предлагаем:</div>
                            <div className="services-blocks">
                                <Link to="/home" className="services__link">Разработка веб-сайтов</Link>
                                <Link to="/home" className="services__link">Продвижение и реклама в интернете</Link>
                                <Link to="/home" className="services__link">Разаботка мобильных приложений</Link>
                                <Link to="/home" className="services__link">Ведение вашего бренда в соц сетях</Link>
                            </div>
                        </div>
                    </div>
                    <div className="callback-form">
                        <div className="content">
                            <div className="callback-form__title">Бесплатная консультация</div>
                            <form action="">
                                <input type="text" placeholder="Ваше имя" />
                                <input type="text" placeholder="Телефон"/>
                                <button>Жду звонка</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}