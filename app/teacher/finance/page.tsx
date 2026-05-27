import { useState } from "react";

export default function TeacherFinance() {
  const [timePeriod, setTimePeriod] = useState("6months");
  const [incomeSource, setIncomeSource] = useState("all");

  // Mock financial data
  const monthlyData = [
    { month: "Jan", income: 45000, expenses: 12000, profit: 33000 },
    { month: "Feb", income: 48000, expenses: 11000, profit: 37000 },
    { month: "Mar", income: 52000, expenses: 13000, profit: 39000 },
    { month: "Apr", income: 49000, expenses: 14000, profit: 35000 },
    { month: "May", income: 55000, expenses: 12500, profit: 42500 },
    { month: "Jun", income: 58000, expenses: 13500, profit: 44500 }
  ];

  const incomeSources = [
    { name: "Home Tuition", amount: 22000, percentage: 40 },
    { name: "Coaching Classes", amount: 18000, percentage: 33 },
    { name: "Online Classes", amount: 15000, percentage: 27 }
  ];

  const pendingPayments = [
    { id: "P001", studentName: "John Doe", amount: 1500, dueDate: "2026-05-05", daysOverdue: 2 },
    { id: "P002", studentName: "Jane Smith", amount: 2000, dueDate: "2026-05-03", daysOverdue: 4 },
    { id: "P003", studentName: "Bob Johnson", amount: 500, dueDate: "2026-05-01", daysOverdue: 6 },
    { id: "P004", studentName: "Alice Brown", amount: 1200, dueDate: "2026-05-07", daysOverdue: 0 },
    { id: "P005", studentName: "Charlie Wilson", amount: 800, dueDate: "2026-05-02", daysOverdue: 5 }
  ];

  const totalIncome = monthlyData.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = monthlyData.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = monthlyData.reduce((sum, item) => sum + item.profit, 0);
  const totalPending = pendingPayments.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Finance</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {}}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            Export Report
          </button>
          <button 
            onClick={() => {}}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            Send Reminders
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Summary Cards */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Income (YTD)</h3>
              <p className="text-2xl font-bold text-gray-900">Rs. {totalIncome.toLocaleString()}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Expenses (YTD)</h3>
              <p className="text-2xl font-bold text-gray-900">Rs. {totalExpenses.toLocaleString()}</p>
            </div>
            <div className="bg-red-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Profit (YTD)</h3>
              <p className="text-2xl font-bold text-gray-900">Rs. {totalProfit.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Pending Dues</h3>
              <p className="text-2xl font-bold text-gray-900">Rs. {totalPending.toLocaleString()}</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Income Sources Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Income Sources</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setIncomeSource("all")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${incomeSource === "all" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                All
              </button>
              <button 
                onClick={() => setIncomeSource("home")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${incomeSource === "home" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Home
              </button>
              <button 
                onClick={() => setIncomeSource("coaching")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${incomeSource === "coaching" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Coaching
              </button>
              <button 
                onClick={() => setIncomeSource("online")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${incomeSource === "online" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Online
              </button>
            </div>
          </div>
          
          <div className="h-64">
            {/* Pie chart would go here */}
            <div className="flex h-full items-center justify-center text-gray-400">
              Income Sources Chart
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            {incomeSources.map(source => (
              <div key={source.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full 
                          ${source.name === "Home Tuition" ? "bg-green-500" :
                            source.name === "Coaching Classes" ? "bg-blue-500" :
                            "bg-purple-500"}"></div>
                  <span className="ml-2 text-sm font-medium text-gray-700">{source.name}</span>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-sm font-medium text-gray-900">Rs. {source.amount.toLocaleString()}</span>
                  <span className="text-xs text-gray-500 ml-2">({source.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Monthly Trends Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Trends</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setTimePeriod("3months")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${timePeriod === "3months" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                3 Months
              </button>
              <button 
                onClick={() => setTimePeriod("6months")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${timePeriod === "6months" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                6 Months
              </button>
              <button 
                onClick={() => setTimePeriod("12months")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${timePeriod === "12months" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                12 Months
              </button>
            </div>
          </div>
          
          <div className="h-64">
            {/* Bar chart would go here */}
            <div className="flex h-full items-center justify-center text-gray-400">
              Monthly Trends Chart
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Income</span>
              <span className="text-sm font-medium text-gray-900">Rs. {monthlyData[monthlyData.length - 1].income.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Expenses</span>
              <span className="text-sm font-medium text-gray-900">Rs. {monthlyData[monthlyData.length - 1].expenses.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Profit</span>
              <span className="text-sm font-medium text-gray-900">Rs. {monthlyData[monthlyData.length - 1].profit.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Pending Payments</h2>
          <span className="text-sm text-gray-500">{pendingPayments.length} pending payments</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Overdue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingPayments.map(payment => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.studentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rs. {payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${payment.daysOverdue > 0 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                      {payment.daysOverdue > 0 ? `+${payment.daysOverdue}` : "On Time"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => {}}
                      className="text-primary hover:text-primary/80"
                    >
                      Remind
                    </button>
                    <button 
                      onClick={() => {}}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      Mark as Paid
                    </button>
                  </td>
                </tr>
              ))}
              
              {pendingPayments.length === 0 && (
                <tr>
                  <td className="px-6 py-4 text-center text-gray-500" colSpan="6">
                    No pending payments.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}