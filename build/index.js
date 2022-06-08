(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["embed-next"] = factory();
	else
		root["embed-next"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FORM_BASE_URL = exports.POPUP_SIZE = exports.SLIDER_WIDTH = exports.SLIDER_POSITION = exports.SIDETAB_ATTRIBUTE = exports.WIDGET_ATTRIBUTE = exports.SLIDER_ATTRIBUTE = exports.POPUP_ATTRIBUTE = exports.POPOVER_ATTRIBUTE = void 0;
exports.POPOVER_ATTRIBUTE = 'data-tf-popover';
exports.POPUP_ATTRIBUTE = 'data-tf-popup';
exports.SLIDER_ATTRIBUTE = 'data-tf-slider';
exports.WIDGET_ATTRIBUTE = 'data-tf-widget';
exports.SIDETAB_ATTRIBUTE = 'data-tf-sidetab';
exports.SLIDER_POSITION = 'right';
exports.SLIDER_WIDTH = 800;
exports.POPUP_SIZE = 100;
exports.FORM_BASE_URL = 'https://form.typeform.com';


/***/ }),

/***/ "./src/factories/create-popover/create-popover.ts":
/*!********************************************************!*\
  !*** ./src/factories/create-popover/create-popover.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPopover = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var notification_days_1 = __webpack_require__(/*! ./notification-days */ "./src/factories/create-popover/notification-days.ts");
var replaceIcon = function (iconToReplace, newIcon) {
    var element = iconToReplace.parentNode;
    if (element) {
        element.removeChild(iconToReplace);
        element.appendChild(newIcon);
    }
};
var buildPopover = function (width, height) {
    var popover = document.createElement('div');
    popover.className = 'tf-v1-popover';
    popover.dataset.testid = 'tf-v1-popover';
    return (0, utils_1.setElementSize)(popover, { width: width, height: height });
};
var buildCloseIcon = function (element, className) {
    if (element === void 0) { element = 'div'; }
    if (className === void 0) { className = 'tf-v1-popover-button-icon'; }
    var icon = document.createElement(element);
    icon.className = "".concat(className, " tf-v1-close-icon");
    icon.innerHTML = '&times;';
    icon.dataset.testid = className;
    return icon;
};
var buildWrapper = function () {
    var wrapper = document.createElement('div');
    wrapper.className = 'tf-v1-popover-wrapper';
    wrapper.dataset.testid = 'tf-v1-popover-wrapper';
    return wrapper;
};
var buildSpinner = function () {
    var spinner = document.createElement('div');
    spinner.className = 'tf-v1-spinner';
    var icon = document.createElement('div');
    icon.className = 'tf-v1-popover-button-icon';
    icon.dataset.testid = 'spinner-icon';
    icon.append(spinner);
    return icon;
};
var buildIcon = function (customIcon, color) {
    var fillColor = (0, utils_1.getTextColor)(color);
    var triggerIcon = document.createElement('div');
    triggerIcon.className = 'tf-v1-popover-button-icon';
    var svgIcon = "<svg class=\"default\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z\" fill=\"".concat(fillColor, "\"></path>\n  </svg>");
    var isUrlIcon = customIcon === null || customIcon === void 0 ? void 0 : customIcon.startsWith('http');
    triggerIcon.innerHTML = isUrlIcon
        ? "<img alt='popover trigger icon button' src='".concat(customIcon, "'/>")
        : customIcon !== null && customIcon !== void 0 ? customIcon : svgIcon;
    triggerIcon.dataset.testid = 'default-icon';
    return triggerIcon;
};
var buildTriggerButton = function (color) {
    var textColor = (0, utils_1.getTextColor)(color);
    var button = document.createElement('button');
    button.className = 'tf-v1-popover-button';
    button.dataset.testid = 'tf-v1-popover-button';
    button.style.backgroundColor = color;
    button.style.color = textColor;
    return button;
};
var buildTooltip = function (message, hide) {
    var icon = document.createElement('span');
    icon.className = 'tf-v1-popover-tooltip-close';
    icon.dataset.testid = 'tf-v1-popover-tooltip-close';
    icon.innerHTML = '&times;';
    icon.onclick = hide;
    var textContainer = document.createElement('div');
    textContainer.className = 'tf-v1-popover-tooltip-text';
    textContainer.innerHTML = message;
    var container = document.createElement('div');
    container.className = 'tf-v1-popover-tooltip';
    container.dataset.testid = 'tf-v1-popover-tooltip';
    container.appendChild(textContainer);
    container.appendChild(icon);
    return container;
};
var defaultOptions = {
    buttonColor: '#3a7685',
};
var createPopover = function (formId, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    var options = __assign(__assign({}, defaultOptions), userOptions);
    var _a = (0, utils_1.createIframe)(formId, 'popover', options), iframe = _a.iframe, embedId = _a.embedId, refresh = _a.refresh;
    var openHandler;
    var popover = buildPopover(options.width, options.height);
    var wrapper = buildWrapper();
    var icon = buildIcon(options.customIcon, options.buttonColor || defaultOptions.buttonColor);
    var spinner = buildSpinner();
    var closeIcon = buildCloseIcon();
    var closeModal = buildCloseIcon('a', 'tf-v1-popover-close');
    var button = buildTriggerButton(options.buttonColor || defaultOptions.buttonColor);
    var container = options.container || document.body;
    container.append(popover);
    wrapper.append(iframe);
    popover.append(button);
    popover.append(closeModal);
    button.append(icon);
    var tooltip;
    var notificationDot;
    var hideTooltip = function () {
        if (tooltip && tooltip.parentNode) {
            tooltip.classList.add('closing');
            setTimeout(function () {
                (0, utils_1.unmountElement)(tooltip);
            }, 250);
        }
    };
    var hideNotificationDot = function () {
        if (notificationDot) {
            notificationDot.classList.add('closing');
            if (options.notificationDays && !options.enableSandbox) {
                (0, notification_days_1.saveNotificationDotHideUntilTime)(formId, options.notificationDays);
            }
            setTimeout(function () {
                (0, utils_1.unmountElement)(notificationDot);
            }, 250);
        }
    };
    if (options.tooltip && options.tooltip.length > 0) {
        tooltip = buildTooltip(options.tooltip, hideTooltip);
        popover.append(tooltip);
    }
    if (options.notificationDays && (options.enableSandbox || (0, notification_days_1.canBuildNotificationDot)(formId))) {
        notificationDot = (0, notification_days_1.buildNotificationDot)();
        button.append(notificationDot);
    }
    iframe.onload = function () {
        popover.classList.add('open');
        wrapper.style.opacity = '1';
        closeModal.style.opacity = '1';
        replaceIcon(spinner, closeIcon);
        (0, utils_1.addCustomKeyboardListener)(close);
    };
    var autoResize = (0, utils_1.makeAutoResize)(popover);
    var open = function () {
        if (!(0, utils_1.isOpen)(wrapper)) {
            hideTooltip();
            hideNotificationDot();
            autoResize();
            window.addEventListener('resize', autoResize);
            setTimeout(function () {
                if (!(0, utils_1.isInPage)(wrapper)) {
                    popover.append(wrapper);
                    replaceIcon(icon, spinner);
                    wrapper.style.opacity = '0';
                    closeModal.style.opacity = '0';
                }
                else {
                    wrapper.style.opacity = '0';
                    closeModal.style.opacity = '0';
                    wrapper.style.display = 'flex';
                    setTimeout(function () {
                        popover.classList.add('open');
                        wrapper.style.opacity = '1';
                        closeModal.style.opacity = '1';
                    });
                    replaceIcon(icon, closeIcon);
                }
            });
        }
    };
    var close = function () {
        var _a;
        if ((0, utils_1.isOpen)(popover)) {
            (_a = userOptions.onClose) === null || _a === void 0 ? void 0 : _a.call(userOptions);
            setTimeout(function () {
                if (options.keepSession) {
                    wrapper.style.display = 'none';
                }
                else {
                    (0, utils_1.unmountElement)(wrapper);
                }
                popover.classList.remove('open');
                replaceIcon(closeIcon, icon);
            }, 250);
        }
    };
    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);
    var toggle = function () {
        (0, utils_1.isOpen)(wrapper) ? close() : open();
    };
    var unmount = function () {
        (0, utils_1.unmountElement)(popover);
        window.removeEventListener('resize', autoResize);
        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {
            openHandler.remove();
        }
    };
    button.onclick = toggle;
    closeModal.onclick = close;
    if (options.open && !(0, utils_1.isOpen)(wrapper)) {
        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);
    }
    return {
        open: open,
        close: close,
        toggle: toggle,
        refresh: refresh,
        unmount: unmount,
    };
};
exports.createPopover = createPopover;


/***/ }),

/***/ "./src/factories/create-popover/index.ts":
/*!***********************************************!*\
  !*** ./src/factories/create-popover/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-popover */ "./src/factories/create-popover/create-popover.ts"), exports);
__exportStar(__webpack_require__(/*! ./popover-options */ "./src/factories/create-popover/popover-options.ts"), exports);


/***/ }),

/***/ "./src/factories/create-popover/notification-days.ts":
/*!***********************************************************!*\
  !*** ./src/factories/create-popover/notification-days.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildNotificationDot = exports.canBuildNotificationDot = exports.saveNotificationDotHideUntilTime = void 0;
var LOCAL_STORAGE_NOTIFICATION_DATA = 'tfNotificationData';
var getLocalStorageData = function () {
    var data = localStorage.getItem(LOCAL_STORAGE_NOTIFICATION_DATA);
    return data ? JSON.parse(data) : {};
};
var saveToLocalStorage = function (data) {
    data && localStorage.setItem(LOCAL_STORAGE_NOTIFICATION_DATA, JSON.stringify(data));
};
var getNotificationDotHideUntilTime = function (formId) {
    var _a;
    var data = getLocalStorageData();
    return ((_a = data[formId]) === null || _a === void 0 ? void 0 : _a.hideUntilTime) || 0;
};
var saveNotificationDotHideUntilTime = function (formId, days) {
    var _a;
    var hideUntilTime = new Date();
    hideUntilTime.setDate(hideUntilTime.getDate() + days);
    saveToLocalStorage(__assign(__assign({}, getLocalStorageData()), (_a = {}, _a[formId] = {
        hideUntilTime: hideUntilTime.getTime(),
    }, _a)));
};
exports.saveNotificationDotHideUntilTime = saveNotificationDotHideUntilTime;
var clearNotificationDotHideUntilTime = function (formId) {
    var data = getLocalStorageData();
    delete data[formId];
    saveToLocalStorage(data);
};
var canBuildNotificationDot = function (formId) {
    var hideUntilTime = getNotificationDotHideUntilTime(formId);
    var now = new Date().getTime();
    if (now > hideUntilTime) {
        if (hideUntilTime) {
            clearNotificationDotHideUntilTime(formId);
        }
        return true;
    }
    return false;
};
exports.canBuildNotificationDot = canBuildNotificationDot;
var buildNotificationDot = function () {
    var dot = document.createElement('span');
    dot.className = 'tf-v1-popover-unread-dot';
    dot.dataset.testid = 'tf-v1-popover-unread-dot';
    return dot;
};
exports.buildNotificationDot = buildNotificationDot;


/***/ }),

/***/ "./src/factories/create-popover/popover-options.ts":
/*!*********************************************************!*\
  !*** ./src/factories/create-popover/popover-options.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/factories/create-popup/create-popup.ts":
/*!****************************************************!*\
  !*** ./src/factories/create-popup/create-popup.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPopup = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
var utils_2 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var buildPopup = function () {
    var popup = document.createElement('div');
    popup.className = 'tf-v1-popup';
    popup.dataset.testid = 'tf-v1-popup';
    popup.style.opacity = '0';
    return popup;
};
var buildSpinner = function () {
    var spinner = document.createElement('div');
    spinner.className = 'tf-v1-spinner';
    return spinner;
};
var buildWrapper = function (width, height, size) {
    var wrapper = document.createElement('div');
    wrapper.className = 'tf-v1-iframe-wrapper';
    wrapper.style.opacity = '0';
    if ((0, utils_1.isDefined)(width) && (0, utils_1.isDefined)(height)) {
        return (0, utils_1.setElementSize)(wrapper, { width: width, height: height });
    }
    wrapper.style.width = "calc(".concat(size, "% - 80px)");
    wrapper.style.height = "calc(".concat(size, "% - 80px)");
    return wrapper;
};
var buildCloseButton = function (close) {
    var closeButton = document.createElement('a');
    closeButton.className = 'tf-v1-close tf-v1-close-icon';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = close;
    return closeButton;
};
var createPopup = function (formId, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!(0, utils_1.hasDom)()) {
        return {
            open: function () { },
            close: function () { },
            toggle: function () { },
            refresh: function () { },
            unmount: function () { },
        };
    }
    var width = userOptions.width, height = userOptions.height, _a = userOptions.size, size = _a === void 0 ? constants_1.POPUP_SIZE : _a, onClose = userOptions.onClose, options = __rest(userOptions, ["width", "height", "size", "onClose"]);
    var _b = (0, utils_1.createIframe)(formId, 'popup', options), iframe = _b.iframe, embedId = _b.embedId, refresh = _b.refresh;
    var scrollInitialState = document.body.style.overflow;
    var openHandler;
    var popup = buildPopup();
    var spinner = buildSpinner();
    var wrapper = buildWrapper(width, height, size);
    wrapper.append(iframe);
    popup.append(spinner);
    popup.append(wrapper);
    var container = options.container || document.body;
    iframe.onload = function () {
        wrapper.style.opacity = '1';
        setTimeout(function () {
            spinner.style.display = 'none';
        }, 250);
        (0, utils_1.addCustomKeyboardListener)(close);
    };
    var autoResize = (0, utils_2.makeAutoResize)(popup);
    var open = function () {
        if (!(0, utils_2.isOpen)(popup)) {
            if (!(0, utils_2.isInPage)(popup)) {
                spinner.style.display = 'block';
                container.append(popup);
            }
            else {
                popup.style.display = 'flex';
            }
            document.body.style.overflow = 'hidden';
            autoResize();
            window.addEventListener('resize', autoResize);
            setTimeout(function () {
                popup.style.opacity = '1';
            });
        }
    };
    var close = function () {
        if ((0, utils_2.isOpen)(popup)) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            popup.style.opacity = '0';
            document.body.style.overflow = scrollInitialState;
            setTimeout(function () {
                if (options.keepSession) {
                    popup.style.display = 'none';
                }
                else {
                    unmount();
                }
            }, 250);
        }
    };
    wrapper.append(buildCloseButton(close));
    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);
    var toggle = function () {
        (0, utils_2.isOpen)(popup) ? close() : open();
    };
    if (options.open && !(0, utils_2.isOpen)(popup)) {
        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);
    }
    var unmount = function () {
        (0, utils_1.unmountElement)(popup);
        window.removeEventListener('resize', autoResize);
        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {
            openHandler.remove();
        }
    };
    return {
        open: open,
        close: close,
        toggle: toggle,
        refresh: refresh,
        unmount: unmount,
    };
};
exports.createPopup = createPopup;


/***/ }),

/***/ "./src/factories/create-popup/index.ts":
/*!*********************************************!*\
  !*** ./src/factories/create-popup/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-popup */ "./src/factories/create-popup/create-popup.ts"), exports);
__exportStar(__webpack_require__(/*! ./popup-options */ "./src/factories/create-popup/popup-options.ts"), exports);


/***/ }),

/***/ "./src/factories/create-popup/popup-options.ts":
/*!*****************************************************!*\
  !*** ./src/factories/create-popup/popup-options.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/factories/create-sidetab/create-sidetab.ts":
/*!********************************************************!*\
  !*** ./src/factories/create-sidetab/create-sidetab.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSidetab = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var defaultOptions = {
    buttonColor: '#3a7685',
    buttonText: 'Launch me',
};
var buildSidetab = function (width, height) {
    var sidetab = document.createElement('div');
    sidetab.className = 'tf-v1-sidetab';
    sidetab.dataset.testid = 'tf-v1-sidetab';
    return (0, utils_1.setElementSize)(sidetab, { width: width, height: height });
};
var buildWrapper = function () {
    var wrapper = document.createElement('div');
    wrapper.className = 'tf-v1-sidetab-wrapper';
    wrapper.dataset.testid = 'tf-v1-sidetab-wrapper';
    return wrapper;
};
var buildSpinner = function () {
    var spinner = document.createElement('div');
    spinner.className = 'tf-v1-spinner';
    var icon = document.createElement('div');
    icon.className = 'tf-v1-sidetab-button-icon';
    icon.dataset.testid = 'spinner-icon';
    icon.append(spinner);
    return icon;
};
var buildTriggerButton = function (color) {
    var textColor = (0, utils_1.getTextColor)(color);
    var button = document.createElement('button');
    button.className = 'tf-v1-sidetab-button';
    button.style.backgroundColor = color;
    button.style.color = textColor;
    return button;
};
var buildTriggerButtonText = function (text) {
    var buttonText = document.createElement('span');
    buttonText.className = 'tf-v1-sidetab-button-text';
    buttonText.innerHTML = text;
    return buttonText;
};
var buildIcon = function (customIcon, color) {
    var fillColor = (0, utils_1.getTextColor)(color);
    var triggerIcon = document.createElement('div');
    triggerIcon.className = 'tf-v1-sidetab-button-icon';
    var svgIcon = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z\" fill=\"".concat(fillColor, "\"></path>\n  </svg>");
    var isUrlIcon = customIcon === null || customIcon === void 0 ? void 0 : customIcon.startsWith('http');
    triggerIcon.innerHTML = isUrlIcon
        ? "<img alt='popover trigger icon button' src='".concat(customIcon, "'/>")
        : customIcon !== null && customIcon !== void 0 ? customIcon : svgIcon;
    triggerIcon.dataset.testid = 'default-icon';
    return triggerIcon;
};
var buildCloseIcon = function (element, className) {
    if (element === void 0) { element = 'div'; }
    if (className === void 0) { className = 'tf-v1-sidetab-button-icon'; }
    var closeButton = document.createElement(element);
    closeButton.className = "".concat(className, " tf-v1-close-icon");
    closeButton.innerHTML = '&times;';
    closeButton.dataset.testid = className;
    return closeButton;
};
var replaceElementChild = function (childToReplace, newChild) {
    var element = childToReplace.parentNode;
    if (element) {
        element.removeChild(childToReplace);
        element.appendChild(newChild);
    }
};
var createSidetab = function (formId, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    var options = __assign(__assign({}, defaultOptions), userOptions);
    var _a = (0, utils_1.createIframe)(formId, 'side-tab', options), iframe = _a.iframe, embedId = _a.embedId, refresh = _a.refresh;
    var sidetab = buildSidetab(options.width, options.height);
    var wrapper = buildWrapper();
    var spinner = buildSpinner();
    var button = buildTriggerButton(options.buttonColor || defaultOptions.buttonColor);
    var buttonText = buildTriggerButtonText(options.buttonText || defaultOptions.buttonText);
    var icon = buildIcon(options.customIcon, options.buttonColor || defaultOptions.buttonColor);
    var closeIcon = buildCloseIcon();
    var closeModal = buildCloseIcon('a', 'tf-v1-sidetab-close');
    var container = options.container || document.body;
    var openHandler;
    container.append(sidetab);
    wrapper.append(iframe);
    sidetab.append(button);
    sidetab.append(closeModal);
    button.append(icon);
    button.append(buttonText);
    setTimeout(function () {
        sidetab.classList.add('ready');
    }, 250);
    iframe.onload = function () {
        sidetab.classList.add('open');
        replaceElementChild(spinner, closeIcon);
        (0, utils_1.addCustomKeyboardListener)(close);
    };
    var autoResize = (0, utils_1.makeAutoResize)(sidetab);
    var open = function () {
        if (!(0, utils_1.isOpen)(wrapper)) {
            autoResize();
            window.addEventListener('resize', autoResize);
            if (!(0, utils_1.isInPage)(wrapper)) {
                sidetab.append(wrapper);
                replaceElementChild(icon, spinner);
            }
            else {
                wrapper.style.display = 'flex';
                sidetab.classList.add('open');
                replaceElementChild(icon, closeIcon);
            }
        }
    };
    var close = function () {
        var _a;
        if ((0, utils_1.isOpen)(wrapper)) {
            (_a = options.onClose) === null || _a === void 0 ? void 0 : _a.call(options);
            sidetab.classList.remove('open');
            setTimeout(function () {
                if (options.keepSession) {
                    wrapper.style.display = 'none';
                }
                else {
                    (0, utils_1.unmountElement)(wrapper);
                }
                replaceElementChild(closeIcon, icon);
            }, 250);
        }
    };
    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);
    var toggle = function () {
        (0, utils_1.isOpen)(wrapper) ? close() : open();
    };
    button.onclick = toggle;
    closeModal.onclick = close;
    if (options.open && !(0, utils_1.isOpen)(wrapper)) {
        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);
    }
    var unmount = function () {
        (0, utils_1.unmountElement)(sidetab);
        window.removeEventListener('resize', autoResize);
        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {
            openHandler.remove();
        }
    };
    return {
        open: open,
        close: close,
        toggle: toggle,
        refresh: refresh,
        unmount: unmount,
    };
};
exports.createSidetab = createSidetab;


/***/ }),

/***/ "./src/factories/create-sidetab/index.ts":
/*!***********************************************!*\
  !*** ./src/factories/create-sidetab/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-sidetab */ "./src/factories/create-sidetab/create-sidetab.ts"), exports);
__exportStar(__webpack_require__(/*! ./sidetab-options */ "./src/factories/create-sidetab/sidetab-options.ts"), exports);


/***/ }),

