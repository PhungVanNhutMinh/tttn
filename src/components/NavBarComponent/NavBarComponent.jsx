import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from "./style";
import { Checkbox, Rate } from "antd";

const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue key={option}>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                    {options.map((option) => {
                        return (
                            <Checkbox style={{ marginLeft: '0' }} key={option.value} value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                </Checkbox.Group>
            case 'star':
                return options.map((option) => {
                    console.log('check', option);
                    return (
                        <div key={option} style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span>{`từ ${option} sao`}</span>
                        </div>
                    )
                });
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                });
            default:
                return {};
        }
    }
    return (
        <div style={{ backgroundColor: '#fff' }}>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['TV', 'Điện thoại', 'Laptop', 'Tablet', 'Âm thanh', 'Phụ kiện'])}
            </WrapperContent>
        </div>
    )
};
/*
<WrapperContent>
                {renderContent('text', ['TV', 'Điện thoại', 'Laptop', 'Tablet', 'Âm thanh', 'Phụ kiện'])}
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', ['3', '4', '5'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['Dưới 500000', 'Trên 500000'])}
            </WrapperContent>
*/

export default NavBarComponent;