import React, { PureComponent } from 'react'
import Link from 'react-router-dom/Link'
import './service-blocks.scss'
//для главной страницы
import adaptiveIconWhite from '../../assets/images/adaptive-layout-white.svg'
import marketingIconWhite from '../../assets/images/marketing-white.svg'
import smartphoneIconWhite from '../../assets/images/smartphone-white.svg'
import socialIconWhite from '../../assets/images/social-media-white.svg'

//для страницы услуг
import adaptiveIcon from '../../assets/images/adaptive-layout.svg'
import marketingIcon from '../../assets/images/marketing.svg'
import smartphoneIcon from '../../assets/images/smartphone.svg'
import socialIcon from '../../assets/images/social-media.svg'

export default class ServiceBlocks extends PureComponent{
    render(){
        let { page } = this.props
        return (
            <div className="services-blocks">
                <Link to="/razrabotka-saitov" className="block">
                    <div className="img-wrap">
                        <img src={page == "index" ? adaptiveIconWhite : adaptiveIcon} />
                    </div>
                    <p>Разработка <br/>адаптивных сайтов</p>
                </Link>
                <Link to="/marketing" className="block">
                    <div className="img-wrap">
                        <img src={page == "index" ? marketingIconWhite : marketingIcon} />
                    </div>
                    <p>Продвижение и реклама <br/>в интернете</p>
                </Link>
                <Link to="/mobile-apps" className="block">
                    <div className="img-wrap">
                        <img src={page == "index" ? smartphoneIconWhite : smartphoneIcon} />
                    </div>
                    <p>Разработка мобильных <br/>приложений</p>
                </Link>
                <Link to="/smm" className="block">
                    <div className="img-wrap">
                        <img src={page == "index" ? socialIconWhite : socialIcon} />
                    </div>
                    <p>Ведение вашего бренда <br/>в соц сетях</p>
                </Link>
            </div>
        )
    }
}