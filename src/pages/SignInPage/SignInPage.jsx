import React from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import InputForm from "../../components/InputForm/InputForm";

const SignInPage = () => {
    return (
        <div>
            <WrapperContainerLeft>
                <h1>Xin Chào</h1>
                <p>Đăng nhập hoặc Tạo tài khoản</p>
                <InputForm />
            </WrapperContainerLeft>
            <WrapperContainerRight></WrapperContainerRight>
        </div>
    );
};

export default SignInPage;