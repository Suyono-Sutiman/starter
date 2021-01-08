import React from "react"
import {Container} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {MdDevices} from 'react-icons/md'
import {IoMdBulb, IoIosSpeedometer, IoIosRocket} from 'react-icons/io'

const SecondPage = () => (
  <Layout>
    <SEO title="Design" description='responsif, cepat, dinamis, intuitif'/>
    <Container fluid className='coo des'>
      <div className='about-d'>
          <div className='about-in'>
              <MdDevices className='ic1 scale-in-hor-left'/>
              <h4>Responsif</h4>
              <p className='text-focus-in'>
              Tata letak saya akan berfungsi di perangkat apa pun, besar atau kecil.
              </p>
          </div>
          <div className='about-in'>
              <IoIosSpeedometer className='ic1 scale-in-hor-left' />
              <h4>Cepat</h4>
              <p className='text-focus-in'>
              Waktu muat cepat dan interaksi bebas lag, prioritas tertinggi saya.
              </p>
          </div>
      </div>
      <div className='about-d'>
          <div className='about-in'>
              <IoIosRocket className='ic1 scale-in-hor-left' />
              <h4>Dinamis</h4>
              <p className='text-focus-in'>
              Situs web tidak harus statis, saya membuat halaman menjadi hidup.
              </p>
          </div>
          <div className='about-in'>
              <IoMdBulb className='ic1 scale-in-hor-left' />
              <h4>Intuitif</h4>
              <p className='text-focus-in'>
              Preferensi yang kuat untuk UX / UI yang mudah digunakan dan intuitif.
              </p>
          </div>
      </div>
    </Container>
  </Layout>
)

export default SecondPage
