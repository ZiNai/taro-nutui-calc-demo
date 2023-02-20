import { Icon, NavBar } from "@nutui/nutui-react-taro";

export default function Index() {
  return (
    <>
      console.log("detail!")
      <NavBar
        title="还款详情"
        leftShow
        leftText="返回"
        onClickTitle={(e) => alert("标题")}
        onClickBack={(e) => alert("返回")}
        onClickRight={(e) => alert("icon")}
      >
        <Icon name="share" slot="right" />
      </NavBar>
    </>
  );
}
