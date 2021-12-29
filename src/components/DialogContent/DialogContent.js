import { useParams } from 'react-router-dom';
import { VariableSizeList } from 'react-window';

import { List, Paper } from '@mui/material';

import { useAuth, useDialogMessages } from '../../common/hooks';
import { Message } from '../../common/components';

export const DialogContent = () => {
  const { user } = useAuth();
  const { dialogId } = useParams();
  const { messages, isLoading } = useDialogMessages(dialogId);

  if (isLoading) return 'Loading...';

  console.log(messages);

  return (
    <>
      <Paper>Title</Paper>
      <VariableSizeList
        height={500}
        width={700}
        itemCount={messages.length}
        itemSize={() => 60}
      >
        {({ index, style }) => (
          <Message
            key={messages[index]?.id}
            currentUserId={user?.userId}
            style={style}
            {...messages[index]}
          />
        )}
      </VariableSizeList>
    </>
  );
};
