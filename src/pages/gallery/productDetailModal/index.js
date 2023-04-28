import { Button, Card, Modal } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
const ProductDetailModal = ({isModalOpen, setIsModalOpen, data}) => {

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(data?.images)
  return (
    <>
      <Modal title="Product Info" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Card title={data?.title}>
              <div style={{display:"flex", justifyContent:"space-between"}}> <p>Price: {data?.price}</p><p>Rating: {data?.rating}</p></div>
               <div style={{display:"flex", justifyContent:"space-between"}}> <p>Brand: {data?.brand}</p><p>Category: {data?.category}</p></div>
                <p>Stock: {data?.stock}</p>
                <p>Description: {data?.description}</p>
                
                <ImgWrraper> <img style={{width:'50%', height:'50%',}} src={data?.images[0]} alt={data?.thumbnail}/></ImgWrraper>
                <Button type='primary'>Add Product to Cart</Button>
              </Card>
      </Modal>
    </>
  );
};
export default ProductDetailModal;

const ImgWrraper = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:8px;
margin-bottom: 10px;
`