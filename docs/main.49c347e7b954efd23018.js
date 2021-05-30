(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/30a":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header text-center\">\n    <h1 class=\"blog-name pt-lg-4 mb-0\"><a href=\"index.html\">Aidan Devs</a></h1>\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n\n        <button class=\"navbar-toggler\" [ngClass]=\"{'collapsed': collapsed}\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" (click)=\"toggleCollapse()\"\n            aria-controls=\"navigation\" [ariaExpanded]=\"!collapsed\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div id=\"navigation\" class=\"collapse flex-column navbar-collapse\" [ngClass]=\"{'show': show, 'collapsing': willBeCollapsing, 'collapse': !willBeCollapsing}\" [ngStyle]=\"{'height': collapsing && collapsed? '762px' : null }\">\n            <div class=\"profile-section pt-3 pt-lg-0\">\n                <img class=\"profile-image mb-3 rounded-circle mx-auto\" src=\"../../../assets/img/profile.jpg\"\n                    alt=\"image\">\n\n                <div class=\"bio mb-3\">Hi, my name is Aidan Melendez and I'm a full stack software developer. Welcome to my personal website!</div>\n                <!--//bio-->\n                <ul class=\"social-list list-inline py-3 mx-auto\">\n                    <li class=\"list-inline-item\"><a target=\"_blank\" href=\"https://www.linkedin.com/in/aidan-melendez-2a8894132\"><fa-icon [icon]=\"['fab', 'linkedin-in']\"></fa-icon></a></li>\n                    <li class=\"list-inline-item\"><a target=\"_blank\" href=\"https://github.com/CoreAidan\"><fa-icon [icon]=\"['fab', 'github-alt']\"></fa-icon></a></li>\n                </ul>\n                <!--//social-list-->\n                <hr>\n            </div>\n            <!--//profile-section-->\n\n            <ul class=\"navbar-nav flex-column text-left\">\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/about\"><fa-icon class=\"mr-2\" [icon]=\"['fas', 'user']\" [fixedWidth]=\"true\"></fa-icon>About Me</a>\n                </li>\n                <li class=\"nav-item\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/portfolio\"><fa-icon class=\"mr-2\" [icon]=\"['fas', 'laptop-code']\" [fixedWidth]=\"true\"></fa-icon>Portfolio</a>\n                </li>\n                <!-- <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" href=\"services.html\"><fa-icon class=\"mr-2\" [icon]=\"['fas', 'briefcase']\"></fa-icon>Services &amp; Pricing</a>\n                </li> -->\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/resume\"><fa-icon class=\"mr-2\" [class]=\"tet\" [icon]=\"['fas', 'file-alt']\" [fixedWidth]=\"true\"></fa-icon>Resume</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/blog\"><fa-icon class=\"mr-2 fa-fw\" [icon]=\"['fas', 'blog']\"></fa-icon>Blog</a>\n                </li> -->\n                <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a class=\"nav-link\" routerLink=\"/contact\"><fa-icon class=\"mr-2\" [icon]=\"['fas', 'envelope-open-text']\" [fixedWidth]=\"true\"></fa-icon>Contact</a>\n                </li>\n            </ul>\n\n            <!-- <div class=\"my-2\">\n                <a class=\"btn btn-primary\" href=\"contact.html\" target=\"_blank\"><fa-icon class=\"pr-2\" [icon]=\"['fas', 'paper-plane']\"></fa-icon>Hire Me</a>\n            </div> -->\n        </div>\n    </nav>\n</header>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aidan\Documents\CoreAidan.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "2Ic5":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "5OVo":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/project-details/project-details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n    <section class=\"cta-section theme-bg-light py-5\">\n        <div class=\"container single-col-max-width\">\n            <h2 class=\"heading text-center\">{{project.name}}</h2>\n            <div class=\"project-intro text-center\">\n                <p class=\"mb-0 lead\">{{project.intro}}</p>\n            </div>\n            \n        </div><!--//container-->\n    </section>\n    <section class=\"project px-3 py-5 p-md-5\">\n        <div class=\"container\">\n            <div class=\"project-meta media flex-column flex-md-row p-4 theme-bg-light\">\n                <img class=\"project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block\" src=\"../../../assets/img/project/{{project.previewImageName}}\" alt=\"\">\n                <div class=\"media-body\">\n                    <div class=\"client-info\">\n                        <h3 class=\"client-name font-weight-bold mb-4\">Client Name</h3>\n                        <ul class=\"client-meta list-unstyled\">\n                            <li class=\"mb-2\"><fa-icon class=\"mr-2\" [icon]=\"['fas', 'industry']\" [fixedWidth]=\"true\"></fa-icon><strong>Industry:</strong> Tech</li>\n                            <li class=\"mb-2\"><strong><fa-icon class=\"mr-2\" [icon]=\"['fas', 'link']\" [fixedWidth]=\"true\"></fa-icon>Website: </strong> <a class=\"theme-link\" href=\"#\">{{project.website}}</a></li>\n                        </ul>\n                        <div class=\"client-bio mb-4\">{{project.shortDescription}}</div>\n                        <h4 class=\"subheading mb-3\">Project Requirements</h4>\n                        <ul class=\"mb-0\">\n                            <li class=\"mb-2\" *ngFor=\"let requirements of project.requirements\">{{requirements}}</li>\n                        </ul>\n                    </div>\t\t\t\t\t\n                </div><!--//media-body-->\n            </div><!--//project-meta-->\n            <div class=\"project-sections py-5\">\n                <div class=\"project-section mb-5\">\n                    <h3 class=\"project-section-title mb-3\">Project Overview</h3>\n                    <p>{{project.overview}}</p>\n                </div><!--//project-section-->\n                \n                <div class=\"project-section mb-5\">\n                     <h3 class=\"project-section-title\">The Challenge</h3>\n                    <p>{{project.challenge}}</p>\n                     \n                </div><!--//project-section-->\n                \n                <div class=\"project-section mb-5\">\n                     <h3 class=\"project-section-title\">The Approach &amp; Solution</h3>\n                    <p>{{project.solution}}</p>\n                </div><!--//project-section-->\n                \n                <div class=\"project-section mb-5\">\n                     <h3 class=\"project-section-title mb-3\">The Results</h3>\n                    <p>{{project.results}}</p>\n                </div><!--//project-section-->\n            </div>\n        </div>\n    </section>\n    \n    <section class=\"promo-section theme-bg-light py-5 text-center\">\n        <div class=\"container single-col-max-width\">\n            <h2 class=\"title\">Want me to help with your project?</h2>\n            <p>If you take on freelance work, you can use this section to prompt any potential clients to get in touch with you with their project requirements.</p>\n            <div class=\"text-center\"><a class=\"btn btn-primary\" href=\"contact.html\" target=\"_blank\"><fa-icon class=\"mr-2\" [icon]=\"['fas', 'paper-plane']\" [fixedWidth]=\"true\"></fa-icon>Hire Me</a></div>\n        </div><!--//container-->\n    </section><!--//promo-section-->\n    \n    <app-footer></app-footer>\n\n</div><!--//main-wrapper-->\n");

