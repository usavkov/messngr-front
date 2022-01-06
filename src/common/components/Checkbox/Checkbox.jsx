import { Checkbox, FormControlLabel } from '@mui/material';
import { useController } from 'react-hook-form';

function CheckboxComponent({
  control,
  defaultValue = false,
  label = '',
  labelProps = {},
  name,
  rules,
  ...rest
}) {
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
      {...labelProps}
      control={(
        <Checkbox
          checked={value}
          {...field}
          {...rest}
        />
      )}
    />
  );
}

export default CheckboxComponent;
