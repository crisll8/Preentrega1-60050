import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a la mejor tienda de regalos" />
  </StrictMode>
);
