import React, {useState} from 'react';

import { Login } from "../";
import { AdminHolderContainer } from "../../containers/";
import { USER, USER_PASSWORD } from "../../constants";

export const AdminPage = (props) => {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleShowAdmin = () => {
    setShowAdmin(true);
  }

  return (
    <div className="admin-page-holder">
      {
        showAdmin 
          ? <AdminHolderContainer />
          : <Login user={USER} password={USER_PASSWORD} showAdmin={handleShowAdmin} />
      }
    </div>
  );
}