import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


class SamplePage extends Component {

render () {

        return (
            <div>
                <p>Component with FirestoreConnect Feature</p>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      orders: state.firestore.ordered.orders
    }
  }
  
  export default compose(

    connect(mapStateToProps),
    firestoreConnect([
      { 
        collection: 'database-name',
      }
    ])
  ) (SamplePage);


  
  