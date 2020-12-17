import React from "react"
import { Link } from "gatsby"
import {Col, Image, Jumbotron, Row, Button} from 'react-bootstrap'
import SEO from "../components/seo"
import hero from '../images/startup.svg'
import Head2 from "../components/head2"
import 'bootstrap/dist/css/bootstrap.min.css';

const mgjb = {
  borderRadius:0,
  marginBottom:0,
}
const bthr = {
  alignSelf: 'center',
  width:'max-content'
}

const IndexPage = () => (
  <>
  <Head2/>
    <SEO title="Home" />
    <Jumbotron className='bgsatu' style={mgjb}>
      <Row>
        <Col className='htext' xs={12} md={6} >
        <h3>Realine</h3>
        <h1>Realisasi Mimpi Bisnis Online</h1>
        <p>Membantu anda sukses di dunia bisnis online</p>
        <Link to='/page-2' style={bthr} >
        <Button variant='primary' size='lg'>
          Pilih Paket
        </Button>
        </Link>
        </Col>
        <Col>
        <Image src={hero} fluid style={{maxWidth:'60%'}} />
        </Col>
      </Row>
    </Jumbotron>
    <Jumbotron className='bgsatu' style={mgjb}>
      <Row>
        <Col className='htext' xs={12} md={6} >
        <h3>Realine</h3>
        <h1>Realisasi Mimpi Bisnis Online</h1>
        <p>Membantu anda sukses di dunia bisnis online</p>
        <Link to='/page-2'>
        <Button variant='primary' size='lg' style={bthr}>Pilih Paket</Button>
        </Link>
        </Col>
        <Col>
        <Image src={hero} fluid style={{maxWidth:'60%'}} />
        </Col>
      </Row>
    </Jumbotron>
  </>
)

export default IndexPage
