import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, ...rets }) => {
    return (
        <Button
            size={size}
            //bordered={false}
            style={styleButton}
            {...rets}
        //style={{ background: backgroundColorButton, border: !bordered && 'none' }}
        //icon={<SearchOutlined style={{ color: colorButton }} />}
        ><span style={styleTextButton}>{textButton}</span>
        </Button>
    )
};

export {
    ButtonComponent
};