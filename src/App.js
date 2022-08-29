import React ,{useState} from 'react'
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import FullNews from './components/FullNews';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import Date from './components/Date';
import Breakpoints from './components/Breakpoints';

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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage log={log} setLog={setLog} setLocal={setLocal}/>}/>
      <Route path='/home' element={<HomePage local={local}  setLog={setLog}
      setTitle={setTitle} setDescription={setDescription} 
      setContent={setContent} setImageUrl={setPublished} setUrl={setUrl} setPublished={setPublished}
      />}/>
      <Route path='/fullnews' element={<Date title={title} description={description}
      imageUrl={imageUrl} url={url} published={published} content={content}
      />}/>
      <Route path='/test' element={<Breakpoints/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </>
      );
}

export default App;
