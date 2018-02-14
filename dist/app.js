/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _states = __webpack_require__(5);

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new Phaser.Game(288, 512, Phaser.AUTO, 'game');
Object.keys(states).forEach(function (state) {
    return GAME.state.add(state, states[state]);
});
var bird = void 0,
    base = void 0,
    ground = void 0,
    pipe = void 0,
    labelScore = void 0,
    score = -1,
    pipes = void 0,
    spaceKey = void 0;

GAME.state.start('Boot');

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boot = __webpack_require__(6);

Object.defineProperty(exports, 'Boot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_boot).default;
  }
});

var _preload = __webpack_require__(7);

Object.defineProperty(exports, 'Preload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preload).default;
  }
});

var _menu = __webpack_require__(8);

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _play = __webpack_require__(9);

Object.defineProperty(exports, 'Play', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_play).default;
  }
});

var _finish = __webpack_require__(10);

Object.defineProperty(exports, 'Finish', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_finish).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
    }

    _createClass(Boot, [{
        key: 'create',
        value: function create() {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.state.start('Preload');
        }
    }]);

    return Boot;
}(Phaser.State);

exports.default = Boot;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {
            this.load.image('bg', '../media/src/bg.png');
            this.load.image('start', '../media/src/start.png');
            this.load.image('bird', '../media/src/yellowbird-midflap.png');
            this.load.image('base', '../media/src/base.png');
            this.load.image('pipe', '../media/src/pipe.png');
            this.load.image('finish', '../media/src/gameover.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Menu');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
    _inherits(Menu, _Phaser$State);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'create',
        value: function create() {
            this.add.sprite(0, 0, 'bg');
            var startScreen = this.add.sprite(0, 0, 'start');

            var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            startScreen.alignIn(this.world.bounds, Phaser.CENTER);
            spaceKey.onDown.add(this.start, this);
            this.input.onTap.add(this.start, this);
        }
    }, {
        key: 'start',
        value: function start() {
            this.state.start('Play');
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bird = void 0,
    base = void 0,
    ground = void 0,
    pipe = void 0,
    labelScore = void 0,
    score = -1,
    pipes = void 0,
    spaceKey = void 0;

var Play = function (_Phaser$State) {
    _inherits(Play, _Phaser$State);

    function Play() {
        _classCallCheck(this, Play);

        return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
    }

    _createClass(Play, [{
        key: 'create',
        value: function create() {
            if (score > 0) {
                score = -1;
            }
            this.add.sprite(0, 0, 'bg');
            base = this.add.group();
            base.enableBody = true;
            ground = base.create(0, this.world.height - 64, 'base');
            ground.body.immovable = true;
            pipes = this.add.group();
            pipes.enableBody = true;
            this.world.bringToTop(base);
            bird = this.add.sprite(100, 250, 'bird');
            this.physics.arcade.enable(bird);
            bird.body.bounce.y = 0.2;
            bird.body.gravity.y = 850;
            bird.anchor.setTo(-0.2, 0.5);
            labelScore = this.add.text(140, 20, '0', { font: "30px flappy", fill: "#ffffff" });
            spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spaceKey.onDown.add(this.jump, this, bird);
            this.input.onTap.add(this.jumpOnTap, this);
            this.time.events.loop(1700, this.addRowOfPipes, this);
        }
    }, {
        key: 'update',
        value: function update() {

            if (bird.angle < 20) bird.angle += 1;

            var hitGround = this.physics.arcade.collide(bird, ground);

            this.physics.arcade.overlap(bird, pipes, this.restartGame, null, this);

            if (hitGround === true) {
                this.restartGame();
            }
        }
    }, {
        key: 'jump',
        value: function jump() {
            bird.body.velocity.y = -330;
            this.add.tween(bird).to({ angle: -20 }, 100).start();
        }
    }, {
        key: 'addRowOfPipes',
        value: function addRowOfPipes() {
            var bottomPos = this.getPipeYPos(100, 300),
                hole = 440,
                upperPos = bottomPos + hole;

            this.addPipe(280, bottomPos);
            this.addPipe(278, upperPos);
            this.addPoint();
        }
    }, {
        key: 'addPipe',
        value: function addPipe(x, y) {
            pipe = this.add.sprite(x, this.world.height - y, 'pipe');
            // Add the pipe to our previously created group
            pipes.add(pipe);
            // Enable physics on the pipe
            this.physics.arcade.enable(pipe);
            // Add velocity to the pipe to make it move left
            pipe.body.velocity.x = -170;
            // Automatically kill the pipe when it's no longer visible
            pipe.checkWorldBounds = true;
            pipe.outOfBoundsKill = true;
        }
    }, {
        key: 'jumpOnTap',
        value: function jumpOnTap() {
            bird.body.velocity.y = -330; //-250
            this.add.tween(bird).to({ angle: -20 }, 100).start();
        }
    }, {
        key: 'restartGame',
        value: function restartGame() {
            // console.log(score)
            this.state.start('Finish', true, false, score, spaceKey);
        }
    }, {
        key: 'addPoint',
        value: function addPoint() {
            console.log(score);
            score += 1;
            labelScore.text = score;
        }
    }, {
        key: 'getPipeYPos',
        value: function getPipeYPos(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        }
    }]);

    return Play;
}(Phaser.State);

exports.default = Play;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _play = __webpack_require__(9);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var finishSign = void 0,
    labelScore = void 0,
    playersScore = void 0,
    space = void 0;

var Finish = function (_Phaser$State) {
    _inherits(Finish, _Phaser$State);

    function Finish() {
        _classCallCheck(this, Finish);

        return _possibleConstructorReturn(this, (Finish.__proto__ || Object.getPrototypeOf(Finish)).apply(this, arguments));
    }

    _createClass(Finish, [{
        key: 'init',
        value: function init(score, spaceKey) {
            playersScore = score;
            space = spaceKey;
        }
    }, {
        key: 'create',
        value: function create() {
            this.add.sprite(0, 0, 'bg');
            finishSign = this.add.sprite(0, 0, 'finish');

            if (playersScore === -1) {
                playersScore = 0;
            }
            labelScore = this.add.text(140, 285, playersScore, { font: "30px flappy", fill: "#ffffff" });
            finishSign.alignIn(this.world.bounds, Phaser.CENTER);
            space.onDown.add(this.restart, this);
            this.input.onTap.add(this.restart, this);
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.state.start('Menu');
            playersScore = -1;
        }
    }]);

    return Finish;
}(Phaser.State);

exports.default = Finish;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map