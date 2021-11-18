"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[960],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Get Hybrid Participants",s={unversionedId:"dev/serverless/hybrid",id:"dev/serverless/hybrid",isDocsHomePage:!1,title:"Get Hybrid Participants",description:"The function is called ocgetparticipants_hybrid",source:"@site/docs/dev/serverless/hybrid.md",sourceDirName:"dev/serverless",slug:"/dev/serverless/hybrid",permalink:"/documentation/docs/dev/serverless/hybrid",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/dev/serverless/hybrid.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/dev/serverless/start"},next:{title:"Using the edu-hub platform",permalink:"/documentation/docs/users/start"}},c=[{value:"URL",id:"url",children:[],level:4},{value:"Input",id:"input",children:[],level:4},{value:"Header",id:"header",children:[],level:4},{value:"Example run",id:"example-run",children:[],level:4},{value:"Response",id:"response",children:[{value:"Check the response",id:"check-the-response",children:[],level:5}],level:4}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-hybrid-participants"},"Get Hybrid Participants"),(0,a.kt)("p",null,"The function is called ",(0,a.kt)("inlineCode",{parentName:"p"},"oc_get_participants_hybrid")),(0,a.kt)("h4",{id:"url"},"URL"),(0,a.kt)("p",null,"The url to call the function is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://europe-west3-oc-serverless-zoom-functions.cloudfunctions.net/oc_get_participants_hybrid\n")),(0,a.kt)("h4",{id:"input"},"Input"),(0,a.kt)("p",null,"Input data MUST contain ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting_id")," field, otherwise it won't work.\nIt will respond with an error, stating that the meeting id is missing"),(0,a.kt)("p",null,"It can contain ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," field (no value required).\nIf is contained, the Limesurvey answers are filtered with the start\nand end time of the meeting"),(0,a.kt)("h4",{id:"header"},"Header"),(0,a.kt)("p",null,"It MUST contain the authorization bearer and the content-type."),(0,a.kt)("p",null,"The authorization bearer can be fetched using the gcloud command\n",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud auth print-identity-token")," if you have the correct permissions."),(0,a.kt)("h4",{id:"example-run"},"Example run"),(0,a.kt)("p",null,"Minimal run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl "https://europe-west3-oc-serverless-zoom-functions.cloudfunctions.net/oc_get_participants_hybrid" \\\n-H "Authorization: bearer $(gcloud auth print-identity-token)" \\\n-H "Content-Type:application/json" \\\n--data \'{"meeting_id":"https://zoom/71231512541"}\'\n')),(0,a.kt)("p",null,"With filtering"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl "https://europe-west3-oc-serverless-zoom-functions.cloudfunctions.net/oc_get_participants_hybrid" \\\n-H "Authorization: bearer $(gcloud auth print-identity-token)" \\\n-H "Content-Type:application/json" \\\n--data \'{"meeting_id":"https://zoom/71231512541", "filter":""}\'\n')),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("p",null,"The response is a json file which contains zoom report and the list of participants\nThe json file should contain several keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"'all_participants', 'dept', 'duration', 'end_time', 'host_id', 'id', 'participants_count', 'participants_report', 'start_time', 'topic', 'total_minutes', 'tracking_fields', 'type', 'user_email', 'user_name', 'uuid'\n")),(0,a.kt)("p",null,"The actual list of participants is in ",(0,a.kt)("inlineCode",{parentName:"p"},"all_participants"),".\nThe content of ",(0,a.kt)("inlineCode",{parentName:"p"},"all_participants")," is a list.\nEach list item is a python dictionary with the following keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"'name', 'email', 'join_time', 'leave_time', 'duration', 'type', 'place'\n")),(0,a.kt)("p",null,"Where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," should be always filled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'email', 'leave_time', 'duration'")," only for the zoom participants,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"join_time")," is the join_time of the zoom meeting or the filling time for the survey."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"offline")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"online")),(0,a.kt)("li",{parentName:"ul"},"place can be ",(0,a.kt)("inlineCode",{parentName:"li"},"zoom")," or the actual place")),(0,a.kt)("h5",{id:"check-the-response"},"Check the response"),(0,a.kt)("p",null,"Assuming we saved the response in a resp.json file, we can (in python)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"with open(\"resp.json\", \"r\") as read_file:\n    response = json.load(read_file)\n    # these are all participants\n    hybrid_participants = response['all_participants']\n    # each of them is a dict\n    for h_part in hybrid_participants:\n        ... # h_part is a dict (h_part['name'] for example)\n")))}d.isMDXComponent=!0}}]);