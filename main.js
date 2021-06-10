(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ben\Projects\GIT\repos\MyProjects\MusicIdea\about\src\main.ts */"zUnb");


/***/ }),

/***/ "1CoM":
/*!******************************************************************!*\
  !*** ./src/app/component/about-header/about-header.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHeaderComponent", function() { return AboutHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directive_parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directive/parallax/parallax.directive */ "A25X");


class AboutHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutHeaderComponent.ɵfac = function AboutHeaderComponent_Factory(t) { return new (t || AboutHeaderComponent)(); };
AboutHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutHeaderComponent, selectors: [["app-about-header"]], decls: 7, vars: 2, consts: [[1, "wrapper", "p-d-flex", "p-jc-center", "p-ai-center"], [1, "component-wrapper"], [1, "container", "p-d-flex"], ["alt", "Entertimed logo with slogan", "src", "/assets/images/header/EntertimedLogoWithSlogan.svg"], ["appParallax", "", 1, "model-container", "p-d-flex", "p-ai-center", "p-jc-center", 3, "ratio", "findTopAfterInit"], [1, "model"]], template: function AboutHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", 0.09)("findTopAfterInit", false);
    } }, directives: [_directive_parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_1__["ParallaxDirective"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem;\n  margin-bottom: 9rem;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n  width: 60%;\n}\n\n.model-container[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n}\n\n.model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  width: 388px;\n  height: 711px;\n  right: 5rem;\n}\n\n.model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/header/ceo.png\");\n  width: inherit;\n  height: inherit;\n  object-fit: none;\n  object-position: center;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (max-width: 1260px) {\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-left: 15rem;\n    width: 95%;\n  }\n\n  .model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n    right: unset;\n    left: 0;\n  }\n}\n\n@media screen and (max-width: 850px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 5rem;\n  }\n\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-left: 13rem;\n    width: 95%;\n  }\n\n  .model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n    left: -2rem;\n    transform: scale(0.8);\n  }\n}\n\n@media screen and (max-width: 700px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-left: 8rem;\n    width: 100%;\n  }\n\n  .model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n    left: -5rem;\n    transform: scale(0.65);\n  }\n}\n\n@media screen and (max-width: 512px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n    padding-left: 6rem;\n  }\n\n  .model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n    padding-top: 8rem;\n    left: -6rem;\n    transform: scale(0.5);\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n    padding-left: 4rem;\n  }\n\n  .model-container[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n    padding-top: 3rem;\n    left: -8rem;\n    transform: scale(0.3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0k7RUFDRSxzREFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUFOOztBQUtBO0VBTUU7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFQRjs7RUFVRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLE9BQUE7RUFQSjtBQUNGOztBQVlBO0VBQ0U7SUFDRSxtQkFBQTtFQVZGOztFQWFBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBVkY7O0VBYUU7SUFDRSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtFQVZKO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLGdCQUFBO0VBWkY7O0VBY0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUFYRjs7RUFjRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHNCQUFBO0VBWEo7QUFDRjs7QUFlQTtFQUNFO0lBQ0UsZ0JBQUE7RUFiRjs7RUFlQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUFaRjs7RUFlRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VBWko7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLGdCQUFBO0VBZEY7O0VBZ0JBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQWJGOztFQWdCRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VBYko7QUFDRiIsImZpbGUiOiJhYm91dC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDlyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ubW9kZWwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG5cclxuICAubW9kZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMzg4cHg7XHJcbiAgICBoZWlnaHQ6IDcxMXB4O1xyXG4gICAgcmlnaHQ6IDVyZW07XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZWFkZXIvY2VvLnBuZycpO1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG5cclxuICAgICAgb2JqZWN0LWZpdDogbm9uZTtcclxuICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjYwcHgpIHtcclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgLy9oZWlnaHQ6IDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgaW1nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVyZW07XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxuICAubW9kZWwtY29udGFpbmVyIHtcclxuICAgIC5tb2RlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICByaWdodDogdW5zZXQ7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIC8vdHJhbnNmb3JtOiBzY2FsZSgwLjkwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIgaW1nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTNyZW07XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gIH1cclxuICAubW9kZWwtY29udGFpbmVyIHtcclxuICAgIC5tb2RlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG4gICAgICBsZWZ0OiAtMnJlbTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmNvbnRhaW5lciBpbWcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tb2RlbC1jb250YWluZXIge1xyXG4gICAgLm1vZGVsIHtcclxuICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICAgIGxlZnQ6IC01cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEycHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuY29udGFpbmVyIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xyXG4gIH1cclxuICAubW9kZWwtY29udGFpbmVyIHtcclxuICAgIC5tb2RlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cmVtO1xyXG4gICAgICBsZWZ0OiAtNnJlbTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuY29udGFpbmVyIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xyXG4gIH1cclxuICAubW9kZWwtY29udGFpbmVyIHtcclxuICAgIC5tb2RlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICBsZWZ0OiAtOHJlbTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "A25X":
/*!**********************************************************!*\
  !*** ./src/app/directive/parallax/parallax.directive.ts ***!
  \**********************************************************/
