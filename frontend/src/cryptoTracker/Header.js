import React from 'react';
import { HeaderWrapper, Heading, Button } from './styles'

const Header = ({ onButtonClick = () => { } }) => {
    return (
        <HeaderWrapper>
            <Heading>Cryptocurrency Tracker</Heading>
            <Button onClick={onButtonClick}>View Amount</Button>
        </HeaderWrapper>
    );
};

export default Header;
