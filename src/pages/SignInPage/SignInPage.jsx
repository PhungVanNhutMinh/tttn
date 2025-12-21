import React, { useEffect, useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../images/logologin.jpg"
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHook } from "../../hooks/userMutivationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const mutation = useMutationHook(
        data => UserService.loginUser(data)
    )
    const { data, isPending, isSuccess, isError } = mutation
    const navigate = useNavigate()
    useEffect(() => {
        //console.log('Mutation Result:', { isSuccess, isError, data });
        if (isSuccess && data?.status === 'OK') {
            navigate('/')
            //console.log('data', data)
            // store correct access token key returned from backend
            localStorage.setItem('access_token', data?.access_token)
            if (data?.access_token) {
                localStorage.setItem('access_token', JSON.stringify(data?.access_token))
                const decode = jwt_decode(data?.access_token)
                //console.log('decode', decode);
                if (decode?.id) {
                    handleGetDetailsUser(decode?.id, data?.access_token)
                }
            }
        }

    }, [isSuccess, data, navigate])
    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }


    const handleNavigateSignUp = () => {
        navigate('/sign-up')
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
        //console.log('sign-up', email, password);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin Chào</h1>
                    <p>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '10px' }}
                        placeholder="abc123@gmail.com"
                        value={email}
                        onChange={handleOnchangeEmail} />
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >
                            {isShowPassword ? (
                                <EyeFilled />
                            ) : (
                                <EyeInvisibleFilled />
                            )}
                        </span>
                        <InputForm placeholder="password"
                            type={isShowPassword ? "text" : "password"}
                            value={password}
                            onChange={handleOnchangePassword} />
                    </div>
                    {data?.status && data?.status !== 'OK' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    <Loading isLoading={isPending}>
                        <ButtonComponent
                            disabled={!email.length || !password.length}
                            onClick={handleSignIn}
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '26px 0 10px'
                            }}
                            textButton={'Đăng Nhập'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </Loading>
                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản </WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt='image-logo' height="200px" width="200px" />
                    <h4>Chào Mừng Đến Với Mshop</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
};

export default SignInPage;