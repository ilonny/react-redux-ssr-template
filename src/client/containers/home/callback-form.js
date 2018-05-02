import React, { Component } from 'react'
import InputMask from 'react-input-mask';
import MaterialIcon from 'react-material-iconic-font'
import serialize from 'form-serialize';

export default class HomeCallbackForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            opened: false
        }
        this.submitCallback = this.submitCallback.bind(this);
        this.setVisible = this.setVisible.bind(this);
    }
    submitCallback(e){
        e.preventDefault();
        let form_data = serialize(e.target, {hash:true});
        console.log('form_data', form_data);
    }
    setVisible(){
        this.setState(() => {
            return {opened: !this.state.opened}
        })
        // if (window.outerWidth < 1140) {
        // }
    }
    render() {
        return (
            <div className={this.state.opened ? "callback-form opened" : "callback-form"}>
                <div className="content">
                    <div className="callback-form__title" onClick={() => this.setVisible()}>
                        Бесплатная консультация
                        <MaterialIcon type="long-arrow-up" className={this.state.opened ? "rotate" : ""}/> 
                    </div>
                    <form id="#example-form" onSubmit={this.submitCallback.bind(this)}>
                        <InputMask 
                            name="name"
                            ref={input => { this.firstNameInp = input; }}
                            type="text"
                            placeholder="Ваше имя" 
                            mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                            maskChar=""
                            formatChars={{a: '[A-Za-zА-Яа-я]'}}
                        />
                        <InputMask 
                            name="phone" 
                            ref={input => { this.phoneInp = input; }}
                            type="text"
                            placeholder="Телефон"
                            mask="+7(999) 999-99-99"
                        />
                        <button>Жду звонка</button>
                    </form>
                </div>
            </div>
        )
    }
}