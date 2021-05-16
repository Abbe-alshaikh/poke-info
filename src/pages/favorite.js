import firebase from 'firebase';
import React, { useEffect, useState } from 'react'
//import {GetServerSideProps} from "next"


const favorite = ()=> {
    
    
    var [Pokemons]=[] ;
    let currentUser= firebase.auth().currentUser.uid;
    var starCountRef = firebase.database().ref(`pokemons/+${currentUser}`);
    starCountRef.on('value', (snapshot) => {
      var data = snapshot.val(); 
      
      Object.entries(data).forEach((entry) => {
        console.log('test1');
        const [key,value] = entry;
        console.log(`${key}`);
        const temp = value.selectedpokemon;
            console.log(temp);
           
               
            Pokemons= temp
            console.log(Pokemons)
           

        Object.entries(entry).forEach(() => {
            console.log('test2');
            const [key] = entry;
            
            
        });
        
      });
      
    });

    return (
        <div>
              <section className="pokedex">
                    <h2>You've catched</h2>

                    <div className="pokedex-list">
                        {[Pokemons].map(pokemon => (
                            <div className="pokemon" key={pokemon.id}>
                            <img src={pokemon.sprites.front_default} alt="" className="sprite" />

                            <h3 className="pokemon-name">{pokemon.name}</h3>
                            

                            
                            </div>
                        ))}
                    </div>
                </section>
        </div>

    );

}

export default favorite;