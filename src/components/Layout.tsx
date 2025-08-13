import React, { useState } from 'react';
import {
  Home, Receipt, Users, CreditCard, BarChart3, Activity, HardDrive,
  Settings, LogOut, Menu, X, Moon, Sun, TrendingUp, ChevronLeft, Shield,
  ChevronRight, Bell, Calculator
} from 'lucide-react';
import { User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { clsx } from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, number: '01' },
  { id: 'receipts', label: 'Receipts', icon: Receipt, number: '02' },
  { id: 'clients', label: 'Clients', icon: Users, number: '03' },
  { id: 'vault', label: 'Secure Vault', icon: Shield, number: '04' },
  { id: 'expenses', label: 'Expenses', icon: CreditCard, number: '05' },
  { id: 'employees', label: 'Employees', icon: Users, number: '06' },
  { id: 'tax-calculator', label: 'Tax Calculator', icon: Calculator, number: '07' },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp, number: '08' },
  { id: 'notifications', label: 'Notifications', icon: Bell, number: '09' },
  { id: 'activity', label: 'Activity Log', icon: Activity, number: '10' },
  { id: 'backup', label: 'Backup/Restore', icon: HardDrive, number: '11' },
];

export function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem('sidebarCollapsed') === 'true';
  });
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  const [themeTransition, setThemeTransition] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  React.useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await logout();
    }
  };

  const toggleDarkMode = () => {
    setThemeTransition(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setTimeout(() => setThemeTransition(false), 300);
    }, 150);
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={clsx("app-content flex h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500", themeTransition && "animate-pulse")}>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg text-gray-900 dark:text-white transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={clsx(
        "z-40 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 shadow-xl transform transition-all duration-300 ease-in-out h-full flex flex-col flex-shrink-0",
        sidebarOpen ? "fixed inset-y-0 left-0" : "fixed inset-y-0 left-0 -translate-x-full",
        "lg:translate-x-0 lg:relative",
        sidebarCollapsed ? "lg:w-20" : "lg:w-80",
        "w-64" // Always full width on mobile
      )}>
          {/* Header */}
          <div className={clsx("border-b border-blue-500/20 dark:border-gray-700/50", sidebarCollapsed ? "p-3" : "p-6")}>
            <div className="flex items-center justify-between">
              {!sidebarCollapsed && (
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-50 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Arkive</h1>
                    <p className="text-base text-blue-100 mt-1">Tax Management</p>
                  </div>
                </div>
              )}
              {sidebarCollapsed && (
                <div className="flex items-center justify-center w-full mx-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-50 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
              )}
              <button
                onClick={toggleSidebarCollapse}
                className="hidden lg:block p-2 rounded-lg hover:bg-white/10 text-blue-100 hover:text-white transition-all duration-200 text-lg"
              >
                <div className={clsx("transition-transform duration-300", sidebarCollapsed ? "rotate-180" : "rotate-0")}>
                  {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={clsx(
                    "w-full flex items-center text-left rounded-2xl transition-all duration-300 sidebar-item-premium",
                    sidebarCollapsed ? "px-2 py-4 justify-center" : "px-4 py-3",
                    currentPage === item.id
                      ? "bg-white/20 text-white shadow-xl backdrop-blur-sm border border-white/20 scale-105"
                      : "text-blue-100 hover:bg-white/15 hover:text-white hover:scale-102"
                  )}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <Icon size={sidebarCollapsed ? 24 : 22} className={clsx(
                    "transition-all duration-200 flex-shrink-0",
                    sidebarCollapsed ? "mx-auto" : "mr-3",
                    currentPage === item.id ? "text-white drop-shadow-sm" : ""
                  )} />
                  {!sidebarCollapsed && (
                    <span className="font-medium text-base whitespace-nowrap">{item.label}</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className={clsx("border-t border-blue-500/30 dark:border-gray-700/50 mt-auto backdrop-blur-sm", sidebarCollapsed ? "p-2" : "p-4")}>
            {/* Action Buttons - Moved above user info */}
            <div className={clsx("mb-4", sidebarCollapsed ? "flex flex-col items-center space-y-2" : "flex items-center justify-between")}>
              <button
                onClick={toggleDarkMode}
                className={clsx("rounded-xl bg-white/15 hover:bg-white/25 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20", sidebarCollapsed ? "p-2" : "p-3")}
                title="Toggle Dark Mode"
              >
                <div className={clsx("transition-all duration-300", themeTransition && "animate-spin")}>
                  {darkMode ? <Sun size={sidebarCollapsed ? 18 : 20} className="text-yellow-300" /> : <Moon size={sidebarCollapsed ? 18 : 20} className="text-blue-100" />}
                </div>
              </button>
              <button
                onClick={() => onPageChange('settings')}
                className={clsx("text-blue-100 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/15 hover:scale-110 backdrop-blur-sm border border-white/20", sidebarCollapsed ? "p-2" : "p-3")}
                title="Settings"
              >
                <Settings size={sidebarCollapsed ? 18 : 20} />
              </button>
              <button
                onClick={handleLogout}
                className={clsx("text-blue-100 hover:text-red-300 transition-all duration-300 rounded-xl hover:bg-red-500/30 hover:scale-110 backdrop-blur-sm border border-white/20", sidebarCollapsed ? "p-2" : "p-3")}
                title="Logout"
              >
                <LogOut size={sidebarCollapsed ? 18 : 20} />
              </button>
            </div>
            
            {!sidebarCollapsed ? (
              <>
                {/* User Info */}
                <div className="flex items-center">
                  <div>
                    <p className="text-base font-bold text-white">{user?.username}</p>
                    <p className="text-sm text-blue-200 capitalize flex items-center font-medium">
                      {user?.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                      {user?.role}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              /* User info for collapsed sidebar */
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            )}
          </div>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 h-full">
        <div className="p-6 lg:p-8 w-full min-h-full">
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}