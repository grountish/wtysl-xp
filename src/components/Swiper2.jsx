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

const params = {
    direction: 'vertical',
    slidesPerView: 1,
    effect: 'fade',
    spaceBetween: 0,
    mousewheel: true,
    preventClicks: false,
    preventClicksPropagation: false

}
export default class MousewheelControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { video: 1 };
    }


    componentDidMount = () => {
        this.videoElement.addEventListener("ended", this.myCallback);
    }
    myCallback = () => {
        console.log('asdsdad');
    }

    componentWillUnmount = () => {
        this.videoElement.removeEventListener("ended", this.myCallback);
    }

    myCallback = () => {
        this.setState({
            video: this.state.video + 1
        });
    }
    myCallback2 = () => {
        this.setState({
            video: 5
        });
    }
    resetXp = () => {
        this.setState({
            video: 1
        })
    }

    render = () => {


        const xp = () => {
            switch (this.state.video) {

                case 1: return <video ref={el => this.videoElement = el} src="https://res.cloudinary.com/grountish/video/upload/v1592080531/Jafra_Slide_4_tdygb6.mp4" autoPlay></video>;
                case 2: return <video ref={el => this.videoElement = el} src="https://res.cloudinary.com/grountish/video/upload/v1592080531/Jafra_Slide_1_ppqvmd.mp4" autoPlay></video>;
                case 3: return <Swiper {...params}>

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
                    <div >
                        <div className="divOption">
                            <h1>This is Miss. Maria Lemuanik</h1>
                            <h3>Do you want to talk to her ?</h3>
                            <button onClick={this.myCallback}>Yes</button>
                            <button onClick={this.myCallback2}>No</button>
                        </div>
                        <img src={capa61} alt="asd" />
                    </div>
                </Swiper>;
                case 4: return <div> <video ref={el => this.videoElement = el} src="https://res.cloudinary.com/grountish/video/upload/v1591918542/123_homs2o.mov" autoPlay></video>
                    <div className="divOption2">
                    <h4>This is the end of the Experience</h4>
                        <button onClick={() => window.location.reload(false)}>Reset</button>
                    </div>
                </div>;
                case 5: return <div> <video ref={el => this.videoElement = el} src="https://res.cloudinary.com/grountish/video/upload/v1592081152/vid_crop2_wfaymh.mov" autoPlay></video>
                    <div className="divOption2">
                    <h4>This is the end of the Experience</h4>
                        <button onClick={() => window.location.reload(false)}>Reset</button>
                    </div>
                </div>;

                default: return <h1>No project match</h1>
            }
        }

        return (

            <div>{xp()}</div>

        )
    }
}
