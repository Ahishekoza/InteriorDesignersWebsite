/* eslint-disable react/prop-types */
// import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
import Header from "./components/Header";

const RemoteLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <Breadcrumb/> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default RemoteLayout;
