// 请求拦截器
const requestInterceptor = async (config) => {
  console.log('Request Interceptor:', config);

  // 添加统一请求头
  config.headers = {
    'Content-Type': 'application/json'
  };

  return config;
};

// 响应拦截器
const responseInterceptor = async (response) => {
  console.log('Response Interceptor:', response);

  // 处理错误逻辑
  if (response.status >= 400) {
    console.error('Request failed:', response.statusText);
  }

  return response;
};

// 模拟发送请求的函数
const sendRequest = async (url, config) => {
  console.log('Sending request:', url);

  // 进行请求拦截
  const updatedConfig = await requestInterceptor(config);

  // 发送请求
  const response = await fetch(url, updatedConfig);

  // 进行响应拦截
  const updatedResponse = await responseInterceptor(response);

  return updatedResponse;
};

// 发送请求
sendRequest('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'GET'
});


/**
 * 在上面的示例中，requestInterceptor 函数表示请求拦截器，用于添加统一的请求头；
 * responseInterceptor 函数表示响应拦截器，用于处理错误逻辑。
 * sendRequest 函数模拟发送请求的过程，其中通过请求拦截器对请求进行处理，通过响应拦截器对响应进行处理。
 */