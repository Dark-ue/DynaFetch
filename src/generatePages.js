import React from "react";
import { Routes, Route } from "react-router-dom";
import DynamicComponent from "./DynamicComponent";
import { fetchJSONFiles } from "./DynamicFetcher";

export async function generatePages(setRoutes) {
  const jsonData = await fetchJSONFiles();
  setRoutes(jsonData);
}

export function RenderDynamicRoutes(jsonData) {
  return jsonData.map((page) => (
    <Route key={page.fileName} path={`/${page.fileName}`} element={<DynamicComponent data={page.content} />} />
  ));
}
