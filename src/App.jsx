import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import  {Layout}  from "@/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
