import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main(props) {
  const navigate = useNavigate();

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              alert("이동하시겠습니까?");
              navigate("/products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          {/* 여름 추천 상품 리스트로 이동 */}
          <Link to="/products">더보기</Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* 상품들 리스트 : 상품 클릭 시 해당 상품의 상세페이지로 이동 */}
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
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
