import { Input } from "antd";
import React, { useState } from "react";

const InputForm = (props) => {
    //const { placeholder = 'Nhập thông tin', ...rests } = props;
    const [valueInput, setValueInput] = useState('');

    return (
        <Input placeholder={'nhập text'} value={valueInput}
        />
    )
}

export default InputForm;