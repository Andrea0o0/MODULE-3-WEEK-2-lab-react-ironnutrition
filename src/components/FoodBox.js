import React from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function FoodBox({name,image,calories,servings,handleDelete,id}){

    const handleDelete_Food = () => {
        handleDelete(id)
    }

    return (
        <Card className="Food_container">
            <Divider>{name}</Divider>
            <img src={image} alt={name} width={'20%'}/>
            <p>Calories: {calories}</p>
            <p>Calories: {servings}</p>
            <p><b>Total Calories: {calories}</b> kcal</p>
            <Button className="delete_btn" onClick={handleDelete_Food}>Delete</Button>
        </Card>
    )
}