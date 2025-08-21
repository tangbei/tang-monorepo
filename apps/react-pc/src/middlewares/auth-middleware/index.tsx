import LazyLoading from '@/components/LazyLoading';
import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Result } from 'antd';

let i = 0;

const AuthMiddleware: React.FC = () => {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    console.log('AuthMiddleware---执行', i++, location);
    if (previousPath !== location.pathname) {
      setLoading(true);
    }

    setPreviousPath(location.pathname);
    setTimeout(() => {
      // 随机返回 0 或 1
      const authed = Math.round(Math.random())
      if (authed) {
        console.log('拥有访问权 PagePermissionMiddleware')
        setAuth(true);
      } else {
        console.log('没有访问权 PagePermissionMiddleware')
        setAuth(false);
      }

      setLoading(false);
    }, 0);
  }, [location.pathname]);

  if (loading) {
    return <LazyLoading />;
  }

  if (!auth) {
    return <Result status={403} title='没有访问权' subTitle='没有权限访问此页面' />;
  }

  return <Outlet />;
};

export default AuthMiddleware;