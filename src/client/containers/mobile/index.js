import React, { PureComponent } from 'react'
import './mobile.scss'
import InnerBanner from '../../components/inner-banner/index'
import OrderForm from '../../components/order-form/index'
import RNIcon from '../../assets/images/r-native-icon.png'
import NativeIcon from '../../assets/images/native-icon.png'
import SendIcon from '../../assets/images/send.svg'

export default class Mobile extends PureComponent {
    componentDidMount() {
        document.title = document.title = this.props.route.title
    }
    constructor(){
        super();
        this.state = {
            focusClicked: false,
        }
    }
    clickButton(){
        // console.log('clickButotn()')
        // this.setState(state => {
        //     return {
        //         ...state,
        //         focusClicked: true,
        //     }
        // })
        document.getElementById('order-form-name-input').focus();
    }
    render() {
        console.log('mobile state', this.state)
        return (
            <div>
                <InnerBanner type="big" title="Разработка мобильных<br> приложений" text="Создаем мобильные приложения для Apple iOS и Google Android.<br> Доведем приложение от идеи до публикации в маркетах."/>
                <div className="mobile-wrap content">
                    <h5>Предлагаем два подхода к разработке приложений</h5>
                    <div className="block">
                        <div className="left">
                            <img src={RNIcon} />
                            <a class="href" href="https://facebook.github.io/react-native/" target="_blank">React Native Framework</a>
                        </div>
                        <div className="right">
                            <p>React Native — это фреймворк для разработки кроссплатформенных приложений для iOS и Android.</p>
                            <p class="bold">Преимущества:</p>
                            <ul>
                                <li>Не использует WebView и HTML-технологии</li>
                                <li>Разработка сразу на две платформы</li>
                                <li>Высокая скорость разработки</li>
                            </ul>
                            <p class="bold">Недостатки:</p>
                            <ul>
                                <li>В сложном функционале может потребоваться написание нативных модулей.</li>
                            </ul>
                            <div className="bottom">
                                <p>Наиболее подходит для написания малых и средних приложений.</p>
                                <button onClick={() => this.clickButton()} className="submit-button">
                                    <span>Оставить заявку</span>
                                    <img src={SendIcon} />
                                </button>
                                <div class="clearfix"></div>                                
                            </div>
                        </div>
                    </div>
                    <div className="block block--bottom">
                        <div className="left">
                            <img src={NativeIcon} />
                            <p className="href">Нативная разработка</p>
                        </div>
                        <div className="right">
                            <p>Полностью нативная разработка приложений для каждой платформы по отдельности.</p>
                            <p class="bold">Преимущества:</p>
                            <ul>
                                <li>Гибкость в реализации сложного функционала.</li>
                            </ul>
                            <p class="bold">Недостатки:</p>
                            <ul>
                                <li>В 2 раза больше трудозатрат</li>
                                <li>Относительно низкая скорость разработки</li>
                                <li>Обновление и поддержка двух приложений</li>
                            </ul>
                            <div className="bottom">
                                <p>Наиболее подходит для написания сложных приложений, например, использующих функции мобильных устройств: камер, GPS, акселерометра и прочих датчиков</p>
                                <button onClick={() => this.clickButton()} className="submit-button">
                                    <span>Оставить заявку</span>
                                    <img src={SendIcon} />
                                </button>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <OrderForm />
            </div>
        )
    }
}