"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,a){var r=a(7294),l=a(1597);t.Z=function(){var e,t=null===(e=(0,l.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",{className:"bio-wrapper"},r.createElement("div",{className:"bio"},r.createElement("h1",null,"web engineer"),r.createElement("span",{className:"separator"},"·"),r.createElement("h2",null,null==t?void 0:t.name)))}},6558:function(e,t,a){a.r(t);var r=a(7294),l=a(1597),n=a(8771),i=a(8678),m=a(262),o=function(e){var t=e.post,a=t.frontmatter.title||t.fields.slug,n=t.frontmatter.size||"full",i=t.frontmatter.image;r.useMemo((function(){var e=t.frontmatter.images||[t.frontmatter.image],a=Math.floor(Math.random()*e.length);return t.frontmatter.images?t.frontmatter.images[a]:t.frontmatter.image}),[t]);return r.createElement("li",{className:"tile tile-"+n},r.createElement("div",{className:"tile-image"},r.createElement("img",{src:null==i?void 0:i.publicURL,alt:"project"})),r.createElement("article",{className:"tile-details",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,t.frontmatter.link?r.createElement("a",{href:t.frontmatter.link,target:"_blank"},r.createElement("span",{itemProp:"headline"},a)):r.createElement(l.Link,{to:t.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},a)))),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))};t.default=function(e){var t=e.data,a=e.location,l=t.allMarkdownRemark.nodes;return r.createElement(i.Z,{location:a},r.createElement(m.Z,{title:"gebeto | projects"}),r.createElement(n.Z,null),r.createElement("ol",{style:{listStyle:"none"},className:"tiles-grid"},l.map((function(e){return r.createElement(o,{key:e.fields.slug,post:e})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5058a38d8a2ab7171d3c.js.map