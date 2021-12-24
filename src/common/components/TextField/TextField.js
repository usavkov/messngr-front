import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const TextFieldComponent = ({
  control,
  defaultValue = '',
  name,
  rules,
  ...rest
}) => {
  const {
    field,
    // fieldState,
    // formState,
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <TextField
      {...field}
      {...rest}
    />
  )
};

export default TextFieldComponent;
