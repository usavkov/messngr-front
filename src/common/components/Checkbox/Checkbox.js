import { Checkbox, FormControlLabel } from "@mui/material";
import { useController } from "react-hook-form";

const CheckboxComponent = ({
  control,
  defaultValue = false,
  label = '',
  name,
  rules,
  ...rest
}) => {
  const {
    field: { value, ...field },
    // fieldState,
    // formState,
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={value}
          {...field}
          {...rest}
        />
      }
    />
  )
};

export default CheckboxComponent;
