import React from 'react'
import { Link, SiteData, withSiteData } from 'react-static'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import {Helmet} from "react-helmet";
import Navigation from '../Nav'


export default withSiteData(class SiteHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const siteTitle = this.props.title
        const siteRoot = this.props.siteRoot

        return (
            <header>
                <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                    {/* <meta name=“web_author” content=“author, expect3.com” /> */}
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="We provide all of your digital marketing needs such as websites, pay-per-click campaigns, and search engine management." />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
                    <title>Lawyer Marketing USA</title>
                    <link rel="canonical" href={siteRoot} />
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-oi8o31xSQq8S0RpBcb4FaLB8LJi9AT8oIdmS1QldR8Ui7KUQjNAnDlJjp55Ba8FG" crossorigin="anonymous" />
                    <script async src="https://www.google-analytics.com/analytics.js" />
                    <script async src="/assets/js/autotrack.custom.js" />
                </Helmet>
                <Navigation />
            </header>
        )

    }
})