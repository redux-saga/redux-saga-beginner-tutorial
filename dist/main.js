"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("@babel/polyfill");
const react_dom_1 = __importDefault(require("react-dom"));
const toolkit_1 = require("@reduxjs/toolkit");
const redux_saga_1 = __importDefault(require("redux-saga"));
const Counter_1 = __importDefault(require("./Counter"));
const reducers_1 = __importDefault(require("./reducers"));
const sagas_1 = __importDefault(require("./sagas"));
const operationTypes_1 = require("./operationTypes");
// Create the saga middleware
const sagaMiddleware = (0, redux_saga_1.default)();
const middleware = [sagaMiddleware];
// Mount it on the Store
const store = (0, toolkit_1.configureStore)({
    reducer: reducers_1.default,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
// Then run the saga
sagaMiddleware.run(sagas_1.default);
const action = (type) => store.dispatch({ type });
function render() {
    react_dom_1.default.render((0, jsx_runtime_1.jsx)(Counter_1.default, { value: store.getState(), onIncrement: () => action(operationTypes_1.operationTypes.INCREMENT), onDecrement: () => action(operationTypes_1.operationTypes.DECREMENT), onIncrementAsync: () => action(operationTypes_1.operationTypes.INCREMENT_ASYNC) }), document.getElementById("root"));
}
render();
store.subscribe(render);
