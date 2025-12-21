import React, { useState } from 'react';
import { products, sliderImages } from '../../data';
import CardComponent from '../../components/CardComponent/CardComponent';
import ProductDetailModal from '../../components/ProductDetailModal/ProductDetailModal';
import SliderComponent from '../../components/SliderComponent/SliderComponent';

const HomePage = () => {
    const [category, setCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const filteredProducts = products.filter(product => {
        if (category === 'all') return true;
        return product.category === category;
    });

    const handleOpenDetail = (product) => {
        setSelectedProduct(product);
        setIsOpenModal(true);
    }

    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#efefef', paddingBottom: '50px' }}>
                <div id="container" style={{ height: '100%', width: '1270px', margin: '0 auto', paddingTop: '10px' }}>
                    <SliderComponent arrImages={sliderImages} />
                </div>
            </div>

            <div style={{ padding: '0 120px', background: '#efefef', minHeight: '100vh' }}>

                <h2 style={{ margin: '20px 0', fontSize: '24px', fontWeight: 'bold' }}>Sản phẩm nổi bật</h2>

                <div className="category-tabs" style={{ display: 'flex', gap: '15px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '5px' }}>
                    {['all', 'apple', 'samsung', 'xiaomi', 'oppo', 'vivo'].map((cat) => (
                        <div
                            key={cat}
                            onClick={() => setCategory(cat)}
                            style={{
                                padding: '10px 25px',
                                background: category === cat ? 'rgb(255, 57, 69)' : '#fff',
                                color: category === cat ? '#fff' : '#333',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                textTransform: 'capitalize',
                                border: '1px solid #ddd',
                                fontWeight: '600',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                        >
                            {cat === 'all' ? 'Tất cả' : cat}
                        </div>
                    ))}
                </div>

                <div className="products-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    {filteredProducts.map((product) => (
                        <div key={product.id} onClick={() => handleOpenDetail(product)} style={{ cursor: 'pointer' }}>
                            <CardComponent
                                countInStock={product.countInStock}
                                description={product.name}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                rating={product.rating}
                                type={product.category}
                                selled={100}
                                discount={product.discount || 0}
                            />
                        </div>
                    ))}
                </div>

                <ProductDetailModal
                    isOpen={isOpenModal}
                    onCancel={() => setIsOpenModal(false)}
                    product={selectedProduct}
                />
            </div>
        </>
    );
};

export default HomePage;