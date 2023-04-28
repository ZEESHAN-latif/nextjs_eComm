import { Table } from "antd";
import React from "react";
import style from '../styles/home.module.scss'
import { useRouter } from "next/router";

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
export default function Home({...props}) {
  const router = useRouter();
  return (
    <div className={style.mainHomeWrraper}>
      <div className={style.homeTableWrapper}>
        <Table dataSource={props?.tableData} columns={columns} pagination={false} />
        {props?.tableData.length > 4 && (
          <div className={style.seeAllWrraper} onClick={() => router.push(props?.navigation)}>
            <p>See all Items</p>
          </div>
        )}
      </div>
    </div>
  );
}
