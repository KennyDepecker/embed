/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/browser.ts":
/*!************************!*\
  !*** ./src/browser.ts ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar initializers_1 = __webpack_require__(/*! ./initializers */ \"./src/initializers/index.ts\");\r\nvar lib = __importStar(__webpack_require__(/*! ./index */ \"./src/index.ts\"));\r\nfunction loadEmbedElements(forceReload) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    (0, initializers_1.initializePopovers)(forceReload);\r\n    (0, initializers_1.initializePopups)(forceReload);\r\n    (0, initializers_1.initializeSidetabs)(forceReload);\r\n    (0, initializers_1.initializeSliders)(forceReload);\r\n    (0, initializers_1.initializeWidgets)(forceReload);\r\n}\r\nvar reload = function () { return loadEmbedElements(true); };\r\nvar load = function () { return loadEmbedElements(false); };\r\nmodule.exports = __assign(__assign({}, lib), { load: load, reload: reload });\r\ndocument.addEventListener('DOMContentLoaded', load, false);\r\nif (document.readyState === 'interactive' || document.readyState === 'complete') {\r\n    load();\r\n}\r\n\n\n//# sourceURL=webpack://tf/./src/browser.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.FORM_BASE_URL = exports.POPUP_SIZE = exports.SLIDER_WIDTH = exports.SLIDER_POSITION = exports.SIDETAB_ATTRIBUTE = exports.WIDGET_ATTRIBUTE = exports.SLIDER_ATTRIBUTE = exports.POPUP_ATTRIBUTE = exports.POPOVER_ATTRIBUTE = void 0;\r\nexports.POPOVER_ATTRIBUTE = 'data-tf-popover';\r\nexports.POPUP_ATTRIBUTE = 'data-tf-popup';\r\nexports.SLIDER_ATTRIBUTE = 'data-tf-slider';\r\nexports.WIDGET_ATTRIBUTE = 'data-tf-widget';\r\nexports.SIDETAB_ATTRIBUTE = 'data-tf-sidetab';\r\nexports.SLIDER_POSITION = 'right';\r\nexports.SLIDER_WIDTH = 800;\r\nexports.POPUP_SIZE = 100;\r\nexports.FORM_BASE_URL = 'https://form.typeform.com';\r\n\n\n//# sourceURL=webpack://tf/./src/constants.ts?");

/***/ }),

/***/ "./src/factories/create-popover/create-popover.ts":
/*!********************************************************!*\
  !*** ./src/factories/create-popover/create-popover.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createPopover = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\r\nvar notification_days_1 = __webpack_require__(/*! ./notification-days */ \"./src/factories/create-popover/notification-days.ts\");\r\nvar replaceIcon = function (iconToReplace, newIcon) {\r\n    var element = iconToReplace.parentNode;\r\n    if (element) {\r\n        element.removeChild(iconToReplace);\r\n        element.appendChild(newIcon);\r\n    }\r\n};\r\nvar buildPopover = function (width, height) {\r\n    var popover = document.createElement('div');\r\n    popover.className = 'tf-v1-popover';\r\n    popover.dataset.testid = 'tf-v1-popover';\r\n    return (0, utils_1.setElementSize)(popover, { width: width, height: height });\r\n};\r\nvar buildCloseIcon = function (element, className) {\r\n    if (element === void 0) { element = 'div'; }\r\n    if (className === void 0) { className = 'tf-v1-popover-button-icon'; }\r\n    var icon = document.createElement(element);\r\n    icon.className = \"\".concat(className, \" tf-v1-close-icon\");\r\n    icon.innerHTML = '&times;';\r\n    icon.dataset.testid = className;\r\n    return icon;\r\n};\r\nvar buildWrapper = function () {\r\n    var wrapper = document.createElement('div');\r\n    wrapper.className = 'tf-v1-popover-wrapper';\r\n    wrapper.dataset.testid = 'tf-v1-popover-wrapper';\r\n    return wrapper;\r\n};\r\nvar buildSpinner = function () {\r\n    var spinner = document.createElement('div');\r\n    spinner.className = 'tf-v1-spinner';\r\n    var icon = document.createElement('div');\r\n    icon.className = 'tf-v1-popover-button-icon';\r\n    icon.dataset.testid = 'spinner-icon';\r\n    icon.append(spinner);\r\n    return icon;\r\n};\r\nvar buildIcon = function (customIcon, color) {\r\n    var fillColor = (0, utils_1.getTextColor)(color);\r\n    var triggerIcon = document.createElement('div');\r\n    triggerIcon.className = 'tf-v1-popover-button-icon';\r\n    var svgIcon = \"<svg class=\\\"default\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <path d=\\\"M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z\\\" fill=\\\"\".concat(fillColor, \"\\\"></path>\\n  </svg>\");\r\n    var isUrlIcon = customIcon === null || customIcon === void 0 ? void 0 : customIcon.startsWith('http');\r\n    triggerIcon.innerHTML = isUrlIcon\r\n        ? \"<img alt='popover trigger icon button' src='\".concat(customIcon, \"'/>\")\r\n        : customIcon !== null && customIcon !== void 0 ? customIcon : svgIcon;\r\n    triggerIcon.dataset.testid = 'default-icon';\r\n    return triggerIcon;\r\n};\r\nvar buildTriggerButton = function (color) {\r\n    var textColor = (0, utils_1.getTextColor)(color);\r\n    var button = document.createElement('button');\r\n    button.className = 'tf-v1-popover-button';\r\n    button.dataset.testid = 'tf-v1-popover-button';\r\n    button.style.backgroundColor = color;\r\n    button.style.color = textColor;\r\n    return button;\r\n};\r\nvar buildTooltip = function (message, hide) {\r\n    var icon = document.createElement('span');\r\n    icon.className = 'tf-v1-popover-tooltip-close';\r\n    icon.dataset.testid = 'tf-v1-popover-tooltip-close';\r\n    icon.innerHTML = '&times;';\r\n    icon.onclick = hide;\r\n    var textContainer = document.createElement('div');\r\n    textContainer.className = 'tf-v1-popover-tooltip-text';\r\n    textContainer.innerHTML = message;\r\n    var container = document.createElement('div');\r\n    container.className = 'tf-v1-popover-tooltip';\r\n    container.dataset.testid = 'tf-v1-popover-tooltip';\r\n    container.appendChild(textContainer);\r\n    container.appendChild(icon);\r\n    return container;\r\n};\r\nvar defaultOptions = {\r\n    buttonColor: '#3a7685',\r\n};\r\nvar createPopover = function (formId, userOptions) {\r\n    if (userOptions === void 0) { userOptions = {}; }\r\n    var options = __assign(__assign({}, defaultOptions), userOptions);\r\n    var _a = (0, utils_1.createIframe)(formId, 'popover', options), iframe = _a.iframe, embedId = _a.embedId, refresh = _a.refresh;\r\n    var openHandler;\r\n    var popover = buildPopover(options.width, options.height);\r\n    var wrapper = buildWrapper();\r\n    var icon = buildIcon(options.customIcon, options.buttonColor || defaultOptions.buttonColor);\r\n    var spinner = buildSpinner();\r\n    var closeIcon = buildCloseIcon();\r\n    var closeModal = buildCloseIcon('a', 'tf-v1-popover-close');\r\n    var button = buildTriggerButton(options.buttonColor || defaultOptions.buttonColor);\r\n    var container = options.container || document.body;\r\n    container.append(popover);\r\n    wrapper.append(iframe);\r\n    popover.append(button);\r\n    popover.append(closeModal);\r\n    button.append(icon);\r\n    var tooltip;\r\n    var notificationDot;\r\n    var hideTooltip = function () {\r\n        if (tooltip && tooltip.parentNode) {\r\n            tooltip.classList.add('closing');\r\n            setTimeout(function () {\r\n                (0, utils_1.unmountElement)(tooltip);\r\n            }, 250);\r\n        }\r\n    };\r\n    var hideNotificationDot = function () {\r\n        if (notificationDot) {\r\n            notificationDot.classList.add('closing');\r\n            if (options.notificationDays && !options.enableSandbox) {\r\n                (0, notification_days_1.saveNotificationDotHideUntilTime)(formId, options.notificationDays);\r\n            }\r\n            setTimeout(function () {\r\n                (0, utils_1.unmountElement)(notificationDot);\r\n            }, 250);\r\n        }\r\n    };\r\n    if (options.tooltip && options.tooltip.length > 0) {\r\n        tooltip = buildTooltip(options.tooltip, hideTooltip);\r\n        popover.append(tooltip);\r\n    }\r\n    if (options.notificationDays && (options.enableSandbox || (0, notification_days_1.canBuildNotificationDot)(formId))) {\r\n        notificationDot = (0, notification_days_1.buildNotificationDot)();\r\n        button.append(notificationDot);\r\n    }\r\n    iframe.onload = function () {\r\n        popover.classList.add('open');\r\n        wrapper.style.opacity = '1';\r\n        closeModal.style.opacity = '1';\r\n        replaceIcon(spinner, closeIcon);\r\n        (0, utils_1.addCustomKeyboardListener)(close);\r\n    };\r\n    var autoResize = (0, utils_1.makeAutoResize)(popover);\r\n    var open = function () {\r\n        if (!(0, utils_1.isOpen)(wrapper)) {\r\n            hideTooltip();\r\n            hideNotificationDot();\r\n            autoResize();\r\n            window.addEventListener('resize', autoResize);\r\n            setTimeout(function () {\r\n                if (!(0, utils_1.isInPage)(wrapper)) {\r\n                    popover.append(wrapper);\r\n                    replaceIcon(icon, spinner);\r\n                    wrapper.style.opacity = '0';\r\n                    closeModal.style.opacity = '0';\r\n                }\r\n                else {\r\n                    wrapper.style.opacity = '0';\r\n                    closeModal.style.opacity = '0';\r\n                    wrapper.style.display = 'flex';\r\n                    setTimeout(function () {\r\n                        popover.classList.add('open');\r\n                        wrapper.style.opacity = '1';\r\n                        closeModal.style.opacity = '1';\r\n                    });\r\n                    replaceIcon(icon, closeIcon);\r\n                }\r\n            });\r\n        }\r\n    };\r\n    var close = function () {\r\n        var _a;\r\n        if ((0, utils_1.isOpen)(popover)) {\r\n            (_a = userOptions.onClose) === null || _a === void 0 ? void 0 : _a.call(userOptions);\r\n            setTimeout(function () {\r\n                if (options.keepSession) {\r\n                    wrapper.style.display = 'none';\r\n                }\r\n                else {\r\n                    (0, utils_1.unmountElement)(wrapper);\r\n                }\r\n                popover.classList.remove('open');\r\n                replaceIcon(closeIcon, icon);\r\n            }, 250);\r\n        }\r\n    };\r\n    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);\r\n    var toggle = function () {\r\n        (0, utils_1.isOpen)(wrapper) ? close() : open();\r\n    };\r\n    var unmount = function () {\r\n        (0, utils_1.unmountElement)(popover);\r\n        window.removeEventListener('resize', autoResize);\r\n        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {\r\n            openHandler.remove();\r\n        }\r\n    };\r\n    button.onclick = toggle;\r\n    closeModal.onclick = close;\r\n    if (options.open && !(0, utils_1.isOpen)(wrapper)) {\r\n        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);\r\n    }\r\n    return {\r\n        open: open,\r\n        close: close,\r\n        toggle: toggle,\r\n        refresh: refresh,\r\n        unmount: unmount,\r\n    };\r\n};\r\nexports.createPopover = createPopover;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popover/create-popover.ts?");

