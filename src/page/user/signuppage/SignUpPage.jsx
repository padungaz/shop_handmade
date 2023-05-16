import React from 'react';
import { Header, SignUp, FooterUser } from '../../../components';
function SignUpPage(props) {
    return (
        <>
            <Header cart={false} />
            <SignUp />
            <FooterUser />
        </>
    );
}

export default SignUpPage;