import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import NavbarContainer from '../containers/Navbar';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import NewPostPage from '../pages/NewPostPage';
import EditPostPage from '../pages/EditPostPage';

export default (props) => {
    return (
        <Router history={props.history}>
            <div>
                <NavbarContainer />
                <Switch>
                    <Route path="/" exact component={PostsPage}/>
                    <Route path="/new" exact component={NewPostPage}/>
                    <Route path="/:id" exact component={PostPage}/>
                    <Route path="/:id/edit" exact component={EditPostPage}/>
                </Switch>
            </div>
        </Router>
    );
}