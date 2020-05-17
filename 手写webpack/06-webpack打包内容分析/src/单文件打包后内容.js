(function(modules) { // webpackBootstrap
	// 1. 初始化一个缓存
	var installedModules = {};
	// 2. 自己实现了一个require方法
	function __webpack_require__(moduleId) { // moduleId 即："./src/index.js"
		// 2.1 判断缓存中有没有当前需要使用的模块
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// 2.2 自己创建一个module，并放进缓存中
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};
		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		// Flag the module as loaded
		module.l = true;
		// Return the exports of the module
		return module.exports;
	}
	// expose the modules object (__webpack_modules__)
	__webpack_require__.m = modules;
	// expose the module cache
	__webpack_require__.c = installedModules;
	// define getter function for harmony exports
	__webpack_require__.d = function(exports, name, getter) {
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};
	// define __esModule on exports
	__webpack_require__.r = function(exports) {
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};
	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};
	// getDefaultExport function for compatibility with non-harmony modules
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};
	// Object.prototype.hasOwnProperty.call
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

	// __webpack_public_path__
	__webpack_require__.p = "";
	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
({
  "./src/index.js": // key

    (function(module, exports) { // value
      console.log('jojo')
    })
});

/*
1.webpack打包内容分析
1.通过我们的观察, 发现webpack打包之后的内容被放到了一个自调用函数中
2.会将入口文件的路径作为key,入口文件的内容作为value放到一个对象中传递给自调用函数
3.在自调用函数中实现了require方法, 并且调用了自己实现的require方法
4.在调用自己实现的require时，将入口文件路径作为key传递进去, 在函数里面通过这个路径取出对应的函数执行
*/