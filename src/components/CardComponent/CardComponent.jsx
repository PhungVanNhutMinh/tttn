import React from "react";
import { StyleNameProduct, WrapperCardStyle, Wrapperdiscounttext, WrapperPriceText } from "./style";
import { StarOutlined } from "@ant-design/icons";
import { WrapperReporText } from "./style";
import logo from '../../images/logoUTH.png';

const CardComponent = ({ children, styleCard }) => {
    return (
        <WrapperCardStyle
            hoverable
            styles={{ header: { width: '200px', height: '200px' } }}
            style={{ width: 200 }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
        >
            <img
                src={logo}
                style={{
                    width: '68px', height: '14px', position: 'absolute', top: -1, left: -1,
                    borderTopLeftRadius: '3px'
                }} alt="logo" />
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>4.95</span><StarOutlined style={{ fontSize: '12px', color: "yellow" }} />
                </span>
                <span> | Đã bán 100+</span>

            </WrapperReporText>
            <WrapperPriceText>1.000.000 đ
                <Wrapperdiscounttext>
                    -9%
                </Wrapperdiscounttext>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
};

export default CardComponent;