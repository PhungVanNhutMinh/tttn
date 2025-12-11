import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputCoponent";
import { ButtonComponent } from "../ButtonComponent/ButtonCoponent";

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = 'rgba(19, 16, 231, 1)',
        colorButton = '#fff'
    } = props;
    return (
        <div style={{ display: 'flex' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput }}
            />
            <ButtonComponent
                size={size}
                //bordered={false}
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    )
}
export {
    ButtonInputSearch
};