/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n\t\t\n    <section class=\"about-me-section p-3 p-lg-5 theme-bg-light\">\n        <div class=\"container\">\n            <div class=\"profile-teaser media flex-column flex-lg-row\">\n                \n                <div class=\"media-body\">\n                    <h2 class=\"name font-weight-bold mb-1\">Aidan Melendez</h2>\n                    <div class=\"tagline mb-3\">Software Developer</div>\n                    <div class=\"bio mb-4\">I'm a software developer specialised in frontend and backend development for complex scalable web and mobile applications. Want to know how I may help your project? Check out my project <a class=\"link-on-bg\" routerLink=\"/portfolio\">portfolio</a> and <a class=\"link-on-bg\" routerLink=\"/resume\">online resume</a>.\n                    </div><!--//bio-->\n                    <div class=\"mb-4\">\n                        <a class=\"btn btn-primary mr-2 mb-3\" routerLink=\"/portfolio\"><fa-icon class=\"pr-2\" [icon]=\"['fas', 'eye']\"></fa-icon><span class=\"d-none d-md-inline\">View</span> Portfolio</a>\n                        <a class=\"btn btn-secondary mb-3\" routerLink=\"/resume\"><fa-icon class=\"pr-2\" [icon]=\"['fas', 'file-alt']\"></fa-icon><span class=\"d-none d-md-inline\">View</span> Resume</a>\n                    </div>\n                </div><!--//media-body-->\n                <img class=\"profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0\" src=\"assets/img/profile-lg.jpg\" alt=\"\">\n            </div>\n        </div>\n    </section><!--//about-me-section-->\n    \n    <section class=\"overview-section p-3 p-lg-5\">\n        <div class=\"container\">\n            <h2 class=\"section-title font-weight-bold mb-3\">What I do</h2>\n            <div class=\"section-intro mb-5\">I have more than 3 years of professional experience building web and mobile software. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a routerLink=\"/resume\">online resume</a> and <a routerLink=\"/portfolio\">project portfolio</a>.</div>\n            <div class=\"row\">\n                <div class=\"item col-12 col-lg-4\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-icon\"><fa-icon class=\"px-1\" [icon]=\"['fab', 'js-square']\"></fa-icon><fa-icon class=\"px-1\"[icon]=\"['fab', 'html5']\"></fa-icon><fa-icon class=\"px-1\"[icon]=\"['fab', 'css3']\"></fa-icon><fa-icon class=\"px-1\"[icon]=\"['fab', 'angular']\"></fa-icon></div>\n                        <h3 class=\"item-title\">Frontend</h3>\n                        <ul class=\"list-unstyled \">\n                            <li class=\"mb-2 item-desc\">JavaScript</li>\n                            <li class=\"mb-2 item-desc\">HTML5, CSS3, Bootstrap 5</li>\n                            <li class=\"mb-2 item-desc\">Angular, TypeScript</li>\n                            <li class=\"mb-2 item-desc\">Xamarin Native</li>\n                        </ul>\n                    </div><!--//item-inner-->\n                </div><!--//item-->\n                <div class=\"item col-12 col-lg-4\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-icon\"><fa-icon class=\"px-1\"[icon]=\"['fas', 'code']\"></fa-icon><fa-icon class=\"px-1\"[icon]=\"['fas', 'database']\"></fa-icon></div>\n                        <h3 class=\"item-title\">Backend</h3>\n                        <ul class=\"list-unstyled \">\n                            <li class=\"mb-2 item-desc\">.NET C#</li>\n                            <li class=\"mb-2 item-desc\">SQLite, MSSQL</li>\n                            <li class=\"mb-2 item-desc\">Azure App Services</li>\n                            <li class=\"mb-2 item-desc\">Azure Blob Storage</li>\n                        </ul>\n                    </div><!--//item-inner-->\n                </div><!--//item-->\n                <div class=\"item col-12 col-lg-4\">\n                    <div class=\"item-inner\">\n                        <div class=\"item-icon\"><fa-icon class=\"px-1\"[icon]=\"['fas', 'award']\"></fa-icon></div>\n                        <h3 class=\"item-title\">Others</h3>\n                        <ul class=\"list-unstyled \">\n                            <li class=\"mb-2 item-desc\">Azure DevOps</li>\n                            <li class=\"mb-2 item-desc\">Git / Github</li>\n                            <li class=\"mb-2 item-desc\">Agile SCRUM</li>\n                        </ul>\n                    </div><!--//item-inner-->\n                </div><!--//item-->\n            </div><!--//row-->\n        </div><!--//container-->\n    </section>\n    \n    <div class=\"container\"><hr></div>\n    \n    <section class=\"featured-section p-3 p-lg-5\">\n        <div class=\"container\">\n            <h2 class=\"section-title font-weight-bold mb-5\">Featured Projects</h2>\n            <div class=\"row\">\n                <div class=\"col-md-6 mb-5\" *ngFor=\"let project of projects\">\n                    <div class=\"card project-card\">\n                        <div class=\"row no-gutters\">\n                            <div class=\"col-lg-4 card-img-holder\">\n                                <img src=\"assets/img/project/{{project.previewImageName}}\" class=\"card-img\" alt=\"image\">\n                            </div>\n                            <div class=\"col-lg-8\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\"><a routerLink=\"/project/{{project.identifier}}\" class=\"theme-link\">{{project.name}}</a></h5>\n                                    <p class=\"card-text\">{{project.shortDescription}}</p>\n                                    <p class=\"card-text\"><small class=\"text-muted\">Client: {{project.clientName}}</small></p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"link-mask\">\n                            <a class=\"link-mask-link\" routerLink=\"/project/{{project.identifier}}\"></a>\n                            <div class=\"link-mask-text\">\n                                <a class=\"btn btn-secondary\" routerLink=\"/project/{{project.identifier}}\">\n                                    <fa-icon class=\"pr-2\" [icon]=\"['fas', 'eye']\"></fa-icon>View Details\n                                </a>\n                            </div>\n                        </div><!--//link-mask-->\n                    </div><!--//card-->\n                </div><!--//col-->\n            </div><!--//row-->\n            <div class=\"text-center py-3\"><a routerLink=\"/portfolio\" class=\"btn btn-primary\"><fa-icon class=\"pr-2\" [icon]=\"['fas', 'arrow-alt-circle-right']\"></fa-icon>View Portfolio</a></div>\n            \n        </div><!--//container-->\n    </section><!--//featured-section-->\n    \n    <div class=\"container\"><hr></div>\n    \n    <app-footer></app-footer>\n    \n</div><!--//main-wrapper-->");

