// src/main.jsx
import { createRoot } from 'react-dom/client';
import App from './App';
import { CartProvider } from './components/CartContext';
import { UserProvider } from './components/UserContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>
);
