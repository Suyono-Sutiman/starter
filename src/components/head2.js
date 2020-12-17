import { Link } from "gatsby"
import React from "react"
import {Navbar, Nav, Button} from 'react-bootstrap'
import realine from '../images/realine.svg'

class Head2 extends React.Component {
    state={className:''};
    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
              this.setState({ className: "biru" });   
            }
        }else{
            if(this.state.className){
              this.setState({ className: "" });
            }
        }}
        componentDidMount(){
            window.addEventListener("scroll", this.handleScroll);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg"
            fixed='top'
            className={this.state.className}>
            <Link to='/'>
            <Navbar.Brand>
                <img
                alt=""
                src={realine}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Realine
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mr-auto'>
                <Nav.Link>Development</Nav.Link>
                <Nav.Link>Marketing</Nav.Link>
                <Nav.Link >SEO</Nav.Link>
                <Nav.Link>Portfolio</Nav.Link>
                </Nav>
                <Link to='/page-2'>
                <Button variant='primary'>
                    Hubungi Kami
                </Button>
                </Link>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Head2;