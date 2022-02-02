import * as React from "react";
import { List, Datagrid, EditButton, DeleteButton, DateField, TextField, ShowButton} from "react-admin";

const PostList = (props) =>{
    return <List {...props} bulkActionButtons={false}>
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="title"/>
                    <DateField source="publishedAt" />
                    {/* <EditButton basePath="/posts"/>
                    <DeleteButton basePath="/posts"/> */}
                    <ShowButton basePath="/posts"/>
                </Datagrid>
    </List>
}

export default PostList