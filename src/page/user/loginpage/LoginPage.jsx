import React from 'react';
import { FooterUser, Header, Login } from '../../../components';
function LoginPage(props) {
    return (
        <>
            <Header cart={false} />
            <Login />
            <FooterUser />
        </>
    );
}

export default LoginPage;