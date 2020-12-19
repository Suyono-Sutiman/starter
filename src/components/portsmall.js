import {Link} from 'gatsby'
import React from 'react'
import { Image, Jumbotron, Row, Col } from 'react-bootstrap'
import bgp from '../images/Search.svg'

function Portsmall() {
    return (
        <Jumbotron className='bgsc' >
            <Row>
                <Col lg={6}>
                    <Image src={bgp} fluid style={{maxWidth:'60%'}}/>
                </Col>
                <Col lg={6} style={{alignSelf:'center'}} >
                    <h4>Seperti apa contohnya?</h4>
                    <h2>Lihat Karya Kami</h2>
                    <Link to='/'>
                    <h3>    | Portfolio {'>'} </h3>
                    </Link>
                </Col>
            </Row>
        </Jumbotron>
    )
}
export default Portsmall;