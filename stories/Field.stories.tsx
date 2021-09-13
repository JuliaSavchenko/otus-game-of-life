import Field from '../components/Field';

import { ComponentStory } from '@storybook/react';

export default {
    title: 'Field',
    component: Field,
}

const Template: ComponentStory<typeof Field> = (args) => <Field {...args}/>

export const ResizableField = Template.bind({});
ResizableField.args = {
    width: 20,
    height: 20   
}