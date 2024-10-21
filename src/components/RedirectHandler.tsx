import  { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectUri = params.get('redirect_uri') || '/'; 

    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate(redirectUri);
    } else {
      window.location.href = 'https://jpacock.com/authelia';
    }
  }, [navigate, location]);

  return null;
};

export default RedirectHandler;
