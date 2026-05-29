"use client";
import { useState } from "react";

export default function TeacherPayment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFeeType, setSelectedFeeType] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [processing, setProcessing] = useState(false);

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  const years = [2024, 2025, 2026, 2027];

  const feeTypes = [
    { value: "monthly", label: "Monthly Fee" },
    { value: "bulk", label: "Bulk Payment" },
    { value: "per_unit", label: "Per Unit" },
    { value: "mock", label: "Mock Exam Fee" },
    { value: "registration", label: "Registration Fee" }
  ];

  const units = [
    { value: "physics_u1", label: "Physics Unit 1" },
    { value: "physics_u2", label: "Physics Unit 2" },
    { value: "physics_u3", label: "Physics Unit 3" },
    { value: "physics_u4", label: "Physics Unit 4" },
    { value: "physics_u5", label: "Physics Unit 5" },
    { value: "physics_u6", label: "Physics Unit 6" },
    { value: "math_p1", label: "Math P1" },
    { value: "math_p2", label: "Math P2" },
    { value: "math_p3", label: "Math P3" },
    { value: "math_p4", label: "Math P4" },
    { value: "math_s1", label: "Math S1" },
    { value: "math_s2", label: "Math S2" },
    { value: "math_m1", label: "Math M1" },
    { value: "math_m2", label: "Math M2" },
    { value: "math_m3", label: "Math M3" },
    { value: "math_f1", label: "Math F1" },
    { value: "math_f2", label: "Math F2" },
    { value: "math_f3", label: "Math F3" }
  ];

  const payments = [
    {
      id: "P001",
      studentId: "STU001",
      studentName: "John Doe",
      amount: 1500,
      month: 5,
      year: 2026,
      feeType: "Monthly",
      unit: "Physics Unit 1",
      paymentDate: "2026-05-05",
      status: "Completed",
      method: "Cash"
    },
    {
      id: "P002",
      studentId: "STU002",
      studentName: "Jane Smith",
      amount: 2000,
      month: 5,
      year: 2026,
      feeType: "Bulk",
      unit: "Physics Unit 1 + Physics Unit 2",
      paymentDate: "2026-05-03",
      status: "Completed",
      method: "Bank Transfer"
    },
    {
      id: "P003",
      studentId: "STU003",
      studentName: "Bob Johnson",
      amount: 500,
      month: 5,
      year: 2026,
      feeType: "Mock",
      unit: "Physics Unit 1 Mock",
      paymentDate: "2026-05-01",
      status: "Pending",
      method: "Cash"
    }
  ];

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMonth = !selectedMonth || payment.month === parseInt(selectedMonth);
    const matchesYear = !selectedYear || payment.year === parseInt(selectedYear);
    const matchesFeeType = !selectedFeeType || payment.feeType.toLowerCase() === selectedFeeType;
    const matchesUnit = !selectedUnit || payment.unit.toLowerCase().includes(selectedUnit.toLowerCase());
    
    return matchesSearch && matchesMonth && matchesYear && matchesFeeType && matchesUnit;
  });

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // In a real app, this would process the payment
    setTimeout(() => {
      setProcessing(false);
      alert("Payment processed successfully!");
      // Reset form
      setAmount("");
      setPaymentMethod("cash");
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payment</h1>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Record New Payment
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Record Payment</h2>
          </div>
          
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Student</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                placeholder="Search by student ID or name"
                disabled={processing}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  disabled={processing}
                >
                  <option value="">Select Month</option>
                  {months.map(month => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  disabled={processing}
                >
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fee Type</label>
                <select
                  value={selectedFeeType}
                  onChange={(e) => setSelectedFeeType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  disabled={processing}
                >
                  <option value="">Select Fee Type</option>
                  {feeTypes.map(feeType => (
                    <option key={feeType.value} value={feeType.value}>
                      {feeType.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit (if applicable)</label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  disabled={processing}
                >
                  <option value="">Select Unit (Optional)</option>
                  {units.map(unit => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                placeholder="Enter amount"
                disabled={processing}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary"
                    disabled={processing}
                  />
                  <span className="ml-2">Cash</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="bank_transfer"
                    checked={paymentMethod === "bank_transfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary"
                    disabled={processing}
                  />
                  <span className="ml-2">Bank Transfer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-primary"
                    disabled={processing}
                  />
                  <span className="ml-2">Online Payment</span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={processing || !amount || !selectedMonth || !selectedYear}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
            >
              {processing ? (
                <>
                  <span className="animate-spin h-4 w-4"></span>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Record Payment</span>
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter Payments</h2>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                placeholder="Search by student ID or name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                >
                  <option value="">All Months</option>
                  {months.map(month => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fee Type</label>
                <select
                  value={selectedFeeType}
                  onChange={(e) => setSelectedFeeType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                >
                  <option value="">All Fee Types</option>
                  {feeTypes.map(feeType => (
                    <option key={feeType.value} value={feeType.value}>
                      {feeType.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                >
                  <option value="">All Units</option>
                  {units.map(unit => (
                    <option key={unit.value} value={unit.value}>
                      {unit.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payments List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Payment Records</h2>
            <span className="text-sm text-gray-500">{filteredPayments.length} payments</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Month/Year</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Fee Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Unit</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.map(payment => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.studentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rs. {payment.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(payment.year, payment.month - 1).toLocaleString('default', { month: 'short' })} {payment.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.feeType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.unit}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.method}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full 
                              ${payment.status === "Completed" ? "bg-green-100 text-green-800" :
                                payment.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                "bg-red-100 text-red-800"}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => {}}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Receipt
                      </button>
                      <button 
                        onClick={() => {}}
                        className="ml-2 text-gray-500 hover:text-gray-700 font-medium"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
                
                {filteredPayments.length === 0 && (
                  <tr>
                    <td className="px-6 py-4 text-center text-gray-500" colSpan={10}>
                      No payments found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}