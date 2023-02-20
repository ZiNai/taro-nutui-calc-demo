import { Icon, NavBar, Table } from "@nutui/nutui-react-taro";
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
      key: "gjj",
    },
    {
      title: "商业贷30年",
      key: "syd",
      render: (monthly: any) => {
        return (
          <span style={{ color: monthly.syd > 20 ? "blue" : "green" }}>
            {monthly.syd}
          </span>
        );
      },
    },
    {
      title: "每月应还（等额本息）",
      key: "monthly",
    },
  ]);

  const [data1, setData1] = useState([
    {
      gjj: "20万",
      syd: "125441万",
      monthly: "6476590元",
    },
    {
      gjj: "50万",
      syd: "0万",
      monthly: "4754元",
    },
    {
      gjj: "20万",
      syd: "0万",
      monthly: "1902元",
    },
  ]);

  return (
    <>
      <NavBar
        title="历史记录"
        leftShow
        leftText="返回"
        onClickTitle={(e) => alert("标题")}
        onClickBack={(e) => alert("返回")}
        onClickRight={(e) => alert("icon")}
      >
        <Icon name="share" slot="right" />
      </NavBar>
      <Table columns={columns1} data={data1} />;
    </>
  );
}
