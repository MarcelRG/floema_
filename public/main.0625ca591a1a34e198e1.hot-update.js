/*! For license information please see main.0625ca591a1a34e198e1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home.js":(e,r,n)=>{n.r(r),Object(function(){var e=new Error("Cannot find module './m'");throw e.code="MODULE_NOT_FOUND",e}())},"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>i});var t=n("./node_modules/ogl/src/core/Renderer.js"),s=n("./node_modules/ogl/src/core/Camera.js"),a=n("./node_modules/ogl/src/core/Transform.js"),o=n("./app/components/Canvas/Home.js");class i{constructor(){this.createRenderer(),this.createScene(),this.createCube(),this.createCamera()}createRenderer(){this.renderer=new t.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new s.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new a.Transform}createCube(){this.home=new o.default}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"208497c92240b9f5c878"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wNjI1Y2E1OTFhMWEzNGUxOThlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MmNBS2UsTUFBTUEsRUFDbkJDLGNBQ0VDLEtBQUtDLGlCQUNMRCxLQUFLRSxjQUNMRixLQUFLRyxhQUNMSCxLQUFLSSxlQUdQSCxpQkFDRUQsS0FBS0ssU0FBVyxJQUFJQyxFQUFBQSxTQUVwQk4sS0FBS08sR0FBS1AsS0FBS0ssU0FBU0UsR0FFeEJDLFNBQVNDLEtBQUtDLFlBQVlWLEtBQUtPLEdBQUdJLFFBR3BDUCxlQUNFSixLQUFLWSxPQUFTLElBQUlDLEVBQUFBLE9BQU9iLEtBQUtPLElBRTlCUCxLQUFLWSxPQUFPRSxTQUFTQyxFQUFJLEVBRzNCYixjQUNFRixLQUFLZ0IsTUFBUSxJQUFJQyxFQUFBQSxVQUduQmQsYUFDRUgsS0FBS2tCLEtBQU8sSUFBSUMsRUFBQUEsUUFHbEJDLFdBQ0VwQixLQUFLSyxTQUFTZ0IsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaER4QixLQUFLWSxPQUFPYSxZQUFZLENBQ3RCQyxPQUFRSixPQUFPQyxXQUFhRCxPQUFPRSxjQUl2Q0csU0FDRTNCLEtBQUs0QixLQUFLQyxTQUFTQyxHQUFLLElBQ3hCOUIsS0FBSzRCLEtBQUtDLFNBQVNFLEdBQUssSUFFeEIvQixLQUFLSyxTQUFTMkIsT0FBTyxDQUNuQnBCLE9BQVFaLEtBQUtZLE9BQ2JJLE1BQU9oQixLQUFLZ0IseUJDakRsQmlCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZUN1YmUoKTtcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG4gICAgdGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZUNhbWVyYSgpIHtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbCk7XG5cbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbiAgfVxuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKCk7XG4gIH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKCk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG4gICAgICBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjA4NDk3YzkyMjQwYjlmNWM4NzhcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUN1YmUiLCJjcmVhdGVDYW1lcmEiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiVHJhbnNmb3JtIiwiaG9tZSIsIkhvbWUiLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsIm1lc2giLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9