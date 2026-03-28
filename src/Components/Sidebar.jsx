import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { authService } from "../services/auth";
import { useDarkMode } from "../hooks/useDarkMode";
import { NotificationContext } from "../context/NotificationContext";
import "../styles/main.css";

function Sidebar() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { unreadCount } = useContext(NotificationContext) || {};

  const isActive = (path) => {
    return location.pathname === path;
  };

  const user = authService.getCurrentUser();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    authService.logout();
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">🛒</span>
        <span className="logo-text">Inventory</span>
      </div>
      
      <div className="nav-menu">
        <Link
          to="/"
          className={`nav-link ${isActive("/") ? "active" : ""}`}
        >
          <span className="nav-icon">📊</span>
          <span className="nav-label">Dashboard</span>
        </Link>

        <Link
          to="/products"
          className={`nav-link ${isActive("/products") ? "active" : ""}`}
        >
          <span className="nav-icon">📦</span>
          <span className="nav-label">Products</span>
        </Link>

        <Link
          to="/customers"
          className={`nav-link ${isActive("/customers") ? "active" : ""}`}
        >
          <span className="nav-icon">👥</span>
          <span className="nav-label">Customers</span>
        </Link>

        <Link
          to="/orders"
          className={`nav-link ${isActive("/orders") ? "active" : ""}`}
        >
          <span className="nav-icon">📋</span>
          <span className="nav-label">Orders</span>
        </Link>

        <Link
          to="/notifications"
          className={`nav-link ${isActive("/notifications") ? "active" : ""}`}
          style={{ position: "relative" }}
        >
          <span className="nav-icon">🔔</span>
          <span className="nav-label">Notifications</span>
          {unreadCount > 0 && (
            <span style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              background: "var(--danger-color)",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: "700"
            }}>
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}
        </Link>

        <Link
          to="/create"
          className={`nav-link ${isActive("/create") ? "active" : ""}`}
        >
          <span className="nav-icon">➕</span>
          <span className="nav-label">Create Product</span>
        </Link>
        
        <Link 
          to="/create-order" 
          className="create-order-btn"
        >
          <span className="btn-icon">⚡</span>
          <span className="btn-label">Create Order</span>
        </Link>
      </div>
      
      <div className="sidebar-footer">
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="toggle-icon">{isDarkMode ? '☀️' : '🌙'}</span>
          <span className="toggle-label">{isDarkMode ? 'Light' : 'Dark'}</span>
        </button>

        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <div className="user-name">{user?.name || user?.email || 'User'}</div>
            <div className="user-role">Admin Account</div>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-btn">
          <span className="logout-icon">🚪</span>
          <span className="logout-label">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
