import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Counter from "./Counter";
import Register from "./Register";
// import reducer from "./reducers";
// import { helloSaga } from "./sagas";
// import rootSaga from "./sagas";

// import reducer from "./store/reducers";
// import rootSaga from "./store/sagas";
import reducer from "./simple-store/reducers";
import rootSaga from "./simple-store/sagas";
// import { helloSaga } from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(helloSaga);
sagaMiddleware.run(rootSaga);
const action = type =>
  store.dispatch({ type, payload: { state: store.getState().state } });

function render() {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState()}
        onIncrement={() => action("INCREMENT")}
        onDecrement={() => action("DECREMENT")}
        onIncrementAsync={() => action("INCREMENT_ASYNC")}
      />
      <Register
        value={store.getState()}
        createUser={() => action("CREATE_USER_REQUEST")}
        verifySentEmail={() => action("SEND_EMAIL_REQUEST")}
        verifyEmail={() => action("VERIFY_EMAIL_REQUEST")}
        verifySms={() => action("SEND_SMS_REQUEST")}
        verifyXpub={() => action("VERIFY_XPUB_REQUEST")}
      />
    </div>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
