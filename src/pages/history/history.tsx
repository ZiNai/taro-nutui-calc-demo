import { Table } from "@nutui/nutui-react-taro";
import { useState } from "react";

interface TableColumnProps {
  key?: string;
  title?: string;
  align?: string;
  sorter?: ((a: any, b: any) => number) | boolean | string;
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode;
}

export default function Index() {
  const [columns1, setColumns1] = useState<Array<TableColumnProps>>([
    {
      title: "公积金贷30年",
      key: "name",
    },
    {
      title: "商业贷30年",
      key: "sex",
      render: (record: any) => {
        return (
          <span style={{ color: record.sex === "女" ? "blue" : "green" }}>
            {record.sex}
          </span>
        );
      },
    },
    {
      title: "每月应还（等额本息）",
      key: "record",
    },
  ]);

  const [data1, setData1] = useState([
    {
      name: "20万",
      sex: "125441万",
      record: "6476590元",
    },
    {
      name: "50万",
      sex: "0万",
      record: "4754元",
    },
    {
      name: "20万",
      sex: "0万",
      record: "1902元",
    },
  ]);

  return <Table columns={columns1} data={data1} />;
}
