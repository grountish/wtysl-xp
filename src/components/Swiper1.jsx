import React from 'react';
import Swiper from 'react-id-swiper';

import capa64 from './../images/Capa 23.png'
import capa66 from './../images/Capa 26.png'
import capa29 from './../images/Capa 29.png'
import capa32 from './../images/Capa 32.png'
import capa36 from './../images/Capa 35.png'
import capa39 from './../images/Capa 38.png'
import capa41 from './../images/Capa 41.png'
import capa43 from './../images/Capa 44.png'
import capa46 from './../images/Capa 47.png'
import capa49 from './../images/Capa 50.png'
import capa51 from './../images/Capa 53.png'
import capa53 from './../images/Capa 56.png'
import capa55 from './../images/Capa 59.png'
import capa58 from './../images/Capa 62.png'
import capa61 from './../images/Capa 65.png'


import 'swiper/css/swiper.css'

const handleClick = () => {
    console.log('object');
}

const MousewheelControl = () => {
    const params = {
        direction: 'vertical',
        slidesPerView: 1,
        effect: 'fade',
        spaceBetween: 0,
        mousewheel: true,
        preventClicks: false,
        preventClicksPropagation: false

    }
    componentDidMount() {
        this.videoElement.addEventListener("ended", myCallback);
    }
    myCallback =()=>{
        console.log('asdsdad');
    }

    componentWillUnmount() {
        this.videoElement.removeEventListener("ended", myCallback);
    }

    return (
        <Swiper {...params}>
            <div> 
            <video ref={el => this.videoElement = el} src="https://res.cloudinary.com/grountish/video/upload/v1591914597/P_AL4215_szmihj.mov" autoPlay></video>
            </div>

            <div> <img src={capa64} alt="asd" /></div>
            <div> <img src={capa66} alt="asd" /></div>
            <div> <img src={capa29} alt="asd" /></div>
            <div> <img src={capa32} alt="asd" /></div>
            <div> <img src={capa36} alt="asd" /></div>
            <div> <img src={capa39} alt="asd" /></div>
            <div> <img src={capa41} alt="asd" /></div>
            <div> <img src={capa43} alt="asd" /></div>
            <div> <img src={capa46} alt="asd" /></div>
            <div> <img src={capa49} alt="asd" /></div>
            <div> <img src={capa51} alt="asd" /></div>
            <div> <img src={capa53} alt="asd" /></div>
            <div> <img src={capa55} alt="asd" /></div>
            <div> <img src={capa58} alt="asd" /></div>
            <div> <img src={capa61} alt="asd" /></div>

        </Swiper>
    )
};
export default MousewheelControl;