'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';

function Page() {
  const router = useRouter();
  const [responseData, setResponseData] = useState(null);

  console.log("DATA:", router.responseData)
  useEffect(() => {
    if (router.responseData) {
      setResponseData(JSON.parse(router.responseData));
      console.log(responseData)
    }
  }, []);
  return (
    <div>
      {responseData ? responseData.details.map((detail, index) => (
        <h2 key={index}>{detail.airline}</h2>
      )) : <h2>Loading...</h2>}
    </div>
  );
}

export default Page;
