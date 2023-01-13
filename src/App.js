import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
// import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop.jsx";
import Navigation from "./routes/navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
