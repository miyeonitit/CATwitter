"use client";

import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

const ReactQueryProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false, // 윈도우가 포커스를 얻을 때마다 쿼리를 다시 불러오지 않도록 지정
          retryOnMount: true, // 컴포넌트가 마운트될 때 쿼리를 다시 시도하도록 지정
          refetchOnReconnect: false, // 인터넷 연결이 재활성화될 때마다 쿼리를 다시 불러오지 않도록 지정
          retry: false, // 쿼리 실행 중 실패할 경우 자동으로 재시도하지 않도록 지정
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_NODE_ENV === "local"}
      />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
