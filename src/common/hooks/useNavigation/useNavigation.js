import { useHistory } from 'react-router-dom';

export const useNavigation = () => {
  const history = useHistory();

  const goTo = () => history.push({

  });

  return {
    goTo,
  };
};
