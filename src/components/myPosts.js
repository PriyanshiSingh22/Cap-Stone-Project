import * as React from "react";
import { List, Datagrid, EditButton, DeleteButton, DateField, TextField} from "react-admin";

const MyPostList = (props) =>{
    return <List {...props}>
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="title"/>
                    <DateField source="publishedAt" />
                    <EditButton basePath="/posts"/>
                    <DeleteButton basePath="/posts"/>
                </Datagrid>
    </List>
}

export default MyPostList