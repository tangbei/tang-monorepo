import { Result } from 'antd';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();

  console.log('error-->', error);

  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status={404}
        title="找不到页面"
        subTitle={`${error.status} ${error.statusText} ${error.data}`}
      />
    )
  } else if (error instanceof Error) {
    const stack = error.stack ?? ''
    return (
      <Result
        status={500}
        title="页面出错了"
        subTitle={
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
      <Result status={500} title="未知错误" subTitle="发生了一个超预期错误500" />
    )
  }
}

export default ErrorBoundary
