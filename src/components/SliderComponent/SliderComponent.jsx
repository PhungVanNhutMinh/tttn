import React from "react";
import Slider from "react-slick";
import { Image } from "antd";

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    return (
        <Slider {...settings}>
            {arrImages.map((images, index) => {
                return (
                    <Image key={index} src={images} alt="slide" preview={false} width="100%" height="274px" />
                )
            })}
        </Slider>
    )
};

export default SliderComponent;