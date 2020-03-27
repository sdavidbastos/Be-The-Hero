import React from "react";

import "./global.css";

import Routes from "./routes";
/* 
  *Imutabilidade*
Nunca podemos alterar o valor do estado de uma forma direta, mas sim sobrepor a variável do estado. Por motivos de performance */
function App() {
  return <Routes />;
}

export default App;
