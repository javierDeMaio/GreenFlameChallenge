import seats from '../Assets/seats.svg';
import transmision from '../Assets/transmision.svg';
import air from '../Assets/air-conditioning.svg';
import luggage from '../Assets/luggage.svg';
import door from '../Assets/door.svg';
import bag from '../Assets/bag.svg';
import Input from './Input.jsx';


function Item(props){

return (
    <div key={props.company.id} className=' card container mt-3 shadow-lg p-3 mb-5 bg-white rounded border-0'>
      <div className="row">
         <div className="col">
           <img className='card-body' src={props.company.PictureURL} alt="Car" height='100%' width='100%'/>
          </div>
         <div className="col ">
           <ul className="list-group ml-3" >
             <li className="list-group-item border-0 " style={{color: '#FF0000'}}> { props.company.Features2.category}</li>
             <li className="list-group-item border-0">Group : {props.company.VehGroup} ( {props.company.Code} )</li>
             <li className="list-group-item border-0">{props.company.Name}</li>
           </ul>
         </div>
      <div className="col mt-5">     
         <center>
           <button type="button" className="btn btn-danger" >
              Book Now!
           </button>

         </center>
       
    </div>
  </div>
  <div className="row">
    <div className="col">
      <ul>
        <li className="list-group-item border-0"><img className="w-16" src={seats} alt="icon"/> {props.company.Features2.seats} Seats </li>
        <li className="list-group-item border-0"><img className="w-16" src={luggage} alt="icon"/> {props.company.Features2.largeSuitcase} Large Suitcase </li>
        <li className="list-group-item border-0"><img className="w-16" src={bag} alt="icon"/> {props.company.Features2.smallSuitcase} Small Suitcase </li>
        <li className="list-group-item border-0"><img className="w-16" src={door} alt="icon"/> {props.company.Features2.doors} Doors </li>
        <li className="list-group-item border-0"><img className="w-16" src={transmision} alt="icon"/> {props.company.Features2.transmition} transmission </li>
        <li className="list-group-item border-0"><img className="w-16" src={air} alt="icon"/> {props.company.Features2.air} </li>
      </ul>
    </div>
    <div className="col">
       <Input rates={props.company.Rates}/>
    </div>
  </div>   
    </div>
)
}
export default Item;