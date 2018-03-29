import {Card} from '../../components/Card/Card.jsx';
import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

class LionPATH extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                                <Card
                                    title="Redirecting to LionPATH..."
                                    content={
                                        window.location.href="https://lionpath.psu.edu"
                                    }
                                />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default LionPATH;
