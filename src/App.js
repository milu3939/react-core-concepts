import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['salman-sah', 'alomgir', 'bappaRaz']
  const follow = ['Milu','Aktara']
  const products =[
    {name: 'Photoshop', price : '$70'},
    {name: 'Illustrator', price: '$30'},
    {name: 'PDF Reader', price: '$10'}
  ] 
 
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
       <Person name={follow[0]} food="biriani"></Person>
       <Person name={follow[1]} food="vhat-mac"></Person>
       {
         products.map(product =><Product product={product}></Product>)
       }   
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () =>  setCount(count + 1);
  
    return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    backgroundColor: 'gray',
    margin: '2px',
    height: '200px', 
    width: '200px',
    float: 'left'
  }
  const {name,price}= props.product; 
 return(
   <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
   </div>
 )
}

function Person(props){
 
  const PersonStyle={
    border:'2px solid white',
    margin:'10px',
    padding:'5px'
  }
  return ( 
  <div style={PersonStyle}>
    <h1>Name: {props.name} </h1>
    <h3>favourite: {props.food}</h3>
  </div>
  ) 
}

export default App;
