(this.webpackJsonppaolosiat=this.webpackJsonppaolosiat||[]).push([[0],{124:function(e,t,n){e.exports=n(257)},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(26),o=n.n(r),c=n(115),l=n(8),s=n(9),u=n(11),p=n(10),m=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={aboutMeText:""},fetch(a.props.siteData.siteInformation.aboutMeTextFile).then((function(e){return e.text()})).then((function(e){a.setState({aboutMeText:e})})),a}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"about-me"},i.a.createElement("h1",{className:"unselectable"},this.props.siteData.siteStructure.aboutMeTitle),i.a.createElement("p",null,this.state.aboutMeText))}}]),n}(a.Component),g=n(45),d=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={status:""},a.submitForm=a.submitForm.bind(Object(g.a)(a)),a}return Object(s.a)(n,[{key:"submitForm",value:function(e){var t=this;e.preventDefault();var n=e.target,a=new FormData(n),i=new XMLHttpRequest;i.open(n.method,n.action),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?(n.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},i.send(a)}},{key:"render",value:function(){return i.a.createElement("div",{id:"contact"},i.a.createElement("div",{id:"contact-information"},i.a.createElement("h1",null,this.props.siteData.siteStructure.contactInformationTitle),i.a.createElement("p",null,i.a.createElement("strong",null,this.props.siteData.siteInformation.contactFullName),i.a.createElement("br",null),this.props.siteData.siteInformation.contactJobTitle,i.a.createElement("br",null),"Phone: ",i.a.createElement("span",{className:"dark"},this.props.siteData.siteInformation.contactPhone),i.a.createElement("br",null),"E-mail: ",i.a.createElement("span",{className:"dark"},this.props.siteData.siteInformation.contactEmail)),i.a.createElement("div",{id:"social-media-icons"},i.a.createElement("a",{href:this.props.siteData.siteInformation.socialInstagramLink,className:"fa-layers fa-2x",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-instagram"})),i.a.createElement("a",{href:this.props.siteData.siteInformation.socialYoutubeLink,className:"fa-layers fa-2x",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-youtube"})))),i.a.createElement("div",{id:"contact-form"},i.a.createElement("h1",{className:"unselectable"},this.props.siteData.siteStructure.contactFormTitle),i.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mdowbkwd",method:"POST"},i.a.createElement("label",null,i.a.createElement("p",{className:"unselectable"},"Name:",i.a.createElement("abbr",{title:"required",className:"red"},"* ")),i.a.createElement("input",{type:"text",id:"form-name",name:"form-name",tabIndex:1})),i.a.createElement("label",null,i.a.createElement("p",{className:"unselectable"},"E-mail:",i.a.createElement("abbr",{title:"required",className:"red"},"* ")),i.a.createElement("input",{type:"email",id:"form-email",name:"form-email",tabIndex:2})),i.a.createElement("label",null,i.a.createElement("p",{className:"unselectable"},"Message:",i.a.createElement("abbr",{title:"required",className:"red"},"* ")),i.a.createElement("textarea",{id:"form-message",name:"form-message",tabIndex:3})),"SUCCESS"===this.state.status?i.a.createElement("p",{className:"dark"},i.a.createElement("strong",null,"Thanks!")):i.a.createElement("input",{type:"submit",id:"form-submit",name:"form-submit",value:this.props.siteData.siteStructure.contactFormSubmitText,tabIndex:4}),"ERROR"===this.state.status&&i.a.createElement("p",{className:"red"},i.a.createElement("strong",null,"Ooops! There was an error.")))))}}]),n}(a.Component),f=function(e){var t=document.getElementById("content"),n=document.getElementById(e),a=n?n.getBoundingClientRect().top:0,i=document.getElementById("navigation-bar"),r=i?i.getBoundingClientRect().height:0;t&&document.body.scrollBy({left:0,top:Math.round(a-r),behavior:"smooth"})},v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"footer",className:"unselectable"},i.a.createElement("div",null,i.a.createElement("div",null,this.props.siteData.siteInformation.copyrightMessage),i.a.createElement("div",{id:"back-to-top",onClick:function(){return e=0,t=0,void(document.getElementById("content")&&document.body.scrollTo({left:e,top:t,behavior:"smooth"}));var e,t}},"\u25b2 ",this.props.siteData.siteStructure.backToTopText)))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"header"},i.a.createElement("div",{id:"header-name",className:"unselectable"},i.a.createElement("h1",null,this.props.siteData.siteInformation.headerName),i.a.createElement("h2",null,this.props.siteData.siteInformation.headerJobTitle)))}}]),n}(a.Component),h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),a=t.call(this,e),window.addEventListener("resize",a.onResize),a}return Object(s.a)(n,[{key:"onResize",value:function(){var e=document.getElementById("navigation-vertical");e&&document.body.getBoundingClientRect().width>=576&&(e.style.display="none")}},{key:"toggleVerticalNavigation",value:function(){var e=document.getElementById("navigation-vertical");e&&"flex"!==e.style.display?e.style.display="flex":e&&(e.style.display="none")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"navigation-bar",className:"unselectable"},i.a.createElement("div",{id:"navigation-toggle",onClick:function(){return e.toggleVerticalNavigation()}},"\u2261"),i.a.createElement("div",{id:"navigation-horizontal"},i.a.createElement("div",{onClick:function(){return f("about-me")}},this.props.siteData.siteStructure.navigationAboutMeTitle),i.a.createElement("div",{onClick:function(){return f("portfolio")}},this.props.siteData.siteStructure.navigationPortfolioTitle),i.a.createElement("div",{onClick:function(){return f("work-experience")}},this.props.siteData.siteStructure.navigationWorkExperienceTitle),i.a.createElement("div",{onClick:function(){return f("contact")}},this.props.siteData.siteStructure.navigationContactTitle)),i.a.createElement("div",{id:"navigation-vertical",style:{display:"none"}},i.a.createElement("div",{onClick:function(){return f("about-me")}},this.props.siteData.siteStructure.navigationAboutMeTitle),i.a.createElement("div",{onClick:function(){return f("portfolio")}},this.props.siteData.siteStructure.navigationPortfolioTitle),i.a.createElement("div",{onClick:function(){return f("work-experience")}},this.props.siteData.siteStructure.navigationWorkExperienceTitle),i.a.createElement("div",{onClick:function(){return f("contact")}},this.props.siteData.siteStructure.navigationContactTitle)))}}]),n}(a.Component),E=n(47),j=n(261),y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"fullscreen-image",onClick:function(){e.props.parent.setState({currentFullscreenImage:""})},style:{display:""!==this.props.parent.state.currentFullscreenImage?"flex":"none"}},i.a.createElement("div",{id:"fullscreen-close"},"\xd7"),i.a.createElement(j.a,{src:this.props.parent.state.currentFullscreenImage,alt:"fullscreen portfolio image for: ".concat(this.props.parent.state.currentFullscreenImage),fluid:!0,draggable:!1}))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currentFullscreenImage:""},a}return Object(s.a)(n,[{key:"openFullscreenImage",value:function(e){this.setState({currentFullscreenImage:e})}},{key:"getImagesFromCategory",value:function(e){var t,n=this,a=[],r=[],o=Object(E.a)(this.props.siteData.portfolioCategories);try{var c=function(){var o=t.value;if(e===o.name){var c,l=Object(E.a)(o.images);try{var s=function(){var e=c.value,t="images/".concat(o.name,"/").concat(e);r.push(i.a.createElement(j.a,{key:t,src:t,alt:"portfolio image for: ".concat(t),className:"portfolio-image",fluid:!0,draggable:!1,onClick:function(){return n.openFullscreenImage(t)}}))};for(l.s();!(c=l.n()).done;)s()}catch(u){l.e(u)}finally{l.f()}a.push(i.a.createElement("div",{key:"selector",className:"portfolio-selector",onClick:function(){var e=document.getElementById("portfolio-content-".concat(o.name));o.visible&&e?e.style.display="none":e&&(e.style.display="flex"),o.visible=!o.visible,n.forceUpdate()}},i.a.createElement("h2",null,o.title),i.a.createElement("div",null,o.visible?"\u25b2":"\u25bc"))),a.push(i.a.createElement("div",{key:"images",id:"portfolio-content-".concat(o.name),className:"portfolio-content",style:{display:"none"}},r))}};for(o.s();!(t=o.n()).done;)c()}catch(l){o.e(l)}finally{o.f()}return a}},{key:"render",value:function(){var e,t=[],n=Object(E.a)(this.props.siteData.portfolioCategories);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.push(i.a.createElement("div",{key:a.name,id:"portfolio-".concat(a.name),className:"portfolio-container"},this.getImagesFromCategory(a.name)))}}catch(r){n.e(r)}finally{n.f()}return i.a.createElement("div",{id:"portfolio",className:"unselectable"},i.a.createElement("h1",{className:"unselectable"},this.props.siteData.siteStructure.portfolioTitle),t,i.a.createElement(y,{parent:this}))}}]),n}(a.Component),O=n(71),T=n.n(O),I=n(111),N=n(112),S=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={visible:!1,content:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){var e=Object(I.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/".concat(t.trim()));case 2:return n=e.sent,e.abrupt("return",n.text());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(this.props.siteData.siteInformation.workExperienceFile).then((function(t){e.setState({content:t})}))}},{key:"toggleWorkExperience",value:function(){var e=this;this.setState({visible:!this.state.visible},(function(){var t=document.getElementById("work-experience-content");t&&e.state.visible?t.style.display="block":t&&(t.style.display="none")}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"work-experience",className:this.state.visible?"work-experience-opened":""},i.a.createElement("div",{id:"work-experience-toggle",className:"unselectable",onClick:function(){return e.toggleWorkExperience()}},i.a.createElement("h1",{className:this.state.visible?"work-experience-opened-text":""},this.props.siteData.siteStructure.workExperienceTitle),i.a.createElement("div",{className:this.state.visible?"work-experience-opened-text":""},this.state.visible?"\u25b2":"\u25bc")),i.a.createElement("div",{id:"work-experience-content",style:{display:"none"}},i.a.createElement(N.a,null,this.state.content)))}}]),n}(a.Component),x=(n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),'\n{\n  "siteInformation":\n  {\n    "headerName": "PAOLO SIAT",\n    "headerBackground": "villain.png",\n    "headerBackgroundHovered": "villainx.png",\n    "headerJobTitle": "Graphic Designer",\n    "copyrightMessage": "\xa9 2020 Paolo Siat. All rights reserved",\n    "contactJobTitle": "Graphic Designer",\n    "contactFullName": "John Paolo Siat",\n    "contactPhone": "(+64)29 126 9475",\n    "contactEmail": "paolosiat@gmail.com",\n    "socialInstagramLink": "https://www.instagram.com/billygreatestwarriorever/",\n    "socialYoutubeLink": "https://www.youtube.com/channel/UCWuBcvSc01LjIofiTb97I2g",\n    "aboutMeTextFile": "aboutMe.txt",\n    "workExperienceFile": "work-experience.md"\n  },\n  "siteStructure":\n  {\n    "aboutMeTitle": "ABOUT ME",\n    "portfolioTitle": "PORTFOLIO",\n    "workExperienceTitle": "WORK EXPERIENCE",\n    "contactInformationTitle": "CONTACT INFORMATION",\n    "contactFormTitle": "SEND ME A MESSAGE!",\n    "navigationAboutMeTitle": "ABOUT ME",\n    "navigationPortfolioTitle": "PORTFOLIO",\n    "navigationWorkExperienceTitle": "WORK EXPERIENCE",\n    "navigationContactTitle": "CONTACT",\n    "backToTopText": "Back to Top",\n    "contactFormSubmitText": "Send"\n  },\n  "portfolioCategories": [\n    {\n      "name": "graphic-design",\n      "title": "GRAPHIC DESIGN",\n      "visible": false,\n      "images": [\n        "1.png",\n        "2.png",\n        "3.png",\n        "4.png",\n        "5.png",\n        "6.png",\n        "7.jpg",\n        "8.jpg",\n        "9.jpg",\n        "10.jpg",\n        "11.jpg",\n        "12.jpg",\n        "13.jpg",\n        "14.jpg",\n        "15.jpg",\n        "16.jpg",\n        "17.png",\n        "18.jpg",\n        "20.jpg",\n        "21.jpg",\n        "22.jpg",\n        "23.jpg",\n        "24.jpg",\n        "25.jpg",\n        "26.jpg",\n        "27.jpg",\n        "28.jpg",\n        "29.jpg",\n        "30.jpg",\n        "31.jpg",\n        "32.jpg",\n        "33.jpg",\n        "34.jpg",\n        "35.jpg",\n        "36.jpg",\n        "37.jpg",\n        "38.jpg",\n        "39.jpg",\n        "40.jpg",\n        "41.jpg",\n        "42.jpg",\n        "43.jpg",\n        "44.JPG",\n        "45.jpg",\n        "46.jpg",\n        "47.jpg",\n        "48.jpg",\n        "49.jpg",\n        "50.jpg",\n        "51.jpg",\n        "52.jpg",\n        "53.jpg"\n      ]\n    },\n    {\n      "name": "illustrations",\n      "title": "ILLUSTRATIONS",\n      "visible": false,\n      "images": [\n        "1.jpg",\n        "2.jpg",\n        "3.jpg",\n        "4.jpg",\n        "5.jpg",\n        "6.jpg",\n        "7.jpg",\n        "8.jpg",\n        "9.jpg",\n        "10.jpg",\n        "11.jpg",\n        "12.jpg",\n        "13.jpg",\n        "14.jpg",\n        "15.jpg",\n        "16.jpg",\n        "17.jpg",\n        "18.jpg",\n        "20.jpg",\n        "21.jpg"\n      ]\n    },\n    {\n      "name": "traditional",\n      "title": "TRADITIONAL",\n      "visible": false,\n      "images": [\n        "1.jpg",\n        "2.jpg",\n        "3.jpg",\n        "4.jpg",\n        "5.jpg",\n        "6.jpg"\n      ]\n    },\n    {\n      "name": "others",\n      "title": "OTHERS",\n      "visible": false,\n      "images": [\n        "1.jpg",\n        "2.jpg",\n        "3.jpg"\n      ]\n    }\n  ]\n}');fetch("site-data.json").then((function(e){return e.text()})).then((function(e){x=e,o.a.render(i.a.createElement(c.a,{basename:""},i.a.createElement(h,{siteData:JSON.parse(x)}),i.a.createElement("div",{id:"content"},i.a.createElement(b,{siteData:JSON.parse(x)}),i.a.createElement(m,{siteData:JSON.parse(x)}),i.a.createElement(k,{siteData:JSON.parse(x)}),i.a.createElement(S,{siteData:JSON.parse(x)}),i.a.createElement(d,{siteData:JSON.parse(x)}),i.a.createElement(v,{siteData:JSON.parse(x)}))),document.getElementById("root"))}))}},[[124,1,2]]]);
//# sourceMappingURL=main.963e262a.chunk.js.map