/***/ }),

/***/ "./src/factories/create-popover/index.ts":
/*!***********************************************!*\
  !*** ./src/factories/create-popover/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./create-popover */ \"./src/factories/create-popover/create-popover.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./popover-options */ \"./src/factories/create-popover/popover-options.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popover/index.ts?");

/***/ }),

/***/ "./src/factories/create-popover/notification-days.ts":
/*!***********************************************************!*\
  !*** ./src/factories/create-popover/notification-days.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.buildNotificationDot = exports.canBuildNotificationDot = exports.saveNotificationDotHideUntilTime = void 0;\r\nvar LOCAL_STORAGE_NOTIFICATION_DATA = 'tfNotificationData';\r\nvar getLocalStorageData = function () {\r\n    var data = localStorage.getItem(LOCAL_STORAGE_NOTIFICATION_DATA);\r\n    return data ? JSON.parse(data) : {};\r\n};\r\nvar saveToLocalStorage = function (data) {\r\n    data && localStorage.setItem(LOCAL_STORAGE_NOTIFICATION_DATA, JSON.stringify(data));\r\n};\r\nvar getNotificationDotHideUntilTime = function (formId) {\r\n    var _a;\r\n    var data = getLocalStorageData();\r\n    return ((_a = data[formId]) === null || _a === void 0 ? void 0 : _a.hideUntilTime) || 0;\r\n};\r\nvar saveNotificationDotHideUntilTime = function (formId, days) {\r\n    var _a;\r\n    var hideUntilTime = new Date();\r\n    hideUntilTime.setDate(hideUntilTime.getDate() + days);\r\n    saveToLocalStorage(__assign(__assign({}, getLocalStorageData()), (_a = {}, _a[formId] = {\r\n        hideUntilTime: hideUntilTime.getTime(),\r\n    }, _a)));\r\n};\r\nexports.saveNotificationDotHideUntilTime = saveNotificationDotHideUntilTime;\r\nvar clearNotificationDotHideUntilTime = function (formId) {\r\n    var data = getLocalStorageData();\r\n    delete data[formId];\r\n    saveToLocalStorage(data);\r\n};\r\nvar canBuildNotificationDot = function (formId) {\r\n    var hideUntilTime = getNotificationDotHideUntilTime(formId);\r\n    var now = new Date().getTime();\r\n    if (now > hideUntilTime) {\r\n        if (hideUntilTime) {\r\n            clearNotificationDotHideUntilTime(formId);\r\n        }\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\nexports.canBuildNotificationDot = canBuildNotificationDot;\r\nvar buildNotificationDot = function () {\r\n    var dot = document.createElement('span');\r\n    dot.className = 'tf-v1-popover-unread-dot';\r\n    dot.dataset.testid = 'tf-v1-popover-unread-dot';\r\n    return dot;\r\n};\r\nexports.buildNotificationDot = buildNotificationDot;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popover/notification-days.ts?");

/***/ }),

/***/ "./src/factories/create-popover/popover-options.ts":
/*!*********************************************************!*\
  !*** ./src/factories/create-popover/popover-options.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popover/popover-options.ts?");

/***/ }),

/***/ "./src/factories/create-popup/create-popup.ts":
/*!****************************************************!*\
  !*** ./src/factories/create-popup/create-popup.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createPopup = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.ts\");\r\nvar utils_2 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\r\nvar buildPopup = function () {\r\n    var popup = document.createElement('div');\r\n    popup.className = 'tf-v1-popup';\r\n    popup.dataset.testid = 'tf-v1-popup';\r\n    popup.style.opacity = '0';\r\n    return popup;\r\n};\r\nvar buildSpinner = function () {\r\n    var spinner = document.createElement('div');\r\n    spinner.className = 'tf-v1-spinner';\r\n    return spinner;\r\n};\r\nvar buildWrapper = function (width, height, size) {\r\n    var wrapper = document.createElement('div');\r\n    wrapper.className = 'tf-v1-iframe-wrapper';\r\n    wrapper.style.opacity = '0';\r\n    if ((0, utils_1.isDefined)(width) && (0, utils_1.isDefined)(height)) {\r\n        return (0, utils_1.setElementSize)(wrapper, { width: width, height: height });\r\n    }\r\n    wrapper.style.width = \"calc(\".concat(size, \"% - 80px)\");\r\n    wrapper.style.height = \"calc(\".concat(size, \"% - 80px)\");\r\n    return wrapper;\r\n};\r\nvar buildCloseButton = function (close) {\r\n    var closeButton = document.createElement('a');\r\n    closeButton.className = 'tf-v1-close tf-v1-close-icon';\r\n    closeButton.innerHTML = '&times;';\r\n    closeButton.onclick = close;\r\n    return closeButton;\r\n};\r\nvar createPopup = function (formId, userOptions) {\r\n    if (userOptions === void 0) { userOptions = {}; }\r\n    if (!(0, utils_1.hasDom)()) {\r\n        return {\r\n            open: function () { },\r\n            close: function () { },\r\n            toggle: function () { },\r\n            refresh: function () { },\r\n            unmount: function () { },\r\n        };\r\n    }\r\n    var width = userOptions.width, height = userOptions.height, _a = userOptions.size, size = _a === void 0 ? constants_1.POPUP_SIZE : _a, onClose = userOptions.onClose, options = __rest(userOptions, [\"width\", \"height\", \"size\", \"onClose\"]);\r\n    var _b = (0, utils_1.createIframe)(formId, 'popup', options), iframe = _b.iframe, embedId = _b.embedId, refresh = _b.refresh;\r\n    var scrollInitialState = document.body.style.overflow;\r\n    var openHandler;\r\n    var popup = buildPopup();\r\n    var spinner = buildSpinner();\r\n    var wrapper = buildWrapper(width, height, size);\r\n    wrapper.append(iframe);\r\n    popup.append(spinner);\r\n    popup.append(wrapper);\r\n    var container = options.container || document.body;\r\n    iframe.onload = function () {\r\n        wrapper.style.opacity = '1';\r\n        setTimeout(function () {\r\n            spinner.style.display = 'none';\r\n        }, 250);\r\n        (0, utils_1.addCustomKeyboardListener)(close);\r\n    };\r\n    var autoResize = (0, utils_2.makeAutoResize)(popup);\r\n    var open = function () {\r\n        if (!(0, utils_2.isOpen)(popup)) {\r\n            if (!(0, utils_2.isInPage)(popup)) {\r\n                spinner.style.display = 'block';\r\n                container.append(popup);\r\n            }\r\n            else {\r\n                popup.style.display = 'flex';\r\n            }\r\n            document.body.style.overflow = 'hidden';\r\n            autoResize();\r\n            window.addEventListener('resize', autoResize);\r\n            setTimeout(function () {\r\n                popup.style.opacity = '1';\r\n            });\r\n        }\r\n    };\r\n    var close = function () {\r\n        if ((0, utils_2.isOpen)(popup)) {\r\n            onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            popup.style.opacity = '0';\r\n            document.body.style.overflow = scrollInitialState;\r\n            setTimeout(function () {\r\n                if (options.keepSession) {\r\n                    popup.style.display = 'none';\r\n                }\r\n                else {\r\n                    unmount();\r\n                }\r\n            }, 250);\r\n        }\r\n    };\r\n    wrapper.append(buildCloseButton(close));\r\n    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);\r\n    var toggle = function () {\r\n        (0, utils_2.isOpen)(popup) ? close() : open();\r\n    };\r\n    if (options.open && !(0, utils_2.isOpen)(popup)) {\r\n        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);\r\n    }\r\n    var unmount = function () {\r\n        (0, utils_1.unmountElement)(popup);\r\n        window.removeEventListener('resize', autoResize);\r\n        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {\r\n            openHandler.remove();\r\n        }\r\n    };\r\n    return {\r\n        open: open,\r\n        close: close,\r\n        toggle: toggle,\r\n        refresh: refresh,\r\n        unmount: unmount,\r\n    };\r\n};\r\nexports.createPopup = createPopup;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popup/create-popup.ts?");

/***/ }),

/***/ "./src/factories/create-popup/index.ts":
/*!*********************************************!*\
  !*** ./src/factories/create-popup/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./create-popup */ \"./src/factories/create-popup/create-popup.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./popup-options */ \"./src/factories/create-popup/popup-options.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popup/index.ts?");

/***/ }),

/***/ "./src/factories/create-popup/popup-options.ts":
/*!*****************************************************!*\
  !*** ./src/factories/create-popup/popup-options.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-popup/popup-options.ts?");

/***/ }),

