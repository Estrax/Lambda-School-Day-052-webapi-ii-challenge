import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import styled from 'styled-components';

const NavbarBrandStyled = styled(NavbarBrand)`
    font-size: 24px;
    color: #fff !important;
`;

const NavbarStyled = styled(Navbar)`
    margin-bottom: 5rem;
    border-bottom: 1px solid #000;
    background: #000;
`;

const LinkStyled = styled(Link)`
    color: white !important;
`;

class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <NavbarStyled light expand="md">
                <NavbarBrandStyled href="/">
                    Posts
                </NavbarBrandStyled>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <LinkStyled to='/' className='nav-link'>
                                All posts
                            </LinkStyled>
                        </NavItem>
                        <NavItem>
                            <LinkStyled to='/new' className='nav-link'>
                                New post
                            </LinkStyled>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavbarStyled>
        );
    }
}

export default NavbarComponent;