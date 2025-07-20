import { lazy } from 'react'
import { buildRoutes, RouteConfig } from './util';
import { createBrowserRouter } from 'react-router';
import ErrorBoundary from '@/components/ErrorBoundary'

const routeConfig: RouteConfig[] = [
  {
    ErrorBoundary: ErrorBoundary,
    // element: lazy(() => import('@/layouts/AppLayout')),
    children: [
      {
        path: '/',
        element: lazy(() => import('@/pages/home')),
      },
      {
        // 应用基础布局
        path: '/about',
        // 应用基础布局
        // element: lazy(() => import('@/layouts/BasicLayout')),
        middlewares: [
          // 管理员登录验证中间件
          lazy(() => import('../middlewares/auth-middleware')),
          // 页面权限验证中间件
          // lazy(() => import('../middlewares/PagePermissionMiddleware')),
        ],
        children: [
          {
            path: '*',
            index: true,
            element: lazy(() => import('@/pages/about')),
          },
        ],
      },
    ],
  },
]

export const routes = buildRoutes(routeConfig);

console.log(routes, 'routes');

export const router = createBrowserRouter(routes);