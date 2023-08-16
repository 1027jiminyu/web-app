import { useState } from "react";
import "../styles/deviceList.css";
import { MdSearch } from "react-icons/md";

export default function Search({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText); // 검색어 값을 상위 컴포넌트로 전달
  };

  const handleChange = (event) => {
    setSearchText(event.target.value); // 입력 값 업데이트
  };

  //검색창 눌렀을때 깨끗이 비우는 함수
  const handleTextInputPress = () => {
    setSearchText("");
  };

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        value={searchText}
        onChange={handleChange}
        placeholder={"검색"}
      />
      <button onClick={handleSearch} className="searchBtn">
        <MdSearch size={20} color="#2f3b55" />
      </button>
    </div>
  );
}
