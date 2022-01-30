import { Link as RouterLink, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const Link = ({ children, to, ...props }: LinkProps) =>{
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <RouterLink
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </RouterLink>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default Link
