import React, { PureComponent } from 'react'
import './order-form.scss'
import SendIcon from '../../assets/images/send.svg'
import InputMask from 'react-input-mask'
import axios from 'axios'
import serialize from 'form-serialize';

const initialState = {
    name: {
        value: "",
        error: false,
    },
    phone: {
        value: "",
        error: false,
    },
    message: {
        value: "",
        error: false,
    },
    errors: [],
    status: 'initial'
}
export default class OrderForm extends PureComponent{
    constructor(){
        super()
        this.state = initialState;
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }
    clearForm(){
        console.log('initial state')
        this.setState(() => {
            return Object.assign({}, initialState)
        })
    }
    handleName(e){
        var name_val = e.target.value;
        this.setState(state => {
            return {
                ...state,
                name: {
                    value: name_val.replace(/[^А-Яа-яA-Za-z0-9- ]/g,''),
                    error: name_val.replace(/[^А-Яа-яA-Za-z0-9- ]/g,'').length ? false : true,
                }
            }
        })
    }
    handlePhone(e){
        var phone_val = e.target.value;
        this.setState(state => {
            return {
                ...state,
                phone: {
                    value: phone_val,
                    error: phone_val.length ? false : true,
                }
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        var form = e.target;
        var err_arr = [];
        if (this.state.name.error || !this.state.name.value){
            err_arr.push("Необходимо заполнить имя");
            this.setState(state => {
                return {
                    ...state,
                    name: {
                        error: true
                    }
                }
            });
        }
        if (this.state.phone.error || !this.state.phone.value){
            err_arr.push("Необходимо заполнить телефон");
            this.setState(state => {
                return {
                    ...state,
                    phone: {
                        error: true
                    }
                }
            });
        }
        this.setState(state => {
            return {
                ...state,
                errors: err_arr
            }
        })
        if (!err_arr.length){
            //submit the form here
            this.setState(state => {
                return {
                    ...state,
                    status: 'loading'
                }
            })
            axios.post('/form', {
                form_data: serialize(form, {hash:true})
            }).then(response => {
                if (response.status == 200){
                    this.setState(state => {
                        return {
                            ...state,
                            status: 'success'
                        }
                    })
                    setTimeout(() => {
                        console.log('timeout!')
                        this.clearForm();
                    }, 3000);
                }
            })
        }
    }
    render(){
        let service_select;
        if (this.props.parentPage == 'service'){
            service_select = (
                <select name="service">
                    <option value="1">Разработка адаптивных сайтов</option>
                    <option value="2">Продвижение и реклама в интернете</option>
                    <option value="3">Разработка мобильных приложений</option>
                    <option value="4">Ведение бренда в соц сетях</option>
                </select>
            )
        } else {
            service_select = null;
        }

        let errors_list;
        if (this.state.errors.length){
            errors_list = this.state.errors.map(err => <p>{err}</p>)
        } else {
            errors_list = null;
        }

        let send_button;
        switch (this.state.status){
            case 'initial':
                send_button = (
                    <button className="submit-button">
                        <span>Отправить</span>
                        <img src={SendIcon} />
                    </button>
                )
                break;
            case 'loading':
                send_button = (
                    <button className="submit-button" disabled>
                        <span>Загрузка...</span>
                        <img src={SendIcon} />                        
                    </button>
                )
                break;
            case 'success':
                send_button = (
                    <button className="submit-button" disabled>
                        <span>Успешно отправлено!</span>
                        <img src={SendIcon} />                        
                    </button>
                )
                break;
            case 'default':
                send_button = (
                    <button className="submit-button">
                        <span>Отправить</span>
                        <img src={SendIcon} />
                    </button>
                )
                break;
        }
        return (
            <div className="order-form-wrap">
                <div className="hint"><span>O</span><span>R</span><span>D</span><span>E</span><span>R</span></div>
                <div className="order-form">
                    <form className="form" onSubmit={ this.handleSubmit }>
                        <div className="order-form__title">{this.props.title ? this.props.title : "Оставить заявку"}</div>
                        <div className="order-form__hint">{this.props.text ? this.props.text : "5 минут разговора по телефону будет достаточно, чтобы определить вилку цен"}</div>
                        <input 
                            onChange = { this.handleName }
                            value = { this.state.name.value }
                            className = { this.state.name.error ? "has-error" : "" }
                            name = "name"
                            placeholder = "Ваше имя"
                            id = "order-form-name-input"
                        />
                        <InputMask
                            onChange = { this.handlePhone }
                            value = { this.state.phone.value }
                            className = { this.state.phone.error ? "has-error" : "" }
                            name = "phone"
                            placeholder = "Телефон"
                            mask = "+7 (999) 999-99-99"
                        />
                        {/* <input name="phone" placeholder="Телефон" /> */}
                        {service_select}
                        <textarea name="phone" placeholder="Сообщение" />
                        <input required type="hidden" hidden name="current-page" value={this.props.parentPage} />
                        {send_button}
                        <div className="clearfix"></div>
                        <div className="err-list">{errors_list}</div>
                    </form>
                </div>
            </div>
        )
    }
}