/***/ "./src/factories/create-sidetab/create-sidetab.ts":
/*!********************************************************!*\
  !*** ./src/factories/create-sidetab/create-sidetab.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createSidetab = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\r\nvar defaultOptions = {\r\n    buttonColor: '#3a7685',\r\n    buttonText: 'Launch me',\r\n};\r\nvar buildSidetab = function (width, height) {\r\n    var sidetab = document.createElement('div');\r\n    sidetab.className = 'tf-v1-sidetab';\r\n    sidetab.dataset.testid = 'tf-v1-sidetab';\r\n    return (0, utils_1.setElementSize)(sidetab, { width: width, height: height });\r\n};\r\nvar buildWrapper = function () {\r\n    var wrapper = document.createElement('div');\r\n    wrapper.className = 'tf-v1-sidetab-wrapper';\r\n    wrapper.dataset.testid = 'tf-v1-sidetab-wrapper';\r\n    return wrapper;\r\n};\r\nvar buildSpinner = function () {\r\n    var spinner = document.createElement('div');\r\n    spinner.className = 'tf-v1-spinner';\r\n    var icon = document.createElement('div');\r\n    icon.className = 'tf-v1-sidetab-button-icon';\r\n    icon.dataset.testid = 'spinner-icon';\r\n    icon.append(spinner);\r\n    return icon;\r\n};\r\nvar buildTriggerButton = function (color) {\r\n    var textColor = (0, utils_1.getTextColor)(color);\r\n    var button = document.createElement('button');\r\n    button.className = 'tf-v1-sidetab-button';\r\n    button.style.backgroundColor = color;\r\n    button.style.color = textColor;\r\n    return button;\r\n};\r\nvar buildTriggerButtonText = function (text) {\r\n    var buttonText = document.createElement('span');\r\n    buttonText.className = 'tf-v1-sidetab-button-text';\r\n    buttonText.innerHTML = text;\r\n    return buttonText;\r\n};\r\nvar buildIcon = function (customIcon, color) {\r\n    var fillColor = (0, utils_1.getTextColor)(color);\r\n    var triggerIcon = document.createElement('div');\r\n    triggerIcon.className = 'tf-v1-sidetab-button-icon';\r\n    var svgIcon = \"<svg width=\\\"32\\\" height=\\\"32\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <path d=\\\"M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z\\\" fill=\\\"\".concat(fillColor, \"\\\"></path>\\n  </svg>\");\r\n    var isUrlIcon = customIcon === null || customIcon === void 0 ? void 0 : customIcon.startsWith('http');\r\n    triggerIcon.innerHTML = isUrlIcon\r\n        ? \"<img alt='popover trigger icon button' src='\".concat(customIcon, \"'/>\")\r\n        : customIcon !== null && customIcon !== void 0 ? customIcon : svgIcon;\r\n    triggerIcon.dataset.testid = 'default-icon';\r\n    return triggerIcon;\r\n};\r\nvar buildCloseIcon = function (element, className) {\r\n    if (element === void 0) { element = 'div'; }\r\n    if (className === void 0) { className = 'tf-v1-sidetab-button-icon'; }\r\n    var closeButton = document.createElement(element);\r\n    closeButton.className = \"\".concat(className, \" tf-v1-close-icon\");\r\n    closeButton.innerHTML = '&times;';\r\n    closeButton.dataset.testid = className;\r\n    return closeButton;\r\n};\r\nvar replaceElementChild = function (childToReplace, newChild) {\r\n    var element = childToReplace.parentNode;\r\n    if (element) {\r\n        element.removeChild(childToReplace);\r\n        element.appendChild(newChild);\r\n    }\r\n};\r\nvar createSidetab = function (formId, userOptions) {\r\n    if (userOptions === void 0) { userOptions = {}; }\r\n    var options = __assign(__assign({}, defaultOptions), userOptions);\r\n    var _a = (0, utils_1.createIframe)(formId, 'side-tab', options), iframe = _a.iframe, embedId = _a.embedId, refresh = _a.refresh;\r\n    var sidetab = buildSidetab(options.width, options.height);\r\n    var wrapper = buildWrapper();\r\n    var spinner = buildSpinner();\r\n    var button = buildTriggerButton(options.buttonColor || defaultOptions.buttonColor);\r\n    var buttonText = buildTriggerButtonText(options.buttonText || defaultOptions.buttonText);\r\n    var icon = buildIcon(options.customIcon, options.buttonColor || defaultOptions.buttonColor);\r\n    var closeIcon = buildCloseIcon();\r\n    var closeModal = buildCloseIcon('a', 'tf-v1-sidetab-close');\r\n    var container = options.container || document.body;\r\n    var openHandler;\r\n    container.append(sidetab);\r\n    wrapper.append(iframe);\r\n    sidetab.append(button);\r\n    sidetab.append(closeModal);\r\n    button.append(icon);\r\n    button.append(buttonText);\r\n    setTimeout(function () {\r\n        sidetab.classList.add('ready');\r\n    }, 250);\r\n    iframe.onload = function () {\r\n        sidetab.classList.add('open');\r\n        replaceElementChild(spinner, closeIcon);\r\n        (0, utils_1.addCustomKeyboardListener)(close);\r\n    };\r\n    var autoResize = (0, utils_1.makeAutoResize)(sidetab);\r\n    var open = function () {\r\n        if (!(0, utils_1.isOpen)(wrapper)) {\r\n            autoResize();\r\n            window.addEventListener('resize', autoResize);\r\n            if (!(0, utils_1.isInPage)(wrapper)) {\r\n                sidetab.append(wrapper);\r\n                replaceElementChild(icon, spinner);\r\n            }\r\n            else {\r\n                wrapper.style.display = 'flex';\r\n                sidetab.classList.add('open');\r\n                replaceElementChild(icon, closeIcon);\r\n            }\r\n        }\r\n    };\r\n    var close = function () {\r\n        var _a;\r\n        if ((0, utils_1.isOpen)(wrapper)) {\r\n            (_a = options.onClose) === null || _a === void 0 ? void 0 : _a.call(options);\r\n            sidetab.classList.remove('open');\r\n            setTimeout(function () {\r\n                if (options.keepSession) {\r\n                    wrapper.style.display = 'none';\r\n                }\r\n                else {\r\n                    (0, utils_1.unmountElement)(wrapper);\r\n                }\r\n                replaceElementChild(closeIcon, icon);\r\n            }, 250);\r\n        }\r\n    };\r\n    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);\r\n    var toggle = function () {\r\n        (0, utils_1.isOpen)(wrapper) ? close() : open();\r\n    };\r\n    button.onclick = toggle;\r\n    closeModal.onclick = close;\r\n    if (options.open && !(0, utils_1.isOpen)(wrapper)) {\r\n        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);\r\n    }\r\n    var unmount = function () {\r\n        (0, utils_1.unmountElement)(sidetab);\r\n        window.removeEventListener('resize', autoResize);\r\n        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {\r\n            openHandler.remove();\r\n        }\r\n    };\r\n    return {\r\n        open: open,\r\n        close: close,\r\n        toggle: toggle,\r\n        refresh: refresh,\r\n        unmount: unmount,\r\n    };\r\n};\r\nexports.createSidetab = createSidetab;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-sidetab/create-sidetab.ts?");

/***/ }),

/***/ "./src/factories/create-sidetab/index.ts":
/*!***********************************************!*\
  !*** ./src/factories/create-sidetab/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./create-sidetab */ \"./src/factories/create-sidetab/create-sidetab.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./sidetab-options */ \"./src/factories/create-sidetab/sidetab-options.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-sidetab/index.ts?");

/***/ }),

/***/ "./src/factories/create-sidetab/sidetab-options.ts":
/*!*********************************************************!*\
  !*** ./src/factories/create-sidetab/sidetab-options.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-sidetab/sidetab-options.ts?");

/***/ }),

/***/ "./src/factories/create-slider/create-slider.ts":
/*!******************************************************!*\
  !*** ./src/factories/create-slider/create-slider.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createSlider = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.ts\");\r\nvar buildSlider = function (position) {\r\n    var slider = document.createElement('div');\r\n    slider.className = \"tf-v1-slider \".concat(position);\r\n    slider.dataset.testid = 'tf-v1-slider';\r\n    slider.style.opacity = '0';\r\n    return slider;\r\n};\r\nvar buildSpinner = function () {\r\n    var spinner = document.createElement('div');\r\n    spinner.className = 'tf-v1-spinner';\r\n    return spinner;\r\n};\r\nvar buildWrapper = function (position, width) {\r\n    var wrapper = document.createElement('div');\r\n    wrapper.className = 'tf-v1-iframe-wrapper';\r\n    wrapper.style[position] = '-100%';\r\n    return (0, utils_1.setElementSize)(wrapper, { width: width });\r\n};\r\nvar buildCloseButton = function (close) {\r\n    var closeButton = document.createElement('a');\r\n    closeButton.className = 'tf-v1-close tf-v1-close-icon';\r\n    closeButton.innerHTML = '&times;';\r\n    closeButton.onclick = close;\r\n    return closeButton;\r\n};\r\nvar createSlider = function (formId, userOptions) {\r\n    if (userOptions === void 0) { userOptions = {}; }\r\n    if (!(0, utils_1.hasDom)()) {\r\n        return {\r\n            open: function () { },\r\n            close: function () { },\r\n            toggle: function () { },\r\n            refresh: function () { },\r\n            unmount: function () { },\r\n        };\r\n    }\r\n    var _a = userOptions.position, position = _a === void 0 ? constants_1.SLIDER_POSITION : _a, _b = userOptions.width, width = _b === void 0 ? constants_1.SLIDER_WIDTH : _b, onClose = userOptions.onClose, options = __rest(userOptions, [\"position\", \"width\", \"onClose\"]);\r\n    var _c = (0, utils_1.createIframe)(formId, 'slider', options), iframe = _c.iframe, embedId = _c.embedId, refresh = _c.refresh;\r\n    var scrollInitialState = document.body.style.overflow;\r\n    var openHandler;\r\n    var slider = buildSlider(position);\r\n    var spinner = buildSpinner();\r\n    var wrapper = buildWrapper(position, width);\r\n    wrapper.append(iframe);\r\n    slider.append(spinner);\r\n    slider.append(wrapper);\r\n    var container = options.container || document.body;\r\n    iframe.onload = function () {\r\n        wrapper.style[position] = '0';\r\n        setTimeout(function () {\r\n            spinner.style.display = 'none';\r\n        }, 500);\r\n        (0, utils_1.addCustomKeyboardListener)(close);\r\n    };\r\n    var autoResize = (0, utils_1.makeAutoResize)(slider);\r\n    var open = function () {\r\n        if (!(0, utils_1.isOpen)(slider)) {\r\n            autoResize();\r\n            window.addEventListener('resize', autoResize);\r\n            if (!(0, utils_1.isInPage)(slider)) {\r\n                container.append(slider);\r\n                spinner.style.display = 'block';\r\n            }\r\n            else {\r\n                slider.style.display = 'flex';\r\n                setTimeout(function () {\r\n                    wrapper.style[position] = '0';\r\n                });\r\n            }\r\n            document.body.style.overflow = 'hidden';\r\n            setTimeout(function () {\r\n                slider.style.opacity = '1';\r\n            });\r\n        }\r\n    };\r\n    var close = function () {\r\n        if ((0, utils_1.isOpen)(slider)) {\r\n            onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            slider.style.opacity = '0';\r\n            wrapper.style[position] = '-100%';\r\n            document.body.style.overflow = scrollInitialState;\r\n            setTimeout(function () {\r\n                if (options.keepSession) {\r\n                    slider.style.display = 'none';\r\n                }\r\n                else {\r\n                    unmount();\r\n                }\r\n            }, 500);\r\n        }\r\n    };\r\n    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);\r\n    var toggle = function () {\r\n        (0, utils_1.isOpen)(slider) ? close() : open();\r\n    };\r\n    wrapper.append(buildCloseButton(close));\r\n    if (options.open && !(0, utils_1.isOpen)(slider)) {\r\n        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);\r\n    }\r\n    var unmount = function () {\r\n        (0, utils_1.unmountElement)(slider);\r\n        window.removeEventListener('resize', autoResize);\r\n        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {\r\n            openHandler.remove();\r\n        }\r\n    };\r\n    return {\r\n        open: open,\r\n        close: close,\r\n        toggle: toggle,\r\n        refresh: refresh,\r\n        unmount: unmount,\r\n    };\r\n};\r\nexports.createSlider = createSlider;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-slider/create-slider.ts?");

/***/ }),

