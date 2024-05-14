import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signUp",
    element: <SignUpPage/>,
  },
]);


function App() {
  return (
    <div className="App">
      {/* <Home>
      </Home> */}
      {/* <LoginPage/> */}
      {/* <SignUpPage/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
