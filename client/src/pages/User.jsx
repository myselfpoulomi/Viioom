import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout1 from "../components/layouts/Layout1";

const layoutIdToComponent = {
  modern: Layout1,
  // Map other ids (classic, vibrant, elegant, structured, dynamic) when available
};

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedLayoutId = useMemo(() => {
    return (
      (location.state && location.state.selectedLayoutId) ||
      sessionStorage.getItem("selectedLayoutId") ||
      null
    );
  }, [location.state]);

  useEffect(() => {
    if (!selectedLayoutId) {
      navigate("/layout-selection", { replace: true });
    }
  }, [navigate, selectedLayoutId]);

  if (!selectedLayoutId) return null;

  const SelectedLayoutComponent = layoutIdToComponent[selectedLayoutId] || Layout1;

  return <SelectedLayoutComponent />;
};

export default User;


