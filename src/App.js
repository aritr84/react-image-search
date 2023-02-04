import React,{useState} from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList"

const App = () =>{

    const[images, setImages] = useState([])
    
    const handleSubmit = async (term)=>{
        //console.log('term is:',term);
        const imageList = await searchImages(term);
        setImages(imageList);
        //console.log(imageList);
    }

    return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>
    );
}

export default App;