"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);


// This function gets the data from the web and waits for the promise to end. Then logs it out.
_service2.default.call(void 0, 8).then((data) =>{
    console.log(data)
});

