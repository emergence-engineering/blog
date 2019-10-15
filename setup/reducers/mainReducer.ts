import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import {actionTypes} from '../actions/actionTypes'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import fbConfig from '../createStore'

import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';



const exampleInitialState = {
    exampleData: 0
  }


  // REDUCERS
export const reducer = (state = exampleInitialState, action: any) => {
    switch (action.type) {
      case actionTypes.SAMPLE:
        return Object.assign({}, state, {
            exampleData: action.payLoad
        })
      default:
        return state
    }
  }


const mainReducer = combineReducers({
    mainStore: reducer,
    firebase: firebaseReducer,
    firestore,
});


  export function initializeStore () {
    return  createStore(mainReducer,
        composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
          reduxFirestore(fbConfig) // redux bindings for firestore
        )
      )
  }

