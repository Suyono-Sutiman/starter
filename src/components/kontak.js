import React from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';

function Kontak () {
    return (
        <Container >
            <Row>
                <Col xs={12} md={6} style={{textAlign:'left'}} >
                    <h3>Alamat Kantor</h3>
                    <p>
                    Perumahan Mediterania Blok F3/24<br/>
                    Kelurahan Sukamulya<br/>
                    Kecamatan Cikupa<br/>
                    Kabupaten Tangerang, Banten
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <h3>Hubungi Kami</h3>
                    <Row>
                        <Col><Button
                        href='tel:081219013721'
                        variant="outline-dark">081219013721</Button></Col>
                        <Col><hr/></Col>
                    </Row>
                    <Row>
                        <Col><hr/></Col>
                        <Col><Button
                        href='mailto:yonoraphael@gmail.com'
                        variant="outline-primary">yonoraphael@gmail.com</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button
                        href='https://wa.me/6281219013721'
                        variant="outline-success">Whatsapp</Button></Col>
                        <Col><hr/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Kontak;