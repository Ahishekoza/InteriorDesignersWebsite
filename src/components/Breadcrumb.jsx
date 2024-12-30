import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return "";
  }

  const pathnameSegments = location.pathname
    .split("/")
    .filter((segments) => segments);

  return (
    <div className="px-4 md:px-6 lg:px-8  my-3">
      <ul className="flex space-x-2">
        <li>
          {pathnameSegments[0] === undefined ? (
            ""
          ) : (
            <Link to={"/"}>Home</Link>
          )}
        </li>

        {pathnameSegments.map((segment, index) => {
          const href = `/${pathnameSegments.slice(0, index + 1).join("/")}`;
          console.log(href);
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);
          const isLast = index === pathnameSegments.length - 1;

          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-500">{label}</span>
              ) : (
                <Link to={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
