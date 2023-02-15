import {
  Button,
} from "@nutui/nutui-react-taro";import './index.scss'

export default function Index() {


  return (
    <div className="nutui-react-demo">
      <div className="index">
       欢迎使用 NutUI React 开发 Taro 多端项目。
      </div>
      <div className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </div>
    </div>
  );

}
