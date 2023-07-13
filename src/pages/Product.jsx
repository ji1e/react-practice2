import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product(props) {
  // useParams를 이용하여 url의 id를 가져옴
  const { id } = useParams();

  // option의 value가 클릭 시 변경되므로 state 만들어주기
  const [selected, setSelected] = useState("");

  // select 선택지 변경 시 이벤트가 일어난 값 setSelected 해주기
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        {/* 클릭한 상품의 id에 맞는 상품 정보 가져옴. */}
        {console.log(props.goods)}
        {props.goods.map((item) => {
          if (item.id == id) {
            console.log(id, item.id);
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "44px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <div>{item.name}</div>
                </div>
                <div>
                  <h3>가격: {item.price}</h3>
                  <h3>좋아요: {item.likes}</h3>
                  <h3>구매옵션</h3>
                  <select
                    style={{
                      width: "100px",
                    }}
                    name="optionList"
                    onChange={handleSelect}
                  >
                    {/* 선택하세요는 아무 값이 없어야 하므로 value에 빈 문자열 넣어줌. */}
                    <option value="">선택하세요</option>

                    {/* 상품(props로 받은 goods)의 구매옵션을 반복해서 select의 option으로 넣어줌 */}
                    {item.option.map((itemOption) => {
                      return <option value={itemOption}>{itemOption}</option>;
                    })}
                  </select>
                  <div>구매 옵션 : {selected}</div>
                </div>
              </div>
            );
          } else {
            console.log(item.id, id);
          }
        })}
      </div>
    </>
  );
}
