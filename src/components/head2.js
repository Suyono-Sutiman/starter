import { Link } from "gatsby"
import React from "react"
import {Navbar, Nav} from 'react-bootstrap'

class Head2 extends React.Component {
    state={className:'abu'};
    handleScroll=()=>{
        if (window.pageYOffset > 0) {
              this.setState({ className: "biru" });   
            }
        else{
              this.setState({ className: "abu" });
            }
        }
        componentDidMount(){
            window.addEventListener("scroll", this.handleScroll);
          }
          componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
          }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" fixed='top' className={this.state.className}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto'/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto mr-auto' >
                <Nav.Link>Development</Nav.Link>
                <Nav.Link>Marketing</Nav.Link>
                <Nav.Link >SEO</Nav.Link>
                <Nav.Link>Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Head2;