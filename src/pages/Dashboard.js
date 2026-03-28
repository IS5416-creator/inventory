import { useEffect, useState } from "react";
import { getOrders } from "../services/api";
import SalesChart from "../Components/SalesChart";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      setTotalOrders(orders.length);

      const salesTotal = orders.reduce((sum, order) => {
        const orderTotal = parseFloat(order.total) || 0;
        return sum + orderTotal;
      }, 0);

      setTotalSales(salesTotal);

      const uniqueCustomers = new Set();
      orders.forEach(order => {
        if (order.customerName) {
          uniqueCustomers.add(order.customerName);
        }
      });

      setTotalCustomers(uniqueCustomers.size);
    } else {
      setTotalOrders(0);
      setTotalSales(0);
      setTotalCustomers(0);
    }
  }, [orders]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const ordersData = await getOrders();
      setOrders(ordersData);
    } catch (err) {
      setError("Failed to load orders");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <h2>Dashboard</h2>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h2>Dashboard</h2>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={fetchOrders}>Retry</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-color)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "var(--shadow-lg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-md)";
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "var(--text-secondary)" }}>
            Total Orders
          </h3>
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: 0,
              color: "var(--primary-color)"
            }}
          >
            {totalOrders}
          </p>
          <p
            style={{
              color: "var(--text-tertiary)",
              margin: "5px 0 0 0",
              fontSize: "0.9rem"
            }}
          >
            All time orders
          </p>
        </div>

        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-color)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "var(--shadow-lg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-md)";
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "var(--text-secondary)" }}>
            Total Sales
          </h3>
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: 0,
              color: "var(--success-color)"
            }}
          >
            {totalSales.toFixed(2)} ETB
          </p>
          <p
            style={{
              color: "var(--text-tertiary)",
              margin: "5px 0 0 0",
              fontSize: "0.9rem"
            }}
          >
            Gross revenue
          </p>
        </div>

        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-color)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "var(--shadow-lg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-md)";
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "var(--text-secondary)" }}>
            Unique Customers
          </h3>
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              margin: 0,
              color: "var(--secondary-color)"
            }}
          >
            {totalCustomers}
          </p>
          <p
            style={{
              color: "var(--text-tertiary)",
              margin: "5px 0 0 0",
              fontSize: "0.9rem"
            }}
          >
            Unique customers
          </p>
        </div>
      </div>

      {totalOrders > 0 && totalCustomers > 0 && (
        <div
          style={{
            backgroundColor: "rgba(14, 165, 233, 0.1)",
            border: "1px solid var(--info-light)",
            borderLeft: "4px solid var(--info-color)",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 5px 0",
                fontWeight: "bold",
                color: "var(--info-dark)"
              }}
            >
              Business Insights
            </p>
            <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              <strong>Average Order Value:</strong>{" "}
              {(totalSales / totalOrders).toFixed(2)} ETB •
              <strong style={{ marginLeft: "15px" }}>
                Orders per Customer:
              </strong>{" "}
              {(totalOrders / totalCustomers).toFixed(1)}
            </p>
          </div>
        </div>
      )}

      {totalOrders > 0 && (
        <div style={{ marginBottom: "40px", padding: "20px", background: "var(--bg-primary)", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
          <h3 style={{ marginTop: 0 }}>Sales Analytics</h3>
          <SalesChart orders={orders} />
        </div>
      )}

      <div style={{
        background: "var(--bg-primary)",
        borderRadius: "12px",
        border: "1px solid var(--border-color)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)"
      }}>
        <h3 style={{ margin: "0", padding: "20px 20px 0" }}>Recent Orders</h3>
        <table
          cellPadding="14"
          cellSpacing="0"
          width="100%"
          style={{ marginTop: 0, borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-color)" }}>
              <th style={{ textAlign: "left", color: "var(--text-primary)", fontWeight: "600" }}>Order #</th>
              <th style={{ textAlign: "left", color: "var(--text-primary)", fontWeight: "600" }}>Customer Name</th>
              <th style={{ textAlign: "left", color: "var(--text-primary)", fontWeight: "600" }}>Total Price</th>
              <th style={{ textAlign: "left", color: "var(--text-primary)", fontWeight: "600" }}>Status</th>
              <th style={{ textAlign: "left", color: "var(--text-primary)", fontWeight: "600" }}>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)" }}>
                  No orders yet
                </td>
              </tr>
            )}

            {orders.slice(0, 10).map((order, idx) => (
              <tr
                key={order._id || order.id}
                style={{
                  borderBottom: "1px solid var(--border-color)",
                  background: idx % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-primary)"
                }}
              >
                <td style={{ color: "var(--text-primary)" }}>#{order.orderNumber}</td>
                <td style={{ color: "var(--text-primary)" }}>{order.customerName}</td>
                <td style={{ color: "var(--primary-color)", fontWeight: "600" }}>{order.total?.toFixed(2)} ETB</td>
                <td>
                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      backgroundColor:
                        order.status === "completed"
                          ? "rgba(16, 185, 129, 0.15)"
                          : order.status === "processing"
                          ? "rgba(14, 165, 233, 0.15)"
                          : order.status === "cancelled"
                          ? "rgba(239, 68, 68, 0.15)"
                          : "rgba(99, 102, 241, 0.15)",
                      color:
                        order.status === "completed"
                          ? "var(--success-dark)"
                          : order.status === "processing"
                          ? "var(--info-dark)"
                          : order.status === "cancelled"
                          ? "var(--danger-dark)"
                          : "var(--primary-dark)"
                    }}
                  >
                    {order.status?.charAt(0).toUpperCase() +
                      order.status?.slice(1)}
                  </span>
                </td>
                <td style={{ color: "var(--text-secondary)" }}>
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
