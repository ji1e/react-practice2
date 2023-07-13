import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        {/* searchParams를 이용하여 URL에 따라 상품을 정렬 */}
        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
        >
          가격순 정렬
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* 여름 추천 상품 리스트 */}
          {props.goods.map((item) => {
            return (
              <Link to={`/products/${item.id}`} key={item.id}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
