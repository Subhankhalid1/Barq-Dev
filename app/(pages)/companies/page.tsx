"use client";

import List from "@/app/components/companies/CompaniesList";

const Page: React.FC = () => {
  const companies = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `companies ${i + 1}`,
    year: `20${10 + (i % 10)}`,
  }));

  return (
    <>
      <List companies={companies} totalPages={0} />
    </>
  );
};

export default Page;
