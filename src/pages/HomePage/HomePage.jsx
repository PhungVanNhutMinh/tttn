import React from 'react';
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slide1 from '../../images/slide1.webp';
import slide2 from '../../images/slide2.webp';
import slide3 from '../../images/slide3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';

import { NavBarComponent } from '../../components/NavBarComponent/NavBarComponent';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonCoponent';
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
            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px', width: '100%' }}>
                <SliderComponent arrImages={[slide1, slide2, slide3]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore textButton="Xem Thêm" type='outline' styleButton={{
                        border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                        marginTop: '20px', width: '240px', height: '40px', display: 'block',
                        marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px'
                    }}
                        styleTextButton={{ fontWeight: '500' }} />
                </div>
            </div>

        </>
    )
};
export default HomePage;