/***/ "./src/factories/create-slider/index.ts":
/*!**********************************************!*\
  !*** ./src/factories/create-slider/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./create-slider */ \"./src/factories/create-slider/create-slider.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./slider-options */ \"./src/factories/create-slider/slider-options.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-slider/index.ts?");

/***/ }),

/***/ "./src/factories/create-slider/slider-options.ts":
/*!*******************************************************!*\
  !*** ./src/factories/create-slider/slider-options.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-slider/slider-options.ts?");

/***/ }),

/***/ "./src/factories/create-widget/create-widget.ts":
/*!******************************************************!*\
  !*** ./src/factories/create-widget/create-widget.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createWidget = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\r\nvar get_form_event_handler_1 = __webpack_require__(/*! ../../utils/create-iframe/get-form-event-handler */ \"./src/utils/create-iframe/get-form-event-handler.ts\");\r\nvar elements_1 = __webpack_require__(/*! ./elements */ \"./src/factories/create-widget/elements/index.ts\");\r\nvar buildCloseButton = function () {\r\n    var closeButton = document.createElement('a');\r\n    closeButton.className = 'tf-v1-widget-close tf-v1-close-icon';\r\n    closeButton.innerHTML = '&times;';\r\n    return closeButton;\r\n};\r\nvar createWidget = function (formId, options) {\r\n    if (!(0, utils_1.hasDom)()) {\r\n        return {\r\n            refresh: function () { },\r\n            unmount: function () { },\r\n        };\r\n    }\r\n    var widgetOptions = options;\r\n    if (!options.inlineOnMobile && (options.forceTouch || (0, utils_1.isFullscreen)())) {\r\n        widgetOptions.enableFullscreen = true;\r\n        widgetOptions.forceTouch = true;\r\n    }\r\n    var _a = (0, utils_1.createIframe)(formId, 'widget', widgetOptions), embedId = _a.embedId, iframe = _a.iframe, refresh = _a.refresh;\r\n    var widget = (0, elements_1.buildWidget)(iframe, options.width, options.height);\r\n    if (widgetOptions.autoResize) {\r\n        var _b = typeof widgetOptions.autoResize === 'string'\r\n            ? widgetOptions.autoResize.split(',').map(function (value) { return parseInt(value); })\r\n            : [], minHeight_1 = _b[0], maxHeight_1 = _b[1];\r\n        window.addEventListener('message', (0, get_form_event_handler_1.getFormHeightChangedHandler)(embedId, function (data) {\r\n            var containerHeight = Math.max(data.height + 20, minHeight_1 || 0);\r\n            if (maxHeight_1) {\r\n                containerHeight = Math.min(containerHeight, maxHeight_1);\r\n            }\r\n            options.container.style.height = \"\".concat(containerHeight, \"px\");\r\n        }));\r\n    }\r\n    var appendWidget = function () { return options.container.append(widget); };\r\n    options.container.innerHTML = '';\r\n    if (options.lazy) {\r\n        (0, utils_1.lazyInitialize)(options.container, appendWidget);\r\n    }\r\n    else {\r\n        appendWidget();\r\n    }\r\n    if (widgetOptions.enableFullscreen) {\r\n        var container_1 = options.container;\r\n        var autoResize_1 = (0, utils_1.makeAutoResize)(container_1);\r\n        var originalHeight_1 = container_1.style.height;\r\n        var openPopup = function () {\r\n            container_1.classList.add('tf-v1-widget-fullscreen');\r\n            autoResize_1();\r\n            window.addEventListener('resize', autoResize_1);\r\n        };\r\n        window.addEventListener('message', (0, get_form_event_handler_1.getWelcomeScreenHiddenHandler)(embedId, openPopup));\r\n        var closeButton_1 = buildCloseButton();\r\n        var close_1 = function () {\r\n            var _a;\r\n            window.removeEventListener('resize', autoResize_1);\r\n            container_1.style.height = originalHeight_1;\r\n            (_a = options.onClose) === null || _a === void 0 ? void 0 : _a.call(options);\r\n            container_1.classList.remove('tf-v1-widget-fullscreen');\r\n            if (options.keepSession) {\r\n                var overlay_1 = document.createElement('div');\r\n                overlay_1.className = 'tf-v1-widget-iframe-overlay';\r\n                overlay_1.onclick = function () {\r\n                    container_1.classList.add('tf-v1-widget-fullscreen');\r\n                    (0, utils_1.unmountElement)(overlay_1);\r\n                };\r\n                widget.append(overlay_1);\r\n            }\r\n            else {\r\n                options.container.innerHTML = '';\r\n                appendWidget();\r\n                container_1.append(closeButton_1);\r\n            }\r\n        };\r\n        closeButton_1.onclick = close_1;\r\n        container_1.append(closeButton_1);\r\n    }\r\n    return {\r\n        refresh: refresh,\r\n        unmount: function () { return (0, utils_1.unmountElement)(widget); },\r\n    };\r\n};\r\nexports.createWidget = createWidget;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-widget/create-widget.ts?");

/***/ }),

/***/ "./src/factories/create-widget/elements/build-widget.ts":
/*!**************************************************************!*\
  !*** ./src/factories/create-widget/elements/build-widget.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.buildWidget = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.ts\");\r\nvar buildWidget = function (iframe, width, height) {\r\n    var widget = document.createElement('div');\r\n    widget.className = 'tf-v1-widget';\r\n    widget.dataset.testid = 'tf-v1-widget';\r\n    widget.append(iframe);\r\n    return (0, utils_1.setElementSize)(widget, { width: width, height: height });\r\n};\r\nexports.buildWidget = buildWidget;\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-widget/elements/build-widget.ts?");

/***/ }),

/***/ "./src/factories/create-widget/elements/index.ts":
/*!*******************************************************!*\
  !*** ./src/factories/create-widget/elements/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./build-widget */ \"./src/factories/create-widget/elements/build-widget.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-widget/elements/index.ts?");

/***/ }),

/***/ "./src/factories/create-widget/index.ts":
/*!**********************************************!*\
  !*** ./src/factories/create-widget/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./create-widget */ \"./src/factories/create-widget/create-widget.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./widget-options */ \"./src/factories/create-widget/widget-options.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-widget/index.ts?");

/***/ }),

/***/ "./src/factories/create-widget/widget-options.ts":
/*!*******************************************************!*\
  !*** ./src/factories/create-widget/widget-options.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n\n\n//# sourceURL=webpack://tf/./src/factories/create-widget/widget-options.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./factories/create-popover */ \"./src/factories/create-popover/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./factories/create-popup */ \"./src/factories/create-popup/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./factories/create-slider */ \"./src/factories/create-slider/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./factories/create-widget */ \"./src/factories/create-widget/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./factories/create-sidetab */ \"./src/factories/create-sidetab/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/index.ts?");

/***/ }),

/***/ "./src/initializers/build-options-from-attributes.ts":
/*!***********************************************************!*\
  !*** ./src/initializers/build-options-from-attributes.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.buildOptionsFromAttributes = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\r\nvar buildOptionsFromAttributes = function (element) {\r\n    return (0, utils_1.loadOptionsFromAttributes)(element, {\r\n        source: 'string',\r\n        medium: 'string',\r\n        mediumVersion: 'string',\r\n        open: 'string',\r\n        openValue: 'integer',\r\n        hideFooter: 'boolean',\r\n        hideHeaders: 'boolean',\r\n        opacity: 'integer',\r\n        disableTracking: 'boolean',\r\n        onReady: 'function',\r\n        onSubmit: 'function',\r\n        onQuestionChanged: 'function',\r\n        onHeightChanged: 'function',\r\n        autoResize: 'stringOrBoolean',\r\n        onClose: 'function',\r\n        onEndingButtonClick: 'function',\r\n        transitiveSearchParams: 'array',\r\n        hidden: 'record',\r\n        chat: 'boolean',\r\n        buttonColor: 'string',\r\n        customIcon: 'string',\r\n        width: 'integer',\r\n        height: 'integer',\r\n        size: 'integer',\r\n        buttonText: 'string',\r\n        position: 'string',\r\n        enableSandbox: 'boolean',\r\n        tooltip: 'string',\r\n        notificationDays: 'integer',\r\n        autoClose: 'integerOrBoolean',\r\n        shareGaInstance: 'stringOrBoolean',\r\n        forceTouch: 'boolean',\r\n        enableFullscreen: 'boolean',\r\n        inlineOnMobile: 'boolean',\r\n        disableAutoFocus: 'boolean',\r\n        tracking: 'record',\r\n        redirectTarget: 'string',\r\n        iframeProps: 'record',\r\n        lazy: 'boolean',\r\n        keepSession: 'boolean',\r\n    });\r\n};\r\nexports.buildOptionsFromAttributes = buildOptionsFromAttributes;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/build-options-from-attributes.ts?");

/***/ }),

/***/ "./src/initializers/index.ts":
/*!***********************************!*\
  !*** ./src/initializers/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./initialize-popovers */ \"./src/initializers/initialize-popovers.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./initialize-popups */ \"./src/initializers/initialize-popups.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./initialize-sliders */ \"./src/initializers/initialize-sliders.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./initialize-widgets */ \"./src/initializers/initialize-widgets.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./initialize-sidetabs */ \"./src/initializers/initialize-sidetabs.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/index.ts?");

/***/ }),

/***/ "./src/initializers/initialize-popovers.ts":
/*!*************************************************!*\
  !*** ./src/initializers/initialize-popovers.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initializePopovers = void 0;\r\nvar create_popover_1 = __webpack_require__(/*! ../factories/create-popover */ \"./src/factories/create-popover/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\r\nvar initialize_1 = __webpack_require__(/*! ./initialize */ \"./src/initializers/initialize.ts\");\r\nvar initializePopovers = function (forceReload) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    (0, initialize_1.initialize)(constants_1.POPOVER_ATTRIBUTE, 'popover.css', forceReload, function (formId, options, button) {\r\n        var toggle = (0, create_popover_1.createPopover)(formId, options).toggle;\r\n        button.onclick = toggle;\r\n    });\r\n};\r\nexports.initializePopovers = initializePopovers;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/initialize-popovers.ts?");

