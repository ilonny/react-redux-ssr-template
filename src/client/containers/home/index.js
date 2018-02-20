import React, { Component } from 'react'
import videoWebm from '../../assets/video/video-background.webm'
import videoMP4 from '../../assets/video/video-background.mp4'

export default class Home extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <section class="main-video">
                <div className="video-wrap">
                    <video id="home-page-video" class="video-src" loop width="100%" height="100%"  autoPlay={false}>
                        <source src={videoWebm} type="video/webm; codecs='vp8, vorbis'"/>
                        <source src={videoMP4} type="video/mp4"/>
                    </video>
                </div>
            </section>
        )
    }
}