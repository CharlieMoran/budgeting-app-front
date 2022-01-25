import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import NewTrans from "./Pages/NewTrans";
import EditTrans from "./Pages/EditTrans";
import TransDetails from "./Pages/TransDetails";


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<NewTrans />} />
          <Route path="/transactions/:id" element={<TransDetails />} />
          <Route path="/transactions/:id/edit" element={<EditTrans />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
