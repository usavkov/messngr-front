import { useLocation, useHistory } from "react-router-dom";

export const useNavigation = () => {
  const history = useHistory();
  const location = useLocation();

  const goTo = () => history.push({
    
  })

  return {
    
  }
};
