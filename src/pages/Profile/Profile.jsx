import React, { useEffect, useState } from 'react'
import { WrapperBackButton, WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperUploadFile } from './style';
import InputForm from '../../components/InputForm/InputForm';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from "../../services/UserService";
import { useMutationHook } from '../../hooks/userMutivationHook';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from "../../components/Message/Message";
import { updateUser } from '../../redux/slides/userSlide';
import { Button, Upload } from 'antd';
import { ArrowLeftOutlined, UploadOutlined } from '@ant-design/icons';
import { getBase64 } from '../../utils';
import { useNavigate } from 'react-router-dom';//quay lại trang chủ frofile

const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const [fileList, setFileList] = useState([])
    const navigate = useNavigate()//quay lại trang chủ frofile

    const mutation = useMutationHook(
        (data) => {
            const { id, access_token, ...rests } = data
            return UserService.updateUser(id, rests, access_token)
        }
    )
    const dispatch = useDispatch()
    const { data, isPending, isSuccess, isError } = mutation;

    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
        // ensure upload list does not keep previous selections
        setFileList([]);
    }, [user])

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailsUser(user?.id, user?.access_token)
            // clear temporary upload state after successful update
            setFileList([]);
        } else if (isError) {
            message.error()
            console.error('Update user error:', mutation.error);
        }
    }, [isSuccess, isError])
    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }
    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnChangeName = (value) => {
        setName(value)
    }
    const handleOnChangePhone = (value) => {
        setPhone(value)
    }
    const handleOnChangeAddress = (value) => {
        setAddress(value)
    }
    const handleOnChangeAvatar = async (fileList) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setAvatar(file ? (file.preview || file.url) : '');
    };
    // const handleOnChangeAvatar = async (info) => {
    //     let newFileList = info.fileList.slice(-1);
    //     const file = newFileList[0];
    //     if (file && !file.url && !file.preview && file.originFileObj) {
    //         file.preview = await getBase64(file.originFileObj);
    //     }
    //     newFileList = newFileList.map(f => ({ ...f, status: 'done' }));
    //     setFileList(newFileList);
    //     setAvatar(file ? (file.preview || file.url) : '');
    // };

    const handleRemoveAvatar = (file) => {
        setFileList([]);
        setAvatar('');
        return true;
    };

    const handleUpdate = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })
    }

    return (
        <div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <Loading isLoading={isPending}>
                <WrapperContentProfile>
                    <WrapperInput>
                        <WrapperLabel htmlFor='name'>Name</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="name" value={name} onChange={handleOnChangeName} />
                        <ButtonComponent
                            size="default"
                            onClick={handleUpdate}
                            styleButton={{
                                height: '30px',
                                width: 'fit-content',
                                border: '1px solid rgb(26, 148, 255)',
                                borderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton="Cập Nhật"
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>

                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor='email'>Email</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="email" value={email} onChange={handleOnChangeEmail} />
                        <ButtonComponent
                            size="default"
                            onClick={handleUpdate}
                            styleButton={{
                                height: '30px',
                                width: 'fix-content',
                                border: '1px solid rgb(26, 148, 255)',
                                borderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton="Cập Nhật"
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>

                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor='phone'>Phone</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="phone" value={phone} onChange={handleOnChangePhone} />
                        <ButtonComponent
                            size="default"
                            onClick={handleUpdate}
                            styleButton={{
                                height: '30px',
                                width: 'fix-content',
                                border: '1px solid rgb(26, 148, 255)',
                                borderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton="Cập Nhật"
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>

                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor='avatar'>Avatar</WrapperLabel>
                        <WrapperUploadFile
                            onChange={handleOnChangeAvatar}
                            onRemove={handleRemoveAvatar}
                            fileList={fileList}
                            beforeUpload={() => false}
                            maxCount={1}
                            listType="picture"
                            showUploadList={{ showPreviewIcon: false, showRemoveIcon: true, showDownloadIcon: false }}
                        >
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </WrapperUploadFile>
                        {avatar && (
                            <img src={avatar} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar" />
                        )}

                        {/*<InputForm style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnChangeAvatar} />*/}
                        <ButtonComponent
                            size="default"
                            onClick={handleUpdate}
                            styleButton={{
                                height: '30px',
                                width: 'fix-content',
                                border: '1px solid rgb(26, 148, 255)',
                                borderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton="Cập Nhật"
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>

                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLabel htmlFor='address'>Address</WrapperLabel>
                        <InputForm style={{ width: '300px' }} id="address" value={address} onChange={handleOnChangeAddress} />
                        <ButtonComponent
                            size="default"
                            onClick={handleUpdate}
                            styleButton={{
                                height: '30px',
                                width: 'fix-content',
                                border: '1px solid rgb(26, 148, 255)',
                                borderRadius: '4px',
                                padding: '2px 6px 6px',
                            }}
                            textButton="Cập Nhật"
                            styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>

                    </WrapperInput>
                    <WrapperBackButton
                        style={{ cursor: 'pointer', margin: '20px 0', fontSize: '16px', fontWeight: 'bold', width: 'fit-content' }}
                        onClick={() => navigate('/')}
                    >
                        <ArrowLeftOutlined style={{ marginRight: '5px' }} />
                        Quay lại trang chủ
                    </WrapperBackButton>

                </WrapperContentProfile>
            </Loading>
        </div>
    )
}

export default ProfilePage;
