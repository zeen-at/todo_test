"use client"

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const TanstackQuery = ({children}: {children: ReactNode}) => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default TanstackQuery
