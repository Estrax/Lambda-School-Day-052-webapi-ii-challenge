import React, { Component } from 'react';

import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import {
    NavbarBrandStyled,
    NavbarStyled,
    LinkStyled
} from '../styles';

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