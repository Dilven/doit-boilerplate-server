import Error from "next/error";
import React from "react";

export default function Custom404() {
  return (
    <div>
      <Error statusCode={404} />;
    </div>
  );
}
