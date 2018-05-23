import React, { Component } from 'react'
import videoWebm from '../../assets/video/video-background.webm'
import videoMP4 from '../../assets/video/video-background.mp4'
import './home-page.scss'
import HomeCallbackForm from './callback-form'
import ServiceBlocks from './service-blocks'
// import AboutSection from './about-section'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            phone: "",
        }
    }

    componentDidMount(){    
    }
    render() {
        return (
            <div>
                <section class="main-video">
                    <div className="video-wrap">
                        <video id="home-page-video" class="video-src" loop width="100%" height="100%"  autoPlay={true}>
                            {/* <source src={videoWebm} type="video/webm; codecs='vp8, vorbis'"/>
                            <source src={videoMP4} type="video/mp4"/> */}
                        </video>
                        <div className="content">
                            <h1>Digital-агентство Flames</h1>
                            <h2>
                                Разработка и комплексное продвижение сайтов.<br/>
                                Создание мобильных приложений.
                            </h2>
                            <div className="services">
                                <h3 className="services__title">Наши услуги:</h3>
                                <ServiceBlocks />
                            </div>
                        </div>
                        <HomeCallbackForm />
                    </div>
                </section>
                {/* <AboutSection /> */}
            </div>
        )
    }
}