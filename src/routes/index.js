import HomePage from "../pages/HomePage/HomePage";
import Productspage from "../pages/ProductsPage/Productspage";
import OrderPage from "../pages/OrderPage/OrderPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

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
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true

    }, {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true

    }, {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true

    },
    {
        path: '/orders',
        page: OrderPage,
        isShowHeader: true

    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true

    },
    {
        path: '*',
        page: NotFoundPage
    },

];  