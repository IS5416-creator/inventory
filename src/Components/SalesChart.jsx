import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

function SalesChart({ orders = [] }) {
  const chartData = useMemo(() => {
    if (!orders || orders.length === 0) {
      return {
        dailySales: [],
        statusBreakdown: [],
        monthlyTrend: []
      };
    }

    // Calculate daily sales
    const dailySalesMap = {};
    const statusMap = {};

    orders.forEach(order => {
      // Daily sales
      const date = order.createdAt ? new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Unknown';
      dailySalesMap[date] = (dailySalesMap[date] || 0) + (order.total || 0);

      // Status breakdown
      const status = order.status || 'unknown';
      statusMap[status] = (statusMap[status] || 0) + 1;
    });

    const dailySales = Object.entries(dailySalesMap).map(([date, total]) => ({
      date,
      sales: parseFloat(total.toFixed(2))
    })).slice(-7); // Last 7 days

    const statusBreakdown = Object.entries(statusMap).map(([status, count]) => ({
      name: status.charAt(0).toUpperCase() + status.slice(1),
      value: count
    }));

    return {
      dailySales,
      statusBreakdown,
      monthlyTrend: dailySales
    };
  }, [orders]);

  const COLORS = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#ef4444'];

  if (!chartData.dailySales.length && !chartData.statusBreakdown.length) {
    return (
      <div style={{ padding: '30px', textAlign: 'center', color: '#999' }}>
        <p>No sales data available. Create orders to see charts.</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Sales Trend (Last 7 Days)</h3>
        <div style={{
          background: 'var(--bg-primary)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData.dailySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="var(--primary-color)" 
                strokeWidth={3}
                dot={{ fill: 'var(--primary-color)', r: 5 }}
                activeDot={{ r: 7 }}
                name="Sales (ETB)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Orders by Status</h3>
          <div style={{
            background: 'var(--bg-primary)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData.statusBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip 
                  contentStyle={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)'
                  }}
                />
                <Bar dataKey="value" fill="var(--primary-color)" radius={[8, 8, 0, 0]} name="Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600' }}>Order Distribution</h3>
          <div style={{
            background: 'var(--bg-primary)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData.statusBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.statusBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesChart;
