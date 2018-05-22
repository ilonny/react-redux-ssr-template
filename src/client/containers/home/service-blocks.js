import React from 'react'
import Link from 'react-router-dom/Link'
import './service-blocks.scss'
import adaptiveIconWhite from '../../assets/images/adaptive-layout-white.svg'
import marketingIconWhite from '../../assets/images/marketing-white.svg'
import smartphoneIconWhite from '../../assets/images/smartphone-white.svg'
import socialIconWhite from '../../assets/images/social-media-white.svg'

export default function ServiceBlocks(){
    return (
        <div className="services-blocks">
            <Link to="/home" className="block">
                <div className="img-wrap">
                    <img src={adaptiveIconWhite} />
                </div>
                <p>Разработка <br/>адаптивных сайтов</p>
            </Link>
            <Link to="/home" className="block">
                <div className="img-wrap">
                    <img src={marketingIconWhite} />
                </div>
                <p>Продвижение и реклама <br/>в интернете</p>
            </Link>
            <Link to="/home" className="block">
                <div className="img-wrap">
                    <img src={smartphoneIconWhite} />
                </div>
                <p>Разработка мобильных <br/>приложений</p>
            </Link>
            <Link to="/home" className="block">
                <div className="img-wrap">
                    <img src={socialIconWhite} />
                </div>
                <p>Ведение вашего бренда <br/>в соц сетях</p>
            </Link>
        </div>
    )
}