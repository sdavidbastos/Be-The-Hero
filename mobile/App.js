import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import React from "react";

import Routes from "./src/routes";
/* <View> = <div>, <header>, <section>... < */
/* <Text> = <h1>, <h2>, <p>*/
/* Os estilos obtemos a partir de um objeto */
/* Dentro do reactNative existe apenas display flex */
/* Não existe herança de estilos */
export default function App() {
  return <Routes />;
}
