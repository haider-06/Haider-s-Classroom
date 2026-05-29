"use client";
import { useState } from "react";

export default function MockRegistration() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMock, setSelectedMock] = useState("");
  const [registering, setRegistering] = useState(false);

  const mockExams = [
    {
      id: "M001",
      title: "Physics Unit 1-2 Mock Exam",
      subject: "Physics",
      level: "AS",
      date: "2026-06-05",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      fee: 500,
      maxSeats: 50,
      registeredSeats: 38,
      status: "open",
      topics: ["Kinematics", "Dynamics"],
      registrationDeadline: "2026-05-30"
    },
    {
      id: "M002",
      title: "Mathematics P1-P2 Mock Exam",
      subject: "Mathematics",
      level: "AS",
      date: "2026-06-08",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      fee: 500,
      maxSeats: 45,
      registeredSeats: 45,
      status: "full",
      topics: ["Algebra", "Calculus"],
      registrationDeadline: "2026-06-05"
    },
    {
      id: "M003",
      title: "Physics Unit 3-4 Mock Exam",
      subject: "Physics",
      level: "AS",
      date: "2026-06-12",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      fee: 500,
      maxSeats: 50,
      registeredSeats: 25,
      status: "open",
      topics: ["Work and Energy", "Momentum"],
      registrationDeadline: "2026-06-08"
    },
    {
      id: "M004",
      title: "Physics A2 Level Mock Exam",
      subject: "Physics",
      level: "A2",
      date: "2026-06-15",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      fee: 600,
      maxSeats: 40,
      registeredSeats: 20,
      status: "open",
      topics: ["All Units"],
      registrationDeadline: "2026-06-12"
    },
    {
      id: "M005",
      title: "Mathematics Final Comprehensive Mock",
      subject: "Mathematics",
      level: "AS",
      date: "2026-06-18",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      fee: 600,
      maxSeats: 50,
      registeredSeats: 15,
      status: "open",
      topics: ["All Units"],
      registrationDeadline: "2026-06-15"
    },
    {
      id: "M006",
      title: "Physics A2 Level Complete Mock",
      subject: "Physics",
      level: "A2",
      date: "2026-06-22",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      fee: 700,
      maxSeats: 40,
      registeredSeats: 12,
      status: "open",
      topics: ["All Units"],
      registrationDeadline: "2026-06-18"
    }
  ];

  const filteredMocks = mockExams.filter(mock => 
    (filterStatus === "all" || mock.status === filterStatus) &&
    (mock.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     mock.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleRegister = async (mockId: string) => {
    setRegistering(true);
    // In a real app, this would process the registration
    setTimeout(() => {
      setRegistering(false);
      alert("Successfully registered for the mock exam!");
      setSelectedMock("");
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mock Exam Registration</h1>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          My Registrations
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter Exams</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
                placeholder="Search by title or subject..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <div className="space-y-2">
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="all"
                    checked={filterStatus === "all"}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">All Exams</span>
                </label>
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="open"
                    checked={filterStatus === "open"}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">Open for Registration</span>
                </label>
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="full"
                    checked={filterStatus === "full"}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">Full (Waitlist)</span>
                </label>
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="closed"
                    checked={filterStatus === "closed"}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">Closed</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mock Exams List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Available Mock Exams</h2>
            <span className="text-sm text-gray-500">{filteredMocks.length} exams</span>
          </div>
          
          {filteredMocks.map(mock => (
            <div key={mock.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{mock.title}</h3>
                  <p className="text-sm text-gray-500">{mock.subject} • {mock.level} Level</p>
                </div>
                <div className="flex items-center">
                  <span className={`px-2 py-1 text-xs rounded-full 
                          ${mock.status === "open" ? "bg-green-100 text-green-800" :
                            mock.status === "full" ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"}`}>
                    {mock.status === "open" ? "Open" :
                     mock.status === "full" ? "Full (Waitlist)" :
                     "Closed"}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Date:</p>
                  <p className="text-sm text-gray-900">{mock.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Time:</p>
                  <p className="text-sm text-gray-900">{mock.time}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Duration:</p>
                  <p className="text-sm text-gray-900">{mock.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Fee:</p>
                  <p className="text-sm font-semibold text-gray-900">Rs. {mock.fee}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Seats Available:</p>
                  <p className="text-sm text-gray-900">{mock.maxSeats - mock.registeredSeats} / {mock.maxSeats}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Registration Deadline:</p>
                  <p className="text-sm text-gray-900">{mock.registrationDeadline}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-sm font-medium text-gray-700">Topics:</p>
                <p className="text-sm text-gray-500">{mock.topics.join(", ")}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded h-2">
                    <div 
                      className={`h-full rounded ${mock.status === "full" ? "bg-red-500" : "bg-green-500"}`}
                      style={{ width: `${(mock.registeredSeats / mock.maxSeats) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{mock.registeredSeats} / {mock.maxSeats} registered</p>
                </div>
                
                <button 
                  onClick={() => {
                    if (mock.status === "open") {
                      setSelectedMock(mock.id);
                      handleRegister(mock.id);
                    } else {
                      alert("This exam is not available for registration.");
                    }
                  }}
                  disabled={registering || mock.status !== "open"}
                  className={`px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-all ${
                    mock.status === "open" 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {registering && selectedMock === mock.id ? "Registering..." : 
                   mock.status === "open" ? "Register" :
                   "Not Available"}
                </button>
              </div>
            </div>
          ))}
          
          {filteredMocks.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No mock exams found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}