import { useForm } from 'react-hook-form';

import SendIcon from '@mui/icons-material/Send';
import { IconButton, Paper } from '@mui/material';

import { TextField } from '../TextField';

export function MessageBox({ onSubmit, sx, inputSx }) {
  const { control, handleSubmit, reset, setValue } = useForm();

  const onSendMessage = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
    reset({
      content: '',
    });
  };

  const handleKeyPress = (event) => {
    if (
      event.charCode === 13
        && !event.ctrlKey
        && !event.altKey
        && !event.shiftKey
    ) {
      event.preventDefault();

      onSendMessage(event);
    }

    if (event.charCode === 13 && event.ctrlKey) setValue('content', `${event.target.value}\n`);
  };

  return (
    <Paper
      component="form"
      onSubmit={onSendMessage}
      sx={{
        display: 'flex',
        mt: '1px',
        borderTop: '1px solid lightgray',
        height: 'fit-content',
        ...sx,
      }}
    >
      <TextField
        control={control}
        id="message-box"
        name="content"
        label="Message"
        multiline
        required
        onKeyPress={handleKeyPress}
        sx={{
          margin: 2,
          flex: 'auto',
          bgcolor: 'white',
          ...inputSx,
        }}
      />
      <IconButton
        type="submit"
        color="primary"
        aria-label="send message"
        size="large"
        sx={{
          m: 'auto',
          mr: 2,
        }}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
