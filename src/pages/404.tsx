import React, { ReactNode } from "react";

export default function NotFound() {
  return <div>Not Found Page</div>;
}

NotFound.noLayout = (page: ReactNode) => page;
