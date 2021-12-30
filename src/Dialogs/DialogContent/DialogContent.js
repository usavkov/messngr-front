import { useParams, useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import { useAuth, useDialogMessages, useSendMessage } from '../../common/hooks';
import { Message, MessageBox } from '../../common/components';
import { Content } from '../../components';
import { DialogsHeader } from '../DialogsHeader';

export const DialogContent = () => {
  const { user } = useAuth();
  const { dialogId } = useParams();
  const { state } = useLocation();
  const { messages, isLoading } = useDialogMessages(dialogId);
  const { sendMessage } = useSendMessage();

  if (isLoading) return 'Loading...';

  const handleSend = ({ content }) => {
    (content && state?.interlocutorId) 
    && sendMessage({
      variables: {
        type: 'DIRECT',
        content,
        to: state?.interlocutorId,
      }
    })
  }

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <DialogsHeader />

      <Content itemCount={messages.length}>
        {({ key, index, style }) => (
          <Message
            key={key}
            currentUserId={user?.userId}
            style={style}
            {...messages[index]}
          />
        )}
      </Content>

      <MessageBox onSubmit={handleSend} />
    </Box>
  );
};
