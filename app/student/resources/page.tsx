"use client";
import { useState } from "react";

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedUnit, setSelectedUnit] = useState("all");
  const [resourceType, setResourceType] = useState("all");

  const resources = [
    {
      id: "R001",
      title: "Physics Unit 1 - Kinematics Notes",
      type: "PDF",
      subject: "Physics",
      unit: "Unit 1",
      uploadedAt: "2026-05-15",
      downloads: 45,
      fileSize: "2.3 MB"
    },
    {
      id: "R002",
      title: "Physics Unit 1 - Worksheet",
      type: "PDF",
      subject: "Physics",
      unit: "Unit 1",
      uploadedAt: "2026-05-14",
      downloads: 38,
      fileSize: "1.8 MB"
    },
    {
      id: "R003",
      title: "Physics Unit 1 - Lecture Video",
      type: "VIDEO",
      subject: "Physics",
      unit: "Unit 1",
      uploadedAt: "2026-05-13",
      views: 120,
      duration: "45 min"
    },
    {
      id: "R004",
      title: "Math P1 - Practice Problems",
      type: "PDF",
      subject: "Mathematics",
      unit: "P1",
      uploadedAt: "2026-05-12",
      downloads: 52,
      fileSize: "3.1 MB"
    },
    {
      id: "R005",
      title: "Math P1 - Solutions",
      type: "PDF",
      subject: "Mathematics",
      unit: "P1",
      uploadedAt: "2026-05-12",
      downloads: 35,
      fileSize: "2.5 MB"
    },
    {
      id: "R006",
      title: "Physics Unit 2 - Lecture Video",
      type: "VIDEO",
      subject: "Physics",
      unit: "Unit 2",
      uploadedAt: "2026-05-10",
      views: 95,
      duration: "50 min"
    }
  ];

  const filteredResources = resources.filter(resource => 
    (selectedSubject === "all" || resource.subject.toLowerCase() === selectedSubject) &&
    (selectedUnit === "all" || resource.unit === selectedUnit) &&
    (resourceType === "all" || resource.type === resourceType.toUpperCase()) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter Resources</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
                placeholder="Search by title..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
              >
                <option value="all">All Subjects</option>
                <option value="physics">Physics</option>
                <option value="mathematics">Mathematics</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
              >
                <option value="all">All Units</option>
                <option value="Unit 1">Unit 1</option>
                <option value="Unit 2">Unit 2</option>
                <option value="Unit 3">Unit 3</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resource Type</label>
              <div className="space-y-2">
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="all"
                    checked={resourceType === "all"}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">All Types</span>
                </label>
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="pdf"
                    checked={resourceType === "pdf"}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">PDF</span>
                </label>
                <label className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    value="video"
                    checked={resourceType === "video"}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="ml-2 text-sm text-gray-700">Video</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resources List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Available Resources</h2>
            <span className="text-sm text-gray-500">{filteredResources.length} resources</span>
          </div>
          
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-gray-200 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    {resource.type === "PDF" && (
                      <div className="bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h1a1 1 0 001-1V2z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6 8a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6 14a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h1a1 1 0 001-1v-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    {resource.type === "VIDEO" && (
                      <div className="bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2zM6.75 7.5a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 ml-3">
                    <h4 className="font-medium text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-500">{resource.subject} • {resource.unit}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    {resource.type === "PDF" ? (
                      <>
                        <p className="text-sm text-gray-500">{resource.downloads} downloads</p>
                        <p className="text-xs text-gray-400">{resource.fileSize}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-500">{resource.views} views</p>
                        <p className="text-xs text-gray-400">{resource.duration}</p>
                      </>
                    )}
                  </div>
                  <button 
                    onClick={() => {}}
                    className="px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
                  >
                    {resource.type === "PDF" ? "Download" : "Watch"}
                  </button>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">Uploaded on {resource.uploadedAt}</p>
              </div>
            </div>
          ))}
          
          {filteredResources.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No resources found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}