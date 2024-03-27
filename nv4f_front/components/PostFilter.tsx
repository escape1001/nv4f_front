"use client";
import { useEffect, useState } from "react";


export default function Postfilter({setFilterQuery}:any) {
  const [filterList, setFilterList] = useState<FilterListType|[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<LocationType|[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityType|[]>([]);

  const getFilterList = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "archive/post/filter_list/";
    const response = await fetch(url);
    const data = await response.json();
    
    return setFilterList(data);
  };

  const getFilterQuery = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const filter_form = document.querySelector(".filter-form") as HTMLFormElement; // Cast filter_form to HTMLFormElement
    const form_data = new FormData(filter_form);
    const category = form_data.getAll("category").length > 0 ? "category=" + form_data.getAll("category") : "";
    const member = form_data.getAll("member").length > 0 ? "member=" + form_data.getAll("member") : "";
    const country = form_data.get("country") ? "country=" + form_data.get("country") : "";
    const city = form_data.get("city") ? "city=" + form_data.get("city") : "";
    const district = form_data.get("district") ? "district=" + form_data.get("district") : "";
    

    const filter_query_text = "?" + [category, member, country, city, district].filter(Boolean).join("&");
    setFilterQuery(filter_query_text);
  };

  const changeLocation = (type:string, value:string) => {
    if (type === "country") {
      const selected_country = (filterList as FilterListType).locations.filter((location:LocationType) => location.name === value)
      setSelectedCountry(selected_country[0]);
    } else if (type === "city") {
      const selected_city = (selectedCountry as LocationType).city.filter((city:CityType) => city.name === value);
      setSelectedCity(selected_city?.[0]); // Add null check
    }
  };

  useEffect(() => {
    getFilterList();
  }, []);

  return (
    <form className="filter-form" onSubmit={getFilterQuery}>
      <ul className="flex gap-5">
        <b>카테고리</b>
        {
          (filterList as FilterListType)?.categories?.map((category:DefaultNameType, index:number) => (
            <li key={index}>
              <label htmlFor={category.name}>{category.kr_name}</label>
              <input id={category.name} key={index} type="checkbox" name="category" value={category.name}/>
            </li>
          ))
        }
      </ul>

      <ul className="flex gap-5">
        <b>멤버</b>
        {
          (filterList as FilterListType)?.members?.map((member:DefaultNameType, index:number) => (
            <li key={index}>
              <label htmlFor={member.name}>{member.kr_name}</label>
              <input id={member.name} key={index} type="checkbox" name="member" value={member.name}/>
            </li>
          ))
        }
      </ul>

      {/* 요거 클라이언트 컴포넌트로 빼서 useState로 관리해야함 */}
      <div>
        <b>Location</b>
        <select name="country" onChange={(e)=>{changeLocation("country", e.target.value)}}>
          <option value="" disabled selected>국가</option>
          {
            (filterList as FilterListType).locations?.map((location:LocationType, index:number) => (
              <option key={index} value={location.name}>{location.kr_name}</option>
            ))
          }
        </select>

        {
          (selectedCountry as LocationType).city?.length > 0 &&
          <select name="city" onChange={(e)=>{changeLocation("city", e.target.value)}}>
            <option value="" disabled selected>도시</option>
            {
              (selectedCountry as LocationType).city.map((city:CityType, index:number) => (
                <option key={index} value={city.name}>{city.kr_name}</option>
              ))
            }
          </select>
        }

        {
          (selectedCity as CityType).district?.length > 0 &&
          <select name="district">
            <option value="" disabled selected>세부 지역</option>
            {
              (selectedCity as CityType).district.map((district:DefaultNameType, index:number) => (
                <option key={index} value={district.name}>{district.kr_name}</option>
              ))
            }
          </select>
        }
      </div>
      <button>필터 적용하기</button>
    </form>
  );
}
