import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout1 from "../components/layouts/Layout1";
import Layout2 from "../components/layouts/Layout2";
import Layout3 from "../components/layouts/Layout3";
import Layout4 from "../components/layouts/Layout4";
import Layout5 from "../components/layouts/Layout5";
import { useAuth } from "../contexts/AuthContext";

const layoutIdToComponent = {
  modern: Layout1,
  classic: Layout2,
  vibrant: Layout3,
  elegant: Layout4,
  structured: Layout5,
  // Map other ids (elegant, structured, dynamic) when available
};

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

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

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleEdit = () => {
    setMenuOpen(false);
    navigate("/create-profile", { state: { isEditMode: true } });
  };

  const handleDelete = () => {
    setMenuOpen(false);
    // Placeholder: integrate API deletion here
    if (confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      navigate("/");
    }
  };

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate("/login");
  };

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed top-20 right-4 z-[100] w-10 h-10 rounded-full glassmorphism border border-border/60 grid place-items-center shadow-md hover:scale-105 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-foreground/90">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-28 right-4 z-[100] w-48 glassmorphism border border-border/60 rounded-xl shadow-xl overflow-hidden"
        >
          <button
            className="w-full text-left px-4 py-3 hover:bg-foreground/5 transition-colors text-sm"
            onClick={handleEdit}
          >
            Edit Profile
          </button>
          <button
            className="w-full text-left px-4 py-3 hover:bg-foreground/5 transition-colors text-sm text-red-600"
            onClick={handleDelete}
          >
            Delete Profile
          </button>
          <div className="h-px bg-border/60" />
          <button
            className="w-full text-left px-4 py-3 hover:bg-foreground/5 transition-colors text-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      <SelectedLayoutComponent />
    </>
  );
};

export default User;


