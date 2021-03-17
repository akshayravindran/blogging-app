import React from 'react'
import './Main.css'
import Login from './../Login/Login';
import { Redirect, Route, Switch } from 'react-router';
import PageNotFound from './../PageNotFound/PageNotFound';
import { Posts } from '../Posts/Posts';

export default function Main() {
    return (
        <main className="mymain">
            <Switch>
                <Route exact path="/" render={() => (
                    JSON.parse(localStorage.getItem('blogAppToken') as string) !== null
                        ? <Redirect to="/posts" />
                        : <Login />
                )} />
                <Route exact path="/posts" render={() => (
                    JSON.parse(localStorage.getItem('blogAppToken') as string) === null
                        ? <Redirect to="/" />
                        : <Posts />
                )} />
                <Route component={PageNotFound} />
            </Switch>
        </main>
    )
}