/***/ "./src/factories/create-sidetab/sidetab-options.ts":
/*!*********************************************************!*\
  !*** ./src/factories/create-sidetab/sidetab-options.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/factories/create-slider/create-slider.ts":
/*!******************************************************!*\
  !*** ./src/factories/create-slider/create-slider.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSlider = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var constants_1 = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
var buildSlider = function (position) {
    var slider = document.createElement('div');
    slider.className = "tf-v1-slider ".concat(position);
    slider.dataset.testid = 'tf-v1-slider';
    slider.style.opacity = '0';
    return slider;
};
var buildSpinner = function () {
    var spinner = document.createElement('div');
    spinner.className = 'tf-v1-spinner';
    return spinner;
};
var buildWrapper = function (position, width) {
    var wrapper = document.createElement('div');
    wrapper.className = 'tf-v1-iframe-wrapper';
    wrapper.style[position] = '-100%';
    return (0, utils_1.setElementSize)(wrapper, { width: width });
};
var buildCloseButton = function (close) {
    var closeButton = document.createElement('a');
    closeButton.className = 'tf-v1-close tf-v1-close-icon';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = close;
    return closeButton;
};
var createSlider = function (formId, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!(0, utils_1.hasDom)()) {
        return {
            open: function () { },
            close: function () { },
            toggle: function () { },
            refresh: function () { },
            unmount: function () { },
        };
    }
    var _a = userOptions.position, position = _a === void 0 ? constants_1.SLIDER_POSITION : _a, _b = userOptions.width, width = _b === void 0 ? constants_1.SLIDER_WIDTH : _b, onClose = userOptions.onClose, options = __rest(userOptions, ["position", "width", "onClose"]);
    var _c = (0, utils_1.createIframe)(formId, 'slider', options), iframe = _c.iframe, embedId = _c.embedId, refresh = _c.refresh;
    var scrollInitialState = document.body.style.overflow;
    var openHandler;
    var slider = buildSlider(position);
    var spinner = buildSpinner();
    var wrapper = buildWrapper(position, width);
    wrapper.append(iframe);
    slider.append(spinner);
    slider.append(wrapper);
    var container = options.container || document.body;
    iframe.onload = function () {
        wrapper.style[position] = '0';
        setTimeout(function () {
            spinner.style.display = 'none';
        }, 500);
        (0, utils_1.addCustomKeyboardListener)(close);
    };
    var autoResize = (0, utils_1.makeAutoResize)(slider);
    var open = function () {
        if (!(0, utils_1.isOpen)(slider)) {
            autoResize();
            window.addEventListener('resize', autoResize);
            if (!(0, utils_1.isInPage)(slider)) {
                container.append(slider);
                spinner.style.display = 'block';
            }
            else {
                slider.style.display = 'flex';
                setTimeout(function () {
                    wrapper.style[position] = '0';
                });
            }
            document.body.style.overflow = 'hidden';
            setTimeout(function () {
                slider.style.opacity = '1';
            });
        }
    };
    var close = function () {
        if ((0, utils_1.isOpen)(slider)) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            slider.style.opacity = '0';
            wrapper.style[position] = '-100%';
            document.body.style.overflow = scrollInitialState;
            setTimeout(function () {
                if (options.keepSession) {
                    slider.style.display = 'none';
                }
                else {
                    unmount();
                }
            }, 500);
        }
    };
    (0, utils_1.setAutoClose)(embedId, options.autoClose, close);
    var toggle = function () {
        (0, utils_1.isOpen)(slider) ? close() : open();
    };
    wrapper.append(buildCloseButton(close));
    if (options.open && !(0, utils_1.isOpen)(slider)) {
        openHandler = (0, utils_1.handleCustomOpen)(open, options.open, options.openValue);
    }
    var unmount = function () {
        (0, utils_1.unmountElement)(slider);
        window.removeEventListener('resize', autoResize);
        if (options.open && (openHandler === null || openHandler === void 0 ? void 0 : openHandler.remove)) {
            openHandler.remove();
        }
    };
    return {
        open: open,
        close: close,
        toggle: toggle,
        refresh: refresh,
        unmount: unmount,
    };
};
exports.createSlider = createSlider;


/***/ }),

/***/ "./src/factories/create-slider/index.ts":
/*!**********************************************!*\
  !*** ./src/factories/create-slider/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-slider */ "./src/factories/create-slider/create-slider.ts"), exports);
__exportStar(__webpack_require__(/*! ./slider-options */ "./src/factories/create-slider/slider-options.ts"), exports);


/***/ }),

/***/ "./src/factories/create-slider/slider-options.ts":
/*!*******************************************************!*\
  !*** ./src/factories/create-slider/slider-options.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/factories/create-widget/create-widget.ts":
/*!******************************************************!*\
  !*** ./src/factories/create-widget/create-widget.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createWidget = void 0;
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var get_form_event_handler_1 = __webpack_require__(/*! ../../utils/create-iframe/get-form-event-handler */ "./src/utils/create-iframe/get-form-event-handler.ts");
var elements_1 = __webpack_require__(/*! ./elements */ "./src/factories/create-widget/elements/index.ts");
var buildCloseButton = function () {
    var closeButton = document.createElement('a');
    closeButton.className = 'tf-v1-widget-close tf-v1-close-icon';
    closeButton.innerHTML = '&times;';
    return closeButton;
};
var createWidget = function (formId, options) {
    if (!(0, utils_1.hasDom)()) {
        return {
            refresh: function () { },
            unmount: function () { },
        };
    }
    var widgetOptions = options;
    if (!options.inlineOnMobile && (options.forceTouch || (0, utils_1.isFullscreen)())) {
        widgetOptions.enableFullscreen = true;
        widgetOptions.forceTouch = true;
    }
    var _a = (0, utils_1.createIframe)(formId, 'widget', widgetOptions), embedId = _a.embedId, iframe = _a.iframe, refresh = _a.refresh;
    var widget = (0, elements_1.buildWidget)(iframe, options.width, options.height);
    if (widgetOptions.autoResize) {
        var _b = typeof widgetOptions.autoResize === 'string'
            ? widgetOptions.autoResize.split(',').map(function (value) { return parseInt(value); })
            : [], minHeight_1 = _b[0], maxHeight_1 = _b[1];
        window.addEventListener('message', (0, get_form_event_handler_1.getFormHeightChangedHandler)(embedId, function (data) {
            var containerHeight = Math.max(data.height + 20, minHeight_1 || 0);
            if (maxHeight_1) {
                containerHeight = Math.min(containerHeight, maxHeight_1);
            }
            options.container.style.height = "".concat(containerHeight, "px");
        }));
    }
    var appendWidget = function () { return options.container.append(widget); };
    options.container.innerHTML = '';
    if (options.lazy) {
        (0, utils_1.lazyInitialize)(options.container, appendWidget);
    }
    else {
        appendWidget();
    }
    if (widgetOptions.enableFullscreen) {
        var container_1 = options.container;
        var autoResize_1 = (0, utils_1.makeAutoResize)(container_1);
        var originalHeight_1 = container_1.style.height;
        var openPopup = function () {
            container_1.classList.add('tf-v1-widget-fullscreen');
            autoResize_1();
            window.addEventListener('resize', autoResize_1);
        };
        window.addEventListener('message', (0, get_form_event_handler_1.getWelcomeScreenHiddenHandler)(embedId, openPopup));
        var closeButton_1 = buildCloseButton();
        var close_1 = function () {
            var _a;
            window.removeEventListener('resize', autoResize_1);
            container_1.style.height = originalHeight_1;
            (_a = options.onClose) === null || _a === void 0 ? void 0 : _a.call(options);
            container_1.classList.remove('tf-v1-widget-fullscreen');
            if (options.keepSession) {
                var overlay_1 = document.createElement('div');
                overlay_1.className = 'tf-v1-widget-iframe-overlay';
                overlay_1.onclick = function () {
                    container_1.classList.add('tf-v1-widget-fullscreen');
                    (0, utils_1.unmountElement)(overlay_1);
                };
                widget.append(overlay_1);
            }
            else {
                options.container.innerHTML = '';
                appendWidget();
                container_1.append(closeButton_1);
            }
        };
        closeButton_1.onclick = close_1;
        container_1.append(closeButton_1);
    }
    return {
        refresh: refresh,
        unmount: function () { return (0, utils_1.unmountElement)(widget); },
    };
};
exports.createWidget = createWidget;


/***/ }),

/***/ "./src/factories/create-widget/elements/build-widget.ts":
/*!**************************************************************!*\
  !*** ./src/factories/create-widget/elements/build-widget.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildWidget = void 0;
var utils_1 = __webpack_require__(/*! ../../../utils */ "./src/utils/index.ts");
var buildWidget = function (iframe, width, height) {
    var widget = document.createElement('div');
    widget.className = 'tf-v1-widget';
    widget.dataset.testid = 'tf-v1-widget';
    widget.append(iframe);
    return (0, utils_1.setElementSize)(widget, { width: width, height: height });
};
exports.buildWidget = buildWidget;


/***/ }),

/***/ "./src/factories/create-widget/elements/index.ts":
/*!*******************************************************!*\
  !*** ./src/factories/create-widget/elements/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./build-widget */ "./src/factories/create-widget/elements/build-widget.ts"), exports);


/***/ }),

/***/ "./src/factories/create-widget/index.ts":
/*!**********************************************!*\
  !*** ./src/factories/create-widget/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-widget */ "./src/factories/create-widget/create-widget.ts"), exports);
__exportStar(__webpack_require__(/*! ./widget-options */ "./src/factories/create-widget/widget-options.ts"), exports);


/***/ }),

/***/ "./src/factories/create-widget/widget-options.ts":
/*!*******************************************************!*\
  !*** ./src/factories/create-widget/widget-options.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./factories/create-popover */ "./src/factories/create-popover/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./factories/create-popup */ "./src/factories/create-popup/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./factories/create-slider */ "./src/factories/create-slider/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./factories/create-widget */ "./src/factories/create-widget/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./factories/create-sidetab */ "./src/factories/create-sidetab/index.ts"), exports);


/***/ }),

/***/ "./src/utils/build-iframe-src.ts":
/*!***************************************!*\
  !*** ./src/utils/build-iframe-src.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildIframeSrc = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var remove_undefined_keys_1 = __webpack_require__(/*! ./remove-undefined-keys */ "./src/utils/remove-undefined-keys.ts");
var is_defined_1 = __webpack_require__(/*! ./is-defined */ "./src/utils/is-defined.ts");
var get_transitive_search_params_1 = __webpack_require__(/*! ./get-transitive-search-params */ "./src/utils/get-transitive-search-params.ts");
var getDefaultUrlOptions = function () {
    var _a;
    return ({
        source: (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname.replace(/^www\./, ''),
        medium: 'embed-sdk',
        mediumVersion: 'next',
    });
};
var addDefaultUrlOptions = function (options) {
    return __assign(__assign({}, getDefaultUrlOptions()), (0, remove_undefined_keys_1.removeUndefinedKeys)(options));
};
var typesToEmbed = {
    widget: 'embed-widget',
    popup: 'popup-blank',
    slider: 'popup-drawer',
    popover: 'popup-popover',
    'side-tab': 'popup-side-panel',
};
var mapOptionsToQueryParams = function (type, embedId, options) {
    var transitiveSearchParams = options.transitiveSearchParams, source = options.source, medium = options.medium, mediumVersion = options.mediumVersion, hideFooter = options.hideFooter, hideHeaders = options.hideHeaders, opacity = options.opacity, disableTracking = options.disableTracking, enableSandbox = options.enableSandbox, disableAutoFocus = options.disableAutoFocus, shareGaInstance = options.shareGaInstance, forceTouch = options.forceTouch, enableFullscreen = options.enableFullscreen, tracking = options.tracking, redirectTarget = options.redirectTarget;
    var transitiveParams = (0, get_transitive_search_params_1.getTransitiveSearchParams)(transitiveSearchParams);
    var params = {
        'typeform-embed-id': embedId,
        'typeform-embed': typesToEmbed[type],
        'typeform-source': source,
        'typeform-medium': medium,
        'typeform-medium-version': mediumVersion,
        'embed-hide-footer': hideFooter ? 'true' : undefined,
        'embed-hide-headers': hideHeaders ? 'true' : undefined,
        'embed-opacity': opacity,
        'disable-tracking': disableTracking || enableSandbox ? 'true' : undefined,
        'disable-auto-focus': disableAutoFocus ? 'true' : undefined,
        '__dangerous-disable-submissions': enableSandbox ? 'true' : undefined,
        'share-ga-instance': shareGaInstance ? 'true' : undefined,
        'force-touch': forceTouch ? 'true' : undefined,
        'add-placeholder-ws': type === 'widget' && enableFullscreen ? 'true' : undefined,
        'typeform-embed-redirect-target': redirectTarget,
    };
    return __assign(__assign(__assign({}, params), transitiveParams), tracking);
};
var getBaseUrl = function (formString, chat) {
    if (chat === void 0) { chat = false; }
    var prefix = chat ? 'c' : 'to';
    return new URL(formString.startsWith('http://') || formString.startsWith('https://')
        ? formString
        : "".concat(constants_1.FORM_BASE_URL, "/").concat(prefix, "/").concat(formString));
};
var buildIframeSrc = function (params) {
    var formId = params.formId, type = params.type, embedId = params.embedId, options = params.options;
    var queryParams = mapOptionsToQueryParams(type, embedId, addDefaultUrlOptions(options));
    var url = getBaseUrl(formId, options.chat);
    Object.entries(queryParams)
        .filter(function (_a) {
        var paramValue = _a[1];
        return (0, is_defined_1.isDefined)(paramValue);
    })
        .forEach(function (_a) {
        var paramName = _a[0], paramValue = _a[1];
        url.searchParams.set(paramName, paramValue);
    });
    if (options.hidden) {
        var tmpHashUrl_1 = new URL(constants_1.FORM_BASE_URL);
        Object.entries(options.hidden)
            .filter(function (_a) {
            var paramValue = _a[1];
            return (0, is_defined_1.isDefined)(paramValue);
        })
            .forEach(function (_a) {
            var paramName = _a[0], paramValue = _a[1];
            tmpHashUrl_1.searchParams.set(paramName, paramValue);
        });
        var hiddenFields = tmpHashUrl_1.searchParams.toString();
        if (hiddenFields) {
            url.hash = hiddenFields;
        }
    }
    return url.href;
};
exports.buildIframeSrc = buildIframeSrc;


/***/ }),

/***/ "./src/utils/create-custom-launch-options.ts":
/*!***************************************************!*\
  !*** ./src/utils/create-custom-launch-options.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleCustomOpen = void 0;
var emptyHandler = { remove: function () { } };
var openOnExit = function (exitThreshold, open) {
    var prevY = 0;
    var handleMouseMove = function (event) {
        // open popup  if the mouse is in top part of the page and moving towards top of the screen
        if (event.clientY < exitThreshold && event.clientY < prevY) {
            document.removeEventListener('mousemove', handleMouseMove, true);
            open();
        }
        else {
            prevY = event.clientY;
        }
    };
    document.addEventListener('mousemove', handleMouseMove, true);
    return {
        remove: function () { return document.removeEventListener('mousemove', handleMouseMove, true); },
    };
};
var openOnScroll = function (scrollThreshold, open) {
    function handleScroll() {
        var offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        var clientTop = document.documentElement.clientTop || 0;
        var pageHeight = document.documentElement.scrollHeight;
        var scrollTopPixels = offsetTop - clientTop;
        var scrollTopPercentage = (scrollTopPixels / pageHeight) * 100;
        var scrolledToTheBottom = scrollTopPixels + window.innerHeight >= pageHeight;
        if (scrollTopPercentage >= scrollThreshold || scrolledToTheBottom) {
            open();
            document.removeEventListener('scroll', handleScroll);
        }
    }
    document.addEventListener('scroll', handleScroll);
    return {
        remove: function () { return document.removeEventListener('scroll', handleScroll); },
    };
};
var handleCustomOpen = function (open, openType, value) {
    switch (openType) {
        case 'load':
            open();
            return emptyHandler;
        case 'exit':
            if (value) {
                return openOnExit(value, open);
            }
            return emptyHandler;
        case 'time':
            setTimeout(function () {
                open();
            }, value);
            return emptyHandler;
        case 'scroll':
            if (value) {
                return openOnScroll(value, open);
            }
            return emptyHandler;
        default:
            return emptyHandler;
        // do not open automatically
    }
};
exports.handleCustomOpen = handleCustomOpen;


/***/ }),

/***/ "./src/utils/create-iframe/create-iframe.ts":
/*!**************************************************!*\
  !*** ./src/utils/create-iframe/create-iframe.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createIframe = void 0;
var build_iframe_src_1 = __webpack_require__(/*! ../build-iframe-src */ "./src/utils/build-iframe-src.ts");
var __1 = __webpack_require__(/*! ../ */ "./src/utils/index.ts");
var generate_embed_id_1 = __webpack_require__(/*! ./generate-embed-id */ "./src/utils/create-iframe/generate-embed-id.ts");
var get_form_event_handler_1 = __webpack_require__(/*! ./get-form-event-handler */ "./src/utils/create-iframe/get-form-event-handler.ts");
var trigger_iframe_redraw_1 = __webpack_require__(/*! ./trigger-iframe-redraw */ "./src/utils/create-iframe/trigger-iframe-redraw.ts");
var setup_custom_keyboard_close_1 = __webpack_require__(/*! ./setup-custom-keyboard-close */ "./src/utils/create-iframe/setup-custom-keyboard-close.ts");
var refresh_iframe_1 = __webpack_require__(/*! ./refresh-iframe */ "./src/utils/create-iframe/refresh-iframe.ts");
var createIframe = function (formId, type, options) {
    var embedId = (0, generate_embed_id_1.generateEmbedId)();
    var _a = options.iframeProps, iframeProps = _a === void 0 ? {} : _a, onReady = options.onReady, onQuestionChanged = options.onQuestionChanged, onHeightChanged = options.onHeightChanged, onSubmit = options.onSubmit, onEndingButtonClick = options.onEndingButtonClick, shareGaInstance = options.shareGaInstance;
    var src = (0, build_iframe_src_1.buildIframeSrc)({ formId: formId, embedId: embedId, type: type, options: options });
    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.dataset.testid = 'iframe';
    iframe.style.border = '0px';
    iframe.allow = 'microphone; camera';
    Object.keys(iframeProps).forEach(function (key) {
        iframe.setAttribute(key, iframeProps[key]);
    });
    iframe.addEventListener('load', trigger_iframe_redraw_1.triggerIframeRedraw, { once: true });
    window.addEventListener('message', (0, get_form_event_handler_1.getFormReadyHandler)(embedId, onReady));
    window.addEventListener('message', (0, get_form_event_handler_1.getFormQuestionChangedHandler)(embedId, onQuestionChanged));
    window.addEventListener('message', (0, get_form_event_handler_1.getFormHeightChangedHandler)(embedId, onHeightChanged));
    window.addEventListener('message', (0, get_form_event_handler_1.getFormSubmitHandler)(embedId, onSubmit));
    window.addEventListener('message', (0, get_form_event_handler_1.getFormThemeHandler)(embedId));
    window.addEventListener('message', (0, get_form_event_handler_1.getThankYouScreenButtonClickHandler)(embedId, onEndingButtonClick));
    if (type !== 'widget') {
        window.addEventListener('message', setup_custom_keyboard_close_1.dispatchCustomKeyEventFromIframe);
    }
    if (shareGaInstance) {
        window.addEventListener('message', (0, get_form_event_handler_1.getFormReadyHandler)(embedId, function () {
            (0, __1.setupGaInstance)(iframe, embedId, shareGaInstance);
        }));
    }
    var refresh = function () { return (0, refresh_iframe_1.refreshIframe)(iframe); };
    return { iframe: iframe, embedId: embedId, refresh: refresh };
};
exports.createIframe = createIframe;


/***/ }),

/***/ "./src/utils/create-iframe/generate-embed-id.ts":
/*!******************************************************!*\
  !*** ./src/utils/create-iframe/generate-embed-id.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateEmbedId = void 0;
var generateEmbedId = function () {
    var randomNumber = Math.random();
    var _a = String(randomNumber).split('.'), randomString = _a[1];
    return randomString;
};
exports.generateEmbedId = generateEmbedId;


/***/ }),

/***/ "./src/utils/create-iframe/get-form-event-handler.ts":
/*!***********************************************************!*\
  !*** ./src/utils/create-iframe/get-form-event-handler.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getThankYouScreenButtonClickHandler = exports.getFormThemeHandler = exports.getWelcomeScreenHiddenHandler = exports.getFormSubmitHandler = exports.getFormHeightChangedHandler = exports.getFormQuestionChangedHandler = exports.getFormReadyHandler = void 0;
var getFormReadyHandler = function (embedId, callback) {
    return getFormEventHandler('form-ready', embedId, callback);
};
exports.getFormReadyHandler = getFormReadyHandler;
var getFormQuestionChangedHandler = function (embedId, callback) {
    return getFormEventHandler('form-screen-changed', embedId, callback);
};
exports.getFormQuestionChangedHandler = getFormQuestionChangedHandler;
var getFormHeightChangedHandler = function (embedId, callback) {
    return getFormEventHandler('form-height-changed', embedId, callback);
};
exports.getFormHeightChangedHandler = getFormHeightChangedHandler;
var getFormSubmitHandler = function (embedId, callback) {
    return getFormEventHandler('form-submit', embedId, callback);
};
exports.getFormSubmitHandler = getFormSubmitHandler;
var getWelcomeScreenHiddenHandler = function (embedId, callback) {
    return getFormEventHandler('welcome-screen-hidden', embedId, callback);
};
exports.getWelcomeScreenHiddenHandler = getWelcomeScreenHiddenHandler;
var getFormThemeHandler = function (embedId) {
    return getFormEventHandler('form-theme', embedId, function (data) {
        var _a;
        if (data === null || data === void 0 ? void 0 : data.theme) {
            var closeButtonElement = document.querySelector('.tf-v1-close-icon');
            if (closeButtonElement) {
                closeButtonElement.style.color = (_a = data.theme) === null || _a === void 0 ? void 0 : _a.color;
            }
        }
    });
};
exports.getFormThemeHandler = getFormThemeHandler;
var getThankYouScreenButtonClickHandler = function (embedId, callback) {
    return getFormEventHandler('thank-you-screen-button-click', embedId, callback);
};
exports.getThankYouScreenButtonClickHandler = getThankYouScreenButtonClickHandler;
function getFormEventHandler(eventType, expectedEmbedId, callback) {
    return function (event) {
        var _a = event.data, type = _a.type, embedId = _a.embedId, data = __rest(_a, ["type", "embedId"]);
        if (type !== eventType) {
            return;
        }
        if (embedId !== expectedEmbedId) {
            return;
        }
        callback === null || callback === void 0 ? void 0 : callback(data);
    };
}


/***/ }),

/***/ "./src/utils/create-iframe/index.ts":
/*!******************************************!*\
  !*** ./src/utils/create-iframe/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-iframe */ "./src/utils/create-iframe/create-iframe.ts"), exports);
__exportStar(__webpack_require__(/*! ./setup-custom-keyboard-close */ "./src/utils/create-iframe/setup-custom-keyboard-close.ts"), exports);


/***/ }),

/***/ "./src/utils/create-iframe/refresh-iframe.ts":
/*!***************************************************!*\
  !*** ./src/utils/create-iframe/refresh-iframe.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.refreshIframe = void 0;
var refreshIframe = function (iframe) {
    if (iframe) {
        var source = iframe.src;
        if (source.includes('&refresh')) {
            var splitURL = source.split('&refresh#');
            iframe.src = splitURL.join('#');
        }
        else {
            var splitURL = source.split('#');
            splitURL[0] = "".concat(splitURL[0], "&refresh");
            iframe.src = splitURL.join('#');
        }
    }
};
exports.refreshIframe = refreshIframe;


/***/ }),

