import { Drawer } from "antd";
import React from "react";

const DrawerComponent = ({ title = 'Drawer', placement = 'right', isOpen = false, children, width = '90%', ...rests }) => {
    return (
        <Drawer title={title} placement={placement} open={isOpen} width={width} {...rests}>
            {children}
        </Drawer>
    );
}

export default DrawerComponent;