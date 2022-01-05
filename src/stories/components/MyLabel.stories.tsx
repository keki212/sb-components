import { MyLabel } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        fontColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic',
    size: 'normal',
    allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'All Caps',
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    size: 'normal',
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary',
}

export const customFontColor = Template.bind({});
customFontColor.args = {
    label: 'Custom Font Color',
    size: 'h1',
    fontColor: '#5517ac',
}