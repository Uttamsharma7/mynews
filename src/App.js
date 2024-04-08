import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useState } from "react";



function App() {
   var[language, setLanguage]=useState("hi");
   var[search, setSearch]=useState("");
     
   let changeLanguage=(data)=>
   {
    setLanguage(data)
   }

   let changeSearch=(data)=>
   {
    setSearch(data)
   }
   




  return (
    <>
    


    {/* <BrowserRouter>
    <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
    <Routes>
   <Route path="/" element={<Home  q="All" language={language} search={search}/>}/>
<Route path="/science" element={<Home q="Science" language={language} search={search}/>}/>
<Route path="/medical" element={<Home q="Medical" language={language} search={search}/>}/>
<Route path="/technology" element={<Home q="Technology" language={language} search={search}/>}/>
<Route path="/music" element={<Home q="Music" language={language} search={search}/>}/>
<Route path="/sports" element={<Home q="Sports" language={language} search={search}/>}/>
<Route path="/crime" element={<Home q="Crime"language={language} search={search}/>}/>
<Route path="/bollywood" element={<Home q="Bollywood"language={language} search={search}/>}/>
<Route path="/hollywood" element={<Home q="Hollywood"language={language} search={search}/>}/>
<Route path="/hollywood" element={<Home q="Hollywood"language={language} search={search}/>}/>
<Route path="/jokes" element={<Home q="Joke" language={language} search={search}/>}/>

    </Routes>
    <Footer />
    </BrowserRouter> */}
      <BrowserRouter>
<Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
<Routes>
<Route path="/" element={<Home  q="All" language={language} search={search} />}/>
<Route path="/science" element={<Home q="Science" language={language} search={search}/>}/>
<Route path="/medical" element={<Home q="Medical"language={language} search={search}/>}/>
<Route path="/technology" element={<Home q="Technology"language={language} search={search}/>}/>
<Route path="/music" element={<Home q="Music"language={language} search={search}/>}/>
<Route path="/sports" element={<Home q="Sports"language={language} search={search}/>}/>
<Route path="/crime" element={<Home q="Crime"language={language} search={search}/>}/>
<Route path="/bollywood" element={<Home q="Bollywood"language={language} search={search}/>}/>
<Route path="/hollywood" element={<Home q="Hollywood"language={language} search={search}/>}/>
<Route path="/jokes" element={<Home q="Jokes"language={language} search={search}/>}/>

</Routes>
<Footer/>

</BrowserRouter>



    </>
    
  );
}

export default App;
