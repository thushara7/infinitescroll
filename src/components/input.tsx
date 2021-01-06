import React from "react";
import { TextField } from "@material-ui/core";
interface TextProps {
  text: string;
  handleChange: (value: any) => void;
  name: string;
  label: string;
}
export const InputField = ({ text, handleChange, name, label }: TextProps) => {
  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        name={name}
        label={label}
        onChange={handleChange}
        fullWidth
        value={text}
      />
    </div>
  );
};
