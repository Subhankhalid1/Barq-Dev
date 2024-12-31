"use client";

import React, { useEffect } from "react";
import Pagination from "./common/Pagination";

import { useRouter } from "next/navigation";
import CompanyListHeader from "./common/CompanyListHeader";

const MoviesList: React.FC<any> = () => {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/createCompany");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen flex flex-col">
      <CompanyListHeader handleCreate={handleCreate} />
    </div>
  );
};

export default MoviesList;
