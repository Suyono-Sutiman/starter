import React from "react"
import { Link } from "gatsby"
import {Col, Image, Jumbotron, Row, Button} from 'react-bootstrap'
import SEO from "../components/seo"
import hero from '../images/startup.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"

const mgjb = {
  borderRadius:0,
}
const bthr = {
  alignSelf: 'center',
  width:'max-content'
}

const IndexPage = () => (
  <Layout>
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
  </Layout>
)

export default IndexPage
