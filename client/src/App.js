// Pages
import SignInSignUp from './Pages/SignInSignUp';
import { Home } from './Pages/Home';
import { Account } from './Pages/Account';
import { Button2 } from './Pages/Button2';
import { Button3 } from './Pages/Button3';
import { Button4 } from './Pages/Button4';

// HashRouter (Router): is a component we need to wrap entire app
// purpose is to create the routing environment
// Routes: specify all potential routes of Router.
// Route: route to each individual page
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './Layouts/PageLayout';
// import { SideBarLayout } from './Layouts/SideBarLayout';

/****************
youtube link: https://www.youtube.com/watch?v=qi32YwjoN2U
 ****************/
function App() {
  return (
    <Router>
      <Routes>
        {/* The wrapped in Route element= {<Layout/> are now  
            and the <Route>'s are now child routes of the layout
        */}
        <Route element= {<PageLayout/>}>
          {/* path="/" will default route to home page */}
          <Route path="/" element={<Home/>}/>
          <Route path="/SignInSignUp" element={<SignInSignUp/>}/>
          <Route path="/Account" element={<Account/>}/>
            <Route path="/Button2" element={<Button2/>}/>
            <Route path="/Button3" element={<Button3/>}/>
            <Route path="/Button4" element={<Button4/>}/>
          <Route path="/Button2" element={<Button2/>}/>
          <Route path="/Button3" element={<Button3/>}/>
          <Route path="/Button4" element={<Button4/>}/>
        </Route>
      </Routes>
    </Router>
  ); 
}

export default App;
