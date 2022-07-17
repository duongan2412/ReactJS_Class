import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/DemoComponents/ClassComponent';
import FunctionComponent from './Components/DemoComponents/FunctionComponent';
// import Home from './Components/BaiTapLayout/Home';
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
import LifeCycle from './Components/LifeCycle/LifeCycle';
import BaiTapQuanLyNguoidung from './Components/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import HeaderRouter from './Components/HeaderRouter/HeaderRouter';
import PagesNotFound from './Pages/PagesNotFound/PagesNotFound';

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
      {/* <BaiTapThuDo /> */}
      {/* <LifeCycle /> */}
      {/* <BaiTapQuanLyNguoidung /> */}
      <BrowserRouter>
        <HeaderRouter />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/movies-detail' element={<MovieDetail />} />
          <Route path='*' element={<PagesNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
