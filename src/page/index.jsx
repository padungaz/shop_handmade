import { lazy } from 'react';
import { pathNameAd } from '../common/pathName';
import { DetailProduct } from '../components';
import ForgotPage from './user/forgotpage/ForgotPage';
import LoginPage from './user/loginpage/LoginPage';
import PageSearch from './user/PageSearch';
import SignUpPage from './user/signuppage/SignUpPage';

export const adminRotes = [
    {
        isExact: true,
        path: pathNameAd.dashboard,
        Component: lazy(() => import('./admin/Dashboard'))
    },
    {
        isExact: true,
        path: pathNameAd.product,
        Component: lazy(() => import('./admin/ProductPage'))
    },
    {
        isExact: true,
        path: pathNameAd.users,
        Component: lazy(() => import('./admin/UserPage'))
    },
    {
        isExact: true,
        path: pathNameAd.order,
        Component: lazy(() => import('./admin/OrderPage'))
    },
    {
        isExact: true,
        path: pathNameAd.discount,
        Component: lazy(() => import('./admin/DiscountPage'))
    },
    {
        isExact: true,
        path: pathNameAd.voucher,
        Component: lazy(() => import('./admin/VoucherPage'))
    }
]

export const userRoute = [
    {
        isExact: true,
        path: "/",
        Component: lazy(() => import('./user/homepage/Homepage')),
    },
    {
        isExact: true,
        path: "cart",
        Component: lazy(() => import('./user/cartpage/CartPage')),
    },
    {
        isExact: true,
        path: "payment",
        Component: lazy(() => import('./user/paymentpage/PaymentPage')),
    },
    {
        isExact: true,
        path: "profileuser",
        Component: lazy(() => import("./user/profilepage/ProfileUserPage")),
    },
    {
        isExact: true,
        path: "/detail/:id",
        Component: () => <DetailProduct />,
    },
    {
        isExact: true,
        path: "/search/",
        Component: () => <PageSearch />,
    }
]
export const CommonComponent = [
    {
        isExact: true,
        path: "/login",
        Component: () => <LoginPage />
    },
    {
        isExact: true,
        path: "/signup",
        Component: () => <SignUpPage />
    },
    {
        isExact: true,
        path: "/forgotpass",
        Component: () => <ForgotPage />
    },
    {
        isExact: true,
        path: "/admin/profile",
        Component: lazy(() => import('./admin/ProfilePage'))
    },
]



