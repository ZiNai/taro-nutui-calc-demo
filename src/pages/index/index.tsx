import {
  Button,
  Cell,
  Icon,
  Infiniteloading,
  Input,
  Notify,
  Picker,
  Tabbar,
  TabbarItem,
  Table,
  TabPane,
  Tabs,
  Video,
} from "@nutui/nutui-react-taro";
import { useEffect, useState } from "react";
import "./index.scss";
// const InfiniteUlStyle = {
//   height: "300px",
//   width: "100%",
//   padding: "0",
//   overflowY: "auto",
//   overflowX: "hidden",
// };

// const InfiniteLiStyle = {
//   marginTop: "10px",
//   fontSize: "14px",
//   color: "rgba(100, 100, 100, 1)",
//   textAlign: "center",
// };
interface TableColumnProps {
  key?: string;
  title?: string;
  align?: string;
  sorter?: ((a: any, b: any) => number) | boolean | string;
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode;
}

export default function Index() {
  //
  //   const [defultList, setDefultList] = useState<string[]>([]);
  //   const [hasMore, setHasMore] = useState(true);
  //   const [showNotify, SetShowNotify] = useState(false);
  //   const [states, SetStates] = useState({
  //     msg: "",
  //     type: "danger",
  //   });

  //   useEffect(() => {
  //     init();
  //   }, []);
  //   const changeNotify = (msg: string, type?: string) => {
  //     const change = Object.assign(states, { msg, type });
  //     SetStates(change);
  //   };
  //   const loadMore = (done: () => void) => {
  //     setTimeout(() => {
  //       const curLen = defultList.length;
  //       for (let i = curLen; i < curLen + 10; i++) {
  //         defultList.push(`${i}`);
  //       }
  //       if (defultList.length >= 30) {
  //         setHasMore(false);
  //       } else {
  //         setDefultList([...defultList]);
  //       }
  //       done();
  //     }, 500);
  //   };

  //   const init = () => {
  //     for (let i = 0; i < 10; i++) {
  //       defultList.push(`${i}`);
  //     }
  //     setDefultList([...defultList]);
  //   };

  const [salcTabValue, setSalcTabvalue] = useState("0");
  const [loanTabvalue, setLoanTabvalue] = useState("0");
  const [source, setSource] = useState({
    src: "https://storage.360buyimg.com/nutui/video/video_NutUI.mp4",
    type: "video/mp4",
  });
  const options = {
    autoplay: true,
    muted: true,
    controls: true,
  };
  const play = (elm: HTMLVideoElement) => console.log("play", elm);
  const pause = (elm: HTMLVideoElement) => console.log("pause", elm);
  const playend = (elm: HTMLVideoElement) => console.log("playend", elm);
  // const [isVisible1, setIsVisible1] = useState(false);
  // const [baseDefault, setbaseDefault] = useState("15%(0万)");
  // const listData1 = [
  //   [
  //     { value: 1, text: "15%(0万)" },
  //     { value: 2, text: "20%(0万)" },
  //     { value: 3, text: "25%(0万)" },
  //     { value: 4, text: "30%(0万)" },
  //     { value: 5, text: "35%(0万)" },
  //     { value: 6, text: "40%(0万)" },
  //     { value: 7, text: "45%(0万)" },
  //     { value: 8, text: "50%(0万)" },
  //     { value: 9, text: "55%(0万)" },
  //     { value: 10, text: "60%(0万)" },
  //   ],
  // ];
  // const confirmPicker = (
  //   values: (string | number)[],
  //   options: PickerOption[]
  // ) => {
  //   let desc = "";
  //   options.forEach((option: any) => {
  //     desc += option.text;
  //   });
  //   setbaseDefault(desc);
  // };
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
      {/* 计算结果 */}
      <Cell className="calcRes">
        <div className="calcRes-header">
          <h4>房屋总价--万</h4>
          <h5>
            查看历史 <Icon name="rect-right" size={20} />
          </h5>
        </div>
        <h6>
          首付30%、公积金贷20万·30年·利率3.25%、商业贷款12万·30年·利率4.66%、等额本息
        </h6>
      </Cell>
      <Cell className="calcRes2">
        <h4>首付款--</h4>
        <div className="calcRes-header2">
          <h5>每月应还（等额本息）</h5>
          <h5>1234元 </h5>
          <h6>
            等额本金月供 <Icon name="rect-right" size={20} />
          </h6>
        </div>
      </Cell>

      {/* 计算方式 */}

      <div>
        <Tabs
          className="tab"
          autoHeight
          value={salcTabValue}
          onChange={({ paneKey }) => {
            setSalcTabvalue(paneKey);
          }}
        >
          <TabPane title="按贷款总额">
            <Input
              name="number"
              label="贷款总额"
              placeholder="0万"
              type="number"
            />
          </TabPane>
          <TabPane title="按房屋总价">
            <Input
              name="number"
              label="房屋总价"
              placeholder="0万"
              type="number"
            />
            <Input
              name="number"
              label="首付选择"
              placeholder="30%(0万)"
              rightIcon="right"
              type="number"
            />
            {/* <>
              <Cell
                title="首付选择"
                desc={baseDefault}
                onClick={() => setIsVisible1(!isVisible1)}
              />
              <Picker
                isVisible={isVisible1}
                listData={listData1}
                onConfirm={(values, list) => confirmPicker(values, list)}
                onClose={() => setIsVisible1(false)}
              />
            </> */}
            <Input
              name="number"
              label="贷款金额"
              placeholder="0万"
              type="number"
            />
          </TabPane>
        </Tabs>
      </div>

      {/* 贷款方式 */}
      <div>
        <Tabs
          className="tab"
          autoHeight
          value={loanTabvalue}
          onChange={({ paneKey }) => {
            setLoanTabvalue(paneKey);
          }}
        >
          <TabPane title="组合贷">
            <Input
              name="number"
              label="公积金金额"
              placeholder="0万"
              type="number"
            />
            <Input
              name="number"
              label="公积金年限"
              placeholder="30年"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="公积金利率"
              placeholder="3.25%（最新基准利率1倍）"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="商代金额"
              placeholder="0万"
              type="number"
            />
            <Input
              name="number"
              label="商代年限"
              placeholder="0年"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="利率方式"
              placeholder="使用最新LPR"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="LPR"
              placeholder="4.65 %"
              leftIcon="ask"
              type="number"
            />

            <Input
              name="number"
              label="基点"
              placeholder="0 BP(‱)"
              leftIcon="ask"
              type="number"
            />
            <Input
              name="number"
              label="商代利率"
              placeholder="4.65% + 0‱ = "
              type="number"
            />
          </TabPane>
          <TabPane title="商业贷">
            <Input
              name="number"
              label="商贷年限"
              placeholder="30年"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="利率方式"
              placeholder="使用最新LPR"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="LPR"
              placeholder="4.65"
              leftIcon="ask"
              type="number"
            />
            <Input
              name="number"
              label="基点"
              placeholder="0"
              leftIcon="ask"
              type="number"
            />
            <Input
              name="number"
              label="商代利率"
              placeholder="4.65% + 0‱ = "
              type="number"
            />
          </TabPane>
          <TabPane title="公积金贷">
            <Input
              name="number"
              label="公积金年限"
              placeholder="30年"
              rightIcon="right"
              type="number"
            />
            <Input
              name="number"
              label="公积金利率"
              placeholder="3.25%（最新基准利率1倍）"
              rightIcon="right"
              type="number"
            />
          </TabPane>
        </Tabs>
      </div>

      {/* 滚动加载 */}
      {/* <div>
        <Notify
          visible={showNotify}
          msg={states.msg}
          type={states.type}
          onClosed={() => {
            SetShowNotify(false);
          }}
          onClick={() => {
            console.log("click");
          }}
        />
        <Cell
          title="基础用法"
          onClick={(event: React.MouseEvent) => {
            changeNotify("成功通知", "success");
            SetShowNotify(true);
          }}
        />
        <Cell>
          <ul id="scroll" style={InfiniteUlStyle}>
            <Infiniteloading
              containerId="scroll"
              useWindow={false}
              hasMore={hasMore}
              loadMore={loadMore}
            >
              {defultList.map((item, index) => {
                return (
                  <li key={index} style={InfiniteLiStyle}>
                    {item}
                  </li>
                );
              })}
            </Infiniteloading>
          </ul>
        </Cell>
      </div>
      <Tabbar bottom>
        <TabbarItem tabTitle="首页" href="" icon="home" />
        <TabbarItem tabTitle="分类" icon="category" />
        <TabbarItem tabTitle="发现" icon="find" />
        <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon="cart" />
        <TabbarItem tabTitle="我的" href="/" icon="my" />
      </Tabbar> */}
      <Cell className="cell">
        <Video
          source={source}
          options={options}
          onPlayFuc={play}
          onPauseFuc={pause}
          onPlayend={playend}
        />
      </Cell>
      <Button block className="button" type="primary" shape="square">
        开始计算
      </Button>
      <Table columns={columns1} data={data1} />
    </>
  );
}
