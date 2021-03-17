import { Meta, Story } from "@storybook/react";

export default {
  title: "Playground",
} as Meta;

const Template: Story<any> = (args) => (
  <div className="bg-gradient-to-l from-jelly-25 to-jelly-400">Hello World</div>
);

export const Base = Template.bind({});
