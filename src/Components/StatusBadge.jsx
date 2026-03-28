function StatusBadge({ status }) {
  const getStatusStyle = () => {
    const normalizedStatus = status ? status.toLowerCase() : '';
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
      case 'cancelled':
        return {
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb'
        };
      case 'processing':
        return {
          backgroundColor: '#d1ecf1',
          color: '#0c5460',
          border: '1px solid #bee5eb'
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
  const displayStatus = status ? status.charAt(0).toUpperCase() + status.slice(1) : status;

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
