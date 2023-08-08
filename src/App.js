import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar/NavBar.js"
import ItemListContainer from "./components/NavBar/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/NavBar/ItemDetailContainer/ItemDetailContainer.js";
import "./App.css";
import "bulma/css/bulma.css";

function App() {

    return (

      <div className="App">
           <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/category/:categoryId" element={<ItemListContainer />} />
                  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
            </BrowserRouter>
            <footer className="futer" >
                <p id="texto">Copyright Barsovia - 2023 . Todos los derechos reservados .</p>
            </footer>
      </div>
    );

}

export default App;