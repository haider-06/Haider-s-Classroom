"use client";

import { useState } from "react";

export default function TeacherRoutineBuilder() {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [batches, setBatches] = useState([
    { id: "B001", name: "Physics AS Level - Morning", level: "AS", year: 2026, session: 2, batchNumber: 1 },
    { id: "B002", name: "Physics A2 Level - Evening", level: "A2", year: 2026, session: 2, batchNumber: 2 },
    { id: "B003", name: "Math P1-P2 Combined", level: "AS", year: 2026, session: 2, batchNumber: 3 },
    { id: "B004", name: "Math P3-P4 Combined", level: "AS", year: 2026, session: 2, batchNumber: 4 },
  ]);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Routine Builder</h1>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Create New Batch
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Batch Selection Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Select Batch</h2>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full mt-2 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            >
              <option value="">Select a batch...</option>
              {batches.map(batch => (
                <option key={batch.id} value={batch.id}>
                  {batch.name} ({batch.level} Year {batch.year} Session {batch.session} Batch {batch.batchNumber})
                </option>
              ))}
            </select>
          </div>
          
          {selectedBatch && (
            <>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Batch Details</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Level:</span>
                    <span className="text-sm text-gray-700">{batches.find(b => b.id === selectedBatch)?.level}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Year:</span>
                    <span className="text-sm text-gray-700">{batches.find(b => b.id === selectedBatch)?.year}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Session:</span>
                    <span className="text-sm text-gray-700">{batches.find(b => b.id === selectedBatch)?.session === 1 ? "Jan" : batches.find(b => b.id === selectedBatch)?.session === 2 ? "May" : "Oct"}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Batch No:</span>
                    <span className="text-sm text-gray-700">{batches.find(b => b.id === selectedBatch)?.batchNumber}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Schedule Builder</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Subject:</span>
                    <span className="text-sm text-gray-700">Physics</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Unit:</span>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                      <option value="">Select Unit</option>
                      <option value="unit1">Unit 1</option>
                      <option value="unit2">Unit 2</option>
                      <option value="unit3">Unit 3</option>
                      <option value="unit4">Unit 4</option>
                      <option value="unit5">Unit 5</option>
                      <option value="unit6">Unit 6</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Day:</span>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                      <option value="">Select Day</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Time Slot:</span>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                      <option value="">Select Slot</option>
                      <option value="slot1">Slot 1 (8:00-10:00)</option>
                      <option value="slot2">Slot 2 (10:00-12:00)</option>
                      <option value="slot3">Slot 3 (12:00-14:00)</option>
                      <option value="slot4">Slot 4 (14:00-16:00)</option>
                      <option value="slot5">Slot 5 (16:00-18:00)</option>
                      <option value="slot6">Slot 6 (18:00-20:00)</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm font-medium text-gray-500">Duration:</span>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none">
                      <option value="">Select Duration</option>
                      <option value="1hr">1 Hour</option>
                      <option value="1hr30min">1 Hour 30 Min</option>
                      <option value="2hr">2 Hours</option>
                      <option value="2hr30min">2 Hours 30 Min</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4">
                  <button 
                    onClick={() => {}}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Add to Schedule
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Schedule Display */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-medium text-gray-500">
              <span>Time</span>
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>
            
            {/* Time slots */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">8:00-10:00</span>
                <span className="flex-1 text-center px-2 bg-blue-50 rounded-lg">Physics Unit 1</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-green-50 rounded-lg">Math P1-P2</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-purple-50 rounded-lg">Physics Unit 2</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">10:00-12:00</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-green-50 rounded-lg">Math P3-P4</span>
                <span className="flex-1 text-center px-2 bg-blue-50 rounded-lg">Physics Unit 3</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-purple-50 rounded-lg">Physics Unit 4</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">12:00-14:00</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">14:00-16:00</span>
                <span className="flex-1 text-center px-2 bg-purple-50 rounded-lg">Physics Unit 5</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-blue-50 rounded-lg">Physics Unit 6</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-green-50 rounded-lg">Math S1-S2</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">16:00-18:00</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
                <span className="flex-1 text-center px-2 bg-gray-100 rounded-lg">Free</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Batch Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Batch Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                <p className="text-sm font-semibold text-gray-900">28</p>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
                <p className="text-sm font-semibold text-gray-900">92%</p>
              </div>
              <div className="flex-1 text-end">
                <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
                <p className="text-sm font-semibold text-gray-900">78%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Classes Held</h3>
                <p className="text-sm font-semibold text-gray-900">18/24</p>
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-sm font-medium text-gray-500">Upcoming Tests</h3>
                <p className="text-sm font-semibold text-gray-900">2</p>
              </div>
              <div className="flex-1 text-end">
                <h3 className="text-sm font-medium text-gray-500">Pending Fees</h3>
                <p className="text-sm font-semibold text-gray-900">3</p>
              </div>
            </div>
            
            <div className="mt-4">
              <button 
                onClick={() => {}}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                View Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}