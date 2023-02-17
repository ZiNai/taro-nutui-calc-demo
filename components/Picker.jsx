import React, { useState } from "react";
import { Picker, Cell } from "@nutui/nutui-react";

export default function Picker() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [baseDefault, setbaseDefault] = useState("");
  const listData1 = [
    [
      { value: 1, text: "15%(0万)" },
      { value: 2, text: "20%(0万)" },
      { value: 3, text: "25%(0万)" },
      { value: 4, text: "30%(0万)" },
      { value: 5, text: "35%(0万)" },
      { value: 6, text: "40%(0万)" },
      { value: 7, text: "45%(0万)" },
      { value: 8, text: "50%(0万)" },
      { value: 9, text: "55%(0万)" },
      { value: 10, text: "60%(0万)" },
      { value: 10, text: "60%(0万)" },
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
  return (
    <>
      <Cell
        title="请选择城市"
        desc={baseDefault}
        onClick={() => setIsVisible1(!isVisible1)}
      />
      <Picker
        isVisible={isVisible1}
        listData={listData1}
        onConfirm={(values, list) => confirmPicker(values, list)}
        onClose={() => setIsVisible1(false)}
      />
    </>
  );
}