/***/ "./src/utils/create-iframe/setup-custom-keyboard-close.ts":
/*!****************************************************************!*\
  !*** ./src/utils/create-iframe/setup-custom-keyboard-close.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dispatchCustomKeyEventFromIframe = exports.removeCustomKeyboardListener = exports.addCustomKeyboardListener = void 0;
var POST_MESSAGE = 'form-close';
var KEY_EVENT = 'Escape';
var closeOnKeyEvent = function (evt, close) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (evt.code === KEY_EVENT && typeof close === 'function') {
            close();
            (0, exports.removeCustomKeyboardListener)();
        }
        return [2 /*return*/];
    });
}); };
var addCustomKeyboardListener = function (callback) {
    return window.document.addEventListener('keydown', function (evt) { return closeOnKeyEvent(evt, callback); });
};
exports.addCustomKeyboardListener = addCustomKeyboardListener;
var removeCustomKeyboardListener = function () { return window.document.removeEventListener('keydown', closeOnKeyEvent); };
exports.removeCustomKeyboardListener = removeCustomKeyboardListener;
var dispatchCustomKeyEventFromIframe = function (evt) {
    if (evt.data.type === POST_MESSAGE) {
        window.document.dispatchEvent(new KeyboardEvent('keydown', { code: KEY_EVENT }));
    }
};
exports.dispatchCustomKeyEventFromIframe = dispatchCustomKeyEventFromIframe;


/***/ }),

/***/ "./src/utils/create-iframe/trigger-iframe-redraw.ts":
/*!**********************************************************!*\
  !*** ./src/utils/create-iframe/trigger-iframe-redraw.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.triggerIframeRedraw = void 0;
/**
 * Tell browser to redraw the iframe. DIST-713.
 *
 */
function triggerIframeRedraw() {
    // @ts-ignore
    var iframe = this;
    iframe.style.transform = 'translateZ(0)';
}
exports.triggerIframeRedraw = triggerIframeRedraw;


/***/ }),

/***/ "./src/utils/get-text-color.ts":
/*!*************************************!*\
  !*** ./src/utils/get-text-color.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTextColor = void 0;
var hex_rgb_1 = __webpack_require__(/*! ./hex-rgb */ "./src/utils/hex-rgb.ts");
// https://www.w3.org/TR/AERT/#color-contrast
var RED_BRIGHTNESS = 299;
var GREEN_BRIGHTNESS = 587;
var BLUE_BRIGHTNESS = 114;
var BASE = 1000;
var BRIGHTNETSS_LIMIT = 125;
var isHex = function (string) { return string.startsWith('#'); };
var getRgbValues = function (rgb) {
    var rgbValues = {
        red: 0,
        green: 0,
        blue: 0,
    };
    var values = rgb.match(/\d+/g);
    if (values) {
        rgbValues.red = parseInt(values[0], 10);
        rgbValues.green = parseInt(values[0], 10);
        rgbValues.blue = parseInt(values[0], 10);
    }
    return rgbValues;
};
var getTextColor = function (color) {
    // return default color
    if (!color)
        return '#FFFFFF';
    var rgbValues = isHex(color) ? (0, hex_rgb_1.hexRgb)(color) : getRgbValues(color);
    var red = rgbValues.red, green = rgbValues.green, blue = rgbValues.blue;
    var brightness = Math.round((red * RED_BRIGHTNESS + green * GREEN_BRIGHTNESS + blue * BLUE_BRIGHTNESS) / BASE);
    return brightness > BRIGHTNETSS_LIMIT ? '#000000' : '#FFFFFF';
};
exports.getTextColor = getTextColor;


/***/ }),

/***/ "./src/utils/get-transitive-search-params.ts":
/*!***************************************************!*\
  !*** ./src/utils/get-transitive-search-params.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTransitiveSearchParams = void 0;
var getTransitiveSearchParams = function (transitiveSearchParams) {
    var url = new URL(window.location.href);
    var queryParamsWithTransitiveParams = {};
    if (transitiveSearchParams && transitiveSearchParams.length > 0) {
        transitiveSearchParams.forEach(function (key) {
            if (url.searchParams.has(key)) {
                queryParamsWithTransitiveParams[key] = url.searchParams.get(key);
            }
        });
    }
    return queryParamsWithTransitiveParams;
};
exports.getTransitiveSearchParams = getTransitiveSearchParams;


/***/ }),

/***/ "./src/utils/has-dom.ts":
/*!******************************!*\
  !*** ./src/utils/has-dom.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasDom = void 0;
var hasDom = function () {
    return typeof document !== 'undefined' && typeof window !== 'undefined';
};
exports.hasDom = hasDom;


/***/ }),

/***/ "./src/utils/hex-rgb.ts":
/*!******************************!*\
  !*** ./src/utils/hex-rgb.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * @copyright @sindresorhus
 * @Github https://github.com/sindresorhus/hex-rgb
 * @NPM: https://www.npmjs.com/package/hex-rgb
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hexRgb = void 0;
var hexCharacters = 'a-f\\d';
var match3or4Hex = "#?[".concat(hexCharacters, "]{3}[").concat(hexCharacters, "]?");
var match6or8Hex = "#?[".concat(hexCharacters, "]{6}([").concat(hexCharacters, "]{2})?");
var nonHexChars = new RegExp("[^#".concat(hexCharacters, "]"), 'gi');
var validHexSize = new RegExp("^".concat(match3or4Hex, "$|^").concat(match6or8Hex, "$"), 'i');
var hexRgb = function (hex) {
    if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
        throw new TypeError('Expected a valid hex string');
    }
    hex = hex.replace(/^#/, '');
    if (hex.length === 8) {
        hex = hex.slice(0, 6);
    }
    if (hex.length === 4) {
        hex = hex.slice(0, 3);
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var number = Number.parseInt(hex, 16);
    var red = number >> 16;
    var green = (number >> 8) & 255;
    var blue = number & 255;
    return { red: red, green: green, blue: blue };
};
exports.hexRgb = hexRgb;


/***/ }),

/***/ "./src/utils/include-css.ts":
/*!**********************************!*\
  !*** ./src/utils/include-css.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.includeCss = void 0;
var getCssHref = function (filename) { return "".concat("./lib/css/").concat(filename); };
var includeCss = function (filename) {
    var href = getCssHref(filename);
    if (!document.querySelector("link[href=\"".concat(href, "\"]"))) {
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = href;
        document.head.append(css);
    }
};
exports.includeCss = includeCss;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./build-iframe-src */ "./src/utils/build-iframe-src.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-iframe */ "./src/utils/create-iframe/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./has-dom */ "./src/utils/has-dom.ts"), exports);
__exportStar(__webpack_require__(/*! ./include-css */ "./src/utils/include-css.ts"), exports);
__exportStar(__webpack_require__(/*! ./is-defined */ "./src/utils/is-defined.ts"), exports);
__exportStar(__webpack_require__(/*! ./load-options-from-attributes */ "./src/utils/load-options-from-attributes.ts"), exports);
__exportStar(__webpack_require__(/*! ./mobile */ "./src/utils/mobile.ts"), exports);
__exportStar(__webpack_require__(/*! ./remove-undefined-keys */ "./src/utils/remove-undefined-keys.ts"), exports);
__exportStar(__webpack_require__(/*! ./set-element-size */ "./src/utils/set-element-size.ts"), exports);
__exportStar(__webpack_require__(/*! ./unmount-element */ "./src/utils/unmount-element.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-custom-launch-options */ "./src/utils/create-custom-launch-options.ts"), exports);
__exportStar(__webpack_require__(/*! ./set-auto-close */ "./src/utils/set-auto-close.ts"), exports);
__exportStar(__webpack_require__(/*! ./setup-google-analytics-instance */ "./src/utils/setup-google-analytics-instance.ts"), exports);
__exportStar(__webpack_require__(/*! ./get-text-color */ "./src/utils/get-text-color.ts"), exports);
__exportStar(__webpack_require__(/*! ./lazy-init */ "./src/utils/lazy-init.ts"), exports);
__exportStar(__webpack_require__(/*! ./is-open */ "./src/utils/is-open.ts"), exports);
__exportStar(__webpack_require__(/*! ./make-auto-resize */ "./src/utils/make-auto-resize.ts"), exports);


/***/ }),

/***/ "./src/utils/is-defined.ts":
/*!*********************************!*\
  !*** ./src/utils/is-defined.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDefined = void 0;
var isDefined = function (value) {
    return value !== undefined && value !== null;
};
exports.isDefined = isDefined;


/***/ }),

/***/ "./src/utils/is-open.ts":
/*!******************************!*\
  !*** ./src/utils/is-open.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isVisible = exports.isInPage = exports.isOpen = void 0;
var isOpen = function (element) {
    return (0, exports.isInPage)(element) && (0, exports.isVisible)(element);
};
exports.isOpen = isOpen;
var isInPage = function (element) { return !!element.parentNode; };
exports.isInPage = isInPage;
var isVisible = function (element) { return element.style.display !== 'none'; };
exports.isVisible = isVisible;


/***/ }),

/***/ "./src/utils/lazy-init.ts":
/*!********************************!*\
  !*** ./src/utils/lazy-init.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lazyInitialize = void 0;
var lazyInitialize = function (target, onIntersection) {
    var observerCallback = function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                onIntersection();
                observer.unobserve(entry.target);
            }
        });
    };
    var observer = new IntersectionObserver(observerCallback);
    observer.observe(target);
};
exports.lazyInitialize = lazyInitialize;


/***/ }),

/***/ "./src/utils/load-options-from-attributes.ts":
/*!***************************************************!*\
  !*** ./src/utils/load-options-from-attributes.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadOptionsFromAttributes = exports.transformAttributeValue = exports.camelCaseToKebabCase = void 0;
var camelCaseToKebabCase = function (value) {
    return value
        .split('')
        .map(function (letter, i) {
        if (letter.toUpperCase() === letter) {
            return "".concat(i !== 0 ? '-' : '').concat(letter.toLowerCase());
        }
        return letter;
    })
        .join('');
};
exports.camelCaseToKebabCase = camelCaseToKebabCase;
var transformString = function (value) {
    return value || undefined;
};
var transformBoolean = function (value) {
    return value === '' || value === 'yes' || value === 'true';
};
var transformInteger = function (value) {
    var integer = value ? parseInt(value, 10) : NaN;
    return isNaN(integer) ? undefined : integer;
};
var transformFunction = function (value) {
    var fn = value && value in window ? window[value] : undefined;
    return typeof fn === 'function' ? fn : undefined;
};
var COMMA_PLACEHOLDER = '%ESCAPED_COMMA%';
var transformArray = function (value) {
    if (!value) {
        return undefined;
    }
    return value
        .replace(/\s/g, '')
        .replace(/\\,/g, COMMA_PLACEHOLDER)
        .split(',')
        .filter(function (v) { return !!v; })
        .map(function (v) { return v.replace(COMMA_PLACEHOLDER, ','); });
};
var transformRecord = function (value) {
    if (!value) {
        return undefined;
    }
    var arrayOfRecordStrings = value
        .replace(/\\,/g, COMMA_PLACEHOLDER)
        .split(',')
        .filter(function (v) { return !!v; })
        .map(function (v) { return v.replace(COMMA_PLACEHOLDER, ','); });
    return arrayOfRecordStrings.reduce(function (record, recordString) {
        var _a;
        var match = recordString.match(/^([^=]+)=(.*)$/);
        if (match) {
            var key = match[1], value_1 = match[2];
            return __assign(__assign({}, record), (_a = {}, _a[key.trim()] = value_1, _a));
        }
        return record;
    }, {});
};
var transformAttributeValue = function (value, transformation) {
    var _a, _b;
    switch (transformation) {
        case 'string':
            return transformString(value);
        case 'boolean':
            return transformBoolean(value);
        case 'integer':
            return transformInteger(value);
        case 'function':
            return transformFunction(value);
        case 'array':
            return transformArray(value);
        case 'record':
            return transformRecord(value);
        case 'integerOrBoolean':
            return (_a = transformInteger(value)) !== null && _a !== void 0 ? _a : transformBoolean(value);
        case 'stringOrBoolean':
            return (_b = transformString(value)) !== null && _b !== void 0 ? _b : transformBoolean(value);
        default:
            throw new Error("Invalid attribute transformation ".concat(transformation));
    }
};
exports.transformAttributeValue = transformAttributeValue;
var loadOptionsFromAttributes = function (element, transform) {
    return Object.keys(transform).reduce(function (options, key) {
        var _a;
        return __assign(__assign({}, options), (_a = {}, _a[key] = (0, exports.transformAttributeValue)(element.getAttribute("data-tf-".concat((0, exports.camelCaseToKebabCase)(key))), transform[key]), _a));
    }, {});
};
exports.loadOptionsFromAttributes = loadOptionsFromAttributes;


/***/ }),

/***/ "./src/utils/make-auto-resize.ts":
/*!***************************************!*\
  !*** ./src/utils/make-auto-resize.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeAutoResize = void 0;
var mobile_1 = __webpack_require__(/*! ./mobile */ "./src/utils/mobile.ts");
// this ensures the form is not covered by browser navbar on mobile devices
var makeAutoResize = function (wrapperElm) { return function () {
    if (wrapperElm && (0, mobile_1.isMobile)()) {
        wrapperElm.style.setProperty('height', "".concat(window.innerHeight, "px"), 'important');
    }
}; };
exports.makeAutoResize = makeAutoResize;


/***/ }),

/***/ "./src/utils/mobile.ts":
/*!*****************************!*\
  !*** ./src/utils/mobile.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFullscreen = exports.isMobile = exports.isBigScreen = void 0;
var isBigScreen = function () {
    return window.screen.width >= 1024 && window.screen.height >= 768;
};
exports.isBigScreen = isBigScreen;
var isMobile = function () {
    return /mobile|tablet|android/i.test(navigator.userAgent.toLowerCase());
};
exports.isMobile = isMobile;
var isFullscreen = function () {
    return (0, exports.isMobile)() && !(0, exports.isBigScreen)();
};
exports.isFullscreen = isFullscreen;


/***/ }),

/***/ "./src/utils/remove-undefined-keys.ts":
/*!********************************************!*\
  !*** ./src/utils/remove-undefined-keys.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeUndefinedKeys = void 0;
var is_defined_1 = __webpack_require__(/*! ./is-defined */ "./src/utils/is-defined.ts");
var removeUndefinedKeys = function (obj) {
    return Object.entries(obj)
        .filter(function (_a) {
        var value = _a[1];
        return (0, is_defined_1.isDefined)(value);
    })
        .reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
    }, {});
};
exports.removeUndefinedKeys = removeUndefinedKeys;


/***/ }),

/***/ "./src/utils/set-auto-close.ts":
/*!*************************************!*\
  !*** ./src/utils/set-auto-close.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setAutoClose = void 0;
var get_form_event_handler_1 = __webpack_require__(/*! ./create-iframe/get-form-event-handler */ "./src/utils/create-iframe/get-form-event-handler.ts");
var setAutoClose = function (embedId, autoClose, closeCallback) {
    if (autoClose && closeCallback) {
        var autoCloseTime_1 = typeof autoClose === 'number' ? autoClose : 0;
        window.addEventListener('message', (0, get_form_event_handler_1.getFormSubmitHandler)(embedId, function () { return setTimeout(closeCallback, autoCloseTime_1); }));
    }
};
exports.setAutoClose = setAutoClose;


/***/ }),

/***/ "./src/utils/set-element-size.ts":
/*!***************************************!*\
  !*** ./src/utils/set-element-size.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setElementSize = void 0;
var setElementSize = function (element, _a) {
    var width = _a.width, height = _a.height;
    if (width) {
        element.style.width = "".concat(width, "px");
    }
    if (height) {
        element.style.height = "".concat(height, "px");
    }
    return element;
};
exports.setElementSize = setElementSize;


/***/ }),

/***/ "./src/utils/setup-google-analytics-instance.ts":
/*!******************************************************!*\
  !*** ./src/utils/setup-google-analytics-instance.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupGaInstance = exports.sendGaIdMessage = void 0;
var GA_TYPE_MESSAGE = 'ga-client-id';
var sendGaIdMessage = function (embedId, gaClientId, iframe) {
    var data = { embedId: embedId, gaClientId: gaClientId };
    setTimeout(function () {
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: GA_TYPE_MESSAGE, data: data }, '*');
        }
    }, 0);
};
exports.sendGaIdMessage = sendGaIdMessage;
var getTracker = function (trackers, trackingId) {
    if (trackingId) {
        return trackers.find(function (tracker) { return tracker.get('trackingId') === trackingId; });
    }
    return trackers[0];
};
var logError = function (message) {
    // eslint-disable-next-line no-console
    console.error(message);
};
var setupGaInstance = function (iframe, embedId, shareGaInstance) {
    try {
        var gaObject = window[window.GoogleAnalyticsObject];
        var trackingId = typeof shareGaInstance === 'string' ? shareGaInstance : undefined;
        var tracker = getTracker(gaObject.getAll(), trackingId);
        if (tracker) {
            (0, exports.sendGaIdMessage)(embedId, tracker.get('clientId'), iframe);
        }
        else {
            logError("Whoops! You enabled the shareGaInstance feature in your typeform embed but the tracker with ID ".concat(trackingId, " was not found. ") +
                'Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID. ');
        }
    }
    catch (exception) {
        logError('Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. ' +
            'Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. ');
        logError(exception);
    }
};
exports.setupGaInstance = setupGaInstance;


/***/ }),

