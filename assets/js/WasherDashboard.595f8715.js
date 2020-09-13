(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WasherDashboard"],{"0183":function(t,a,e){"use strict";var s=e("7a16"),o=e.n(s);o.a},"238c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section"},[e("div",{staticClass:"content"},[e("div",{staticClass:"tabs is-centered is-fullwidth is-medium"},[e("ul",[e("li",{class:{"is-active":"Teams"===t.activeTab}},[e("a",{on:{click:function(a){return t.$store.commit("WasherDashboard/setActiveTab","Teams")}}},[t._v(" Teams ")])]),e("li",{class:{"is-active":"Score"===t.activeTab}},[e("a",{on:{click:function(a){return t.$store.commit("WasherDashboard/setActiveTab","Score")}}},[t._v(" Score ")])]),e("li",{class:{"is-active":"Game"===t.activeTab}},[e("a",{on:{click:function(a){return t.$store.commit("WasherDashboard/setActiveTab","Game")}}},[t._v(" Game ")])])])]),"Teams"===t.activeTab?e("WasherTeams"):t._e(),"Score"===t.activeTab?e("WasherScore"):t._e(),"Game"===t.activeTab?e("WasherGame"):t._e()],1)])},o=[],i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"title is-1"},[t._v(" Teams ")]),t._l(t.teams,(function(t){return e("WasherTeamItem",{key:t._id,attrs:{team:t}})})),e("WasherNewTeam")],2)},l=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Card",{attrs:{hoverable:!0}},[e("span",{attrs:{slot:"card-title"},slot:"card-title"},[t._v(" "+t._s(t.teamItem.name)+" ")]),e("p",{attrs:{slot:"card-content"},slot:"card-content"},[t._v(" "+t._s(t.teamItem.mainMember.name)+" ")]),t._l(t.teamItem.additionalMembers,(function(a){return e("p",{key:a._id,attrs:{slot:"card-content"},slot:"card-content"},[t._v(" "+t._s(a.name)+" ")])})),e("Modal",{ref:"deleteTeam",attrs:{slot:"card-dropdown"},slot:"card-dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{slot:"modal-button"},slot:"modal-button"},[t._v(" Delete ")]),e("h2",{staticClass:"title is-2",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v(" Delete team ")]),e("div",{attrs:{slot:"modal-body"},slot:"modal-body"},[e("h3",{staticClass:"title is-3"},[t._v(" Are you sure you want to delete this team? ")]),e("h5",{staticClass:"subtitle is-5"},[t._v(" "+t._s(t.$props.team.name)+" ")])]),e("button",{staticClass:"button",attrs:{slot:"modal-footer"},on:{click:function(a){return t.$refs.deleteTeam.closeModal()}},slot:"modal-footer"},[t._v(" Cancel ")]),e("button",{staticClass:"button is-danger",attrs:{slot:"modal-footer"},on:{click:t.deleteTeam},slot:"modal-footer"},[t._v(" Delete team ")])])],2)},c=[],d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("div",{staticClass:"card-header-title"},[t._t("card-title")],2),"card-dropdown"in t.$slots?e("div",{staticClass:"dropdown is-right",class:{"is-active":!t.isHoverable&&t.dropdownOpened,"is-hoverable":t.isHoverable}},[e("div",{staticClass:"dropdown-trigger card-header-icon",on:{click:t.toggleDropdown}},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","angle-down"]}})],1)]),e("div",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[e("div",{staticClass:"dropdown-content"},[t._t("card-dropdown")],2)])]):t._e()]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._t("card-content")],2)]),e("footer",{staticClass:"card-footer"},[t._t("card-footer")],2)])},m=[],u=i["a"].extend({name:"Card",data:function(){return{dropdownOpened:!1,isHoverable:!1}},props:{hoverable:{type:Boolean,required:!1,default:!1}},mounted:function(){this.isHoverable=this.$props.hoverable},methods:{expandDropdown:function(){this.dropdownOpened=!0},collapseDropdown:function(){this.dropdownOpened=!1},toggleDropdown:function(){this.dropdownOpened=!this.dropdownOpened}}}),h=u,p=e("2877"),f=Object(p["a"])(h,d,m,!1,null,null,null),v=f.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",{on:{click:t.openModal}},[t._t("modal-button")],2),e("div",{staticClass:"modal",class:{"is-active":t.modalOpened}},[e("div",{staticClass:"modal-background",on:{click:t.closeModal}}),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("div",{staticClass:"modal-card-title"},[t._t("modal-title")],2),e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),e("section",{staticClass:"modal-card-body"},[t._t("modal-body")],2),e("footer",{staticClass:"modal-card-foot"},[t._t("modal-footer")],2)])])])},_=[],C=i["a"].extend({name:"Modal",data:function(){return{modalOpened:!1}},methods:{openModal:function(){this.modalOpened=!0,document.documentElement.classList.add("is-clipped")},closeModal:function(){this.modalOpened=!1,document.documentElement.classList.remove("is-clipped")}}}),y=C,w=Object(p["a"])(y,b,_,!1,null,null,null),T=w.exports,g=i["a"].extend({name:"WasherTeamItem",data:function(){return{teamItem:{mainMember:{}}}},props:{team:{}},components:{Card:v,Modal:T},methods:{deleteTeam:function(){this.$store.commit("WasherDashboard/deleteTeam",this.teamItem),this.$refs.deleteTeam.closeModal()}},mounted:function(){this.teamItem=this.$props.team}}),W=g,$=(e("2abc"),Object(p["a"])(W,r,c,!1,null,null,null)),D=$.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{ref:"newTeamModal"},[e("button",{staticClass:"button is-primary is-fullwidth",attrs:{slot:"modal-button"},slot:"modal-button"},[e("span",[t._v(" Create new team ")]),e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","plus-square"]}})],1)]),e("h2",{staticClass:"title is-2",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v(" Create new team ")]),e("div",{attrs:{slot:"modal-body"},slot:"modal-body"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(" Team name ")]),e("div",{staticClass:"control has-icons-left"},[e("span",{staticClass:"icon is-small is-left"},[e("font-awesome-icon",{attrs:{icon:["fas","users"]}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.teamName,expression:"teamName"}],staticClass:"input",attrs:{type:"text",placeholder:"Team name",spellcheck:"false",required:"true",autofocus:""},domProps:{value:t.teamName},on:{input:function(a){a.target.composing||(t.teamName=a.target.value)}}})])]),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v(" Players ")])]),e("div",{staticClass:"field"},[e("div",{staticClass:"control has-icons-left is-expanded"},[e("span",{staticClass:"icon is-small is-left"},[e("font-awesome-icon",{attrs:{icon:["fas","user"]}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mainPlayerName,expression:"mainPlayerName"}],staticClass:"input",attrs:{type:"text",placeholder:"Player name",spellcheck:"false",required:"true"},domProps:{value:t.mainPlayerName},on:{input:function(a){a.target.composing||(t.mainPlayerName=a.target.value)}}})])]),t._l(t.additionalPlayers,(function(a){return e("div",{key:a._id,staticClass:"field has-addons"},[e("div",{staticClass:"control has-icons-left is-expanded"},[e("span",{staticClass:"icon is-small is-left"},[e("font-awesome-icon",{attrs:{icon:["fas","user"]}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"player.name"}],ref:"additionalPlayers",refInFor:!0,staticClass:"input",attrs:{type:"text",placeholder:"Player name",autofocus:"",spellcheck:"false"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}})]),e("div",{staticClass:"control"},[e("button",{staticClass:"button is-danger",on:{click:function(e){return t.deleteAdditionalPlayer(a._id)}}},[e("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)])])})),e("div",{staticClass:"field"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-light",on:{click:t.addAdditionalPlayer}},[t._v(" Add new player ")])])])],2),e("button",{staticClass:"button is-success",attrs:{slot:"modal-footer",type:"submit"},on:{click:t.createNewTeam},slot:"modal-footer"},[t._v(" Create team ")])])},M=[],x=(e("13d5"),e("a434"),i["a"].extend({name:"WasherNewTeam",components:{Modal:T},data:function(){return{teamName:"",mainPlayerName:"",additionalPlayers:[]}},methods:{createNewTeam:function(){this.$store.commit("WasherDashboard/createTeam",{name:this.teamName,mainMember:{_id:Date.now(),name:this.mainPlayerName},additionalMembers:this.additionalPlayers}),this.teamName="",this.mainPlayerName="",this.additionalPlayers=[],this.$refs.newTeamModal.closeModal()},addAdditionalPlayer:function(){var t=this,a={_id:Date.now(),name:""};this.additionalPlayers.push(a),this.$nextTick().then((function(){var a=t.$refs.additionalPlayers;a[a.length-1].focus()}))},deleteAdditionalPlayer:function(t){var a=this.additionalPlayers.reduce((function(a,e,s){return e._id===t?s:a}),void 0);this.additionalPlayers.splice(a,1)}}})),P=x,G=Object(p["a"])(P,k,M,!1,null,null,null),N=G.exports,O=i["a"].extend({name:"WasherTeams",components:{WasherTeamItem:D,WasherNewTeam:N},methods:{},computed:{teams:function(){return this.$store.state.WasherDashboard.teams}}}),E=O,S=Object(p["a"])(E,n,l,!1,null,null,null),j=S.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"title is-1 has-text-centered"},[t._v(" Score ")]),t.teams.length>0?e("div",{staticClass:"pricing-table"},t._l(t.teams,(function(a){return e("div",{key:a._id,staticClass:"pricing-plan"},[e("div",{staticClass:"plan-header"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"plan-price"},[e("span",{staticClass:"plan-price-amount"},[t._v(" "+t._s(a.score)+" ")])]),e("div",{staticClass:"plan-items"},[e("div",{staticClass:"plan-item"},[t._v(" "+t._s(a.mainMember.name)+" ")]),t._l(a.additionalMembers,(function(a){return e("div",{key:a._id,staticClass:"plan-item"},[t._v(" "+t._s(a.name)+" ")])}))],2),e("div",{staticClass:"plan-footer"},[e("button",{staticClass:"button",attrs:{disabled:a.score<=0},on:{click:function(e){return t.$store.commit("WasherDashboard/setTeamScore",{team:a,score:a.score-1})}}},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","minus-circle"]}})],1)]),e("button",{staticClass:"button",on:{click:function(e){return t.$store.commit("WasherDashboard/setTeamScore",{team:a,score:0})}}},[t._v(" 0 ")]),e("button",{staticClass:"button",on:{click:function(e){return t.$store.commit("WasherDashboard/setTeamScore",{team:a,score:a.score+1})}}},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}})],1)])])])})),0):t._e(),0===t.teams.length?e("div",{staticClass:"hero is-medium"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h3",{staticClass:"title is-3"},[t._v(" No teams have been created yet ")]),e("a",{staticClass:"subtitle is-5",on:{click:function(a){t.$parent.activeTab="Teams"}}},[t._v(" Go create somes! ")])])])]):t._e()])},I=[],H=i["a"].extend({name:"WasherScore",computed:{teams:function(){return this.$store.state.WasherDashboard.teams}}}),q=H,F=(e("f745"),Object(p["a"])(q,A,I,!1,null,null,null)),J=F.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("WasherGamesHistory",{staticClass:"level-item"})],1),e("div",{staticClass:"level-right"},[t.game.started?e("Modal",{ref:"finishGame",staticClass:"level-item"},[e("button",{staticClass:"button is-primary",attrs:{slot:"modal-button"},slot:"modal-button"},[e("span",[t._v(" Finish ")]),e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","stop-circle"]}})],1)]),e("h2",{staticClass:"title is-2",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v(" Finish the game ")]),e("div",{attrs:{slot:"modal-body"},slot:"modal-body"},[e("h5",{staticClass:"subtitle is-5"},[t._v(" Are you sure you want to finish the game? ")])]),e("button",{staticClass:"button",attrs:{slot:"modal-footer"},on:{click:function(a){return t.$refs.finishGame.closeModal()}},slot:"modal-footer"},[t._v(" Cancel ")]),e("button",{staticClass:"button is-primary",attrs:{slot:"modal-footer"},on:{click:t.finishGame},slot:"modal-footer"},[t._v(" Finish the game ")])]):t._e(),t.game.started?t._e():e("button",{staticClass:"button is-primary",on:{click:t.startGame}},[e("span",[t._v(" Start game ")]),e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","play-circle"]}})],1)])],1)])])},B=[],z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",[e("button",{staticClass:"button is-info",attrs:{slot:"modal-button"},slot:"modal-button"},[e("span",[t._v(" Games history ")]),e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","history"]}})],1)]),e("h2",{staticClass:"title is-2",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v(" Games history ")]),e("div",{staticClass:"table-container",attrs:{slot:"modal-body"},slot:"modal-body"},[e("table",{staticClass:"table is-fullwidth"},[e("thead",[e("tr",[e("th",[t._v(" Timestamp ")]),e("th",[t._v(" Winning team ")]),e("th",[t._v(" Winning score ")]),e("th",[t._v(" Details ")])])]),e("tbody",t._l(t.history,(function(a){return e("tr",{key:a._id},[e("td",[t._v(" "+t._s(t.prettyPrintElapsedTime((new Date-new Date(a.startTime))/1e3))+" ")]),e("td",[e("span",{staticClass:"has-tooltip-arrow has-tooltip-right has-tooltip-multiline",attrs:{"data-tooltip":[a.winningTeam.mainMember.name].concat(a.winningTeam.additionalMembers.map((function(t){var a=t.name;return a}))).join(", ")}},[t._v(" "+t._s(a.winningTeam.name)+" ")])]),e("td",[t._v(" "+t._s(a.winningTeam.score)+" ")]),e("td",[e("WasherGameDetail",{attrs:{game:a}})],1)])})),0),e("tfoot")])])])},K=[],Q=e("c281"),R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",[e("button",{staticClass:"button is-info is-small",attrs:{slot:"modal-button"},slot:"modal-button"},[e("span",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1)]),e("h2",{staticClass:"title is-2",attrs:{slot:"modal-title"},slot:"modal-title"},[t._v(" Game detail ")]),e("div",{staticClass:"table-container",attrs:{slot:"modal-body"},slot:"modal-body"},[e("div",{staticClass:"pricing-table"},t._l(t.gameDetail.teams,(function(a){return e("div",{key:a._id,staticClass:"pricing-plan"},[e("div",{staticClass:"plan-header"},[t._v(" "+t._s(a.name)+" ")]),e("div",{staticClass:"plan-price"},[e("span",{staticClass:"plan-price-amount"},[t._v(" "+t._s(a.score)+" ")])]),e("div",{staticClass:"plan-items"},[e("div",{staticClass:"plan-item"},[t._v(" "+t._s(a.mainMember.name)+" ")]),t._l(a.additionalMembers,(function(a){return e("div",{key:a._id,staticClass:"plan-item"},[t._v(" "+t._s(a.name)+" ")])}))],2)])})),0)])])},U=[],V=i["a"].extend({name:"WasherGameDetail",data:function(){return{gameDetail:{teams:[]}}},props:{game:{}},components:{Modal:T},mounted:function(){this.gameDetail=this.$props.game}}),X=V,Y=(e("e7e6"),Object(p["a"])(X,R,U,!1,null,null,null)),Z=Y.exports,tt=i["a"].extend({name:"WasherGamesHistory",components:{Modal:T,WasherGameDetail:Z},data:function(){return{}},methods:{prettyPrintElapsedTime:Q["b"]},computed:{history:function(){return this.$store.state.WasherDashboard.history}}}),at=tt,et=(e("0183"),Object(p["a"])(at,z,K,!1,null,null,null)),st=et.exports,ot=i["a"].extend({name:"WasherGame",components:{Modal:T,WasherGamesHistory:st},data:function(){return{}},computed:{game:function(){return this.$store.state.WasherDashboard.game}},methods:{startGame:function(){this.$store.commit("WasherDashboard/startGame")},finishGame:function(){this.$store.commit("WasherDashboard/finishGame"),this.$refs.finishGame.closeModal()}}}),it=ot,nt=Object(p["a"])(it,L,B,!1,null,null,null),lt=nt.exports,rt=i["a"].extend({name:"WasherDashboard",data:function(){return{}},components:{WasherTeams:j,WasherScore:J,WasherGame:lt},mounted:function(){},computed:{activeTab:function(){return this.$store.state.WasherDashboard.tabs.activeTab}}}),ct=rt,dt=Object(p["a"])(ct,s,o,!1,null,null,null);a["default"]=dt.exports},"2abc":function(t,a,e){"use strict";var s=e("f073"),o=e.n(s);o.a},"7a16":function(t,a,e){},c62e:function(t,a,e){},cbc1:function(t,a,e){},e7e6:function(t,a,e){"use strict";var s=e("cbc1"),o=e.n(s);o.a},f073:function(t,a,e){},f745:function(t,a,e){"use strict";var s=e("c62e"),o=e.n(s);o.a}}]);