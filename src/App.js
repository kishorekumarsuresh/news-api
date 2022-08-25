import React ,{useState} from 'react'
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import FullNews from './components/FullNews';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Date from './components/Date';

function App() {
  
  const [log,setLog] = useState(true)
  const [local,setLocal] = useState("")
  const [description,setDescription] = useState({description:''})
  return (
    <>
    <ErrorBoundary>
    <Header log={log} setLog={setLog} setLocal={setLocal} local={local}/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage log={log} setLog={setLog} setLocal={setLocal}/>}/>
      <Route path='/home' element={<HomePage local={local} setDescription={setDescription} setLog={setLog} description={description}/>}/>
      <Route path='/fullnews' element={<Date/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </>
      );
}

export default App;