/***/ "./src/utils/unmount-element.ts":
/*!**************************************!*\
  !*** ./src/utils/unmount-element.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unmountElement = void 0;
var unmountElement = function (element) {
    var _a;
    (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
};
exports.unmountElement = unmountElement;


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7OztVQ1B0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXBvcG92ZXIvY3JlYXRlLXBvcG92ZXIudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXBvcG92ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXBvcG92ZXIvbm90aWZpY2F0aW9uLWRheXMudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXBvcG92ZXIvcG9wb3Zlci1vcHRpb25zLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS1wb3B1cC9jcmVhdGUtcG9wdXAudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXBvcHVwL2luZGV4LnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS1wb3B1cC9wb3B1cC1vcHRpb25zLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS1zaWRldGFiL2NyZWF0ZS1zaWRldGFiLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS1zaWRldGFiL2luZGV4LnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS1zaWRldGFiL3NpZGV0YWItb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL2ZhY3Rvcmllcy9jcmVhdGUtc2xpZGVyL2NyZWF0ZS1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXNsaWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL2ZhY3Rvcmllcy9jcmVhdGUtc2xpZGVyL3NsaWRlci1vcHRpb25zLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS13aWRnZXQvY3JlYXRlLXdpZGdldC50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL2ZhY3Rvcmllcy9jcmVhdGUtd2lkZ2V0L2VsZW1lbnRzL2J1aWxkLXdpZGdldC50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL2ZhY3Rvcmllcy9jcmVhdGUtd2lkZ2V0L2VsZW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvZmFjdG9yaWVzL2NyZWF0ZS13aWRnZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy9mYWN0b3JpZXMvY3JlYXRlLXdpZGdldC93aWRnZXQtb3B0aW9ucy50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvYnVpbGQtaWZyYW1lLXNyYy50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL2NyZWF0ZS1jdXN0b20tbGF1bmNoLW9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9jcmVhdGUtaWZyYW1lL2NyZWF0ZS1pZnJhbWUudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9jcmVhdGUtaWZyYW1lL2dlbmVyYXRlLWVtYmVkLWlkLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvY3JlYXRlLWlmcmFtZS9nZXQtZm9ybS1ldmVudC1oYW5kbGVyLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvY3JlYXRlLWlmcmFtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL2NyZWF0ZS1pZnJhbWUvcmVmcmVzaC1pZnJhbWUudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9jcmVhdGUtaWZyYW1lL3NldHVwLWN1c3RvbS1rZXlib2FyZC1jbG9zZS50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL2NyZWF0ZS1pZnJhbWUvdHJpZ2dlci1pZnJhbWUtcmVkcmF3LnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvZ2V0LXRleHQtY29sb3IudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9nZXQtdHJhbnNpdGl2ZS1zZWFyY2gtcGFyYW1zLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvaGFzLWRvbS50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL2hleC1yZ2IudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9pbmNsdWRlLWNzcy50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvaXMtZGVmaW5lZC50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL2lzLW9wZW4udHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9sYXp5LWluaXQudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy9sb2FkLW9wdGlvbnMtZnJvbS1hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvbWFrZS1hdXRvLXJlc2l6ZS50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL21vYmlsZS50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL3JlbW92ZS11bmRlZmluZWQta2V5cy50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL3NldC1hdXRvLWNsb3NlLnRzIiwid2VicGFjazovL2VtYmVkLW5leHQvLi9zcmMvdXRpbHMvc2V0LWVsZW1lbnQtc2l6ZS50cyIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0Ly4vc3JjL3V0aWxzL3NldHVwLWdvb2dsZS1hbmFseXRpY3MtaW5zdGFuY2UudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC8uL3NyYy91dGlscy91bm1vdW50LWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbWJlZC1uZXh0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZW1iZWQtbmV4dC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZW1iZWQtbmV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlbWJlZC1uZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5GT1JNX0JBU0VfVVJMID0gZXhwb3J0cy5QT1BVUF9TSVpFID0gZXhwb3J0cy5TTElERVJfV0lEVEggPSBleHBvcnRzLlNMSURFUl9QT1NJVElPTiA9IGV4cG9ydHMuU0lERVRBQl9BVFRSSUJVVEUgPSBleHBvcnRzLldJREdFVF9BVFRSSUJVVEUgPSBleHBvcnRzLlNMSURFUl9BVFRSSUJVVEUgPSBleHBvcnRzLlBPUFVQX0FUVFJJQlVURSA9IGV4cG9ydHMuUE9QT1ZFUl9BVFRSSUJVVEUgPSB2b2lkIDA7XHJcbmV4cG9ydHMuUE9QT1ZFUl9BVFRSSUJVVEUgPSAnZGF0YS10Zi1wb3BvdmVyJztcclxuZXhwb3J0cy5QT1BVUF9BVFRSSUJVVEUgPSAnZGF0YS10Zi1wb3B1cCc7XHJcbmV4cG9ydHMuU0xJREVSX0FUVFJJQlVURSA9ICdkYXRhLXRmLXNsaWRlcic7XHJcbmV4cG9ydHMuV0lER0VUX0FUVFJJQlVURSA9ICdkYXRhLXRmLXdpZGdldCc7XHJcbmV4cG9ydHMuU0lERVRBQl9BVFRSSUJVVEUgPSAnZGF0YS10Zi1zaWRldGFiJztcclxuZXhwb3J0cy5TTElERVJfUE9TSVRJT04gPSAncmlnaHQnO1xyXG5leHBvcnRzLlNMSURFUl9XSURUSCA9IDgwMDtcclxuZXhwb3J0cy5QT1BVUF9TSVpFID0gMTAwO1xyXG5leHBvcnRzLkZPUk1fQkFTRV9VUkwgPSAnaHR0cHM6Ly9mb3JtLnR5cGVmb3JtLmNvbSc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jcmVhdGVQb3BvdmVyID0gdm9pZCAwO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxudmFyIG5vdGlmaWNhdGlvbl9kYXlzXzEgPSByZXF1aXJlKFwiLi9ub3RpZmljYXRpb24tZGF5c1wiKTtcclxudmFyIHJlcGxhY2VJY29uID0gZnVuY3Rpb24gKGljb25Ub1JlcGxhY2UsIG5ld0ljb24pIHtcclxuICAgIHZhciBlbGVtZW50ID0gaWNvblRvUmVwbGFjZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGljb25Ub1JlcGxhY2UpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SWNvbik7XHJcbiAgICB9XHJcbn07XHJcbnZhciBidWlsZFBvcG92ZXIgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIHBvcG92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBvcG92ZXIuY2xhc3NOYW1lID0gJ3RmLXYxLXBvcG92ZXInO1xyXG4gICAgcG9wb3Zlci5kYXRhc2V0LnRlc3RpZCA9ICd0Zi12MS1wb3BvdmVyJztcclxuICAgIHJldHVybiAoMCwgdXRpbHNfMS5zZXRFbGVtZW50U2l6ZSkocG9wb3ZlciwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG59O1xyXG52YXIgYnVpbGRDbG9zZUljb24gPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7IGVsZW1lbnQgPSAnZGl2JzsgfVxyXG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gdm9pZCAwKSB7IGNsYXNzTmFtZSA9ICd0Zi12MS1wb3BvdmVyLWJ1dHRvbi1pY29uJzsgfVxyXG4gICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgaWNvbi5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIHRmLXYxLWNsb3NlLWljb25cIik7XHJcbiAgICBpY29uLmlubmVySFRNTCA9ICcmdGltZXM7JztcclxuICAgIGljb24uZGF0YXNldC50ZXN0aWQgPSBjbGFzc05hbWU7XHJcbiAgICByZXR1cm4gaWNvbjtcclxufTtcclxudmFyIGJ1aWxkV3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0Zi12MS1wb3BvdmVyLXdyYXBwZXInO1xyXG4gICAgd3JhcHBlci5kYXRhc2V0LnRlc3RpZCA9ICd0Zi12MS1wb3BvdmVyLXdyYXBwZXInO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn07XHJcbnZhciBidWlsZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3Bpbm5lci5jbGFzc05hbWUgPSAndGYtdjEtc3Bpbm5lcic7XHJcbiAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWNvbi5jbGFzc05hbWUgPSAndGYtdjEtcG9wb3Zlci1idXR0b24taWNvbic7XHJcbiAgICBpY29uLmRhdGFzZXQudGVzdGlkID0gJ3NwaW5uZXItaWNvbic7XHJcbiAgICBpY29uLmFwcGVuZChzcGlubmVyKTtcclxuICAgIHJldHVybiBpY29uO1xyXG59O1xyXG52YXIgYnVpbGRJY29uID0gZnVuY3Rpb24gKGN1c3RvbUljb24sIGNvbG9yKSB7XHJcbiAgICB2YXIgZmlsbENvbG9yID0gKDAsIHV0aWxzXzEuZ2V0VGV4dENvbG9yKShjb2xvcik7XHJcbiAgICB2YXIgdHJpZ2dlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRyaWdnZXJJY29uLmNsYXNzTmFtZSA9ICd0Zi12MS1wb3BvdmVyLWJ1dHRvbi1pY29uJztcclxuICAgIHZhciBzdmdJY29uID0gXCI8c3ZnIGNsYXNzPVxcXCJkZWZhdWx0XFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG4gICAgPHBhdGggZD1cXFwiTTIxIDBIMFY5TDEwLjU3NDMgMjRWMTYuNUgyMUMyMi42NTY3IDE2LjUgMjQgMTUuMTU2NyAyNCAxMy41VjNDMjQgMS4zNDMyNSAyMi42NTY3IDAgMjEgMFpNNy41XFxuICAgIDkuNzVDNi42NzIgOS43NSA2IDkuMDc4NzUgNiA4LjI1QzYgNy40MjEyNSA2LjY3MiA2Ljc1IDcuNSA2Ljc1QzguMzI4IDYuNzUgOSA3LjQyMTI1IDkgOC4yNUM5IDkuMDc4NzUgOC4zMjggOS43NVxcbiAgICA3LjUgOS43NVpNMTIuNzUgOS43NUMxMS45MjIgOS43NSAxMS4yNSA5LjA3ODc1IDExLjI1IDguMjVDMTEuMjUgNy40MjEyNSAxMS45MjIgNi43NSAxMi43NSA2Ljc1QzEzLjU3OCA2Ljc1IDE0LjI1XFxuICAgIDcuNDIxMjUgMTQuMjUgOC4yNUMxNC4yNSA5LjA3ODc1IDEzLjU3OCA5Ljc1IDEyLjc1IDkuNzVaTTE4IDkuNzVDMTcuMTcyIDkuNzUgMTYuNSA5LjA3ODc1IDE2LjUgOC4yNUMxNi41IDcuNDIxMjVcXG4gICAgMTcuMTcyIDYuNzUgMTggNi43NUMxOC44MjggNi43NSAxOS41IDcuNDIxMjUgMTkuNSA4LjI1QzE5LjUgOS4wNzg3NSAxOC44MjggOS43NSAxOCA5Ljc1WlxcXCIgZmlsbD1cXFwiXCIuY29uY2F0KGZpbGxDb2xvciwgXCJcXFwiPjwvcGF0aD5cXG4gIDwvc3ZnPlwiKTtcclxuICAgIHZhciBpc1VybEljb24gPSBjdXN0b21JY29uID09PSBudWxsIHx8IGN1c3RvbUljb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1c3RvbUljb24uc3RhcnRzV2l0aCgnaHR0cCcpO1xyXG4gICAgdHJpZ2dlckljb24uaW5uZXJIVE1MID0gaXNVcmxJY29uXHJcbiAgICAgICAgPyBcIjxpbWcgYWx0PSdwb3BvdmVyIHRyaWdnZXIgaWNvbiBidXR0b24nIHNyYz0nXCIuY29uY2F0KGN1c3RvbUljb24sIFwiJy8+XCIpXHJcbiAgICAgICAgOiBjdXN0b21JY29uICE9PSBudWxsICYmIGN1c3RvbUljb24gIT09IHZvaWQgMCA/IGN1c3RvbUljb24gOiBzdmdJY29uO1xyXG4gICAgdHJpZ2dlckljb24uZGF0YXNldC50ZXN0aWQgPSAnZGVmYXVsdC1pY29uJztcclxuICAgIHJldHVybiB0cmlnZ2VySWNvbjtcclxufTtcclxudmFyIGJ1aWxkVHJpZ2dlckJ1dHRvbiA9IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgdmFyIHRleHRDb2xvciA9ICgwLCB1dGlsc18xLmdldFRleHRDb2xvcikoY29sb3IpO1xyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICd0Zi12MS1wb3BvdmVyLWJ1dHRvbic7XHJcbiAgICBidXR0b24uZGF0YXNldC50ZXN0aWQgPSAndGYtdjEtcG9wb3Zlci1idXR0b24nO1xyXG4gICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufTtcclxudmFyIGJ1aWxkVG9vbHRpcCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoaWRlKSB7XHJcbiAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ3RmLXYxLXBvcG92ZXItdG9vbHRpcC1jbG9zZSc7XHJcbiAgICBpY29uLmRhdGFzZXQudGVzdGlkID0gJ3RmLXYxLXBvcG92ZXItdG9vbHRpcC1jbG9zZSc7XHJcbiAgICBpY29uLmlubmVySFRNTCA9ICcmdGltZXM7JztcclxuICAgIGljb24ub25jbGljayA9IGhpZGU7XHJcbiAgICB2YXIgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc05hbWUgPSAndGYtdjEtcG9wb3Zlci10b29sdGlwLXRleHQnO1xyXG4gICAgdGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSBtZXNzYWdlO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0Zi12MS1wb3BvdmVyLXRvb2x0aXAnO1xyXG4gICAgY29udGFpbmVyLmRhdGFzZXQudGVzdGlkID0gJ3RmLXYxLXBvcG92ZXItdG9vbHRpcCc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBidXR0b25Db2xvcjogJyMzYTc2ODUnLFxyXG59O1xyXG52YXIgY3JlYXRlUG9wb3ZlciA9IGZ1bmN0aW9uIChmb3JtSWQsIHVzZXJPcHRpb25zKSB7XHJcbiAgICBpZiAodXNlck9wdGlvbnMgPT09IHZvaWQgMCkgeyB1c2VyT3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIHVzZXJPcHRpb25zKTtcclxuICAgIHZhciBfYSA9ICgwLCB1dGlsc18xLmNyZWF0ZUlmcmFtZSkoZm9ybUlkLCAncG9wb3ZlcicsIG9wdGlvbnMpLCBpZnJhbWUgPSBfYS5pZnJhbWUsIGVtYmVkSWQgPSBfYS5lbWJlZElkLCByZWZyZXNoID0gX2EucmVmcmVzaDtcclxuICAgIHZhciBvcGVuSGFuZGxlcjtcclxuICAgIHZhciBwb3BvdmVyID0gYnVpbGRQb3BvdmVyKG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0KTtcclxuICAgIHZhciB3cmFwcGVyID0gYnVpbGRXcmFwcGVyKCk7XHJcbiAgICB2YXIgaWNvbiA9IGJ1aWxkSWNvbihvcHRpb25zLmN1c3RvbUljb24sIG9wdGlvbnMuYnV0dG9uQ29sb3IgfHwgZGVmYXVsdE9wdGlvbnMuYnV0dG9uQ29sb3IpO1xyXG4gICAgdmFyIHNwaW5uZXIgPSBidWlsZFNwaW5uZXIoKTtcclxuICAgIHZhciBjbG9zZUljb24gPSBidWlsZENsb3NlSWNvbigpO1xyXG4gICAgdmFyIGNsb3NlTW9kYWwgPSBidWlsZENsb3NlSWNvbignYScsICd0Zi12MS1wb3BvdmVyLWNsb3NlJyk7XHJcbiAgICB2YXIgYnV0dG9uID0gYnVpbGRUcmlnZ2VyQnV0dG9uKG9wdGlvbnMuYnV0dG9uQ29sb3IgfHwgZGVmYXVsdE9wdGlvbnMuYnV0dG9uQ29sb3IpO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHBvcG92ZXIpO1xyXG4gICAgd3JhcHBlci5hcHBlbmQoaWZyYW1lKTtcclxuICAgIHBvcG92ZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBwb3BvdmVyLmFwcGVuZChjbG9zZU1vZGFsKTtcclxuICAgIGJ1dHRvbi5hcHBlbmQoaWNvbik7XHJcbiAgICB2YXIgdG9vbHRpcDtcclxuICAgIHZhciBub3RpZmljYXRpb25Eb3Q7XHJcbiAgICB2YXIgaGlkZVRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRvb2x0aXAgJiYgdG9vbHRpcC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLnVubW91bnRFbGVtZW50KSh0b29sdGlwKTtcclxuICAgICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGhpZGVOb3RpZmljYXRpb25Eb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbkRvdCkge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25Eb3QuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5ub3RpZmljYXRpb25EYXlzICYmICFvcHRpb25zLmVuYWJsZVNhbmRib3gpIHtcclxuICAgICAgICAgICAgICAgICgwLCBub3RpZmljYXRpb25fZGF5c18xLnNhdmVOb3RpZmljYXRpb25Eb3RIaWRlVW50aWxUaW1lKShmb3JtSWQsIG9wdGlvbnMubm90aWZpY2F0aW9uRGF5cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS51bm1vdW50RWxlbWVudCkobm90aWZpY2F0aW9uRG90KTtcclxuICAgICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKG9wdGlvbnMudG9vbHRpcCAmJiBvcHRpb25zLnRvb2x0aXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRvb2x0aXAgPSBidWlsZFRvb2x0aXAob3B0aW9ucy50b29sdGlwLCBoaWRlVG9vbHRpcCk7XHJcbiAgICAgICAgcG9wb3Zlci5hcHBlbmQodG9vbHRpcCk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5ub3RpZmljYXRpb25EYXlzICYmIChvcHRpb25zLmVuYWJsZVNhbmRib3ggfHwgKDAsIG5vdGlmaWNhdGlvbl9kYXlzXzEuY2FuQnVpbGROb3RpZmljYXRpb25Eb3QpKGZvcm1JZCkpKSB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uRG90ID0gKDAsIG5vdGlmaWNhdGlvbl9kYXlzXzEuYnVpbGROb3RpZmljYXRpb25Eb3QpKCk7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZChub3RpZmljYXRpb25Eb3QpO1xyXG4gICAgfVxyXG4gICAgaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwb3BvdmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgY2xvc2VNb2RhbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIHJlcGxhY2VJY29uKHNwaW5uZXIsIGNsb3NlSWNvbik7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuYWRkQ3VzdG9tS2V5Ym9hcmRMaXN0ZW5lcikoY2xvc2UpO1xyXG4gICAgfTtcclxuICAgIHZhciBhdXRvUmVzaXplID0gKDAsIHV0aWxzXzEubWFrZUF1dG9SZXNpemUpKHBvcG92ZXIpO1xyXG4gICAgdmFyIG9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEoMCwgdXRpbHNfMS5pc09wZW4pKHdyYXBwZXIpKSB7XHJcbiAgICAgICAgICAgIGhpZGVUb29sdGlwKCk7XHJcbiAgICAgICAgICAgIGhpZGVOb3RpZmljYXRpb25Eb3QoKTtcclxuICAgICAgICAgICAgYXV0b1Jlc2l6ZSgpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXV0b1Jlc2l6ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoMCwgdXRpbHNfMS5pc0luUGFnZSkod3JhcHBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyLmFwcGVuZCh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlSWNvbihpY29uLCBzcGlubmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcG92ZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlSWNvbihpY29uLCBjbG9zZUljb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoKDAsIHV0aWxzXzEuaXNPcGVuKShwb3BvdmVyKSkge1xyXG4gICAgICAgICAgICAoX2EgPSB1c2VyT3B0aW9ucy5vbkNsb3NlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh1c2VyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMua2VlcFNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS51bm1vdW50RWxlbWVudCkod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwb3BvdmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VJY29uKGNsb3NlSWNvbiwgaWNvbik7XHJcbiAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICgwLCB1dGlsc18xLnNldEF1dG9DbG9zZSkoZW1iZWRJZCwgb3B0aW9ucy5hdXRvQ2xvc2UsIGNsb3NlKTtcclxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuaXNPcGVuKSh3cmFwcGVyKSA/IGNsb3NlKCkgOiBvcGVuKCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHVubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEudW5tb3VudEVsZW1lbnQpKHBvcG92ZXIpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhdXRvUmVzaXplKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5vcGVuICYmIChvcGVuSGFuZGxlciA9PT0gbnVsbCB8fCBvcGVuSGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3BlbkhhbmRsZXIucmVtb3ZlKSkge1xyXG4gICAgICAgICAgICBvcGVuSGFuZGxlci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSB0b2dnbGU7XHJcbiAgICBjbG9zZU1vZGFsLm9uY2xpY2sgPSBjbG9zZTtcclxuICAgIGlmIChvcHRpb25zLm9wZW4gJiYgISgwLCB1dGlsc18xLmlzT3Blbikod3JhcHBlcikpIHtcclxuICAgICAgICBvcGVuSGFuZGxlciA9ICgwLCB1dGlsc18xLmhhbmRsZUN1c3RvbU9wZW4pKG9wZW4sIG9wdGlvbnMub3Blbiwgb3B0aW9ucy5vcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuOiBvcGVuLFxyXG4gICAgICAgIGNsb3NlOiBjbG9zZSxcclxuICAgICAgICB0b2dnbGU6IHRvZ2dsZSxcclxuICAgICAgICByZWZyZXNoOiByZWZyZXNoLFxyXG4gICAgICAgIHVubW91bnQ6IHVubW91bnQsXHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLmNyZWF0ZVBvcG92ZXIgPSBjcmVhdGVQb3BvdmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY3JlYXRlLXBvcG92ZXJcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcG9wb3Zlci1vcHRpb25zXCIpLCBleHBvcnRzKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmJ1aWxkTm90aWZpY2F0aW9uRG90ID0gZXhwb3J0cy5jYW5CdWlsZE5vdGlmaWNhdGlvbkRvdCA9IGV4cG9ydHMuc2F2ZU5vdGlmaWNhdGlvbkRvdEhpZGVVbnRpbFRpbWUgPSB2b2lkIDA7XHJcbnZhciBMT0NBTF9TVE9SQUdFX05PVElGSUNBVElPTl9EQVRBID0gJ3RmTm90aWZpY2F0aW9uRGF0YSc7XHJcbnZhciBnZXRMb2NhbFN0b3JhZ2VEYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX05PVElGSUNBVElPTl9EQVRBKTtcclxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IHt9O1xyXG59O1xyXG52YXIgc2F2ZVRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIGRhdGEgJiYgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9OT1RJRklDQVRJT05fREFUQSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59O1xyXG52YXIgZ2V0Tm90aWZpY2F0aW9uRG90SGlkZVVudGlsVGltZSA9IGZ1bmN0aW9uIChmb3JtSWQpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHZhciBkYXRhID0gZ2V0TG9jYWxTdG9yYWdlRGF0YSgpO1xyXG4gICAgcmV0dXJuICgoX2EgPSBkYXRhW2Zvcm1JZF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oaWRlVW50aWxUaW1lKSB8fCAwO1xyXG59O1xyXG52YXIgc2F2ZU5vdGlmaWNhdGlvbkRvdEhpZGVVbnRpbFRpbWUgPSBmdW5jdGlvbiAoZm9ybUlkLCBkYXlzKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgaGlkZVVudGlsVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBoaWRlVW50aWxUaW1lLnNldERhdGUoaGlkZVVudGlsVGltZS5nZXREYXRlKCkgKyBkYXlzKTtcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZ2V0TG9jYWxTdG9yYWdlRGF0YSgpKSwgKF9hID0ge30sIF9hW2Zvcm1JZF0gPSB7XHJcbiAgICAgICAgaGlkZVVudGlsVGltZTogaGlkZVVudGlsVGltZS5nZXRUaW1lKCksXHJcbiAgICB9LCBfYSkpKTtcclxufTtcclxuZXhwb3J0cy5zYXZlTm90aWZpY2F0aW9uRG90SGlkZVVudGlsVGltZSA9IHNhdmVOb3RpZmljYXRpb25Eb3RIaWRlVW50aWxUaW1lO1xyXG52YXIgY2xlYXJOb3RpZmljYXRpb25Eb3RIaWRlVW50aWxUaW1lID0gZnVuY3Rpb24gKGZvcm1JZCkge1xyXG4gICAgdmFyIGRhdGEgPSBnZXRMb2NhbFN0b3JhZ2VEYXRhKCk7XHJcbiAgICBkZWxldGUgZGF0YVtmb3JtSWRdO1xyXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG59O1xyXG52YXIgY2FuQnVpbGROb3RpZmljYXRpb25Eb3QgPSBmdW5jdGlvbiAoZm9ybUlkKSB7XHJcbiAgICB2YXIgaGlkZVVudGlsVGltZSA9IGdldE5vdGlmaWNhdGlvbkRvdEhpZGVVbnRpbFRpbWUoZm9ybUlkKTtcclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmIChub3cgPiBoaWRlVW50aWxUaW1lKSB7XHJcbiAgICAgICAgaWYgKGhpZGVVbnRpbFRpbWUpIHtcclxuICAgICAgICAgICAgY2xlYXJOb3RpZmljYXRpb25Eb3RIaWRlVW50aWxUaW1lKGZvcm1JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5leHBvcnRzLmNhbkJ1aWxkTm90aWZpY2F0aW9uRG90ID0gY2FuQnVpbGROb3RpZmljYXRpb25Eb3Q7XHJcbnZhciBidWlsZE5vdGlmaWNhdGlvbkRvdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkb3QuY2xhc3NOYW1lID0gJ3RmLXYxLXBvcG92ZXItdW5yZWFkLWRvdCc7XHJcbiAgICBkb3QuZGF0YXNldC50ZXN0aWQgPSAndGYtdjEtcG9wb3Zlci11bnJlYWQtZG90JztcclxuICAgIHJldHVybiBkb3Q7XHJcbn07XHJcbmV4cG9ydHMuYnVpbGROb3RpZmljYXRpb25Eb3QgPSBidWlsZE5vdGlmaWNhdGlvbkRvdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuY3JlYXRlUG9wdXAgPSB2b2lkIDA7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzXCIpO1xyXG52YXIgdXRpbHNfMiA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxudmFyIGJ1aWxkUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBvcHVwLmNsYXNzTmFtZSA9ICd0Zi12MS1wb3B1cCc7XHJcbiAgICBwb3B1cC5kYXRhc2V0LnRlc3RpZCA9ICd0Zi12MS1wb3B1cCc7XHJcbiAgICBwb3B1cC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgcmV0dXJuIHBvcHVwO1xyXG59O1xyXG52YXIgYnVpbGRTcGlubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNwaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNwaW5uZXIuY2xhc3NOYW1lID0gJ3RmLXYxLXNwaW5uZXInO1xyXG4gICAgcmV0dXJuIHNwaW5uZXI7XHJcbn07XHJcbnZhciBidWlsZFdyYXBwZXIgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgc2l6ZSkge1xyXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3RmLXYxLWlmcmFtZS13cmFwcGVyJztcclxuICAgIHdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIGlmICgoMCwgdXRpbHNfMS5pc0RlZmluZWQpKHdpZHRoKSAmJiAoMCwgdXRpbHNfMS5pc0RlZmluZWQpKGhlaWdodCkpIHtcclxuICAgICAgICByZXR1cm4gKDAsIHV0aWxzXzEuc2V0RWxlbWVudFNpemUpKHdyYXBwZXIsIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcclxuICAgIH1cclxuICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSBcImNhbGMoXCIuY29uY2F0KHNpemUsIFwiJSAtIDgwcHgpXCIpO1xyXG4gICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcImNhbGMoXCIuY29uY2F0KHNpemUsIFwiJSAtIDgwcHgpXCIpO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn07XHJcbnZhciBidWlsZENsb3NlQnV0dG9uID0gZnVuY3Rpb24gKGNsb3NlKSB7XHJcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAndGYtdjEtY2xvc2UgdGYtdjEtY2xvc2UtaWNvbic7XHJcbiAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcbiAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gY2xvc2U7XHJcbiAgICByZXR1cm4gY2xvc2VCdXR0b247XHJcbn07XHJcbnZhciBjcmVhdGVQb3B1cCA9IGZ1bmN0aW9uIChmb3JtSWQsIHVzZXJPcHRpb25zKSB7XHJcbiAgICBpZiAodXNlck9wdGlvbnMgPT09IHZvaWQgMCkgeyB1c2VyT3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAoISgwLCB1dGlsc18xLmhhc0RvbSkoKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgdW5tb3VudDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgd2lkdGggPSB1c2VyT3B0aW9ucy53aWR0aCwgaGVpZ2h0ID0gdXNlck9wdGlvbnMuaGVpZ2h0LCBfYSA9IHVzZXJPcHRpb25zLnNpemUsIHNpemUgPSBfYSA9PT0gdm9pZCAwID8gY29uc3RhbnRzXzEuUE9QVVBfU0laRSA6IF9hLCBvbkNsb3NlID0gdXNlck9wdGlvbnMub25DbG9zZSwgb3B0aW9ucyA9IF9fcmVzdCh1c2VyT3B0aW9ucywgW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJzaXplXCIsIFwib25DbG9zZVwiXSk7XHJcbiAgICB2YXIgX2IgPSAoMCwgdXRpbHNfMS5jcmVhdGVJZnJhbWUpKGZvcm1JZCwgJ3BvcHVwJywgb3B0aW9ucyksIGlmcmFtZSA9IF9iLmlmcmFtZSwgZW1iZWRJZCA9IF9iLmVtYmVkSWQsIHJlZnJlc2ggPSBfYi5yZWZyZXNoO1xyXG4gICAgdmFyIHNjcm9sbEluaXRpYWxTdGF0ZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XHJcbiAgICB2YXIgb3BlbkhhbmRsZXI7XHJcbiAgICB2YXIgcG9wdXAgPSBidWlsZFBvcHVwKCk7XHJcbiAgICB2YXIgc3Bpbm5lciA9IGJ1aWxkU3Bpbm5lcigpO1xyXG4gICAgdmFyIHdyYXBwZXIgPSBidWlsZFdyYXBwZXIod2lkdGgsIGhlaWdodCwgc2l6ZSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZChpZnJhbWUpO1xyXG4gICAgcG9wdXAuYXBwZW5kKHNwaW5uZXIpO1xyXG4gICAgcG9wdXAuYXBwZW5kKHdyYXBwZXIpO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdyYXBwZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuYWRkQ3VzdG9tS2V5Ym9hcmRMaXN0ZW5lcikoY2xvc2UpO1xyXG4gICAgfTtcclxuICAgIHZhciBhdXRvUmVzaXplID0gKDAsIHV0aWxzXzIubWFrZUF1dG9SZXNpemUpKHBvcHVwKTtcclxuICAgIHZhciBvcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghKDAsIHV0aWxzXzIuaXNPcGVuKShwb3B1cCkpIHtcclxuICAgICAgICAgICAgaWYgKCEoMCwgdXRpbHNfMi5pc0luUGFnZSkocG9wdXApKSB7XHJcbiAgICAgICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChwb3B1cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgYXV0b1Jlc2l6ZSgpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYXV0b1Jlc2l6ZSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoKDAsIHV0aWxzXzIuaXNPcGVuKShwb3B1cCkpIHtcclxuICAgICAgICAgICAgb25DbG9zZSA9PT0gbnVsbCB8fCBvbkNsb3NlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNsb3NlKCk7XHJcbiAgICAgICAgICAgIHBvcHVwLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBzY3JvbGxJbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMua2VlcFNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3cmFwcGVyLmFwcGVuZChidWlsZENsb3NlQnV0dG9uKGNsb3NlKSk7XHJcbiAgICAoMCwgdXRpbHNfMS5zZXRBdXRvQ2xvc2UpKGVtYmVkSWQsIG9wdGlvbnMuYXV0b0Nsb3NlLCBjbG9zZSk7XHJcbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICgwLCB1dGlsc18yLmlzT3BlbikocG9wdXApID8gY2xvc2UoKSA6IG9wZW4oKTtcclxuICAgIH07XHJcbiAgICBpZiAob3B0aW9ucy5vcGVuICYmICEoMCwgdXRpbHNfMi5pc09wZW4pKHBvcHVwKSkge1xyXG4gICAgICAgIG9wZW5IYW5kbGVyID0gKDAsIHV0aWxzXzEuaGFuZGxlQ3VzdG9tT3Blbikob3Blbiwgb3B0aW9ucy5vcGVuLCBvcHRpb25zLm9wZW5WYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgdW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS51bm1vdW50RWxlbWVudCkocG9wdXApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhdXRvUmVzaXplKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5vcGVuICYmIChvcGVuSGFuZGxlciA9PT0gbnVsbCB8fCBvcGVuSGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3BlbkhhbmRsZXIucmVtb3ZlKSkge1xyXG4gICAgICAgICAgICBvcGVuSGFuZGxlci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuOiBvcGVuLFxyXG4gICAgICAgIGNsb3NlOiBjbG9zZSxcclxuICAgICAgICB0b2dnbGU6IHRvZ2dsZSxcclxuICAgICAgICByZWZyZXNoOiByZWZyZXNoLFxyXG4gICAgICAgIHVubW91bnQ6IHVubW91bnQsXHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLmNyZWF0ZVBvcHVwID0gY3JlYXRlUG9wdXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcmVhdGUtcG9wdXBcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcG9wdXAtb3B0aW9uc1wiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jcmVhdGVTaWRldGFiID0gdm9pZCAwO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgYnV0dG9uQ29sb3I6ICcjM2E3Njg1JyxcclxuICAgIGJ1dHRvblRleHQ6ICdMYXVuY2ggbWUnLFxyXG59O1xyXG52YXIgYnVpbGRTaWRldGFiID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBzaWRldGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaWRldGFiLmNsYXNzTmFtZSA9ICd0Zi12MS1zaWRldGFiJztcclxuICAgIHNpZGV0YWIuZGF0YXNldC50ZXN0aWQgPSAndGYtdjEtc2lkZXRhYic7XHJcbiAgICByZXR1cm4gKDAsIHV0aWxzXzEuc2V0RWxlbWVudFNpemUpKHNpZGV0YWIsIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcclxufTtcclxudmFyIGJ1aWxkV3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0Zi12MS1zaWRldGFiLXdyYXBwZXInO1xyXG4gICAgd3JhcHBlci5kYXRhc2V0LnRlc3RpZCA9ICd0Zi12MS1zaWRldGFiLXdyYXBwZXInO1xyXG4gICAgcmV0dXJuIHdyYXBwZXI7XHJcbn07XHJcbnZhciBidWlsZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3Bpbm5lci5jbGFzc05hbWUgPSAndGYtdjEtc3Bpbm5lcic7XHJcbiAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWNvbi5jbGFzc05hbWUgPSAndGYtdjEtc2lkZXRhYi1idXR0b24taWNvbic7XHJcbiAgICBpY29uLmRhdGFzZXQudGVzdGlkID0gJ3NwaW5uZXItaWNvbic7XHJcbiAgICBpY29uLmFwcGVuZChzcGlubmVyKTtcclxuICAgIHJldHVybiBpY29uO1xyXG59O1xyXG52YXIgYnVpbGRUcmlnZ2VyQnV0dG9uID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICB2YXIgdGV4dENvbG9yID0gKDAsIHV0aWxzXzEuZ2V0VGV4dENvbG9yKShjb2xvcik7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ3RmLXYxLXNpZGV0YWItYnV0dG9uJztcclxuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IHRleHRDb2xvcjtcclxuICAgIHJldHVybiBidXR0b247XHJcbn07XHJcbnZhciBidWlsZFRyaWdnZXJCdXR0b25UZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgIHZhciBidXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgYnV0dG9uVGV4dC5jbGFzc05hbWUgPSAndGYtdjEtc2lkZXRhYi1idXR0b24tdGV4dCc7XHJcbiAgICBidXR0b25UZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICByZXR1cm4gYnV0dG9uVGV4dDtcclxufTtcclxudmFyIGJ1aWxkSWNvbiA9IGZ1bmN0aW9uIChjdXN0b21JY29uLCBjb2xvcikge1xyXG4gICAgdmFyIGZpbGxDb2xvciA9ICgwLCB1dGlsc18xLmdldFRleHRDb2xvcikoY29sb3IpO1xyXG4gICAgdmFyIHRyaWdnZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0cmlnZ2VySWNvbi5jbGFzc05hbWUgPSAndGYtdjEtc2lkZXRhYi1idXR0b24taWNvbic7XHJcbiAgICB2YXIgc3ZnSWNvbiA9IFwiPHN2ZyB3aWR0aD1cXFwiMzJcXFwiIGhlaWdodD1cXFwiMzJcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj5cXG4gICAgPHBhdGggZD1cXFwiTTIxIDBIMFY5TDEwLjU3NDMgMjRWMTYuNUgyMUMyMi42NTY3IDE2LjUgMjQgMTUuMTU2NyAyNCAxMy41VjNDMjQgMS4zNDMyNSAyMi42NTY3IDAgMjEgMFpNNy41IDkuNzVDNi42NzIgOS43NSA2IDkuMDc4NzUgNiA4LjI1QzYgNy40MjEyNSA2LjY3MiA2Ljc1IDcuNSA2Ljc1QzguMzI4IDYuNzUgOSA3LjQyMTI1IDkgOC4yNUM5IDkuMDc4NzUgOC4zMjggOS43NSA3LjUgOS43NVpNMTIuNzUgOS43NUMxMS45MjIgOS43NSAxMS4yNSA5LjA3ODc1IDExLjI1IDguMjVDMTEuMjUgNy40MjEyNSAxMS45MjIgNi43NSAxMi43NSA2Ljc1QzEzLjU3OCA2Ljc1IDE0LjI1IDcuNDIxMjUgMTQuMjUgOC4yNUMxNC4yNSA5LjA3ODc1IDEzLjU3OCA5Ljc1IDEyLjc1IDkuNzVaTTE4IDkuNzVDMTcuMTcyIDkuNzUgMTYuNSA5LjA3ODc1IDE2LjUgOC4yNUMxNi41IDcuNDIxMjUgMTcuMTcyIDYuNzUgMTggNi43NUMxOC44MjggNi43NSAxOS41IDcuNDIxMjUgMTkuNSA4LjI1QzE5LjUgOS4wNzg3NSAxOC44MjggOS43NSAxOCA5Ljc1WlxcXCIgZmlsbD1cXFwiXCIuY29uY2F0KGZpbGxDb2xvciwgXCJcXFwiPjwvcGF0aD5cXG4gIDwvc3ZnPlwiKTtcclxuICAgIHZhciBpc1VybEljb24gPSBjdXN0b21JY29uID09PSBudWxsIHx8IGN1c3RvbUljb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1c3RvbUljb24uc3RhcnRzV2l0aCgnaHR0cCcpO1xyXG4gICAgdHJpZ2dlckljb24uaW5uZXJIVE1MID0gaXNVcmxJY29uXHJcbiAgICAgICAgPyBcIjxpbWcgYWx0PSdwb3BvdmVyIHRyaWdnZXIgaWNvbiBidXR0b24nIHNyYz0nXCIuY29uY2F0KGN1c3RvbUljb24sIFwiJy8+XCIpXHJcbiAgICAgICAgOiBjdXN0b21JY29uICE9PSBudWxsICYmIGN1c3RvbUljb24gIT09IHZvaWQgMCA/IGN1c3RvbUljb24gOiBzdmdJY29uO1xyXG4gICAgdHJpZ2dlckljb24uZGF0YXNldC50ZXN0aWQgPSAnZGVmYXVsdC1pY29uJztcclxuICAgIHJldHVybiB0cmlnZ2VySWNvbjtcclxufTtcclxudmFyIGJ1aWxkQ2xvc2VJY29uID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkgeyBlbGVtZW50ID0gJ2Rpdic7IH1cclxuICAgIGlmIChjbGFzc05hbWUgPT09IHZvaWQgMCkgeyBjbGFzc05hbWUgPSAndGYtdjEtc2lkZXRhYi1idXR0b24taWNvbic7IH1cclxuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIHRmLXYxLWNsb3NlLWljb25cIik7XHJcbiAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcbiAgICBjbG9zZUJ1dHRvbi5kYXRhc2V0LnRlc3RpZCA9IGNsYXNzTmFtZTtcclxuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcclxufTtcclxudmFyIHJlcGxhY2VFbGVtZW50Q2hpbGQgPSBmdW5jdGlvbiAoY2hpbGRUb1JlcGxhY2UsIG5ld0NoaWxkKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGNoaWxkVG9SZXBsYWNlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRUb1JlcGxhY2UpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgY3JlYXRlU2lkZXRhYiA9IGZ1bmN0aW9uIChmb3JtSWQsIHVzZXJPcHRpb25zKSB7XHJcbiAgICBpZiAodXNlck9wdGlvbnMgPT09IHZvaWQgMCkgeyB1c2VyT3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIHVzZXJPcHRpb25zKTtcclxuICAgIHZhciBfYSA9ICgwLCB1dGlsc18xLmNyZWF0ZUlmcmFtZSkoZm9ybUlkLCAnc2lkZS10YWInLCBvcHRpb25zKSwgaWZyYW1lID0gX2EuaWZyYW1lLCBlbWJlZElkID0gX2EuZW1iZWRJZCwgcmVmcmVzaCA9IF9hLnJlZnJlc2g7XHJcbiAgICB2YXIgc2lkZXRhYiA9IGJ1aWxkU2lkZXRhYihvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XHJcbiAgICB2YXIgd3JhcHBlciA9IGJ1aWxkV3JhcHBlcigpO1xyXG4gICAgdmFyIHNwaW5uZXIgPSBidWlsZFNwaW5uZXIoKTtcclxuICAgIHZhciBidXR0b24gPSBidWlsZFRyaWdnZXJCdXR0b24ob3B0aW9ucy5idXR0b25Db2xvciB8fCBkZWZhdWx0T3B0aW9ucy5idXR0b25Db2xvcik7XHJcbiAgICB2YXIgYnV0dG9uVGV4dCA9IGJ1aWxkVHJpZ2dlckJ1dHRvblRleHQob3B0aW9ucy5idXR0b25UZXh0IHx8IGRlZmF1bHRPcHRpb25zLmJ1dHRvblRleHQpO1xyXG4gICAgdmFyIGljb24gPSBidWlsZEljb24ob3B0aW9ucy5jdXN0b21JY29uLCBvcHRpb25zLmJ1dHRvbkNvbG9yIHx8IGRlZmF1bHRPcHRpb25zLmJ1dHRvbkNvbG9yKTtcclxuICAgIHZhciBjbG9zZUljb24gPSBidWlsZENsb3NlSWNvbigpO1xyXG4gICAgdmFyIGNsb3NlTW9kYWwgPSBidWlsZENsb3NlSWNvbignYScsICd0Zi12MS1zaWRldGFiLWNsb3NlJyk7XHJcbiAgICB2YXIgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgIHZhciBvcGVuSGFuZGxlcjtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoc2lkZXRhYik7XHJcbiAgICB3cmFwcGVyLmFwcGVuZChpZnJhbWUpO1xyXG4gICAgc2lkZXRhYi5hcHBlbmQoYnV0dG9uKTtcclxuICAgIHNpZGV0YWIuYXBwZW5kKGNsb3NlTW9kYWwpO1xyXG4gICAgYnV0dG9uLmFwcGVuZChpY29uKTtcclxuICAgIGJ1dHRvbi5hcHBlbmQoYnV0dG9uVGV4dCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaWRldGFiLmNsYXNzTGlzdC5hZGQoJ3JlYWR5Jyk7XHJcbiAgICB9LCAyNTApO1xyXG4gICAgaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzaWRldGFiLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICByZXBsYWNlRWxlbWVudENoaWxkKHNwaW5uZXIsIGNsb3NlSWNvbik7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuYWRkQ3VzdG9tS2V5Ym9hcmRMaXN0ZW5lcikoY2xvc2UpO1xyXG4gICAgfTtcclxuICAgIHZhciBhdXRvUmVzaXplID0gKDAsIHV0aWxzXzEubWFrZUF1dG9SZXNpemUpKHNpZGV0YWIpO1xyXG4gICAgdmFyIG9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEoMCwgdXRpbHNfMS5pc09wZW4pKHdyYXBwZXIpKSB7XHJcbiAgICAgICAgICAgIGF1dG9SZXNpemUoKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGF1dG9SZXNpemUpO1xyXG4gICAgICAgICAgICBpZiAoISgwLCB1dGlsc18xLmlzSW5QYWdlKSh3cmFwcGVyKSkge1xyXG4gICAgICAgICAgICAgICAgc2lkZXRhYi5hcHBlbmQod3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlRWxlbWVudENoaWxkKGljb24sIHNwaW5uZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgc2lkZXRhYi5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlRWxlbWVudENoaWxkKGljb24sIGNsb3NlSWNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoKDAsIHV0aWxzXzEuaXNPcGVuKSh3cmFwcGVyKSkge1xyXG4gICAgICAgICAgICAoX2EgPSBvcHRpb25zLm9uQ2xvc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzaWRldGFiLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICgwLCB1dGlsc18xLnVubW91bnRFbGVtZW50KSh3cmFwcGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50Q2hpbGQoY2xvc2VJY29uLCBpY29uKTtcclxuICAgICAgICAgICAgfSwgMjUwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgKDAsIHV0aWxzXzEuc2V0QXV0b0Nsb3NlKShlbWJlZElkLCBvcHRpb25zLmF1dG9DbG9zZSwgY2xvc2UpO1xyXG4gICAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS5pc09wZW4pKHdyYXBwZXIpID8gY2xvc2UoKSA6IG9wZW4oKTtcclxuICAgIH07XHJcbiAgICBidXR0b24ub25jbGljayA9IHRvZ2dsZTtcclxuICAgIGNsb3NlTW9kYWwub25jbGljayA9IGNsb3NlO1xyXG4gICAgaWYgKG9wdGlvbnMub3BlbiAmJiAhKDAsIHV0aWxzXzEuaXNPcGVuKSh3cmFwcGVyKSkge1xyXG4gICAgICAgIG9wZW5IYW5kbGVyID0gKDAsIHV0aWxzXzEuaGFuZGxlQ3VzdG9tT3Blbikob3Blbiwgb3B0aW9ucy5vcGVuLCBvcHRpb25zLm9wZW5WYWx1ZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgdW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS51bm1vdW50RWxlbWVudCkoc2lkZXRhYik7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGF1dG9SZXNpemUpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLm9wZW4gJiYgKG9wZW5IYW5kbGVyID09PSBudWxsIHx8IG9wZW5IYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcGVuSGFuZGxlci5yZW1vdmUpKSB7XHJcbiAgICAgICAgICAgIG9wZW5IYW5kbGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW46IG9wZW4sXHJcbiAgICAgICAgY2xvc2U6IGNsb3NlLFxyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlLFxyXG4gICAgICAgIHJlZnJlc2g6IHJlZnJlc2gsXHJcbiAgICAgICAgdW5tb3VudDogdW5tb3VudCxcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydHMuY3JlYXRlU2lkZXRhYiA9IGNyZWF0ZVNpZGV0YWI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcmVhdGUtc2lkZXRhYlwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaWRldGFiLW9wdGlvbnNcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jcmVhdGVTbGlkZXIgPSB2b2lkIDA7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzXCIpO1xyXG52YXIgYnVpbGRTbGlkZXIgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNsaWRlci5jbGFzc05hbWUgPSBcInRmLXYxLXNsaWRlciBcIi5jb25jYXQocG9zaXRpb24pO1xyXG4gICAgc2xpZGVyLmRhdGFzZXQudGVzdGlkID0gJ3RmLXYxLXNsaWRlcic7XHJcbiAgICBzbGlkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgIHJldHVybiBzbGlkZXI7XHJcbn07XHJcbnZhciBidWlsZFNwaW5uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3Bpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3Bpbm5lci5jbGFzc05hbWUgPSAndGYtdjEtc3Bpbm5lcic7XHJcbiAgICByZXR1cm4gc3Bpbm5lcjtcclxufTtcclxudmFyIGJ1aWxkV3JhcHBlciA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgd2lkdGgpIHtcclxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0Zi12MS1pZnJhbWUtd3JhcHBlcic7XHJcbiAgICB3cmFwcGVyLnN0eWxlW3Bvc2l0aW9uXSA9ICctMTAwJSc7XHJcbiAgICByZXR1cm4gKDAsIHV0aWxzXzEuc2V0RWxlbWVudFNpemUpKHdyYXBwZXIsIHsgd2lkdGg6IHdpZHRoIH0pO1xyXG59O1xyXG52YXIgYnVpbGRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIChjbG9zZSkge1xyXG4gICAgdmFyIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ3RmLXYxLWNsb3NlIHRmLXYxLWNsb3NlLWljb24nO1xyXG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG4gICAgY2xvc2VCdXR0b24ub25jbGljayA9IGNsb3NlO1xyXG4gICAgcmV0dXJuIGNsb3NlQnV0dG9uO1xyXG59O1xyXG52YXIgY3JlYXRlU2xpZGVyID0gZnVuY3Rpb24gKGZvcm1JZCwgdXNlck9wdGlvbnMpIHtcclxuICAgIGlmICh1c2VyT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHVzZXJPcHRpb25zID0ge307IH1cclxuICAgIGlmICghKDAsIHV0aWxzXzEuaGFzRG9tKSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICB1bm1vdW50OiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHZhciBfYSA9IHVzZXJPcHRpb25zLnBvc2l0aW9uLCBwb3NpdGlvbiA9IF9hID09PSB2b2lkIDAgPyBjb25zdGFudHNfMS5TTElERVJfUE9TSVRJT04gOiBfYSwgX2IgPSB1c2VyT3B0aW9ucy53aWR0aCwgd2lkdGggPSBfYiA9PT0gdm9pZCAwID8gY29uc3RhbnRzXzEuU0xJREVSX1dJRFRIIDogX2IsIG9uQ2xvc2UgPSB1c2VyT3B0aW9ucy5vbkNsb3NlLCBvcHRpb25zID0gX19yZXN0KHVzZXJPcHRpb25zLCBbXCJwb3NpdGlvblwiLCBcIndpZHRoXCIsIFwib25DbG9zZVwiXSk7XHJcbiAgICB2YXIgX2MgPSAoMCwgdXRpbHNfMS5jcmVhdGVJZnJhbWUpKGZvcm1JZCwgJ3NsaWRlcicsIG9wdGlvbnMpLCBpZnJhbWUgPSBfYy5pZnJhbWUsIGVtYmVkSWQgPSBfYy5lbWJlZElkLCByZWZyZXNoID0gX2MucmVmcmVzaDtcclxuICAgIHZhciBzY3JvbGxJbml0aWFsU3RhdGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xyXG4gICAgdmFyIG9wZW5IYW5kbGVyO1xyXG4gICAgdmFyIHNsaWRlciA9IGJ1aWxkU2xpZGVyKHBvc2l0aW9uKTtcclxuICAgIHZhciBzcGlubmVyID0gYnVpbGRTcGlubmVyKCk7XHJcbiAgICB2YXIgd3JhcHBlciA9IGJ1aWxkV3JhcHBlcihwb3NpdGlvbiwgd2lkdGgpO1xyXG4gICAgd3JhcHBlci5hcHBlbmQoaWZyYW1lKTtcclxuICAgIHNsaWRlci5hcHBlbmQoc3Bpbm5lcik7XHJcbiAgICBzbGlkZXIuYXBwZW5kKHdyYXBwZXIpO1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdyYXBwZXIuc3R5bGVbcG9zaXRpb25dID0gJzAnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAoMCwgdXRpbHNfMS5hZGRDdXN0b21LZXlib2FyZExpc3RlbmVyKShjbG9zZSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGF1dG9SZXNpemUgPSAoMCwgdXRpbHNfMS5tYWtlQXV0b1Jlc2l6ZSkoc2xpZGVyKTtcclxuICAgIHZhciBvcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghKDAsIHV0aWxzXzEuaXNPcGVuKShzbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIGF1dG9SZXNpemUoKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGF1dG9SZXNpemUpO1xyXG4gICAgICAgICAgICBpZiAoISgwLCB1dGlsc18xLmlzSW5QYWdlKShzbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHNsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnN0eWxlW3Bvc2l0aW9uXSA9ICcwJztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBjbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoKDAsIHV0aWxzXzEuaXNPcGVuKShzbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UgPT09IG51bGwgfHwgb25DbG9zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DbG9zZSgpO1xyXG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZVtwb3NpdGlvbl0gPSAnLTEwMCUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gc2Nyb2xsSW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmtlZXBTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1bm1vdW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICgwLCB1dGlsc18xLnNldEF1dG9DbG9zZSkoZW1iZWRJZCwgb3B0aW9ucy5hdXRvQ2xvc2UsIGNsb3NlKTtcclxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEuaXNPcGVuKShzbGlkZXIpID8gY2xvc2UoKSA6IG9wZW4oKTtcclxuICAgIH07XHJcbiAgICB3cmFwcGVyLmFwcGVuZChidWlsZENsb3NlQnV0dG9uKGNsb3NlKSk7XHJcbiAgICBpZiAob3B0aW9ucy5vcGVuICYmICEoMCwgdXRpbHNfMS5pc09wZW4pKHNsaWRlcikpIHtcclxuICAgICAgICBvcGVuSGFuZGxlciA9ICgwLCB1dGlsc18xLmhhbmRsZUN1c3RvbU9wZW4pKG9wZW4sIG9wdGlvbnMub3Blbiwgb3B0aW9ucy5vcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdmFyIHVubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgKDAsIHV0aWxzXzEudW5tb3VudEVsZW1lbnQpKHNsaWRlcik7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGF1dG9SZXNpemUpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLm9wZW4gJiYgKG9wZW5IYW5kbGVyID09PSBudWxsIHx8IG9wZW5IYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcGVuSGFuZGxlci5yZW1vdmUpKSB7XHJcbiAgICAgICAgICAgIG9wZW5IYW5kbGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZW46IG9wZW4sXHJcbiAgICAgICAgY2xvc2U6IGNsb3NlLFxyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlLFxyXG4gICAgICAgIHJlZnJlc2g6IHJlZnJlc2gsXHJcbiAgICAgICAgdW5tb3VudDogdW5tb3VudCxcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydHMuY3JlYXRlU2xpZGVyID0gY3JlYXRlU2xpZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY3JlYXRlLXNsaWRlclwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zbGlkZXItb3B0aW9uc1wiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuY3JlYXRlV2lkZ2V0ID0gdm9pZCAwO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxudmFyIGdldF9mb3JtX2V2ZW50X2hhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9jcmVhdGUtaWZyYW1lL2dldC1mb3JtLWV2ZW50LWhhbmRsZXJcIik7XHJcbnZhciBlbGVtZW50c18xID0gcmVxdWlyZShcIi4vZWxlbWVudHNcIik7XHJcbnZhciBidWlsZENsb3NlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ3RmLXYxLXdpZGdldC1jbG9zZSB0Zi12MS1jbG9zZS1pY29uJztcclxuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICcmdGltZXM7JztcclxuICAgIHJldHVybiBjbG9zZUJ1dHRvbjtcclxufTtcclxudmFyIGNyZWF0ZVdpZGdldCA9IGZ1bmN0aW9uIChmb3JtSWQsIG9wdGlvbnMpIHtcclxuICAgIGlmICghKDAsIHV0aWxzXzEuaGFzRG9tKSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICB1bm1vdW50OiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHZhciB3aWRnZXRPcHRpb25zID0gb3B0aW9ucztcclxuICAgIGlmICghb3B0aW9ucy5pbmxpbmVPbk1vYmlsZSAmJiAob3B0aW9ucy5mb3JjZVRvdWNoIHx8ICgwLCB1dGlsc18xLmlzRnVsbHNjcmVlbikoKSkpIHtcclxuICAgICAgICB3aWRnZXRPcHRpb25zLmVuYWJsZUZ1bGxzY3JlZW4gPSB0cnVlO1xyXG4gICAgICAgIHdpZGdldE9wdGlvbnMuZm9yY2VUb3VjaCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgX2EgPSAoMCwgdXRpbHNfMS5jcmVhdGVJZnJhbWUpKGZvcm1JZCwgJ3dpZGdldCcsIHdpZGdldE9wdGlvbnMpLCBlbWJlZElkID0gX2EuZW1iZWRJZCwgaWZyYW1lID0gX2EuaWZyYW1lLCByZWZyZXNoID0gX2EucmVmcmVzaDtcclxuICAgIHZhciB3aWRnZXQgPSAoMCwgZWxlbWVudHNfMS5idWlsZFdpZGdldCkoaWZyYW1lLCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XHJcbiAgICBpZiAod2lkZ2V0T3B0aW9ucy5hdXRvUmVzaXplKSB7XHJcbiAgICAgICAgdmFyIF9iID0gdHlwZW9mIHdpZGdldE9wdGlvbnMuYXV0b1Jlc2l6ZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgPyB3aWRnZXRPcHRpb25zLmF1dG9SZXNpemUuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBwYXJzZUludCh2YWx1ZSk7IH0pXHJcbiAgICAgICAgICAgIDogW10sIG1pbkhlaWdodF8xID0gX2JbMF0sIG1heEhlaWdodF8xID0gX2JbMV07XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoMCwgZ2V0X2Zvcm1fZXZlbnRfaGFuZGxlcl8xLmdldEZvcm1IZWlnaHRDaGFuZ2VkSGFuZGxlcikoZW1iZWRJZCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IE1hdGgubWF4KGRhdGEuaGVpZ2h0ICsgMjAsIG1pbkhlaWdodF8xIHx8IDApO1xyXG4gICAgICAgICAgICBpZiAobWF4SGVpZ2h0XzEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodCA9IE1hdGgubWluKGNvbnRhaW5lckhlaWdodCwgbWF4SGVpZ2h0XzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiXCIuY29uY2F0KGNvbnRhaW5lckhlaWdodCwgXCJweFwiKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICB2YXIgYXBwZW5kV2lkZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3B0aW9ucy5jb250YWluZXIuYXBwZW5kKHdpZGdldCk7IH07XHJcbiAgICBvcHRpb25zLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChvcHRpb25zLmxhenkpIHtcclxuICAgICAgICAoMCwgdXRpbHNfMS5sYXp5SW5pdGlhbGl6ZSkob3B0aW9ucy5jb250YWluZXIsIGFwcGVuZFdpZGdldCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhcHBlbmRXaWRnZXQoKTtcclxuICAgIH1cclxuICAgIGlmICh3aWRnZXRPcHRpb25zLmVuYWJsZUZ1bGxzY3JlZW4pIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyXzEgPSBvcHRpb25zLmNvbnRhaW5lcjtcclxuICAgICAgICB2YXIgYXV0b1Jlc2l6ZV8xID0gKDAsIHV0aWxzXzEubWFrZUF1dG9SZXNpemUpKGNvbnRhaW5lcl8xKTtcclxuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHRfMSA9IGNvbnRhaW5lcl8xLnN0eWxlLmhlaWdodDtcclxuICAgICAgICB2YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb250YWluZXJfMS5jbGFzc0xpc3QuYWRkKCd0Zi12MS13aWRnZXQtZnVsbHNjcmVlbicpO1xyXG4gICAgICAgICAgICBhdXRvUmVzaXplXzEoKTtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGF1dG9SZXNpemVfMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgwLCBnZXRfZm9ybV9ldmVudF9oYW5kbGVyXzEuZ2V0V2VsY29tZVNjcmVlbkhpZGRlbkhhbmRsZXIpKGVtYmVkSWQsIG9wZW5Qb3B1cCkpO1xyXG4gICAgICAgIHZhciBjbG9zZUJ1dHRvbl8xID0gYnVpbGRDbG9zZUJ1dHRvbigpO1xyXG4gICAgICAgIHZhciBjbG9zZV8xID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhdXRvUmVzaXplXzEpO1xyXG4gICAgICAgICAgICBjb250YWluZXJfMS5zdHlsZS5oZWlnaHQgPSBvcmlnaW5hbEhlaWdodF8xO1xyXG4gICAgICAgICAgICAoX2EgPSBvcHRpb25zLm9uQ2xvc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBjb250YWluZXJfMS5jbGFzc0xpc3QucmVtb3ZlKCd0Zi12MS13aWRnZXQtZnVsbHNjcmVlbicpO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwU2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXlfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheV8xLmNsYXNzTmFtZSA9ICd0Zi12MS13aWRnZXQtaWZyYW1lLW92ZXJsYXknO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmxheV8xLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXzEuY2xhc3NMaXN0LmFkZCgndGYtdjEtd2lkZ2V0LWZ1bGxzY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNfMS51bm1vdW50RWxlbWVudCkob3ZlcmxheV8xKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3aWRnZXQuYXBwZW5kKG92ZXJsYXlfMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGFwcGVuZFdpZGdldCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXzEuYXBwZW5kKGNsb3NlQnV0dG9uXzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbG9zZUJ1dHRvbl8xLm9uY2xpY2sgPSBjbG9zZV8xO1xyXG4gICAgICAgIGNvbnRhaW5lcl8xLmFwcGVuZChjbG9zZUJ1dHRvbl8xKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVmcmVzaDogcmVmcmVzaCxcclxuICAgICAgICB1bm1vdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoMCwgdXRpbHNfMS51bm1vdW50RWxlbWVudCkod2lkZ2V0KTsgfSxcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydHMuY3JlYXRlV2lkZ2V0ID0gY3JlYXRlV2lkZ2V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmJ1aWxkV2lkZ2V0ID0gdm9pZCAwO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlsc1wiKTtcclxudmFyIGJ1aWxkV2lkZ2V0ID0gZnVuY3Rpb24gKGlmcmFtZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIHdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd2lkZ2V0LmNsYXNzTmFtZSA9ICd0Zi12MS13aWRnZXQnO1xyXG4gICAgd2lkZ2V0LmRhdGFzZXQudGVzdGlkID0gJ3RmLXYxLXdpZGdldCc7XHJcbiAgICB3aWRnZXQuYXBwZW5kKGlmcmFtZSk7XHJcbiAgICByZXR1cm4gKDAsIHV0aWxzXzEuc2V0RWxlbWVudFNpemUpKHdpZGdldCwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG59O1xyXG5leHBvcnRzLmJ1aWxkV2lkZ2V0ID0gYnVpbGRXaWRnZXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9idWlsZC13aWRnZXRcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY3JlYXRlLXdpZGdldFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi93aWRnZXQtb3B0aW9uc1wiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mYWN0b3JpZXMvY3JlYXRlLXBvcG92ZXJcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZmFjdG9yaWVzL2NyZWF0ZS1wb3B1cFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mYWN0b3JpZXMvY3JlYXRlLXNsaWRlclwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mYWN0b3JpZXMvY3JlYXRlLXdpZGdldFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9mYWN0b3JpZXMvY3JlYXRlLXNpZGV0YWJcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYnVpbGRJZnJhbWVTcmMgPSB2b2lkIDA7XHJcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XHJcbnZhciByZW1vdmVfdW5kZWZpbmVkX2tleXNfMSA9IHJlcXVpcmUoXCIuL3JlbW92ZS11bmRlZmluZWQta2V5c1wiKTtcclxudmFyIGlzX2RlZmluZWRfMSA9IHJlcXVpcmUoXCIuL2lzLWRlZmluZWRcIik7XHJcbnZhciBnZXRfdHJhbnNpdGl2ZV9zZWFyY2hfcGFyYW1zXzEgPSByZXF1aXJlKFwiLi9nZXQtdHJhbnNpdGl2ZS1zZWFyY2gtcGFyYW1zXCIpO1xyXG52YXIgZ2V0RGVmYXVsdFVybE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBzb3VyY2U6IChfYSA9IHdpbmRvdyA9PT0gbnVsbCB8fCB3aW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbmRvdy5sb2NhdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vLCAnJyksXHJcbiAgICAgICAgbWVkaXVtOiAnZW1iZWQtc2RrJyxcclxuICAgICAgICBtZWRpdW1WZXJzaW9uOiAnbmV4dCcsXHJcbiAgICB9KTtcclxufTtcclxudmFyIGFkZERlZmF1bHRVcmxPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZ2V0RGVmYXVsdFVybE9wdGlvbnMoKSksICgwLCByZW1vdmVfdW5kZWZpbmVkX2tleXNfMS5yZW1vdmVVbmRlZmluZWRLZXlzKShvcHRpb25zKSk7XHJcbn07XHJcbnZhciB0eXBlc1RvRW1iZWQgPSB7XHJcbiAgICB3aWRnZXQ6ICdlbWJlZC13aWRnZXQnLFxyXG4gICAgcG9wdXA6ICdwb3B1cC1ibGFuaycsXHJcbiAgICBzbGlkZXI6ICdwb3B1cC1kcmF3ZXInLFxyXG4gICAgcG9wb3ZlcjogJ3BvcHVwLXBvcG92ZXInLFxyXG4gICAgJ3NpZGUtdGFiJzogJ3BvcHVwLXNpZGUtcGFuZWwnLFxyXG59O1xyXG52YXIgbWFwT3B0aW9uc1RvUXVlcnlQYXJhbXMgPSBmdW5jdGlvbiAodHlwZSwgZW1iZWRJZCwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRyYW5zaXRpdmVTZWFyY2hQYXJhbXMgPSBvcHRpb25zLnRyYW5zaXRpdmVTZWFyY2hQYXJhbXMsIHNvdXJjZSA9IG9wdGlvbnMuc291cmNlLCBtZWRpdW0gPSBvcHRpb25zLm1lZGl1bSwgbWVkaXVtVmVyc2lvbiA9IG9wdGlvbnMubWVkaXVtVmVyc2lvbiwgaGlkZUZvb3RlciA9IG9wdGlvbnMuaGlkZUZvb3RlciwgaGlkZUhlYWRlcnMgPSBvcHRpb25zLmhpZGVIZWFkZXJzLCBvcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5LCBkaXNhYmxlVHJhY2tpbmcgPSBvcHRpb25zLmRpc2FibGVUcmFja2luZywgZW5hYmxlU2FuZGJveCA9IG9wdGlvbnMuZW5hYmxlU2FuZGJveCwgZGlzYWJsZUF1dG9Gb2N1cyA9IG9wdGlvbnMuZGlzYWJsZUF1dG9Gb2N1cywgc2hhcmVHYUluc3RhbmNlID0gb3B0aW9ucy5zaGFyZUdhSW5zdGFuY2UsIGZvcmNlVG91Y2ggPSBvcHRpb25zLmZvcmNlVG91Y2gsIGVuYWJsZUZ1bGxzY3JlZW4gPSBvcHRpb25zLmVuYWJsZUZ1bGxzY3JlZW4sIHRyYWNraW5nID0gb3B0aW9ucy50cmFja2luZywgcmVkaXJlY3RUYXJnZXQgPSBvcHRpb25zLnJlZGlyZWN0VGFyZ2V0O1xyXG4gICAgdmFyIHRyYW5zaXRpdmVQYXJhbXMgPSAoMCwgZ2V0X3RyYW5zaXRpdmVfc2VhcmNoX3BhcmFtc18xLmdldFRyYW5zaXRpdmVTZWFyY2hQYXJhbXMpKHRyYW5zaXRpdmVTZWFyY2hQYXJhbXMpO1xyXG4gICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAndHlwZWZvcm0tZW1iZWQtaWQnOiBlbWJlZElkLFxyXG4gICAgICAgICd0eXBlZm9ybS1lbWJlZCc6IHR5cGVzVG9FbWJlZFt0eXBlXSxcclxuICAgICAgICAndHlwZWZvcm0tc291cmNlJzogc291cmNlLFxyXG4gICAgICAgICd0eXBlZm9ybS1tZWRpdW0nOiBtZWRpdW0sXHJcbiAgICAgICAgJ3R5cGVmb3JtLW1lZGl1bS12ZXJzaW9uJzogbWVkaXVtVmVyc2lvbixcclxuICAgICAgICAnZW1iZWQtaGlkZS1mb290ZXInOiBoaWRlRm9vdGVyID8gJ3RydWUnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICdlbWJlZC1oaWRlLWhlYWRlcnMnOiBoaWRlSGVhZGVycyA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAnZW1iZWQtb3BhY2l0eSc6IG9wYWNpdHksXHJcbiAgICAgICAgJ2Rpc2FibGUtdHJhY2tpbmcnOiBkaXNhYmxlVHJhY2tpbmcgfHwgZW5hYmxlU2FuZGJveCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAnZGlzYWJsZS1hdXRvLWZvY3VzJzogZGlzYWJsZUF1dG9Gb2N1cyA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcclxuICAgICAgICAnX19kYW5nZXJvdXMtZGlzYWJsZS1zdWJtaXNzaW9ucyc6IGVuYWJsZVNhbmRib3ggPyAndHJ1ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgJ3NoYXJlLWdhLWluc3RhbmNlJzogc2hhcmVHYUluc3RhbmNlID8gJ3RydWUnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICdmb3JjZS10b3VjaCc6IGZvcmNlVG91Y2ggPyAndHJ1ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgJ2FkZC1wbGFjZWhvbGRlci13cyc6IHR5cGUgPT09ICd3aWRnZXQnICYmIGVuYWJsZUZ1bGxzY3JlZW4gPyAndHJ1ZScgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgJ3R5cGVmb3JtLWVtYmVkLXJlZGlyZWN0LXRhcmdldCc6IHJlZGlyZWN0VGFyZ2V0LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFyYW1zKSwgdHJhbnNpdGl2ZVBhcmFtcyksIHRyYWNraW5nKTtcclxufTtcclxudmFyIGdldEJhc2VVcmwgPSBmdW5jdGlvbiAoZm9ybVN0cmluZywgY2hhdCkge1xyXG4gICAgaWYgKGNoYXQgPT09IHZvaWQgMCkgeyBjaGF0ID0gZmFsc2U7IH1cclxuICAgIHZhciBwcmVmaXggPSBjaGF0ID8gJ2MnIDogJ3RvJztcclxuICAgIHJldHVybiBuZXcgVVJMKGZvcm1TdHJpbmcuc3RhcnRzV2l0aCgnaHR0cDovLycpIHx8IGZvcm1TdHJpbmcuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxyXG4gICAgICAgID8gZm9ybVN0cmluZ1xyXG4gICAgICAgIDogXCJcIi5jb25jYXQoY29uc3RhbnRzXzEuRk9STV9CQVNFX1VSTCwgXCIvXCIpLmNvbmNhdChwcmVmaXgsIFwiL1wiKS5jb25jYXQoZm9ybVN0cmluZykpO1xyXG59O1xyXG52YXIgYnVpbGRJZnJhbWVTcmMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICB2YXIgZm9ybUlkID0gcGFyYW1zLmZvcm1JZCwgdHlwZSA9IHBhcmFtcy50eXBlLCBlbWJlZElkID0gcGFyYW1zLmVtYmVkSWQsIG9wdGlvbnMgPSBwYXJhbXMub3B0aW9ucztcclxuICAgIHZhciBxdWVyeVBhcmFtcyA9IG1hcE9wdGlvbnNUb1F1ZXJ5UGFyYW1zKHR5cGUsIGVtYmVkSWQsIGFkZERlZmF1bHRVcmxPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIHZhciB1cmwgPSBnZXRCYXNlVXJsKGZvcm1JZCwgb3B0aW9ucy5jaGF0KTtcclxuICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5UGFyYW1zKVxyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtVmFsdWUgPSBfYVsxXTtcclxuICAgICAgICByZXR1cm4gKDAsIGlzX2RlZmluZWRfMS5pc0RlZmluZWQpKHBhcmFtVmFsdWUpO1xyXG4gICAgfSlcclxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgcGFyYW1OYW1lID0gX2FbMF0sIHBhcmFtVmFsdWUgPSBfYVsxXTtcclxuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAob3B0aW9ucy5oaWRkZW4pIHtcclxuICAgICAgICB2YXIgdG1wSGFzaFVybF8xID0gbmV3IFVSTChjb25zdGFudHNfMS5GT1JNX0JBU0VfVVJMKTtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhvcHRpb25zLmhpZGRlbilcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtVmFsdWUgPSBfYVsxXTtcclxuICAgICAgICAgICAgcmV0dXJuICgwLCBpc19kZWZpbmVkXzEuaXNEZWZpbmVkKShwYXJhbVZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtTmFtZSA9IF9hWzBdLCBwYXJhbVZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgIHRtcEhhc2hVcmxfMS5zZWFyY2hQYXJhbXMuc2V0KHBhcmFtTmFtZSwgcGFyYW1WYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGhpZGRlbkZpZWxkcyA9IHRtcEhhc2hVcmxfMS5zZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoaGlkZGVuRmllbGRzKSB7XHJcbiAgICAgICAgICAgIHVybC5oYXNoID0gaGlkZGVuRmllbGRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmwuaHJlZjtcclxufTtcclxuZXhwb3J0cy5idWlsZElmcmFtZVNyYyA9IGJ1aWxkSWZyYW1lU3JjO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmhhbmRsZUN1c3RvbU9wZW4gPSB2b2lkIDA7XHJcbnZhciBlbXB0eUhhbmRsZXIgPSB7IHJlbW92ZTogZnVuY3Rpb24gKCkgeyB9IH07XHJcbnZhciBvcGVuT25FeGl0ID0gZnVuY3Rpb24gKGV4aXRUaHJlc2hvbGQsIG9wZW4pIHtcclxuICAgIHZhciBwcmV2WSA9IDA7XHJcbiAgICB2YXIgaGFuZGxlTW91c2VNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gb3BlbiBwb3B1cCAgaWYgdGhlIG1vdXNlIGlzIGluIHRvcCBwYXJ0IG9mIHRoZSBwYWdlIGFuZCBtb3ZpbmcgdG93YXJkcyB0b3Agb2YgdGhlIHNjcmVlblxyXG4gICAgICAgIGlmIChldmVudC5jbGllbnRZIDwgZXhpdFRocmVzaG9sZCAmJiBldmVudC5jbGllbnRZIDwgcHJldlkpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB0cnVlKTtcclxuICAgICAgICAgICAgb3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcHJldlkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHRydWUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgdHJ1ZSk7IH0sXHJcbiAgICB9O1xyXG59O1xyXG52YXIgb3Blbk9uU2Nyb2xsID0gZnVuY3Rpb24gKHNjcm9sbFRocmVzaG9sZCwgb3Blbikge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICAgIHZhciBvZmZzZXRUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICB2YXIgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCAwO1xyXG4gICAgICAgIHZhciBwYWdlSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICB2YXIgc2Nyb2xsVG9wUGl4ZWxzID0gb2Zmc2V0VG9wIC0gY2xpZW50VG9wO1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3BQZXJjZW50YWdlID0gKHNjcm9sbFRvcFBpeGVscyAvIHBhZ2VIZWlnaHQpICogMTAwO1xyXG4gICAgICAgIHZhciBzY3JvbGxlZFRvVGhlQm90dG9tID0gc2Nyb2xsVG9wUGl4ZWxzICsgd2luZG93LmlubmVySGVpZ2h0ID49IHBhZ2VIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcFBlcmNlbnRhZ2UgPj0gc2Nyb2xsVGhyZXNob2xkIHx8IHNjcm9sbGVkVG9UaGVCb3R0b20pIHtcclxuICAgICAgICAgICAgb3BlbigpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTsgfSxcclxuICAgIH07XHJcbn07XHJcbnZhciBoYW5kbGVDdXN0b21PcGVuID0gZnVuY3Rpb24gKG9wZW4sIG9wZW5UeXBlLCB2YWx1ZSkge1xyXG4gICAgc3dpdGNoIChvcGVuVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2xvYWQnOlxyXG4gICAgICAgICAgICBvcGVuKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eUhhbmRsZXI7XHJcbiAgICAgICAgY2FzZSAnZXhpdCc6XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5PbkV4aXQodmFsdWUsIG9wZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eUhhbmRsZXI7XHJcbiAgICAgICAgY2FzZSAndGltZSc6XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3BlbigpO1xyXG4gICAgICAgICAgICB9LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eUhhbmRsZXI7XHJcbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3Blbk9uU2Nyb2xsKHZhbHVlLCBvcGVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlIYW5kbGVyO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eUhhbmRsZXI7XHJcbiAgICAgICAgLy8gZG8gbm90IG9wZW4gYXV0b21hdGljYWxseVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLmhhbmRsZUN1c3RvbU9wZW4gPSBoYW5kbGVDdXN0b21PcGVuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNyZWF0ZUlmcmFtZSA9IHZvaWQgMDtcclxudmFyIGJ1aWxkX2lmcmFtZV9zcmNfMSA9IHJlcXVpcmUoXCIuLi9idWlsZC1pZnJhbWUtc3JjXCIpO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uL1wiKTtcclxudmFyIGdlbmVyYXRlX2VtYmVkX2lkXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0ZS1lbWJlZC1pZFwiKTtcclxudmFyIGdldF9mb3JtX2V2ZW50X2hhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL2dldC1mb3JtLWV2ZW50LWhhbmRsZXJcIik7XHJcbnZhciB0cmlnZ2VyX2lmcmFtZV9yZWRyYXdfMSA9IHJlcXVpcmUoXCIuL3RyaWdnZXItaWZyYW1lLXJlZHJhd1wiKTtcclxudmFyIHNldHVwX2N1c3RvbV9rZXlib2FyZF9jbG9zZV8xID0gcmVxdWlyZShcIi4vc2V0dXAtY3VzdG9tLWtleWJvYXJkLWNsb3NlXCIpO1xyXG52YXIgcmVmcmVzaF9pZnJhbWVfMSA9IHJlcXVpcmUoXCIuL3JlZnJlc2gtaWZyYW1lXCIpO1xyXG52YXIgY3JlYXRlSWZyYW1lID0gZnVuY3Rpb24gKGZvcm1JZCwgdHlwZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIGVtYmVkSWQgPSAoMCwgZ2VuZXJhdGVfZW1iZWRfaWRfMS5nZW5lcmF0ZUVtYmVkSWQpKCk7XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zLmlmcmFtZVByb3BzLCBpZnJhbWVQcm9wcyA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvblJlYWR5ID0gb3B0aW9ucy5vblJlYWR5LCBvblF1ZXN0aW9uQ2hhbmdlZCA9IG9wdGlvbnMub25RdWVzdGlvbkNoYW5nZWQsIG9uSGVpZ2h0Q2hhbmdlZCA9IG9wdGlvbnMub25IZWlnaHRDaGFuZ2VkLCBvblN1Ym1pdCA9IG9wdGlvbnMub25TdWJtaXQsIG9uRW5kaW5nQnV0dG9uQ2xpY2sgPSBvcHRpb25zLm9uRW5kaW5nQnV0dG9uQ2xpY2ssIHNoYXJlR2FJbnN0YW5jZSA9IG9wdGlvbnMuc2hhcmVHYUluc3RhbmNlO1xyXG4gICAgdmFyIHNyYyA9ICgwLCBidWlsZF9pZnJhbWVfc3JjXzEuYnVpbGRJZnJhbWVTcmMpKHsgZm9ybUlkOiBmb3JtSWQsIGVtYmVkSWQ6IGVtYmVkSWQsIHR5cGU6IHR5cGUsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XHJcbiAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBpZnJhbWUuc3JjID0gc3JjO1xyXG4gICAgaWZyYW1lLmRhdGFzZXQudGVzdGlkID0gJ2lmcmFtZSc7XHJcbiAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gJzBweCc7XHJcbiAgICBpZnJhbWUuYWxsb3cgPSAnbWljcm9waG9uZTsgY2FtZXJhJztcclxuICAgIE9iamVjdC5rZXlzKGlmcmFtZVByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKGtleSwgaWZyYW1lUHJvcHNba2V5XSk7XHJcbiAgICB9KTtcclxuICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdHJpZ2dlcl9pZnJhbWVfcmVkcmF3XzEudHJpZ2dlcklmcmFtZVJlZHJhdywgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoMCwgZ2V0X2Zvcm1fZXZlbnRfaGFuZGxlcl8xLmdldEZvcm1SZWFkeUhhbmRsZXIpKGVtYmVkSWQsIG9uUmVhZHkpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKDAsIGdldF9mb3JtX2V2ZW50X2hhbmRsZXJfMS5nZXRGb3JtUXVlc3Rpb25DaGFuZ2VkSGFuZGxlcikoZW1iZWRJZCwgb25RdWVzdGlvbkNoYW5nZWQpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKDAsIGdldF9mb3JtX2V2ZW50X2hhbmRsZXJfMS5nZXRGb3JtSGVpZ2h0Q2hhbmdlZEhhbmRsZXIpKGVtYmVkSWQsIG9uSGVpZ2h0Q2hhbmdlZCkpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoMCwgZ2V0X2Zvcm1fZXZlbnRfaGFuZGxlcl8xLmdldEZvcm1TdWJtaXRIYW5kbGVyKShlbWJlZElkLCBvblN1Ym1pdCkpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoMCwgZ2V0X2Zvcm1fZXZlbnRfaGFuZGxlcl8xLmdldEZvcm1UaGVtZUhhbmRsZXIpKGVtYmVkSWQpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKDAsIGdldF9mb3JtX2V2ZW50X2hhbmRsZXJfMS5nZXRUaGFua1lvdVNjcmVlbkJ1dHRvbkNsaWNrSGFuZGxlcikoZW1iZWRJZCwgb25FbmRpbmdCdXR0b25DbGljaykpO1xyXG4gICAgaWYgKHR5cGUgIT09ICd3aWRnZXQnKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBzZXR1cF9jdXN0b21fa2V5Ym9hcmRfY2xvc2VfMS5kaXNwYXRjaEN1c3RvbUtleUV2ZW50RnJvbUlmcmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2hhcmVHYUluc3RhbmNlKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoMCwgZ2V0X2Zvcm1fZXZlbnRfaGFuZGxlcl8xLmdldEZvcm1SZWFkeUhhbmRsZXIpKGVtYmVkSWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgKDAsIF9fMS5zZXR1cEdhSW5zdGFuY2UpKGlmcmFtZSwgZW1iZWRJZCwgc2hhcmVHYUluc3RhbmNlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICgwLCByZWZyZXNoX2lmcmFtZV8xLnJlZnJlc2hJZnJhbWUpKGlmcmFtZSk7IH07XHJcbiAgICByZXR1cm4geyBpZnJhbWU6IGlmcmFtZSwgZW1iZWRJZDogZW1iZWRJZCwgcmVmcmVzaDogcmVmcmVzaCB9O1xyXG59O1xyXG5leHBvcnRzLmNyZWF0ZUlmcmFtZSA9IGNyZWF0ZUlmcmFtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZW5lcmF0ZUVtYmVkSWQgPSB2b2lkIDA7XHJcbnZhciBnZW5lcmF0ZUVtYmVkSWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgIHZhciBfYSA9IFN0cmluZyhyYW5kb21OdW1iZXIpLnNwbGl0KCcuJyksIHJhbmRvbVN0cmluZyA9IF9hWzFdO1xyXG4gICAgcmV0dXJuIHJhbmRvbVN0cmluZztcclxufTtcclxuZXhwb3J0cy5nZW5lcmF0ZUVtYmVkSWQgPSBnZW5lcmF0ZUVtYmVkSWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldFRoYW5rWW91U2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyID0gZXhwb3J0cy5nZXRGb3JtVGhlbWVIYW5kbGVyID0gZXhwb3J0cy5nZXRXZWxjb21lU2NyZWVuSGlkZGVuSGFuZGxlciA9IGV4cG9ydHMuZ2V0Rm9ybVN1Ym1pdEhhbmRsZXIgPSBleHBvcnRzLmdldEZvcm1IZWlnaHRDaGFuZ2VkSGFuZGxlciA9IGV4cG9ydHMuZ2V0Rm9ybVF1ZXN0aW9uQ2hhbmdlZEhhbmRsZXIgPSBleHBvcnRzLmdldEZvcm1SZWFkeUhhbmRsZXIgPSB2b2lkIDA7XHJcbnZhciBnZXRGb3JtUmVhZHlIYW5kbGVyID0gZnVuY3Rpb24gKGVtYmVkSWQsIGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gZ2V0Rm9ybUV2ZW50SGFuZGxlcignZm9ybS1yZWFkeScsIGVtYmVkSWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRGb3JtUmVhZHlIYW5kbGVyID0gZ2V0Rm9ybVJlYWR5SGFuZGxlcjtcclxudmFyIGdldEZvcm1RdWVzdGlvbkNoYW5nZWRIYW5kbGVyID0gZnVuY3Rpb24gKGVtYmVkSWQsIGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gZ2V0Rm9ybUV2ZW50SGFuZGxlcignZm9ybS1zY3JlZW4tY2hhbmdlZCcsIGVtYmVkSWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRGb3JtUXVlc3Rpb25DaGFuZ2VkSGFuZGxlciA9IGdldEZvcm1RdWVzdGlvbkNoYW5nZWRIYW5kbGVyO1xyXG52YXIgZ2V0Rm9ybUhlaWdodENoYW5nZWRIYW5kbGVyID0gZnVuY3Rpb24gKGVtYmVkSWQsIGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gZ2V0Rm9ybUV2ZW50SGFuZGxlcignZm9ybS1oZWlnaHQtY2hhbmdlZCcsIGVtYmVkSWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRGb3JtSGVpZ2h0Q2hhbmdlZEhhbmRsZXIgPSBnZXRGb3JtSGVpZ2h0Q2hhbmdlZEhhbmRsZXI7XHJcbnZhciBnZXRGb3JtU3VibWl0SGFuZGxlciA9IGZ1bmN0aW9uIChlbWJlZElkLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGdldEZvcm1FdmVudEhhbmRsZXIoJ2Zvcm0tc3VibWl0JywgZW1iZWRJZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldEZvcm1TdWJtaXRIYW5kbGVyID0gZ2V0Rm9ybVN1Ym1pdEhhbmRsZXI7XHJcbnZhciBnZXRXZWxjb21lU2NyZWVuSGlkZGVuSGFuZGxlciA9IGZ1bmN0aW9uIChlbWJlZElkLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGdldEZvcm1FdmVudEhhbmRsZXIoJ3dlbGNvbWUtc2NyZWVuLWhpZGRlbicsIGVtYmVkSWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRXZWxjb21lU2NyZWVuSGlkZGVuSGFuZGxlciA9IGdldFdlbGNvbWVTY3JlZW5IaWRkZW5IYW5kbGVyO1xyXG52YXIgZ2V0Rm9ybVRoZW1lSGFuZGxlciA9IGZ1bmN0aW9uIChlbWJlZElkKSB7XHJcbiAgICByZXR1cm4gZ2V0Rm9ybUV2ZW50SGFuZGxlcignZm9ybS10aGVtZScsIGVtYmVkSWQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEudGhlbWUpIHtcclxuICAgICAgICAgICAgdmFyIGNsb3NlQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50Zi12MS1jbG9zZS1pY29uJyk7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZUJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5jb2xvciA9IChfYSA9IGRhdGEudGhlbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLmdldEZvcm1UaGVtZUhhbmRsZXIgPSBnZXRGb3JtVGhlbWVIYW5kbGVyO1xyXG52YXIgZ2V0VGhhbmtZb3VTY3JlZW5CdXR0b25DbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoZW1iZWRJZCwgY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBnZXRGb3JtRXZlbnRIYW5kbGVyKCd0aGFuay15b3Utc2NyZWVuLWJ1dHRvbi1jbGljaycsIGVtYmVkSWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRUaGFua1lvdVNjcmVlbkJ1dHRvbkNsaWNrSGFuZGxlciA9IGdldFRoYW5rWW91U2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyO1xyXG5mdW5jdGlvbiBnZXRGb3JtRXZlbnRIYW5kbGVyKGV2ZW50VHlwZSwgZXhwZWN0ZWRFbWJlZElkLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfYSA9IGV2ZW50LmRhdGEsIHR5cGUgPSBfYS50eXBlLCBlbWJlZElkID0gX2EuZW1iZWRJZCwgZGF0YSA9IF9fcmVzdChfYSwgW1widHlwZVwiLCBcImVtYmVkSWRcIl0pO1xyXG4gICAgICAgIGlmICh0eXBlICE9PSBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1iZWRJZCAhPT0gZXhwZWN0ZWRFbWJlZElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2sgPT09IG51bGwgfHwgY2FsbGJhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgfTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY3JlYXRlLWlmcmFtZVwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zZXR1cC1jdXN0b20ta2V5Ym9hcmQtY2xvc2VcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlZnJlc2hJZnJhbWUgPSB2b2lkIDA7XHJcbnZhciByZWZyZXNoSWZyYW1lID0gZnVuY3Rpb24gKGlmcmFtZSkge1xyXG4gICAgaWYgKGlmcmFtZSkge1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSBpZnJhbWUuc3JjO1xyXG4gICAgICAgIGlmIChzb3VyY2UuaW5jbHVkZXMoJyZyZWZyZXNoJykpIHtcclxuICAgICAgICAgICAgdmFyIHNwbGl0VVJMID0gc291cmNlLnNwbGl0KCcmcmVmcmVzaCMnKTtcclxuICAgICAgICAgICAgaWZyYW1lLnNyYyA9IHNwbGl0VVJMLmpvaW4oJyMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBzcGxpdFVSTCA9IHNvdXJjZS5zcGxpdCgnIycpO1xyXG4gICAgICAgICAgICBzcGxpdFVSTFswXSA9IFwiXCIuY29uY2F0KHNwbGl0VVJMWzBdLCBcIiZyZWZyZXNoXCIpO1xyXG4gICAgICAgICAgICBpZnJhbWUuc3JjID0gc3BsaXRVUkwuam9pbignIycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5yZWZyZXNoSWZyYW1lID0gcmVmcmVzaElmcmFtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGlzcGF0Y2hDdXN0b21LZXlFdmVudEZyb21JZnJhbWUgPSBleHBvcnRzLnJlbW92ZUN1c3RvbUtleWJvYXJkTGlzdGVuZXIgPSBleHBvcnRzLmFkZEN1c3RvbUtleWJvYXJkTGlzdGVuZXIgPSB2b2lkIDA7XHJcbnZhciBQT1NUX01FU1NBR0UgPSAnZm9ybS1jbG9zZSc7XHJcbnZhciBLRVlfRVZFTlQgPSAnRXNjYXBlJztcclxudmFyIGNsb3NlT25LZXlFdmVudCA9IGZ1bmN0aW9uIChldnQsIGNsb3NlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIGlmIChldnQuY29kZSA9PT0gS0VZX0VWRU5UICYmIHR5cGVvZiBjbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAoMCwgZXhwb3J0cy5yZW1vdmVDdXN0b21LZXlib2FyZExpc3RlbmVyKSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICB9KTtcclxufSk7IH07XHJcbnZhciBhZGRDdXN0b21LZXlib2FyZExpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBjbG9zZU9uS2V5RXZlbnQoZXZ0LCBjYWxsYmFjayk7IH0pO1xyXG59O1xyXG5leHBvcnRzLmFkZEN1c3RvbUtleWJvYXJkTGlzdGVuZXIgPSBhZGRDdXN0b21LZXlib2FyZExpc3RlbmVyO1xyXG52YXIgcmVtb3ZlQ3VzdG9tS2V5Ym9hcmRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2xvc2VPbktleUV2ZW50KTsgfTtcclxuZXhwb3J0cy5yZW1vdmVDdXN0b21LZXlib2FyZExpc3RlbmVyID0gcmVtb3ZlQ3VzdG9tS2V5Ym9hcmRMaXN0ZW5lcjtcclxudmFyIGRpc3BhdGNoQ3VzdG9tS2V5RXZlbnRGcm9tSWZyYW1lID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgaWYgKGV2dC5kYXRhLnR5cGUgPT09IFBPU1RfTUVTU0FHRSkge1xyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJywgeyBjb2RlOiBLRVlfRVZFTlQgfSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLmRpc3BhdGNoQ3VzdG9tS2V5RXZlbnRGcm9tSWZyYW1lID0gZGlzcGF0Y2hDdXN0b21LZXlFdmVudEZyb21JZnJhbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudHJpZ2dlcklmcmFtZVJlZHJhdyA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIFRlbGwgYnJvd3NlciB0byByZWRyYXcgdGhlIGlmcmFtZS4gRElTVC03MTMuXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VySWZyYW1lUmVkcmF3KCkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgdmFyIGlmcmFtZSA9IHRoaXM7XHJcbiAgICBpZnJhbWUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVooMCknO1xyXG59XHJcbmV4cG9ydHMudHJpZ2dlcklmcmFtZVJlZHJhdyA9IHRyaWdnZXJJZnJhbWVSZWRyYXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0VGV4dENvbG9yID0gdm9pZCAwO1xyXG52YXIgaGV4X3JnYl8xID0gcmVxdWlyZShcIi4vaGV4LXJnYlwiKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0FFUlQvI2NvbG9yLWNvbnRyYXN0XHJcbnZhciBSRURfQlJJR0hUTkVTUyA9IDI5OTtcclxudmFyIEdSRUVOX0JSSUdIVE5FU1MgPSA1ODc7XHJcbnZhciBCTFVFX0JSSUdIVE5FU1MgPSAxMTQ7XHJcbnZhciBCQVNFID0gMTAwMDtcclxudmFyIEJSSUdIVE5FVFNTX0xJTUlUID0gMTI1O1xyXG52YXIgaXNIZXggPSBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiBzdHJpbmcuc3RhcnRzV2l0aCgnIycpOyB9O1xyXG52YXIgZ2V0UmdiVmFsdWVzID0gZnVuY3Rpb24gKHJnYikge1xyXG4gICAgdmFyIHJnYlZhbHVlcyA9IHtcclxuICAgICAgICByZWQ6IDAsXHJcbiAgICAgICAgZ3JlZW46IDAsXHJcbiAgICAgICAgYmx1ZTogMCxcclxuICAgIH07XHJcbiAgICB2YXIgdmFsdWVzID0gcmdiLm1hdGNoKC9cXGQrL2cpO1xyXG4gICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgIHJnYlZhbHVlcy5yZWQgPSBwYXJzZUludCh2YWx1ZXNbMF0sIDEwKTtcclxuICAgICAgICByZ2JWYWx1ZXMuZ3JlZW4gPSBwYXJzZUludCh2YWx1ZXNbMF0sIDEwKTtcclxuICAgICAgICByZ2JWYWx1ZXMuYmx1ZSA9IHBhcnNlSW50KHZhbHVlc1swXSwgMTApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJnYlZhbHVlcztcclxufTtcclxudmFyIGdldFRleHRDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgLy8gcmV0dXJuIGRlZmF1bHQgY29sb3JcclxuICAgIGlmICghY29sb3IpXHJcbiAgICAgICAgcmV0dXJuICcjRkZGRkZGJztcclxuICAgIHZhciByZ2JWYWx1ZXMgPSBpc0hleChjb2xvcikgPyAoMCwgaGV4X3JnYl8xLmhleFJnYikoY29sb3IpIDogZ2V0UmdiVmFsdWVzKGNvbG9yKTtcclxuICAgIHZhciByZWQgPSByZ2JWYWx1ZXMucmVkLCBncmVlbiA9IHJnYlZhbHVlcy5ncmVlbiwgYmx1ZSA9IHJnYlZhbHVlcy5ibHVlO1xyXG4gICAgdmFyIGJyaWdodG5lc3MgPSBNYXRoLnJvdW5kKChyZWQgKiBSRURfQlJJR0hUTkVTUyArIGdyZWVuICogR1JFRU5fQlJJR0hUTkVTUyArIGJsdWUgKiBCTFVFX0JSSUdIVE5FU1MpIC8gQkFTRSk7XHJcbiAgICByZXR1cm4gYnJpZ2h0bmVzcyA+IEJSSUdIVE5FVFNTX0xJTUlUID8gJyMwMDAwMDAnIDogJyNGRkZGRkYnO1xyXG59O1xyXG5leHBvcnRzLmdldFRleHRDb2xvciA9IGdldFRleHRDb2xvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRUcmFuc2l0aXZlU2VhcmNoUGFyYW1zID0gdm9pZCAwO1xyXG52YXIgZ2V0VHJhbnNpdGl2ZVNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uICh0cmFuc2l0aXZlU2VhcmNoUGFyYW1zKSB7XHJcbiAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICB2YXIgcXVlcnlQYXJhbXNXaXRoVHJhbnNpdGl2ZVBhcmFtcyA9IHt9O1xyXG4gICAgaWYgKHRyYW5zaXRpdmVTZWFyY2hQYXJhbXMgJiYgdHJhbnNpdGl2ZVNlYXJjaFBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdHJhbnNpdGl2ZVNlYXJjaFBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zV2l0aFRyYW5zaXRpdmVQYXJhbXNba2V5XSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBxdWVyeVBhcmFtc1dpdGhUcmFuc2l0aXZlUGFyYW1zO1xyXG59O1xyXG5leHBvcnRzLmdldFRyYW5zaXRpdmVTZWFyY2hQYXJhbXMgPSBnZXRUcmFuc2l0aXZlU2VhcmNoUGFyYW1zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmhhc0RvbSA9IHZvaWQgMDtcclxudmFyIGhhc0RvbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG59O1xyXG5leHBvcnRzLmhhc0RvbSA9IGhhc0RvbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAY29weXJpZ2h0IEBzaW5kcmVzb3JodXNcclxuICogQEdpdGh1YiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2hleC1yZ2JcclxuICogQE5QTTogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaGV4LXJnYlxyXG4gKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmhleFJnYiA9IHZvaWQgMDtcclxudmFyIGhleENoYXJhY3RlcnMgPSAnYS1mXFxcXGQnO1xyXG52YXIgbWF0Y2gzb3I0SGV4ID0gXCIjP1tcIi5jb25jYXQoaGV4Q2hhcmFjdGVycywgXCJdezN9W1wiKS5jb25jYXQoaGV4Q2hhcmFjdGVycywgXCJdP1wiKTtcclxudmFyIG1hdGNoNm9yOEhleCA9IFwiIz9bXCIuY29uY2F0KGhleENoYXJhY3RlcnMsIFwiXXs2fShbXCIpLmNvbmNhdChoZXhDaGFyYWN0ZXJzLCBcIl17Mn0pP1wiKTtcclxudmFyIG5vbkhleENoYXJzID0gbmV3IFJlZ0V4cChcIlteI1wiLmNvbmNhdChoZXhDaGFyYWN0ZXJzLCBcIl1cIiksICdnaScpO1xyXG52YXIgdmFsaWRIZXhTaXplID0gbmV3IFJlZ0V4cChcIl5cIi5jb25jYXQobWF0Y2gzb3I0SGV4LCBcIiR8XlwiKS5jb25jYXQobWF0Y2g2b3I4SGV4LCBcIiRcIiksICdpJyk7XHJcbnZhciBoZXhSZ2IgPSBmdW5jdGlvbiAoaGV4KSB7XHJcbiAgICBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycgfHwgbm9uSGV4Q2hhcnMudGVzdChoZXgpIHx8ICF2YWxpZEhleFNpemUudGVzdChoZXgpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSB2YWxpZCBoZXggc3RyaW5nJyk7XHJcbiAgICB9XHJcbiAgICBoZXggPSBoZXgucmVwbGFjZSgvXiMvLCAnJyk7XHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gOCkge1xyXG4gICAgICAgIGhleCA9IGhleC5zbGljZSgwLCA2KTtcclxuICAgIH1cclxuICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgaGV4ID0gaGV4LnNsaWNlKDAsIDMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XHJcbiAgICB9XHJcbiAgICB2YXIgbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KGhleCwgMTYpO1xyXG4gICAgdmFyIHJlZCA9IG51bWJlciA+PiAxNjtcclxuICAgIHZhciBncmVlbiA9IChudW1iZXIgPj4gOCkgJiAyNTU7XHJcbiAgICB2YXIgYmx1ZSA9IG51bWJlciAmIDI1NTtcclxuICAgIHJldHVybiB7IHJlZDogcmVkLCBncmVlbjogZ3JlZW4sIGJsdWU6IGJsdWUgfTtcclxufTtcclxuZXhwb3J0cy5oZXhSZ2IgPSBoZXhSZ2I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW5jbHVkZUNzcyA9IHZvaWQgMDtcclxudmFyIGdldENzc0hyZWYgPSBmdW5jdGlvbiAoZmlsZW5hbWUpIHsgcmV0dXJuIFwiXCIuY29uY2F0KHByb2Nlc3MuZW52LkNTU19VUkwpLmNvbmNhdChmaWxlbmFtZSk7IH07XHJcbnZhciBpbmNsdWRlQ3NzID0gZnVuY3Rpb24gKGZpbGVuYW1lKSB7XHJcbiAgICB2YXIgaHJlZiA9IGdldENzc0hyZWYoZmlsZW5hbWUpO1xyXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tocmVmPVxcXCJcIi5jb25jYXQoaHJlZiwgXCJcXFwiXVwiKSkpIHtcclxuICAgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgIGNzcy5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICAgICAgY3NzLmhyZWYgPSBocmVmO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGNzcyk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuaW5jbHVkZUNzcyA9IGluY2x1ZGVDc3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9idWlsZC1pZnJhbWUtc3JjXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NyZWF0ZS1pZnJhbWVcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaGFzLWRvbVwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbmNsdWRlLWNzc1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pcy1kZWZpbmVkXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xvYWQtb3B0aW9ucy1mcm9tLWF0dHJpYnV0ZXNcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbW9iaWxlXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlbW92ZS11bmRlZmluZWQta2V5c1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zZXQtZWxlbWVudC1zaXplXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3VubW91bnQtZWxlbWVudFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcmVhdGUtY3VzdG9tLWxhdW5jaC1vcHRpb25zXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NldC1hdXRvLWNsb3NlXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NldHVwLWdvb2dsZS1hbmFseXRpY3MtaW5zdGFuY2VcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZ2V0LXRleHQtY29sb3JcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGF6eS1pbml0XCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2lzLW9wZW5cIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWFrZS1hdXRvLXJlc2l6ZVwiKSwgZXhwb3J0cyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNEZWZpbmVkID0gdm9pZCAwO1xyXG52YXIgaXNEZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufTtcclxuZXhwb3J0cy5pc0RlZmluZWQgPSBpc0RlZmluZWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNWaXNpYmxlID0gZXhwb3J0cy5pc0luUGFnZSA9IGV4cG9ydHMuaXNPcGVuID0gdm9pZCAwO1xyXG52YXIgaXNPcGVuID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiAoMCwgZXhwb3J0cy5pc0luUGFnZSkoZWxlbWVudCkgJiYgKDAsIGV4cG9ydHMuaXNWaXNpYmxlKShlbGVtZW50KTtcclxufTtcclxuZXhwb3J0cy5pc09wZW4gPSBpc09wZW47XHJcbnZhciBpc0luUGFnZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiAhIWVsZW1lbnQucGFyZW50Tm9kZTsgfTtcclxuZXhwb3J0cy5pc0luUGFnZSA9IGlzSW5QYWdlO1xyXG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnOyB9O1xyXG5leHBvcnRzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5sYXp5SW5pdGlhbGl6ZSA9IHZvaWQgMDtcclxudmFyIGxhenlJbml0aWFsaXplID0gZnVuY3Rpb24gKHRhcmdldCwgb25JbnRlcnNlY3Rpb24pIHtcclxuICAgIHZhciBvYnNlcnZlckNhbGxiYWNrID0gZnVuY3Rpb24gKGVudHJpZXMpIHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgb25JbnRlcnNlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xyXG59O1xyXG5leHBvcnRzLmxhenlJbml0aWFsaXplID0gbGF6eUluaXRpYWxpemU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5sb2FkT3B0aW9uc0Zyb21BdHRyaWJ1dGVzID0gZXhwb3J0cy50cmFuc2Zvcm1BdHRyaWJ1dGVWYWx1ZSA9IGV4cG9ydHMuY2FtZWxDYXNlVG9LZWJhYkNhc2UgPSB2b2lkIDA7XHJcbnZhciBjYW1lbENhc2VUb0tlYmFiQ2FzZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGxldHRlciwgaSkge1xyXG4gICAgICAgIGlmIChsZXR0ZXIudG9VcHBlckNhc2UoKSA9PT0gbGV0dGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChpICE9PSAwID8gJy0nIDogJycpLmNvbmNhdChsZXR0ZXIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZXR0ZXI7XHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKCcnKTtcclxufTtcclxuZXhwb3J0cy5jYW1lbENhc2VUb0tlYmFiQ2FzZSA9IGNhbWVsQ2FzZVRvS2ViYWJDYXNlO1xyXG52YXIgdHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgfHwgdW5kZWZpbmVkO1xyXG59O1xyXG52YXIgdHJhbnNmb3JtQm9vbGVhbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ3llcycgfHwgdmFsdWUgPT09ICd0cnVlJztcclxufTtcclxudmFyIHRyYW5zZm9ybUludGVnZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHZhciBpbnRlZ2VyID0gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSwgMTApIDogTmFOO1xyXG4gICAgcmV0dXJuIGlzTmFOKGludGVnZXIpID8gdW5kZWZpbmVkIDogaW50ZWdlcjtcclxufTtcclxudmFyIHRyYW5zZm9ybUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICB2YXIgZm4gPSB2YWx1ZSAmJiB2YWx1ZSBpbiB3aW5kb3cgPyB3aW5kb3dbdmFsdWVdIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IGZuIDogdW5kZWZpbmVkO1xyXG59O1xyXG52YXIgQ09NTUFfUExBQ0VIT0xERVIgPSAnJUVTQ0FQRURfQ09NTUElJztcclxudmFyIHRyYW5zZm9ybUFycmF5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXFwsL2csIENPTU1BX1BMQUNFSE9MREVSKVxyXG4gICAgICAgIC5zcGxpdCgnLCcpXHJcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gISF2OyB9KVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYucmVwbGFjZShDT01NQV9QTEFDRUhPTERFUiwgJywnKTsgfSk7XHJcbn07XHJcbnZhciB0cmFuc2Zvcm1SZWNvcmQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgdmFyIGFycmF5T2ZSZWNvcmRTdHJpbmdzID0gdmFsdWVcclxuICAgICAgICAucmVwbGFjZSgvXFxcXCwvZywgQ09NTUFfUExBQ0VIT0xERVIpXHJcbiAgICAgICAgLnNwbGl0KCcsJylcclxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiAhIXY7IH0pXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdi5yZXBsYWNlKENPTU1BX1BMQUNFSE9MREVSLCAnLCcpOyB9KTtcclxuICAgIHJldHVybiBhcnJheU9mUmVjb3JkU3RyaW5ncy5yZWR1Y2UoZnVuY3Rpb24gKHJlY29yZCwgcmVjb3JkU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHJlY29yZFN0cmluZy5tYXRjaCgvXihbXj1dKyk9KC4qKSQvKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG1hdGNoWzFdLCB2YWx1ZV8xID0gbWF0Y2hbMl07XHJcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVjb3JkKSwgKF9hID0ge30sIF9hW2tleS50cmltKCldID0gdmFsdWVfMSwgX2EpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZDtcclxuICAgIH0sIHt9KTtcclxufTtcclxudmFyIHRyYW5zZm9ybUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCB0cmFuc2Zvcm1hdGlvbikge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIHN3aXRjaCAodHJhbnNmb3JtYXRpb24pIHtcclxuICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUJvb2xlYW4odmFsdWUpO1xyXG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtRnVuY3Rpb24odmFsdWUpO1xyXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUFycmF5KHZhbHVlKTtcclxuICAgICAgICBjYXNlICdyZWNvcmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtUmVjb3JkKHZhbHVlKTtcclxuICAgICAgICBjYXNlICdpbnRlZ2VyT3JCb29sZWFuJzpcclxuICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRyYW5zZm9ybUludGVnZXIodmFsdWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0cmFuc2Zvcm1Cb29sZWFuKHZhbHVlKTtcclxuICAgICAgICBjYXNlICdzdHJpbmdPckJvb2xlYW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gKF9iID0gdHJhbnNmb3JtU3RyaW5nKHZhbHVlKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdHJhbnNmb3JtQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhdHRyaWJ1dGUgdHJhbnNmb3JtYXRpb24gXCIuY29uY2F0KHRyYW5zZm9ybWF0aW9uKSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMudHJhbnNmb3JtQXR0cmlidXRlVmFsdWUgPSB0cmFuc2Zvcm1BdHRyaWJ1dGVWYWx1ZTtcclxudmFyIGxvYWRPcHRpb25zRnJvbUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHJhbnNmb3JtKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModHJhbnNmb3JtKS5yZWR1Y2UoZnVuY3Rpb24gKG9wdGlvbnMsIGtleSkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCAoX2EgPSB7fSwgX2Fba2V5XSA9ICgwLCBleHBvcnRzLnRyYW5zZm9ybUF0dHJpYnV0ZVZhbHVlKShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGYtXCIuY29uY2F0KCgwLCBleHBvcnRzLmNhbWVsQ2FzZVRvS2ViYWJDYXNlKShrZXkpKSksIHRyYW5zZm9ybVtrZXldKSwgX2EpKTtcclxuICAgIH0sIHt9KTtcclxufTtcclxuZXhwb3J0cy5sb2FkT3B0aW9uc0Zyb21BdHRyaWJ1dGVzID0gbG9hZE9wdGlvbnNGcm9tQXR0cmlidXRlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5tYWtlQXV0b1Jlc2l6ZSA9IHZvaWQgMDtcclxudmFyIG1vYmlsZV8xID0gcmVxdWlyZShcIi4vbW9iaWxlXCIpO1xyXG4vLyB0aGlzIGVuc3VyZXMgdGhlIGZvcm0gaXMgbm90IGNvdmVyZWQgYnkgYnJvd3NlciBuYXZiYXIgb24gbW9iaWxlIGRldmljZXNcclxudmFyIG1ha2VBdXRvUmVzaXplID0gZnVuY3Rpb24gKHdyYXBwZXJFbG0pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh3cmFwcGVyRWxtICYmICgwLCBtb2JpbGVfMS5pc01vYmlsZSkoKSkge1xyXG4gICAgICAgIHdyYXBwZXJFbG0uc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIFwiXCIuY29uY2F0KHdpbmRvdy5pbm5lckhlaWdodCwgXCJweFwiKSwgJ2ltcG9ydGFudCcpO1xyXG4gICAgfVxyXG59OyB9O1xyXG5leHBvcnRzLm1ha2VBdXRvUmVzaXplID0gbWFrZUF1dG9SZXNpemU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNGdWxsc2NyZWVuID0gZXhwb3J0cy5pc01vYmlsZSA9IGV4cG9ydHMuaXNCaWdTY3JlZW4gPSB2b2lkIDA7XHJcbnZhciBpc0JpZ1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuc2NyZWVuLndpZHRoID49IDEwMjQgJiYgd2luZG93LnNjcmVlbi5oZWlnaHQgPj0gNzY4O1xyXG59O1xyXG5leHBvcnRzLmlzQmlnU2NyZWVuID0gaXNCaWdTY3JlZW47XHJcbnZhciBpc01vYmlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAvbW9iaWxlfHRhYmxldHxhbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG59O1xyXG5leHBvcnRzLmlzTW9iaWxlID0gaXNNb2JpbGU7XHJcbnZhciBpc0Z1bGxzY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKDAsIGV4cG9ydHMuaXNNb2JpbGUpKCkgJiYgISgwLCBleHBvcnRzLmlzQmlnU2NyZWVuKSgpO1xyXG59O1xyXG5leHBvcnRzLmlzRnVsbHNjcmVlbiA9IGlzRnVsbHNjcmVlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnJlbW92ZVVuZGVmaW5lZEtleXMgPSB2b2lkIDA7XHJcbnZhciBpc19kZWZpbmVkXzEgPSByZXF1aXJlKFwiLi9pcy1kZWZpbmVkXCIpO1xyXG52YXIgcmVtb3ZlVW5kZWZpbmVkS2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopXHJcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICByZXR1cm4gKDAsIGlzX2RlZmluZWRfMS5pc0RlZmluZWQpKHZhbHVlKTtcclxuICAgIH0pXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfYSkge1xyXG4gICAgICAgIHZhciBfYjtcclxuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWNjKSwgKF9iID0ge30sIF9iW2tleV0gPSB2YWx1ZSwgX2IpKSk7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbmV4cG9ydHMucmVtb3ZlVW5kZWZpbmVkS2V5cyA9IHJlbW92ZVVuZGVmaW5lZEtleXM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2V0QXV0b0Nsb3NlID0gdm9pZCAwO1xyXG52YXIgZ2V0X2Zvcm1fZXZlbnRfaGFuZGxlcl8xID0gcmVxdWlyZShcIi4vY3JlYXRlLWlmcmFtZS9nZXQtZm9ybS1ldmVudC1oYW5kbGVyXCIpO1xyXG52YXIgc2V0QXV0b0Nsb3NlID0gZnVuY3Rpb24gKGVtYmVkSWQsIGF1dG9DbG9zZSwgY2xvc2VDYWxsYmFjaykge1xyXG4gICAgaWYgKGF1dG9DbG9zZSAmJiBjbG9zZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGF1dG9DbG9zZVRpbWVfMSA9IHR5cGVvZiBhdXRvQ2xvc2UgPT09ICdudW1iZXInID8gYXV0b0Nsb3NlIDogMDtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgwLCBnZXRfZm9ybV9ldmVudF9oYW5kbGVyXzEuZ2V0Rm9ybVN1Ym1pdEhhbmRsZXIpKGVtYmVkSWQsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFRpbWVvdXQoY2xvc2VDYWxsYmFjaywgYXV0b0Nsb3NlVGltZV8xKTsgfSkpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLnNldEF1dG9DbG9zZSA9IHNldEF1dG9DbG9zZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZXRFbGVtZW50U2l6ZSA9IHZvaWQgMDtcclxudmFyIHNldEVsZW1lbnRTaXplID0gZnVuY3Rpb24gKGVsZW1lbnQsIF9hKSB7XHJcbiAgICB2YXIgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgaWYgKHdpZHRoKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHdpZHRoLCBcInB4XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGhlaWdodCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJcIi5jb25jYXQoaGVpZ2h0LCBcInB4XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcbmV4cG9ydHMuc2V0RWxlbWVudFNpemUgPSBzZXRFbGVtZW50U2l6ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZXR1cEdhSW5zdGFuY2UgPSBleHBvcnRzLnNlbmRHYUlkTWVzc2FnZSA9IHZvaWQgMDtcclxudmFyIEdBX1RZUEVfTUVTU0FHRSA9ICdnYS1jbGllbnQtaWQnO1xyXG52YXIgc2VuZEdhSWRNZXNzYWdlID0gZnVuY3Rpb24gKGVtYmVkSWQsIGdhQ2xpZW50SWQsIGlmcmFtZSkge1xyXG4gICAgdmFyIGRhdGEgPSB7IGVtYmVkSWQ6IGVtYmVkSWQsIGdhQ2xpZW50SWQ6IGdhQ2xpZW50SWQgfTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChpZnJhbWUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcclxuICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBHQV9UWVBFX01FU1NBR0UsIGRhdGE6IGRhdGEgfSwgJyonKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAwKTtcclxufTtcclxuZXhwb3J0cy5zZW5kR2FJZE1lc3NhZ2UgPSBzZW5kR2FJZE1lc3NhZ2U7XHJcbnZhciBnZXRUcmFja2VyID0gZnVuY3Rpb24gKHRyYWNrZXJzLCB0cmFja2luZ0lkKSB7XHJcbiAgICBpZiAodHJhY2tpbmdJZCkge1xyXG4gICAgICAgIHJldHVybiB0cmFja2Vycy5maW5kKGZ1bmN0aW9uICh0cmFja2VyKSB7IHJldHVybiB0cmFja2VyLmdldCgndHJhY2tpbmdJZCcpID09PSB0cmFja2luZ0lkOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmFja2Vyc1swXTtcclxufTtcclxudmFyIGxvZ0Vycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xyXG59O1xyXG52YXIgc2V0dXBHYUluc3RhbmNlID0gZnVuY3Rpb24gKGlmcmFtZSwgZW1iZWRJZCwgc2hhcmVHYUluc3RhbmNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBnYU9iamVjdCA9IHdpbmRvd1t3aW5kb3cuR29vZ2xlQW5hbHl0aWNzT2JqZWN0XTtcclxuICAgICAgICB2YXIgdHJhY2tpbmdJZCA9IHR5cGVvZiBzaGFyZUdhSW5zdGFuY2UgPT09ICdzdHJpbmcnID8gc2hhcmVHYUluc3RhbmNlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIHZhciB0cmFja2VyID0gZ2V0VHJhY2tlcihnYU9iamVjdC5nZXRBbGwoKSwgdHJhY2tpbmdJZCk7XHJcbiAgICAgICAgaWYgKHRyYWNrZXIpIHtcclxuICAgICAgICAgICAgKDAsIGV4cG9ydHMuc2VuZEdhSWRNZXNzYWdlKShlbWJlZElkLCB0cmFja2VyLmdldCgnY2xpZW50SWQnKSwgaWZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ0Vycm9yKFwiV2hvb3BzISBZb3UgZW5hYmxlZCB0aGUgc2hhcmVHYUluc3RhbmNlIGZlYXR1cmUgaW4geW91ciB0eXBlZm9ybSBlbWJlZCBidXQgdGhlIHRyYWNrZXIgd2l0aCBJRCBcIi5jb25jYXQodHJhY2tpbmdJZCwgXCIgd2FzIG5vdCBmb3VuZC4gXCIpICtcclxuICAgICAgICAgICAgICAgICdNYWtlIHN1cmUgdG8gaW5jbHVkZSBHb29nbGUgQW5hbHl0aWNzIEphdmFzY3JpcHQgY29kZSBiZWZvcmUgdGhlIFR5cGVmb3JtIEVtYmVkIEphdmFzY3JpcHQgY29kZSBpbiB5b3VyIHBhZ2UgYW5kIHVzZSBjb3JyZWN0IHRyYWNrZXIgSUQuICcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgICBsb2dFcnJvcignV2hvb3BzISBZb3UgZW5hYmxlZCB0aGUgc2hhcmVHYUluc3RhbmNlIGZlYXR1cmUgaW4geW91ciB0eXBlZm9ybSBlbWJlZCBidXQgdGhlIEdvb2dsZSBBbmFseXRpY3Mgb2JqZWN0IGhhcyBub3QgYmVlbiBmb3VuZC4gJyArXHJcbiAgICAgICAgICAgICdNYWtlIHN1cmUgdG8gaW5jbHVkZSBHb29nbGUgQW5hbHl0aWNzIEphdmFzY3JpcHQgY29kZSBiZWZvcmUgdGhlIFR5cGVmb3JtIEVtYmVkIEphdmFzY3JpcHQgY29kZSBpbiB5b3VyIHBhZ2UuICcpO1xyXG4gICAgICAgIGxvZ0Vycm9yKGV4Y2VwdGlvbik7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuc2V0dXBHYUluc3RhbmNlID0gc2V0dXBHYUluc3RhbmNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnVubW91bnRFbGVtZW50ID0gdm9pZCAwO1xyXG52YXIgdW5tb3VudEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgKF9hID0gZWxlbWVudC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbn07XHJcbmV4cG9ydHMudW5tb3VudEVsZW1lbnQgPSB1bm1vdW50RWxlbWVudDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9