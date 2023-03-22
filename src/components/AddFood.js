import { Divider, Input, Button } from "antd";
import React,{useState} from "react";

export default function AddFood({handleAddFood}) {

    const initialState = {
        "name": '',
        "calories": '',
        "image": '',
        "servings": ''
      }

    const [newfood,setNewFood] = useState(initialState)

    const handleChange = (e) => {
        setNewFood(prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      }

      const handleSubmit = (e) => {
        console.log(newfood,handleAddFood)
        e.preventDefault();
        handleAddFood(newfood);
        setNewFood(initialState);
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Divider>Add Food Entry</Divider>
                <label>Name</label>
                <Input type="text" name="name" value={newfood.name} onChange={handleChange} required />
                <label>Image</label>
                <Input type="text" name="image" value={newfood.image} onChange={handleChange} required />
                <label>Calories</label>
                <Input type="number" name="calories" value={newfood.calories} onChange={handleChange} required />
                <label>Servings</label>
                <Input type="number" name="servings" value={newfood.servings} onChange={handleChange} required />
                <Button onClick={handleSubmit} type="submit">Create</Button>
            </form>
        </div>
        
    )
}