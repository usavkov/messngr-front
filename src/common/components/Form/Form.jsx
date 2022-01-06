import React from 'react';
import { useForm } from 'react-hook-form';

import { Box } from '@mui/material';

// TODO: handle child inputs in deep level
export function Form({
  children,
  defaultValues,
  onSubmit,
  ...props
}) {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      {React.Children.map(children, child => {
        console.log(children, child);
        return child.props.name
          ? React.createElement(child.type, {
            ...{
              ...child.props,
              key: child.props.name,
              register,
            },
          })
          : child;
      })}
    </Box>
  );
}
