import './App.css';
import PlaceImage from './PlaceImage';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';

export default function Place({origin , arrivel=null})
{
    return(
        <>
        <div className="Contrainer">
        <PlaceImage origin={origin}/>
        { arrivel ? (
        
            <p><FaPlaneArrival/>Arrivel: {origin.time.toString()} +{Math.ceil((origin.time - arrivel.time) / (1000 * 3600 *24))}</p>
        )
        :
        (
            <p><FaPlaneDeparture/>Departure: {origin.time.toString()}</p>
        )}
        </div>
        </>
    );
}