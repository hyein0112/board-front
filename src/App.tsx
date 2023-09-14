import { Route, Routes } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/signin" element={<P.Signin />} />
    </Routes>
  );
}

export default App;