/***/ }),

/***/ "./src/initializers/initialize-popups.ts":
/*!***********************************************!*\
  !*** ./src/initializers/initialize-popups.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initializePopups = void 0;\r\nvar create_popup_1 = __webpack_require__(/*! ../factories/create-popup */ \"./src/factories/create-popup/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\r\nvar initialize_1 = __webpack_require__(/*! ./initialize */ \"./src/initializers/initialize.ts\");\r\nvar initializePopups = function (forceReload) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    (0, initialize_1.initialize)(constants_1.POPUP_ATTRIBUTE, 'popup.css', forceReload, function (formId, options, button) {\r\n        var toggle = (0, create_popup_1.createPopup)(formId, options).toggle;\r\n        button.onclick = toggle;\r\n    });\r\n};\r\nexports.initializePopups = initializePopups;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/initialize-popups.ts?");

/***/ }),

/***/ "./src/initializers/initialize-sidetabs.ts":
/*!*************************************************!*\
  !*** ./src/initializers/initialize-sidetabs.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initializeSidetabs = void 0;\r\nvar create_sidetab_1 = __webpack_require__(/*! ../factories/create-sidetab */ \"./src/factories/create-sidetab/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\r\nvar initialize_1 = __webpack_require__(/*! ./initialize */ \"./src/initializers/initialize.ts\");\r\nvar initializeSidetabs = function (forceReload) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    (0, initialize_1.initialize)(constants_1.SIDETAB_ATTRIBUTE, 'sidetab.css', forceReload, function (formId, options) {\r\n        (0, create_sidetab_1.createSidetab)(formId, options);\r\n    });\r\n};\r\nexports.initializeSidetabs = initializeSidetabs;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/initialize-sidetabs.ts?");

/***/ }),

/***/ "./src/initializers/initialize-sliders.ts":
/*!************************************************!*\
  !*** ./src/initializers/initialize-sliders.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initializeSliders = void 0;\r\nvar create_slider_1 = __webpack_require__(/*! ../factories/create-slider */ \"./src/factories/create-slider/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\r\nvar initialize_1 = __webpack_require__(/*! ./initialize */ \"./src/initializers/initialize.ts\");\r\nvar initializeSliders = function (forceReload) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    (0, initialize_1.initialize)(constants_1.SLIDER_ATTRIBUTE, 'slider.css', forceReload, function (formId, options, button) {\r\n        var toggle = (0, create_slider_1.createSlider)(formId, options).toggle;\r\n        button.onclick = toggle;\r\n    });\r\n};\r\nexports.initializeSliders = initializeSliders;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/initialize-sliders.ts?");

/***/ }),

/***/ "./src/initializers/initialize-widgets.ts":
/*!************************************************!*\
  !*** ./src/initializers/initialize-widgets.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initializeWidgets = void 0;\r\nvar create_widget_1 = __webpack_require__(/*! ../factories/create-widget */ \"./src/factories/create-widget/index.ts\");\r\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\r\nvar initialize_1 = __webpack_require__(/*! ./initialize */ \"./src/initializers/initialize.ts\");\r\nvar initializeWidgets = function (forceReload) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    (0, initialize_1.initialize)(constants_1.WIDGET_ATTRIBUTE, 'widget.css', forceReload, function (formId, options, container) {\r\n        (0, create_widget_1.createWidget)(formId, __assign(__assign({}, options), { container: container }));\r\n    });\r\n};\r\nexports.initializeWidgets = initializeWidgets;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/initialize-widgets.ts?");

/***/ }),

/***/ "./src/initializers/initialize.ts":
/*!****************************************!*\
  !*** ./src/initializers/initialize.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.initialize = void 0;\r\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\r\nvar build_options_from_attributes_1 = __webpack_require__(/*! ./build-options-from-attributes */ \"./src/initializers/build-options-from-attributes.ts\");\r\nvar initialize = function (embedElementAttribute, cssFilename, forceReload, factoryMethod) {\r\n    if (forceReload === void 0) { forceReload = false; }\r\n    var embedTypeElements = document.querySelectorAll(\"[\".concat(embedElementAttribute, \"]\"));\r\n    if (embedTypeElements.length > 0) {\r\n        (0, utils_1.includeCss)(cssFilename);\r\n    }\r\n    Array.from(embedTypeElements).forEach(function (element, index) {\r\n        if (forceReload || element.dataset.tfLoaded !== 'true') {\r\n            var formId = element.getAttribute(embedElementAttribute);\r\n            if (!formId) {\r\n                throw new Error(\"Invalid \".concat(embedElementAttribute, \"=\").concat(formId, \" for embed #\").concat(index));\r\n            }\r\n            factoryMethod(formId, (0, build_options_from_attributes_1.buildOptionsFromAttributes)(element), element);\r\n            element.dataset.tfLoaded = 'true';\r\n        }\r\n    });\r\n};\r\nexports.initialize = initialize;\r\n\n\n//# sourceURL=webpack://tf/./src/initializers/initialize.ts?");

/***/ }),

/***/ "./src/utils/build-iframe-src.ts":
/*!***************************************!*\
  !*** ./src/utils/build-iframe-src.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.buildIframeSrc = void 0;\r\nvar constants_1 = __webpack_require__(/*! ../constants */ \"./src/constants.ts\");\r\nvar remove_undefined_keys_1 = __webpack_require__(/*! ./remove-undefined-keys */ \"./src/utils/remove-undefined-keys.ts\");\r\nvar is_defined_1 = __webpack_require__(/*! ./is-defined */ \"./src/utils/is-defined.ts\");\r\nvar get_transitive_search_params_1 = __webpack_require__(/*! ./get-transitive-search-params */ \"./src/utils/get-transitive-search-params.ts\");\r\nvar getDefaultUrlOptions = function () {\r\n    var _a;\r\n    return ({\r\n        source: (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname.replace(/^www\\./, ''),\r\n        medium: 'embed-sdk',\r\n        mediumVersion: 'next',\r\n    });\r\n};\r\nvar addDefaultUrlOptions = function (options) {\r\n    return __assign(__assign({}, getDefaultUrlOptions()), (0, remove_undefined_keys_1.removeUndefinedKeys)(options));\r\n};\r\nvar typesToEmbed = {\r\n    widget: 'embed-widget',\r\n    popup: 'popup-blank',\r\n    slider: 'popup-drawer',\r\n    popover: 'popup-popover',\r\n    'side-tab': 'popup-side-panel',\r\n};\r\nvar mapOptionsToQueryParams = function (type, embedId, options) {\r\n    var transitiveSearchParams = options.transitiveSearchParams, source = options.source, medium = options.medium, mediumVersion = options.mediumVersion, hideFooter = options.hideFooter, hideHeaders = options.hideHeaders, opacity = options.opacity, disableTracking = options.disableTracking, enableSandbox = options.enableSandbox, disableAutoFocus = options.disableAutoFocus, shareGaInstance = options.shareGaInstance, forceTouch = options.forceTouch, enableFullscreen = options.enableFullscreen, tracking = options.tracking, redirectTarget = options.redirectTarget;\r\n    var transitiveParams = (0, get_transitive_search_params_1.getTransitiveSearchParams)(transitiveSearchParams);\r\n    var params = {\r\n        'typeform-embed-id': embedId,\r\n        'typeform-embed': typesToEmbed[type],\r\n        'typeform-source': source,\r\n        'typeform-medium': medium,\r\n        'typeform-medium-version': mediumVersion,\r\n        'embed-hide-footer': hideFooter ? 'true' : undefined,\r\n        'embed-hide-headers': hideHeaders ? 'true' : undefined,\r\n        'embed-opacity': opacity,\r\n        'disable-tracking': disableTracking || enableSandbox ? 'true' : undefined,\r\n        'disable-auto-focus': disableAutoFocus ? 'true' : undefined,\r\n        '__dangerous-disable-submissions': enableSandbox ? 'true' : undefined,\r\n        'share-ga-instance': shareGaInstance ? 'true' : undefined,\r\n        'force-touch': forceTouch ? 'true' : undefined,\r\n        'add-placeholder-ws': type === 'widget' && enableFullscreen ? 'true' : undefined,\r\n        'typeform-embed-redirect-target': redirectTarget,\r\n    };\r\n    return __assign(__assign(__assign({}, params), transitiveParams), tracking);\r\n};\r\nvar getBaseUrl = function (formString, chat) {\r\n    if (chat === void 0) { chat = false; }\r\n    var prefix = chat ? 'c' : 'to';\r\n    return new URL(formString.startsWith('http://') || formString.startsWith('https://')\r\n        ? formString\r\n        : \"\".concat(constants_1.FORM_BASE_URL, \"/\").concat(prefix, \"/\").concat(formString));\r\n};\r\nvar buildIframeSrc = function (params) {\r\n    var formId = params.formId, type = params.type, embedId = params.embedId, options = params.options;\r\n    var queryParams = mapOptionsToQueryParams(type, embedId, addDefaultUrlOptions(options));\r\n    var url = getBaseUrl(formId, options.chat);\r\n    Object.entries(queryParams)\r\n        .filter(function (_a) {\r\n        var paramValue = _a[1];\r\n        return (0, is_defined_1.isDefined)(paramValue);\r\n    })\r\n        .forEach(function (_a) {\r\n        var paramName = _a[0], paramValue = _a[1];\r\n        url.searchParams.set(paramName, paramValue);\r\n    });\r\n    if (options.hidden) {\r\n        var tmpHashUrl_1 = new URL(constants_1.FORM_BASE_URL);\r\n        Object.entries(options.hidden)\r\n            .filter(function (_a) {\r\n            var paramValue = _a[1];\r\n            return (0, is_defined_1.isDefined)(paramValue);\r\n        })\r\n            .forEach(function (_a) {\r\n            var paramName = _a[0], paramValue = _a[1];\r\n            tmpHashUrl_1.searchParams.set(paramName, paramValue);\r\n        });\r\n        var hiddenFields = tmpHashUrl_1.searchParams.toString();\r\n        if (hiddenFields) {\r\n            url.hash = hiddenFields;\r\n        }\r\n    }\r\n    return url.href;\r\n};\r\nexports.buildIframeSrc = buildIframeSrc;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/build-iframe-src.ts?");

/***/ }),

