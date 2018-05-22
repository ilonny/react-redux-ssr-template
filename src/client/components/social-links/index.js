import React from 'react'
import MaterialIcon from 'react-material-iconic-font'
import './index.scss'
import instLogo from '../../assets/images/instagram.svg'
export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="http://vk.com/" target="_blank">
                <MaterialIcon type="vk" />
            </a>
            <a href="http://instagram.com/" target="_blank">
                <MaterialIcon type="instagram" />
            </a>
            <a href="http://twitter.com/" target="_blank">
                <MaterialIcon type="twitter" />
            </a>
            <a href="http://facebook.com/" target="_blank">
                <MaterialIcon type="facebook" />
            </a>
        </div>
    )
}