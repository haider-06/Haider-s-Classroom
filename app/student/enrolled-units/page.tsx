import { useState } from "react";

export default function EnrolledUnits() {
  const [viewMode, setViewMode] = useState("list");
  const [filterStatus, setFilterStatus] = useState("all");

  const units = [
    {
      id: "U001",
      subject: "Physics",
      name: "Unit 1",
      code: "U1",
      status: "active",
      progress: 65,
      syllabusCoverage: "Kinematics, Vectors, Motion in One Dimension",
      homeworkCompletion: 80,
      worksheetCompletion: 75,
      upcomingExams: [
        { date: "2026-06-15", type: "Midterm", title: "Physics Midterm" }
      ],
      lastUpdated: "2026-05-20"
    },
    {
      id: "U002",
      subject: "Physics",
      name: "Unit 2",
      code: "U2",
      status: "active",
      progress: 45,
      syllabusCoverage: "Dynamics, Forces, Newton's Laws",
      homeworkCompletion: 60,
      worksheetCompletion: 55,
      upcomingExams: [
        { date: "2026-06-15", type: "Midterm", title: "Physics Midterm" }
      ],
      lastUpdated: "2026-05-18"
    },
    {
      id: "U003",
      subject: "Physics",
      name: "Unit 3",
      code: "U3",
      status: "active",
      progress: 25,
      syllabusCoverage: "Work, Energy, Power",
      homeworkCompletion: 40,
      worksheetCompletion: 35,
      upcomingExams: [
        { date: "2026-06-15", type: "Midterm", title: "Physics Midterm" }
      ],
      lastUpdated: "2026-05-15"
    },
    {
      id: "U004",
      subject: "Mathematics",
      name: "P1",
      code: "P1",
      status: "active",
      progress: 70,
      syllabusCoverage: "Algebra, Functions, Quadratic Equations",
      homeworkCompletion: 85,
      worksheetCompletion: 80,
      upcomingExams: [
        { date: "2026-06-20", type: "Final", title: "Mathematics Final" }
      ],
      lastUpdated: "2026-05-22"
    },
    {
      id: "U005",
      subject: "Mathematics",
      name: "P2",
      code: "P2",
      status: "active",
      progress: 50,
      syllabusCoverage: "Calculus, Differentiation, Integration",
      homeworkCompletion: 65,
      worksheetCompletion: 60,
      upcomingExams: [
        { date: "2026-06-20", type: "Final", title: "Mathematics Final" }
      ],
      lastUpdated: "2026-05-19"
    }
  ];

  const filteredUnits = units.filter(unit => 
    filterStatus === "all" || unit.status === filterStatus
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Enrolled Units</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">View:</label>
            <div className="flex space-x-1">
              <button 
                onClick={() => setViewMode("list")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                List
              </button>
              <button 
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Grid
              </button>
              <button 
                onClick={() => setViewMode("cards")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${viewMode === "cards" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Cards
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Filter:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="all">All Units</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Summary</h2>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Total Units</p>
              <p className="text-2xl font-bold text-gray-900">{units.length}</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Active Units</p>
              <p className="text-2xl font-bold text-gray-900">{units.filter(u => u.status === "active").length}</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Average Progress</p>
              <p className="text-2xl font-bold text-gray-900">{Math.round(units.reduce((sum, u) => sum + u.progress, 0) / units.length)}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Upcoming Exams</p>
              <p className="text-2xl font-bold text-gray-900">{units.reduce((sum, u) => sum + u.upcomingExams.length, 0)}</p>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <div className="flex-1">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="ml-2 text-sm font-medium text-gray-700">Physics</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">3 units • 45% average progress</p>
          </div>
          
          <div className="flex-1">
            <div class="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm font-medium text-gray-700">Mathematics</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">2 units • 60% average progress</p>
          </div>
        </div>
      </div>
      
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredUnits.map(unit => (
            <div key={unit.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <div className={`bg-${unit.subject === "Physics" ? "blue" : "green"}-100 rounded flex items-center justify-center`}>
                      <span className="text-${unit.subject === "Physics" ? "blue" : "green"}-600 font-bold">{unit.code}</span>
                    </div>
                  </div>
                  <div className="flex-1 ml-3">
                    <h3 className="font-medium text-gray-900">{unit.subject} {unit.name}</h3>
                    <p className="text-sm text-gray-500">{unit.syllabusCoverage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Progress:</span>
                    <div className="w-16 h-4 bg-gray-200 rounded overflow-hidden">
                      <div className={`h-full bg-${unit.subject === "Physics" ? "blue" : "green"}-500`} style={{ width: `${unit.progress}%` }}></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">{unit.progress}%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Status:</span>
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${unit.status === "active" ? "bg-green-100 text-green-800" :
                              unit.status === "completed" ? "bg-blue-100 text-blue-800" :
                              "bg-red-100 text-red-800"}`}>
                      {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Homework:</span>
                  <span className="text-sm font-medium text-gray-900">{unit.homeworkCompletion}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Worksheet:</span>
                  <span className="text-sm font-medium text-gray-900">{unit.worksheetCompletion}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Upcoming Exams:</span>
                  <span className="text-sm font-medium text-gray-900">{unit.upcomingExams.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Last Updated:</span>
                  <span className="text-sm text-gray-500">{unit.lastUpdated}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <button 
                  onClick={() => {}}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          ))}
          
          {filteredUnits.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No units found matching your filters.
            </div>
          )}
        </div>
      )}
      
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUnits.map(unit => (
            <div key={unit.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8">
                    <div className={`bg-${unit.subject === "Physics" ? "blue" : "green"}-100 rounded flex items-center justify-center`}>
                      <span className="text-${unit.subject === "Physics" ? "blue" : "green"}-600 font-bold">{unit.code}</span>
                    </div>
                  </div>
                  <div className="flex-1 ml-3">
                    <h3 className="font-medium text-gray-900">{unit.subject} {unit.name}</h3>
                    <p className="text-sm text-gray-500">{unit.syllabusCoverage}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`px-2 py-1 text-xs rounded-full 
                          ${unit.status === "active" ? "bg-green-100 text-green-800" :
                            unit.status === "completed" ? "bg-blue-100 text-blue-800" :
                            "bg-red-100 text-red-800"}`}>
                    {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Progress:</span>
                  <div className="w-20 h-2 bg-gray-200 rounded overflow-hidden">
                    <div className={`h-full bg-${unit.subject === "Physics" ? "blue" : "green"}-500`} style={{ width: `${unit.progress}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">{unit.progress}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Homework:</span>
                  <span className="text-sm font-medium text-gray-900">{unit.homeworkCompletion}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Worksheet:</span>
                  <span className="text-sm font-medium text-gray-900">{unit.worksheetCompletion}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Upcoming Exams:</span>
                  <span className="text-sm font-medium text-gray-900">{unit.upcomingExams.length}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <button 
                  onClick={() => {}}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          ))}
          
          {filteredUnits.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No units found matching your filters.
            </div>
          )}
        </div>
      )}
      
      {viewMode === "cards" && (
        <div className="space-y-4">
          {filteredUnits.map(unit => (
            <div key={unit.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12">
                    <div className={`bg-${unit.subject === "Physics" ? "blue" : "green"}-100 rounded flex items-center justify-center`}>
                      <span className="text-${unit.subject === "Physics" ? "blue" : "green"}-600 font-bold text-2xl">{unit.code}</span>
                    </div>
                  </div>
                  <div className="flex-1 ml-4">
                    <h2 className="font-semibold text-gray-900">{unit.subject} {unit.name}</h2>
                    <p className="text-sm text-gray-500">{unit.syllabusCoverage}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-500">{unit.progress}%</span>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-500">Progress</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-500">{unit.homeworkCompletion}%</span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Homework</span>
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-500">{unit.worksheetCompletion}%</span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">Worksheet</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Syllabus Coverage:</span>
                  <span className="text-sm text-gray-500">{unit.syllabusCoverage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Last Updated:</span>
                  <span className="text-sm text-gray-500">{unit.lastUpdated}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Upcoming Exams:</span>
                  <span className="text-sm text-gray-500">{unit.upcomingExams.length} exam(s)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Status:</span>
                  <span className={`px-2 py-1 text-xs rounded-full 
                          ${unit.status === "active" ? "bg-green-100 text-green-800" :
                            unit.status === "completed" ? "bg-blue-100 text-blue-800" :
                            "bg-red-100 text-red-800"}`}>
                    {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <button 
                  onClick={() => {}}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          ))}
          
          {filteredUnits.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No units found matching your filters.
            </div>
          )}
        </div>
      )}
    </div>
  );
}