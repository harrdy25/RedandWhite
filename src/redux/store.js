import { applyMiddleware, createStore,  } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['count'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  export const configStore = () => {
      const store = createStore (persistedReducer, applyMiddleware(thunk));
      let persistor = persistStore(store)
      return { store, persistor }
  }
