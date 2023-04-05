import React, { useEffect, useState } from 'react'

export default function Project() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setLoading] = useState(false);
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);
    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
  return (
    <div>
    {data?.map((item) => {
      return (<>
        <div>
          <div style={{margin:20, background:"lightGray", padding:10}}>
            <h4>{item?.title}</h4>
            <p>{item?.body}</p>
          </div>
        </div>
        </>
      );
    })}
  </div>
  )
}
