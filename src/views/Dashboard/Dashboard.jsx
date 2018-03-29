import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Button,Grid, Row, Col, Popover} from 'react-bootstrap';
import {Card} from '../../components/Card/Card.jsx';
import {StatsCard} from '../../components/StatsCard/StatsCard.jsx';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from '../../variables/Variables.jsx';
import logo from '../../assets/img/pennstatelogo.png';
import logo2 from '../../assets/img/logo2.png';

class Dashboard extends Component {
    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                content={<img src={logo2} alt="logo2_image" height="200" width="200"/>}
                                
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="chartHours"
                                title="Users Behavior"
                                category="24 Hours performance"
                                stats="Updated 3 minutes ago"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataSales}
                                            type="Line"
                                            options={optionsSales}
                                            responsiveOptions={responsiveSales}
                                        />
                                    </div>
                                    }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendSales)}
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={4}>
                                    <div id="speech">
                                        <iframe width="300" height="450" src="https://console.dialogflow.com/api-client/demo/embedded/4130aeeb-9012-4126-941d-1773e2e08470">
                                        </iframe>
                                    </div>
                                
                        </Col>
                        
                    </Row>
                        
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
