import React from 'react';
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slide1 from '../../images/slide1.webp';
import slide2 from '../../images/slide2.webp';
import slide3 from '../../images/slide3.webp';
import { CardComponent } from '../../components/CardComponent/CardComponent';
import { Flex } from 'antd';
const HomePage = () => {
    const arr = ['TV', 'Điện thoại', 'Laptop', 'Tablet', 'Âm thanh', 'Phụ kiện'];
    return (
        <>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    },
                    )}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
                <SliderComponent arrImages={[slide1, slide2, slide3]} />
                <div style={{ marginTop: '20px', display: Flex, alignItems: 'center', gap: '20px' }}>
                    <CardComponent />
                </div>
            </div>

        </>
    )
};
export default HomePage;