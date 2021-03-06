import {Card} from 'components/Card/Card.jsx';
import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';
import AgendaModule  from 'components/Agenda/AgendaModule.jsx';
class Calendar extends Component {
    
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                                <Card
                                    title="Agenda"
                                    content={
                                        <AgendaModule />
                                    }
                                />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

