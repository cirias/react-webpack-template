import React from 'react';
import { Map } from 'immutable';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';

// redux saga
import createSagaMiddleware from 'redux-saga';

export default function wrap(App, components) {
  const sagas = [];
  const reducers = {};
  let state = new Map({});

  for (const c of components) {
    const { dispatcher: { saga, reducer }, initState, name } = c;

    if (saga) {
      if (saga instanceof Array) {
        sagas.push(...saga);
      } else {
        sagas.push(saga);
      }
    }

    if (reducer) {
      reducers[name] = reducer;
    }

    if (initState) {
      state = state.set(name, initState);
    }
  }

  function* rootSaga() {
    yield sagas.map(s => s());
  }
  const sagaMiddleware = createSagaMiddleware();

  const reducer = combineReducers(reducers);

  const store = createStore(reducer, state, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  const ProviderApp = (
    <Provider store={ store }>
      <App />
    </Provider>
  );

  return ProviderApp;
}
