// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading Details...</div>
    );
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.nickname}</p>
      <p>{user.updated_at}</p>

      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;