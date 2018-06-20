import React, { Component } from 'react';
import './App.css';
import SaveTheDate from './savethedate/savethedate.js';
import Background from './background/background.js';
import TheBrideAndGroom from './thebrideandgroom/thebrideandgroom.js';
import Wedding from './wedding/wedding.js';
import Accomodations from './accomodations/accomodations.js'
import Registry from './registry/registry.js';
//import Navigation from './navigation/navigation.js';
//import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import Guestbook from './guestbook/guestbook.js';

class App extends Component {
  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

hello(){
  console.log("hello")
}

  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect fixedTop className="navbar sticky-top">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
              <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >The Bride &amp; Groom</Link>
              </NavItem>
              <NavItem>
              <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} >Wedding</Link>
              </NavItem>
              <NavItem eventKey={3} href="#">
              <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Accomodations</Link>
              </NavItem>
              <NavItem eventKey={4} href="#">
              <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} >Registry</Link>
              </NavItem>
              <NavItem eventKey={5} href="#">
              <Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} >Guest Book</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className="App main wrapper clearfix">
      <Background />
      <SaveTheDate />
      <Element name="test1" className="element">
      <TheBrideAndGroom/>
      </Element>
      <Element name="test2" className="element">
      <Wedding />
      </Element>
      <Element name="test3" className="element">
      <Accomodations />
      </Element>
      <Element name="test4" className="element">
      <Registry />
      </Element>
      <Guestbook />
      </div>
      </div>
    );
  }
}

export default App;
