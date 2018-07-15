import React from 'react'
import { Link, withRouteData } from 'react-static'
import { Helmet } from "react-helmet";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)

//
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';



export default withRouteData(({ pages }) => (
  <article id="home">
    <Helmet>
      <body className="home" />
    </Helmet>
    <section id="header">
      <Container>
        <div className="col-lg-6">
          <h1>The <strong>fastest</strong> and <strong>easiest</strong><br />to use legal websites.</h1>
          <p>Not only beautifully designed, but proven to generate leads.</p>
          <Link to="/contact"><Button id="getYours"><i class="fas fa-shield-check"></i>GET YOUR'S NOW</Button></Link>
          <Link to="/about"><Button id="howIt"><i class="fas fa-question-circle"></i>HOW IT WORKS</Button></Link>
        </div>
      </Container>
    </section>
    <section id="foundation">
      <Container>
        <Row>
          <Col lg={4}>
            <div class="foundationDiv">
            <i class="fal fa-code"></i>
              <h2>static files</h2>
              <p>Our websites offer the absolute best load times, meaning your leads won't time out &amp; turn to a competitor.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div class="foundationDiv">
            <i class="fal fa-desktop-alt"></i>
              <h2>easy edits</h2>
              <p>Utilizing the industry leader in content management, WordPress - our websites are simple to edit.</p>
            </div>
          </Col>
          <Col lg={4}>
            <div class="foundationDiv">
            <i class="fal fa-lock-alt"></i>
              <h2>security</h2>
              <p>With our code being proprietary and served securly through our delivery networks, your site is always safe</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="results">
      <Container>
        <h1>Great <strong>projects,</strong> but even greater <strong>results.</strong></h1>
        <Row>
          <Col md={6}>
            <Link to="/pheonix-law"><img src="/images/pheonixFinal.png" /></Link>
          </Col>
          <Col md={6}>
            <Link to="/expect3"><img src="/images/ex3Final.png" /></Link>
          </Col>
        </Row>
        <Row id="margTop">
          <Col md={6}>
            <Link to="/love-blomquist"><img src="/images/lnbFinal.png" /></Link>
          </Col>
          <Col md={6}>
            <Link to="/attorney-template"><img src="/images/attFinal.png" /></Link>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="notice">
      <Container>
        <h1 class="text-center">The world is <strong>taking notice</strong> of our work.</h1>
        <div id="contain">
          <div class="col22">
            <img src="/images/awwwards.png" />
          </div>
          <div class="col22">
            <img src="/images/Mashable.png" />
          </div>
          <div class="col22">
            <img src="/images/CNN.png" />
          </div>
          <div class="col22">
            <img src="/images/Buzzfeed.png" />
          </div>
          <div class="col22">
            <img src="/images/webby.png" />
          </div>
        </div>
      </Container>
    </section>
    <section id="contact">
      <Container>
        <h1 class="text-center">Is it time to see <strong>how high</strong> your website <strong>can fly?</strong></h1>
        <Row>
          <Col md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.998144271688!2d-95.8013530843563!3d36.020338718905926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68d420d455c81%3A0x5b8aa7b6e4152e22!2sLawyer+Marketing+Services%2C+Inc.!5e0!3m2!1sen!2sus!4v1530649526130" width="100%" height="405" frameborder="0" allowfullscreen></iframe>
          </Col>
          <Col md={6}>
            <form action="https://formspree.io/sales@lawyermarketingusa.com"
              method="POST">
              <input type="text" name="name" placeholder="FULL NAME" />
              <input type="email" name="email" placeholder="EMAIL ADDRESS" />
              <input type="text" name="message" placeholder="MESSAGE" />
              <input id="send" type="submit" value="Send" />
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  </article>
))
