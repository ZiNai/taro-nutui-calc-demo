import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Infiniteloading,
  Input,
  Notify,
  Picker,
  Popup,
  Tabbar,
  TabbarItem,
  Table,
  TabPane,
  Tabs,
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

  // 弹出层
  const [showBasic, setShowBasic] = useState(false);
  // const [showIcon, setShowIcon] = useState(false);
  // const [showIconDefine, setShowIconDefine] = useState(false);
  const [showBasic1, setShowBasic1] = useState(false);

  //选择器：公积金年限
  const [isVisible1, setIsVisible1] = useState(false);
  const [baseDefault, setbaseDefault] = useState("");
  const listData1 = [
    [
      { value: 5, text: "5年" },
      { value: 10, text: "10年" },
      { value: 15, text: "15年" },
      { value: 20, text: "20年" },
      { value: 25, text: "25年" },
      { value: 30, text: "30年" },
    ],
  ];
  const confirmPicker = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    let desc = "";
    options.forEach((option: any) => {
      desc += option.text;
    });
    setbaseDefault(desc);
  };

  //商代年限
  const [isVisible4, setIsVisible4] = useState(false);
  const [baseDefault4, setbaseDefault4] = useState("");
  const listData4 = [
    [
      { value: 5, text: "5年" },
      { value: 10, text: "10年" },
      { value: 15, text: "15年" },
      { value: 20, text: "20年" },
      { value: 25, text: "25年" },
      { value: 30, text: "30年" },
    ],
  ];
  const confirmPicker4 = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    let desc = "";
    options.forEach((option: any) => {
      desc += option.text;
    });
    setbaseDefault4(desc);
  };
  //公积金利率
  const [isVisible2, setIsVisible2] = useState(false);
  const [baseDefault2, setbaseDefault2] = useState("");
  const listData2 = [
    [
      { value: 0.0325, text: "3.25% (最新基准利率1倍)" },
      { value: 0.0358, text: "3.58% (最新基准利率1.1倍)" },
      { value: 0.039, text: "3.9% (最新基准利率1.2倍)" },
      { value: 0.0423, text: "4.23% (最新基准利率1.3倍)" },
    ],
  ];
  const confirmPicker2 = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    let desc = "";
    options.forEach((option: any) => {
      desc += option.text;
    });
    setbaseDefault2(desc);
  };
  //利率方式
  const [isVisible3, setIsVisible3] = useState(false);
  const [baseDefault3, setbaseDefault3] = useState("");
  const listData3 = [
    [
      { value: 0.043, text: "使用最新LPR" },
      { value: 0.049, text: "使用旧版基准利率" },
    ],
  ];
  const confirmPicker3 = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    let desc = "";
    options.forEach((option: any) => {
      desc += option.text;
    });
    setbaseDefault3(desc);
  };
  //首付选择
  const [isVisible5, setIsVisible5] = useState(false);
  const [baseDefault5, setbaseDefault5] = useState("");
  const listData5 = [
    [
      { value: 0.15, text: "15%(2万)" },
      { value: 0.2, text: "20%(2万)" },
      { value: 0.25, text: "25%(3万)" },
      { value: 0.3, text: "30%(4万)" },
      { value: 0.35, text: "35%(4万)" },
      { value: 0.4, text: "40%(5万)" },
      { value: 0.45, text: "45%(6万)" },
    ],
  ];
  const confirmPicker5 = (
    values: (string | number)[],
    options: PickerOption[]
  ) => {
    let desc = "";
    options.forEach((option: any) => {
      desc += option.text;
    });
    setbaseDefault5(desc);
  };
  return (
    <main className="indexMain">
      {/* 计算结果 */}

      <Cell
        className="calcRes"
        title="房屋总价--万"
        desc="查看历史"
        isLink
        url="/pages/history/index"
      />
      <Cell className="calcRes" id="repayment">
        <div>
          首付30%、公积金贷20万·30年·利率3.25%、商业贷款12万·30年·利率4.66%、等额本息
        </div>
      </Cell>

      <Cell
        className="detailRes"
        title="首付款--"
        desc="每月应还（等额本息）1234元 对比等额本金月供"
        isLink
        url="/pages/detail/index"
      />

      {/* 计算方式 */}

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
            type="number"
            rightIcon="right"
            defaultValue={baseDefault5}
            onClickRightIcon={() => setIsVisible5(!isVisible5)}
          />

          <Picker
            isVisible={isVisible5}
            teleport={document.body}
            listData={listData5}
            onConfirm={(values, list) => confirmPicker5(values, list)}
            onClose={() => setIsVisible5(false)}
          />

          <Input
            name="number"
            label="贷款金额"
            placeholder="0万"
            type="number"
          />
        </TabPane>
      </Tabs>

      {/* 贷款方式 */}

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
            defaultValue={baseDefault}
            onClickRightIcon={() => setIsVisible1(!isVisible1)}
          />
          <Picker
            isVisible={isVisible1}
            listData={listData1}
            onConfirm={(values, list) => confirmPicker(values, list)}
            onClose={() => setIsVisible1(false)}
          />
          <Input
            name="number"
            label="公积金利率"
            placeholder="3.25%（最新基准利率1倍）"
            rightIcon="right"
            type="number"
            defaultValue={baseDefault2}
            onClickRightIcon={() => setIsVisible2(!isVisible2)}
          />
          <Picker
            isVisible={isVisible2}
            listData={listData2}
            onConfirm={(values, list) => confirmPicker2(values, list)}
            onClose={() => setIsVisible2(false)}
          />
          <Input
            name="number"
            label="商代金额"
            placeholder="0万"
            type="number"
          />
          <Input
            name="number"
            label="商贷年限"
            placeholder="0年"
            rightIcon="right"
            type="number"
            defaultValue={baseDefault4}
            onClickRightIcon={() => setIsVisible4(!isVisible4)}
          />
          <Picker
            isVisible={isVisible4}
            listData={listData4}
            onConfirm={(values, list) => confirmPicker4(values, list)}
            onClose={() => setIsVisible4(false)}
          />

          <Input
            name="number"
            label="利率方式"
            placeholder="使用最新LPR"
            rightIcon="right"
            type="number"
            defaultValue={baseDefault3}
            onClickRightIcon={() => setIsVisible3(!isVisible3)}
          />
          <Picker
            isVisible={isVisible3}
            listData={listData3}
            onConfirm={(values, list) => confirmPicker3(values, list)}
            onClose={() => setIsVisible3(false)}
          />
          <Input
            name="number"
            label="LPR"
            placeholder="4.65 %"
            leftIcon="ask"
            type="number"
            // defaultValue={4.65}
            onClickLeftIcon={() => {
              setShowBasic(true);
            }}
          />
          <Popup
            visible={showBasic}
            style={{ padding: "30px 50px" }}
            onClose={() => {
              setShowBasic(false);
            }}
            teleport={document.body}
          >
            <h6 className="askPopupTittle">LPR（贷款市场报价利率）</h6>
            <p className="askPopupText">
              自2019年10月起，商贷利率开始改用LPR贷款市场报价利率计算。LPR基准利率每月更新一次，实际贷款利率在LPR的基础上进行一定的浮动。
            </p>
          </Popup>
          {/* <Cell
            title="关闭图标"
            isLink
            onClick={() => {
              setShowIcon(true);
            }}
          />
          <Popup
            closeable
            visible={showIcon}
            style={{ height: "20%" }}
            position="bottom"
            onClose={() => {
              setShowIcon(false);
            }}
          >
            text
          </Popup> */}

          <Input
            name="number"
            label="基点"
            placeholder="0 BP(‱)"
            leftIcon="ask"
            type="number"
            onClickLeftIcon={() => {
              setShowBasic1(true);
            }}
          />
          <Popup
            visible={showBasic1}
            style={{ padding: "30px 50px" }}
            onClose={() => {
              setShowBasic1(false);
            }}
            teleport={document.body}
          >
            <h6 className="askPopupTittle"> 什么是基点?</h6>
            <p className="askPopupText">
              如果浮动10个1个基点=0.01%，基点，相当于在LPR的基础上增加0.1%为实际贷款利率。
            </p>
          </Popup>
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
            label="商代年限"
            placeholder="0年"
            rightIcon="right"
            type="number"
            defaultValue={baseDefault4}
            onClickRightIcon={() => setIsVisible4(!isVisible4)}
          />
          <Picker
            isVisible={isVisible4}
            listData={listData4}
            onConfirm={(values, list) => confirmPicker4(values, list)}
            onClose={() => setIsVisible4(false)}
          />

          <Input
            name="number"
            label="利率方式"
            placeholder="使用最新LPR"
            rightIcon="right"
            type="number"
            defaultValue={baseDefault3}
            onClickRightIcon={() => setIsVisible3(!isVisible3)}
          />
          <Picker
            isVisible={isVisible3}
            listData={listData3}
            onConfirm={(values, list) => confirmPicker3(values, list)}
            onClose={() => setIsVisible3(false)}
          />
          <Input
            name="number"
            label="LPR"
            placeholder="4.65 %"
            leftIcon="ask"
            type="number"
            onClickLeftIcon={() => {
              setShowBasic(true);
            }}
          />
          <Popup
            visible={showBasic}
            style={{ padding: "30px 50px" }}
            onClose={() => {
              setShowBasic(false);
            }}
            teleport={document.body}
          >
            <h6 className="askPopupTittle">LPR（贷款市场报价利率）</h6>
            <p className="askPopupText">
              自2019年10月起，商贷利率开始改用LPR贷款市场报价利率计算。LPR基准利率每月更新一次，实际贷款利率在LPR的基础上进行一定的浮动。
            </p>
          </Popup>

          <Input
            name="number"
            label="基点"
            placeholder="0 BP(‱)"
            leftIcon="ask"
            type="number"
            onClickLeftIcon={() => {
              setShowBasic1(true);
            }}
          />
          <Popup
            visible={showBasic1}
            style={{ padding: "30px 50px" }}
            onClose={() => {
              setShowBasic1(false);
            }}
            teleport={document.body}
          >
            <h6 className="askPopupTittle"> 什么是基点?</h6>
            <p className="askPopupText">
              如果浮动10个1个基点=0.01%，基点，相当于在LPR的基础上增加0.1%为实际贷款利率。
            </p>
          </Popup>
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
      <Button block className="button" type="primary" shape="square">
        开始计算
      </Button>
    </main>
  );
}
