import { ReactNode } from "react";

const Test = () => {
  return <div>test page 입니다.</div>;
};

export default Test;

Test.noLayout = (page: ReactNode) => page;
