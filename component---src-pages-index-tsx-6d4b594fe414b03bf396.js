"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{8054:function(e,t,l){l.d(t,{w:function(){return r}});var i=l(7294),a=l(1597),n=l(9).default.div.withConfig({displayName:"BioWrapper",componentId:"sc-li477e-0"})(["height:calc(100vh - 36px);display:flex;align-items:center;justify-content:center;::selection{color:#fff;background:#000;}.bio{display:flex;}.bio h1{font-size:24px;margin:0;line-height:1;}.bio .separator{padding:0 16px;user-select:none;}.bio h2{font-size:24px;color:#b0b0b0;}@media screen and (max-width:400px){.bio{flex-direction:column;text-align:center;}.bio h1{margin-bottom:16px;}.bio h2{font-size:14px;}.bio .separator{display:none;}}@media (prefers-color-scheme:dark){::selection{color:#000;background:#fff;}.bio h1{color:#fff;}.bio h2{color:#8a8a8a;}}"]),r=function(){var e,t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return i.createElement(n,null,i.createElement("div",{className:"bio"},i.createElement("h1",null,"web engineer"),i.createElement("span",{className:"separator"},"·"),i.createElement("h2",null,null==t?void 0:t.name)))}},9699:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var i=l(7294),a=l(8054),n=l(7880),r=l(262),o=l(1597),c=l(9),d={full:c.default.li.withConfig({displayName:"TileFull__TileFullWrapper",componentId:"sc-6kx358-0"})(["background-color:#fff;grid-column:span 12;border-radius:18px;overflow:hidden;@media (prefers-color-scheme:dark){background-color:#1d1e20;}grid-column:span 12;display:flex;@media screen and (max-width:400px){flex-direction:column;}.tile-image{display:flex;flex-direction:column;flex:1;img,picture{width:100%;}}.tile-details{display:flex;flex-direction:column;flex:1;justify-content:center;padding:40px 46px 40px 0px;}@media screen and (max-width:720px){flex-direction:column;.tile-image{padding-bottom:40px;}.tile-details{padding:0px 46px 40px 46px;}}"]),half:c.default.li.withConfig({displayName:"TileHalf__TileHalfWrapper",componentId:"sc-16gub0z-0"})(["background-color:#fff;grid-column:span 12;border-radius:18px;overflow:hidden;@media (prefers-color-scheme:dark){background-color:#1d1e20;}grid-column:span 6;display:flex;flex-direction:column;@media screen and (max-width:720px){grid-column:span 12;}.tile-image{display:flex;flex-direction:column;flex:1;padding-bottom:40px;img,picture{width:100%;}}.tile-details{display:flex;flex-direction:column;flex:1;justify-content:center;padding:0px 46px 40px 46px;}"])},m=c.default.h2.withConfig({displayName:"Tile__TileTitle",componentId:"sc-wysgfs-0"})(["margin-bottom:8px;"]),s=function(e){var t=e.project,l=t.frontmatter.title||t.fields.slug,a=t.frontmatter.size||"full",n=t.frontmatter.image,r=t.frontmatter.image_dark,c=d[a];i.useMemo((function(){var e=t.frontmatter.images||[t.frontmatter.image],l=Math.floor(Math.random()*e.length);return t.frontmatter.images?t.frontmatter.images[l]:t.frontmatter.image}),[t]);return i.createElement(c,null,i.createElement("div",{className:"tile-image"},i.createElement("picture",null,i.createElement("source",{srcSet:null==r?void 0:r.publicURL,media:"(prefers-color-scheme: dark)"}),i.createElement("img",{src:n.publicURL,alt:"project"}))),i.createElement("article",{className:"tile-details",itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("header",null,i.createElement(m,null,t.frontmatter.link?i.createElement("a",{href:t.frontmatter.link,target:"_blank"},i.createElement("span",{itemProp:"headline"},l)):i.createElement(o.Link,{to:t.fields.slug,itemProp:"url"},i.createElement("span",{itemProp:"headline"},l)))),i.createElement("section",null,i.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))},p=c.default.ol.withConfig({displayName:"TilesGrid",componentId:"sc-15zslck-0"})(["list-style:none;margin-left:auto;margin-right:auto;grid-column-gap:24px;grid-row-gap:24px;padding:0 24px;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));"]),f=function(e){var t=e.data,l=e.location,o=t.allMarkdownRemark.nodes;return i.createElement(n.X,{location:l},i.createElement(r.Z,{title:"gebeto | projects"}),i.createElement(a.w,null),i.createElement(p,null,o.map((function(e){return i.createElement(s,{key:e.fields.slug,project:e})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6d4b594fe414b03bf396.js.map