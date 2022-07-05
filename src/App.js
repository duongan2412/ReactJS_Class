import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/DemoComponents/ClassComponent';
import FunctionComponent from './Components/DemoComponents/FunctionComponent';
import Home from './Components/BaiTapLayout/Home';
import DataBinding from './Components/DataBinding/DataBinding';
import HandingEvents from './Components/HandingEvents/HandingEvents';
import RenderingWithConditions from './Components/RenderingWithConditions/RenderingWithConditions';
import State from './Components/State/State';
import Styling from './Components/Styling/Styling';
import BaiTapCar from './Components/BaiTapCar/BaiTapCar';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';
import ParentProps from './Components/Props/ParentProps';
import BaiTapProps from './Components/BaiTapProps/BaiTapProps';
import DemoRedux from './Components/Redux/DemoRedux/Parent';
import BaiTapDienThoaiRedux from './Components/Redux/BaiTapDienThoai/BaiTapDienThoai';
import BaiTapThuDo from './Components/Redux/BaiTapThuDo/BaiTapThuDo';



function App() {
  return (
    <div>
      {/* <Home></Home> */}
      {/* <DataBinding></DataBinding> */}
      {/* <HandingEvents></HandingEvents> */}
      {/* <RenderingWithConditions></RenderingWithConditions> */}
      {/* <State></State> */}
      {/* <Styling></Styling> */}
      {/* <BaiTapCar></BaiTapCar> */}
      {/* <RenderWithMap></RenderWithMap> */}
      {/* <ParentProps></ParentProps> */}
      {/* <BaiTapProps></BaiTapProps> */}
      {/* <DemoRedux></DemoRedux>
      <BaiTapDienThoaiRedux></BaiTapDienThoaiRedux> */}
      <BaiTapThuDo />
    </div>
  );
}

export default App;
