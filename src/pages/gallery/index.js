import { Card, Col, Row } from "antd";
import Image from "next/image";
import React from "react";

export default function index({data}) {
    console.log(data);
  return (
    <div>
      <Row>
        {data?.products?.map((item, key) => {
          return (
            <Col sm={12} md={7} lg={7} xxl={7} key={key} style={{margin:10}}>
              <Card title={item?.title}>
              <div style={{display:"flex", justifyContent:"space-between"}}> <p>Price: {item?.price}</p><p>Rating: {item?.rating}</p></div>
               <div style={{display:"flex", justifyContent:"space-between"}}> <p>Brand: {item?.brand}</p><p>Category: {item?.category}</p></div>
                <p>Stock: {item?.stock}</p>
                <p>Description: {item?.description}</p>
                
                <img style={{width:'100%'}} src={item?.images[1]} alt={item?.thumbnail}/>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
