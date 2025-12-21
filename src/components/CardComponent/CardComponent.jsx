import React from "react";
import { StyleNameProduct, WrapperCardStyle, Wrapperdiscounttext, WrapperPriceText, WrapperStyletextSell, WrapperReporText } from "./style";
import { StarOutlined } from "@ant-design/icons";
import logo from '../../images/logoUTH.png';

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled } = props

    return (
        <WrapperCardStyle
            hoverable
            styles={{ header: { width: '200px', height: '200px' } }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt={name} src={image} style={{ height: '200px', width: '200px', objectFit: 'contain' }} />}//Tĩnh
        // cover={
        //     <img
        //         draggable={false}
        //         alt="example"
        //         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        //     />
        // }
        >
            <img
                src={logo}
                style={{
                    width: '68px', height: '14px', position: 'absolute', top: -1, left: -1,
                    borderTopLeftRadius: '3px'
                }} alt="logo" />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating}</span><StarOutlined style={{ fontSize: '12px', color: "yellow" }} />
                </span>
                <WrapperStyletextSell> | Đã bán {selled || 100}+</WrapperStyletextSell>

            </WrapperReporText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>{price}</span>
                <Wrapperdiscounttext>
                    {discount || 5} %
                </Wrapperdiscounttext>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
};

export default CardComponent;