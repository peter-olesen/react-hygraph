import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { request } from "graphql-request"
import { allBlogs } from './queries';

import { Content } from './components/Content/Content'
import './App.scss'

function App() {

  const {data, isLoading, error} = useQuery(
    {
        queryKey: ["BlogPosts"],
        queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL, allBlogs)
    }
  );
  
  console.log(data);

  return (
    <>
      <Content />
    </>
  )
}

export default App
