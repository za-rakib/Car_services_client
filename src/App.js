import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MainDashboard from './components/Dashboard/MainDashboard/MainDashboard';
import Contact from './components/Home/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Booking from './components/Dashboard/Booking/Booking';
import Review from './components/Home/Review/Review';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/:servicesType">
            <MainDashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Booking />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
