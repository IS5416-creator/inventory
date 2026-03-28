import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getOrders } from '../services/api';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchUnreadNotifications = useCallback(async () => {
    try {
      const orders = await getOrders();
      // Count pending orders as notifications
      const pendingCount = orders.filter(order => order.status === 'pending').length;
      setUnreadCount(pendingCount);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  }, []);

  useEffect(() => {
    fetchUnreadNotifications();
    // Refresh every 30 seconds
    const interval = setInterval(fetchUnreadNotifications, 30000);
    return () => clearInterval(interval);
  }, [fetchUnreadNotifications]);

  const markNotificationsAsRead = useCallback(() => {
    setUnreadCount(0);
  }, []);

  const incrementUnread = useCallback(() => {
    setUnreadCount(prev => prev + 1);
  }, []);

  const decrementUnread = useCallback(() => {
    setUnreadCount(prev => Math.max(0, prev - 1));
  }, []);

  return (
    <NotificationContext.Provider 
      value={{
        unreadCount,
        fetchUnreadNotifications,
        markNotificationsAsRead,
        incrementUnread,
        decrementUnread
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
