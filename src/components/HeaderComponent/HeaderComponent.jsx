import React, { useEffect, useState } from "react";
import { Badge, Col, Popover, Drawer } from "antd";
import { WrapperContentPopup, WrapperHeader, WrapperTextHeader, WrapperTextHeaderSmall, WrapperHeaderAccount } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { ButtonInputSearch } from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../LoadingComponent/Loading";
import { toggleCart, removeOrderProduct } from "../../redux/slides/orderSlide";
import { searchProduct } from "../../redux/slides/productSlide";

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
    const user = useSelector((state) => state.user)
    const order = useSelector((state) => state.order)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)

    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])

    const totalPrice = order?.orderItems?.reduce((acc, item) => acc + item.price * item.amount, 0)

    const content = (
        <div>
            <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
            {user?.isAdmin && (
                <WrapperContentPopup onClick={() => navigate('/system/admin')}>Quản Lý Hệ Thống</WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
        </div>
    );

    return (
        <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={5} >
                    <WrapperTextHeader onClick={() => navigate('/')} style={{ cursor: 'pointer', marginLeft: '50px' }}>Mshop</WrapperTextHeader>
                </Col>
                {!isHiddenSearch && (
                    <Col span={13}>
                        <ButtonInputSearch
                            size='large'
                            textButton='Tìm Kiếm'
                            placeholder="Input search text"
                        />
                    </Col>
                )}
                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
                    <Loading isLoading={loading}>
                        <WrapperHeaderAccount>
                            {userAvatar ? (
                                <img src={userAvatar} alt="avatar" style={{
                                    height: '30px',
                                    width: '30px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} />
                            ) : (
                                <UserOutlined style={{ fontSize: "30px" }} />
                            )}

                            {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click">
                                        <div style={{ cursor: 'pointer' }}>{userName?.length ? userName : user?.email}</div>
                                    </Popover>
                                </>
                            ) : (
                                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                    <WrapperTextHeaderSmall>{user?.name || user?.email || 'Đăng nhập/Đăng ký'}</WrapperTextHeaderSmall>
                                    <div>
                                        <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                        <CaretDownOutlined />
                                    </div>
                                </div>
                            )}
                        </WrapperHeaderAccount>
                    </Loading>

                    {!isHiddenCart && (
                        // 6. Thêm sự kiện onClick để mở giỏ hàng
                        <div onClick={() => dispatch(toggleCart(true))} style={{ cursor: 'pointer' }}>
                            {/* Cập nhật số lượng badge từ Redux */}
                            <Badge count={order?.orderItems?.length} size="small" >
                                <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                            </Badge>
                            <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
                        </div>
                    )}
                </Col>
            </WrapperHeader>

            {/* 7. Thêm Drawer hiển thị giỏ hàng */}
            <Drawer
                title="Giỏ hàng"
                placement="right"
                onClose={() => dispatch(toggleCart(false))}
                open={order?.isCartOpen}
                width={400}
            >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {order?.orderItems?.length === 0 ? (
                            <div style={{ textAlign: 'center', marginTop: '50px' }}>Giỏ hàng trống</div>
                        ) : (
                            order?.orderItems?.map((item) => (
                                <div key={item.product} style={{ display: 'flex', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                                    <img src={item.image} alt="" style={{ width: '70px', height: '70px', objectFit: 'cover', border: '1px solid #eee' }} />
                                    <div style={{ flex: 1, marginLeft: '10px' }}>
                                        <h4 style={{ margin: '0 0 5px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '200px' }}>{item.name}</h4>
                                        <p style={{ color: '#e50914', fontWeight: 'bold', margin: 0 }}>{item.price?.toLocaleString()} ₫</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                                            <span style={{ fontSize: '13px', color: '#666' }}>Số lượng: {item.amount}</span>
                                        </div>
                                    </div>
                                    <DeleteOutlined
                                        style={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
                                        onClick={() => dispatch(removeOrderProduct({ idProduct: item.product }))}
                                    />
                                </div>
                            ))
                        )}
                    </div>

                    {order?.orderItems?.length > 0 && (
                        <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: 'bold', fontSize: '18px' }}>
                                <span>Tổng cộng:</span>
                                <span style={{ color: '#e50914' }}>{totalPrice?.toLocaleString()} ₫</span>
                            </div>
                            <button
                                onClick={() => {
                                    dispatch(toggleCart(false))
                                    navigate('/order') // Chuyển sang trang thanh toán/chi tiết giỏ
                                }}
                                style={{ width: '100%', background: 'rgb(255, 57, 69)', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
                            >
                                Xem giỏ hàng
                            </button>
                        </div>
                    )}
                </div>
            </Drawer>
        </div >
    )
};

export default HeaderComponent;