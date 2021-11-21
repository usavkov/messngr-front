import { Navigation } from "../../components"
import { ACTION_LOGOUT } from "../../constants";
import { useAuth } from "../../utils";
import { GuestPage } from "../GuestPage";

export const HomePage = () => {
  const [{ user }, authDispatch] = useAuth();

  const links = [
    { to: 'home', label: 'Home' },
    { to: 'settings', label: 'Settings' },
    { label: 'Logout', onClick: () => authDispatch({ type: ACTION_LOGOUT }) },
  ];

  if (!user) return <GuestPage />

  return (
    <Navigation links={links} />
  )
}
