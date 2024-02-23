import { useState } from "react";
import { Layout } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Layout />
      <Toaster />
    </div>
  );
};

export default App;
