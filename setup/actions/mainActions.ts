import {actionTypes} from './actionTypes'
  
  // ACTIONS
export const exampleDispatch = (data: any) => {
    return (dispatch: any, getState: any, { getFirestore, getFirebase }) => {
      // do something with Firestore Example
        const firestore = getFirestore();
        firestore.collection('databaseName').add({...data}).then(() => {

          dispatch({ type: actionTypes.SAMPLE, data});

        });
      //

    } 
  }

  

  