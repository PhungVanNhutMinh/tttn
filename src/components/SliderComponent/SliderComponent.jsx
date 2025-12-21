import React from "react";
import { Image } from "antd";
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImages.map((images, index) => {
                return (
                    <Image key={images} src={images} alt="slide" preview={false} width="100%" height="274px" style={{ objectFit: 'cover', borderRadius: '8px' }} />
                )
            })}
        </WrapperSliderStyle>
    )
};

export default SliderComponent;