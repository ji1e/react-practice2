import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
          }}
        >
          로고
        </Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link
            to="/signin"
            style={{
              color: "white",
            }}
          >
            로그인
          </Link>
          <Link
            to="/signup"
            style={{
              color: "white",
            }}
          >
            회원가입
          </Link>
        </div>
      </header>

      <Outlet />

      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          // 아래 css 추가
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}
