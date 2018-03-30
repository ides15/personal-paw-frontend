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
import BubbleChart from '../../components/BubbleChart/BubbleChart.jsx';
import logo2 from '../../assets/img/pennstatelogo.png';
import menuData from '../../assets/json/menu.json';
import Speech from '../../components/Speech/Speech.jsx';
//import logo2 from '../../assets/img/logo2.png';

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
                                content={<img src={logo2} alt="logo2_image"/>}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card 
                                title="Ask me anything!"
                                content={
                                    <Speech/>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            {/*<div class="bubble-chart" id="bubble-chart">
                                <BubbleChart 
                                    data={menuData}
                                />
                             </div>*/}
                        </Col>
                        
                    </Row>
                        
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
