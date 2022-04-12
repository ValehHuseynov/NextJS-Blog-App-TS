import { FC, Fragment } from "react";
import MainNavigation from "./main-navigation";

type Props = {
  children?: JSX.Element;
};

const Layout: FC<Props> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
