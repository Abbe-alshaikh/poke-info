import { Alert } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import auth from '../services/fireBase'
import db from '../services/fireBase'
import { Spinner } from 'react-bootstrap';
import PokemonData from '../components/PokemonData';
import Search from '../components/Search';
import { fetchPokemon} from '../services/fetch';
import { useHistory, Redirect } from 'react-router-dom'; 
import Welcome from "../components/login/welcome";
import firebase from 'firebase';
import "./homeStyle.css";



const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    borderWidth: '1rem',
    color: 'blue',
}

const spinnerWarapperStyle= {
    textAlign:'center',
    marginTop: '60px',
}

const HomePage = ()=>{
    
    const history = useHistory();
    const [pokemon, setPokemon]= React.useState();
    const [loading, setLoading]= React.useState(false);
    const [error, setError]= React.useState(false);
    const [errorMsg, setErrorMsg]= React.useState('');
    const [, setIsLoggedIn]= React.useState(true);
    const [pokeDex, setPokeDex] = useState([]);
    
   
    
    function onCatching (pokemon) {
       
        try {
            
            //console.log(pokemon);
            let currentUser= firebase.auth().currentUser.uid;
            console.log(currentUser)
           firebase.database().ref(`pokemons/+${currentUser}/`).child.set({
                selectedpokemon: pokemon.name
               // pokedex: pokeDex
                //presistance. Gör en modell där man kan spara datan i firebase
                 })}catch (error) { alert(error);}
            //++unikt global id för användaren 
            
            
    }
   
    const catchPokemon = (pokemon) => {
        const pokemonExists = 
          pokeDex.find(p => pokemon.id === p.id); // To do:Array.prototype.find() -- done
          if (!pokemonExists) {
            let newState = [...pokeDex, pokemon]
          
            newState.sort(function (a, b) {
              return a.id - b.id
            })
            
            setPokeDex(newState)

            onCatching(pokemon)
          }
        
        
      }
    
      const releasePokemon = id => {
        setPokeDex(state => state.filter(p => p.id !== id))
      }
    
    const logOutHandler =()=>{
            setIsLoggedIn(false)
            auth().signOut();
            history.push("/");
            return <Redirect to="/" component ={Welcome}/>;
    }

    const getPokemon = async (name)=> {
        if (!name) {
            setErrorMsg(' You must enter a pokemon name to search for.');
             setError(true);
             return;
        }
        else setError(false);

        setLoading(true);
        setTimeout( async () => {
            try {
            const response = await fetchPokemon(name);
            const results= await response.json();
            setPokemon(results);
            setLoading(false);
        } catch (err){
            setLoading(false);
            setError(true);
            setErrorMsg('Pokemon is not found.')
            }
        }, 1500);
    }

    return (
        
        <div> 
            <header>
                <div class="container">
                    <h1 class="logo">Pokemon Catcher</h1>

                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            
                            <li><a onClick={() => logOutHandler()}>Sign out</a></li>
                        </ul>
                    </nav>
        </div>
            </header>

                <div>
                {error ? (
                <Alert variant ='danger'> {errorMsg} </Alert>
                ): null}

                <Search getPokemon = {getPokemon}/>
                {loading ? (
                    <div style={spinnerWarapperStyle}>
                        <Spinner animation = "border" style= {spinnerStyle}/>
                    </div>
                ):null}
                {!loading && pokemon ? (
                    
                    <PokemonData 
                
                    name={pokemon.name} 
                    sprite ={pokemon.sprites.front_default}
                    abilities = {pokemon.abilities}
                    stats = {pokemon.stats}
                    types = {pokemon.types}
                    footPrints={pokemon.footPrints}/>
                    
                ): null}
                

                </div>
                <div><button className="catch-btn" 
                onClick={() => catchPokemon(pokemon)}>CATCH</button></div>
                <section className="pokedex">
                    <h2>You've catched</h2>

                    <div className="pokedex-list">
                        {pokeDex.map(pokemon => (
                            <div className="pokemon" key={pokemon.id}>
                            <img src={pokemon.sprites.front_default} alt="" className="sprite" />

                            <h3 className="pokemon-name">{pokemon.name}</h3>

                            <button className="remove" onClick={() => releasePokemon(pokemon.id)}>X</button>
                            </div>
                        ))}
                    </div>
                </section>
        </div>
    );
}
export default HomePage;