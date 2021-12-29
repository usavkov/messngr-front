import { useContext } from "react";

import { AuthContext } from '../../utils/auth'

export const useAuth = () => useContext(AuthContext);
