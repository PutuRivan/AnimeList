"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/Search/${keyword}`);
      searchRef.current.value = "";
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari Anime..."
        className="p-2 rounded-xl w-full border-base-100 bg-white text-black"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        className="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <MagnifyingGlass size={30} fill="black" />
      </button>
    </div>
  );
};

export default InputSearch;