/*! exports provided: ParallaxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxDirective", function() { return ParallaxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ParallaxDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.ratio = 1;
        /**
         * The 'top' css property will take account in the ngOnInit function by default.
         */
        this.findTopAfterInit = true;
        this.initialTop = 0;
    }
    onWindowScroll(event) {
        this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.ratio)) + 'px';
    }
    ngOnInit() {
        if (this.findTopAfterInit) {
            this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
        }
    }
}
ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ParallaxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ParallaxDirective, selectors: [["", "appParallax", ""]], hostBindings: function ParallaxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ParallaxDirective_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { ratio: "ratio", findTopAfterInit: "findTopAfterInit" } });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E9zp":
/*!**************************************************************!*\
  !*** ./src/app/component/about-chat/about-chat.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutChatComponent", function() { return AboutChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutChatComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutChatComponent.ɵfac = function AboutChatComponent_Factory(t) { return new (t || AboutChatComponent)(); };
AboutChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutChatComponent, selectors: [["app-about-chat"]], decls: 46, vars: 0, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], [1, "p-grid", "p-m-0", "p-pt-5"], [1, "p-col-12", "p-md-6", "p-p-0"], [1, "p-pr-3"], [1, "digit"], [1, "p-col-12", "p-md-6"], ["src", "/assets/images/chat/chat-demo.jpg", "alt", "Chat demo preview", "width", "100%", 1, "rounded", "gif", "box-shadow"]], template: function AboutChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Chatting with friends is a nowadays common use. Apart from that, we focus on more professional communication, which means, we customized it for easy making live performance agreements, chatting with enterprises, bands, your favorite artists, and also with your friends. By now, your meet-ups with friends and artists will be much easier to realize.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chatting With");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hang out with friends at live music events with artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Artists and Bands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ask, stay close, support, and express your interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Enterprises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Make events' agreements, reservations, stay informed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Make a deal about a performance, buy tickets, and more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #eeeeee;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  list-style-position: outside;\n  padding: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  text-align: left;\n  margin: 0;\n  font-size: 2rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0.3rem;\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #333333;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.4rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUVJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFOIiwiZmlsZSI6ImFib3V0LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5oMyB7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmRpZ2l0IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICBtaW4td2lkdGg6IDJyZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "EocP":
/*!**************************************************************!*\
  !*** ./src/app/component/about-more/about-more.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMoreComponent", function() { return AboutMoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inplace */ "QvPt");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");



function AboutMoreComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutMoreComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "We are musicians. Over our career, we\u2019ve encountered several repetitive problems, that we are together struggling with. As well as many of you say, the internet slightly kills the music. Yes, for listeners, there are a bunch of benefits they can reap. It starts from listening to music through streaming platforms like Spotify whenever and wherever up to downloading the music for offline use even for free. But for most of the artists that produce music is this an obstacle, because if you are not so popular, you get only trifling money earnings from your producing. Even if you are so talented and you try to produce different styles of music unlike the leading ones, it is very hard to break through the crowd and become more popular.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "We want to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A brief plan for our first release. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "For Artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "help musicians to grow in their careers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "give them many opportunities to perform and show up their talent they have.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "organize more live music events. No matter where they will be. They can be everywhere. Starting at bars, pubs, restaurants over the street performances up to large gigs for thousands of listeners. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "give musicians a reasonable audience, statistics, and feedback to make continuous improvements on their careers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "give musicians an easy system to stay in contact with their own audience, to notify listeners about news and upcoming events, and receive more professional feedback from the audience. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "give artists the ability to make performing agreements, perform on live events, and advertise themselves. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "advertise musicians based on their portfolio to bring them up to the surface from the crowd and make them more popular. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "involve more interactions with their audience they can talk with and share music thoughts and content between their community ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "give artists their own music portfolio as a profile with their own music content, for easy advertising themselves for enterprises, bands, and listeners. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "For Listeners");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "bring more opportunities to hang out with friends and artists at live music events.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "(in bars, restaurants, at gigs, street performances etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "inform people about live events and enterprises that are situated near them.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "(E.g. when you are in a foreign city, and you would like to meet new people or just participate in a live event) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "give opportunities to stay in contact with favorite artists and stay notified about events they prepare or are nearby. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "For Enterprises");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "bring several new opportunities to make enterprises more visible and encourage more people to visit them. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "develop an easy way to invite artists for the purpose of a live performance.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "involve more interactivity from customers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "(E.g. ratings, reviews, chatting with enterprises, attending their events, etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "give enterprises the ability to create a community of customers that they can inform them about whatever they want.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "(live events, discounts, menu updates, etc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "We\u2019ve covered several features, that we relentlessly work on. This is only a brief content of our ideas and plans for the first release. We have much more on our ToDo list to cover, but just for now, we want to know your opinions and reactions to our work. If you want to see the very first implementation of a functional web, you can watch the video at the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutMoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMoreComponent.ɵfac = function AboutMoreComponent_Factory(t) { return new (t || AboutMoreComponent)(); };
AboutMoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMoreComponent, selectors: [["app-about-more"]], decls: 28, vars: 0, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], ["href", "#surveys"], [1, "p-gray"], ["href", "#audience-survey"], ["href", "#artist-survey"], ["href", "#bands-survey"], ["pTemplate", "display"], ["pTemplate", "content"], [1, "p-d-flex", "p-jc-center"], [1, "read-more", "p-p-2", "p-d-flex", "p-ai-center", "rounded"], [1, "pi", "pi-plus", "p-mr-2"], [1, "icon-title", "p-pt-3", "p-d-flex", "p-ai-center"], [1, "pi", "pi-star", "p-mr-3"], [1, "pi", "pi-users", "p-mr-3"], [1, "pi", "pi-credit-card", "p-mr-3"], ["href", "#video"]], template: function AboutMoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "More about our plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We\u2019ve started this project based on our obstacles associated with music. Since we were starting as a band, wanting to be more popular, and earn more money, we wanted to know from musicians if they face similar problems that we had. (Like no audience, lack of opportunities to perform, trifling money earnings, no feedback, etc.) And it showed up, that most of you have the same issues. Immediately, we had started to brainstorm on how to effectively develop solutions to the problems we all struggle with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Based on our research we\u2019ve begun through ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "; we\u2019ve accumulated obstacles that musical humanity has. Also, some of you gave us a bunch of great ideas to solve these problems we are thankful for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "If you didn't already answer any of our 5min+ surveys, we would be pleased to ask you to do that so. They are focused on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". We are here to improve the music industry as much as we can. If you are acting in the music industry in any form, and you\u2019d like to share with us your issues that you or your band struggle with, now you have a unique chance to manifest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This project depends fully on musicians and their views.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-inplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AboutMoreComponent_ng_template_26_Template, 5, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AboutMoreComponent_ng_template_27_Template, 70, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_inplace__WEBPACK_IMPORTED_MODULE_1__["Inplace"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0;\n  padding-top: 1rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n\n.icon-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n\n.p-gray[_ngcontent-%COMP%] {\n  color: #949494;\n  font-style: italic;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-decoration: underline;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n[_nghost-%COMP%]     .p-inplace .p-inplace-display {\n  padding: 0;\n}\n\n.read-more[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background-color: #333333;\n}\n\n.read-more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .read-more[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1rem;\n}\n\n.read-more[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1tb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBSEY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQU1FO0VBQ0UsVUFBQTtBQUhKOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPRTtFQUNFLFlBQUE7QUFMSiIsImZpbGUiOiJhYm91dC1tb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG5cclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmljb24tdGl0bGUgaSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnAtZ3JheSB7XHJcbiAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5hIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLnAtaW5wbGFjZSAucC1pbnBsYWNlLWRpc3BsYXkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5yZWFkLW1vcmUge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuXHJcbiAgaSwgZGl2IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "KVUU":
/*!******************************************************************!*\
  !*** ./src/app/component/about-footer/about-footer.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutFooterComponent", function() { return AboutFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class AboutFooterComponent {
    constructor() {
        this.currentDate = Date.now();
    }
    ngOnInit() {
    }
}
AboutFooterComponent.ɵfac = function AboutFooterComponent_Factory(t) { return new (t || AboutFooterComponent)(); };
AboutFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutFooterComponent, selectors: [["app-about-footer"]], decls: 62, vars: 4, consts: [[1, "wrapper", "p-pt-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], [1, "p-grid", "p-m-0"], [1, "p-col-12", "p-md-6", "p-lg-4", "p-d-flex", "p-jc-center", "p-jc-md-start"], [1, "p-p-0", "p-col-12", "p-sm-8", "p-md-10"], ["href", "https://forms.gle/j7ygqG4rYH9fGf6fA", "target", "_blank"], [1, "p-col-12", "p-md-6", "p-lg-4", "p-d-flex", "p-jc-center", "p-jc-md-start", "p-mt-4", "p-mt-md-0"], [1, "social-links", "p-py-3", "p-d-flex", "p-jc-start"], ["href", "https://twitter.com/entertimed", "target", "_blank"], [1, "p-d-flex", "p-ai-center"], ["alt", "twitter-icon", "src", "assets/icons/social-sites/twitter.png", 1, "icon", "p-ml-0"], ["href", "https://www.youtube.com/channel/UCjTl7cqGMUlyvmSr-MOI5rA", "target", "_blank"], ["alt", "youtube-icon", "src", "assets/icons/social-sites/youtube.png", 1, "icon"], ["href", "https://www.reddit.com/r/entertimed", "target", "_blank"], ["alt", "reddit-icon", "src", "assets/icons/social-sites/reddit.png", 1, "icon"], ["href", "https://www.instagram.com/entertimed", "target", "_blank"], ["alt", "instagram-icon", "src", "assets/icons/social-sites/instagram.png", 1, "icon", "p-mr-0"], [1, "p-col-12", "p-lg-4", "p-d-flex", "p-jc-center", "p-jc-md-start", "p-mt-3", "p-mt-md-0"], ["href", "https://forms.gle/dD3qeoTiWM9inBKdA", "target", "_blank"], ["href", "https://forms.gle/Sw52iya6PrmPduEv5", "target", "_blank"], ["href", "https://forms.gle/mFKmipYptywUJXYw5", "target", "_blank"], [1, "p-grid", "p-m-0", "p-pt-3", "p-pb-4"], [1, "p-col-12", "p-md-4", "p-d-flex", "p-jc-center", "p-ai-center"], [1, "donate", "p-d-flex"], ["href", "https://www.paypal.com/donate?hosted_button_id=PKRBF6NPNDCE6", "target", "_blank", "pTooltip", "You can support the project development. We thank you for any amount."], ["src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "alt", "Donate"], [1, "p-col-12", "p-md-4", "p-d-flex", "p-jc-center", "p-ai-center", "p-mt-2", "p-mt-md-0"], [1, "copyright"], [1, "email-container", "p-d-flex", "p-ai-center"], [1, "pi", "pi-envelope", "p-mr-2"], [1, "email"], ["href", "mailto:info@entertimed.com"]], template: function AboutFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Let us know, what you think. Please fill the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "feedback survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Express your interest by joining one of the social sites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Do you have more ideas or obstacles? Fill up our 5min+ surveys of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ", or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "contact@entertimed.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 1, ctx.currentDate, "yyyy"), " Entertimed. All rights reserved ");
    } }, directives: [primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background-color: #333333;\n  color: white;\n}\n\n*[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-decoration: underline;\n}\n\n.social-links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  margin: 0 1rem;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-color: #727272;\n}\n\n.donate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.copyright[_ngcontent-%COMP%], .email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.email[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLRTtFQUNFLGFBQUE7QUFGSjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBT0U7RUFDRSxpQkFBQTtBQUpKIiwiZmlsZSI6ImFib3V0LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuKiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIHtcclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci1jb2xvcjogIzcyNzI3MjtcclxufVxyXG5cclxuLmRvbmF0ZSB7XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29weXJpZ2h0LCAuZW1haWwge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZW1haWwge1xyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "LN9/":
/*!**********************************************************************!*\
  !*** ./src/app/component/about-profiles/about-profiles.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutProfilesComponent", function() { return AboutProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AboutProfilesComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Everyone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Base information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Avatar, music you like and your personal information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Attend on events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "What events are you going to attend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Your favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your favorite enterprises, bands or artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create limited content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Upload media from events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Create your community");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Connect with friends and agree on events or enterprises visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Artist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Everyone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Everything from the Everyone profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Advanced information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Profile wallpaper, skills, testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Band");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Create a band and invite other artists to collaborate with");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Create music content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Create songs, music drafts, inform your community about your music thoughts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Enterprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Everyone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Everything from the Everyone profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Advanced information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Gallery wallpaper, calendar of your information for customers and upcoming events on your premises");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Band");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Create a band and invite other artists to collaborate with");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Create temporary content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "The matter of advertising your business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutProfilesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutProfilesComponent.ɵfac = function AboutProfilesComponent_Factory(t) { return new (t || AboutProfilesComponent)(); };
AboutProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutProfilesComponent, selectors: [["app-about-profiles"]], decls: 49, vars: 1, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], [1, "p-grid", "p-m-0", "p-pt-5"], [1, "p-p-0", "p-col-12", "p-md-6"], ["loop", "", "muted", "", "preload", "metadata", "width", "100%", "autoplay", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true", 1, "box-shadow", "rounded", "p-my-3"], ["src", "assets/images/video/artist-profile-demo.mp4"], [1, "p-col-12", "p-md-6", "p-pr-3"], [1, "p-pl-0", "p-pl-md-4"], [1, "p-text-left"], [1, "digit"], ["class", "p-grid", 4, "ngIf"], [1, "p-grid"], [1, "p-col-12", "p-lg-4", "p-pr-3", "p-d-flex", "p-jc-sm-center"], [1, "p-lg-12", "p-md-6", "p-sm-10"], [1, "p-col-12", "p-lg-4", "p-d-flex", "p-jc-sm-center"]], template: function AboutProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your profile is your portfolio page. It is one of the ways how to introduce yourself and share your content and stories from live events and visited places with your friends across your community. Furthermore, it is also used for your advertisement and for easy make live performance agreements. Here we briefly introduce the fundamental features that most of the profiles have. Every subject has a slightly different profile by its need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \"Your browser does not support HTML5 video.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fundamental Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Base Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Who you are, what skills you have, what you listen, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Upcoming Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Events you attend or you organize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ratings and Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Reviews from listeners, enterprises, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Your Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Songs, Music thoughts, Event memories, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AboutProfilesComponent_div_48_Template, 81, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: lighter;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #333333;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.4rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1wcm9maWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0FBRUo7O0FBQUk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFTjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVOIiwiZmlsZSI6ImFib3V0LXByb2ZpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuZGlnaXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIG1pbi13aWR0aDogMnJlbTtcclxuICAgICAgbWluLWhlaWdodDogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_about_header_about_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/about-header/about-header.component */ "1CoM");
/* harmony import */ var _component_about_video_about_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/about-video/about-video.component */ "pdMA");
/* harmony import */ var _component_about_opinions_about_opinions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/about-opinions/about-opinions.component */ "sut/");
/* harmony import */ var _component_about_links_about_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/about-links/about-links.component */ "wScn");
/* harmony import */ var _component_about_ideas_about_ideas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/about-ideas/about-ideas.component */ "s+oI");
/* harmony import */ var _component_about_problems_about_problems_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/about-problems/about-problems.component */ "avbZ");
/* harmony import */ var _component_about_subjects_about_subjects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/about-subjects/about-subjects.component */ "f1X/");
/* harmony import */ var _component_about_map_about_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/about-map/about-map.component */ "xj2c");
/* harmony import */ var _component_about_profiles_about_profiles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/about-profiles/about-profiles.component */ "LN9/");
/* harmony import */ var _component_about_chat_about_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/about-chat/about-chat.component */ "E9zp");
/* harmony import */ var _component_about_more_about_more_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/about-more/about-more.component */ "EocP");
/* harmony import */ var _component_about_footer_about_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/about-footer/about-footer.component */ "KVUU");













