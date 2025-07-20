import { useLocation } from 'react-router-dom';

/**
 * 路由权限拦截等操作
 * @param props 
 * @returns 
 */
const AuthRouter = (props: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  console.log('AuthRouter', props.children, ' ----', pathname);

  return props.children;
};

export default AuthRouter;