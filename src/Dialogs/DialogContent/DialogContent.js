import { useParams } from 'react-router-dom';

import { useAuth, useDialogMessages } from '../../common/hooks';
import { Message } from '../../common/components';
import { Content } from '../../components'

export const DialogContent = () => {
  const { user } = useAuth();
  const { dialogId } = useParams();
  const { messages, isLoading } = useDialogMessages(dialogId);

  if (isLoading) return 'Loading...';

  return (
      <Content
        itemCount={messages.length}
      >
        {({ index, style }) => (
          <Message
            key={messages[index]?.id}
            currentUserId={user?.userId}
            style={style}
            {...messages[index]}
          />
        )}
      </Content>
  );
};
