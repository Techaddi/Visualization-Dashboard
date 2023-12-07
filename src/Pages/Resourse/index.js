import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {  getResourse } from "../../API";

function Resourse() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getResourse().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Resourses</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Added",
            dataIndex: "added",
           
          },
          {
            title: "Resourse",
            dataIndex: "url",
            render: (url) => (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            )
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
export default Resourse;
