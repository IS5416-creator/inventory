function NotificationItem({ notification, onMarkAsRead, onDelete }) {

  const formatTime = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const getNotificationIcon = () => {
    switch (notification.type) {
      case "new_order":
        return "📦";
      case "order_update":
        return "📝";
      case "low_stock":
        return "⚠️";
      case "bulk_order":
        return "📦📦";
      case "achievement":
        return "🎉";
      default:
        return "🔔";
    }
  };

  const getPriorityColor = () => {
    switch (notification.priority) {
      case "high":
        return "#ff4444";
      case "medium":
        return "#ff9800";
      case "info":
        return "#2196f3";
      default:
        return "#999";
    }
  };

  return (
    <div
      className={`notification-item ${notification.type} ${notification.read ? "read" : "unread"}`}
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: "16px",
        backgroundColor: notification.read ? "#f8f9fa" : "#fff",
        border: `2px solid ${notification.read ? "#e5e7eb" : "#" + getPriorityColor().slice(1)}`,
        borderLeft: `4px solid ${getPriorityColor()}`,
        borderRadius: "8px",
        marginBottom: "12px",
        gap: "12px",
        transition: "all 0.3s ease"
      }}
    >
      <div style={{ fontSize: "24px", minWidth: "32px", textAlign: "center" }}>
        {getNotificationIcon()}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 600,
          marginBottom: "4px",
          color: "#333"
        }}>
          {notification.title}
        </div>
        <div style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "8px",
          lineHeight: "1.4"
        }}>
          {notification.message}
        </div>
        <div style={{
          fontSize: "12px",
          color: "#999"
        }}>
          {formatTime(notification.timestamp)}
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {!notification.read && onMarkAsRead && (
          <button
            onClick={onMarkAsRead}
            style={{
              padding: "6px 12px",
              fontSize: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
          >
            Mark Read
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            style={{
              padding: "6px 12px",
              fontSize: "12px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#c82333"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default NotificationItem;
