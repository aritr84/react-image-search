import React,{useState} from "react";

const SearchBar = ({onSubmit}) =>{
    const[term,setTerm] = useState(""); // step 1

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        //console.log(event)
        onSubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value) // step 3 and 4
        //console.log(event.target.value)
    } // step 2

    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
        
    </div>)

}

export default SearchBar;