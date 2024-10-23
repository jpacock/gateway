import useAuth from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { isAuthenticated, login, logout, userInitials } = useAuth();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="navbar bg-base-100 p-4">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">jpacock</a>
      </div>
      <div className="flex-none">
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" aria-label="User menu" aria-expanded="false" className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                <span>{userInitials}</span>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About</a></li>
              <li onClick={handleLogout}><a>Logout</a></li>
            </ul>
          </div>
        ) : (
          <button onClick={handleLogin} className="btn btn-primary btn-outline">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
