import React from "react";
import { Card, Row, Col, Button } from "antd";
const { Meta } = Card;
import { Images } from "@/utils/Images";
import Image from "next/image";
import style from "../../styles/product.module.scss";

export default function Project() {
  const shoesArray = [
    {
      id: 1,
      itemName: "blue shoes",
      price: "$20",
      country: "Pakistan",
      url: Images.blueShoes,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 2,
      itemName: "fancy sniker",
      price: "$50",
      country: "Pakistan",
      url: Images.fancySniker,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 3,
      itemName: "fleet",
      price: "$20",
      country: "Pakistan",
      url: Images.fleet,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 4,
      itemName: "joger",
      price: "$20",
      country: "Pakistan",
      url: Images.joger,
      description: "Awesome item and best quality is our first priority.",
    },
    {
      id: 5,
      itemName: "sniker",
      price: "$20",
      country: "Pakistan",
      url: Images.sniker,
      description: "Awesome item and best quality is our first priority.",
    },
  ];

  return (
    <div className={style.mainProductWrraper}>
      <Row>
        {shoesArray?.map((item) => {
          return (
            <>
            <Col xxl={6} lg={6} md={8} sm={12} key={item.id}>
              <Card
                key={item?.id}
                hoverable
                style={{
                  width: 240,
                  marginTop:8
                }}
                cover={
                  <Image
                    src={item?.url}
                    alt={item?.itemName}
                    height={200}
                    width={200}
                  />
                }
              >
                <Meta title={item?.itemName} description={item?.description} />
                <p>Country: {item?.country}</p>
                <p>Price: {item?.price}</p>
                <Button>View Details</Button>
              </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
}
