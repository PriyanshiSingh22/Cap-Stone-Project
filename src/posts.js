import * as React from "react";
//import { useState } from "react";
import { List, BooleanField,Show, SimpleShowLayout, RichTextField, Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import IconEvent from '@material-ui/icons/Event';
// import "./css/docsearch.css";
// import "./css/materialize.min.css";
// import "./css/prism.css";
// import "./css/syntax.css";
// import "./css/tocbot.css";
import {Button, FilterButton } from 'react-admin';

//const[value,setValue]=useState();
export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
            <TextInput source="phone" />

        </SimpleForm>
    </Create>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <RichTextInput source="body" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    //     <SelectInput optionText="name" />
    // </ReferenceInput>,
];




export const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);

// const ListActions = (props) => (
//     <TopToolbar>
//         <FilterButton/>
//         <CreateButton/>
//         <ExportButton/>
//         {/* Add your custom actions */}
//         <Button
//             onClick={() => { alert('Your custom action'); }}
//             label="Show calendar"
//         >
//             <IconEvent/>
//         </Button>
//     </TopToolbar>
// );
export const PostList = (props) => (
    <List filters={postFilters }{...props}  >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="body" />
            {/* <TextField source="category" />
            <BooleanField source="commentable" /> */}
        </Datagrid>
    </List>
);

