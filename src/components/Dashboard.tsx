import React from 'react';
import { DollarSign, CreditCard, Users, Activity, TrendingUp, Calendar, Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full p-6 lg:p-8 space-y-8 lg:space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, admin!</h1>
          <p className="text-gray-600 mt-2">Here's your business overview for today</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-base">TOTAL REVENUE</p>
              <p className="text-3xl font-bold mt-2">₹58,998.99</p>
              <p className="text-blue-100 text-sm mt-1">4 receipts</p>
              <button className="text-blue-100 text-sm mt-2 flex items-center hover:text-white transition-colors">
                <TrendingUp size={16} className="mr-1" />
                View all receipts
              </button>
            </div>
            <DollarSign size={32} className="text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-base">TOTAL EXPENSES</p>
              <p className="text-3xl font-bold mt-2">₹45,042</p>
              <p className="text-red-100 text-sm mt-1">2 entries</p>
              <button className="text-red-100 text-sm mt-2 flex items-center hover:text-white transition-colors">
                <CreditCard size={16} className="mr-1" />
                Manage expenses
              </button>
            </div>
            <CreditCard size={32} className="text-red-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-base">ACTIVE CLIENTS</p>
              <p className="text-3xl font-bold mt-2">4</p>
              <p className="text-green-100 text-sm mt-1">of 5 total</p>
              <button className="text-green-100 text-sm mt-2 flex items-center hover:text-white transition-colors">
                <Users size={16} className="mr-1" />
                View all clients
              </button>
            </div>
            <Users size={32} className="text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-base">EMPLOYEES</p>
              <p className="text-3xl font-bold mt-2">1</p>
              <p className="text-purple-100 text-sm mt-1">0 present today</p>
              <button className="text-purple-100 text-sm mt-2 flex items-center hover:text-white transition-colors">
                <Activity size={16} className="mr-1" />
                Manage staff
              </button>
            </div>
            <Activity size={32} className="text-purple-200" />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[200px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Net Profit</h3>
            <TrendingUp className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-green-600">₹13,956.99</p>
          <p className="text-gray-600 text-sm mt-2">Profit Margin: 23.7%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[200px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">This Month</h3>
            <Calendar className="text-blue-500" size={24} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Income:</span>
              <span className="font-semibold text-green-600">₹49,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Expenses:</span>
              <span className="font-semibold text-red-600">₹45,042</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[200px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Notifications</h3>
            <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
              0
            </div>
          </div>
          <p className="text-gray-600">All caught up!</p>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">6-Month Revenue Trend</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-8 h-16 rounded-t"></div>
              <span className="text-xs text-gray-600 mt-2">Mar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-8 h-20 rounded-t"></div>
              <span className="text-xs text-gray-600 mt-2">Apr</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-8 h-24 rounded-t"></div>
              <span className="text-xs text-gray-600 mt-2">May</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-8 h-32 rounded-t"></div>
              <span className="text-xs text-gray-600 mt-2">Jun</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-8 h-48 rounded-t"></div>
              <span className="text-xs text-gray-600 mt-2">Jul</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-500 w-8 h-44 rounded-t"></div>
              <span className="text-xs text-gray-600 mt-2">Aug</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Profit Analysis</h3>
          <div className="h-64 flex items-end justify-center">
            <div className="w-full h-full bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <p className="text-gray-600">Profit trend visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[200px]">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          <Plus className="inline mr-2" size={24} />
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-6 text-left transition-colors">
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 rounded-lg p-2 mr-3">
                <DollarSign className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Add Receipt</h4>
                <p className="text-sm text-gray-600">Record new payment</p>
              </div>
            </div>
          </button>

          <button className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-6 text-left transition-colors">
            <div className="flex items-center mb-2">
              <div className="bg-green-500 rounded-lg p-2 mr-3">
                <Users className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Add Client</h4>
                <p className="text-sm text-gray-600">New client profile</p>
              </div>
            </div>
          </button>

          <button className="bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg p-6 text-left transition-colors">
            <div className="flex items-center mb-2">
              <div className="bg-red-500 rounded-lg p-2 mr-3">
                <CreditCard className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Add Expense</h4>
                <p className="text-sm text-gray-600">Record expense</p>
              </div>
            </div>
          </button>

          <button className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-6 text-left transition-colors">
            <div className="flex items-center mb-2">
              <div className="bg-purple-500 rounded-lg p-2 mr-3">
                <Activity className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Add Employee</h4>
                <p className="text-sm text-gray-600">New team member</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Receipts</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All →
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Testing 0010</p>
                <p className="text-sm text-gray-600">Aug 11, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">₹34,000</p>
                <p className="text-xs text-gray-500">Cash</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Muhammad Test 003</p>
                <p className="text-sm text-gray-600">Aug 11, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">₹5,000</p>
                <p className="text-xs text-gray-500">Cash</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Muhammad Test 001</p>
                <p className="text-sm text-gray-600">Aug 11, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">₹10,000</p>
                <p className="text-xs text-gray-500">Cash</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">fhaifah</p>
                <p className="text-sm text-gray-600">Jul 31, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">₹9,998.99</p>
                <p className="text-xs text-gray-500">Cash</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">Firebase Connection</span>
              </div>
              <span className="text-green-600 text-sm">Connected</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">Last Sync</span>
              </div>
              <span className="text-blue-600 text-sm">2 min ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900">Pending Changes</span>
              </div>
              <span className="text-orange-600 text-sm">0 items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;