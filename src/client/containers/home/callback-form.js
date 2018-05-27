import React, { Component } from 'react'
import InputMask from 'react-input-mask';
import MaterialIcon from 'react-material-iconic-font'
import serialize from 'form-serialize';
import axios from 'axios'

const initialState = {
    opened: false,
    name: {
        value: "",
        error: false,
    },
    phone: {
        value: "",
        error: false,
    },
    errors: [],
    status: 'initial'
}

export default class HomeCallbackForm extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
        this.setVisible = this.setVisible.bind(this);
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
                form_data_index_page: serialize(form, {hash:true})
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
    setVisible(){
        this.setState(() => {
            return {opened: !this.state.opened}
        })
        // if (window.outerWidth < 1140) {
        // }
    }
    render() {
        let send_button;
        switch (this.state.status){
            case 'initial':
                send_button = <button>Жду звонка</button>
                break;
            case 'loading':
                send_button = <button disabled>Загрузка...</button>
                break;
            case 'success':
                send_button = <button disabled>Успешно отправлено</button>
                break;
            case 'default':
                send_button = <button>Жду звонка</button>
                break;
        }
        return (
            <div className={this.state.opened ? "callback-form opened" : "callback-form"}>
                <div className="content">
                    <div className="callback-form__title" onClick={() => this.setVisible()}>
                        Бесплатная консультация
                        <MaterialIcon type="long-arrow-up" className={this.state.opened ? "rotate" : ""}/> 
                    </div>
                    <form id="#example-form" onSubmit={ this.handleSubmit }>
                        <input 
                            onChange = { this.handleName }
                            value = { this.state.name.value }
                            className = { this.state.name.error ? "has-error" : "" }
                            name = "name"
                            placeholder = "Ваше имя"
                        />
                        <InputMask 
                            onChange = { this.handlePhone }
                            value = { this.state.phone.value }
                            className = { this.state.phone.error ? "has-error" : "" }
                            name = "phone"
                            placeholder = "Телефон"
                            mask = "+7 (999) 999-99-99"
                        />
                        {send_button}
                    </form>
                </div>
            </div>
        )
    }
}