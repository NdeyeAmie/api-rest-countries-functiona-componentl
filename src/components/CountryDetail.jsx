import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        if (!response.ok) throw new Error("Pays introuvable");
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="container">
      <Link to="/" className="btn btn-secondary my-3">Retour</Link>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} style={{ width: "200px" }} />
      <p><strong>Capitale :</strong> {country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Région :</strong> {country.region}</p>
      <p><strong>Population :</strong> {country.population.toLocaleString()}</p>
      <p><strong>Langues :</strong> {Object.values(country.languages).join(", ")}</p>
    </div>
  );
};

export default CountryDetail;
