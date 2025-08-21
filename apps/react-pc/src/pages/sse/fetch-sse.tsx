import React, { useRef, useState } from 'react';
import { Button } from 'antd';

const FetchSSE = () => {
  const controllerRef = useRef<AbortController | null>(null);
  const [sseMessage, setSseMessage] = useState('');

  const fetchEventSource = (url: string, options: any) => {
    fetch(url, options)
      .then(response => {
        if (response.status === 200) {
          console.log('response-->', response)
          if (options?.onopen) {
            options.onopen();
          }
          return response.body
        }
      })
      .then(rb => {
        const reader = rb?.getReader()
        const push: any = () => {
          // done 为数据流是否接收完成，boolean
          // value 为返回数据，Uint8Array
          return reader?.read().then(({done, value}) => {
            if (options?.onmessage) {
              options.onmessage(new TextDecoder().decode(value))
            }
            if (done) {
              console.log('done-->', done)
              if (options?.onclose) {
                options.onclose()
              }
              return
            }
            // 持续读取流信息
            return push()
          })
        }
        // 开始读取流信息
        return push()
      })
      .catch((e) => {
        console.error('Fetch error:', e);
        if (options?.error) {
          options.error(e);
        }
      });
  };

  // 建立 FETCH-SSE 连接
  const connectFetch = () => {
    controllerRef.current = new AbortController()
    fetchEventSource('http://127.0.0.1:3001/fetch-sse', {
      method: 'POST',
      body: JSON.stringify({
        content: 'xxx'
      }),
      signal: controllerRef.current.signal,
      onopen: () => {
        setSseMessage(prev => prev + `FETCH 连接成功<br />`)
      },
      onclose: () => {
        setSseMessage(prev => prev + `FETCH 连接自动关闭<br />`)
      },
      onmessage: (event: string) => {
        console.log('event-->', event)
        const data = JSON.parse(event || '{}')
        setSseMessage(prev => prev + `${data?.id} --- ${data?.time} --- body参数：${JSON.stringify(data?.body)}` + '<br />')
      },
      onerror: (e: Error) => {
        console.log(e)
      }
    })
  }

  // 断开 FETCH-SSE 连接
  const closeSSE = () => {
    if (controllerRef.current) {
      controllerRef.current.abort()
      controllerRef.current = null
      setSseMessage(prev => prev + `FETCH 连接手动关闭<br />`)
    }
  }

  return <div>
    <Button onClick={connectFetch}>建立 FETCH-SSE 连接</Button>
    <Button onClick={closeSSE}>断开 FETCH-SSE 连接</Button>
    <div dangerouslySetInnerHTML={{ __html: sseMessage }} />
  </div>;
};

export default FetchSSE;