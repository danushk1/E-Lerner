import { useUser } from "@clerk/clerk-react"
import { Navigate } from "react-router";

const AccountPage = () => {

const {isLoaded,isSignedIn,user} = useUser();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />
  }
    return (
        <div>
            Account Page
<p>Username: {user?.fullName}</p>
        </div>
    )
}

export default AccountPage