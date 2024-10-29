import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
import Editcategorie from "./components/categories/Editcategorie";
import Insertcategorie from "./components/categories/Insertcategorie";
import Listcategories from "./components/categories/Listcategories";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Listscategories from "./components/scategories/Listscategories";
import Viewarticle from "./components/articles/Viewarticle";
import Viewcategorie from "./components/categories/Viewcategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
function App() {
  return(
<>
  <Router>
  <Menu/>
    <Routes>
     
      <Route path="/articles" element={<Listarticles/>}/>
      <Route path="/categories" element={<Listcategorie/>}/>
      <Route path="/scategories" element={<Listscategorie/>}/>
    </Routes>
  </Router>
  
    </>
  )
}

export default App
