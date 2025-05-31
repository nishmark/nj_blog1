"use client";
import React from "react";
import { useRouter } from "next/navigation";

function CreateHeader() {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-2xl font-semibold text-gray-900">New Blog</h3>
    </div>
  );
}

export default CreateHeader;
