import { Link } from 'gatsby'
import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

function Sell () {
    return (
        <Jumbotron className='bgsatu' style={{paddingTop:'4rem', borderRadius:'0'}} >
            <h2>Konsultasi Dengan Pakar Pemasaran Digital Hari Ini</h2>
            <p>
            Temukan peluang yang terlewat di Bisnis Anda dengan 
            mendaftar di agen pemasaran digital kami. 
            Kami telah meningkatkan ROI situs web untuk ratusan bisnis. 
            Kini saatnya Anda menjadi kisah sukses berikutnya dengan menghubungi pakar pemasaran 
            online kami hari ini.
            </p>
            <Link to='/'>
                <Button variant='primary'>
                    Konsultasi
                </Button>
            </Link>
        </Jumbotron>
    )
}
export default Sell;