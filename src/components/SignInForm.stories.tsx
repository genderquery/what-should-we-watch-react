import React from "react";
import { Story, Meta } from "@storybook/react";
import SignInForm, { Props } from "./SignInForm";

export default {
  title: "SignInForm",
  component: SignInForm,
} as Meta;

const Template: Story<Props> = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
