import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

// nanoid : 새로고침 할 때마다 id가 바뀌어서 로컬스토리지 쓰던가 제이슨서버 쓰거나 디비를 만들거나 아예 고정하기!!
import { nanoid } from "nanoid";

import Layout from "./common/Layout";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  // 상품들의 초기값 설정.
  // 데이터가 변해서 다시 그려지면 useState 쓰기 : 지금은 안변함. 나중에 변할 예정이라 변수 안쓰고 useState 사용함.
  const [goods, setGoods] = useState([
    // select의 option에는 문자열만 들어갈 수 있음
    { id: 1, name: "멋진 바지", price: 20000, option: ["28", "30", "32"], likes: 100 },
    { id: 2, name: "멋진 셔츠", price: 10000, option: ["small", "medium", "large"], likes: 200 },
    { id: 3, name: "멋진 신발", price: 30000, option: ["230", "240", "250", "260", "270"], likes: 300 },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 헤더와 푸터는 페이지마다 반복되어 Layout으로 만들고 내용을 감싸줌 */}
        <Route element={<Layout />}>
          {/* goods를 props로 메인페이지, 상품페이지, 상품 상세페이지에 내려줌 */}
          <Route path="/" element={<Main goods={goods} />} />
          <Route path="/products" element={<Products goods={goods} />} />
          <Route path="/products/:id" element={<Product goods={goods} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        {/* 없는 URL로 접근할 때 연결되는 페이지 */}
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
