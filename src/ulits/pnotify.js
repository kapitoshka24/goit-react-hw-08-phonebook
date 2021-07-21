import { error, info, success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const settings = {
  title: false,
  sticker: false,
  maxTextHeight: null,
  mouseReset: false,
  delay: 2000,
  width: "250px",
};

export const mySuccess = ({ name, number }) =>
  success({
    text: `You successfully added ${name}/${number} to your phonebook.`,
    ...settings,
  });
