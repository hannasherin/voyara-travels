import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDestinations } from '../../slice/destinationSlice'
import './DestinationCard.css'




const DestinationCard = ({limit}) => {


const {destinations,isloading,error}=useSelector((state)=>state.destinationInfo)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchDestinations())
},[])



  if (isloading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center">{error}</h2>;
  }

  return (
   
    <div className="destination-grid">
      {destinations?.slice(0, limit || destinations.length).map((destination) => (
    <div className="destination-card-wrapper" key={destination.id}>

      <div className="destination-card">

        <div className="destination-image">
          <img
            src={`/images/Destination/${destination.image}`}
            alt={destination.name}
          />
        </div>

        <div className="destination-content">

          <h4>{destination.name}</h4>

          <p className="destination-country">
            📍 {destination.country}
          </p>

          <p className="destination-description">
            {destination.description}
          </p>

          <button className="explore-btn">
            Explore Now →
          </button>

        </div>

      </div>

    </div>
  ))}
</div>
  )
}

export default DestinationCard
