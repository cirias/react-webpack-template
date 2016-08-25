import { name, Component } from './hello.jsx';
import { initState, reducer } from './reducer';
import { sagas } from './saga';

export default { name, Component, initState, dispatcher: { reducer, saga: sagas } };
