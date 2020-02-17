import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Provider } from 'react-redux';
import { Store , Persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

import AppLayout from './src/App';

class App extends React.Component {

  render(){

    return (
      <Provider
        store={Store}
      >
      <PersistGate
        loading={<ActivityIndicator />} persistor={Persistor}
      >

        <AppLayout />

      </PersistGate>
      </Provider>
    );
  }

};

export default App;