class AppComponent {
    constructor() {
        this.title = 'entertimed-about';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about-opinions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-about-ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-about-problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about-subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-about-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-about-profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-about-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-about-more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-about-footer");
    } }, directives: [_component_about_header_about_header_component__WEBPACK_IMPORTED_MODULE_1__["AboutHeaderComponent"], _component_about_video_about_video_component__WEBPACK_IMPORTED_MODULE_2__["AboutVideoComponent"], _component_about_opinions_about_opinions_component__WEBPACK_IMPORTED_MODULE_3__["AboutOpinionsComponent"], _component_about_links_about_links_component__WEBPACK_IMPORTED_MODULE_4__["AboutLinksComponent"], _component_about_ideas_about_ideas_component__WEBPACK_IMPORTED_MODULE_5__["AboutIdeasComponent"], _component_about_problems_about_problems_component__WEBPACK_IMPORTED_MODULE_6__["AboutProblemsComponent"], _component_about_subjects_about_subjects_component__WEBPACK_IMPORTED_MODULE_7__["AboutSubjectsComponent"], _component_about_map_about_map_component__WEBPACK_IMPORTED_MODULE_8__["AboutMapComponent"], _component_about_profiles_about_profiles_component__WEBPACK_IMPORTED_MODULE_9__["AboutProfilesComponent"], _component_about_chat_about_chat_component__WEBPACK_IMPORTED_MODULE_10__["AboutChatComponent"], _component_about_more_about_more_component__WEBPACK_IMPORTED_MODULE_11__["AboutMoreComponent"], _component_about_footer_about_footer_component__WEBPACK_IMPORTED_MODULE_12__["AboutFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_about_header_about_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/about-header/about-header.component */ "1CoM");
/* harmony import */ var _directive_parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/parallax/parallax.directive */ "A25X");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _component_about_video_about_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/about-video/about-video.component */ "pdMA");
/* harmony import */ var _component_about_links_about_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/about-links/about-links.component */ "wScn");
/* harmony import */ var _component_about_problems_about_problems_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/about-problems/about-problems.component */ "avbZ");
/* harmony import */ var _component_about_map_about_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/about-map/about-map.component */ "xj2c");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var _component_about_profiles_about_profiles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/about-profiles/about-profiles.component */ "LN9/");
/* harmony import */ var _component_about_chat_about_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/about-chat/about-chat.component */ "E9zp");
/* harmony import */ var _component_about_subjects_about_subjects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/about-subjects/about-subjects.component */ "f1X/");
/* harmony import */ var _component_about_opinions_about_opinions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/about-opinions/about-opinions.component */ "sut/");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _component_about_more_about_more_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/about-more/about-more.component */ "EocP");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inplace */ "QvPt");
/* harmony import */ var _component_about_ideas_about_ideas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/about-ideas/about-ideas.component */ "s+oI");
/* harmony import */ var _component_about_footer_about_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/about-footer/about-footer.component */ "KVUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_18__["RatingModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
            primeng_inplace__WEBPACK_IMPORTED_MODULE_21__["InplaceModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _component_about_header_about_header_component__WEBPACK_IMPORTED_MODULE_2__["AboutHeaderComponent"],
        _directive_parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_3__["ParallaxDirective"],
        _component_about_video_about_video_component__WEBPACK_IMPORTED_MODULE_5__["AboutVideoComponent"],
        _component_about_links_about_links_component__WEBPACK_IMPORTED_MODULE_6__["AboutLinksComponent"],
        _component_about_problems_about_problems_component__WEBPACK_IMPORTED_MODULE_7__["AboutProblemsComponent"],
        _component_about_map_about_map_component__WEBPACK_IMPORTED_MODULE_8__["AboutMapComponent"],
        _component_about_profiles_about_profiles_component__WEBPACK_IMPORTED_MODULE_10__["AboutProfilesComponent"],
        _component_about_chat_about_chat_component__WEBPACK_IMPORTED_MODULE_11__["AboutChatComponent"],
        _component_about_subjects_about_subjects_component__WEBPACK_IMPORTED_MODULE_12__["AboutSubjectsComponent"],
        _component_about_opinions_about_opinions_component__WEBPACK_IMPORTED_MODULE_13__["AboutOpinionsComponent"],
        _component_about_more_about_more_component__WEBPACK_IMPORTED_MODULE_20__["AboutMoreComponent"],
        _component_about_ideas_about_ideas_component__WEBPACK_IMPORTED_MODULE_22__["AboutIdeasComponent"],
        _component_about_footer_about_footer_component__WEBPACK_IMPORTED_MODULE_23__["AboutFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_9__["TabViewModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_18__["RatingModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__["InputTextModule"],
        primeng_inplace__WEBPACK_IMPORTED_MODULE_21__["InplaceModule"]] }); })();


