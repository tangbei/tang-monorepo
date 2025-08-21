import React, { useState, useRef } from 'react';
import { Button } from 'antd';

const NormalSSE = () => {
  const [sseMessage, setSseMessage] = useState('');
  const eventSourceRef = useRef<EventSource | null>(null);

  // 建立 SSE 连接
  const connectSSE = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
    }
    eventSourceRef.current = new EventSource('http://127.0.0.1:3002/sse?content=xxx')

    // 监听消息事件
    eventSourceRef.current.addEventListener('customEvent', (event) => {
      const data = JSON.parse(event.data);
      const message = `${data.id} --- ${data.time} --- params参数：${JSON.stringify(data.params)}` + '<br />';
      setSseMessage(prev => prev + message);
    })

    eventSourceRef.current.onopen = () => {
      setSseMessage(prev => prev + `SSE 连接成功，状态${eventSourceRef.current?.readyState}<br />`);
    }

    eventSourceRef.current.onerror = () => {
      setSseMessage(prev => prev + `SSE 连接错误，状态${eventSourceRef.current?.readyState}<br />`);
    }
  }

  // 断开 SSE 连接
  const closeSSE = () => {
    eventSourceRef.current?.close()
    setSseMessage(prev => prev + `SSE 连接关闭，状态${eventSourceRef.current?.readyState}<br />`);
  }

  // 清空消息
  const clearMessages = () => {
    setSseMessage('');
  }

  return (
    <div>
      <Button onClick={connectSSE}>建立 SSE 连接</Button>
      <Button onClick={closeSSE}>断开 SSE 连接</Button>
      <Button onClick={clearMessages}>清空消息</Button>
      <div dangerouslySetInnerHTML={{ __html: sseMessage }} />
    </div>
  );
};

export default NormalSSE;