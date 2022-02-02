import * as React from "react";
import {Show, SimpleShowLayout, TextInput, DateInput, SimpleForm, SimpleFormView } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PostShow = (props) => {
    return (
        <Show title='View Posts' {...props}>
        <SimpleShowLayout>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="publishedAt" defaultValue={new Date()} />
        </SimpleShowLayout>
    </Show>
    )
}
    

export default PostShow