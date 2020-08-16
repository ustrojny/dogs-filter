import React from 'react';
import './DogsList.css';


const DogsList = ({dogs}) => {
    if(dogs.length > 0){
        return (
            <ul>
                {dogs.map(dog => <li key={dog}>{dog}</li>)}
            </ul>
        );
    } 
    return (
        <p>Brak wyników!</p>
    );
   
};

export default DogsList;