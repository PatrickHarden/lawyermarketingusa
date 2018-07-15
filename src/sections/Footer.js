import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";


export default withSiteData(class SiteFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteCreator = this.props.siteCreator
        const siteCreatorURL = this.props.siteCreatorURL

        return (
            <footer>
            <div class="container">
            <div class="row">
            <div class="col-sm-6">           
                &copy; 2018 Lawyer Marketing Services  |  <Link to="/terms">Terms &amp; Conditions</Link>
            </div>
            <div class="col-sm-6">
            <div class="sociallinks"><a href="https://www.facebook.com/LawyerMarketingServices" target="new"><i class="fab fa-facebook-square"></i></a><a href="https://twitter.com/LawyerMKTUSA" target="new"><i class="fab fa-twitter-square"></i></a><a href="https://plus.google.com/107866967922415635707" target="new"><i class="fab fa-google-plus-square"></i></a><a href="https://www.instagram.com/lawyer_marketing/" target="new"><i class="fab fa-instagram"></i></a><a href="https://www.linkedin.com/company/lawyer-marketing-services-inc-" target="new"><i class="fab fa-linkedin-square"></i></a><a href="https://www.pinterest.com/expect3media/" target="new"><i class="fab fa-pinterest-square"></i></a><a href="https://www.youtube.com/user/LawyerMarketingUS" target="new"><i class="fab fa-youtube-square"></i></a><a href="https://vimeo.com/user66201476" target="new"><i class="fab fa-vimeo-square"></i></a></div>
            </div>
            </div>
            </div>
            </footer>
        )

    }
})