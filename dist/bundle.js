/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/service.ts":
/*!************************!*\
  !*** ./src/service.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseUrl = 'http://localhost:3002';
const post = (mail) => __awaiter(void 0, void 0, void 0, function* () {
    //const response = await axios.post(baseUrl, mail);
    //return response.data
    return mail;
});
const service = {
    post
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (service);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./src/service.ts");


const hoverTexts = document.querySelectorAll('.hover');
const project = document.querySelectorAll('.project');
const sections = document.querySelectorAll('section[id]');
const form = document.querySelector('.contact-form');
function showImg(e) {
    const target = e.target;
    if (target) {
        const img = (target.parentNode).querySelector('.interest-img');
        img.style.display = 'inline';
    }
}
function hideImg(e) {
    const target = e.target;
    if (target) {
        const img = (target.parentNode).querySelector('.interest-img');
        img.style.display = 'none';
    }
}
function showGif(e) {
    const target = e.target;
    const gifElement = target.querySelector('.project-gif');
    if (gifElement) {
        gifElement.style.visibility = 'visible';
        gifElement.style.opacity = '100%';
    }
}
function hideGif(e) {
    const target = e.target;
    const gifElement = target.querySelector('.project-gif');
    if (gifElement) {
        gifElement.style.visibility = 'hidden';
        gifElement.style.opacity = '0%';
    }
}
//highlighting nav element when content is shown
function navHighlighter() {
    //current scroll pos
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const currentSection = current;
        const sectionHeight = currentSection.offsetHeight;
        const sectionTop = currentSection.offsetTop - 500;
        const sectionId = current.getAttribute('id');
        //compare
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.add('current');
        }
        else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`).classList.remove('current');
        }
    });
}
function handleFormSubmit(e) {
    e.preventDefault();
    const target = e.target;
    if (target) {
        const name = document.querySelector('.input-name');
        const email = document.querySelector('.input-email');
        const message = document.querySelector('.input-message');
        const content = { name, email, message };
        console.log(_service__WEBPACK_IMPORTED_MODULE_1__["default"].post(content));
    }
}
//listen for scroll
window.addEventListener('scroll', navHighlighter);
hoverTexts.forEach(text => text.addEventListener('mouseover', showImg));
hoverTexts.forEach(text => text.addEventListener('mouseout', hideImg));
project.forEach(project => project.addEventListener('mouseenter', hideGif));
project.forEach(project => project.addEventListener('mouseleave', showGif));
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleFormSubmit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0gsQ0FBQztBQUVELG1CQUFtQjtBQUNuQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ2xELFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDeEUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzVFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3Nhc3MvbWFpbi5zY3NzP2NmNzYiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAyJ1xuXG5jb25zdCBwb3N0ID0gYXN5bmMgKG1haWw6IG9iamVjdCkgPT4ge1xuICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChiYXNlVXJsLCBtYWlsKTtcbiAgLy9yZXR1cm4gcmVzcG9uc2UuZGF0YVxuICByZXR1cm4gbWFpbDtcbn1cblxuY29uc3Qgc2VydmljZSA9IHtcbiAgcG9zdFxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zYXNzL21haW4uc2Nzc1wiO1xuaW1wb3J0IHNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY29uc3QgaG92ZXJUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlcicpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb25baWRdJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtZm9ybScpO1xuXG5mdW5jdGlvbiBzaG93SW1nKGU6IEV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldDphbnkgPSBlLnRhcmdldDtcbiAgaWYgKHRhcmdldCkge1xuICAgIGNvbnN0IGltZzphbnkgPSAodGFyZ2V0LnBhcmVudE5vZGUpLnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmVzdC1pbWcnKTtcbiAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVJbWcoZTogRXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0OmFueSA9IGUudGFyZ2V0O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgY29uc3QgaW1nOmFueSA9ICh0YXJnZXQucGFyZW50Tm9kZSkucXVlcnlTZWxlY3RvcignLmludGVyZXN0LWltZycpO1xuICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dHaWYoZTogRXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0OmFueSA9IGUudGFyZ2V0O1xuICBjb25zdCBnaWZFbGVtZW50OmFueSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1naWYnKVxuICBpZiAoZ2lmRWxlbWVudCkge1xuICAgIGdpZkVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBnaWZFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMTAwJSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUdpZihlOiBFdmVudCkge1xuICBjb25zdCB0YXJnZXQ6YW55ID0gZS50YXJnZXQ7XG4gIGNvbnN0IGdpZkVsZW1lbnQ6YW55ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpXG4gIGlmIChnaWZFbGVtZW50KSB7XG4gICAgZ2lmRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZ2lmRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAlJztcbiAgfVxufVxuXG4vL2hpZ2hsaWdodGluZyBuYXYgZWxlbWVudCB3aGVuIGNvbnRlbnQgaXMgc2hvd25cbmZ1bmN0aW9uIG5hdkhpZ2hsaWdodGVyKCkge1xuICAvL2N1cnJlbnQgc2Nyb2xsIHBvc1xuICBsZXQgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICBzZWN0aW9ucy5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uOmFueSA9ICg8RWxlbWVudD5jdXJyZW50KVxuICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPSBjdXJyZW50U2VjdGlvbi5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgc2VjdGlvblRvcCA9IGN1cnJlbnRTZWN0aW9uLm9mZnNldFRvcCAtIDUwMDtcbiAgICBjb25zdCBzZWN0aW9uSWQgPSBjdXJyZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcblxuICAgIC8vY29tcGFyZVxuICAgIGlmIChzY3JvbGxZID4gc2VjdGlvblRvcCAmJiBzY3JvbGxZIDw9IHNlY3Rpb25Ub3AgKyBzZWN0aW9uSGVpZ2h0KSB7XG4gICAgICAoPEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdi1saW5rW2hyZWYqPVwiJHtzZWN0aW9uSWR9XCJdYCkpLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKDxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYXYtbGlua1tocmVmKj1cIiR7c2VjdGlvbklkfVwiXWApKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGU6IEV2ZW50KSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LW5hbWUnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1lbWFpbCcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbWVzc2FnZScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH07XG4gICAgY29uc29sZS5sb2coc2VydmljZS5wb3N0KGNvbnRlbnQpKTtcbiAgfVxufVxuXG4vL2xpc3RlbiBmb3Igc2Nyb2xsXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbmF2SGlnaGxpZ2h0ZXIpO1xuaG92ZXJUZXh0cy5mb3JFYWNoKHRleHQgPT4gdGV4dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93SW1nKSk7XG5ob3ZlclRleHRzLmZvckVhY2godGV4dCA9PiB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGlkZUltZykpO1xucHJvamVjdC5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGlkZUdpZikpO1xucHJvamVjdC5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgc2hvd0dpZikpO1xuZm9ybT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9