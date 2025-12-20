import React from 'react';
import { TypeProduct } from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slide1 from '../../images/slide1.webp';
import slide2 from '../../images/slide2.webp';
import slide3 from '../../images/slide3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useQuery } from '@tanstack/react-query';
import * as ProductService from '../../services/ProductService'


const HomePage = () => {
    const arr = ['TV', 'Điện thoại', 'Laptop', 'Tablet', 'Âm thanh', 'Phụ kiện'];
    const fetchProductAll = async () => {
        const res = await ProductService.getAllProduct()
        return res
    }

    const { isLoading, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProductAll,
        retry: 3,
        retryDelay: 1000
    })


    return (
        <>
            <div style={{ width: '1270px', margin: 'o auto' }}>
                <WrapperTypeProduct style={{ padding: '0 120px' }}>
                    {arr.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    },
                    )}
                </WrapperTypeProduct>
            </div>
            <div className="body" style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slide1, slide2, slide3]} />
                    <WrapperProducts>
                        {products?.data?.map((product) => {
                            return (
                                <CardComponent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    discount={product.discount}
                                />
                            );
                        })}

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
            </div>

        </>
    )
};
export default HomePage;