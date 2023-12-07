import {  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Tpoic",
            dataIndex: "topic",
           
          },
          {
            title: "Published",
            dataIndex: "published",
          },
          {
            title: "End Year",
            dataIndex: "end_year", 
            render: (value) => {
              return value !== "" && value !== undefined ? <span>{value}</span> : <span>not given</span>;
            }
          },
          {
            title: "Region",
            dataIndex: "region",
          
          },
          {
            title: "Intensity",
            dataIndex: "intensity",
          },

          {
            title: "Relevance",
            dataIndex: "relevance",
          },
        
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Inventory;
