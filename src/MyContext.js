// MyContext.js
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [age, setAge] = useState(30);


  const value = {
    user,
    age,
    setUser,
    setAge,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
