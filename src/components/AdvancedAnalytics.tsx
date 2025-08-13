import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', revenue: 52000, expenses: 38000, profit: 14000 },
  { month: 'Mar', revenue: 48000, expenses: 35000, profit: 13000 },
  { month: 'Apr', revenue: 61000, expenses: 42000, profit: 19000 },
  { month: 'May', revenue: 55000, expenses: 40000, profit: 15000 },
  { month: 'Jun', revenue: 67000, expenses: 45000, profit: 22000 },
];

const clientData = [
  { name: 'Active', value: 85, color: '#10B981' },
  { name: 'Inactive', value: 15, color: '#EF4444' },
];

const AdvancedAnalytics: React.FC = () => {
  return (
    <div className="w-full p-6 lg:p-8 space-y-8 lg:space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics</h1>
          <p className="text-gray-600 mt-2">Comprehensive business insights and performance metrics</p>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-base">Total Revenue</p>
              <p className="text-3xl font-bold mt-2">₹3,28,000</p>
              <p className="text-blue-100 text-sm mt-1">+12% from last month</p>
            </div>
            <DollarSign size={32} className="text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-base">Net Profit</p>
              <p className="text-3xl font-bold mt-2">₹96,000</p>
              <p className="text-green-100 text-sm mt-1">+18% from last month</p>
            </div>
            <TrendingUp size={32} className="text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-base">Active Clients</p>
              <p className="text-3xl font-bold mt-2">127</p>
              <p className="text-purple-100 text-sm mt-1">+5 new this month</p>
            </div>
            <Users size={32} className="text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white min-h-[180px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-base">Avg. Project Value</p>
              <p className="text-3xl font-bold mt-2">₹25,846</p>
              <p className="text-orange-100 text-sm mt-1">+8% from last month</p>
            </div>
            <Calendar size={32} className="text-orange-200" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[500px]">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Revenue vs Expenses Trend</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
              <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[500px]">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Profit Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} name="Profit" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Client Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Client Status Distribution</h3>
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={clientData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {clientData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;