import React from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom';

import Quiz from './components/quiz/index'
import Patient from './components/User/register/register';

import MainLayout from './hoc/mainLayout'


import Home from './components/User/IntroPage'


const Routes = () => (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route path='/quiz' component={Quiz}/>
                <Route path='/form' component={Patient}/>
                <Route path='/' component={Home}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
)


export default Routes;