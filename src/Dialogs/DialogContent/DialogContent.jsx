import { useParams, useLocation } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { useAuth, useDialogMessages, useSendMessage } from '../../common/hooks';
import { Message, MessageBox } from '../../common/components';
import { Content } from '../../components';
import { DialogsHeader } from '../DialogsHeader';

export function DialogContent() {
  const { user } = useAuth();
  const { dialogId } = useParams();
  const { state } = useLocation();
  const { messages, isLoading } = useDialogMessages(dialogId);
  const { sendMessage } = useSendMessage();

  if (isLoading) return 'Loading...';

  const handleSend = ({ content }) => {
    content
      && state?.interlocutorId
      && sendMessage({
        variables: {
          type: 'DIRECT',
          dialogId,
          content,
          to: state?.interlocutorId,
        },
      });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <DialogsHeader />

      <Content itemCount={messages.length}>
        {
          messages.length ? (
            messages.map((message) => (
              <Message
                key={message?.id}
                currentUserId={user?.userId}
                {...message}
              />
            ))
          )
            : (
              <Typography align="center" variant="overline">
                No messages yet
              </Typography>
            )
        }
      </Content>

      <MessageBox onSubmit={handleSend} />
    </Box>
  );
}
