DocsSite.loadBundle("pnozjohf",["exports"],function(e){var t=window.DocsSite.h,r=function(){function e(){this.query="",this.size="small",this.autofocus="none",this.showClearCtrl=!1}return e.prototype.watchQuery=function(){this.showClearCtrl=this.query.length>0},e.prototype.searchListener=function(e){27!==e.keyCode?this.hasSearched.emit(e.target.value):this.handleClear()},e.prototype.handleClear=function(){this.hasSearched.emit("")},e.prototype.componentWillLoad=function(){this.watchQuery()},e.prototype.render=function(){return t("div",{class:"search-input search-input--"+this.size},t("input",{type:"text",placeholder:"Search icons...",value:this.query,autofocus:"autofocus"===this.autofocus?"autofocus":""}),t("i",{class:{"search-input__clear":!0,"search-input__clear--active":this.showClearCtrl,ion:!0,"ion-md-close":!0},onClick:this.handleClear.bind(this)}))},Object.defineProperty(e,"is",{get:function(){return"icon-search"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autofocus:{type:String,attr:"autofocus"},query:{type:String,attr:"query",watchCallbacks:["watchQuery"]},showClearCtrl:{state:!0},size:{type:String,attr:"size"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"hasSearched",method:"hasSearched",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"keyup",method:"searchListener"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"icon-search .search-input{position:relative}icon-search .search-input input{width:100%;font-weight:400;font-family:Eina;font-size:16px;border:0;outline:0;border-radius:6px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;-webkit-appearance:none;vertical-align:middle}icon-search .search-input__clear{-webkit-transition:background .3s,opacity .3s;transition:background .3s,opacity .3s;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:16px;font-size:14px;width:22px;height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;color:var(--color-pale-sky);opacity:0;background-color:var(--color-catskill-white);border-radius:100px}icon-search .search-input__clear--active{opacity:.8}icon-search .search-input__clear--active:hover{opacity:1;background-color:#e3e9f3}icon-search .search-input--small .search-input__clear{font-size:12px;width:18px;height:18px;background-color:#e3e9f3;right:12px}icon-search .search-input--small .search-input__clear--active:hover{background-color:#dce3f0}icon-search .search-input:before{font-family:Ionicons;content:\"\\f4a5\";color:var(--color-heather);position:absolute;height:24px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}icon-search .search-input--small input{font-size:13px;line-height:18px;padding:10px;padding-left:30px;padding-right:30px;background-color:#f6f7f9;height:39px;text-indent:0}icon-search .search-input--small:before{font-size:18px;left:10px}icon-search .search-input--large input{-webkit-transition:-webkit-box-shadow .3s;transition:-webkit-box-shadow .3s;transition:box-shadow .3s;transition:box-shadow .3s,-webkit-box-shadow .3s;font-size:16px;line-height:22px;padding:20px;padding-left:50px;padding-right:50px;background-color:#fff;-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}icon-search .search-input--large input:focus{-webkit-box-shadow:0 6px 12px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 6px 12px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}icon-search .search-input--large:before{font-size:22px;left:20px}icon-search .search-input input::-webkit-input-placeholder{color:var(--color-heather)}icon-search .search-input input:-ms-input-placeholder{color:var(--color-heather)}icon-search .search-input input::-ms-input-placeholder{color:var(--color-heather)}icon-search .search-input input::placeholder{color:var(--color-heather)}"},enumerable:!0,configurable:!0}),e}();e.IconSearch=r,Object.defineProperty(e,"__esModule",{value:!0})});
