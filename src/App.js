import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
      <AddBook/>
      <SearchBook/>
      <DeleteBook/>
      <Viewall/>
    </div>
  );
}

export default App;