/***/ }),

/***/ "60hS":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.css */ "2Ic5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/json/projects.json */ "ukQh");
var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/projects.json */ "ukQh", 1);





let AboutComponent = class AboutComponent {
    constructor() {
        this.projects = _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_4__;
        this.projectRows = this.projects.length / 2;
    }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutComponent);



/***/ }),

/***/ "8ifR":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "/30a");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "60hS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavbarComponent = class NavbarComponent {
    constructor() {
        this.show = false;
        this.collapsed = true;
        this.collapsing = false;
        this.willBeCollapsing = false;
    }
    ngOnInit() {
    }
    toggleCollapse() {
        this.willBeCollapsing = true;
        setTimeout(() => {
            this.show = false;
            setTimeout(() => {
                this.collapsing = true;
                setTimeout(() => {
                    this.collapsed = !this.collapsed;
                    this.collapsing = false;
                    this.willBeCollapsing = false;
                    this.show = !this.collapsed;
                }, 100);
            }, 30);
        }, 30);
    }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

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
const environment = {
    production: true
};


/***/ }),

/***/ "B8Bu":
/*!*****************************************************!*\
  !*** ./src/app/about/contact/contact.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "84zG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "iHck");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "O55F");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "O5Gd");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-details/project-details.component */ "b1Aa");









const routes = [
    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'portfolio', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'project/:id', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailsComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
let AboutModule = class AboutModule {
};
AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
            _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
            _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailsComponent"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], AboutModule);



/***/ }),

