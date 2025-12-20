import { Input } from "antd";
import React from "react";
const InputComponent = ({ size, placeholder, bordered, style, ...rests }) => {
    return (
        <div>
            <Input
                size={size}
                placeholder={placeholder}
                // 👇 SỬA DÒNG NÀY:
                // Nếu bordered là false thì dùng 'borderless', ngược lại dùng 'outlined' (có viền)
                variant={bordered === false ? "borderless" : "outlined"}
                //bordered={bordered}
                style={style}
                {...rests}
            />
        </div>
    )
};

export default InputComponent;