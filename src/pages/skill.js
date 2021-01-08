import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

function Skill(){
    return(
        <Layout>
            <SEO title='Skill' description='HTML, CSS, Javascript, ReactJs, Boostrap, AdobeXd, NodeJs'/>
        <Container fluid className='coo sk'>
            <Row style={{width:'100%', height:'100%'}}>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>HTML</h6>
                    <ProgressBar animated now={90} className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>CSS</h6>
                    <ProgressBar animated now={85}className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>JavaScript</h6>
                    <ProgressBar animated now={91}className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>ReactJs</h6>
                    <ProgressBar animated now={93}className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>NodeJs</h6>
                    <ProgressBar animated now={87}className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>Bootstrap</h6>
                    <ProgressBar animated now={90}className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>GatsbyJs</h6>
                    <ProgressBar animated now={95}className='scale-in-hor-left'/>
                </Col>
                <Col xs={12} lg={6}className='skk'>
                    <h6 className='text-focus-in'>Adobe XD</h6>
                    <ProgressBar animated now={80}className='scale-in-hor-left'/>
                </Col>
            </Row>
        </Container>
        </Layout>
    )
}
export default Skill;