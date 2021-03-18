import React from 'react'
import './Main.css'
import Login from './../Login/Login';
import { Redirect, Route, Switch } from 'react-router';
import PageNotFound from './../PageNotFound/PageNotFound';
import { Posts } from '../Posts/Posts';
import Comments from '../Posts/Comments/Comments';
import Albums from '../Albums/Albums';
import Photos from '../Albums/Photos/Photos';

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
                <Route exact path="/posts/comments" render={() => (
                    JSON.parse(localStorage.getItem('blogAppPostId') as string) === null
                        ? <Redirect to="/posts/nocomments" />
                        : <Comments />
                )} />
                <Route exact path="/albums" render={() => (
                    JSON.parse(localStorage.getItem('blogAppToken') as string) === null
                        ? <Redirect to="/" />
                        : <Albums />
                )} />
                <Route exact path="/albums/photos" render={() => (
                    JSON.parse(localStorage.getItem('blogAppAlbumId') as string) === null
                        ? <Redirect to="/albums/nophotos" />
                        : <Photos />
                )} />
                <Route component={PageNotFound} />
            </Switch>
        </main>
    )
}