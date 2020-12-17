import { Link } from "gatsby"
import React from "react"
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'

const garis = {
  borderBottom: '0.5px solid rgba(248, 249, 250, 0.5)',
}

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
            style={garis}
            className={this.state.className} >
            <Link to='/'>
            <Navbar.Brand>
                <h1>Realine</h1>
            </Navbar.Brand>
            </Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Head2;