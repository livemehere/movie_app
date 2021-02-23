import React,{Component} from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends Component {
 state={
   isLoding : true,
   movies:[]
 }

 getMovies = async ()=>{
  const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
  this.setState({movies, isLoding:false});
 }

 componentDidMount(){
  this.getMovies();
 }

  render (){
    const {isLoding,movies} = this.state;
    return (
      <section className='container'>
        {isLoding ? (
          <div className='loader'>
            <div className='loader_text'>Loading....</div>
          </div>) : (
          <div className='movies'>
            {movies.map(movie =>{return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} medium_cover_image={movie.medium_cover_image} genres={movie.genres}/>})}
          </div>)}
      </section>
    );
  }
}

export default App;



