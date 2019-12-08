import React, {useState} from 'react';

import { Login } from "../";
import { AdminHolderContainer } from "../../containers/";

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
          : <Login user="admin" password="12345" showAdmin={handleShowAdmin} />
      }
    </div>
  );
}