/***/ }),

/***/ "avbZ":
/*!**********************************************************************!*\
  !*** ./src/app/component/about-problems/about-problems.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutProblemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutProblemsComponent", function() { return AboutProblemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutProblemsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutProblemsComponent.ɵfac = function AboutProblemsComponent_Factory(t) { return new (t || AboutProblemsComponent)(); };
AboutProblemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutProblemsComponent, selectors: [["app-about-problems"]], decls: 41, vars: 0, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3", "p-pb-3"], [1, "digit"], [2, "color", "white"], [1, "write-opinion", "p-d-flex", "p-mt-5"], ["href", "https://forms.gle/j7ygqG4rYH9fGf6fA", "target", "_blank"], [1, "p-px-3", "p-d-flex", "p-ai-center", "rounded"], [1, "pi", "pi-pencil", "p-mr-2"], [1, "p-p-3"]], template: function AboutProblemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Well-known problems we handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lack of live music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " No right audience for artists, if any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Trifling money earnings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Low popularity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " How to bring new styles to the surface ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " How to find an opportunity to perform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u2022\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " And even more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tell us your opinions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 1rem 4rem 1rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0.3rem;\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #333333;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  max-height: 2rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n\n.write-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n\n.write-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .write-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1wcm9ibGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQU1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUhGOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBSUk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFRQTtFQUNFLHlCQUFBO0FBTEY7O0FBTUU7RUFDRSxZQUFBO0FBSkoiLCJmaWxlIjoiYWJvdXQtcHJvYmxlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDRyZW0gMXJlbTtcclxufVxyXG5cclxuLmNvbXBvbmVudC13cmFwcGVyICoge1xyXG4gIC8vY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuZGlnaXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIG1pbi13aWR0aDogMnJlbTtcclxuICAgICAgbWF4LWhlaWdodDogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLndyaXRlLW9waW5pb24gZGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIHAsIGkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "f1X/":
/*!**********************************************************************!*\
  !*** ./src/app/component/about-subjects/about-subjects.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutSubjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSubjectsComponent", function() { return AboutSubjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutSubjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutSubjectsComponent.ɵfac = function AboutSubjectsComponent_Factory(t) { return new (t || AboutSubjectsComponent)(); };
AboutSubjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutSubjectsComponent, selectors: [["app-about-subjects"]], decls: 62, vars: 0, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper"], [1, "p-px-3", "p-d-flex", "p-jc-center"], [1, "p-col-12", "p-sm-9", "p-lg-12", "p-text-center", "p-text-lg-left"], [1, "p-mt-3"], [1, "p-grid", "p-m-0", "p-pt-5"], [1, "p-col-12", "p-lg-6", "p-d-flex", "p-jc-center", "p-jc-lg-start"], [1, "p-col-12", "p-sm-9", "p-d-flex"], [1, "subject-icon", "p-mr-5"], [1, "pi", "pi-users"], [1, "subject-info"], [1, "title"], [1, "description"], [1, "tags", "p-d-flex"], [1, "pi", "pi-user", "p-mr-2", "p-mt-1"], [1, "pi", "pi-star"], [1, "p-grid", "p-m-0", "p-pt-2"], [1, "pi", "pi-calendar"], [1, "pi", "pi-tag", "p-mr-2", "p-mt-2"], [1, "p-col-12", "p-lg-6", "p-pt-4", "p-pt-lg-0", "p-d-flex", "p-jc-center", "p-jc-lg-start"], [1, "pi", "pi-credit-card"]], template: function AboutSubjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We briefly introduce the main subjects of our project. We come up, so far, with four main subjects of Artist, Event, Enterprise, and the others as the Audience or Listeners. Every subject is intertwined with each other in some sort. When you imagine, artists and events need an audience, but enterprises need people as well so we create simple associations with each other subjects. This reveals an opportunity to support artists in many forms, not only financially.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Everyone who loves entertainment and is willing to hang out with friends on live events to see artists in action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Everyone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The content creator and performer. Can perform at live events or in enterprises. Furthermore, he has his own audience that can support him, talk with him, and gives feedback to him.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Musician, Band, DJ..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "All live events of any kind of enjoyment. Simply, any place where can artists and the audience meet up together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Live music, Party, Street performance, Open air gigs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Enterprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "The event provider. Can invite artists to organize live performances. Has its own community of customers that are notified about upcoming events or enterprise's news.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Bars, Restaurants, Pubs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\n.subject-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n\n.subject-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0;\n}\n\n.subject-info[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1zdWJqZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBREo7O0FBUUU7RUFDRSxpQkFBQTtBQU5KIiwiZmlsZSI6ImFib3V0LXN1YmplY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdWJqZWN0LWljb24gaSB7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG59XHJcblxyXG4uc3ViamVjdC1pbmZvIHtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcblxyXG4gIH1cclxuXHJcbiAgLnRhZ3MgKiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "pdMA":
/*!****************************************************************!*\
  !*** ./src/app/component/about-video/about-video.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutVideoComponent", function() { return AboutVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutVideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutVideoComponent.ɵfac = function AboutVideoComponent_Factory(t) { return new (t || AboutVideoComponent)(); };
AboutVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutVideoComponent, selectors: [["app-about-video"]], decls: 4, vars: 0, consts: [[1, "wrapper", "p-d-flex", "p-jc-center", "p-ai-center"], [1, "component-wrapper"], [1, "video-wrapper"], ["width", "100%", "height", "100%", "src", "https://www.youtube.com/embed/U824mdLzRJA", "title", "Entertimed Introduction", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function AboutVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.component-wrapper[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  margin-bottom: 1.5rem;\n}\n\n.video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  \n}\n\niframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 20;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-size: 4rem;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC12aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFBd0Isa0VBQUE7QUFFMUI7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJhYm91dC12aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbXBvbmVudC13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnZpZGVvLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiAxNjo5LCBmb3IgYW4gYXNwZWN0IHJhdGlvIG9mIDE6MSBjaGFuZ2UgdG8gdGhpcyB2YWx1ZSB0byAxMDAlICovXHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "s+oI":
/*!****************************************************************!*\
  !*** ./src/app/component/about-ideas/about-ideas.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutIdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutIdeasComponent", function() { return AboutIdeasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AboutIdeasComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutIdeasComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutIdeasComponent.ɵfac = function AboutIdeasComponent_Factory(t) { return new (t || AboutIdeasComponent)(); };
AboutIdeasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutIdeasComponent, selectors: [["app-about-ideas"]], decls: 131, vars: 1, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], [4, "ngIf"], [1, "p-grid", "p-m-0", "p-px-0", "p-px-sm-6", "p-px-lg-0"], [1, "p-col-12", "p-lg-4"], [1, "p-px-0", "p-px-md-6", "p-px-lg-0"], [1, "w-100"], [1, "p-d-flex", "p-jc-center"], [1, "title-icon", "pi", "pi-users"], [1, "p-text-center"], [1, "digit"], [1, "title-icon", "pi", "pi-star"], [1, "title-icon", "pi", "pi-credit-card"]], template: function AboutIdeasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutIdeasComponent_h2_2_Template, 2, 0, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Listeners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Explore live music events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " enterprises, bands, and artists nearby.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hang out with friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " at live events.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Interact with musicians");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " enterprises, and bands.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Create memories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " with friends and community.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Artists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Perform in live events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " and earn money.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Create your portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " band, community, and broaden your career.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Create and share your content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " across your community.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Earn feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " from audience and professionals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Enterprises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Organize live events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " and invite performers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Create your portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " community, and get more popular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Inform your customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " about news and upcoming events.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Earn feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " from customers and visitors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0.3rem;\n  list-style-type: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #333333;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-left: 1rem;\n}\n\n.title-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1pZGVhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ047O0FBRUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQU47O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFIRiIsImZpbGUiOiJhYm91dC1pZGVhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcblxyXG5oMiwgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG51bCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5kaWdpdCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgbWluLXdpZHRoOiAycmVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC8vbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtaWNvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA1cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "sut/":
/*!**********************************************************************!*\
  !*** ./src/app/component/about-opinions/about-opinions.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutOpinionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutOpinionsComponent", function() { return AboutOpinionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");







function AboutOpinionsComponent_div_22_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thank You!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutOpinionsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rate our initial ideas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Express your interest in this idea we are making on.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-rating", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_p_rating_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.overallStars = $event; })("onRate", function AboutOpinionsComponent_div_22_Template_p_rating_onRate_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onStarSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutOpinionsComponent_div_22_div_8_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-dialog", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function AboutOpinionsComponent_div_22_Template_p_dialog_visibleChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.starDialogConfirmVisible = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_p_rating_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.overallStars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "How much do you understand our idea?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_p_rating_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.understandingStars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "How often would you like to use our application?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_p_rating_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.useRateStars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Would you recommend this application to your friends?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p-rating", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_p_rating_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.recommendStars = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Thank You!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "If you want to say us more, please write down your thoughts into the feedback section.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " If you want, you can leave an email for us to keep you informed about updates. We won't spam you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutOpinionsComponent_div_22_Template_div_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onDismissStarDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutOpinionsComponent_div_22_Template_div_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSendStarDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Your thoughts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutOpinionsComponent_div_22_Template_textarea_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.textArea = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancel", false)("disabled", ctx_r0.starsRatingsSent)("ngModel", ctx_r0.overallStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.starsRatingsSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showHeader", false)("modal", true)("visible", ctx_r0.starDialogConfirmVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancel", false)("ngModel", ctx_r0.overallStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You're giving us ", ctx_r0.overallStars, " stars.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancel", false)("ngModel", ctx_r0.understandingStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancel", false)("ngModel", ctx_r0.useRateStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancel", false)("ngModel", ctx_r0.recommendStars);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 5)("cols", 30)("autoResize", false)("ngModel", ctx_r0.textArea);
} }
class AboutOpinionsComponent {
    constructor() {
        this.overallStars = 0;
    }
    ngOnInit() {
    }
    onSendTextArea() {
        this.textArea = '';
    }
    onStarSelected() {
        if (!this.starsRatingsSent) {
            this.starDialogConfirmVisible = true;
        }
    }
    onSendStarDialog() {
        this.starDialogConfirmVisible = false;
        // TODO send star info
        this.starsRatingsSent = true;
    }
    onDismissStarDialog() {
        this.starDialogConfirmVisible = false;
        this.overallStars = 0;
        this.understandingStars = 0;
        this.useRateStars = 0;
        this.recommendStars = 0;
        this.email = '';
    }
}
AboutOpinionsComponent.ɵfac = function AboutOpinionsComponent_Factory(t) { return new (t || AboutOpinionsComponent)(); };
AboutOpinionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutOpinionsComponent, selectors: [["app-about-opinions"]], decls: 23, vars: 1, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], ["href", "https://forms.gle/j7ygqG4rYH9fGf6fA", "target", "_blank"], ["href", "https://twitter.com/entertimed", "target", "_blank"], [1, "write-opinion", "p-d-flex", "p-mt-5"], [1, "p-px-3", "p-d-flex", "p-ai-center", "rounded"], [1, "pi", "pi-pencil", "p-mr-2"], [1, "p-p-3"], ["class", "p-grid p-my-5", 4, "ngIf"], [1, "p-grid", "p-my-5"], [1, "p-col-12", "p-md-6"], [1, "rate-title"], [1, "p-mt-0", "p-mb-4"], [3, "cancel", "disabled", "ngModel", "ngModelChange", "onRate"], ["class", "p-mt-2", 4, "ngIf"], [3, "showHeader", "modal", "visible", "visibleChange"], [1, "stars-dialog", "w-100", "p-my-4", "p-jc-center"], [1, "p-d-flex", "p-jc-center", "p-pt-2"], [3, "cancel", "ngModel", "ngModelChange"], [1, "p-text-center"], [1, "small-ratings", "p-d-flex", "p-jc-center"], [1, "p-d-flex", "p-jc-center"], [1, "p-col-6"], [1, "p-text-center", "p-pt-3", "p-m-0"], [1, "p-text-center", "p-mt-0"], [1, "p-d-flex", "p-jc-center", "p-py-2"], [1, "email-container"], [1, "p-mt-3"], [1, "p-input-icon-left"], [1, "pi", "pi-envelope"], ["type", "email", "pInputText", "", "placeholder", "Your email", 3, "ngModel", "ngModelChange"], [1, "email-info"], [1, "p-d-flex", "p-jc-end"], [1, "button", "btn-cancel", "rounded", "p-d-flex", "p-ai-center", "p-jc-center", "p-p-3", "p-mr-4", 3, "click"], [1, "pi", "pi-times", "p-mr-3"], [1, "button", "rounded", "p-d-flex", "p-ai-center", "p-jc-center", "p-p-3", 3, "click"], [1, "pi", "pi-send", "p-mr-3"], [1, "rate-title", "p-mb-2"], [1, "p-d-block"], ["pInputTextarea", "", "placeholder", "Your thoughts, ideas, reviews etc.", 3, "rows", "cols", "autoResize", "ngModel", "ngModelChange"], [1, "w-100", "p-d-flex", "p-ai-center", "p-jc-end", "p-mt-3"], [1, "button", "p-d-flex", "p-ai-center", "p-jc-center", "p-p-3", "rounded"], [1, "p-mt-2"]], template: function AboutOpinionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to Entertimed. The social site, mainly focused on music and live events, to enhance music enjoyment and to fix important problems we all struggle with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We're glad, that you're here. We will be pleased if you take 5 minutes to fill up our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "feedback survey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We are trying to build up some initial ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", as proof, that you (listeners, musicians, artists, whoever you are) are interested in that what we do. We account the time as the most valuable thing and we wouldn't like to waste our time on something that you don't interested in. Unlike, we want to collect your thoughts, ideas, and improvements to make this service perfectly suited for your daily use. We thank you for filling up our feedback survey.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Give us your feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AboutOpinionsComponent_div_22_Template, 60, 21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], primeng_rating__WEBPACK_IMPORTED_MODULE_2__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], primeng_dialog__WEBPACK_IMPORTED_MODULE_4__["Dialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__["InputTextarea"]], styles: ["h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.rate-title[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  font-size: 2rem;\n}\n\n.stars-dialog[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  margin: 0 0 0.5rem 0;\n  text-align: center;\n}\n\n.email-container[_ngcontent-%COMP%] {\n  max-width: 14rem;\n  width: 100%;\n}\n\n.email-container[_ngcontent-%COMP%]   .email-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8rem;\n  margin: 0;\n}\n\n[_nghost-%COMP%]     .p-rating-icon {\n  font-size: 3rem;\n}\n\n[_nghost-%COMP%]     .small-ratings .p-rating-icon {\n  font-size: 2rem;\n}\n\n[_nghost-%COMP%]     .p-rating .p-rating-icon.pi-star {\n  color: #333333;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #707070;\n}\n\n.write-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #333333;\n}\n\n.write-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .write-opinion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1vcGluaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBREY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQURKOztBQU9FO0VBQ0UsZUFBQTtBQUpKOztBQVFJO0VBQ0UsZUFBQTtBQU5OOztBQVVFO0VBQ0UsY0FBQTtBQVJKOztBQVlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFURjs7QUFXRTtFQUNFLFlBQUE7QUFUSjs7QUFZRTtFQUNFLFlBQUE7QUFWSjs7QUFjQTtFQUNFLHlCQUFBO0FBWEY7O0FBY0E7RUFDRSx5QkFBQTtBQVhGOztBQVlFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFWSiIsImZpbGUiOiJhYm91dC1vcGluaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnJhdGUtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnN0YXJzLWRpYWxvZyB7XHJcbiAgaDQge1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5lbWFpbC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTRyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5lbWFpbC1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLnAtcmF0aW5nLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLXJhdGluZ3Mge1xyXG4gICAgLnAtcmF0aW5nLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucC1yYXRpbmcgLnAtcmF0aW5nLWljb24ucGktc3RhciB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgKiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4ud3JpdGUtb3BpbmlvbiBkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgcCwgaSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "wScn":
/*!****************************************************************!*\
  !*** ./src/app/component/about-links/about-links.component.ts ***!
  \****************************************************************/
