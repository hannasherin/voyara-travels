
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPackages } from '../../slice/packageSlice'
import './packageCard.css'




const PackageCard = () => {


const {packages,isloading,error}=useSelector((state)=>state.packageInfo)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchPackages())
},[])



  if (isloading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center">{error}</h2>;
  }

  return (
   
    <div className="package-grid">
      {packages?.map((packages) => (
    <div className="package-card-wrapper" key={packages.id}>

      <div className="package-card">

        <div className="package-image">
          <img
            src={`/images/Package/${packages.image}`}
            alt={packages.title}
          />
        </div>

        <div className="package-content">

          <h4>{packages.title}</h4>

          <p className="package-country">
            📍 {packages.destination}
          </p>

          <p className="package-description">
            {packages.description}
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

export default PackageCard
