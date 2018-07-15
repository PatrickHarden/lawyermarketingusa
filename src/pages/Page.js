
import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container, Row, Col } from 'reactstrap';
import {Helmet} from "react-helmet";
//

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default withRouteData(({ page }) => (
  <section>
    <Helmet>
      <body className={'single-page page-id-'+page.id + ' ' + page.slug} />
    </Helmet>
    {(page.slug == "about-us") ?
     <div id="aboutHeader">
     <Container>
       <Col xs="6">
      <h2 id="aboutH2">About us</h2>
      <p>We love our jobs. We have a lot of fun. We make stellar products.</p>
      <p id="pushTop">Our story at Lawyer Marketing began in 2009. We started our business helping lawyers because we saw a huge gap in effectively marketing for law firms. We noted that lawyers can’t be treated like other businesses and that their specific marketing needs can’t be reduced to just a simple marketing equation or a creative ad. We learned that marketing for lawyers must be done with extreme care and accuracy, personable relationships, and direct lines of communication.</p>
    </Col>
      </Container>
     </div> 
     : 
     <div></div>
    }
    <Container>
    {(page.slug == "expect3" || page.slug ==  "attorney-template" || page.slug ==  "kevinforoklahoma" || page.slug ==  "pheonix-law" || page.slug ==  "love-blomquist") ? <Link to="/#results" id="backBtn">&#8678; Back</Link> : <div></div> }
      <Row>
      {(page.slug == "about-us") ? 
        <Col xs="12">
        {ReactHtmlParser(page.content.rendered)}
        </Col>
        :
        <Col xs="12">
          {/* <h1>{page.title.rendered}</h1> */}
          {ReactHtmlParser(page.content.rendered)}
        </Col>
      }
      </Row>
    </Container>
  </section>
))
