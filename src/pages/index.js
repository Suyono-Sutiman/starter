import React from "react"
import { Link } from "gatsby"
import {Col, Image, Jumbotron, Row, Button} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import hero from '../images/startup.svg'
import SecondPage from "./page-2"

const mgjb = {
  borderRadius:0,
  marginBottom:0,
}
const bthr = {
  width: '50%',
  alignSelf: 'center',
  marginBottom: '2rem'
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
        <Link to='/'>
        <Button variant='primary' size='lg' style={bthr}>Pilih Paket</Button>
        </Link>
        </Col>
        <Col>
        <Image src={hero} fluid style={{maxWidth:'60%'}} />
        </Col>
      </Row>
    </Jumbotron>
    <SecondPage/>
  </Layout>
)

export default IndexPage
