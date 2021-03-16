import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
    },
    type: {
      type: "select",
      options: ["primary", "secondary"],
    },
    disabled: {
      type: "boolean",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "medium",
  label: "Secondary",
  type: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  size: "medium",
  disabled: true,
};
