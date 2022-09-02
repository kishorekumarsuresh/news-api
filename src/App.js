import React ,{useState} from 'react'
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import FullNews from './components/FullNews';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Fullnews from './components/Fullnews';
import Breakpoints from './components/Breakpoints';
import { ValueContext } from './components/ValueContext';
import FiltComp from './components/FiltComp';

function App() {
  
  const [log,setLog] = useState(true)
  const [local,setLocal] = useState("")
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [imageUrl,setImageUrl] = useState("")
  const [url,setUrl] = useState("")
  const [published,setPublished] = useState("")
  const [content,setContent] = useState("")
  //const [description,setDescription] = useState({description:''})
  return (
    <>
    <ErrorBoundary>
    <Header log={log} setLog={setLog} setLocal={setLocal} local={local}/>
    <ValueContext.Provider value={{setTitle,setLog,setDescription,setContent,setImageUrl,setUrl,setPublished,
    title,description,imageUrl,url,published,content}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage log={log} setLog={setLog}/>}/>
      
      <Route path='/home' element={<HomePage />}/>
      
      <Route path='/fullnews' element={<Fullnews  />}/>

      <Route path='/test' element={<Breakpoints/>}/>
      <Route path='/filter' element={<FiltComp/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </ValueContext.Provider>
    </ErrorBoundary>
    </>
      );
}

export default App;
