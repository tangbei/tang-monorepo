import React, { useState, useEffect } from 'react';
import { RouteObject } from 'react-router-dom';
import { routes } from '@/routes';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const TopNavTitle = () => {
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
    <div className={style.header_wrapper}>
      {
        allRoutes.map((route) => (
          <div key={route.path} className={style.header_tab_item}>
            <Link to={route.path || ''}>{route.path}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default TopNavTitle;