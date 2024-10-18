// Pages
import SignInSignUp from './Pages/SignInSignUp';
import { Home } from './Pages/Home';
import { Account } from './Pages/Account';
import { NewOrders } from './Pages/NewOrders';
import { CurrentOrder } from './Pages/CurrentOrder';
import { OrderHistory } from './Pages/OrderHistory';
import { Professionals } from './Pages/Professionals'; 

// React Router
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './Layouts/PageLayout';
import { useState } from 'react';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(null); 

  return (
    <Router>
      <Routes>
        
        <Route element= {<PageLayout userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>}>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/SignInSignUp" element={<SignInSignUp userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>}/>
          <Route path="/Account" element={<Account userLoggedIn={userLoggedIn}/>}/>
          <Route path="/NewOrders" element={<NewOrders/>}/>
          <Route path="/CurrentOrder" element={<CurrentOrder/>}/>
          <Route path="/OrderHistory" element={<OrderHistory/>}/>

          
          <Route path="/Professionals" element={<Professionals/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
