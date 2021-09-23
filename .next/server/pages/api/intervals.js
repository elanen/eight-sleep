"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/intervals";
exports.ids = ["pages/api/intervals"];
exports.modules = {

/***/ "./pages/api/intervals.ts":
/*!********************************!*\
  !*** ./pages/api/intervals.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst endpoints = [\"https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json\", \"https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json\", \"https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json\"];\n\nconst fetchIntervals = async (req, res) => {\n  try {\n    const result = endpoints.map(async url => {\n      try {\n        const data = await (await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url)).data.intervals;\n        return data;\n      } catch (e) {\n        return undefined;\n      }\n    });\n    const resolved = await Promise.all(result);\n    return res.status(200).json(resolved);\n  } catch (e) {\n    return res.status(500);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchIntervals);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW50ZXJ2YWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBR0EsTUFBTUMsU0FBUyxHQUFHLENBQ2hCLHVGQURnQixFQUVoQix1RkFGZ0IsRUFHaEIsdUZBSGdCLENBQWxCOztBQU1BLE1BQU1DLGNBQWMsR0FBRyxPQUNyQkMsR0FEcUIsRUFFckJDLEdBRnFCLEtBR2xCO0FBQ0gsTUFBSTtBQUNGLFVBQU1DLE1BQU0sR0FBR0osU0FBUyxDQUFDSyxHQUFWLENBQWMsTUFBT0MsR0FBUCxJQUFlO0FBQzFDLFVBQUk7QUFDRixjQUFNQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU1SLGdEQUFBLENBQVVPLEdBQVYsQ0FBUCxFQUF1QkMsSUFBdkIsQ0FBNEJFLFNBQS9DO0FBQ0EsZUFBT0YsSUFBUDtBQUNELE9BSEQsQ0FHRSxPQUFPRyxDQUFQLEVBQVU7QUFDVixlQUFPQyxTQUFQO0FBQ0Q7QUFDRixLQVBjLENBQWY7QUFTQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLE1BQVosQ0FBdkI7QUFDQSxXQUFPRCxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosUUFBckIsQ0FBUDtBQUNELEdBWkQsQ0FZRSxPQUFPRixDQUFQLEVBQVU7QUFDVixXQUFPUCxHQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLENBQVA7QUFDRDtBQUNGLENBbkJEOztBQXFCQSxpRUFBZWQsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2VpZ2h0LWRhdGEtdmlzdWFsaXphdGlvbi8uL3BhZ2VzL2FwaS9pbnRlcnZhbHMudHM/NDVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgSW50ZXJ2YWwgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJ2YWxzXCI7XG5cbmNvbnN0IGVuZHBvaW50cyA9IFtcbiAgXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZWlnaHQtcHVibGljL2NoYWxsZW5nZS8yMjI4YjUzMGUwNTU0MDFmODFiYTM3YjUxZmY2ZjgxZC5qc29uXCIsXG4gIFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2VpZ2h0LXB1YmxpYy9jaGFsbGVuZ2UvZDZjMTM1NWUzODE5NDEzOWI4ZDBjODcwYmFmODYzNjUuanNvblwiLFxuICBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9laWdodC1wdWJsaWMvY2hhbGxlbmdlL2Y5YmYyMjlmZDE5ZTRjNzk5ZThjMTlhOTYyZDczNDQ5Lmpzb25cIixcbl07XG5cbmNvbnN0IGZldGNoSW50ZXJ2YWxzID0gYXN5bmMgKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTwoSW50ZXJ2YWwgfCB1bmRlZmluZWQpW10+XG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBlbmRwb2ludHMubWFwKGFzeW5jICh1cmwpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAoYXdhaXQgYXhpb3MuZ2V0KHVybCkpLmRhdGEuaW50ZXJ2YWxzO1xuICAgICAgICByZXR1cm4gZGF0YSBhcyBJbnRlcnZhbDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc29sdmVkID0gYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzb2x2ZWQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hJbnRlcnZhbHM7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJlbmRwb2ludHMiLCJmZXRjaEludGVydmFscyIsInJlcSIsInJlcyIsInJlc3VsdCIsIm1hcCIsInVybCIsImRhdGEiLCJnZXQiLCJpbnRlcnZhbHMiLCJlIiwidW5kZWZpbmVkIiwicmVzb2x2ZWQiLCJQcm9taXNlIiwiYWxsIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/intervals.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/intervals.ts"));
module.exports = __webpack_exports__;

})();