/***/ "./src/utils/create-custom-launch-options.ts":
/*!***************************************************!*\
  !*** ./src/utils/create-custom-launch-options.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.handleCustomOpen = void 0;\r\nvar emptyHandler = { remove: function () { } };\r\nvar openOnExit = function (exitThreshold, open) {\r\n    var prevY = 0;\r\n    var handleMouseMove = function (event) {\r\n        // open popup  if the mouse is in top part of the page and moving towards top of the screen\r\n        if (event.clientY < exitThreshold && event.clientY < prevY) {\r\n            document.removeEventListener('mousemove', handleMouseMove, true);\r\n            open();\r\n        }\r\n        else {\r\n            prevY = event.clientY;\r\n        }\r\n    };\r\n    document.addEventListener('mousemove', handleMouseMove, true);\r\n    return {\r\n        remove: function () { return document.removeEventListener('mousemove', handleMouseMove, true); },\r\n    };\r\n};\r\nvar openOnScroll = function (scrollThreshold, open) {\r\n    function handleScroll() {\r\n        var offsetTop = window.pageYOffset || document.documentElement.scrollTop;\r\n        var clientTop = document.documentElement.clientTop || 0;\r\n        var pageHeight = document.documentElement.scrollHeight;\r\n        var scrollTopPixels = offsetTop - clientTop;\r\n        var scrollTopPercentage = (scrollTopPixels / pageHeight) * 100;\r\n        var scrolledToTheBottom = scrollTopPixels + window.innerHeight >= pageHeight;\r\n        if (scrollTopPercentage >= scrollThreshold || scrolledToTheBottom) {\r\n            open();\r\n            document.removeEventListener('scroll', handleScroll);\r\n        }\r\n    }\r\n    document.addEventListener('scroll', handleScroll);\r\n    return {\r\n        remove: function () { return document.removeEventListener('scroll', handleScroll); },\r\n    };\r\n};\r\nvar handleCustomOpen = function (open, openType, value) {\r\n    switch (openType) {\r\n        case 'load':\r\n            open();\r\n            return emptyHandler;\r\n        case 'exit':\r\n            if (value) {\r\n                return openOnExit(value, open);\r\n            }\r\n            return emptyHandler;\r\n        case 'time':\r\n            setTimeout(function () {\r\n                open();\r\n            }, value);\r\n            return emptyHandler;\r\n        case 'scroll':\r\n            if (value) {\r\n                return openOnScroll(value, open);\r\n            }\r\n            return emptyHandler;\r\n        default:\r\n            return emptyHandler;\r\n        // do not open automatically\r\n    }\r\n};\r\nexports.handleCustomOpen = handleCustomOpen;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-custom-launch-options.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/create-iframe.ts":
/*!**************************************************!*\
  !*** ./src/utils/create-iframe/create-iframe.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.createIframe = void 0;\r\nvar build_iframe_src_1 = __webpack_require__(/*! ../build-iframe-src */ \"./src/utils/build-iframe-src.ts\");\r\nvar __1 = __webpack_require__(/*! ../ */ \"./src/utils/index.ts\");\r\nvar generate_embed_id_1 = __webpack_require__(/*! ./generate-embed-id */ \"./src/utils/create-iframe/generate-embed-id.ts\");\r\nvar get_form_event_handler_1 = __webpack_require__(/*! ./get-form-event-handler */ \"./src/utils/create-iframe/get-form-event-handler.ts\");\r\nvar trigger_iframe_redraw_1 = __webpack_require__(/*! ./trigger-iframe-redraw */ \"./src/utils/create-iframe/trigger-iframe-redraw.ts\");\r\nvar setup_custom_keyboard_close_1 = __webpack_require__(/*! ./setup-custom-keyboard-close */ \"./src/utils/create-iframe/setup-custom-keyboard-close.ts\");\r\nvar refresh_iframe_1 = __webpack_require__(/*! ./refresh-iframe */ \"./src/utils/create-iframe/refresh-iframe.ts\");\r\nvar createIframe = function (formId, type, options) {\r\n    var embedId = (0, generate_embed_id_1.generateEmbedId)();\r\n    var _a = options.iframeProps, iframeProps = _a === void 0 ? {} : _a, onReady = options.onReady, onQuestionChanged = options.onQuestionChanged, onHeightChanged = options.onHeightChanged, onSubmit = options.onSubmit, onEndingButtonClick = options.onEndingButtonClick, shareGaInstance = options.shareGaInstance;\r\n    var src = (0, build_iframe_src_1.buildIframeSrc)({ formId: formId, embedId: embedId, type: type, options: options });\r\n    var iframe = document.createElement('iframe');\r\n    iframe.src = src;\r\n    iframe.dataset.testid = 'iframe';\r\n    iframe.style.border = '0px';\r\n    iframe.allow = 'microphone; camera';\r\n    Object.keys(iframeProps).forEach(function (key) {\r\n        iframe.setAttribute(key, iframeProps[key]);\r\n    });\r\n    iframe.addEventListener('load', trigger_iframe_redraw_1.triggerIframeRedraw, { once: true });\r\n    window.addEventListener('message', (0, get_form_event_handler_1.getFormReadyHandler)(embedId, onReady));\r\n    window.addEventListener('message', (0, get_form_event_handler_1.getFormQuestionChangedHandler)(embedId, onQuestionChanged));\r\n    window.addEventListener('message', (0, get_form_event_handler_1.getFormHeightChangedHandler)(embedId, onHeightChanged));\r\n    window.addEventListener('message', (0, get_form_event_handler_1.getFormSubmitHandler)(embedId, onSubmit));\r\n    window.addEventListener('message', (0, get_form_event_handler_1.getFormThemeHandler)(embedId));\r\n    window.addEventListener('message', (0, get_form_event_handler_1.getThankYouScreenButtonClickHandler)(embedId, onEndingButtonClick));\r\n    if (type !== 'widget') {\r\n        window.addEventListener('message', setup_custom_keyboard_close_1.dispatchCustomKeyEventFromIframe);\r\n    }\r\n    if (shareGaInstance) {\r\n        window.addEventListener('message', (0, get_form_event_handler_1.getFormReadyHandler)(embedId, function () {\r\n            (0, __1.setupGaInstance)(iframe, embedId, shareGaInstance);\r\n        }));\r\n    }\r\n    var refresh = function () { return (0, refresh_iframe_1.refreshIframe)(iframe); };\r\n    return { iframe: iframe, embedId: embedId, refresh: refresh };\r\n};\r\nexports.createIframe = createIframe;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/create-iframe.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/generate-embed-id.ts":
/*!******************************************************!*\
  !*** ./src/utils/create-iframe/generate-embed-id.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.generateEmbedId = void 0;\r\nvar generateEmbedId = function () {\r\n    var randomNumber = Math.random();\r\n    var _a = String(randomNumber).split('.'), randomString = _a[1];\r\n    return randomString;\r\n};\r\nexports.generateEmbedId = generateEmbedId;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/generate-embed-id.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/get-form-event-handler.ts":
/*!***********************************************************!*\
  !*** ./src/utils/create-iframe/get-form-event-handler.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getThankYouScreenButtonClickHandler = exports.getFormThemeHandler = exports.getWelcomeScreenHiddenHandler = exports.getFormSubmitHandler = exports.getFormHeightChangedHandler = exports.getFormQuestionChangedHandler = exports.getFormReadyHandler = void 0;\r\nvar getFormReadyHandler = function (embedId, callback) {\r\n    return getFormEventHandler('form-ready', embedId, callback);\r\n};\r\nexports.getFormReadyHandler = getFormReadyHandler;\r\nvar getFormQuestionChangedHandler = function (embedId, callback) {\r\n    return getFormEventHandler('form-screen-changed', embedId, callback);\r\n};\r\nexports.getFormQuestionChangedHandler = getFormQuestionChangedHandler;\r\nvar getFormHeightChangedHandler = function (embedId, callback) {\r\n    return getFormEventHandler('form-height-changed', embedId, callback);\r\n};\r\nexports.getFormHeightChangedHandler = getFormHeightChangedHandler;\r\nvar getFormSubmitHandler = function (embedId, callback) {\r\n    return getFormEventHandler('form-submit', embedId, callback);\r\n};\r\nexports.getFormSubmitHandler = getFormSubmitHandler;\r\nvar getWelcomeScreenHiddenHandler = function (embedId, callback) {\r\n    return getFormEventHandler('welcome-screen-hidden', embedId, callback);\r\n};\r\nexports.getWelcomeScreenHiddenHandler = getWelcomeScreenHiddenHandler;\r\nvar getFormThemeHandler = function (embedId) {\r\n    return getFormEventHandler('form-theme', embedId, function (data) {\r\n        var _a;\r\n        if (data === null || data === void 0 ? void 0 : data.theme) {\r\n            var closeButtonElement = document.querySelector('.tf-v1-close-icon');\r\n            if (closeButtonElement) {\r\n                closeButtonElement.style.color = (_a = data.theme) === null || _a === void 0 ? void 0 : _a.color;\r\n            }\r\n        }\r\n    });\r\n};\r\nexports.getFormThemeHandler = getFormThemeHandler;\r\nvar getThankYouScreenButtonClickHandler = function (embedId, callback) {\r\n    return getFormEventHandler('thank-you-screen-button-click', embedId, callback);\r\n};\r\nexports.getThankYouScreenButtonClickHandler = getThankYouScreenButtonClickHandler;\r\nfunction getFormEventHandler(eventType, expectedEmbedId, callback) {\r\n    return function (event) {\r\n        var _a = event.data, type = _a.type, embedId = _a.embedId, data = __rest(_a, [\"type\", \"embedId\"]);\r\n        if (type !== eventType) {\r\n            return;\r\n        }\r\n        if (embedId !== expectedEmbedId) {\r\n            return;\r\n        }\r\n        callback === null || callback === void 0 ? void 0 : callback(data);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/get-form-event-handler.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/index.ts":
/*!******************************************!*\
  !*** ./src/utils/create-iframe/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./create-iframe */ \"./src/utils/create-iframe/create-iframe.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./setup-custom-keyboard-close */ \"./src/utils/create-iframe/setup-custom-keyboard-close.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/index.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/refresh-iframe.ts":
