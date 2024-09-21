// Pages
import SignInSignUp from './Pages/SignInSignUp';
import { Home } from './Pages/Home';
import { Account } from './Pages/Account';
import { NewOrders } from './Pages/NewOrders';
import { Button3 } from './Pages/Button3';
import { Button4 } from './Pages/Button4';

// React Router
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './Layouts/PageLayout';
import { useState } from 'react';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(null); // State for authentication

  return (
    <Router>
      <Routes>
        {/* The wrapped in Route element= {<Layout/> are now  
            and the <Route>'s are now child routes of the layout
        */}
        <Route element= {<PageLayout userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>}>
        {/* path="/" will default route to home page */}
          <Route path="/" element={<Home/>}/>
          <Route path="/SignInSignUp" element={<SignInSignUp userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>}/>
          <Route path="/Account" element={<Account userLoggedIn={userLoggedIn}/>}/>
            
          <Route path="/NewOrders" element={<NewOrders/>}/>
          <Route path="/Button3" element={<Button3/>}/>
          <Route path="/Button4" element={<Button4/>}/>

          {/*<Route path="/Button2" element={<Button2/>}/>
          <Route path="/Button3" element={<Button3/>}/>
          <Route path="/Button4" element={<Button4/>}/>*/}
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
