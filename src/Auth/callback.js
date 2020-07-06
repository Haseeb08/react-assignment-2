import React, { useEffect, useContext } from "react";
import Loading from "../_components/atoms/_loading/_loading";
import { AuthContext } from "../AuthContext";

function Callback() {
  const value = useContext(AuthContext);
  console.log("inside callback");
  useEffect(() => {
    value.handleAuthentication();
  });

  return (
    <div
      style={{
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  );
}
export default Callback;