/***/ "ICN9":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/projects/projects.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n    <section class=\"cta-section theme-bg-light py-5\">\n        <div class=\"container text-center single-col-max-width\">\n            <h2 class=\"heading\">Portfolio</h2>\n            <div class=\"intro\">\n            <p>Welcome to my online portfolio. This list is always growing as projects are completed. I'm taking on freelance work at the moment. Want some help building your software?</p>\n            \n            </div>\n            <a class=\"btn btn-primary\" routerLink=\"/contact\"><fa-icon class=\"pr-2\" [icon]=\"['fas', 'paper-plane']\"></fa-icon>Hire Me</a>\n            \n            \n        </div><!--//container-->\n    </section>\n    <section class=\"projects-list px-3 py-5 p-md-5\">\n        <div class=\"container\">\n            <div class=\"text-center\">\n                <ul id=\"filters\" class=\"filters mb-5 mx-auto pl-0\">\n                    <li class=\"type active mb-3 mb-lg-0\" data-filter=\"*\">All</li>\n                </ul><!--//filters-->\n            </div>\n            \n            <div class=\"project-cards row isotope\">\n                <div *ngFor=\"let project of projects\" class=\"isotope-item col-md-6 mb-5 mobileapp frontend\">\n                    <div class=\"card project-card\">\n                        <div class=\"row no-gutters\">\n                            <div class=\"col-lg-4 card-img-holder\">\n                                <img src=\"../../../assets/img/project/{{project.previewImageName}}\" class=\"card-img\" alt=\"image\">\n                            </div>\n                            <div class=\"col-lg-8\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\"><a href=\"project.html\" class=\"theme-link\">{{project.name}}</a></h5>\n                                    <p class=\"card-text\">{{project.shortDescription}}</p>\n                                    <p class=\"card-text\"><small class=\"text-muted\">Client: {{project.clientName}}</small></p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"link-mask\">\n                            <a class=\"link-mask-link\" href=\"project.html\"></a>\n                            <div class=\"link-mask-text\">\n                                <a class=\"btn btn-secondary\" routerLink=\"/project/{{project.identifier}}\">\n                                    <fa-icon class=\"mr-2\" [icon]=\"['fas', 'eye']\"></fa-icon>View Details\n                                </a>\n                            </div>\n                        </div><!--//link-mask-->\n                    </div><!--//card-->\n                </div><!--//col-->\n            </div><!--//row-->\n        </div>\n    </section>\n    \n    <app-footer></app-footer>\n\n</div><!--//main-wrapper-->\n");

/***/ }),

/***/ "KUXG":
/*!***************************************************!*\
  !*** ./src/app/about/resume/resume.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "MBKz":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/contact/contact.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n    <section class=\"cta-section theme-bg-light py-5\">\n        <div class=\"container text-center single-col-max-width\">\n            <h2 class=\"heading\">Contact</h2>\n            <div class=\"intro\">\n                <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a href=\"aidanmelendez@gmail.com\">AidanMelendez@gmail.com</a></p>\n                <p>Want to get connected? Follow me on the social channels below.</p>\n                <ul class=\"list-inline mb-0\">\n                    <li class=\"list-inline-item mb-3\"><a class=\"twitter\" href=\"#\"><i class=\"fab fa-twitter fa-fw fa-lg\"></i></a></li>\n                    \n                    <li class=\"list-inline-item mb-3\"><a class=\"linkedin\" href=\"#\"><i class=\"fab fa-linkedin-in fa-fw fa-lg\"></i></a></li>\n                    <li class=\"list-inline-item mb-3\"><a class=\"github\" href=\"#\"><i class=\"fab fa-github-alt fa-fw fa-lg\"></i></a></li>\n                    <li class=\"list-inline-item\"><a class=\"instagram\" href=\"#\"><i class=\"fab fa-instagram fa-fw fa-lg\"></i></a></li>\n                    <li class=\"list-inline-item mb-3\"><a class=\"stack-overflow\" href=\"#\"><i class=\"fab fa-stack-overflow fa-fw fa-lg\"></i></a></li>\n                    <li class=\"list-inline-item mb-3\"><a class=\"medium\" href=\"#\"><i class=\"fab fa-medium-m fa-fw fa-lg\"></i></a></li>\n                    <li class=\"list-inline-item mb-3\"><a class=\"codepen\" href=\"#\"><i class=\"fab fa-codepen fa-fw fa-lg\"></i></a></li>\n                    \n                    \n                    <!--<li class=\"list-inline-item mb-3\"><a class=\"facebook\" href=\"#\"><i class=\"fab fa-facebook-f fa-fw fa-lg\"></i></a></li>-->\n                    \n                    \n                </ul><!--//social-list-->\n            </div>\n        </div><!--//container-->\n    </section>\n    <section class=\"contact-section px-3 py-5 p-md-5\">\n        <div class=\"container\">\n            <form id=\"contact-form\" [formGroup]=\"contactForm\" class=\"contact-form col-lg-8 mx-lg-auto\">\n                <h3 class=\"text-center mb-3\">Get In Touch</h3>\n                <div class=\"form-row\">                                                           \n                    <div class=\"form-group col-md-6\">\n                        <label class=\"sr-only\" for=\"cname\">Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Name\" minlength=\"2\" required=\"\" aria-required=\"true\">\n                    </div>                    \n                    <div class=\"form-group col-md-6\">\n                        <label class=\"sr-only\" for=\"cemail\">Email</label>\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required=\"\" aria-required=\"true\">\n                    </div>\n                    <!-- <div class=\"form-group col-12\">\n                        <select id=\"services\" class=\"custom-select\" name=\"services\">\n                            <option selected>Select a service package you're interested in...</option>\n                            <option value=\"basic\">Basic</option>\n                            <option value=\"standard\">Standard</option>\n                            <option value=\"premium\">Premium</option>\n                            <option value=\"not sure\">Not sure</option>\n                        </select>\n                        <small class=\"form-text text-muted pt-1\"><i class=\"fas fa-info-circle mr-2 text-primary\"></i>Want to know what's included in each package? Check the <a href=\"services.html\" target=\"_blank\">Services &amp; Pricing</a> page.</small>\n                    </div> -->\n                    <div class=\"form-group col-12\">\n                        <label class=\"sr-only\" for=\"cmessage\">Your message</label>\n                        <textarea class=\"form-control\" formControlName=\"message\" placeholder=\"Enter your message\" rows=\"10\" required=\"\" aria-required=\"true\"></textarea>\n                    </div>\n                     <div class=\"form-group col-12\">\n                        <button type=\"submit\" class=\"btn btn-block btn-primary py-2\" (click)=\"onSubmit()\">Send Now</button>\n                    </div>                           \n                </div><!--//form-row-->\n            </form>\n        </div><!--//container-->\n    </section>\n    \n    <footer class=\"footer text-center py-4\">\n        <small class=\"copyright\">&copy; {{currentYear}} Aidan Melendez. All Rights Reserved.</small>\n    </footer>\n\n</div><!--//main-wrapper-->\n");

/***/ }),

