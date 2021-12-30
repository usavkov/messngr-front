import { useForm } from 'react-hook-form';
import { HotKeys } from 'react-hotkeys';

import SendIcon from '@mui/icons-material/Send';
import { IconButton, Paper } from '@mui/material';

import { TextField } from '../TextField';
import { keyMap } from '../../../constants';

export const MessageBox = ({ onSubmit, sx, inputSx }) => {
  const { control, handleSubmit, reset } = useForm();

  const onSendMessage = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
    reset({
      content: '',
    });
  };

  const hotKeysHandlers = {
    sendMessage() {
      console.log('handled')
    }
  };

  return (
    <HotKeys keyMap={keyMap} handlers={hotKeysHandlers}>
      <Paper
        component='form'
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
          id='message-box'
          name='content'
          label='Message'
          multiline
          required
          sx={{
            margin: 2,
            flex: 'auto',
            bgcolor: 'white',
            ...inputSx,
          }}
        />
        <IconButton
          type='submit'
          color='primary'
          aria-label='send message'
          size='large'
          sx={{
            m: 'auto',
            mr: 2,
          }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </HotKeys>
  );
};
