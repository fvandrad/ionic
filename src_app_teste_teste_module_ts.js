"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_teste_teste_module_ts"],{

/***/ 5817:
/*!***********************************************!*\
  !*** ./src/app/teste/teste-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestePageRoutingModule": () => (/* binding */ TestePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _teste_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teste.page */ 3022);




const routes = [
    {
        path: '',
        component: _teste_page__WEBPACK_IMPORTED_MODULE_0__.TestePage
    }
];
let TestePageRoutingModule = class TestePageRoutingModule {
};
TestePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestePageRoutingModule);



/***/ }),

/***/ 4650:
/*!***************************************!*\
  !*** ./src/app/teste/teste.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestePageModule": () => (/* binding */ TestePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _teste_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teste-routing.module */ 5817);
/* harmony import */ var _teste_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teste.page */ 3022);







let TestePageModule = class TestePageModule {
};
TestePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _teste_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestePageRoutingModule
        ],
        declarations: [_teste_page__WEBPACK_IMPORTED_MODULE_1__.TestePage]
    })
], TestePageModule);



/***/ }),

/***/ 3022:
/*!*************************************!*\
  !*** ./src/app/teste/teste.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestePage": () => (/* binding */ TestePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_ionic_sideMenu_node_modules_ngtools_webpack_src_loaders_direct_resource_js_teste_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./teste.page.html */ 7211);
/* harmony import */ var _teste_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teste.page.scss */ 2903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let TestePage = class TestePage {
    constructor() { }
    ngOnInit() {
    }
};
TestePage.ctorParameters = () => [];
TestePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-teste',
        template: _C_ionic_sideMenu_node_modules_ngtools_webpack_src_loaders_direct_resource_js_teste_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_teste_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestePage);



/***/ }),

/***/ 7211:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/teste/teste.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title>Teste</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Basic -->\n  <ion-accordion-group>\n    <ion-accordion value=\"colors\">\n      <ion-item slot=\"header\">\n        <ion-label>Colors</ion-label>\n      </ion-item>\n\n      <ion-list slot=\"content\">\n        <ion-item>\n          <ion-label>Red</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Green</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Blue</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-accordion>\n    <ion-accordion value=\"shapes\">\n      <ion-item slot=\"header\">\n        <ion-label>Shapes</ion-label>\n      </ion-item>\n\n      <ion-list slot=\"content\">\n        <ion-item>\n          <ion-label>Circle</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Triangle</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Square</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-accordion>\n    <ion-accordion value=\"numbers\">\n      <ion-item slot=\"header\">\n        <ion-label>Numbers</ion-label>\n      </ion-item>\n\n      <ion-list slot=\"content\">\n        <ion-item>\n          <ion-label>1</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>2</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>3</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n  \n    <ion-card-content>\n      This is content, without any paragraph or header tags,\n      within an ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item href=\"#\" class=\"ion-activated\">\n      <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 1 activated</ion-label>\n    </ion-item>\n  \n    <ion-item href=\"#\">\n      <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 2</ion-label>\n    </ion-item>\n  \n    <ion-item class=\"ion-activated\">\n      <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 1 activated</ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 2</ion-label>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n\n");

/***/ }),

/***/ 2903:
/*!***************************************!*\
  !*** ./src/app/teste/teste.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0ZS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_teste_teste_module_ts.js.map