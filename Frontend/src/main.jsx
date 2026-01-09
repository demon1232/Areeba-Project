import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store,{persistor} from './slices/store.js'
import{PersistGate} from "redux-persist/integration/react";
import 'leaflet/dist/leaflet.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)




