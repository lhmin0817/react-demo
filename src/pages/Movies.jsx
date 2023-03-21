import { dummy } from './movieDummy'; 
import Movie from "../Componets/Movie";
import React from "react"; 


export default function Movies() {
  return (
    <div>
      <div className="app-container">
        
        {dummy.results.map((item) => {

          return (
            <Movie 
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average = {item.vote_average}
            
            /> 
          ); 

        })}
      
      </div>
    </div>
  );
}