(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[6070],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7723:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294);function o(e){var t="https://docs.google.com/forms/d/e/1FAIpQLScq8Zgr0pz7aMDj0D768eCpW798XgtDsKfpA6BquqK5Hdtj4A/viewform?embedded=true&entry.1672476057="+e.module.replace(" ","+")+"&entry.74981796="+e.week.replace(" ","+");return n.createElement("div",{className:"feedback"},n.createElement("div",{className:"feedback__wrapper"},n.createElement("iframe",{src:t,width:"640",height:"640",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"),n.createElement("center",null,n.createElement("p",null,"Not loading? Form can be found"," ",n.createElement("a",{target:"_blank",href:t},"here"),". Click"," ",n.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/1F2mB10japkHAPb3H-9Q4YrYH0i61GoMG1tk-P4ZT808/edit"},"here")," ","to get edit access."))))}},7938:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=a(4034),o=a(9973),r=(a(7294),a(3905)),i=a(7723),s={id:"lesson",title:"Node - 3",sidebar_label:"Lesson"},l={unversionedId:"node/week-3/lesson",id:"node/week-3/lesson",isDocsHomePage:!1,title:"Node - 3",description:"Learning Objectives",source:"@site/docs/node/week-3/lesson.md",sourceDirName:"node/week-3",slug:"/node/week-3/lesson",permalink:"/node/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/node/week-3/lesson.md",version:"current",sidebar_label:"Lesson",frontMatter:{id:"lesson",title:"Node - 3",sidebar_label:"Lesson"},sidebar:"Node",previous:{title:"Instructor Notes",permalink:"/node/week-2/instructors"},next:{title:"Coursework",permalink:"/node/week-3/homework"}},d=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"1) Presentations",id:"1-presentations",children:[]},{value:"2) CRUD Review",id:"2-crud-review",children:[{value:"2.1) Using Update",id:"21-using-update",children:[]}]},{value:"3) Heroku",id:"3-heroku",children:[]},{value:"4) City Guide and Paired Programming",id:"4-city-guide-and-paired-programming",children:[]},{value:"Feedback",id:"feedback",children:[]}],u={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,r.kt)("p",null,"By the end of this lesson trainees should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Process a PUT request using Express and Node to update data in memory"),(0,r.kt)("li",{parentName:"ul"},"Upload their node app to the internet so it can be accessed anywhere using Heroku")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-presentations"},"1) Presentations"),(0,r.kt)("p",null,"As part of last week's homework we asked you to prepare a very short presentation on what you learnt last week."),(0,r.kt)("p",null,"Split into groups of 2-4 people and present what you have learnt. Remember, your whole presentation should be no more than 120 seconds!"),(0,r.kt)("h2",{id:"2-crud-review"},"2) CRUD Review"),(0,r.kt)("p",null,"So what will we build? We will build a ",(0,r.kt)("strong",{parentName:"p"},"CRUD")," API. CRUD stands for Create, Retrieve, Update, Delete. If you think about it, this is what most applications do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Create some "resources"'),(0,r.kt)("li",{parentName:"ul"},"Retrieve them (GET them)"),(0,r.kt)("li",{parentName:"ul"},"Update them"),(0,r.kt)("li",{parentName:"ul"},"Delete them")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Which of these have we learnt so far?")),(0,r.kt)("h3",{id:"21-using-update"},"2.1) Using Update"),(0,r.kt)("p",null,"This is a teacher led exercise which can be used to remind students how to update resources by making a PUT request."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Teacher-Led Live Coding")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"objective"},"Objective"),(0,r.kt)("p",{parentName:"div"},"Change a quote API server to allow updating a quote according to the given ID."),(0,r.kt)("p",{parentName:"div"},"The route should use the HTTP method PUT and should use the URL:"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"/quotes")),(0,r.kt)("p",{parentName:"div"},"You should use the starting project: ",(0,r.kt)("a",{parentName:"p",href:"https://glitch.com/~cyf-quotes-id-start"},"cyf-quotes-id-start"),". This is because this project has quotes with IDs."),(0,r.kt)("p",{parentName:"div"},"When you remix the starting project, immediately rename it as your own."))),(0,r.kt)("h4",{id:"22-workshop-updating-data"},"2.2 Workshop: Updating Data"),(0,r.kt)("p",null,"Let's look back at our original objectives using the albums project from previous lessons. Try to apply what you learned about PUT routes to this project."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Glitch Albums Project")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't have your albums project in available, you can practice creating a PUT route using the ",(0,r.kt)("a",{parentName:"p",href:"https://glitch.com/~cyf-albums-start"},"cyf-albums-start")," project."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"PUT /albums/:albumId")," should update the album (that matches the passed albumId)")),(0,r.kt)("p",null,"This means that ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /albums/2")," should update an album with the id ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and return ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," with JSON ",(0,r.kt)("inlineCode",{parentName:"p"},"{ success: true }")," to the user."),(0,r.kt)("p",null,"The code should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// notice .put\napp.put("/albums/:albumID", function (req, res) {\n  console.log("PUT /albums route");\n});\n')),(0,r.kt)("p",null,"Remember, you have got to ",(0,r.kt)("strong",{parentName:"p"},"update")," the album, not add it to the list."),(0,r.kt)("p",null,"Test that your API works by updating one of the albums."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Extra Challenges")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To challenge yourself even further, try to complete these challenges:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"CHALLENGE 1: return the old version of the object you updated as well as the new value in the response"),(0,r.kt)("li",{parentName:"ul"},"CHALLENGE 2: validate the request body to make sure the ID can't be updated and that users can't add additional fields"),(0,r.kt)("li",{parentName:"ul"},"CHALLENGE 3: persist your changes to file so that you are able to return your updated values even after you make code changes in Glitch")))),(0,r.kt)("h2",{id:"3-heroku"},"3) Heroku"),(0,r.kt)("p",null,"We can use Heroku to host our APIs online (similar in the way you might have used Netlify in the past). This can be a little tricky."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're using WSL, Snap may not work immediately. If you see errors using Snap, run the following command in WSL instead. You can ask a TA for help:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://cli-assets.heroku.com/install-ubuntu.sh | sh\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exercise")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Work in pairs and with Teaching Assistants to get your homework from the previous two weeks working online by following ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/MxfxiR8TVNU"},"this Heroku walkthrough"),"."),(0,r.kt)("p",{parentName:"div"},"If you don't have your albums project available, you can follow ",(0,r.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/getting-started-with-nodejs"},"Heroku's guide")," and deploy one of their provide apps."),(0,r.kt)("p",{parentName:"div"},"You should complete all of the following sections:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Introduction"),(0,r.kt)("li",{parentName:"ul"},"Set up"),(0,r.kt)("li",{parentName:"ul"},"Deploy the app"),(0,r.kt)("li",{parentName:"ul"},"View logs"),(0,r.kt)("li",{parentName:"ul"},"Define a Procfile"),(0,r.kt)("li",{parentName:"ul"},"Run the app locally")),(0,r.kt)("p",{parentName:"div"},"Now when you use"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# This is an interesting command - Heroku deploys your app by requiring that you push your code to their remote git repository. If you're using the Heroku docs, this remote repo will already be set up, but you will need to add Heroku's git remote repository if you want to use this method on your own private codebase.\ngit push heroku main\n")),(0,r.kt)("p",{parentName:"div"},"your updated website will be made available online!"),(0,r.kt)("p",{parentName:"div"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku ps:scale web=1")," may look like a confusing command, but it's actually broken down as follows:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"heroku    # the Heroku client you installed through the guide/video\nps:scale  # telling Heroku that you want to perform a scale operation on a process\nweb=1     # in your procfile, you defined a process called web - you're just telling Heroku to scale this process to 1 here\n")))),(0,r.kt)("h2",{id:"4-city-guide-and-paired-programming"},"4) City Guide and Paired Programming"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Exercise")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For this exercises you should split into groups of two or three people. Focus on just completing level 100 if you can! This exercise is designed to test your pair programming skills and to get you thinking about how to design a full stack application! :) You're not expected to get everything completed."),(0,r.kt)("p",{parentName:"div"},'You\'re encouraged to collaborate on either React or Node at any one time (i.e. both of you working on React or Node at one time - recommendation is to start on the side that at least one of you are not comfortable with!) - one of you should "drive" (i.e. code) while the other "navigates" (i.e. provide suggestions). Make sure to switch roles every so often to share the experience!'),(0,r.kt)("p",{parentName:"div"},"You can find the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CodeYourFuture/cyf-node-challenges/tree/master/challenge-london-mini-guide"},"challenge")," here."),(0,r.kt)("p",{parentName:"div"},"Remember to use ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app"),"!"),(0,r.kt)("p",{parentName:"div"},"It is ",(0,r.kt)("strong",{parentName:"p"},"very important")," that you do not move onto the next level of the challenge until ",(0,r.kt)("strong",{parentName:"p"},"both")," of you have completed the level."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"e.g. Both of you have to finish Level 100 before continuing onto Level 200."),(0,r.kt)("li",{parentName:"ul"},"If one of you gets stuck - help each other!")))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Please spend two minutes reviewing this lesson to help us improve it for the future. This feedback will be shared with volunteers."),(0,r.kt)(i.Z,{module:"Node",week:"Week 3",mdxType:"Feedback"}))}p.isMDXComponent=!0}}]);