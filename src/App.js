import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';


function App() {
  let todos = [
  {  sno: 1,
    title: "Go to the market",
    desc: "You need to got to market to buy fruits"
  },
  {  sno: 2,
    title: "Go to the Gym",
    desc: "Hit the Gym today"
  },
  {  sno: 2,
    title: "Go to the movies",
    desc: "Watch spiderman"
  }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
