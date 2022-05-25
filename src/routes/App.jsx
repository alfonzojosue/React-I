import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import CreateNewPassword from '../pages/CreateNewPassword';
import RecoveryPassword from '../pages/RecoveryPassword';
import '../styles/global.css';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../containers/Login';

const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/create-a-new-password" element={<CreateNewPassword />} />
                    <Route path="/recovery-password" element={<RecoveryPassword />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/login' element={<Login/>} />
            </Routes>
            </Layout>
    </BrowserRouter>
    );
};

export default App;