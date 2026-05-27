import { useState } from "react";

export default function TeacherAnnouncements() {
  const [announcementType, setAnnouncementType] = useState("homework");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [sending, setSending] = useState(false);

  const batches = [
    { id: "B001", name: "Physics AS Level - Morning", level: "AS", year: 2026, session: 2, batchNumber: 1 },
    { id: "B002", name: "Physics A2 Level - Evening", level: "A2", year: 2026, session: 2, batchNumber: 2 },
    { id: "B003", name: "Math P1-P2 Combined", level: "AS", year: 2026, session: 2, batchNumber: 3 },
    { id: "B004", name: "Math P3-P4 Combined", level: "AS", year: 2026, session: 2, batchNumber: 4 },
  ];

  const announcementTypes = [
    { value: "homework", label: "Homework Assignment" },
    { value: "exam", label: "Exam Announcement" },
    { value: "mock", label: "Mock Exam" },
    { value: "general", label: "General Announcement" },
    { value: "reminder", label: "Reminder" }
  ];

  const announcements = [
    {
      id: "A001",
      title: "Physics Homework - Kinematics",
      type: "Homework",
      batch: "Physics AS Level - Morning",
      dueDate: "2026-05-30",
      sentViaWhatsApp: true,
      createdAt: "2026-05-20"
    },
    {
      id: "A002",
      title: "Physics Mock Exam - Unit 1 & 2",
      type: "Mock",
      batch: "Physics AS Level - Morning",
      date: "2026-05-30",
      sentViaWhatsApp: true,
      createdAt: "2026-05-15"
    },
    {
      id: "A003",
      title: "Math Assignment - Differentiation",
      type: "Homework",
      batch: "Math P1-P2 Combined",
      dueDate: "2026-05-28",
      sentViaWhatsApp: false,
      createdAt: "2026-05-18"
    },
    {
      id: "A004",
      title: "Class Cancellation Notice",
      type: "General",
      batch: "Physics A2 Level - Evening",
      date: "2026-05-25",
      sentViaWhatsApp: true,
      createdAt: "2026-05-20"
    }
  ];

  const filteredAnnouncements = announcements.filter(announcement => 
    (!announcementType || announcement.type.toLowerCase() === announcementType) &&
    (!selectedBatch || announcement.batch === batches.find(b => b.id === selectedBatch)?.name)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // In a real app, this would send the announcement via WhatsApp and save to database
    setTimeout(() => {
      setSending(false);
      alert("Announcement sent successfully!");
      // Reset form
      setTitle("");
      setContent("");
      setDueDate("");
    }, 2000);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Create New Announcement
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Announcement Form */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Create Announcement</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Announcement Type</label>
              <select
                value={announcementType}
                onChange={(e) => setAnnouncementType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                disabled={sending}
              >
                {announcementTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Batch</label>
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                disabled={sending}
              >
                <option value="">Select Batch (Optional)</option>
                {batches.map(batch => (
                  <option key={batch.id} value={batch.id}>
                    {batch.name} ({batch.level} Year {batch.year} Session {batch.session} Batch {batch.batchNumber})
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter announcement title"
                disabled={sending}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={4}
                placeholder="Enter announcement content"
                disabled={sending}
              />
            </div>
            
            {announcementType === "homework" || announcementType === "exam" || announcementType === "mock" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Due Date / Exam Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  disabled={sending}
                />
              </div>
            )}
            
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={true}
                  className="h-4 w-4 text-primary"
                  disabled={sending}
                />
                <span className="ml-2">Send via WhatsApp</span>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={sending || !title || !content}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
            >
              {sending ? (
                <>
                  <span className="animate-spin h-4 w-4"></span>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Send Announcement</span>
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Templates */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Announcement Templates</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h1a1 1 0 001-1V2z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6 8a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6 14a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h1a1 1 0 001-1v-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <h4 className="font-medium text-gray-900">Homework Assignment Template</h4>
                <p className="text-sm text-gray-500">Dear Students, Please find the homework assignment for [Topic/Chapter]. Due date: [Date]. Please submit by the deadline.</p>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => {
                    setAnnouncementType("homework");
                    setTitle("Homework Assignment");
                    setContent("Dear Students, Please find the homework assignment for [Topic/Chapter]. Due date: [Date]. Please submit by the deadline.");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Use Template
                </button>
              </div>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2zM6.75 7.5a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <h4 className="font-medium text-gray-900">Exam Announcement Template</h4>
                <p className="text-sm text-gray-500">Dear Students and Parents, Please be informed that the [Exam Name] will be held on [Date] at [Time]. Syllabus: [Syllabus Details].</p>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => {
                    setAnnouncementType("exam");
                    setTitle("Exam Announcement");
                    setContent("Dear Students and Parents, Please be informed that the [Exam Name] will be held on [Date] at [Time]. Syllabus: [Syllabus Details].");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Use Template
                </button>
              </div>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <h4 className="font-medium text-gray-900">Class Cancellation Template</h4>
                <p className="text-sm text-gray-500">Dear Students, Please note that the [Class Type] scheduled for [Date] at [Time] has been cancelled due to [Reason]. The class will be rescheduled to [New Date].</p>
              </div>
              <div className="flex-shrink-0">
                <button 
                  onClick={() => {
                    setAnnouncementType("general");
                    setTitle("Class Cancellation");
                    setContent("Dear Students, Please note that the [Class Type] scheduled for [Date] at [Time] has been cancelled due to [Reason]. The class will be rescheduled to [New Date].");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Use Template
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Announcements List */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Announcement History</h2>
            <span className="text-sm text-gray-500">{filteredAnnouncements.length} announcements</span>
          </div>
          
          <div className="space-y-3">
            {filteredAnnouncements.map(announcement => (
              <div key={announcement.id} className="flex items-center p-3 border-b border-gray-200">
                <div className="flex-shrink-0 w-10 h-10">
                  {announcement.type === "HOMEWORK" && (
                    <div className="bg-blue-100 rounded flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h1a1 1 0 001-1V2z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6 8a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6 14a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h1a1 1 0 001-1v-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {announcement.type === "EXAM" && (
                    <div className="bg-red-100 rounded flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2zM6.75 7.5a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {announcement.type === "MOCK" && (
                    <div className="bg-yellow-100 rounded flex items-center justify-center">
                      <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {announcement.type === "GENERAL" && (
                    <div className="bg-purple-100 rounded flex items-center justify-center">
                      <svg className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {announcement.type === "REMINDER" && (
                    <div className="bg-green-100 rounded flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1 ml-3">
                  <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                  <p className="text-sm text-gray-500">{announcement.batch} • {announcement.type}</p>
                  {announcement.dueDate && (
                    <p className="text-xs text-gray-500">Due: {announcement.dueDate}</p>
                  )}
                  {announcement.date && (
                    <p className="text-xs text-gray-500">Date: {announcement.date}</p>
                  )}
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className={`text-xs 
                          ${announcement.sentViaWhatsApp ? "text-green-500" : "text-red-500"}`}>
                    {announcement.sentViaWhatsApp ? "Sent via WhatsApp" : "Not Sent"}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button 
                    onClick={() => {}}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => {}}
                    className="ml-2 text-sm text-gray-500 hover:text-gray-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            
            {filteredAnnouncements.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No announcements found matching your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}