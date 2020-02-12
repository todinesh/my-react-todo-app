import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import App from './component/App'
import MainReducer from './reducers/MainReducer'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
let store = createStoreWithMiddleware(
    MainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

console.log("store " + JSON.stringify(store.getState()))

sagaMiddleware.run(sagas);

const rootElement = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
<App />
</Provider>
, rootElement)
