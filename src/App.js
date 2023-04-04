import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './component/Header/Header';
import Home from './Pages/home/Home';
import MovieList from './component/movieList/movieList';
import Movie from './component/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/movie/:id"  element={<Movie/>}></Route>
          <Route path="/movies/:type"  element={<MovieList/>}></Route>
          <Route path="/*"  element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
