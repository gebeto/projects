"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{9420:function(e,t,a){a.d(t,{w:function(){return l}});var r=a(7294),i=a(1597),n=a(9).default.div.withConfig({displayName:"BioWrapper",componentId:"sc-li477e-0"})(["height:calc(100vh - 36px);display:flex;align-items:center;justify-content:center;::selection{color:#fff;background:#000;}.bio{display:flex;}@keyframes appear1{from{opacity:1;transform:translateY(0px);}90%{opacity:0;transform:translateY(-10px);}to{opacity:0;transform:translateY(-10px);}}@keyframes appear2{from{opacity:1;}90%{opacity:0;}to{opacity:0;}}@keyframes appear3{from{opacity:1;transform:translateY(0px);}90%{opacity:0;transform:translateY(10px);}to{opacity:0;transform:translateY(10px);}}.bio h1{font-size:24px;margin:0;line-height:1;animation:appear1 4s cubic-bezier(0.36,0,0.66,-0.56) reverse;}.bio .separator{padding:0 16px;user-select:none;animation:appear2 4.2s cubic-bezier(0.36,0,0.66,-0.56) reverse;}.bio h2{font-size:24px;color:#b0b0b0;animation:appear3 4.1s cubic-bezier(0.36,0,0.66,-0.56) reverse;}@media screen and (max-width:400px){.bio{flex-direction:column;text-align:center;}.bio h1{margin-bottom:16px;}.bio h2{font-size:14px;}.bio .separator{display:none;}}@media (prefers-color-scheme:dark){::selection{color:#000;background:#fff;}.bio h1{color:#fff;}.bio h2{color:#8a8a8a;}}"]),l=function(){var e,t=null===(e=(0,i.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement(n,null,r.createElement("div",{className:"bio"},r.createElement("h1",null,"web engineer"),r.createElement("span",{className:"separator"},"·"),r.createElement("h2",null,null==t?void 0:t.name)))}},2108:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),i=a(9420),n=a(2594),l=a(262),o=a(1597),c=a(9),s={full:c.default.li.withConfig({displayName:"TileFull__TileFullWrapper",componentId:"sc-6kx358-0"})(["background-color:#fff;grid-column:span 12;border-radius:18px;overflow:hidden;transition-duration:400ms;@media (prefers-color-scheme:dark){background-color:hsla(0,0%,100%,0.02);&:hover{background-color:hsla(0,0%,100%,0.03);}}grid-column:span 8;display:flex;@media screen and (max-width:400px){flex-direction:column;}@media screen and (max-width:720px){grid-column:span 12;}.tile-image{display:flex;flex-direction:column;flex:1;img,picture{font-size:0;max-width:100%;max-height:100%;}}.tile-details{display:flex;flex-direction:column;flex:1;justify-content:center;padding:30px 30px 30px 0px;}@media screen and (max-width:720px){flex-direction:column;.tile-image{padding-bottom:40px;}.tile-details{padding:0px 30px 30px 30px;}}"]),half:c.default.li.withConfig({displayName:"TileHalf__TileHalfWrapper",componentId:"sc-16gub0z-0"})(["background-color:#fff;grid-column:span 12;border-radius:18px;overflow:hidden;transition-duration:400ms;@media (prefers-color-scheme:dark){background-color:hsla(0,0%,100%,0.02);&:hover{background-color:hsla(0,0%,100%,0.03);}}grid-column:span 4;display:flex;flex-direction:column;@media screen and (max-width:720px){grid-column:span 12;}.tile-image{display:flex;flex-direction:column;flex:1;img,picture{font-size:0;width:auto;max-width:100%;height:auto;}}.tile-details{display:flex;flex-direction:column;flex:1;justify-content:center;padding:24px 30px;}"])},m=c.default.h2.withConfig({displayName:"Tile__TileTitle",componentId:"sc-wysgfs-0"})(["margin-bottom:8px;font-size:20px;"]),p=c.default.p.withConfig({displayName:"Tile__TileDescription",componentId:"sc-wysgfs-1"})(["font-size:15px;"]),d=function(e){var t=e.project,a=t.frontmatter.title||t.fields.slug,i=t.frontmatter.size||"full",n=t.frontmatter.image,l=t.frontmatter.image_dark,c=s[i];r.useMemo((function(){var e=t.frontmatter.images||[t.frontmatter.image],a=Math.floor(Math.random()*e.length);return t.frontmatter.images?t.frontmatter.images[a]:t.frontmatter.image}),[t]);return r.createElement(c,null,r.createElement("div",{className:"tile-image"},r.createElement("picture",null,r.createElement("source",{srcSet:null==l?void 0:l.publicURL,media:"(prefers-color-scheme: dark)"}),r.createElement("img",{src:n.publicURL,alt:"project"}))),r.createElement("article",{className:"tile-details",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement(m,null,t.frontmatter.link?r.createElement("a",{href:t.frontmatter.link,target:"_blank"},r.createElement("span",{itemProp:"headline"},a)):r.createElement(o.Link,{to:t.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},a)))),r.createElement("section",null,r.createElement(p,{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))},f=c.default.ol.withConfig({displayName:"TilesGrid",componentId:"sc-15zslck-0"})(["list-style:none;margin-left:auto;margin-right:auto;grid-column-gap:24px;grid-row-gap:24px;padding:0 24px;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));"]),u=function(e){var t=e.data,a=e.location,o=t.allMarkdownRemark.nodes;return r.createElement(n.X,{location:a},r.createElement(l.Z,{title:"gebeto | projects"}),r.createElement(i.w,null),r.createElement(f,null,o.map((function(e){return r.createElement(d,{key:e.fields.slug,project:e})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7b02c1e743b2a25b891e.js.map