/*!***************************************************!*\
  !*** ./src/utils/create-iframe/refresh-iframe.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.refreshIframe = void 0;\r\nvar refreshIframe = function (iframe) {\r\n    if (iframe) {\r\n        var source = iframe.src;\r\n        if (source.includes('&refresh')) {\r\n            var splitURL = source.split('&refresh#');\r\n            iframe.src = splitURL.join('#');\r\n        }\r\n        else {\r\n            var splitURL = source.split('#');\r\n            splitURL[0] = \"\".concat(splitURL[0], \"&refresh\");\r\n            iframe.src = splitURL.join('#');\r\n        }\r\n    }\r\n};\r\nexports.refreshIframe = refreshIframe;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/refresh-iframe.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/setup-custom-keyboard-close.ts":
/*!****************************************************************!*\
  !*** ./src/utils/create-iframe/setup-custom-keyboard-close.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.dispatchCustomKeyEventFromIframe = exports.removeCustomKeyboardListener = exports.addCustomKeyboardListener = void 0;\r\nvar POST_MESSAGE = 'form-close';\r\nvar KEY_EVENT = 'Escape';\r\nvar closeOnKeyEvent = function (evt, close) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        if (evt.code === KEY_EVENT && typeof close === 'function') {\r\n            close();\r\n            (0, exports.removeCustomKeyboardListener)();\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nvar addCustomKeyboardListener = function (callback) {\r\n    return window.document.addEventListener('keydown', function (evt) { return closeOnKeyEvent(evt, callback); });\r\n};\r\nexports.addCustomKeyboardListener = addCustomKeyboardListener;\r\nvar removeCustomKeyboardListener = function () { return window.document.removeEventListener('keydown', closeOnKeyEvent); };\r\nexports.removeCustomKeyboardListener = removeCustomKeyboardListener;\r\nvar dispatchCustomKeyEventFromIframe = function (evt) {\r\n    if (evt.data.type === POST_MESSAGE) {\r\n        window.document.dispatchEvent(new KeyboardEvent('keydown', { code: KEY_EVENT }));\r\n    }\r\n};\r\nexports.dispatchCustomKeyEventFromIframe = dispatchCustomKeyEventFromIframe;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/setup-custom-keyboard-close.ts?");

/***/ }),

/***/ "./src/utils/create-iframe/trigger-iframe-redraw.ts":
/*!**********************************************************!*\
  !*** ./src/utils/create-iframe/trigger-iframe-redraw.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.triggerIframeRedraw = void 0;\r\n/**\r\n * Tell browser to redraw the iframe. DIST-713.\r\n *\r\n */\r\nfunction triggerIframeRedraw() {\r\n    // @ts-ignore\r\n    var iframe = this;\r\n    iframe.style.transform = 'translateZ(0)';\r\n}\r\nexports.triggerIframeRedraw = triggerIframeRedraw;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/create-iframe/trigger-iframe-redraw.ts?");

/***/ }),

/***/ "./src/utils/get-text-color.ts":
/*!*************************************!*\
  !*** ./src/utils/get-text-color.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getTextColor = void 0;\r\nvar hex_rgb_1 = __webpack_require__(/*! ./hex-rgb */ \"./src/utils/hex-rgb.ts\");\r\n// https://www.w3.org/TR/AERT/#color-contrast\r\nvar RED_BRIGHTNESS = 299;\r\nvar GREEN_BRIGHTNESS = 587;\r\nvar BLUE_BRIGHTNESS = 114;\r\nvar BASE = 1000;\r\nvar BRIGHTNETSS_LIMIT = 125;\r\nvar isHex = function (string) { return string.startsWith('#'); };\r\nvar getRgbValues = function (rgb) {\r\n    var rgbValues = {\r\n        red: 0,\r\n        green: 0,\r\n        blue: 0,\r\n    };\r\n    var values = rgb.match(/\\d+/g);\r\n    if (values) {\r\n        rgbValues.red = parseInt(values[0], 10);\r\n        rgbValues.green = parseInt(values[0], 10);\r\n        rgbValues.blue = parseInt(values[0], 10);\r\n    }\r\n    return rgbValues;\r\n};\r\nvar getTextColor = function (color) {\r\n    // return default color\r\n    if (!color)\r\n        return '#FFFFFF';\r\n    var rgbValues = isHex(color) ? (0, hex_rgb_1.hexRgb)(color) : getRgbValues(color);\r\n    var red = rgbValues.red, green = rgbValues.green, blue = rgbValues.blue;\r\n    var brightness = Math.round((red * RED_BRIGHTNESS + green * GREEN_BRIGHTNESS + blue * BLUE_BRIGHTNESS) / BASE);\r\n    return brightness > BRIGHTNETSS_LIMIT ? '#000000' : '#FFFFFF';\r\n};\r\nexports.getTextColor = getTextColor;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/get-text-color.ts?");

/***/ }),

/***/ "./src/utils/get-transitive-search-params.ts":
/*!***************************************************!*\
  !*** ./src/utils/get-transitive-search-params.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getTransitiveSearchParams = void 0;\r\nvar getTransitiveSearchParams = function (transitiveSearchParams) {\r\n    var url = new URL(window.location.href);\r\n    var queryParamsWithTransitiveParams = {};\r\n    if (transitiveSearchParams && transitiveSearchParams.length > 0) {\r\n        transitiveSearchParams.forEach(function (key) {\r\n            if (url.searchParams.has(key)) {\r\n                queryParamsWithTransitiveParams[key] = url.searchParams.get(key);\r\n            }\r\n        });\r\n    }\r\n    return queryParamsWithTransitiveParams;\r\n};\r\nexports.getTransitiveSearchParams = getTransitiveSearchParams;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/get-transitive-search-params.ts?");

/***/ }),

/***/ "./src/utils/has-dom.ts":
/*!******************************!*\
  !*** ./src/utils/has-dom.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.hasDom = void 0;\r\nvar hasDom = function () {\r\n    return typeof document !== 'undefined' && typeof window !== 'undefined';\r\n};\r\nexports.hasDom = hasDom;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/has-dom.ts?");

/***/ }),

/***/ "./src/utils/hex-rgb.ts":
/*!******************************!*\
  !*** ./src/utils/hex-rgb.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\n/**\r\n * @copyright @sindresorhus\r\n * @Github https://github.com/sindresorhus/hex-rgb\r\n * @NPM: https://www.npmjs.com/package/hex-rgb\r\n */\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.hexRgb = void 0;\r\nvar hexCharacters = 'a-f\\\\d';\r\nvar match3or4Hex = \"#?[\".concat(hexCharacters, \"]{3}[\").concat(hexCharacters, \"]?\");\r\nvar match6or8Hex = \"#?[\".concat(hexCharacters, \"]{6}([\").concat(hexCharacters, \"]{2})?\");\r\nvar nonHexChars = new RegExp(\"[^#\".concat(hexCharacters, \"]\"), 'gi');\r\nvar validHexSize = new RegExp(\"^\".concat(match3or4Hex, \"$|^\").concat(match6or8Hex, \"$\"), 'i');\r\nvar hexRgb = function (hex) {\r\n    if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {\r\n        throw new TypeError('Expected a valid hex string');\r\n    }\r\n    hex = hex.replace(/^#/, '');\r\n    if (hex.length === 8) {\r\n        hex = hex.slice(0, 6);\r\n    }\r\n    if (hex.length === 4) {\r\n        hex = hex.slice(0, 3);\r\n    }\r\n    if (hex.length === 3) {\r\n        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];\r\n    }\r\n    var number = Number.parseInt(hex, 16);\r\n    var red = number >> 16;\r\n    var green = (number >> 8) & 255;\r\n    var blue = number & 255;\r\n    return { red: red, green: green, blue: blue };\r\n};\r\nexports.hexRgb = hexRgb;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/hex-rgb.ts?");

/***/ }),

/***/ "./src/utils/include-css.ts":
/*!**********************************!*\
  !*** ./src/utils/include-css.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.includeCss = void 0;\r\nvar getCssHref = function (filename) { return \"\".concat(\"./lib/css/\").concat(filename); };\r\nvar includeCss = function (filename) {\r\n    var href = getCssHref(filename);\r\n    if (!document.querySelector(\"link[href=\\\"\".concat(href, \"\\\"]\"))) {\r\n        var css = document.createElement('link');\r\n        css.rel = 'stylesheet';\r\n        css.href = href;\r\n        document.head.append(css);\r\n    }\r\n};\r\nexports.includeCss = includeCss;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/include-css.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__exportStar(__webpack_require__(/*! ./build-iframe-src */ \"./src/utils/build-iframe-src.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./create-iframe */ \"./src/utils/create-iframe/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./has-dom */ \"./src/utils/has-dom.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./include-css */ \"./src/utils/include-css.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./is-defined */ \"./src/utils/is-defined.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./load-options-from-attributes */ \"./src/utils/load-options-from-attributes.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./mobile */ \"./src/utils/mobile.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./remove-undefined-keys */ \"./src/utils/remove-undefined-keys.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./set-element-size */ \"./src/utils/set-element-size.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./unmount-element */ \"./src/utils/unmount-element.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./create-custom-launch-options */ \"./src/utils/create-custom-launch-options.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./set-auto-close */ \"./src/utils/set-auto-close.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./setup-google-analytics-instance */ \"./src/utils/setup-google-analytics-instance.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./get-text-color */ \"./src/utils/get-text-color.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./lazy-init */ \"./src/utils/lazy-init.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./is-open */ \"./src/utils/is-open.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./make-auto-resize */ \"./src/utils/make-auto-resize.ts\"), exports);\r\n\n\n//# sourceURL=webpack://tf/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/is-defined.ts":
/*!*********************************!*\
  !*** ./src/utils/is-defined.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isDefined = void 0;\r\nvar isDefined = function (value) {\r\n    return value !== undefined && value !== null;\r\n};\r\nexports.isDefined = isDefined;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/is-defined.ts?");

/***/ }),

/***/ "./src/utils/is-open.ts":
/*!******************************!*\
  !*** ./src/utils/is-open.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isVisible = exports.isInPage = exports.isOpen = void 0;\r\nvar isOpen = function (element) {\r\n    return (0, exports.isInPage)(element) && (0, exports.isVisible)(element);\r\n};\r\nexports.isOpen = isOpen;\r\nvar isInPage = function (element) { return !!element.parentNode; };\r\nexports.isInPage = isInPage;\r\nvar isVisible = function (element) { return element.style.display !== 'none'; };\r\nexports.isVisible = isVisible;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/is-open.ts?");

/***/ }),

/***/ "./src/utils/lazy-init.ts":
/*!********************************!*\
  !*** ./src/utils/lazy-init.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.lazyInitialize = void 0;\r\nvar lazyInitialize = function (target, onIntersection) {\r\n    var observerCallback = function (entries) {\r\n        entries.forEach(function (entry) {\r\n            if (entry.isIntersecting) {\r\n                onIntersection();\r\n                observer.unobserve(entry.target);\r\n            }\r\n        });\r\n    };\r\n    var observer = new IntersectionObserver(observerCallback);\r\n    observer.observe(target);\r\n};\r\nexports.lazyInitialize = lazyInitialize;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/lazy-init.ts?");

/***/ }),

