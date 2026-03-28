import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { isAuthenticated } from "./services/api";
import { useEffect, useState } from "react";
import { NotificationProvider } from "./context/NotificationContext";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";
import Sidebar from "./Components/Sidebar";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Register from "./pages/Registration";
import ResetPassword from "./pages/ResetPass";
import CustomersPage from "./pages/CustomersPage";
import Terms from "./pages/Terms";
import NotificationsPage from "./pages/NotificationsPage";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      setIsAuth(authStatus);
      setLoading(false);
    };

    checkAuth();
    
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppLayout = ({ children }) => {
  return (
    <div style={{ 
      display: 'flex',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <Sidebar />
      <div style={{
        flex: 1,
        marginLeft: '250px', // Match your sidebar width
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <div style={{
          flex: 1,
          padding: '20px'
        }}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

// Footer Component (Updated - Stay Updated section removed)
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#1a2634',
      color: '#ecf0f1',
      padding: '30px 0 15px',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      marginTop: 'auto', // This pushes footer to bottom
      borderTop: '1px solid #2c3e50'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 30px',
      }}>
        {/* Main Footer Content - 3 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '20px'
        }}>
          
          {/* Column 1: About */}
          <div>
            <h3 style={{
              color: '#fff',
              fontSize: '16px',
              marginBottom: '15px',
              position: 'relative',
              paddingBottom: '8px',
              borderBottom: '2px solid #3498db'
            }}>
              About Us
            </h3>
            <p style={{
              fontSize: '13px',
              lineHeight: '1.5',
              color: '#bdc3c7',
              marginBottom: '15px'
            }}>
              Your trusted order management system for efficient inventory tracking and business growth.
            </p>
            <div style={{
              display: 'flex',
              gap: '10px'
            }}>
              {[
                // { icon: '📘', url: '#', label: 'Facebook' },
                // { icon: '🐦', url: '#', label: 'Twitter' },
                // { icon: '📷', url: '#', label: 'Instagram' }
              ].map(social => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  style={{
                    color: '#bdc3c7',
                    fontSize: '16px',
                    textDecoration: 'none',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#2c3e50',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#3498db';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2c3e50';
                    e.target.style.color = '#bdc3c7';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{
              color: '#fff',
              fontSize: '16px',
              marginBottom: '15px',
              position: 'relative',
              paddingBottom: '8px',
              borderBottom: '2px solid #3498db'
            }}>
              Quick Links
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px'
            }}>
              {[
                { to: "/dashboard", text: "Dashboard" },
                { to: "/orders", text: "Orders" },
                { to: "/products", text: "Products" },
                { to: "/customers", text: "Customers" }
              ].map(link => (
                <Link 
                  key={link.to}
                  to={link.to}
                  style={{
                    color: '#bdc3c7',
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'color 0.3s',
                    padding: '4px 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#3498db'}
                  onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}
                >
                  › {link.text}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 style={{
              color: '#fff',
              fontSize: '16px',
              marginBottom: '15px',
              position: 'relative',
              paddingBottom: '8px',
              borderBottom: '2px solid #3498db'
            }}>
              Contact
            </h3>
            <div style={{ fontSize: '13px', color: '#bdc3c7' }}>
              <p style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📍</span>
                Addis Ababa, Ethiopia
              </p>
              <p style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>📞</span>
                +251 973132218
                +251 710497171
              </p>
              <p style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✉️</span>
                israel.is5416@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div style={{
          borderTop: '1px solid #2c3e50',
          paddingTop: '15px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#95a5a6'
        }}>
          <div>
            © {currentYear} Israel Alazar. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <Link 
              to="/privacy"
              style={{
                color: '#95a5a6',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '12px'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#95a5a6'}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              style={{
                color: '#95a5a6',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '12px'
              }}
              onMouseEnter={(e) => e.target.style.color = '#3498db'}
              onMouseLeave={(e) => e.target.style.color = '#95a5a6'}
            >
              Terms of service
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const isAuth = isAuthenticated();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            !isAuth ? <Login /> : <Navigate to="/orders" replace />
          } 
        />
        <Route 
          path="/reset" 
          element={
            !isAuth ? <ResetPassword /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/register" 
          element={
            !isAuth ? <Register /> : <Navigate to="/orders" replace />
          } 
        />

        {/* Protected Routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        
        <Route
          path="/dashboard"
          element={
            <Navigate to="/" replace />
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <AppLayout>
                <NotificationsPage />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <Orders />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <Privacy />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <Terms />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/customers" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <CustomersPage />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/create-order" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <CreateOrder />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/products" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <Products />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/create" 
          element={
            <ProtectedRoute>
              <AppLayout>
                <CreateProduct />
              </AppLayout>
            </ProtectedRoute>
          } 
        />
        
        {/* Catch-all route */}
        <Route 
          path="*" 
          element={
            <Navigate to={isAuth ? "/orders" : "/login"} replace />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
