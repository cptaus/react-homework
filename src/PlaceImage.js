import './App.css';

export default function PlaceImage({origin})
{
    return(
        <>
        <img className='PlaceImage' src={origin.img_url} alt={origin.country + " " + origin.city}/>
        <h3> {origin.country + ", " + origin.city}</h3>
        </>
    );
}