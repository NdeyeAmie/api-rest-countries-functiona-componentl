import { useState, useEffect } from "react";

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchCountries = async () => {
    //   try {
    //     const response = await fetch("https://restcountries.com/v3.1/all");
    //     if (!response.ok) throw new Error("Erreur lors du chargement des pays");
    //     const data = await response.json();
    //     setCountries(data);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
   const fetchCountries = async () => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then(response => response.json())
      .then(data => {
        setCountries( data)
        setLoading(false)
        console.log(data)
     })
        
        .catch(error => {
             console.error("Erreur de chargement des pays :", error)
             setLoading(false)
            })
   }
    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useFetchCountries;
