# Tutorial de Integracion Redux con React.

## Dependencias

```bash
# npm
npm install --save redux react-redux react-redux-form redux-thunk axios
# yarn
yarn add redux react-redux react-redux-form redux-thunk axios
```

## Estructura de carpetas

![/public/folders.png](/public/folders.png)

## Configurar store
1. Agregar configuracion del store
```js
/* /src/shared/redux/configureStore.js */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const middleware = [thunk];
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
```
2. Creamos las acciones base
```js
/* /src/shared/redux/baseActions.js */
export const request = (type) => ({
    type,
});

export const received = (type, payload) => ({
    type, payload
});

export const error = (type) => ({
    type
});
```
## Crear rootReducer

```js
/* /src/shared/reducers/index.js */
import { combineReducers } from 'redux';
import user from '../../reducers/userReducer';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;
```

## Crear actionTypes
```js
/* /src/actions/actionTypes.js */
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_ERROR = 'ADD_USER_ERROR';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

```

## Crear estructura del API
1. Crear el archivo de una constante
```js
/* /src/shared/utils/constants.js */
export const URL = process.env.REACT_APP_URL || 'http://localhost:3001';
```
2. Agregar API configuration
```js
/* /src/api/api.js */
import axios from 'axios';
import { URL } from '../shared/utils/constants';

const api = axios.create({
    baseURL: `${URL}`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;
```
3. Agregar UserService.js
```js
/* /src/services/UserService.js */
import API from '../api/api';
const URL_USERS = '/users';

const getUsers = async () => {
    coonst response = await API.get(`${URL_USERS}`);
    if(response.error) {
        throw new Error('an error occurred');
    }
    return response;
};

const addUser = async (user) => {
    const response = await API.post(`${URL_USERS}`, user);
    if(response.error) {
        throw new Error('an error occurred while is creating');
    }
    return response;
};

const getUser = async (id) => {
    const response = await API.get(`${URL_USERS}/${id}`);
    if(response.error) {
        throw new Error('an error occurred');
    }
    return response;
};

const deleteUser = async (id) => {
    const response = await API.delete(`${URL_USERS}/${id}`);
    if(response.error) {
        throw new Error('an error occurred');
    }
    return response;
};

const updateUser = async (user) => {
    const response = await API.put(`${URL_USERS}/${user.id}`, user);
    if(response.error) {
        throw new Error('an error occurred while is updating');
    }
    return response;
};

export default {
    getUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
};
```
## Crear userActions

```js
/* /src/actions/userActions.js */
import { request, received, error } from '../shared/redux/baseActions';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    ADD_USER_REQUEST,
    ADD_USER_ERROR,
    ADD_USER_SUCCESS,
} from './actionTypes'
import UserService from '../services/UserService';

export const fetchUsers = () => async (dispatch) => {
    dispatch(request(FETCH_USERS_REQUEST));
    try {
        const response = await UserService.getUsers();
        dispatch(received(FETCH_USERS_SUCCESS, response.data));
    } catch(err) {
        dispatch(error(FETCH_USERS_ERROR));
        console.log('AXIOS_ERROR', err.response);
    }
}
export const addUser = (user) => async (dispatch) => {
    dispatch(request(ADD_USER_REQUEST));
    try {
        const response = await UserService.addUser(user);
        dispatch(received(ADD_USER_SUCCESS, response.data));
    } catch(err) {
        dispatch(request(ADD_USER_ERROR));
        console.log('AXIOS_ERROR:', err.response);
    }
};

```

## Crear archivo de utilidades

```js
/* /src/shared/utils/frontend.js */
export function getNewState(state, newState) {
    return { ...state, ...newState };
}

export function isFirstRender(items) {
    return !items || items.lengtrh === 0 || Object.keys(items).length === 0;
}
```
## Crear userReducer

```js
/* /src/reducers/userReducer.js */
import {
    FETCH_USERS_SUCCESS,
    ADD_USER_SUCCESS
} from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
    users: [],
    selectedUser: null
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case: FETCH_USERS_SUCCESS: {
            const { payload: users } = action;
            return getNewState(state, {
                users
            });
        }
        case ADD_USER_SUCCESS: {
            const { payload: user } = action;
            const newUsers = [...state.users, user];
            return getNewState(state, {
                users: newUsers,
                selectedUser: user
            });
        }
        default: 
            return state;
    }
}
```

## Modificar index.js

```js
/* /src/index,js */
// ...
import { Provider } from 'react-redux';
// ...
import configureStore from './shared/redux/configureStore';
// ...
const store = configureStore(window.initialState);

const renderApp = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
};
```