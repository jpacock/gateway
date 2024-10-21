import useAuth from '../hooks/useAuth';

interface NavbarProps {
  isLoggedIn: boolean;
  userInitials: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  // const redirect_uri = encodeURI('https://jpacock.com');
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="navbar bg-base-100 p-4">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">jpacock</a>
      </div>
      {/* <div className="flex-none">
        {isAuthenticated ? (
          <div className="avatar">
            <div className="rounded-full w-10 h-10 bg-primary text-white flex items-center justify-center">
              JA
            </div>
          </div>
        ) : (
          <a href={`https://jpacock.com/auth/realms/jpacock/protocol/openid-connect/auth?client_id=sprinkler&redirect_uri=${redirect_uri}&response_type=code&scope=openid`} className="btn btn-primary btn-outline">Login</a>
        )}
      </div> */}
      <div className="flex-none">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                <span>JA</span>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About</a></li>
              <li onClick={logout}><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <button onClick={() => login()} className="btn btn-primary btn-outline">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;