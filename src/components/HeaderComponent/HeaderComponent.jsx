import React from "react";
import { Col } from "antd";
import { WrapperHeader, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { CaretDownOutlined, } from "@ant-design/icons";
import { WrapperHeaderAccount } from "./style";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ButtonInputSearch } from "../ButtonInputSearch/ButtonInputSearch";


const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader >
                <Col span={6}>
                    <WrapperTextHeader>Mshop</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size='large'
                        bordered={false}
                        textButton='Tìm Kiếm'
                        placeholder="input search text"
                    //onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>

                    </div>
                </Col>
            </WrapperHeader>
        </div >
    )
};

export default HeaderComponent;