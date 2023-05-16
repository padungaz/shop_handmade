import React from 'react';

import { Header, Forgot, FooterUser } from '../../../components';


function ForgotPage(props) {
    return (
        <>
            <Header cart={false} />
            <Forgot />
            <FooterUser />
        </>
    );
}

export default ForgotPage;