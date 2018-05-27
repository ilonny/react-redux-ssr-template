import React from 'react'
import MaterialIcon from 'react-material-iconic-font'
import './index.scss'

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="http://vk.com/fflamesstudio" target="_blank">
                <MaterialIcon type="vk" />
            </a>
            <a href="http://instagram.com/fflamesstudio" target="_blank">
                <MaterialIcon type="instagram" />
            </a>
            <a href="https://twitter.com/studioflames" target="_blank">
                <MaterialIcon type="twitter" />
            </a>
            <a href="https://www.facebook.com/Flames-Digital-Agency-192303194734362" target="_blank">
                <MaterialIcon type="facebook" />
            </a>
        </div>
    )
}