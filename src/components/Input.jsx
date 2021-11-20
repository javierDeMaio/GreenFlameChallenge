import ModalUp from './Modal';

function Input(props){
    const rates = props.rates
      const rateArray = [];
      for (const rate in rates) {
          if (rates.hasOwnProperty(rate)) {
             
             rateArray.push(<li className="list-group-item border-0"><input type="checkbox"/> {rate} - {rates[rate].RateData.name}        <ModalUp handleClose handleShow/>       {rates[rate].CurrencyCode}{rates[rate].RateTotalAmount.toFixed(2)}</li>)
                  
              
          }
      }

return(
 
    <ul>
       {rateArray}
     </ul>
   )
}
export default Input;