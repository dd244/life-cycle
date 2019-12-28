import React from 'react';
import './App.css';


class App extends React.Component {
  componentDidMount(){
      setTimeout(function(){ alert("Hello"); }, 2000);
 }

 componentWillMount(){
  alert("Goodbye")
}



 render (){
     return (
      <button onClick={this.props.onClick}>
      {this.props.children}
      </button>
     )
 }

}



export default App;
