import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admin" 
          element={
            <AuthRoute>
              <AdminPage/>
            </AuthRoute>
          }
        />
        {/* 404 not found */}
        <Route 
          path="*" element={<h1>Not found route</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
