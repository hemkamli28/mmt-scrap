'use client';
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from 'react';

function Page() {
  const [responseData, setResponseData] = useState(null);
  const searchParams = useSearchParams();
  const data = searchParams.get('data');

  console.log("DATA:", data);
  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setResponseData(parsedData);
      } catch (error) {
        console.error('Error parsing data:', error);
      }
    }
  }, [data]);


  return (
    <div>
      {responseData ? (
        responseData.details.map((item, index) => (
          <p key={index}>{item.airline}</p>
        ))
      ) : (
        <p>Loading!</p>
      )}
    </div>
  );
}

export default Page;