/*! exports provided: AboutLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutLinksComponent", function() { return AboutLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/tooltip */ "xlun");


class AboutLinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutLinksComponent.ɵfac = function AboutLinksComponent_Factory(t) { return new (t || AboutLinksComponent)(); };
AboutLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutLinksComponent, selectors: [["app-about-links"]], decls: 61, vars: 0, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3", "p-pb-2"], [1, "p-grid", "p-m-0"], [1, "p-col-12", "p-lg-6", "p-d-flex", "p-p-0", "p-jc-center", "p-jc-lg-start"], [1, "p-col-12", "p-sm-9", "p-md-6", "p-lg-9", "p-p-0"], [1, "links-title", "p-text-center", "p-text-lg-left"], [1, "p-text-center", "p-text-lg-left"], [1, "social-links", "p-d-flex", "p-jc-center", "p-jc-lg-start"], ["href", "https://twitter.com/entertimed", "target", "_blank"], [1, "p-d-flex", "p-ai-center"], ["alt", "twitter-icon", "src", "assets/icons/social-sites/twitter.png", 1, "icon", "p-ml-0"], ["href", "https://www.youtube.com/channel/UCjTl7cqGMUlyvmSr-MOI5rA", "target", "_blank"], ["alt", "youtube-icon", "src", "assets/icons/social-sites/youtube.png", 1, "icon"], ["href", "https://www.reddit.com/r/entertimed", "target", "_blank"], ["alt", "reddit-icon", "src", "assets/icons/social-sites/reddit.png", 1, "icon"], ["href", "https://www.instagram.com/entertimed", "target", "_blank"], ["alt", "instagram-icon", "src", "assets/icons/social-sites/instagram.png", 1, "icon", "p-mr-0"], [1, "donation"], [1, "p-p-0", "p-col-12", "p-lg-8"], [1, "p-pr-0", "p-pr-lg-3"], [1, "p-p-0", "p-col-12", "p-lg-4", "p-d-flex", "p-jc-center"], [1, "p-d-flex"], ["href", "https://www.paypal.com/donate?hosted_button_id=PKRBF6NPNDCE6", "target", "_blank", "pTooltip", "You can support the project development. We thank you for any amount."], ["src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "alt", "Donate", 1, "p-d-flex"], [1, "p-col-12", "p-lg-6", "p-p-0"], [1, "p-d-flex", "p-jc-center", "p-jc-lg-start", "p-pt-6", "p-pt-lg-0"], [1, "links", "p-grid"], [1, "p-col-12", "p-sm-4", "p-d-flex", "p-jc-center", "p-jc-lg-start"], ["href", "https://forms.gle/Sw52iya6PrmPduEv5", "target", "_blank"], [1, "qr"], ["alt", "Artist-Survey-QR", "src", "assets/surveys/artist.png", 1, "code"], [1, "description"], [1, "p-col-12", "p-sm-4", "p-d-flex", "p-jc-center", "p-pt-6", "p-pt-sm-2"], ["href", "https://forms.gle/dD3qeoTiWM9inBKdA", "target", "_blank"], ["alt", "Artist-Survey-QR", "src", "assets/surveys/audience.png", 1, "code"], [1, "p-col-12", "p-sm-4", "p-d-flex", "p-jc-center", "p-jc-lg-end", "p-pt-6", "p-pt-sm-2"], ["href", "https://forms.gle/mFKmipYptywUJXYw5", "target", "_blank"], ["alt", "Artist-Survey-QR", "src", "assets/surveys/band.png", 1, "code"]], template: function AboutLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stay with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Let's change the future together! Let us know that you are interested. Please join us on one of the social sites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Donation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "This project only lives from your donations so far. If you have some extra money to spare to support the project development, we would be glad for any contribution. We thank you upfront.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Our surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Help us identify your obstacles in the music industry by filling up one of the surveys below by the category you are in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Band");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #eeeeee;\n}\n\n.links-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 1rem 0 3rem 0;\n}\n\n.social-links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 0 1rem;\n}\n\n.donation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  font-size: 1.5rem;\n}\n\n.donation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.qr[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  width: 7rem;\n  height: 7rem;\n}\n\n.qr[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 1.3rem;\n  margin-top: 0.3rem;\n}\n\n@media screen and (max-width: 576px) {\n  .qr[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n    width: 10rem;\n    height: 10rem;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .social-links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7QUFISjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBVUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFUSjtBQUNGIiwiZmlsZSI6ImFib3V0LWxpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5saW5rcy10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDFyZW0gMCAzcmVtIDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtbGlua3Mge1xyXG4gIC5pY29uIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZG9uYXRpb24ge1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnFyIHtcclxuICAuY29kZSB7XHJcbiAgICB3aWR0aDogN3JlbTtcclxuICAgIGhlaWdodDogN3JlbTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gIC5xciAuY29kZSB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xyXG4gIC5zb2NpYWwtbGlua3Mge1xyXG4gICAgLmljb24ge1xyXG4gICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "xj2c":
/*!************************************************************!*\
  !*** ./src/app/component/about-map/about-map.component.ts ***!
  \************************************************************/
