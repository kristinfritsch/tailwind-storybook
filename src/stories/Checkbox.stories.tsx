import { Meta, Story } from "@storybook/react";
import { Checkbox } from "@components/checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<any> = (args) => <Checkbox {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: "test",
  name: "test",
};
