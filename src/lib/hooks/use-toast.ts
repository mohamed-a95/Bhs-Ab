// Förenklad version av toast-hook
import { useState } from "react";

type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';
type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  variant?: 'default' | 'destructive';
}

// Generera ett unikt ID för varje toast
function generateToastId(): string {
  return `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

// En förenklad version av toast-hooken
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = generateToastId();
    const newToast = { ...toast, id };
    
    setToasts((prevToasts) => [...prevToasts, newToast]);
    
    // Automatiskt ta bort toast efter specificerad duration eller 5000ms som standard
    const duration = toast.duration || 5000;
    setTimeout(() => {
      dismissToast(id);
    }, duration);
    
    return id;
  };

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const toast = (props: Omit<Toast, 'id'>) => {
    return addToast({ ...props, type: 'default' });
  };

  toast.success = (props: Omit<Toast, 'id' | 'type'>) => {
    return addToast({ ...props, type: 'success' });
  };

  toast.error = (props: Omit<Toast, 'id' | 'type'>) => {
    return addToast({ ...props, type: 'error', variant: 'destructive' });
  };

  toast.warning = (props: Omit<Toast, 'id' | 'type'>) => {
    return addToast({ ...props, type: 'warning' });
  };

  toast.info = (props: Omit<Toast, 'id' | 'type'>) => {
    return addToast({ ...props, type: 'info' });
  };

  return { toast, toasts, dismissToast };
}

// Komponentimplementationen är förenklad och fokuserad på funktionaliteten
// I ett riktigt projekt skulle vi implementera ett Toast-komponent med animationer och styling