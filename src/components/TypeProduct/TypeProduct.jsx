import React from "react";
const TypeProduct = ({ name }) => {
    return (
        // 2. Thay chữ cứng bằng biến {name}
        <div style={{ padding: '0 10px', cursor: 'pointer' }}>
            {name}
        </div>
    )
}
export {
    TypeProduct
};