import React, {Component} from 'react';
import { NavItem, Nav,Navbar,FormGroup, NavDropdown, MenuItem } from 'react-bootstrap';
import Speech from '../../components/Speech/Speech.jsx';

class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"></a>
                        </Navbar.Brand>
                        <Navbar.Form bsClass="input-field" bsId="q" pullLeft>
                            <FormGroup>
                                <Speech />
                            </FormGroup>{' '}
                        </Navbar.Form>
                    </Navbar.Header>
                    
                </Navbar>
            </div>
        );
    }
}

export default HeaderLinks;
