import React, {Component} from 'react';
import { Row,Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <Row>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a>Personal Paw</a>, The Pennsylvania State University
                    </p>
                </Row>
            </footer>
		);
	}
}

export default Footer;
