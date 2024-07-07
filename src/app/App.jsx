// App.js
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Todolist from '../components/Todolist';
import Navigation from '../components/Navigation';
import Message from '../components/Message';
import One from '../challenges/one';
import BoxAnimation from '../challenges/BoxAnimation';
import AutoSelect from '../challenges/AutoSelect';
import CustomComponent from '../challenges/custom-component';
import Circle from '../challenges/Circle';
import AppLayout from '../layout/AppLayout';

// Define the routes using createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} >
      <Route path="/list" element={<Navigation />} />
      <Route path="todolist" element={<Todolist />} />
      <Route path="message" element={<Message />} />
      <Route path="challenges/one" element={<One />} />
      <Route path="challenges/box" element={<BoxAnimation />} />
      <Route path="challenges/autoselect" element={<AutoSelect />} />
      <Route path="challenges/customcomponent" element={<CustomComponent />} />
      <Route path="challenges/circle" element={<Circle />} />
    </Route>  
  )
)


const App = () => (
  <div>
    <RouterProvider router={router} /> 
  </div>
);

export default App;
