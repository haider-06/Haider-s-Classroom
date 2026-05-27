import { useState } from "react";

export default function GradeReport() {
  const [reportType, setReportType] = useState("exams");
  const [timePeriod, setTimePeriod] = useState("all");
  const [subject, setSubject] = useState("all");

  const examResults = [
    {
      id: "E001",
      title: "Physics Midterm Exam",
      type: "Midterm",
      subject: "Physics",
      date: "2026-06-15",
      score: "78/100",
      percentage: 78,
      grade: "B",
      feedback: "Good understanding of core concepts. Need to work on problem-solving speed.",
      topics: ["Kinematics", "Dynamics", "Work and Energy"]
    },
    {
      id: "E002",
      title: "Mathematics Final Exam",
      type: "Final",
      subject: "Mathematics",
      date: "2026-06-20",
      score: "85/100",
      percentage: 85,
      grade: "A",
      feedback: "Excellent work on calculus problems. Strong algebraic manipulation skills.",
      topics: ["Algebra", "Calculus", "Statistics", "Mechanics"]
    },
    {
      id: "E003",
      title: "Physics Mock Exam",
      type: "Mock",
      subject: "Physics",
      date: "2026-05-30",
      score: "78/100",
      percentage: 78,
      grade: "B",
      feedback: "Good understanding of core concepts. Need to work on problem-solving speed.",
      topics: ["Kinematics", "Dynamics"]
    },
    {
      id: "E004",
      title: "Mathematics Midterm Exam",
      type: "Midterm",
      subject: "Mathematics",
      date: "2026-05-25",
      score: "85/100",
      percentage: 85,
      grade: "A",
      feedback: "Excellent work on calculus problems. Strong algebraic manipulation skills.",
      topics: ["Algebra", "Calculus"]
    }
  ];

  const assignmentResults = [
    {
      id: "A001",
      title: "Physics Assignment - Kinematics",
      subject: "Physics",
      date: "2026-05-10",
      score: "18/20",
      percentage: 90,
      grade: "A",
      feedback: "Excellent work on all problems. Clear understanding of concepts.",
      topics: ["Kinematics", "Equations of Motion"]
    },
    {
      id: "A002",
      title: "Mathematics Assignment - Algebra",
      subject: "Mathematics",
      date: "2026-05-12",
      score: "16/20",
      percentage: 80,
      grade: "B",
      feedback: "Good work on most problems. Need to check for calculation errors.",
      topics: ["Quadratic Equations", "Functions"]
    },
    {
      id: "A003",
      title: "Physics Assignment - Dynamics",
      subject: "Physics",
      date: "2026-05-18",
      score: "15/20",
      percentage: 75,
      grade: "C",
      feedback: "Good attempt. Need to work on free-body diagrams and force calculations.",
      topics: ["Newton's Laws", "Friction"]
    },
    {
      id: "A004",
      title: "Mathematics Assignment - Calculus",
      subject: "Mathematics",
      date: "2026-05-19",
      score: "19/20",
      percentage: 95,
      grade: "A",
      feedback: "Excellent work on differentiation and integration problems.",
      topics: ["Differentiation", "Integration"]
    }
  ];

  const filteredExams = examResults.filter(exam => 
    (reportType === "exams" || reportType === "all") &&
    (timePeriod === "all" || new Date(exam.date) >= new Date(new Date().setMonth(new Date().getMonth() - 3))) &&
    (subject === "all" || exam.subject.toLowerCase() === subject.toLowerCase())
  );

  const filteredAssignments = assignmentResults.filter(assignment => 
    (reportType === "assignments" || reportType === "all") &&
    (timePeriod === "all" || new Date(assignment.date) >= new Date(new Date().setMonth(new Date().getMonth() - 3))) &&
    (subject === "all" || assignment.subject.toLowerCase() === subject.toLowerCase())
  );

  const calculateAverageScore = (results: any[]) => {
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, item) => acc + item.percentage, 0);
    return Math.round(sum / results.length);
  };

  const examAverage = calculateAverageScore(filteredExams);
  const assignmentAverage = calculateAverageScore(filteredAssignments);
  const overallAverage = Math.round((examAverage + assignmentAverage) / 2);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Grade Report</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Report Type:</label>
            <div className="flex space-x-1">
              <button 
                onClick={() => setReportType("exams")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${reportType === "exams" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Exams
              </button>
              <button 
                onClick={() => setReportType("assignments")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${reportType === "assignments" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Assignments
              </button>
              <button 
                onClick={() => setReportType("all")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${reportType === "all" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                All
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Time Period:</label>
            <select
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="all">All Time</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Subject:</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="all">All Subjects</option>
              <option value="physics">Physics</option>
              <option value="mathematics">Mathematics</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Summary Cards */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Exam Average</h3>
              <p className="text-2xl font-bold text-gray-900">{examAverage}%</p>
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
              <h3 className="text-sm font-medium text-gray-500">Assignment Average</h3>
              <p className="text-2xl font-bold text-gray-900">{assignmentAverage}%</p>
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
              <h3 className="text-sm font-medium text-gray-500">Overall Average</h3>
              <p className="text-2xl font-bold text-gray-900">{overallAverage}%</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Exams Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Exam Results</h2>
            <span className="text-sm text-gray-500">{filteredExams.length} exams</span>
          </div>
          
          <div className="space-y-4">
            {filteredExams.map(exam => (
              <div key={exam.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                    <p className="text-sm text-gray-500">{exam.type} • {exam.subject}</p>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${exam.percentage >= 90 ? "bg-green-100 text-green-800" :
                              exam.percentage >= 80 ? "bg-blue-100 text-blue-800" :
                              exam.percentage >= 70 ? "bg-yellow-100 text-yellow-800" :
                              exam.percentage >= 60 ? "bg-orange-100 text-orange-800" :
                              "bg-red-100 text-red-800"}`}>
                      {exam.percentage}%
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Date:</p>
                    <p className="text-sm text-gray-900">{exam.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Score:</p>
                    <p className="text-sm font-semibold text-gray-900">{exam.score}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Percentage:</p>
                    <p className="text-sm text-gray-900">{exam.percentage}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Grade:</p>
                    <p className="text-sm font-semibold text-gray-900">{exam.grade}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Feedback:</p>
                  <p className="text-sm text-gray-500">{exam.feedback}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Topics Covered:</p>
                  <p className="text-sm text-gray-500">{exam.topics.join(", ")}</p>
                </div>
                
                <div className="flex items-center justify-end">
                  <button 
                    onClick={() => {}}
                    className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
            
            {filteredExams.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No exam results found for the selected filters.
              </div>
            )}
          </div>
        </div>
        
        {/* Assignments Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Assignment Results</h2>
            <span className="text-sm text-gray-500">{filteredAssignments.length} assignments</span>
          </div>
          
          <div className="space-y-4">
            {filteredAssignments.map(assignment => (
              <div key={assignment.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">{assignment.subject}</p>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${assignment.percentage >= 90 ? "bg-green-100 text-green-800" :
                              assignment.percentage >= 80 ? "bg-blue-100 text-blue-800" :
                              assignment.percentage >= 70 ? "bg-yellow-100 text-yellow-800" :
                              assignment.percentage >= 60 ? "bg-orange-100 text-orange-800" :
                              "bg-red-100 text-red-800`}`}>
                      {assignment.percentage}%
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Date:</p>
                    <p className="text-sm text-gray-900">{assignment.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Score:</p>
                    <p className="text-sm font-semibold text-gray-900">{assignment.score}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Percentage:</p>
                    <p className="text-sm text-gray-900">{assignment.percentage}%</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Grade:</p>
                    <p className="text-sm font-semibold text-gray-900">{assignment.grade}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Feedback:</p>
                  <p className="text-sm text-gray-500">{assignment.feedback}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Topics Covered:</p>
                  <p className="text-sm text-gray-500">{assignment.topics.join(", ")}</p>
                </div>
                
                <div className="flex items-center justify-end">
                  <button 
                    onClick={() => {}}
                    className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
            
            {filteredAssignments.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No assignment results found for the selected filters.
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-sm font-medium text-gray-500">Pass Rate</h3>
            <p className="text-2xl font-bold text-gray-900">75%</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-sm font-medium text-gray-500">Improvement Trend</h3>
            <p className="text-2xl font-bold text-gray-900">+5%</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-sm font-medium text-gray-500">Consistency Score</h3>
            <p className="text-2xl font-bold text-gray-900">82%</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Score Progress</h3>
          <div className="h-48 bg-gray-50 rounded">
            {/* Line chart would go here */}
            <div className="flex h-full items-center justify-center text-gray-400">
              Score Progress Chart
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => {}}
              className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Print Report
            </button>
            <button 
              onClick={() => {}}
              className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Share Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}