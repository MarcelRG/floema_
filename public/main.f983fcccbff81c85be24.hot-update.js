/*! For license information please see main.f983fcccbff81c85be24.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var l=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/each.js"),o=s.n(n);class i{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s}create(){this.element=document.querySelector(this.selector),this.elements={},o()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{l.default.from(this.element,{autoAlpha:0,onComplete:e})}))}hide(){return new Promise((e=>{l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}}}},(function(e){e.h=()=>"50ce5e91cec0263b96d5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOTgzZmNjY2JmZjgxYzg1YmUyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dU1BS2UsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosR0FHTEUsS0FBS0QsR0FBS0EsRUFHWkksU0FDRUgsS0FBS0gsUUFBVU8sU0FBU0MsY0FBY0wsS0FBS0MsVUFDM0NELEtBQUtGLFNBQVcsR0FFaEJRLEdBQUFBLENBQUtOLEtBQUtFLGtCQUFrQixDQUFDSyxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRQLEtBQUtGLFNBQVNVLEdBQU9ELEdBRXJCUCxLQUFLRixTQUFTVSxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJQLEtBQUtGLFNBQVNVLEdBQUtPLE9BQ3JCZixLQUFLRixTQUFTVSxHQUFPLEtBQ2tCLElBQTlCUixLQUFLRixTQUFTVSxHQUFLTyxTQUM1QmYsS0FBS0YsU0FBU1UsR0FBT0osU0FBU0MsY0FBY0UsUUFNcERTLE9BQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQkMsRUFBQUEsUUFBQUEsS0FBVW5CLEtBQUtILFFBQVMsQ0FDdEJ1QixVQUFXLEVBQ1hDLFdBQVlILE9BS2xCSSxPQUNFLE9BQU8sSUFBSUwsU0FBU0MsSUFDbEJDLEVBQUFBLFFBQUFBLEdBQVFuQixLQUFLSCxRQUFTLENBQ3BCdUIsVUFBVyxFQUNYQyxXQUFZSCx3QkNuRHBCSyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzLFxuICAgIH07XG5cbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MGNlNWU5MWNlYzAyNjNiOTZkNVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsIkdTQVAiLCJhdXRvQWxwaGEiLCJvbkNvbXBsZXRlIiwiaGlkZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==