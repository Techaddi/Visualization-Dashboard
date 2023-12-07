import {  Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {  getInsight, } from "../../API";

function Insight() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInsight().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Insights</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Topic",
            dataIndex: "topic",
           
          },
          {
            title: "Sector",
            dataIndex: "sector",
          },
          {
            title: "Insight",
            dataIndex: "insight",
          },
          {
            title: "End Year",
            dataIndex: "end_year",
            render: (value) => {
              return value !== "" && value !== undefined ? <span>{value}</span> : <span>not given</span>;
            }
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
export default Insight;
