
import React from 'react';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import ContactInfo from './components/ContactInfo';
import './App.css'; 

const App = () => (
  <div>
    <Navbar />
    <main>
      <section id="product">
        <ProductPage />
      </section>
      <section id="order">
        <OrderForm />
      </section>
      <section id="news">
        <NewsFeed />
      </section>
      <section id="contact">
        <ContactInfo />
      </section>
    </main>
  </div>
);

export default App;
