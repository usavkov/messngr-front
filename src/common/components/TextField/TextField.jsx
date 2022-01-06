import React from 'react';
import { useController } from 'react-hook-form';

import { TextField } from '@mui/material';

const TextFieldComponent = React.forwardRef(({
  control,
  defaultValue = '',
  name,
  rules,
  ...rest
}, ref) => {
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
      ref={ref}
      {...field}
      {...rest}
    />
  );
});

export default TextFieldComponent;
