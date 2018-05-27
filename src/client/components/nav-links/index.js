import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavLinks extends Component{
    scrollToTop(scrollDuration) {
        console.log('scrolltop')
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
    render() {
        return (
            <div>
                <NavLink activeStyle={{ color: '#FF494E' }} onClick={ () => { this.props.hideSidebar(); this.scrollToTop(250) } } to="/about">О компании</NavLink>
                <NavLink activeStyle={{ color: '#FF494E' }} onClick={ () => { this.props.hideSidebar(); this.scrollToTop(250) } } to="/service">Услуги</NavLink>
                <NavLink activeStyle={{ color: '#FF494E' }} onClick={ () => { this.props.hideSidebar(); this.scrollToTop(250) } } to="/collab">Сотрудничество</NavLink>
                <NavLink activeStyle={{ color: '#FF494E' }} onClick={ () => { this.props.hideSidebar(); this.scrollToTop(250) } } to="/vacancy">Вакансии</NavLink>
                <NavLink activeStyle={{ color: '#FF494E' }} onClick={ () => { this.props.hideSidebar(); this.scrollToTop(250) } } to="/contacts">Контакты</NavLink>
            </div>
        )
    }
}