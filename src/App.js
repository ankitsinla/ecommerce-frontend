import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import routes from "./pages/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  console.log('routs',routes)
  routes.map((route, key) => console.log(route.element))
  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-center"/>
      <Routes>
        {routes.map((route, key) => 
          (<Route element={route.element} path={route.path} key={key}/>)
       )}
      </Routes>
    </div>
  );
}

export default App;
