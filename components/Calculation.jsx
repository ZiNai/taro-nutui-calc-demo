import { TabPane, Tabs } from "@nutui/nutui-react-taro";
import { Input } from "@tarojs/components";
import { useState } from "react";

export default function Calculation() {
  {
    /* 计算方式 */
  }
  const [salcTabValue, setSalcTabvalue] = useState("0");

  return (
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
          <Input name="number" label="贷款总额" placeholder="0" type="number" />
        </TabPane>
        <TabPane title="按房屋总价">
          <Input name="number" label="房屋总价" placeholder="0" type="number" />
          <Input name="number" label="首付选择" placeholder="0" type="number" />
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
          <Input name="number" label="贷款金额" placeholder="0" type="number" />
        </TabPane>
      </Tabs>
    </div>
  );
}
