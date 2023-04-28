import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import ProductDetailModal from "./productDetailModal";

export default function index({data}) {
    console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
                <Button type='primary' onClick={() => {
                  setIsModalOpen(true);
                  setModalData(item);
                  }}>View Product</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
      <ProductDetailModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={modalData}/>
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
