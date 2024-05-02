import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Contato from "../pages/Contato";
import Inicial from "../pages/Inicial";
import Produtos from "../pages/Produtos";
import Body from "../layout/Body"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />}>
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/inicial" element={<Inicial />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}