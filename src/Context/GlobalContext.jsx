import React, { createContext, useEffect, useState, useContext } from "react";

import Data from "../data/Data.json";

export const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [home, setHome] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [socialMedia, setSocialMedia] = useState({});

  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const [whatsapp, setWhatsapp] = useState({});
  const [messenger, setMessenger] = useState({});

  function getData() {
    setUser(Data[0]);
    setHome(Data[0].home);
    setAbout(Data[0].about);
    setSkills(Data[0].skills);
    setExperience(Data[0].experience);
    setCategories(Data[0].portfolio[0]);
    setItems(Data[0].portfolio[1]);
    setSocialMedia(Data[0].socialmedia);
    setWhatsapp(Data[0].contact[0]);
    setMessenger(Data[0].contact[1]);
  }

  useEffect(() => {
    getData();
  });

  return (
    <GlobalContext.Provider
      value={{
        user,
        home,
        about,
        skills,
        experience,
        categories,
        items,
        whatsapp,
        messenger,
        socialMedia,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
