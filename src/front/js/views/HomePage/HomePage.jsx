import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext.js";

const HomePage = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCommunity();
  }, []);
  return (
    <div className="content">
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default HomePage;
