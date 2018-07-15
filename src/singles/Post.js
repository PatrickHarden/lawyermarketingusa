import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Container,
         Row,
         Col,} from 'reactstrap';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
//

export default withRouteData(({ post }) => (
  <section>
    <Helmet>
      <body className={'single-blog blog-id-'+post.id + ' ' + post.slug} />
    </Helmet>
    <Container>
      <Row>
        <Col sm="7">
          {ReactHtmlParser(post.content.rendered)}
        </Col>
        <Col sm="5">
        {post.better_featured_image ? <img src={post.better_featured_image.media_details.sizes.medium.source_url} /> : <img src="/images/blog.jpeg" />}
        </Col>
      </Row>
    </Container>
  </section>
))
