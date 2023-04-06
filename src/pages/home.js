import { Table } from "antd";
import React from "react";
import { Images } from "@/utils/Images";
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

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "name",
    render: (_, data) => <div>{data?.itemName?.toUpperCase()}</div>,
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country",
    render: (_, data) => <div>{data?.country}</div>,
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    render: (_, data) => <div>{data?.description}</div>,
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
    render: (_, data) => <div>{data?.price}</div>,
  },
];
export default function Home() {
  return (
    <div className={"mainHomeWrraper"}>
      <div className={'homeTableWrapper'}>
        <Table dataSource={shoesArray} columns={columns} pagination={false} />
        {shoesArray.length > 4 && (
          <div className={'seeAllWrraper'}>
            <p>See all Items</p>
          </div>
        )}
      </div>
    </div>
  );
}
