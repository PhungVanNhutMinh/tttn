import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
width: 200px;       
& img {
    width: 200px;
    height: 200px;
};
position: relative;
`;


export const StyleNameProduct = styled.div`
font - weight: 400;
font - size: 12px;
line - height: 16px;
color: rgb(56, 56, 61);
`;
export const WrapperReporText = styled.div`
fontsize: 11px;
color: rgb(128, 128, 137);
display: flex;
align - items: center;
margin: 6px 0 0px;
`;
export const WrapperPriceText = styled.div`
font - weight: 500;
font - size: 16px;
line - height: 22px;
color: rgb(255, 0, 0);

`;
export const Wrapperdiscounttext = styled.span`
font - weight: 500;
font - size: 12px;
line - height: 16px;
color: rgb(255, 0, 0);
margin - top: 4px;
`; 