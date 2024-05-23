import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBAr";
import Home from "./pages/home";
import Favorites from "./pages/favorties";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-l '>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/favorites'
            element={<Favorites />}
          />
          <Route
            path='/recipe-item/:id'
            element={<Details />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
