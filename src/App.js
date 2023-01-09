import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
// import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";

const Shop = () => {
  return <h1>fhgjhjgfkgfdlkngjsdfnikgnfdgnb</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
