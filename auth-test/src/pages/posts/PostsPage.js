import React from 'react'
import PostListComponent from './PostListComponent'
import { Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from '../../components/PrivateRoute';
import PostDetailComponent from './PostDetailComponent';

function PostsPage() {
    let { path } = useRouteMatch();
    return (
        <div>
            <h1>Posts</h1>
            <Switch>
                <PrivateRoute exact path={path}>
                    <PostListComponent />
                </PrivateRoute>
                <PrivateRoute path={`${path}/:id`}>
                    <PostDetailComponent />
                </PrivateRoute>
            </Switch>
        </div>
    )
}

export default PostsPage
