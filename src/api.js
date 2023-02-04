import axios from "axios";

const url = "https://api.unsplash.com/search/photos";
const accessKey = "AYsekaI4oeYFqQ_a46utU-O_Hb7V1M8sxAnGF6q_9ME"

const searchImages = async (term) =>{

    const response = await axios.get(url,{
        headers:{
            Authorization: `Client-ID ${accessKey}`
        },
        params:{
            query: term
        }
    })
    //console.log(response.data.results);
    return response.data.results;
}

export default searchImages;