/***/ "O55F":
/*!**************************************************!*\
  !*** ./src/app/about/resume/resume.component.ts ***!
  \**************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resume.component.html */ "WRU0");
/* harmony import */ var _resume_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.component.css */ "KUXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ResumeComponent = class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeComponent.ctorParameters = () => [];
ResumeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resume',
        template: _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resume_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResumeComponent);



/***/ }),

/***/ "O5Gd":
/*!******************************************************!*\
  !*** ./src/app/about/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projects.component.html */ "ICN9");
/* harmony import */ var _projects_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component.css */ "he5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/json/projects.json */ "ukQh");
var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/projects.json */ "ukQh", 1);





let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.projects = _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_4__;
    }
    ngOnInit() {
    }
};
ProjectsComponent.ctorParameters = () => [];
ProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectsComponent);



/***/ }),

/***/ "OPFr":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer text-center py-4\">\n    <small class=\"copyright\">&copy; {{currentYear}} Aidan Melendez. All Rights Reserved.</small>\n</footer>");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");










var faIcons = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLaptopCode"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBriefcase"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBlog"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelopeOpenText"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedinIn"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithubAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faJsSquare"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReact"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAngular"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faVuejs"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHtml5"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCss3"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSass"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLess"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faDatabase"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCode"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEye"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowAltCircleRight"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlobe"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelopeSquare"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGithubAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAward"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLink"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faIndustry"]
];
let SharedModule = class SharedModule {
    constructor(library) {
        this.library = library;
        library.addIcons(...faIcons);
    }
};
SharedModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"] }
];
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]
        ]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Portfolio';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "WRU0":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/resume/resume.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n    <section class=\"cta-section theme-bg-light py-5\">\n        <div class=\"container text-center single-col-max-width\">\n            <h2 class=\"heading mb-3\">Online Resume</h2>\n            <!-- <a class=\"btn btn-primary\"\n                href=\"https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/\"\n                target=\"_blank\"><i class=\"fas fa-file-pdf mr-2\"></i>Download PDF Version</a> -->\n        </div>\n        <!--//container-->\n    </section>\n    <div class=\"container px-3 px-lg-5\">\n        <article class=\"resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg\">\n\n            <div class=\"resume-header\">\n                <div class=\"row align-items-center\">\n                    <div class=\"resume-title col-12 col-md-6 col-lg-8 col-xl-9\">\n                        <h2 class=\"resume-name mb-0 text-uppercase\">Aidan Melendez</h2>\n                        <div class=\"resume-tagline mb-3 mb-md-0\">Software Developer</div>\n                    </div>\n                    <!--//resume-title-->\n                    <div class=\"resume-contact col-12 col-md-6 col-lg-4 col-xl-3\">\n                        <ul class=\"list-unstyled mb-0\">\n                            <li class=\"mb-2\"><fa-icon class=\"px-2\" [icon]=\"['fab', 'github-alt']\"></fa-icon><a class=\"resume-link\"\n                                    href=\"https://github.com/CoreAidan\">https://github.com/CoreAidan</a></li>\n                            <li class=\"mb-2\"><fa-icon class=\"px-2\" [icon]=\"['fas', 'envelope-square']\"></fa-icon><a\n                                    class=\"resume-link\" href=\"mailto:aidanmelendez@gmail.com\">aidanmelendez@gmail.com</a></li>\n                            <li class=\"mb-2\"><fa-icon class=\"px-2\" [icon]=\"['fas', 'globe']\"></fa-icon><a class=\"resume-link\"\n                                    href=\"#\">www.aidanmelendez.com</a></li>\n                            <li class=\"mb-0\"><fa-icon class=\"px-2\" [icon]=\"['fas', 'map-marker-alt']\"></fa-icon>New Jersey</li>\n                        </ul>\n                    </div>\n                    <!--//resume-contact-->\n                </div>\n                <!--//row-->\n\n            </div>\n            <!--//resume-header-->\n            <hr>\n            <div class=\"resume-intro py-3\">\n                <div class=\"media flex-column flex-md-row align-items-center\">\n                    <div class=\"media-body text-left\">\n                        <p class=\"mb-0\">Extraordinarily focused and reliable full-stack software \n                            developer, with solid capabilities in C#, JavaScript and SQL.  \n                            Modern front-end skills using Angular and familiarity with modern \n                            software processes, including Agile and GIT based workflows.  \n                            Excellent work ethic and passionate about learning.</p>\n                    </div>\n                    <!--//media-body-->\n                </div>\n            </div>\n            <!--//resume-intro-->\n            <hr>\n            <div class=\"resume-body\">\n                <div class=\"row\">\n                    <div class=\"resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5\">\n                        <section class=\"work-section py-3\">\n                            <h3 class=\"text-uppercase resume-section-heading mb-4\">Work Experiences</h3>\n                            <div class=\"item mb-3\">\n                                <div class=\"item-heading row align-items-center mb-2\">\n                                    <h4 class=\"item-title col-12 col-md-6 mb-2 mb-md-0\">Software Developer</h4>\n                                    <div class=\"item-meta col-12 col-md-6 text-muted text-left text-md-right\">\n                                        Custom House, Philadelphia, PA | Oct 2018 - Present</div>\n\n                                </div>\n                                <div class=\"item-content\">\n                                    <p>Worked on small to large scale projects working in an agile-based process utilizing \n                                        Visual studio Dev Ops to manage user stories and subtasks in the sprint. Using Github \n                                        for GIT repo and code management. Using Visual Studio 2019 and publishing profiles to \n                                        manage API and DB deployments to Azure App Services</p>\n                                    <ul class=\"resume-list\">\n                                        <li>Developed REST based Azure APIs using C#, Web API, ASP.NET Core, Entity Framework and Microsoft SQL 2018.</li>\n                                        <li>Using Xamarin to develop for both iOS and Android. Used MVVM design patterns to design applications. \n                                            Using Appcenter and TestFlight to manage application builds for different stages in development.</li>\n                                        <li>Using AngularJS and Angular 8 to design and develop responsive web applications. Worked with Angular to \n                                            create components, Services, pipes and directives. Updated legacy AngularJS applications by \n                                            building new components in Angular 8 and typescript.</li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <!--//item-->\n                            <div class=\"item mb-3\">\n                                <div class=\"item-heading row align-items-center mb-2\">\n                                    <h4 class=\"item-title col-12 col-md-6 mb-2 mb-md-0\">Software Developer\n                                    </h4>\n                                    <div class=\"item-meta col-12 col-md-6 text-muted text-left text-md-right\">\n                                        Compute2020, Cherry Hill, NJ | July 2018 - Oct 2018</div>\n\n                                </div>\n                                <div class=\"item-content\">\n                                    <p>Designing, developing and deploying back-end features of a new social-media \n                                        based web platform on Azure. Developed REST based Azure APIs using C#, \n                                        Web API, ASP.NET MVC, Entity Framework and Microsoft SQL 2016.</p>\n                                    <ul class=\"resume-list\">\n                                        <li>Using Microsoft SQL Server Management Studio and Entity Framework to construct \n                                            the data layers for the backend APIs. Using Database-first approach with EF and \n                                            using LINQ to retrieve and filter the data.</li>\n                                        <li>Working in an agile-based process utilizing Atlassian JIRA to manage user stories \n                                            and subtasks in the sprint. Using Bitbucket for GIT repo and code management.  \n                                            Using Visual Studio 2017 and publish profiles to manage API deployment to Azure App Services.</li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </section>\n                        <!--//work-section-->\n\n\n                        <section class=\"project-section py-3\">\n                            <h3 class=\"text-uppercase resume-section-heading mb-4\">Projects</h3>\n                            <div class=\"item mb-3\">\n                                <div class=\"item-heading row align-items-center mb-2\">\n                                    <h4 class=\"item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0\">Personal Website\n                                    </h4>\n                                    <div class=\"item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right\">\n                                        <a href=\"https://github.com/CoreAidan/CoreAidan.github.io\" class=\"theme-link\">Open Source</a></div>\n\n                                </div>\n                                <div class=\"item-content\">\n                                    <p>A personal web portfolio developed with Anuglar. Utilizing Angular, \n                                        TypeScript and Reuseable components and Responsive UI.</p>\n                                </div>\n                            </div>\n                            <div class=\"item mb-3\">\n                                <div class=\"item-heading row align-items-center mb-2\">\n                                    <h4 class=\"item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0\">Smart Rockets\n                                    </h4>\n                                    <div class=\"item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right\">\n                                        <a href=\"https://github.com/CoreAidan/CoreAidan.github.io\" class=\"theme-link\">Open Source</a></div>\n\n                                </div>\n                                <div class=\"item-content\">\n                                    <p>Made using the Godot Game engine. Uses a Genetic Learning Algorithm to train rocket objects to reach a selected target.</p>\n                                </div>\n                            </div>\n                        </section>\n                        <!--//project-section-->\n                    </div>\n                    <!--//resume-main-->\n                    <aside class=\"resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4\">\n                        <section class=\"skills-section py-3\">\n                            <h3 class=\"text-uppercase resume-section-heading mb-4\">Skills</h3>\n                            <div class=\"item\">\n                                <h4 class=\"item-title\">Technical</h4>\n                                <ul class=\"list-unstyled resume-skills-list\">\n                                    <li class=\"mb-2\">.NET C#, JavaScript</li>\n                                    <li class=\"mb-2\">HTML5, CSS3, Bootstrap 4</li>\n                                    <li class=\"mb-2\">Angular, TypeScript</li>\n                                    <li class=\"mb-2\">SQLite, MSSQL</li>\n                                    <li class=\"mb-2\">Xamarin Native</li>\n                                    <li class=\"mb-2\">Azure App Services, Azure Blob Storage</li>\n                                    <li>Github, Agile SCRUM, CI, Azure DevOps</li>\n                                </ul>\n                            </div>\n                            <!--//item-->\n                            <div class=\"item\">\n                                <h4 class=\"item-title\">Professional</h4>\n                                <ul class=\"list-unstyled resume-skills-list\">\n                                    <li class=\"mb-2\">Effective communication</li>\n                                    <li class=\"mb-2\">Team player</li>\n                                    <li class=\"mb-2\">Strong problem solver</li>\n                                    <li>Good time management</li>\n                                </ul>\n                            </div>\n                            <!--//item-->\n                        </section>\n                        <!--//skills-section-->\n                        <section class=\"education-section py-3\">\n                            <h3 class=\"text-uppercase resume-section-heading mb-4\">Education</h3>\n                            <ul class=\"list-unstyled resume-education-list\">\n                                <li class=\"mb-3\">\n                                    <div class=\"resume-degree font-weight-bold\">Studied Computer Science</div>\n                                    <div class=\"resume-degree-org text-muted\">Camden County College</div>\n                                    <div class=\"resume-degree-time text-muted\">2014 - 2015</div>\n                                </li>\n                            </ul>\n                        </section>\n                        <!--//education-section-->\n                        <!--//certificates-section-->\n                        <section class=\"skills-section py-3\">\n                            <h3 class=\"text-uppercase resume-section-heading mb-4\">Interests</h3>\n                            <ul class=\"list-unstyled resume-interests-list mb-0\">\n                                <li class=\"mb-2\">Game Development</li>\n                                <li class=\"mb-2\">Illustrations</li>\n                                <li class=\"mb-2\">Physical Fitness</li>\n                            </ul>\n                        </section>\n                        <!--//certificates-section-->\n\n                    </aside>\n                    <!--//resume-aside-->\n                </div>\n                <!--//row-->\n            </div>\n            <!--//resume-body-->\n            <hr>\n            <div class=\"resume-footer text-center\">\n                <ul class=\"resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted\">\n                    <li class=\"list-inline-item mb-lg-0 mr-3\"><a class=\"resume-link\" href=\"https://github.com/CoreAidan\"><i\n                                class=\"fab fa-github-square fa-2x mr-2\" data-fa-transform=\"down-4\"></i><span\n                                class=\"d-none d-lg-inline-block text-muted\">github.com/coreaidan</span></a></li>\n                    <li class=\"list-inline-item mb-lg-0 mr-3\"><a class=\"resume-link\" href=\"https://www.linkedin.com/in/aidan-melendez-2a8894132\"><i\n                                class=\"fab fa-linkedin fa-2x mr-2\" data-fa-transform=\"down-4\"></i><span\n                                class=\"d-none d-lg-inline-block text-muted\">linkedin.com/in/aidan-melendez-2a8894132</span></a></li>\n                </ul>\n            </div>\n            <!--//resume-footer-->\n        </article>\n\n    </div>\n    <!--//container-->\n\n    <app-footer></app-footer>\n\n</div>\n<!--//main-wrapper-->");

