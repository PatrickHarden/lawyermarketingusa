webpackJsonp([0],{89:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(0),r=a(u),n=l(18),d=l(43),f=l(83),c=a(f);t.default=(0,n.withRouteData)(function(e){var t=e.staff;return r.default.createElement("section",null,r.default.createElement(d.Container,null,r.default.createElement(d.Row,null,r.default.createElement(d.Col,{xs:"12"},r.default.createElement("h1",null,"Our Staff"))),r.default.createElement(d.Row,null,r.default.createElement("div",{className:"card-columns"},t.map(function(e){return r.default.createElement(d.Card,{key:e.id,className:"card-"+e.id},r.default.createElement(n.Link,{to:"/staff/"+e.slug+"/"},r.default.createElement(d.CardImg,{top:!0,width:"100%",src:e.better_featured_image?e.better_featured_image.media_details.sizes.medium.source_url:""})),r.default.createElement(d.CardBody,null,r.default.createElement(n.Link,{to:"/staff/"+e.slug+"/"},r.default.createElement(d.CardTitle,null,e.title.rendered)),r.default.createElement(d.CardText,null,(0,c.default)(e.excerpt.rendered)),r.default.createElement(d.CardText,null,r.default.createElement("small",null,e.date))))})))))})}});