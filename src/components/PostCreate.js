import * as React from "react";
import {Create, SimpleForm, TextInput, DateInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
const PostCreate = (props) => {
    return (
        <Create title='Create a Post' {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput multiline source="body" />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
            <TextInput source="phone" />

        </SimpleForm>
    </Create>
    )
}
    
export default PostCreate

