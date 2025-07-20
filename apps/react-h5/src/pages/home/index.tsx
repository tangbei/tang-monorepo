import { useEffect, FC, useState } from 'react';
import { routes } from '@/routes';
import { Link, RouteObject } from 'react-router-dom';

const Home: FC = () => {
  const [allRoutes, setAllRoutes] = useState<RouteObject[]>([]);

  const deepRoutes = (routes: RouteObject[]) => {
    const routeList: RouteObject[] = [];
    routes.forEach((route) => {
      if (route.path) {
        routeList.push(route);
      } else {
        if (route.children) {
          routeList.push(...deepRoutes(route.children));
        }
      }
    });
    return routeList;
  };

  useEffect(() => {
    if (routes.length > 0) {
      const routeList = deepRoutes(routes);
      console.log('routes-->', routeList);

      setAllRoutes(routeList);
    }
  }, []);

  return (
    <>
      {allRoutes.map((route) => (
        <div key={route.path}>
          <Link to={route.path || ''}>{route.path}</Link>
        </div>
      ))}
    </>
  );
};

export default Home;