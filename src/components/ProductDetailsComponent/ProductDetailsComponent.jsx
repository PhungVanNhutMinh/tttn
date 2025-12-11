import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from '../../images/milk 1.webp';
import imageProduct2 from '../../images/milk2.webp';
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyletextSell } from "./style";
import { MinusOutlined, PlusOutlined, StarOutlined } from "@ant-design/icons";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
const ProductDetailsComponent = () => {
    const onChange = () => { }
    return (

        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={imageProduct} alt="Product Image" preview={false} />
                <Row style={{ padding: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProduct2} alt="Product Image 2" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProduct2} alt="Product Image 2" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProduct2} alt="Product Image 2" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProduct2} alt="Product Image 2" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProduct2} alt="Product Image 2" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProduct2} alt="Product Image 2" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '6px' }}>
                <WrapperStyleNameProduct>Sữa tươi nguyên kem Organic Meadow 3.25% M.F hộp 1L</WrapperStyleNameProduct>
                <div>
                    <StarOutlined style={{ fontSize: '12px', color: "yellow" }} />
                    <StarOutlined style={{ fontSize: '12px', color: "yellow" }} />
                    <StarOutlined style={{ fontSize: '12px', color: "yellow" }} />
                    <WrapperStyletextSell> | Đã bán 100+</WrapperStyletextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct> 99.000 đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao Đến  </span>
                    <span className="address"> 123/456/789 </span>
                    <span className="change-address">- Đổi địa chỉ </span>
                </WrapperAddressProduct>
                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #ccc' }}>
                    <div style={{ marginBottom: '10px' }}> Số Lượng </div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                        <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent

                        size={40}
                        //bordered={false}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                    <ButtonComponent

                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua Trả Sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
};

export default ProductDetailsComponent;