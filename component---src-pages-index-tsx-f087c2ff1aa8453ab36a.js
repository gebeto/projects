(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{4123:function(e,t,a){"use strict";a.d(t,{w:function(){return y}});var l=a(7294),r=a(1597),n=a(9925),i=n.default.div.withConfig({displayName:"BioWrapper",componentId:"sc-li477e-0"})(["height:calc(100vh - 36px);display:flex;align-items:center;justify-content:center;flex-direction:column;::selection{color:#fff;background:#000;}.bio{display:flex;}@keyframes appear1{from{opacity:1;transform:translateY(0px);}90%{opacity:0;transform:translateY(-6px);}to{opacity:0;transform:translateY(-6px);}}@keyframes appear2{from{opacity:1;}85%{opacity:0;}to{opacity:0;}}@keyframes appear3{from{opacity:1;transform:translateY(0px);}90%{opacity:0;transform:translateY(6px);}to{opacity:0;transform:translateY(6px);}}.bio h1{font-size:20px;font-weight:400;line-height:24px;margin:0;animation:appear1 4s cubic-bezier(0.36,0,0.66,-0.56) reverse;}.bio .separator{padding:0 16px;user-select:none;animation:appear2 7s cubic-bezier(0.36,0,0.66,-0.56) reverse;}.bio h2{font-size:20px;font-weight:400;line-height:24px;color:#b0b0b0;animation:appear3 4.1s cubic-bezier(0.36,0,0.66,-0.56) reverse;}@media screen and (max-width:400px){.bio{flex-direction:column;text-align:center;}.bio h1{margin-bottom:4px;}.bio h2{font-size:14px;}.bio .separator{display:none;}}@media (prefers-color-scheme:dark){::selection{color:#000;background:#fff;}.bio h1{color:#fff;}.bio h2{color:#8a8a8a;}}"]),o=a(5311),c=a.n(o),s=a(9638),m=a.n(s),p=a(9575),d=a.n(p),f=a(3438),u=a.n(f),h=a(8972),g=a.n(h),x=n.default.div.withConfig({displayName:"Social__SocialWrapper",componentId:"sc-1id93ut-0"})(["@keyframes social{from{opacity:1;transform:scale(1) translateY(0px);}80%{opacity:0;transform:scale(0.96) translateY(10px);}to{opacity:0;transform:scale(0.96) translateY(10px);}}display:flex;gap:12px;margin-top:20px;opacity:1;transform:scale(1) translateY(0px);animation:social 3s reverse cubic-bezier(0.36,0,0.66,-0.56);svg{color:white;opacity:0.7;transition-duration:200ms;cursor:pointer;}& svg:hover{opacity:1;}"]),v=n.default.a.withConfig({displayName:"Social__SocialLink",componentId:"sc-1id93ut-1"})(["font-size:0;"]),b=function(e){var t=e.social;return l.createElement(x,null,(null==t?void 0:t.github)&&l.createElement(v,{href:"https://github.com/"+(null==t?void 0:t.github),target:"_blank"},l.createElement(c(),null)),(null==t?void 0:t.codepen)&&l.createElement(v,{href:"https://codepen.io/"+(null==t?void 0:t.codepen),target:"_blank"},l.createElement(g(),null)),(null==t?void 0:t.twitter)&&l.createElement(v,{href:"https://twitter.com/"+(null==t?void 0:t.twitter),target:"_blank"},l.createElement(d(),null)),(null==t?void 0:t.linkedin)&&l.createElement(v,{href:"https://www.linkedin.com/in/"+(null==t?void 0:t.linkedin),target:"_blank"},l.createElement(m(),null)),(null==t?void 0:t.telegram)&&l.createElement(v,{href:"https://t.me/"+(null==t?void 0:t.telegram),target:"_blank"},l.createElement(u(),null)))},y=function(){var e,t=(0,r.useStaticQuery)("841922572"),a=null===(e=t.site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement(i,null,l.createElement("div",{className:"bio"},l.createElement("h1",null,null==a?void 0:a.name),l.createElement("span",{className:"separator"},"·"),l.createElement("h2",null,null==a?void 0:a.title)),l.createElement(b,{social:t.site.siteMetadata.social}))}},4901:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),r=a(4123),n=a(243),i=a(9376),o=a(1597),c=a(9925),s=(0,c.css)(["border-radius:18px;overflow:hidden;transition-duration:300ms;.tile-image{display:flex;flex-direction:column;flex:1;img,picture{font-size:0;max-width:100%;max-height:100%;}}border:1px solid hsla(0,0%,0%,0.02);background-color:hsla(0,0%,100%,0.2);&:hover{border:1px solid hsla(0,0%,0%,0.03);background-color:hsla(0,0%,100%,0.3);}@media (prefers-color-scheme:dark){background-color:hsla(0,0%,100%,0.02);&:hover{background-color:hsla(0,100%,100%,0.03);}}@media screen and (max-width:720px){grid-column:span 12;}"]),m={full:c.default.li.withConfig({displayName:"TileFull__TileFullWrapper",componentId:"sc-6kx358-0"})([""," display:flex;flex-direction:row;grid-column:span 8;@media screen and (max-width:400px){flex-direction:column;}.tile-details{flex:1;display:flex;flex-direction:column;justify-content:center;padding:30px 30px 30px 0px;}@media screen and (max-width:720px){flex-direction:column;.tile-details{padding:30px;}}"],s),half:c.default.li.withConfig({displayName:"TileHalf__TileHalfWrapper",componentId:"sc-16gub0z-0"})([""," display:flex;flex-direction:column;grid-column:span 4;.tile-details{display:flex;flex-direction:column;flex:1;justify-content:center;padding:24px 30px;}"],s)},p=c.default.h2.withConfig({displayName:"Tile__TileTitle",componentId:"sc-wysgfs-0"})(["margin-bottom:8px;font-size:20px;"]),d=c.default.p.withConfig({displayName:"Tile__TileDescription",componentId:"sc-wysgfs-1"})(["font-size:15px;"]),f=function(e){var t=e.project,a=t.frontmatter.title||t.fields.slug,r=t.frontmatter.size||"full",n=t.frontmatter.image,i=t.frontmatter.image_dark,c=m[r];l.useMemo((function(){var e=t.frontmatter.images||[t.frontmatter.image],a=Math.floor(Math.random()*e.length);return t.frontmatter.images?t.frontmatter.images[a]:t.frontmatter.image}),[t]);return l.createElement(c,{as:"a",target:"_blank",href:t.frontmatter.link},l.createElement("div",{className:"tile-image"},l.createElement("picture",null,l.createElement("source",{srcSet:null==i?void 0:i.publicURL,media:"(prefers-color-scheme: dark)"}),l.createElement("img",{src:n.publicURL,alt:"project"}))),l.createElement("article",{className:"tile-details",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement(p,null,t.frontmatter.link?l.createElement("span",{itemProp:"headline"},a):l.createElement(o.Link,{to:t.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},a)))),l.createElement("section",null,l.createElement(d,{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt},itemProp:"description"}))))},u=c.default.ol.withConfig({displayName:"TilesGrid",componentId:"sc-15zslck-0"})(["list-style:none;margin-left:auto;margin-right:auto;grid-column-gap:24px;grid-row-gap:24px;padding:0 24px;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));"]),h=function(e){var t=e.data,a=e.location,o=t.allMarkdownRemark.nodes;return l.createElement(n.X,{location:a},l.createElement(i.Z,{title:"gebeto | projects"}),l.createElement(r.w,null),l.createElement(u,null,o.map((function(e){return l.createElement(f,{key:e.fields.slug,project:e})}))))}},8972:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{fill:"#FFF",d:"M16.878.415a2.501 2.501 0 0 0-2.809.034L1.485 9.214a2.5 2.5 0 0 0-1.071 2.052v9.444c0 .84.421 1.623 1.122 2.086l12.79 8.455a2.5 2.5 0 0 0 2.758 0l13.044-8.618a2.501 2.501 0 0 0 1.122-2.086v-9.279a2.5 2.5 0 0 0-1.121-2.085L16.878.415zm9.743 10.23L21.8 13.882l-4.521-3.288-.029-6.467 9.371 6.518zM13.979 4.133v6.329l-4.633 3.24-4.621-3.099 9.254-6.47zM3.458 13.722l2.991 2.004-2.991 2.093v-4.097zm10.6 13.493l-9.331-6.258 4.661-3.258 4.67 3.133v6.383zm-1.772-11.541l3.021-2.113 3.519 2.313-3.119 2.095-3.421-2.295zm5.068 11.541V20.83l4.463-2.991 4.805 3.159-9.268 6.217zm10.6-9.288l-3.168-2.082 3.168-2.125v4.207z"}))}r.defaultProps={width:"20",height:"20",viewBox:"0 0 31.665 31.665"},e.exports=r,r.default=r},5311:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"}))}r.defaultProps={width:"20",height:"20",viewBox:"0 0 438.549 438.549",fill:"currentColor"},e.exports=r,r.default=r},9638:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M77.613-.668C30.683-.668 0 30.148 0 70.652c0 39.61 29.77 71.305 75.813 71.305h.89c47.848 0 77.625-31.695 77.625-71.305-.894-40.504-29.777-71.32-76.715-71.32zm0 0M8.11 198.313h137.195V611.07H8.109zm0 0M482.055 188.625c-74.012 0-123.64 69.547-123.64 69.547v-59.86h-137.2V611.07h137.191v-230.5c0-12.34.895-24.66 4.52-33.484 9.918-24.64 32.488-50.168 70.39-50.168 49.645 0 69.5 37.852 69.5 93.34V611.07H640V374.402c0-126.78-67.688-185.777-157.945-185.777zm0 0"}))}r.defaultProps={width:"20",height:"20",viewBox:"-21 -35 682.667 682",fill:"currentColor"},e.exports=r,r.default=r},3438:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{id:"svg_1",d:"m21.70927,169.11823l182.34292,-75.12841c17.99952,-7.82588 79.04135,-32.86868 79.04135,-32.86868s28.17316,-10.95623 25.82539,15.65175c-0.78259,10.95623 -7.04329,49.30302 -13.30399,90.78017l-19.56469,122.86626s-1.56518,17.99952 -14.86917,21.12987c-13.30399,3.13035 -35.21644,-10.95623 -39.12938,-14.08658c-3.13035,-2.34776 -58.69407,-37.56421 -79.04135,-54.78113c-5.47811,-4.69553 -11.73881,-14.08658 0.78259,-25.0428c28.17316,-25.82539 61.82442,-57.91149 82.1717,-78.25876c9.39105,-9.39105 18.7821,-31.30351 -20.34728,-4.69553l-110.34486,74.34583s-12.5214,7.82588 -35.99903,0.78259c-23.47763,-7.04329 -50.8682,-16.43434 -50.8682,-16.43434s-18.7821,-11.73881 13.30399,-24.26022l0.00001,-0.00002z"}))}r.defaultProps={width:"20",height:"20",viewBox:"0 0 312 312",fill:"currentColor"},e.exports=r,r.default=r},9575:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M512.002 97.211c-18.84 8.354-39.082 14.001-60.33 16.54 21.686-13 38.342-33.585 46.186-58.115a210.29 210.29 0 0 1-66.705 25.49c-19.16-20.415-46.461-33.17-76.674-33.17-58.011 0-105.042 47.029-105.042 105.039 0 8.233.929 16.25 2.72 23.939-87.3-4.382-164.701-46.2-216.509-109.753-9.042 15.514-14.223 33.558-14.223 52.809 0 36.444 18.544 68.596 46.73 87.433a104.614 104.614 0 0 1-47.577-13.139c-.01.438-.01.878-.01 1.321 0 50.894 36.209 93.348 84.261 103a105.245 105.245 0 0 1-27.674 3.687c-6.769 0-13.349-.66-19.764-1.888 13.368 41.73 52.16 72.104 98.126 72.949-35.95 28.176-81.243 44.967-130.458 44.967-8.479 0-16.84-.496-25.058-1.471 46.486 29.807 101.701 47.197 161.021 47.197 193.211 0 298.868-160.062 298.868-298.872 0-4.554-.104-9.084-.305-13.59 20.526-14.809 38.335-33.309 52.417-54.373z"}))}r.defaultProps={width:"20",height:"20",viewBox:"0 0 512.002 512.002",fill:"currentColor"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f087c2ff1aa8453ab36a.js.map