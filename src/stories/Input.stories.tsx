import { Story, Meta } from "@storybook/react";

import { Input, InputProps, PasswordInput } from "@components/input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: "Input",
  type: "text",
};

export const Number = Template.bind({});
Number.args = {
  label: "Input",
  type: "number",
};

const PasswordTmp: Story<any> = (args) => <PasswordInput {...args} />;

export const Password = PasswordTmp.bind({});
Password.args = {
  label: "Password",
};
