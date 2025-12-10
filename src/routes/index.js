import HomePage from "../pages/HomePage/HomePage";
import Productspage from "../pages/ProductsPage/Productspage";
import OrderPage from "../pages/OrderPage/OrderPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: Productspage,
        isShowHeader: true

    },
    {
        path: '/orders',
        page: OrderPage,
        isShowHeader: true

    },
    {
        path: '*',
        page: NotFoundPage
    },

];  