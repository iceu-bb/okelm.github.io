(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(t,e,a){"use strict";a.r(e);a(26);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(56),l=a(167),c=a(163),s=a(164),d=a(162),p=function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=document.querySelector("head"),e=document.createElement("script");e.setAttribute("src","https://assets.calendly.com/assets/external/widget.js"),t.appendChild(e)},a.render=function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"schedule_form"},i.a.createElement("div",{className:"calendly-inline-widget","data-url":"https://calendly.com/bartlomiejwidlarz",style:{minWidth:"320px",height:"580px"}})))},e}(i.a.Component);a.d(e,"pageQuery",function(){return u});var m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e="Hello!"===t.frontmatter.title,a=this.props.data.site.siteMetadata.title,n=this.props.pageContext,r=n.previous,A=n.next;return i.a.createElement(c.a,{location:this.props.location,title:a},i.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),i.a.createElement("h1",null,t.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},t.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),e&&i.a.createElement(p,null),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement(l.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(o.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,A&&i.a.createElement(o.Link,{to:A.fields.slug,rel:"next"},A.frontmatter.title," →"))))},e}(i.a.Component),u=(e.default=m,"3654438753")},162:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c});a(156);var n=a(171),r=a.n(n),A=a(172),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var l=o.rhythm,c=o.scale},163:function(t,e,a){"use strict";a(26);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(56),l=a(162),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,"Copyright © 2019 Bartłomiej Widlarz"))},e}(i.a.Component);e.a=c},164:function(t,e,a){"use strict";var n=a(165),r=a(0),A=a.n(r),i=a(1),o=a.n(i),l=a(173),c=a.n(l),s=a(56);function d(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,o=t.title;return A.a.createElement(s.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return A.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=d;var p="1025518380"},165:function(t){t.exports={data:{site:{siteMetadata:{title:"Bart Widlarz's Blog",description:"As a software developer, team leader and business owner I write about technology from various perspectives. I specialize in React and React Native applications.",author:"Bart Widlarz"}}}}},167:function(t,e,a){"use strict";var n=a(168),r=a(0),A=a.n(r),i=a(56),o=a(169),l=a.n(o),c=a(174),s=a(162);var d="4007731267";e.a=function(){return A.a.createElement(i.StaticQuery,{query:d,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},A.a.createElement("img",{src:l.a,alt:"Bart Widlarz",style:{marginRight:Object(s.a)(.5),width:Object(s.a)(2),height:Object(s.a)(2),borderRadius:"50%"}}),A.a.createElement("p",null,"Written by ",A.a.createElement("strong",null,a)," who works remotely in software development as a developer and leader."," ",A.a.createElement("b",null,A.a.createElement("a",{href:"https://bwidlarz.com/hello-world/#contact-me"},"CONTACT ME")),A.a.createElement("br",null),A.a.createElement("br",null),A.a.createElement(c.SocialIcon,{url:"https://linkedin.com/in/widlarz",style:{color:"#FFFFFF"}})," ",A.a.createElement(c.SocialIcon,{url:"https://twitter.com/"+n.twitter,style:{color:"#FFFFFF"}})," ",A.a.createElement(c.SocialIcon,{url:"https://github.com/Okelm",style:{color:"#FFFFFF"}})," "))},data:n})}},168:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAMEBQL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABsTZ6a0kBmhyUWgP/xAAbEAEBAAIDAQAAAAAAAAAAAAACAQMRABASE//aAAgBAQABBQKJY4Xk6evJMK9ck2QZ8Rdn/8QAFhEAAwAAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/AUI//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAQQDAQAAAAAAAAAAAAAAEQABAhAhQWES/9oACAEBAAY/Aizk4yhPJ21CSjztSltet1//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFhcf/aAAgBAQABPyFwrkV54w7QDThEuIfHZc3EI1ncb+QXoIjdHcfJmf/aAAwDAQACAAMAAAAQUDhC/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQEUH/2gAIAQMBAT8QUFt3Mf/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBFB/9oACAECAQE/EBRyYTtf/8QAHRABAQADAAIDAAAAAAAAAAAAAREAITFBYXGBof/aAAgBAQABPxAsVqd8o/uQehjlS7ygceNCw72d9Yzi5gQN3T7xVRfQuVjRQfHN5ERq1zfMBsoZXP/Z",width:50,height:50,src:"/static/b505cf9453dbf3920724f797ba1159d4/c15d6/profile-pic.jpg",srcSet:"/static/b505cf9453dbf3920724f797ba1159d4/c15d6/profile-pic.jpg 1x,\n/static/b505cf9453dbf3920724f797ba1159d4/43c20/profile-pic.jpg 1.5x,\n/static/b505cf9453dbf3920724f797ba1159d4/da97e/profile-pic.jpg 2x,\n/static/b505cf9453dbf3920724f797ba1159d4/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Bart Widlarz",social:{twitter:"BWidlarz"}}}}}},169:function(t,e,a){t.exports=a.p+"static/profile-pic-b505cf9453dbf3920724f797ba1159d4.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f42247c5010427a94934.js.map