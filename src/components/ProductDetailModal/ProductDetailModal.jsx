import React, { useEffect, useState } from 'react';
import { Modal, Button, Image, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { addOrderProduct } from '../../redux/slides/orderSlide';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const ProductDetailModal = ({ isOpen, onCancel, product }) => {
    const dispatch = useDispatch();
    const [numProduct, setNumProduct] = useState(1);

    useEffect(() => {
        setNumProduct(1);
    }, [product]);

    if (!product) return null;

    const handleChangeCount = (type) => {
        if (type === 'increase') {
            setNumProduct(numProduct + 1);
        } else {
            if (numProduct > 1) {
                setNumProduct(numProduct - 1);
            }
        }
    }

    const handleAddToCart = () => {
        if (!product) return;

        dispatch(addOrderProduct({
            orderItem: {
                name: product.name,
                amount: numProduct,
                image: product.image,
                price: product.price,
                product: product._id || product.id,
                countInStock: product.countInStock || 100
            }
        }));

        onCancel();
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onCancel}
            footer={null}
            width={800}
            centered
        >
            <div style={{ display: 'flex', gap: '30px', padding: '20px' }}>
                <div style={{ flex: 1 }}>
                    <Image src={product.image} alt={product.name} preview={false} style={{ width: '100%', objectFit: 'contain' }} />
                </div>

                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px' }}>{product.name}</h2>
                    <p style={{ color: '#666' }}>Thương hiệu: <span style={{ fontWeight: 'bold' }}>{product.brand || 'Oppo'}</span></p>

                    <p style={{ fontSize: '24px', color: '#e50914', fontWeight: 'bold', margin: '20px 0' }}>
                        {product.price?.toLocaleString()} ₫
                    </p>

                    <p>Cảm ơn bạn đã quan tâm đến MiniShop. Sản phẩm chính hãng, bảo hành 12 tháng.</p>

                    <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Số lượng:</span>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px' }}>
                            <Button
                                icon={<MinusOutlined />}
                                type="text"
                                onClick={() => handleChangeCount('decrease')}
                                style={{ border: 'none' }}
                            />
                            <InputNumber
                                value={numProduct}
                                defaultValue={1}
                                onChange={(value) => setNumProduct(Number(value))}
                                style={{ width: '50px', border: 'none', textAlign: 'center' }}
                                controls={false}
                            />
                            <Button
                                icon={<PlusOutlined />}
                                type="text"
                                onClick={() => handleChangeCount('increase')}
                                style={{ border: 'none' }}
                            />
                        </div>
                    </div>

                    <Button
                        type="primary"
                        danger
                        size="large"
                        style={{ width: '100%', height: '50px', fontSize: '18px', marginTop: '10px' }}
                        onClick={handleAddToCart}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ProductDetailModal;