import { Meta, Story } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<any> = (args) => <Checkbox {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: <div>test</div>,
  name: "test",
};
