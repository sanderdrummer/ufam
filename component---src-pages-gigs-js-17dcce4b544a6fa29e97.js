(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});a(49);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(145),u=a(162),s=a.n(u),l=a(151),d=a.n(l),m=a(150),p=a(146),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),a=s()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(m.a,{location:this.props.location},o.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),a.map(function(e){var t=e.node,a=s()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=f;var h="533462170"},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(144),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(155),r=a.n(n),i=a(156),o=a.n(i);delete o.a.googleFonts;var c=new r.a(o.a);var u=c.rhythm;c.scale},147:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=(a(148),function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"highlight"},"UFam"))});c.displayName="Header";var u=a(146),s={padding:"2rem",textAlign:"center"},l=function(){return o.a.createElement("footer",{className:"footer",style:s},o.a.createElement("a",{href:"https://www.facebook.com/U-Fam-166187194210155",rel:"noopener noreferrer",className:"highlight",target:"_blank"},"check our facebook page"))};l.displayName="Footer";var d=a(145),m=(a(149),function(){return o.a.createElement("nav",{className:"main-nav"},o.a.createElement(d.Link,{activeClassName:"active",to:"/"},"Band"),o.a.createElement(d.Link,{activeClassName:"active",to:"gigs"},"Gigs"),o.a.createElement(d.Link,{activeClassName:"active",to:"music"},"Music"))});m.displayName="NavBar";var p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement("div",{className:"layout"},o.a.createElement(c,null),o.a.createElement("section",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(32),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},this.props.children)),o.a.createElement(l,null))},t}(o.a.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-gigs-js-17dcce4b544a6fa29e97.js.map