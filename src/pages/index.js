import React from "react"
import {Col, Image, Row, Container} from 'react-bootstrap'
import SEO from "../components/seo"
import hero from '../images/yono.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid className='coo'>
      <Row>
        <Col xs={12} lg={{span:6, offset:3}}>
          <Image src={hero} roundedCircle className='scale-in-hor-left hero'/>
        </Col>
        <Col xs={12}  className='text-focus-in'>
          <h1>Hallo, saya <span style={{color:'#007bff'}}>Suyono</span></h1>
          <p>Seorang Front-End Developer<br/>
          yang sangat bersemangat menciptakan User Interface, Animasi, dan 
          User Experience yang dinamis serta intuitif.
          </p>
          <h6 style={{color:'#007bff', textTransform:'uppercase'}}>Ayo buat sesuatu yang istimewa.</h6>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
