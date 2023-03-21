import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componets/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MoviesDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/TV";

function App() {
  return (
    <div className="root-wrap">
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } /> 
            <Route path="/movies" element={ <Movies /> } />             
            <Route path="/tv" element={ <Tv /> } />             
            <Route path="/movie/:title" element={ <MovieDetail /> } />  
            <Route path="/*" element={ <NotFound />} />      
          </Routes>  
        </BrowserRouter>
    </div>
  );
}

export default App;
