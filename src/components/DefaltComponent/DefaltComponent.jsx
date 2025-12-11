import React from "react";
import HeaderComponent from '../HeaderComponent/HeaderComponent';

const DefaltComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
};

export {
    DefaltComponent
};  