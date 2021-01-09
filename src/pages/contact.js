import React from 'react'
import {Container} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {ImWhatsapp,ImPhone,ImEnvelop,ImFacebook,ImTwitter,ImInstagram,ImLinkedin,ImHome} from 'react-icons/im'
import { Link } from 'gatsby'

function Kontak(){
    return(
        <Layout>
            <SEO title='Contact'/>
        <Container fluid className='coo kon'>
            <Link to='/'>
            <ImHome className='ic1 scale-in-hor-left'/>
            </Link>
            <h4 className='text-focus-in'>
            Punya pertanyaan atau ingin bekerja sama?
            </h4>
            <div className='ite'>
            <a href='https://wa.me/6281219013721'>
                <ImEnvelop className='ic1 scale-in-hor-left'/>
            </a>
            <a href='https://wa.me/6281219013721'>
                <ImPhone className='ic1 scale-in-hor-left'/>
            </a>
            <a href='https://wa.me/6281219013721'>
                <ImWhatsapp className='ic1 scale-in-hor-left'/>
            </a>
            <a href='https://wa.me/6281219013721'>
                <ImFacebook className='ic1 scale-in-hor-left'/>
            </a>
            <a href='https://wa.me/6281219013721'>
                <ImTwitter className='ic1 scale-in-hor-left'/>
            </a>
            <a href='https://wa.me/6281219013721'>
                <ImInstagram className='ic1 scale-in-hor-left'/>
            </a>
            <a href='https://wa.me/6281219013721'>
                <ImLinkedin className='ic1 scale-in-hor-left'/>
            </a>
            </div>
        </Container>
        </Layout>
    )
}
export default Kontak;