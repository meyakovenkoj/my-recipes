(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(43),i=a(0),c=a.n(i),r=a(10),o=a.n(r),s=a(32),l=a(33),p=a(36),d=a(35),j=a(108),h=a(11),u=a(42),b=a(26),O=a(39),m=a(61),x=a.n(m),f=window.location.protocol+"//"+window.location.hostname;var g=a(211),v=a(4),y=a(214),C=a(215),w=a(219),k=a(220),R=a(221),D=a(222),E=a(239),N=a(216),I=a(59),S=a(72),A=a(103),P=a.n(A),_=a(104),M=a.n(_),T=a(70),L=a.n(T),B=a(115),z=a(236),U=a(3),F=Object(g.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:S.a[500]}}}));function G(e){var t=F(),a=c.a.useState(!1),n=Object(u.a)(a,2),i=n[0],r=n[1],o=c.a.useState(null),s=Object(u.a)(o,2),l=s[0],p=s[1];return console.log(e.recipe),Object(U.jsx)("div",{children:Object(U.jsxs)(y.a,{className:t.root,children:[Object(U.jsx)(C.a,{avatar:Object(U.jsx)(E.a,{"aria-label":"recipe",className:t.avatar,children:"R"}),action:Object(U.jsxs)("div",{children:[Object(U.jsx)(N.a,{"aria-label":"settings","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:Object(U.jsx)(L.a,{})}),Object(U.jsx)(B.a,{id:"settings",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:function(){p(null)},children:Object(U.jsx)(z.a,{onClick:function(){var t;t=e.recipe.id,e.deleteRecipe(t),p(null)},children:"Delete"})})]}),title:e.recipe.name,subheader:new Date(e.recipe.created_at).toDateString()}),Object(U.jsx)(w.a,{className:t.media,image:f+"/media/"+e.recipe.image,title:e.recipe.name}),Object(U.jsx)(k.a,{children:Object(U.jsx)(I.a,{variant:"body2",color:"textSecondary",component:"p",children:e.recipe.description})}),Object(U.jsxs)(R.a,{disableSpacing:!0,children:[Object(U.jsx)(N.a,{"aria-label":"add to favorites",children:Object(U.jsx)(P.a,{})}),Object(U.jsx)(N.a,{className:Object(v.a)(t.expand,Object(b.a)({},t.expandOpen,i)),onClick:function(){r(!i)},"aria-expanded":i,"aria-label":"show more",children:Object(U.jsx)(M.a,{})})]}),Object(U.jsx)(D.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(U.jsxs)(k.a,{children:[Object(U.jsx)(I.a,{paragraph:!0,children:"Recipe:"}),Object(U.jsx)(I.a,{paragraph:!0,children:e.recipe.recipeDetails})]})})]})})}var W=a(223),q=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"handleDelete",value:function(e){this.props.deleteRecipe(e)}},{key:"render",value:function(){var e=this;return Object(U.jsx)("div",{style:{padding:20},children:Object(U.jsx)(W.a,{container:!0,spacing:2,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:this.props.recipes.recipes.map((function(t){return Object(U.jsx)(W.a,{item:!0,xs:12,sm:6,md:3,children:Object(U.jsx)(G,{recipe:t,deleteRecipe:e.props.deleteRecipe})},t.id)}))})})}}]),a}(i.Component),J=Object(O.c)(null,(function(e){return{deleteRecipe:function(t){return e((a=t,function(e){x.a.delete("".concat(f,"/api/recipe/"),{params:{id:a}}).then((function(t){e({type:"DELETE_RECIPE",itemId:a})})).catch((function(e){return console.log(e)}))}));var a}}}))(q),V=a(163),H=a(224),K=a(106),Q=a.n(K),X=a(228),Y=a(233),Z=a(235),$=a(229),ee=a(226),te=a(227),ae=a(225),ne=Object(g.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}));function ie(e){var t=ne();return e.preview?Object(U.jsx)("div",{className:t.root,children:Object(U.jsx)(w.a,{className:t.media,image:e.preview,title:"Preview"})}):Object(U.jsx)("div",{})}var ce=a(107),re=a.n(ce),oe=a(238),se=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",description:"",image:null,created_at:"",open:!1,preview:null},e.inputRef=c.a.createRef(),e.handleChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleImageChange=function(t){var a=Object(u.a)(t.target.files,1)[0];a&&e.setState({image:a,preview:URL.createObjectURL(a)})},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({name:"",description:"",image:null,recipeDetails:"",preview:null,open:!1})},e.handleSubmit=function(t){if(t.preventDefault(),console.log(e.state),""!==e.state.name.trim()&&""!==e.state.description.trim()){var a=new FormData;a.append("image",e.state.image,e.state.image.name),a.append("name",e.state.name),a.append("description",e.state.description),a.append("recipeDetails",e.state.recipeDetails),a.append("created_at",e.state.created_at),e.props.postRecipe(a),e.setState({name:"",description:"",recipeDetails:"",image:null,preview:null,open:!1}),e.inputRef.current.value=""}else alert("Name or Description shouldn't be empty or only with whitespaces")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getRecipes()}},{key:"componentWillReceiveProps",value:function(e){!0===this.props.isPosting&&!1===e.isPosting&&this.props.fetchMessages()}},{key:"render",value:function(){var e=this.props.classes;return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(J,{recipes:this.props.recipes}),Object(U.jsx)(oe.a,{title:"Add","aria-label":"add",children:Object(U.jsx)(H.a,{color:"primary","aria-label":"add",className:e.fab,onClick:this.handleClickOpen,children:Object(U.jsx)(Q.a,{})})}),Object(U.jsxs)(Z.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(U.jsx)(ae.a,{id:"form-dialog-title",children:"Add recipe"}),Object(U.jsxs)(ee.a,{children:[Object(U.jsx)(te.a,{children:"Enter name and description of your dish. Optionaly you can add a photo."}),Object(U.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(U.jsx)("p",{children:Object(U.jsx)(Y.a,{type:"text",placeholder:"Name",id:"name",value:this.state.name,onChange:this.handleChange,required:!0})}),Object(U.jsx)("p",{children:Object(U.jsx)(Y.a,{type:"text",placeholder:"Description",id:"description",value:this.state.description,onChange:this.handleChange,required:!0})}),Object(U.jsx)("p",{children:Object(U.jsx)(Y.a,{type:"text",placeholder:"Recipe",id:"recipeDetails",value:this.state.recipeDetails,onChange:this.handleChange})}),Object(U.jsxs)("p",{children:[Object(U.jsx)("input",{accept:"image/png, image/jpeg",className:e.input,type:"file",onChange:this.handleImageChange,ref:this.inputRef,id:"image"}),Object(U.jsx)("label",{htmlFor:"image",children:Object(U.jsx)(X.a,{variant:"contained",color:"primary",component:"span",startIcon:Object(U.jsx)(re.a,{}),children:"Upload"})})]}),Object(U.jsx)("p",{children:Object(U.jsx)(ie,{preview:this.state.preview})})]})]}),Object(U.jsxs)($.a,{children:[Object(U.jsx)(X.a,{onClick:this.handleClose,color:"primary",children:"Cancel"}),Object(U.jsx)(X.a,{onClick:this.handleSubmit,color:"primary",children:"Add"})]})]})]})}}]),a}(i.Component);var le=Object(V.a)((function(e){return{fab:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},input:{display:"none"}}}))(Object(O.c)((function(e){return{recipes:e.recipes,needUpdate:e.needUpdate}}),(function(e){return{getRecipes:function(){return e((function(e){x.a.get("".concat(f,"/api/recipe/"),{}).then((function(t){if(Array.isArray(t.data.Recipes)){var a=t.data.Recipes;console.log(a),e({type:"GET_RECIPES",recipes:a})}})).catch((function(e){alert(e.response.data.message)}))}))},postRecipe:function(t){return e((a=t,function(e){x.a.post("".concat(f,"/api/recipe/"),a,{headers:{"content-type":"multipart/form-data"}}).then((function(t){var a=t.data.Recipes;e({type:"ADD_RECIPE",recipe:a})})).catch((function(e){alert(e.response.data.message)}))}));var a}}}))(se)),pe={height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},de=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{style:pe,children:[Object(U.jsx)("h1",{children:"About"}),Object(U.jsx)("p",{children:"Some text"})]})}}]),a}(i.Component),je={height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},he={backgroundColor:"#4CAF50",border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px"},ue=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsxs)("div",{style:je,children:[Object(U.jsx)("h1",{children:"Not Found"}),Object(U.jsx)("p",{children:"Return back?"}),Object(U.jsx)("button",{style:he,onClick:function(){window.location.href="/"},children:"Go home"})]})}}]),a}(i.Component),be=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(U.jsx)("div",{children:Object(U.jsx)(j.a,{children:Object(U.jsxs)(h.c,{children:[Object(U.jsx)(h.a,{exact:!0,path:"/",component:le}),Object(U.jsx)(h.a,{path:"/about",component:de}),Object(U.jsx)(h.a,{path:"*",component:ue})]})})})}}]),a}(c.a.Component),Oe=a(58),me=a(97),xe=a(85),fe={recipes:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"GET_RECIPES":var a=Array.isArray(t.recipes)?t.recipes:[];return console.log(a),Object(n.a)(Object(n.a)({},e),{},{recipes:a});case"ADD_RECIPE":return console.log(e),e.recipes=[].concat(Object(xe.a)(e.recipes),Object(xe.a)(t.recipe)),Object(n.a)({},e);case"DELETE_RECIPE":return Object(n.a)(Object(n.a)({},e),{},{recipes:e.recipes.filter((function(e){return e.id!==t.itemId}))});default:return e}},ve=a(81),ye=function(e){return Object(Oe.b)({router:Object(ve.a)(e),recipes:ge})},Ce=a(110),we=a(19),ke=Object(we.a)();var Re=a(15),De=a(231),Ee=a(232),Ne=a(237),Ie=a(230),Se=a(113),Ae=a.n(Se),Pe=a(114),_e=a.n(Pe),Me=a(84),Te=a.n(Me),Le=a(111),Be=a.n(Le),ze=a(112),Ue=a.n(ze),Fe=Object(g.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Re.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Re.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(b.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(b.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Ge(){var e=Fe(),t=c.a.useState(null),a=Object(u.a)(t,2),n=a[0],i=a[1],r=c.a.useState(null),o=Object(u.a)(r,2),s=o[0],l=o[1],p=Boolean(n),d=Boolean(s),j=function(e){i(e.currentTarget)},h=function(){l(null)},b=function(){i(null),h()},O="primary-search-account-menu",m=Object(U.jsxs)(B.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:O,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:b,children:[Object(U.jsx)(z.a,{onClick:b,children:"Profile"}),Object(U.jsx)(z.a,{onClick:b,children:"My account"})]}),x="primary-search-account-menu-mobile",f=Object(U.jsxs)(B.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:h,children:[Object(U.jsxs)(z.a,{children:[Object(U.jsx)(N.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(U.jsx)(Ie.a,{badgeContent:4,color:"secondary",children:Object(U.jsx)(Be.a,{})})}),Object(U.jsx)("p",{children:"Messages"})]}),Object(U.jsxs)(z.a,{children:[Object(U.jsx)(N.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(U.jsx)(Ie.a,{badgeContent:11,color:"secondary",children:Object(U.jsx)(Ue.a,{})})}),Object(U.jsx)("p",{children:"Notifications"})]}),Object(U.jsxs)(z.a,{onClick:j,children:[Object(U.jsx)(N.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(U.jsx)(Te.a,{})}),Object(U.jsx)("p",{children:"Profile"})]})]});return Object(U.jsxs)("div",{className:e.grow,children:[Object(U.jsx)(De.a,{position:"static",children:Object(U.jsxs)(Ee.a,{children:[Object(U.jsx)(N.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(U.jsx)(Ae.a,{})}),Object(U.jsx)(I.a,{className:e.title,variant:"h6",noWrap:!0,children:"\u0420\u0435\u0446\u0435\u043f\u0442\u044b"}),Object(U.jsxs)("div",{className:e.search,children:[Object(U.jsx)("div",{className:e.searchIcon,children:Object(U.jsx)(_e.a,{})}),Object(U.jsx)(Ne.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(U.jsx)("div",{className:e.grow}),Object(U.jsx)("div",{className:e.sectionDesktop,children:Object(U.jsx)(N.a,{edge:"end","aria-label":"account of current user","aria-controls":O,"aria-haspopup":"true",onClick:j,color:"inherit",children:Object(U.jsx)(Te.a,{})})}),Object(U.jsx)("div",{className:e.sectionMobile,children:Object(U.jsx)(N.a,{"aria-label":"show more","aria-controls":x,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit",children:Object(U.jsx)(L.a,{})})})]})}),f,m]})}var We,qe=Object(Oe.d)(ye(ke),We,Object(Oe.c)(Object(Oe.a)(Object(me.a)(ke),Ce.a)));o.a.render(Object(U.jsxs)(O.a,{store:Object(n.a)({},qe),children:[Object(U.jsx)(Ge,{}),Object(U.jsx)(be,{})]}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.3e071acb.chunk.js.map