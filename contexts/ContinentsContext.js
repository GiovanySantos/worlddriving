import React, { createContext, useEffect, useState } from "react";

export const ContinentsContext = createContext([]);

export const ContinentsProvider = (props) => {
  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [streets, setStreets] = useState([]);

  const [continentName, setContinentName] = useState("");
  const [continentBG, setContinentBG] = useState("");

  return (
    <ContinentsContext.Provider
      value={{
        continents,
        setContinents,
        countries,
        setCountries,
        continentName,
        setContinentName,
        streets,
        setStreets,
        continentBG,
        setContinentBG,
      }}
    >
      {props.children}
    </ContinentsContext.Provider>
  );
};