/*! exports provided: AboutMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMapComponent", function() { return AboutMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutMapComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMapComponent.ɵfac = function AboutMapComponent_Factory(t) { return new (t || AboutMapComponent)(); };
AboutMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMapComponent, selectors: [["app-about-map"]], decls: 39, vars: 0, consts: [[1, "wrapper", "p-py-5", "p-d-flex", "p-jc-center"], [1, "component-wrapper", "p-px-3"], [1, "p-grid"], [1, "info", "p-col-12", "p-md-6", "p-pr-3"], [1, "p-d-flex"], [1, "digit"], [1, "p-col-12", "p-md-6"], ["loop", "", "muted", "", "preload", "metadata", "width", "100%", "autoplay", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true", 1, "box-shadow", "rounded", "p-my-3"], ["src", "assets/images/video/map-demo.mp4"]], template: function AboutMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interactive map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The main core of our project is to have an interactive map for all types of users. The information on the map can be modified by the user himself but apart from that, there is unique information for each profile as well. We came along with the idea of having displayed all registered enterprises and events on the map for the customers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Composed of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Detailed markers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Markers with avatars of live events, enterprises, bands, and artists nearby.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Markers are colored by the state whether an enterprise is currently open or where is currently running an event.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Popups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Marker's popups with quick information about the subject.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \"Your browser does not support HTML5 video.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  text-align: left;\n  margin: 0;\n  padding-top: 1rem;\n}\n\n.info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 3rem;\n  margin-top: -0.5rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.digit[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #333333;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n  margin-top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhYm91dC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJhYm91dC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGxpIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZGlnaXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBtaW4td2lkdGg6IDJyZW07XHJcbiAgbWluLWhlaWdodDogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map