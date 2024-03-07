import React, { Component } from "react";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Carousel.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class Carousel extends Component {

    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    handleClick = (operation) => {
        operation === "left" ? this.state.count !== 0 ? this.setState({ count: this.state.count - 1 }) : this.setState({ count: images.length - 1 }) : this.state.count !== images.length - 1 ?
            this.setState({ count: this.state.count + 1 }) : this.setState({ count: 0 })
    }

    render() {

        return (
            <div id="carousel">
                <div id="innerCarousel" style={{ backgroundImage: `url(${images[this.state.count].img})` }}>

                    <div id="leftButton" onClick={() => this.handleClick("left")}>
                        <ArrowBackIosIcon style={{ color: "white", fontSize: "30px" }} />
                    </div>
                    <div id="centerText">
                        <h1>{images[this.state.count].title}</h1>
                        <p>{images[this.state.count].subtitle}</p>
                    </div>
                    <div id="rightbutton" onClick={() => this.handleClick("right")}>
                        <ArrowForwardIosIcon style={{ color: "white", fontSize: "30px"}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;
