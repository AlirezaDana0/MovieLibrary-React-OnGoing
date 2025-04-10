import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'


function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
            </Route>

        </Routes>

    )
}

export default Router