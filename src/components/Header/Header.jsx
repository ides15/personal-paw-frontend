import React, { Component } from 'react';
import { Navbar,FormGroup } from 'react-bootstrap';

import HeaderLinks from './HeaderLinks.jsx';
import Speech from '../../components/Speech/Speech.jsx';
import appRoutes from '../../routes/app.jsx';

class Header extends Component{
    constructor(props){
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }
    mobileSidebarToggle(e){
        if(this.state.sidebarExists === false){
            this.setState({
                sidebarExists : true
            });

        }
        e.preventDefault();
        document.documentElement.classList.toggle('nav-open');
        var node = document.createElement('div');
        node.id = 'bodyClick';
        node.onclick = function(){
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle('nav-open');
        };
        document.body.appendChild(node);
    }
    getBrand(){
        var name;
        appRoutes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }else{
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }
            }
            return null;
        })
        return name;
    }
    render(){
        return (
            <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Dashboard</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                                <Speech />{' '}
                        </Navbar.Form>
                    </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default Header;
