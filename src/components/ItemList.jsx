import Item from './Item';


function ItemList(props){
      const cars = props.cars
      const vehiclesArray = [];
      for (const car in cars) {
          if (cars.hasOwnProperty(car)) {
              for (const company in cars[car]) {
                  if (cars[car].hasOwnProperty(company)) {
                      vehiclesArray.push(<Item company={cars[car][company]}/>)
                  }
              }
          }
      }
     
return(
       <div>
       {cars? vehiclesArray : <h1 className='title'>LOADING VEHICLES. . . </h1>}
       </div>
      )
}
export default ItemList;