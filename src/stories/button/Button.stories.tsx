import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  size: "medium",
};
