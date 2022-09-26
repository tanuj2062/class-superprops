import React, { Component } from 'react';  
import './App.css';

// class App extends Component {  
//   constructor(props){  
//     super(props);  
//     this.state = {  
//          data: 'www.google.com'  
//       }  
//     this.handleEvent = this.handleEvent.bind(this);  
//   }  
//   handleEvent(){  
//     console.log(this.props);  
//   }  
//   render() {  
//     return (  
//       <div className="App">  
//     <h2>React Constructor Example</h2>  
//     <input type ="text" value={this.state.data} />  
//         <button onClick={this.handleEvent}>Please Click</button>  
//       </div>  
//     );  
//   }  
// }
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 25
        };
    }

    render() {
        return (
            <div className='App'>
                <h1>You clicked {this.state.count} times</h1>
                <button className='button' onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

export default App;