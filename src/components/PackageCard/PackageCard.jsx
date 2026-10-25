
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPackages } from '../../slice/packageSlice'
import './packageCard.css'
import { useNavigate, useParams } from 'react-router-dom'




const PackageCard = () => {


const {packages,isloading,error}=useSelector((state)=>state.packageInfo)

const dispatch=useDispatch()
const navigate=useNavigate()
const {destinationName}=useParams()

useEffect(()=>{
    dispatch(fetchPackages())
},[])



const filteredPackages = destinationName
  ? packages?.filter(
      (item) =>
        item.destination?.trim().toLowerCase() ===
        decodeURIComponent(destinationName).trim().toLowerCase()
    )
  : packages

  if (isloading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center">{error}</h2>;
  }

  return (
   
    <div className="package-grid">
      {filteredPackages?.length > 0 ? (
        filteredPackages.map((item) => (
          <div className="package-card-wrapper" key={item.id}>
            <div className="package-card">
              <div className="package-image">
                <img
                  src={`/images/Package/${item.image}`}
                  alt={item.title}
                />
              </div>

              <div className="package-content">
                <h4>{item.title}</h4>

                <p className="package-country">
                  📍 {item.destination}
                </p>

                <p className="package-description">
                  {item.description}
                </p>

                <button
                  className="explore-btn"
                  onClick={() => navigate(`/package/${item.id}`)}
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">
          No packages available for {destinationName}.
        </p>
      )}
</div>
  )
}

export default PackageCard
