import ItemList from '../ItemList';
import cars from '../../data/CarsJson.json';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'





function ItemListContainer(props){
  const [carsJson,setCarsJson] = useState()
  const {idGroup} = useParams()
  const busqueda = new Promise((res)=>{
      
   setTimeout(()=>{
              res(cars)}
              ,2000); 
    })
    useEffect(() =>{
      if(idGroup){
        busqueda.then(respuesta =>{
          setCarsJson(respuesta.filter( res=> res.cars[idGroup] === idGroup))})
    
        .catch(error => console.log(error))
      }
      else
      {
        busqueda.then(respuesta =>{
          setCarsJson(respuesta)})
    
        .catch(error => console.log(error))
      }
     
    },[idGroup]);

  
    return( carsJson ?
        <div>
           <ItemList cars={carsJson.cars}/>
        </div> : <div>PLEASE WAIT WHILE LOADING...</div>


    )
}
export default ItemListContainer;