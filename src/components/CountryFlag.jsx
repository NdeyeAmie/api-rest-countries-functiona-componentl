import React, { useEffect, useState } from 'react'
import useFetchCountries from './UseFetchCountries';
import { Link } from 'react-router-dom';

const CountryFlag = () => {
// const [ countries , setCountries ] = useState([]);
// const [ loading , setLoading ] = useState(true)


// useEffect(() => {
//     fetch("https://restcountries.com/v3.1/region/africa")
//       .then(response => response.json())
//       .then(data => {
//         setCountries( data)
//         setLoading(false)
//         console.log(data)
//      })
        
//         .catch(error => {
//              console.error("Erreur de chargement des pays :", error)
//              setLoading(false)
//             })
//       },[countries]);
      
const { countries, loading, error } = useFetchCountries();

if (loading) return <p>Chargement...</p>;
if (error) return <p>Erreur : {error}</p>;


return (
  <div className="container">
    <h1 className="text-center my-3">Liste des pays</h1>
    <div className="row">
      {countries.map((country) => (
        <div key={country.cca3} className="col-md-4">
          <div className="card mb-3">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="card-img-top"
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
              <p>Capitale : {country.capital ? country.capital[0] : "N/A"}</p>
              <Link to={`/country/${country.cca3}`} className="btn btn-info">
                Voir détails
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default CountryFlag