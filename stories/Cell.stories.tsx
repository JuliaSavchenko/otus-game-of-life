import  Cell  from '../src/components/Cell';

import { ComponentStory } from '@storybook/react';
import { CellType } from '../src/components/Field';

export default {
    title: 'Cell',
    component: Cell,
}

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const DeadCell = Template.bind({});
DeadCell.args = {
    type : CellType.DEAD
}

export const AliveCell = Template.bind({});
AliveCell.args = {
    type : CellType.ALIVE
}

export const OldCell = Template.bind({});
OldCell.args = {
    type : CellType.OLD
}