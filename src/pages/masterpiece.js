import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

function Karya(){
    return(
        <Layout>
            <SEO title='Skill' description='HTML, CSS, Javascript, ReactJs, Boostrap, AdobeXd, NodeJs'/>
        <Container fluid className='coo sk'>
            <Container style={{width:'100%', height:'100%'}}>
            <Row style={{width:'100%', height:'100%', margin:'0'}}>
                <Col xs={12} lg={5}className='skk siji bgm scale-in-hor-left'>
                    <div className='ump'>
                    <h6 className='text-focus-in'>Realine</h6>
                    <a href='https://noone.my.id'>
                        <Button>Lihat</Button>
                    </a>
                    </div>
                </Col>
                <Col xs={12} lg={{span:5, offset:2}}className='skk loro bgm scale-in-hor-left'>
                    <div className='ump'>
                    <h6 className='text-focus-in'>Foodshop</h6>
                    <a href='https://noone.my.id'>
                        <Button>Lihat</Button>
                    </a>
                    </div>
                </Col>
                <Col xs={12} lg={5}className='skk telu bgm scale-in-hor-left'>
                    <div className='ump'>
                    <h6 className='text-focus-in'>Coffee</h6>
                    <a href='https://noone.my.id'>
                        <Button>Lihat</Button>
                    </a>
                    </div>
                </Col>
                <Col xs={12} lg={{span:5, offset:2}}className='skk papat bgm scale-in-hor-left'>
                    <div className='ump'>
                    <h6 className='text-focus-in'>JJ Interprice</h6>
                    <a href='https://noone.my.id'>
                        <Button>Lihat</Button>
                    </a>
                    </div>
                </Col>
            </Row>
            </Container>
        </Container>
        </Layout>
    )
}
export default Karya;