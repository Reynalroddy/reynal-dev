import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// import Header from "./components/Header";
import Home from "./pages/Home";


import './index.css';
function App() {
  return (
    <BrowserRouter>
 <div className='w-screen h-auto flex  flex-col bg-mainColor text-txColor'>
   {/* <Header/> */}
   <main className='w-full px-4'>
      <Routes> 
        <Route path="/" element={<Home/>}/>
</Routes>
</main>
</div>
    </BrowserRouter>
    );
}

export default App;
   