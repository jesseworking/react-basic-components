module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("styled-components")},function(e,t,r){"use strict";r.r(t);var n=r(0);var o=class extends n.Component{constructor(){super(...arguments),this.handleClickOutside=(e=>{const{onClickOutside:t=(()=>{})}=this.props;this.ref&&!this.ref.contains(e.target)&&t()}),this.setRef=(e=>{this.ref=e})}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside)}render(){const{children:e,dropdown:t,isOpen:r}=this.props;return n.createElement("div",{ref:this.setRef},e,n.createElement("div",{style:{position:"relative"}},n.createElement("div",{style:{background:"white",opacity:1,position:"absolute",top:"10px",zIndex:1}},r&&t)))}},a=r(1),i=r.n(a),s={black:"#000",white:"#fff",baliHai:"#8598ac",cloudBurst:"#33344a",navyBlue:"#393b53",gulfBlue:"#393c5b",blueZodiac:"#41435b",silver:"#ccc",gainsboro:"#d9d9d9",cloud:"#f0f0f0",gallery:"#ececec",mercury:"#e9e9e9",alto:"#e0e0e0",alabaster:"#f5f5f5",ivorySmoke:"#ebebeb",whiteSmoke:"#ededed",aliceBlue:"#e9f9fe",wildSand:"#f6f6f6",marble:"#f9f9f9",lilyWhite:"#f8f9f9",brightWhiteSmoke:"#f3f3f3",silverChalice:"#b2b2b2",bombay:"#b7b9bd",slateGray:"#7a8896",spindle:"#c5d3e0",lightCyan:"#dff7fe",lavender:"#dff2f8",paleTurquoise:"#d0eef7",spray:"#7fc5e2",lightSlateGrey:"#7a8896",turquoiseBlue:"#68c7e5",redOrange:"#f25524",lightRedOrange:"#ffd9cd",conifer:"#8dd95b",mantis:"#7bc14d",nightRider:"#2f2f2f",outrageousOrange:"#f63",zircon:"#f7f8f8",tundora:"#444",emperor:"#555",stormGray:"#727784",boulder:"#777",grey:"#7c7c7c",darkGray:"#979797",dustyGray:"#999",dimGray:"#666",clickable:"#43badf",clickableHover:"#21a8d2",clickableLoading:"#9adaee",secondary:"#8194a7",secondaryHover:"#7a8896",selected:"#f63",selectedHover:"#ec5d2d",inProgress:"#87c161",inProgressHover:"#67b335",paused:"#ffa64d",successLight:"#ebf6e6",success:"#a5d284",successText:"#6ab33a",errorLight:"#feeaea",error:"#ffacb8",warning:"#f45f74",warningHover:"#e05266",inactive:"#e9e9e9",highlight:"#ededed",skills:"#4e88d7",title:"#17b89b",industry:"#b85d94"};const d=i.a.input`
  display: inline-block;
  border-radius: 3px;
  border: 1px solid ${s.gainsboro};
  padding: 3px 5px;

  &:hover {
    box-shadow: 0 1.5px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.04);
  }

  &:focus {
    outline: none;
    border: 2px solid ${s.clickable};
    margin: -1px;
  }
`;var l=({autoFocus:e,className:t,input:{onChange:r,value:o},type:a="text",onEnter:i=(()=>{})})=>n.createElement(d,{autoFocus:e,className:t,onChange:e=>{r(e.target.value)},onKeyPress:e=>{e.stopPropagation(),"Enter"===e.key&&i()},value:o,type:a});const c=i.a.div`
  padding: 0;
  max-height: 300px;
  overflow: scroll;
  box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  z-index: -1;
`,u=i.a.div`
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: ${s.cloud};
  }

  &:active {
    background-color: ${s.gainsboro};
  }
`;r.d(t,"AutocompleteTextField",function(){return p});class p extends n.Component{constructor(){super(...arguments),this.state={inputValue:"",items:[],isOpen:!1},this.handleInputChange=(e=>{const{fetcher:t=(async()=>[])}=this.props;this.setState({inputValue:e,isOpen:!0}),t(e).then(e=>this.setState({items:e,isOpen:!0}))}),this.handleItemClick=((e,t)=>{const{items:r}=this.state,{input:{onChange:n,clearOnSelect:o},textFieldProps:{formatValue:a}}=this.props,i=r[t];if(i){n(i);const e=o?"":a(i);this.setState({inputValue:e,isOpen:!1})}})}render(){const{className:e,dropdownClassName:t,dropdownItemProps:r}=this.props,{inputValue:a,items:i,isOpen:s}=this.state;return n.createElement(o,{dropdown:n.createElement(c,{className:t,"data-test-id":"dropdown"},i.map((e,t)=>n.createElement(u,{className:r.className,"data-test-id":"dropdownItem",key:r.formatKey(e),onClick:e=>this.handleItemClick(e,t),style:{}},r.renderItem(e,t)))),isOpen:s,onClickOutside:()=>this.setState({isOpen:!1})},n.createElement(l,{className:e,input:{value:a,onChange:this.handleInputChange}}))}}p.defaultProps={dropdownItemProps:{formatKey:e=>e.toString(),renderItem:e=>e},textFieldProps:{formatValue:e=>e.toString()}};t.default=p}]).default;