/***/ }),

/***/ "YAC1":
/*!*********************************************************************!*\
  !*** ./src/app/about/project-details/project-details.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.module */ "FQ1g");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "OPFr");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "gnZF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "b1Aa":
/*!********************************************************************!*\
  !*** ./src/app/about/project-details/project-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-details.component.html */ "5OVo");
/* harmony import */ var _project_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-details.component.css */ "YAC1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/json/projects.json */ "ukQh");
var _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/json/projects.json */ "ukQh", 1);






let ProjectDetailsComponent = class ProjectDetailsComponent {
    constructor(route) {
        this.route = route;
        this.projects = _assets_json_projects_json__WEBPACK_IMPORTED_MODULE_5__;
        this.paramSubscription = this.route.params.subscribe(params => {
            this.currentProjectIdentifier = params['id'];
            this.project = this.projects.find(x => x.identifier == this.currentProjectIdentifier);
        });
    }
    ngOnInit() {
    }
};
ProjectDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProjectDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project-details',
        template: _raw_loader_project_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectDetailsComponent);



/***/ }),

/***/ "gnZF":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "he5p":
/*!*******************************************************!*\
  !*** ./src/app/about/projects/projects.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "iHck":
/*!****************************************************!*\
  !*** ./src/app/about/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "MBKz");
/* harmony import */ var _contact_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.css */ "B8Bu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let ContactComponent = class ContactComponent {
    constructor(fb) {
        this.fb = fb;
        this.toEmail = "aidanmelendez@gmail.com";
        this.contactForm = this.fb.group({
            name: [null],
            email: [null],
            message: [null],
        });
    }
    onSubmit() {
        var _a, _b, _c;
        if (this.contactForm.invalid) {
            (_a = this.contactForm.get('name')) === null || _a === void 0 ? void 0 : _a.markAsTouched();
            (_b = this.contactForm.get('email')) === null || _b === void 0 ? void 0 : _b.markAsTouched();
            (_c = this.contactForm.get('message')) === null || _c === void 0 ? void 0 : _c.markAsTouched();
            return;
        }
        let message = Object.assign({}, this.contactForm.value);
        var mail = document.createElement("a");
        mail.href = `mailto:${this.toEmail}?subject=Full Stack Developer opportunity&body=${message}`;
        mail.click();
    }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactComponent);



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "ukQh":
/*!***************************************!*\
  !*** ./src/assets/json/projects.json ***!
  \***************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"identifier\":\"3DADB0A9-72E1-4A39-A060-A555375697A3\",\"name\":\"Personal Website\",\"clientName\":\"Myself\",\"website\":\"http://aidanmelendez.com\",\"intro\":\"This website is used to help showcase my skills on personal and professional works. as well as be an example of what I can do.\",\"shortDescription\":\"A personal web portfolio developed with Angular. Utilizing Angular, TypeScript and Reuseable components and Responsive UI.\",\"requirements\":[\"Have an about me page.\",\"Showcase my projects.\",\"Preview my techinal skills and work experiences.\"],\"previewImageName\":\"website-project.jpg\",\"overview\":\"This project is a personal on going web portfolio developed with Angular. Utilizing Angular, TypeScript and Reuseable components and Responsive UI. This project will be constantly updated with my latest works, both professional and personal. This is to better showcase my skills as well as be an example of what I am capable of. This portfolio website went through multiple iterations, eventually landing to what you see today.\",\"challenge\":\"While it is important to create an easy way to showcase and present yourself professionally to prospective employers. I was also looking for a way to better document the journey as I build and complete projects and furtur my skill. Leading to the creating of this website. So my problem was simple, how can I create a project that would document and show my talent online? I good ole portfolio website!\",\"solution\":\"My first thought was just to use a flexible tool for building quick websites. Something like wix or squarespace. And the idea completely flew over my head, That I could just make it from scrach since well you know... I'm a web developer. After signing up on squared space and looking at some of the layouts. I thought to myself. I could easially make like this myself and the journey began. I initially though of making the site in just plain HTML3, CSS3 and Javascript, but I figured if I'm going to make a site to showcase my work with my tech stack it would make a great oppertunity to just use my tech stack. Who would have ever though of that. Well after deciding what technology to use and finally getting started I ended up at a cross road of if I wanted to create the styling completely from scratch or find a nice looking theme. I ended up going with the ladder as ever though I knew I could make something from the ground up. It would have been too time comsuming and what something I could put together quickly and still look nice. The theme I ended up going with and purchasing what the theme 'DevCard' by 3rd Wave Media. It was nice and simple and I could make and break up the site into an SPA in Angular that could make it fast and responsive.\",\"results\":\"After a few hours I managed to create a simple but nice looking site that solved my inital problem of having no place to showcase my work in Angular and TypeScript and get it hosted live to the world. I will be continuing to add new project as they are completed. If you want to see what im currently working on you can take a look at my github page.\"},{\"identifier\":\"7DE8E0E9-EFE4-4B03-9EDA-610E4389DC49\",\"name\":\"Smart Rockets\",\"clientName\":\"Myself\",\"website\":\"https://itch.io\",\"intro\":\"I implement a genetic algorithm from scratch and create \\\"smart rockets\\\".  The rockets evolve to find the \\\"best\\\" path to a target, moving around obstacles.\",\"shortDescription\":\"Made using the Godot Game engine. Uses a Genetic Learning Algorithm to train rocket objects to reach a selected target.\",\"requirements\":[\"Build a genetic algorithm from scatch.\",\"Have a visual representation for the genetic algorithm.\",\"Able to viewed on the web.\"],\"previewImageName\":\"smart-rockets.gif\",\"overview\":\"I implement a genetic algorithm from scratch and create \\\"smart rockets\\\".  The rockets evolve to find the \\\"best\\\" path to a target, moving around obstacles.\",\"challenge\":\"I wanted to learning about simple machine learning technique and decided to start with implementing a genetic learning algorithm.\",\"solution\":\"After a bit of research on genetic learning algorithms I stumbled on a video tutorial by \\\"The Coding Train\\\" on YouTube. Although he was teaching the project using the p5.js framework I figured I would be able to get the same success in the tutorial utilizing the Godot Game Engine. Which is able to export for the web. Which was very important for mean since I would want to showcase the project on the porfolio in the future. \",\"results\":\"The project was a great success I ended up learning alot about how simple genetic rules implied I could could drive simple object to perform complex tasks. A solution derived on there own with no out side help.\"}]");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: "enabled"
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.49c347e7b954efd23018.js.map