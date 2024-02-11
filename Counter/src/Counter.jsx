import { Component } from 'react'

class Counter extends Component{
   constructor(props){
    super(props);
    this.initialValue = 0;
    this.state = {
      counterVal : this.initialValue,
      timeout: 1000
    }
   }
   Increment = () =>{
      this.setState({counterVal: this.state.counterVal + 1});
   }

   render(){
      return(
         <div>
            <h2>{this.state.counterVal}</h2>
            <button onClick={()=>{
               this.timerId = setInterval(this.Increment, this.state.timeout);
            }}>Start</button>
            <button onClick={()=>{
               clearInterval(this.timerId);
            }}>Stop</button>
            <button onClick={()=>{
               this.setState({counterVal : this.initialValue});
            }}>
               Reset
            </button>
         </div>
      );
   }
}
export default Counter