import { FLIGHTS_DATA } from "./FlightsData"
import Flight from "./Flight"

export function Flights()
{
    const flightsItems = FLIGHTS_DATA.map(
        (flight) => <Flight
        key={flight.flight_num} flightData={flight}
        />)

    return (
        <>
            {flightsItems}
        </>
    )
}