/***/ "./src/utils/load-options-from-attributes.ts":
/*!***************************************************!*\
  !*** ./src/utils/load-options-from-attributes.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.loadOptionsFromAttributes = exports.transformAttributeValue = exports.camelCaseToKebabCase = void 0;\r\nvar camelCaseToKebabCase = function (value) {\r\n    return value\r\n        .split('')\r\n        .map(function (letter, i) {\r\n        if (letter.toUpperCase() === letter) {\r\n            return \"\".concat(i !== 0 ? '-' : '').concat(letter.toLowerCase());\r\n        }\r\n        return letter;\r\n    })\r\n        .join('');\r\n};\r\nexports.camelCaseToKebabCase = camelCaseToKebabCase;\r\nvar transformString = function (value) {\r\n    return value || undefined;\r\n};\r\nvar transformBoolean = function (value) {\r\n    return value === '' || value === 'yes' || value === 'true';\r\n};\r\nvar transformInteger = function (value) {\r\n    var integer = value ? parseInt(value, 10) : NaN;\r\n    return isNaN(integer) ? undefined : integer;\r\n};\r\nvar transformFunction = function (value) {\r\n    var fn = value && value in window ? window[value] : undefined;\r\n    return typeof fn === 'function' ? fn : undefined;\r\n};\r\nvar COMMA_PLACEHOLDER = '%ESCAPED_COMMA%';\r\nvar transformArray = function (value) {\r\n    if (!value) {\r\n        return undefined;\r\n    }\r\n    return value\r\n        .replace(/\\s/g, '')\r\n        .replace(/\\\\,/g, COMMA_PLACEHOLDER)\r\n        .split(',')\r\n        .filter(function (v) { return !!v; })\r\n        .map(function (v) { return v.replace(COMMA_PLACEHOLDER, ','); });\r\n};\r\nvar transformRecord = function (value) {\r\n    if (!value) {\r\n        return undefined;\r\n    }\r\n    var arrayOfRecordStrings = value\r\n        .replace(/\\\\,/g, COMMA_PLACEHOLDER)\r\n        .split(',')\r\n        .filter(function (v) { return !!v; })\r\n        .map(function (v) { return v.replace(COMMA_PLACEHOLDER, ','); });\r\n    return arrayOfRecordStrings.reduce(function (record, recordString) {\r\n        var _a;\r\n        var match = recordString.match(/^([^=]+)=(.*)$/);\r\n        if (match) {\r\n            var key = match[1], value_1 = match[2];\r\n            return __assign(__assign({}, record), (_a = {}, _a[key.trim()] = value_1, _a));\r\n        }\r\n        return record;\r\n    }, {});\r\n};\r\nvar transformAttributeValue = function (value, transformation) {\r\n    var _a, _b;\r\n    switch (transformation) {\r\n        case 'string':\r\n            return transformString(value);\r\n        case 'boolean':\r\n            return transformBoolean(value);\r\n        case 'integer':\r\n            return transformInteger(value);\r\n        case 'function':\r\n            return transformFunction(value);\r\n        case 'array':\r\n            return transformArray(value);\r\n        case 'record':\r\n            return transformRecord(value);\r\n        case 'integerOrBoolean':\r\n            return (_a = transformInteger(value)) !== null && _a !== void 0 ? _a : transformBoolean(value);\r\n        case 'stringOrBoolean':\r\n            return (_b = transformString(value)) !== null && _b !== void 0 ? _b : transformBoolean(value);\r\n        default:\r\n            throw new Error(\"Invalid attribute transformation \".concat(transformation));\r\n    }\r\n};\r\nexports.transformAttributeValue = transformAttributeValue;\r\nvar loadOptionsFromAttributes = function (element, transform) {\r\n    return Object.keys(transform).reduce(function (options, key) {\r\n        var _a;\r\n        return __assign(__assign({}, options), (_a = {}, _a[key] = (0, exports.transformAttributeValue)(element.getAttribute(\"data-tf-\".concat((0, exports.camelCaseToKebabCase)(key))), transform[key]), _a));\r\n    }, {});\r\n};\r\nexports.loadOptionsFromAttributes = loadOptionsFromAttributes;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/load-options-from-attributes.ts?");

/***/ }),

/***/ "./src/utils/make-auto-resize.ts":
/*!***************************************!*\
  !*** ./src/utils/make-auto-resize.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.makeAutoResize = void 0;\r\nvar mobile_1 = __webpack_require__(/*! ./mobile */ \"./src/utils/mobile.ts\");\r\n// this ensures the form is not covered by browser navbar on mobile devices\r\nvar makeAutoResize = function (wrapperElm) { return function () {\r\n    if (wrapperElm && (0, mobile_1.isMobile)()) {\r\n        wrapperElm.style.setProperty('height', \"\".concat(window.innerHeight, \"px\"), 'important');\r\n    }\r\n}; };\r\nexports.makeAutoResize = makeAutoResize;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/make-auto-resize.ts?");

/***/ }),

/***/ "./src/utils/mobile.ts":
/*!*****************************!*\
  !*** ./src/utils/mobile.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isFullscreen = exports.isMobile = exports.isBigScreen = void 0;\r\nvar isBigScreen = function () {\r\n    return window.screen.width >= 1024 && window.screen.height >= 768;\r\n};\r\nexports.isBigScreen = isBigScreen;\r\nvar isMobile = function () {\r\n    return /mobile|tablet|android/i.test(navigator.userAgent.toLowerCase());\r\n};\r\nexports.isMobile = isMobile;\r\nvar isFullscreen = function () {\r\n    return (0, exports.isMobile)() && !(0, exports.isBigScreen)();\r\n};\r\nexports.isFullscreen = isFullscreen;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/mobile.ts?");

/***/ }),

/***/ "./src/utils/remove-undefined-keys.ts":
/*!********************************************!*\
  !*** ./src/utils/remove-undefined-keys.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.removeUndefinedKeys = void 0;\r\nvar is_defined_1 = __webpack_require__(/*! ./is-defined */ \"./src/utils/is-defined.ts\");\r\nvar removeUndefinedKeys = function (obj) {\r\n    return Object.entries(obj)\r\n        .filter(function (_a) {\r\n        var value = _a[1];\r\n        return (0, is_defined_1.isDefined)(value);\r\n    })\r\n        .reduce(function (acc, _a) {\r\n        var _b;\r\n        var key = _a[0], value = _a[1];\r\n        return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));\r\n    }, {});\r\n};\r\nexports.removeUndefinedKeys = removeUndefinedKeys;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/remove-undefined-keys.ts?");

/***/ }),

/***/ "./src/utils/set-auto-close.ts":
/*!*************************************!*\
  !*** ./src/utils/set-auto-close.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setAutoClose = void 0;\r\nvar get_form_event_handler_1 = __webpack_require__(/*! ./create-iframe/get-form-event-handler */ \"./src/utils/create-iframe/get-form-event-handler.ts\");\r\nvar setAutoClose = function (embedId, autoClose, closeCallback) {\r\n    if (autoClose && closeCallback) {\r\n        var autoCloseTime_1 = typeof autoClose === 'number' ? autoClose : 0;\r\n        window.addEventListener('message', (0, get_form_event_handler_1.getFormSubmitHandler)(embedId, function () { return setTimeout(closeCallback, autoCloseTime_1); }));\r\n    }\r\n};\r\nexports.setAutoClose = setAutoClose;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/set-auto-close.ts?");

/***/ }),

/***/ "./src/utils/set-element-size.ts":
/*!***************************************!*\
  !*** ./src/utils/set-element-size.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setElementSize = void 0;\r\nvar setElementSize = function (element, _a) {\r\n    var width = _a.width, height = _a.height;\r\n    if (width) {\r\n        element.style.width = \"\".concat(width, \"px\");\r\n    }\r\n    if (height) {\r\n        element.style.height = \"\".concat(height, \"px\");\r\n    }\r\n    return element;\r\n};\r\nexports.setElementSize = setElementSize;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/set-element-size.ts?");

/***/ }),

/***/ "./src/utils/setup-google-analytics-instance.ts":
/*!******************************************************!*\
  !*** ./src/utils/setup-google-analytics-instance.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.setupGaInstance = exports.sendGaIdMessage = void 0;\r\nvar GA_TYPE_MESSAGE = 'ga-client-id';\r\nvar sendGaIdMessage = function (embedId, gaClientId, iframe) {\r\n    var data = { embedId: embedId, gaClientId: gaClientId };\r\n    setTimeout(function () {\r\n        if (iframe && iframe.contentWindow) {\r\n            iframe.contentWindow.postMessage({ type: GA_TYPE_MESSAGE, data: data }, '*');\r\n        }\r\n    }, 0);\r\n};\r\nexports.sendGaIdMessage = sendGaIdMessage;\r\nvar getTracker = function (trackers, trackingId) {\r\n    if (trackingId) {\r\n        return trackers.find(function (tracker) { return tracker.get('trackingId') === trackingId; });\r\n    }\r\n    return trackers[0];\r\n};\r\nvar logError = function (message) {\r\n    // eslint-disable-next-line no-console\r\n    console.error(message);\r\n};\r\nvar setupGaInstance = function (iframe, embedId, shareGaInstance) {\r\n    try {\r\n        var gaObject = window[window.GoogleAnalyticsObject];\r\n        var trackingId = typeof shareGaInstance === 'string' ? shareGaInstance : undefined;\r\n        var tracker = getTracker(gaObject.getAll(), trackingId);\r\n        if (tracker) {\r\n            (0, exports.sendGaIdMessage)(embedId, tracker.get('clientId'), iframe);\r\n        }\r\n        else {\r\n            logError(\"Whoops! You enabled the shareGaInstance feature in your typeform embed but the tracker with ID \".concat(trackingId, \" was not found. \") +\r\n                'Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID. ');\r\n        }\r\n    }\r\n    catch (exception) {\r\n        logError('Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. ' +\r\n            'Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. ');\r\n        logError(exception);\r\n    }\r\n};\r\nexports.setupGaInstance = setupGaInstance;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/setup-google-analytics-instance.ts?");

/***/ }),

/***/ "./src/utils/unmount-element.ts":
/*!**************************************!*\
  !*** ./src/utils/unmount-element.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.unmountElement = void 0;\r\nvar unmountElement = function (element) {\r\n    var _a;\r\n    (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);\r\n};\r\nexports.unmountElement = unmountElement;\r\n\n\n//# sourceURL=webpack://tf/./src/utils/unmount-element.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/browser.ts");
/******/ 	window.tf = __webpack_exports__;
/******/ 	
/******/ })()
;