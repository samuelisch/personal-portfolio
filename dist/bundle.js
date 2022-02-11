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

const hoverTexts = document.querySelectorAll('.hover');
const project = document.querySelectorAll('.project');
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
hoverTexts.forEach(text => text.addEventListener('mouseover', showImg));
hoverTexts.forEach(text => text.addEventListener('mouseout', hideImg));
project.forEach(project => project.addEventListener('mouseenter', hideGif));
project.forEach(project => project.addEventListener('mouseleave', showGif));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQjtBQUUxQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXRELFNBQVMsT0FBTyxDQUFDLENBQVE7SUFDdkIsTUFBTSxNQUFNLEdBQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QixJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sR0FBRyxHQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7S0FDOUI7QUFDSCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsQ0FBUTtJQUN2QixNQUFNLE1BQU0sR0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzVCLElBQUksTUFBTSxFQUFFO1FBQ1YsTUFBTSxHQUFHLEdBQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25FLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUM1QjtBQUNILENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxDQUFRO0lBQ3ZCLE1BQU0sTUFBTSxHQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUIsTUFBTSxVQUFVLEdBQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDM0QsSUFBSSxVQUFVLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDeEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLENBQVE7SUFDdkIsTUFBTSxNQUFNLEdBQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QixNQUFNLFVBQVUsR0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUMzRCxJQUFJLFVBQVUsRUFBRTtRQUNkLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDakM7QUFDSCxDQUFDO0FBRUQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN4RSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9zYXNzL21haW4uc2Nzcz9jZjc2Iiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2Fzcy9tYWluLnNjc3NcIjtcblxuY29uc3QgaG92ZXJUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlcicpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG5cbmZ1bmN0aW9uIHNob3dJbWcoZTogRXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0OmFueSA9IGUudGFyZ2V0O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgY29uc3QgaW1nOmFueSA9ICh0YXJnZXQucGFyZW50Tm9kZSkucXVlcnlTZWxlY3RvcignLmludGVyZXN0LWltZycpO1xuICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUltZyhlOiBFdmVudCkge1xuICBjb25zdCB0YXJnZXQ6YW55ID0gZS50YXJnZXQ7XG4gIGlmICh0YXJnZXQpIHtcbiAgICBjb25zdCBpbWc6YW55ID0gKHRhcmdldC5wYXJlbnROb2RlKS5xdWVyeVNlbGVjdG9yKCcuaW50ZXJlc3QtaW1nJyk7XG4gICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0dpZihlOiBFdmVudCkge1xuICBjb25zdCB0YXJnZXQ6YW55ID0gZS50YXJnZXQ7XG4gIGNvbnN0IGdpZkVsZW1lbnQ6YW55ID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWdpZicpXG4gIGlmIChnaWZFbGVtZW50KSB7XG4gICAgZ2lmRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGdpZkVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxMDAlJztcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlR2lmKGU6IEV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldDphbnkgPSBlLnRhcmdldDtcbiAgY29uc3QgZ2lmRWxlbWVudDphbnkgPSB0YXJnZXQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZ2lmJylcbiAgaWYgKGdpZkVsZW1lbnQpIHtcbiAgICBnaWZFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBnaWZFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCUnO1xuICB9XG59XG5cbmhvdmVyVGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHRleHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd0ltZykpO1xuaG92ZXJUZXh0cy5mb3JFYWNoKHRleHQgPT4gdGV4dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhpZGVJbWcpKTtcbnByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZGVHaWYpKTtcbnByb2plY3QuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHNob3dHaWYpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=