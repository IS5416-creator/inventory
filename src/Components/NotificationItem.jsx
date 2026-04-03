function NotificationItem({ notification, onMarkAsRead, onDelete }) {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className={`notification ${notification.type}`}>
      <div className="notification-message">{notification.message}</div>
      <div className="notification-time">{formatTime(notification.timestamp)}</div>
      {onMarkAsRead && (
        <button className="btn-secondary" onClick={() => onMarkAsRead()}>
          Mark as Read
        </button>
      )}
      {onDelete && (
        <button className="btn-danger" onClick={() => onDelete()}>
          Delete
        </button>
      )}
    </div>
  );
}

export default NotificationItem;
