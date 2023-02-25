import Place from "./Place";
import { FaPlane } from "react-icons/fa";
import { MdAirplaneTicket } from "react-icons/md";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

export default function Flight(props)
{
    return(
        <div className="Container">
            <div className="Flight">
        <h2><FaPlane/>Flight {props.flightData.flight_num}</h2>
        <h3><MdAirplaneTicket/>Cost per ticket: {Math.round(props.flightData.price_usd)}$</h3>
        <div className="ContainerFlight">
        <Place origin={props.flightData.origin}/>
        <Place origin={props.flightData.destination} arrivel={props.flightData.origin}/>
        </div>
        {props.flightData.seats_left > 50 ? 
        (<h3 style={{color: "green"}}>Seats left: {props.flightData.seats_left}</h3>)
        :
        props.flightData.seats_left > 15 && props.flightData.seats_left < 50 ? 
        (<h3 style={{color: "orange"}}>Seats left: {props.flightData.seats_left}</h3>)
        :
        (<h3 style={{color: "red"}}><HiChevronDoubleRight/>Seats left: {props.flightData.seats_left}<HiChevronDoubleLeft/> Harry up! almost gone!</h3>)
        }
        
            </div>
        </div>
    );
}