import React from "react";
import useThemeStore from "../stores/use-theme";

const ContactUs = () => {
  const themeStore = useThemeStore();

  console.log(themeStore.theme);
  return <div>This is the Contact Us Page</div>;
};

export default ContactUs;
