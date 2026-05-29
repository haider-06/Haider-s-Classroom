"use client";
import { useState } from "react";

export default function ExamBoard() {
  const [examType, setExamType] = useState("all");
  const [subject, setSubject] = useState("all");

  const exams = [
    {
      id: "E001",
      title: "Physics Midterm Exam",
      type: "Midterm",
      subject: "Physics",
      date: "2026-06-15",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      syllabus: "Units 1-3: Kinematics, Dynamics, Work and Energy",
      materials: [
        "Physics Notes - Units 1-3",
        "Worksheet - Kinematics Practice",
        "Worksheet - Dynamics Problems",
        "Formula Sheet",
        "Past Papers (2020-2023)"
      ],
      status: "Upcoming"
    },
    {
      id: "E002",
      title: "Mathematics Final Exam",
      type: "Final",
      subject: "Mathematics",
      date: "2026-06-20",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      syllabus: "P1-P4: Algebra, Calculus, Statistics, Mechanics",
      materials: [
        "Math Notes - P1-P4",
        "Practice Problems - Calculus",
        "Statistics Formula Sheet",
        "Mechanics Reference Guide",
        "Past Papers (2020-2023)"
      ],
      status: "Upcoming"
    },
    {
      id: "E003",
      title: "Physics Mock Exam",
      type: "Mock",
      subject: "Physics",
      date: "2026-05-30",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      syllabus: "Units 1-2: Kinematics, Dynamics",
      materials: [
        "Physics Notes - Units 1-2",
        "Mock Exam Paper",
        "Answer Key",
        "Solution Guide"
      ],
      status: "Completed",
      score: "78/100",
      grade: "B"
    },
    {
      id: "E004",
      title: "Mathematics Midterm Exam",
      type: "Midterm",
      subject: "Mathematics",
      date: "2026-05-25",
      time: "2:00 PM - 5:00 PM",
      duration: "3 hours",
      syllabus: "P1-P2: Algebra, Basic Calculus",
      materials: [
        "Math Notes - P1-P2",
        "Practice Problems - Algebra",
        "Calculus Introduction Sheet",
        "Past Papers (2020-2022)"
      ],
      status: "Completed",
      score: "85/100",
      grade: "A"
    }
  ];

  const filteredExams = exams.filter(exam => 
    (examType === "all" || exam.type.toLowerCase() === examType) &&
    (subject === "all" || exam.subject.toLowerCase() === subject.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Exam Board</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Exam Type:</label>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
            >
              <option value="all">All Types</option>
              <option value="midterm">Midterm</option>
              <option value="final">Final</option>
              <option value="mock">Mock</option>
              <option value="quiz">Quiz</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Subject:</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
            >
              <option value="all">All Subjects</option>
              <option value="physics">Physics</option>
              <option value="mathematics">Mathematics</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Exams</h2>
            <span className="text-sm text-gray-500">{filteredExams.filter(e => e.status === "Upcoming").length} exams</span>
          </div>
          
          <div className="space-y-4">
            {filteredExams.filter(exam => exam.status === "Upcoming").map(exam => (
              <div key={exam.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-gray-200 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                    <p className="text-sm text-gray-500">{exam.type} • {exam.subject}</p>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${exam.status === "Upcoming" ? "bg-blue-100 text-blue-800" :
                              exam.status === "Completed" ? "bg-green-100 text-green-800" :
                              "bg-gray-100 text-gray-800"}`}>
                      {exam.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Date:</p>
                    <p className="text-sm text-gray-900">{exam.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Time:</p>
                    <p className="text-sm text-gray-900">{exam.time}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Duration:</p>
                    <p className="text-sm text-gray-900">{exam.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Status:</p>
                    <p className="text-sm text-gray-900">{exam.status}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Syllabus:</p>
                  <p className="text-sm text-gray-500">{exam.syllabus}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Study Materials:</p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    {exam.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-end">
                  <button 
                    onClick={() => {}}
                    className="px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
            
            {filteredExams.filter(exam => exam.status === "Upcoming").length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No upcoming exams found.
              </div>
            )}
          </div>
        </div>
        
        {/* Completed Exams */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Completed Exams</h2>
            <span className="text-sm text-gray-500">{filteredExams.filter(e => e.status === "Completed").length} exams</span>
          </div>
          
          <div className="space-y-4">
            {filteredExams.filter(exam => exam.status === "Completed").map(exam => (
              <div key={exam.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-gray-200 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exam.title}</h3>
                    <p className="text-sm text-gray-500">{exam.type} • {exam.subject}</p>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${exam.status === "Upcoming" ? "bg-blue-100 text-blue-800" :
                              exam.status === "Completed" ? "bg-green-100 text-green-800" :
                              "bg-gray-100 text-gray-800"}`}>
                      {exam.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Date:</p>
                    <p className="text-sm text-gray-900">{exam.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Time:</p>
                    <p className="text-sm text-gray-900">{exam.time}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Duration:</p>
                    <p className="text-sm text-gray-900">{exam.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Score:</p>
                    <p className="text-sm font-semibold text-gray-900">{exam.score}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Grade:</p>
                    <p className="text-sm font-semibold text-gray-900">{exam.grade}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Syllabus:</p>
                  <p className="text-sm text-gray-500">{exam.syllabus}</p>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Study Materials:</p>
                  <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                    {exam.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-end">
                  <button 
                    onClick={() => {}}
                    className="px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
                  >
                    View Results
                  </button>
                </div>
              </div>
            ))}
            
            {filteredExams.filter(exam => exam.status === "Completed").length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No completed exams found.
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Exam Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Exam Performance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-medium text-gray-500">Average Score</h3>
            <p className="text-2xl font-bold text-gray-900">81.5%</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-medium text-gray-500">Pass Rate</h3>
            <p className="text-2xl font-bold text-gray-900">75%</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-medium text-gray-500">Exams Taken</h3>
            <p className="text-2xl font-bold text-gray-900">4</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Score Trend</h3>
          <div className="h-48 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex h-full items-center justify-center text-gray-400">
              Score Trend Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}