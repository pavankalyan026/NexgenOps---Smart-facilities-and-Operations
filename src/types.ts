export type PriorityLevel = 'Critical' | 'High' | 'Medium' | 'Low';

export type StatusType = 
  | 'New' 
  | 'Assigned' 
  | 'In Progress' 
  | 'Pending Verification' 
  | 'Escalated' 
  | 'Overdue' 
  | 'Resolved' 
  | 'Closed';

export interface ComplaintRecord {
  id: string;
  title: string;
  category: string;
  location: string;
  department: string;
  priority: PriorityLevel;
  assignee: string;
  status: StatusType;
  reportedAt: string;
  slaTarget: string;
  description: string;
}

export interface SnagRecord {
  id: string;
  title: string;
  location: string;
  issue: string;
  priority: PriorityLevel;
  assignedTo: string;
  status: 'Open' | 'In Progress' | 'Rectified' | 'Verified' | 'Closed';
  dueDate: string;
  evidenceCount: number;
  trade: string;
  commentsCount: number;
}

export interface WorkOrderRecord {
  id: string;
  title: string;
  category: string;
  location: string;
  priority: PriorityLevel;
  assignedTeam: string;
  dueDate: string;
  status: 'Request' | 'Assigned' | 'Execution' | 'Verification' | 'Completed';
  estimatedHours: string;
}

export interface MaintenanceTask {
  id: string;
  assetName: string;
  taskType: string;
  location: string;
  dueDate: string;
  relativeTime: 'Today' | 'Tomorrow' | '3 Days' | 'Overdue' | 'Upcoming';
  status: 'Scheduled' | 'Planned' | 'In Progress' | 'Completed' | 'Overdue';
  frequency: string;
  assignedTech: string;
}

export interface AssetRecord {
  id: string;
  name: string;
  code: string;
  location: string;
  category: string;
  status: 'Operational' | 'Maintenance' | 'Under Inspection' | 'Offline';
  lastService: string;
  nextService: string;
  healthScore: number;
  specs: {
    capacity?: string;
    manufacturer?: string;
    model?: string;
    installDate?: string;
  };
  serviceHistory: Array<{
    date: string;
    type: string;
    technician: string;
    notes: string;
  }>;
}

export interface InventoryItem {
  id: string;
  name: string;
  partNumber: string;
  category: string;
  available: number;
  minimum: number;
  reserved: number;
  unit: string;
  status: 'IN STOCK' | 'LOW STOCK' | 'CRITICAL' | 'REORDERED';
  locationBin: string;
  recommendation?: string;
}

export interface InspectionCheckItem {
  id: string;
  area: string;
  checked: boolean;
  status: 'Passed' | 'Action Needed' | 'Pending';
  finding?: string;
  actionRequired?: string;
}

export interface VendorRecord {
  id: string;
  companyName: string;
  category: string;
  activeJobs: number;
  pendingJobs: number;
  completedJobs: number;
  overdueJobs: number;
  slaCompliance: number;
  contactPerson: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestions?: string[];
  operationalData?: {
    type: 'complaints' | 'maintenance' | 'inventory' | 'snags' | 'summary';
    items: Array<{ label: string; value: string; badge?: string }>;
  };
}

export interface DemoFormData {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  jobRole: string;
  organizationType: string;
  message: string;
}
