
export enum AgentType {
  COGNITIVE_PROFILE = "COGNITIVE_PROFILE",
  LEARNING_PATH = "LEARNING_PATH",
  CONTENT_ADAPTATION = "CONTENT_ADAPTATION",
  ASSESSMENT = "ASSESSMENT",
  ENGAGEMENT = "ENGAGEMENT",
  FEEDBACK = "FEEDBACK",
  UI_UX = "UI_UX",
  SCHEDULING = "SCHEDULING",
  TUTORING = "TUTORING"
}

export enum TaskType {
  COGNITIVE_PROFILING = "COGNITIVE_PROFILING",
  LEARNING_PATH_GENERATION = "LEARNING_PATH_GENERATION",
  LEARNING_PATH_UPDATE = "LEARNING_PATH_UPDATE",
  CONTENT_ADAPTATION = "CONTENT_ADAPTATION",
  ASSESSMENT_GENERATION = "ASSESSMENT_GENERATION",
  ENGAGEMENT_OPTIMIZATION = "ENGAGEMENT_OPTIMIZATION",
  FEEDBACK_GENERATION = "FEEDBACK_GENERATION",
  UI_OPTIMIZATION = "UI_OPTIMIZATION",
  SCHEDULE_OPTIMIZATION = "SCHEDULE_OPTIMIZATION",
  FLASHCARD_OPTIMIZATION = "FLASHCARD_OPTIMIZATION",
  MULTI_AGENT_COORDINATION = "MULTI_AGENT_COORDINATION",
  TUTORING = "TUTORING",
  // Add missing types
  ANALYSIS = "ANALYSIS",
  CONTENT_GENERATION = "CONTENT_GENERATION",
  PLANNING = "PLANNING"
}

export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "CRITICAL"
}

export enum TaskStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}

export interface Task {
  id: string;
  type: TaskType;
  priority: TaskPriority;
  status: TaskStatus;
  data: any;
  createdAt: string;
  updatedAt?: string;
  completedAt?: string;
}

export interface AgentTask extends Task {
  userId: string;
  taskType: TaskType;
  targetAgentTypes: AgentType[];
  context: Record<string, any>;
  data: any;
  id: string;
}

export interface AgentMessage {
  id: string;
  senderId: string;
  receiverId: string;
  messageType: string;
  type?: string; // For compatibility with existing code
  content: string;
  timestamp: string;
  priority: TaskPriority;
  data?: any;
  sender?: string; // For compatibility with existing code
  messageId?: string; // For compatibility
  recipientId?: string; // For compatibility
}

export interface SystemState {
  activeAgents: Record<AgentType, boolean>;
  taskQueue: Task[];
  completedTasks: Task[];
  metrics: {
    completedTasks: number;
    averageResponseTime: number;
    successRate: number;
    taskCompletionRate: number;
    userSatisfactionScore?: number; // Added for compatibility
  };
  globalVariables: Record<string, any>;
  priorityMatrix: Record<string, number>;
  lastUpdated: string;
  currentLoad?: number; // Added for compatibility
  status?: 'idle' | 'processing' | 'overloaded'; // Added for compatibility
}

export interface CognitiveProfile {
  userId: string;
  learningStyle: Record<string, number> | string;
  strengths: string[];
  weaknesses: string[];
  recommendedTopics: string[];
  retentionPatterns: Record<string, number>;
  createdAt: string;
  updatedAt: string;
  preferredContentFormats?: string[];
  learningSpeed?: number;
  knowledgeGraph?: Record<string, any>;
  lastUpdated?: string;
  // Add compatibility with visual, auditory, reading, kinesthetic
  visual?: number;
  auditory?: number;
  reading?: number;
  kinesthetic?: number;
}
