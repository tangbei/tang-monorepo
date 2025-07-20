import { Result } from 'antd-mobile';
import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoundary = () => {
  const error = useRouteError();

  console.log('error-->', error);

  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status='warning'
        title="找不到页面"
        description={`${error.status} ${error.statusText} ${error.data}`}
      />
    )
  } else if (error instanceof Error) {
    const stack = error.stack ?? ''
    return (
      <Result
        status='error'
        title="页面出错了"
        description={
          <div>
            <div>{error.message}</div>
            <div>
              {stack.split('\n').map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
        }
      />
    )
  } else {
    return (
      <Result status='waiting' title="未知错误" description="发生了一个超预期错误500" />
    )
  }
}

export default ErrorBoundary
