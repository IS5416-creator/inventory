function StatusBadge({ status }) {
  const getStatusStyle = () => {
    const normalizedStatus = status?.toLowerCase();
    switch(normalizedStatus) {
      case 'completed':
        return {
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb'
        };
      case 'pending':
        return {
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeaa7'
        };
      case 'processing':
        return {
          backgroundColor: '#cfe2ff',
          color: '#084298',
          border: '1px solid #b6d4fe'
        };
      case 'cancelled':
        return {
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb'
        };
      default:
        return {
          backgroundColor: '#e2e3e5',
          color: '#383d41',
          border: '1px solid #d6d8db'
        };
    }
  };

  const style = getStatusStyle();
  const displayStatus = status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase();

  return (
    <span
      className="status-badge"
      style={style}
    >
      {displayStatus}
    </span>
  );
}

export default StatusBadge;
