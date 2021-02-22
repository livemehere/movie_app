import React,{Component} from 'react';

class App extends Component {
 state={
   isLoding : true
 }

 componentDidMount(){
   setTimeout(()=>{
     this.setState({isLoding : false});
     console.log('didmount');
   },3000);
 }

  render (){
    const {isLoding} = this.state;
    return (
      <div>
        {isLoding ? 'Loading....' : 'We are ready'}
      </div>
    );
  }
}

export default App;
