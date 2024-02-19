import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectHome() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
}

export default RedirectHome;