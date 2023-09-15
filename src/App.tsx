import { Route, Routes } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/signin" element={<P.Signin />} />
      <Route path="/signup" element={<P.Signup />} />
    </Routes>
  );
}

export default App;
