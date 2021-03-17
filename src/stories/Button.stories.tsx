import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Button, ButtonProps } from "@components/button";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withDesign],
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

Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/pF7hISRjsflkD11znEy9PO/Components?node-id=8%3A33",
  },
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   size: "medium",
//   label: "Secondary",
//   variant: "secondary",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: "Disabled",
//   size: "medium",
//   disabled: true,
// };
