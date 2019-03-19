import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

export const SubmitBtn = styled.input`
    background-color: #000;
    border: 1px solid black;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export const NavbarBrandStyled = styled(NavbarBrand)`
    font-size: 24px;
    color: #fff !important;
`;

export const NavbarStyled = styled(Navbar)`
    margin-bottom: 5rem;
    border-bottom: 1px solid #000;
    background: #000;
`;

export const LinkStyled = styled(Link)`
    color: white !important;
`;

export const Card = styled.div`
    width: 45%;
    margin: 20px auto;

    &:hover {
        text-decoration: none;
    }
`;

export const CardSingle = styled.div`
    width: 45%;
    margin: 20px auto
`

export const Title = styled.h1`
    text-align: center;
    color: black;
    text-decoration: none;
    margin-bottom: 0;
    padding: 10px;
`;

export const Contents = styled.p`
    color: black;
    text-decoration: none;
    text-align: center;
`;

export const cardBorder = {
    border: '1px solid black',
    borderRadius: '6px'
};

export const ButtonHalf = styled.button`
    width: 50%;
    display: inline-block;
`;

export const Buttons = styled.div`
    width: 100%;
`;

export const FormComponent = styled.form`
    width: 18rem;
    margin: 0 auto;
`;

export const StyledLink = styled(Link)`
    text-decoration: none !important;
`;