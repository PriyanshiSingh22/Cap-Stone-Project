import React from 'react';
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import PostShow from './components/Show';
//import MyPostList from './components/myPosts';
import SearchPost from './components/search';

function App() {
    return <Admin dataProvider={fakeDataProvider({
        "posts":[
            {
                "id":"1",
                "title":"Post1",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            },
            {
                "id":"2",
                "title":"Post2",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            },
            {
                "id":"3",
                "title":"Post3",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            },
            {
                "id":"4",
                "title":"Post4",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            }
        ]
    })}>
    <Resource name="posts" list={PostList} create={PostCreate} show={PostShow} edit={PostEdit} />
</Admin>
}

export default App; 