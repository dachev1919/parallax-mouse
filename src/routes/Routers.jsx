import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../modules/home/pages/Home";
import { ROUTES } from "../utils/constants";

const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to={ ROUTES.HOME } />} />
       <Route path='/*' element={<Navigate to={ ROUTES.HOME } />} />
       <Route path={ ROUTES.HOME } element={<Home />} />
    </Routes>
  )
}

export default Routers;