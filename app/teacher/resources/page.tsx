"use client";
import { useState } from "react";

export default function TeacherResources() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [resourceType, setResourceType] = useState("pdf");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const subjects = [
    { id: "S001", name: "Physics", code: "PHY" },
    { id: "S002", name: "Mathematics", code: "MATH" }
  ];

  const physicsUnits = [
    { id: "U001", name: "Unit 1", code: "U1" },
    { id: "U002", name: "Unit 2", code: "U2" },
    { id: "U003", name: "Unit 3", code: "U3" },
    { id: "U004", name: "Unit 4", code: "U4" },
    { id: "U005", name: "Unit 5", code: "U5" },
    { id: "U006", name: "Unit 6", code: "U6" }
  ];

  const mathUnits = [
    { id: "U007", name: "P1", code: "P1" },
    { id: "U008", name: "P2", code: "P2" },
    { id: "U009", name: "P3", code: "P3" },
    { id: "U010", name: "P4", code: "P4" },
    { id: "U011", name: "S1", code: "S1" },
    { id: "U012", name: "S2", code: "S2" },
    { id: "U013", name: "M1", code: "M1" },
    { id: "U014", name: "M2", code: "M2" },
    { id: "U015", name: "M3", code: "M3" },
    { id: "U016", name: "F1", code: "F1" },
    { id: "U017", name: "F2", code: "F2" },
    { id: "U018", name: "F3", code: "F3" }
  ];

  const units = selectedSubject === "S001" ? physicsUnits : selectedSubject === "S002" ? mathUnits : [];

  const resources = [
    {
      id: "R001",
      title: "Physics Unit 1 - Kinematics Notes",
      type: "PDF",
      unit: "Unit 1",
      uploadedBy: "Teacher",
      uploadedAt: "2026-05-15",
      downloads: 45
    },
    {
      id: "R002",
      title: "Physics Unit 1 - Worksheet",
      type: "PDF",
      unit: "Unit 1",
      uploadedBy: "Teacher",
      uploadedAt: "2026-05-14",
      downloads: 38
    },
    {
      id: "R003",
      title: "Physics Unit 1 - Lecture Video",
      type: "VIDEO",
      unit: "Unit 1",
      uploadedBy: "Teacher",
      uploadedAt: "2026-05-13",
      views: 120
    },
    {
      id: "R004",
      title: "Math P1 - Practice Problems",
      type: "PDF",
      unit: "P1",
      uploadedBy: "Teacher",
      uploadedAt: "2026-05-12",
      downloads: 52
    }
  ];

  const filteredResources = resources.filter(resource => 
    (!selectedUnit || resource.unit === units.find(u => u.id === selectedUnit)?.name) &&
    (!resourceType || resource.type === resourceType.toUpperCase())
  );

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    // In a real app, this would upload to a server/storage service
    setTimeout(() => {
      setUploading(false);
      alert("Resource uploaded successfully!");
      // Reset form
      setTitle("");
      setDescription("");
      setUrl("");
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Upload New Resource
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upload Resource</h2>
          </div>
          
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                disabled={uploading}
              >
                <option value="">Select Subject</option>
                {subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
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
                disabled={!selectedSubject || uploading}
              >
                <option value="">Select Unit</option>
                {units.map(unit => (
                  <option key={unit.id} value={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resource Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="pdf"
                    checked={resourceType === "pdf"}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="h-4 w-4 text-primary"
                    disabled={uploading}
                  />
                  <span className="ml-2">PDF</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="video"
                    checked={resourceType === "video"}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="h-4 w-4 text-primary"
                    disabled={uploading}
                  />
                  <span className="ml-2">Video</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="link"
                    checked={resourceType === "link"}
                    onChange={(e) => setResourceType(e.target.value)}
                    className="h-4 w-4 text-primary"
                    disabled={uploading}
                  />
                  <span className="ml-2">Link</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                placeholder="Enter resource title"
                disabled={uploading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                rows={3}
                placeholder="Enter description"
                disabled={uploading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL/File</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                placeholder="Enter URL or file path"
                disabled={uploading}
              />
            </div>
            
            <button
              type="submit"
              disabled={uploading || !title || !url || !selectedSubject || !selectedUnit}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-sm"
            >
              {uploading ? (
                <>
                  <span className="animate-spin h-4 w-4"></span>
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Upload Resource</span>
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filter Resources</h2>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resource Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={resourceType === "pdf" || resourceType === ""}
                    onChange={(e) => setResourceType(e.target.checked ? "pdf" : "")}
                    className="h-4 w-4 text-primary"
                  />
                  <span className="ml-2">PDF</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={resourceType === "video" || resourceType === ""}
                    onChange={(e) => setResourceType(e.target.checked ? "video" : "")}
                    className="h-4 w-4 text-primary"
                  />
                  <span className="ml-2">Video</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={resourceType === "link" || resourceType === ""}
                    onChange={(e) => setResourceType(e.target.checked ? "link" : "")}
                    className="h-4 w-4 text-primary"
                  />
                  <span className="ml-2">Link</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                placeholder="Search by title..."
              />
            </div>
          </div>
        </div>
        
        {/* Resources List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Resources Library</h2>
            <span className="text-sm text-gray-500">{filteredResources.length} resources</span>
          </div>
          
          <div className="space-y-3">
            {filteredResources.map(resource => (
              <div key={resource.id} className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10">
                  {resource.type === "PDF" && (
                    <div className="bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h1a1 1 0 001-1V2z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6 8a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6 14a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h1a1 1 0 001-1v-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {resource.type === "VIDEO" && (
                    <div className="bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2zM6.75 7.5a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {resource.type === "LINK" && (
                    <div className="bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 3a2 2 0 012 2v1a2 2 0 01-2 2h2a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 002-2h2zm2 8a2 2 0 01-2 2H5a2 2 0 002 2v2h2a2 2 0 002-2v-2zM9 3a1 1 0 012 2v2a1 1 0 01-2 2V3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 ml-3">
                  <h4 className="font-medium text-gray-900">{resource.title}</h4>
                  <p className="text-sm text-gray-500">{resource.unit} • {resource.type}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  {resource.type === "PDF" || resource.type === "LINK" ? (
                    <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                  ) : (
                    <span className="text-sm text-gray-500">{resource.views} views</span>
                  )}
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button 
                    onClick={() => {}}
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    Download/View
                  </button>
                   <button 
                    onClick={() => {}}
                    className="ml-2 text-sm text-gray-500 hover:text-red-600 font-medium"
                  >
                    Delete
                  </button>
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
    </div>
  );
}