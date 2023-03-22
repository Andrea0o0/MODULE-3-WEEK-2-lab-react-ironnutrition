import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import {foodwithId} from "./foods";
import React,{useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchInput from './components/SearchInput';

function App() {
  const [food,setFood] = useState([...foodwithId])
  const [searchFood,setSearch] = useState('')
  const [form,setForm] = useState(true)

  const handleDelete = (id) => {
    setFood(prev => [...prev].filter(elem => elem._id !== id)) 
  }
 
  const handleAddFood = (Food) => {
    let newfood = [...food]
    newfood.push(Food)
    console.log(Food,newfood)
    setFood(newfood)
  }

  const handleSearch = (value) => {
    setSearch(value);
  }

  const handleForm = () => {
    setForm(prev => prev===true ? false:true)
  }

  return (
    <div className="App">
    <h1>Food List</h1>
    <Button onClick={handleForm}>{form === true ? 'Hide Form':'Add New Food'}</Button>
    {form===true && <div>
      <AddFood handleAddFood={handleAddFood}/>
    </div>}
    <SearchInput handleSearchFood={handleSearch} />
    {food.length > 0 ? food.filter(elem => elem.name.toLowerCase().includes(searchFood.toLowerCase())).map(elem => {
      return (
        <FoodBox key={elem._id} name={elem.name} image={elem.image} calories={elem.calories} servings={elem.servings} handleDelete={handleDelete} id={elem._id}/>
      )
    }): <div><p>Oops! There is no more content to show.</p><img src={require('./assets/images/Oops.png')} alt='No more content' width='50%' /></div> }
    </div>
  );
}

export default App;
