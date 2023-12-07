import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  GlobalOutlined,
  AimOutlined,
  ReadOutlined,
  EnvironmentOutlined
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCountry,getTopic, getRegion,getdouble,getResourse } from "../../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [country, setcountry] = useState(0);
  const [Topic, setTopic] = useState(0);
  const [region, setregion] = useState(0);
  const [resourse,setresourse] = useState(0);

  useEffect(() => {
    getRegion().then((res) => {
      setregion(res.length);
     
    });
    getResourse().then((res)=>{
      setresourse(res.length)
    });
    getCountry().then((res) => {
      //console.log(res);
      setcountry(res.length);
    });
    getTopic().then((res) => {
      setTopic(res.length);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <GlobalOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Country"}
          value={country}
        />
        <DashboardCard
          icon={
            <AimOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Resources"}
          value={resourse}
        />
        <DashboardCard
          icon={
            <ReadOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Topic"}
          value={Topic}
        />
        <DashboardCard
          icon={
            <EnvironmentOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Region"}
          value={region}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  

  const [loading, setLoading] = useState(false);

 
useEffect(() => {
  setLoading(true);
  Promise.all([getTopic(), getRegion()]).then(([dataA, dataB]) => {
    const combinedData = dataA.slice(0, 3).map((itemA, index) => {
      return {
        columnAData: itemA.topic, 
        columnBData: dataB[index].region 
      };
    });

    setDataSource(combinedData);
    setLoading(false);
  }).catch(error => {
    console.error('Error fetching data:', error);
    setLoading(false);
  });
}, []);


return (
  <>
    <Typography.Text>Recent Adds</Typography.Text>
    <Table
      columns={[
        {
          title: "Topics",
          dataIndex: "columnAData",
          key: "columnAData"
        },
        {
          title: "Regions",
          dataIndex: "columnBData",
          key: "columnBData"
        },
      ]}
      loading={loading}
      dataSource={dataSource}
      pagination={false}
    />
  </>
);
    }

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getdouble().then((res) => {
      
      const labels = res.map((element) => {
        //console.log(element.intensity);
        return element.intensity;
      });
      const data = res.map((element) => {
       // console.log(element.relevance);
        return element.relevance;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Relevence Graph",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Chart Intensity via relevance",
      },
    },
  };


  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
export default Dashboard;
