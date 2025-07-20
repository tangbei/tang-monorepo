import { Outlet, RouteObject } from 'react-router'
import { ComponentType, LazyExoticComponent } from 'react'
import { LazyImport } from '@/components/LazyImport';

export type LazyComponent = LazyExoticComponent<ComponentType>;

export type RouteConfig = Omit<
  RouteObject,
  'element' | 'children' | 'Component' | 'lazy'
> & {
  element?: LazyComponent
  middlewares?: LazyComponent[]
  children?: RouteConfig[]
};

export const buildRoutes = (routes: RouteConfig[]): RouteObject[] => {
  return routes.map((item) => {
    const { element, middlewares, children, ...restProps } = item;

    // 要返回的路由对象
    let routeObject: RouteObject = {
      ...restProps,
    };

    // 递归构建子路由
    if (children) {
      routeObject.children = buildRoutes(children);
    }

    // 异步加载组件
    routeObject.element = element ? <LazyImport lazy={element} /> : undefined;

    // 中间件处理
    if (middlewares && middlewares.length > 0) {
      // 从后往前遍历中间件，这样中间件的执行顺序就是从前往后
      // 例如：[A, B, C] => A(B(C()))
      for (let i = middlewares.length - 1; i >= 0; i--) {
        const middleware = middlewares[i];
        routeObject = {
          element: <LazyImport lazy={middleware} />,
          children: [routeObject],
        };
      }
    } else {
      // 如果没有中间件，也没有 element 则传入 <Outlet />
      routeObject.element = routeObject.element ?? <Outlet />;
    }

    // 返回路由对象
    return routeObject;
  });
};