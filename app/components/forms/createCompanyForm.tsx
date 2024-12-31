"use client";

import React, { useState } from "react";
import UploadIcon from "../../assets/svgs/FileUploadIcon";

const CreateCompany: React.FC = () => {
  const [data, setData] = useState({
    title: "",
    year: "",
    image: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(`Field Updated: ${name} = ${value}`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setData((prev) => ({
        ...prev,
        image: e.target.files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit Triggered");
    if (!data.title || !data.year || !data.image) {
      alert("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      console.log("Submitting Data:", data);
      
    } catch (error: any) {
      console.error("Error creating movie:", error.message);
      alert(error.message || "Failed to create movie");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setData({
      title: "",
      year: "",
      image: null,
    });
    console.log("Form Reset");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl ml-12 mb-10">
        <h1 className="lg:text-[48px] md:text-xl sm:text-lg text-xl font-semibold text-[#FFFFFF]">
          Create a new Company
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap w-full justify-center max-w-6xl rounded-lg p-8 gap-x-28"
      >
        {/* File Input */}
        <div className="border border-dashed w-[473px] h-[504px] relative flex items-center justify-center">
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="cursor-pointer absolute opacity-0 w-full h-full"
          />
          <div className="text-center text-white">
            <div className="flex justify-center items-center">
              <UploadIcon />
            </div>
            <p>Drop an company logo here</p>
          </div>
        </div>

        {/* Text Fields */}
        <div className="w-96 space-y-4 mt-5">
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Company name"
            className="block w-[362px] h-[45px] px-3 py-2 rounded-[10px] bg-[#224957]"
          />
          <input
            type="number"
            name="year"
            value={data.year}
            onChange={handleChange}
            placeholder="Founded year"
            className="block w-[216px] h-[45px] px-3 py-2 rounded-[10px] bg-[#224957]"
          />
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 border border-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 rounded text-white"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;
