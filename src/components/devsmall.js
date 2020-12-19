import {Link} from 'gatsby'
import React from 'react'
import {Button, Col, Container, Image, Row} from 'react-bootstrap'
import dev from '../images/design.svg'
import mar from '../images/marketing.svg'
import seo from '../images/SEO.svg'

function Devsmall () {
    return (
        <Container>
            <h2>Kembangkan bisnis anda dengan:</h2>
            <Row>
                <Col xs={12} >
                    <Row style={{background:'#f8f9fa', margin:'2rem 0'}} >
                        <Col md={6} style={{textAlign:'left', alignSelf:'center', padding:'15px'}}>
                            <h3 style={{color:'#007bff'}} >Web Devlopment</h3>
                            <p>Wujudkan ide anda menjadi media usaha powerful dengan bantuan team web development kami.</p>
                            <p>Mulai dari Landing Page, Web Profil dan juga Web Produk, Realine menyediakan talenta yang anda butuhkan 
                                butuhkan.
                            </p>
                            <Link to='/'>
                                <Button variant='primary' size='lg' >Selengkapnya</Button>
                            </Link>
                        </Col>
                        <Col md={6} style={{alignSelf:'center', padding:'15px'}}>
                            <Image src={dev} fluid style={{maxWidth:'60%'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Row style={{background:'#f8f9fa', margin:'2rem 0'}} >
                        <Col md={6} style={{textAlign:'left', alignSelf:'center', padding:'15px'}}>
                            <h3 style={{color:'#007bff'}} >Marketing</h3>
                            <p>Kami bantu kembangkan bisnis anda di dunia Online</p>
                            <p>Tingkatkan bisnis anda bersama kami, team kami akan membantu 
                                menaikan brand anda ke level selanjutnya.
                            </p>
                            <Link to='/'>
                                <Button variant='primary' size='lg' >Selengkapnya</Button>
                            </Link>
                        </Col>
                        <Col md={6} style={{alignSelf:'center', padding:'15px'}}>
                            <Image src={mar} fluid style={{maxWidth:'60%'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Row style={{background:'#f8f9fa', margin:'2rem 0'}} >
                        <Col md={6} style={{textAlign:'left', alignSelf:'center', padding:'15px'}}>
                            <h3 style={{color:'#007bff'}} >SEO</h3>
                            <p>Wujudkan ide anda menjadi media usaha powerful dengan bantuan team web development kami.</p>
                            <p>Mulai dari design sampai siap Go-Online, Realine menyediakan talenta yang anda butuhkan 
                                untuk kebutuhan anda.
                            </p>
                            <Link to='/'>
                                <Button variant='primary' size='lg' >Selengkapnya</Button>
                            </Link>
                        </Col>
                        <Col md={6} style={{alignSelf:'center', padding:'15px'}}>
                            <Image src={seo} fluid style={{maxWidth:'60%'}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
    
}

export default Devsmall;