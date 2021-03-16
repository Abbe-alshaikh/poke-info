import { Alert } from 'react-bootstrap';
import React from 'react'
import auth from '../services/fireBase'
import { Spinner } from 'react-bootstrap';
import PokemonData from '../components/PokemonData';
import Search from '../components/Search';
import { fetchPokemon } from '../services/fetch';
import { useHistory, Redirect } from 'react-router-dom'; 
import Welcome from "../components/login/welcome";
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
                    <h1 class="logo"></h1>

                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="favorite">Favorite</a></li>
                            <li><a  onClick={() => logOutHandler()}>Sign out</a></li>
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
        </div>
    );
}
export default HomePage;