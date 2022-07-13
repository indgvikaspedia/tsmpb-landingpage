import React, { useEffect, useState } from 'react';

import { Row, Col, Container } from "reactstrap";

// import withStyles from 'isomorphic-style-loader/withStyles';

// import styles from '../../../../shared/css/nishkarshforms.css';
import './css/nishkarshforms.css'
// import Footer from '../../footer/Footer';
import WidthFooter from '../shared/WidthFooter';

const TSMPBFooter = () => {
    const [sideWidth, setSideWidth] = useState(0);
    const [param, setParam] = useState(false);
    const [width,setWidth] = useState(0);

    useEffect(() => {
        var value = document.getElementById('root').clientWidth;
        if(typeof window !== 'undefined'){
        var windowwidth = window.screen.width;
        console.log("windowwidth:::",windowwidth);
        // alert(windowwidth);
        setWidth(windowwidth);
        }
        // alert("clientWidth::::",value);
        // console.log("value::::",value);
        // setSideWidth(value);
    }, [width]);


    return (
        width > 700 ?
        <div>
            
            <footer className="foot">
                <Container>
                    <Row style={{ color: "white", fontSize: 13 }}>
                        <Col xs={6} md={4} className="verti" style={{ marginTop: 32 }}>
                            {/* <a className={ftlink} href="https://reactjs.org" target="_blank">Home</a> */}
                            <a className="ftlink" href="http://localhost:3001/homepage" target="_blank">
                                <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/home.png' alt="home" /></span>Home</a>
                        </Col>

                        <Col xs={6} md={4} className="verti" style={{ marginTop: 32 }}>
                            <a className="ftlink" href="http://localhost:3001/termsandconditions" target="_blank">Terms & Conditions</a>
                        </Col>

                        <Col xs={6} md={4} className="verti" style={{ marginTop: 32 }}>Tollfree:
                            <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/call.png' alt="call" /></span>040-66364094 or
                            <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/mail.png' alt="mail" /></span>: tsmapb@gmail.com</Col>
                    </Row>

                    <Row style={{ color: "white", fontSize: 13 }}>
                        <Col xs={6} md={4} className="verti">
                            {/* <a className={ftlink} href="https://reactjs.org" target="_blank">About Us</a> */}
                            <a className="ftlink" href="http://localhost:3001/aboutus" target="_blank">
                                <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/About_us.png' alt="About_us" /></span>About Us</a>
                        </Col>

                        <Col xs={6} md={4} className="verti">
                            <a className="ftlink" href="http://localhost:3001/privacypolicy" target="_blank">Privacy Policy</a>
                        </Col>

                        <Col xs={6} md={4} className="verti">
                            <span><img className="fticnsreg" src='https://keyword.vikaspedia.in/tsmpbmedia/Registered.png' alt="Registered" /></span>2022 Telangana State Medicinal Plants Board
                        </Col>
                    </Row>

                    <Row style={{ color: "white", fontSize: 13 }}>
                        <Col xs={6} md={4} className="verti">
                            {/* <a className={ftlink} href="https://reactjs.org" target="_blank">Market Place</a> */}
                            <a className="ftlink" href="https://echarak.in/echarak/marketprice.do" target="_blank">
                                <span><img className="fticns" 
                                // src='http://localhost/tsmpb/MarketPrice512x512.png'
                                src={require("../images1/Market_Info.png")}
                                 alt="Market" /></span>Market Info</a>
                        </Col>

                        <Col xs={6} md={4} className="verti">
                            <a className="ftlink" href="http://localhost:3001/copyrightpolicy" target="_blank">Copyright Policy</a>
                        </Col>

                        <Col xs={6} md={4} className="verti">Department of HM & FW, Goverment of Telangana</Col>
                    </Row>

                    <Row style={{ color: "white", fontSize: 13 }}>
                        <Col xs={6} md={4} className="verti">
                            {/* <a className={ftlink} href="https://reactjs.org" target="_blank">Feedback</a> */}
                            <a className="ftlink" href="http://localhost:3001/feedback" target="_blank">
                                <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/Feedback.png' alt="Feedback" /></span>Feedback</a>
                        </Col>

                        <Col xs={6} md={4} className="verti">
                            <a className="ftlink" href="http://localhost:3001/hyperlinkpolicy" target="_blank">Hyperlink Policy</a>
                        </Col>
                        <Col xs={6} md={4} className="verti">
                            All Rights Reserved | Visitors:
                        </Col>
                    </Row>

                </Container>

            </footer>

            <div style={{ backgroundColor: "#e1bf00" }}>
                <hr style={{ height: 5, marginTop: 0, marginBottom: 0, opacity: 0 }} />
            </div>

        </div>
        :
         <WidthFooter/>
        // null

    );
}

export default 
// withStyles(styles)(
    TSMPBFooter;
    // );
