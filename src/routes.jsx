import React from 'react'
import { BrowserRouter, Route, } from 'react-router-dom'

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}/>
                <Route path="/login" element={<Principal/>}/>
                <Route path="/cadastro" element={<Principal/>}/>
             
            </Routes>
        </BrowserRouter>
    )
}

export default routes