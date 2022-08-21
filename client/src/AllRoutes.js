import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Test from './Components/Test';
import Home from './Components/Home';

const AllRoutes = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default AllRoutes;