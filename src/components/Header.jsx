const Header = ({ title = "No Text" }) => {
  return (
    <h1 className="text-light text-center navbar navbar-dark bg-dark p-3 mb-0 mh-vh-100">
      {title}
    </h1>
  );
};
export default Header;
