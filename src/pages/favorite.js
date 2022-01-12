import firebase from 'firebase';
import React, { useEffect, useState } from 'react'

//import {GetServerSideProps} from "next"

/* // js/dinnerModel.js
class DinnerModel{ ..// we add one method. addToMenu and removeFromMenu could be used, but this is shorter:
	setDishes(dishes){ this.dishes= [...dishes]; /* TODO notify observers!  ;}

    // js/firebaseModel.js
const REF= /* as before 
function persistModel(model){
	model.addObserver(//  leave the observer unchanged
       );

firebase.database().ref(REF).once("value", function(data){
	if(data.val()){
		model.setNumberOfGuests(data.val().guests);
		// TODO setDishes, setCurrentDish
	} 
});
}

*/


const favorite = ()=> {
    
    
    var [Pokemons]=[] ;
    let pokiCount =0;
    let currentUser= firebase.auth().currentUser.uid;
    var starCountRef = firebase.database().ref(`pokemons/+${currentUser}/`);
    starCountRef.on('value', (snapshot) => {
      var data = snapshot.val(); 
      Object.entries(data).forEach((pokiCount) => {pokiCount++})
      console.log(pokiCount)
      Object.entries(data).forEach((entry) => {
        console.log('begining');
        const [key,value] = entry;
        console.log(`${key}`);
        let temp = [];
        //temp=[...temp ,value];
            console.log(temp);
            //Pokemons.push(temp);
            //console.log(Pokemons)
           

        Object.entries(entry).forEach(() => {
            console.log('end');
            const [key] = entry;
            
            //   <div className="pokemon" key={pokemon.id}>
            //<img src={pokemon.sprites.front_default} alt="" className="sprite" />
            // <h3 className="pokemon-name">{entry}</h3>
        });
        
      });
      
    });

    return (
        <div>
              <section className="pokedex">
                    <h2>You've catched</h2>

                    <div >
                        <div>
                       
                        {//[temp].map(pokemon => ( 
                            
                            //))
                            }
                            </div>
                    </div>
                </section>
        </div>

    );

}

export default favorite;