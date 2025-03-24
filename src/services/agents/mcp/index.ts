
import { AgentMessage, AgentTask, AgentType, SystemState } from '../types';
import { createAgentRegistry } from './agentRegistry';
import { TaskProcessor } from './taskProcessor';
import { SystemStateManager } from './systemState';
import { CommunicationManager } from './communication';
import { UserContextManager } from './userContext';

/**
 * Master Control Program (MCP)
 * 
 * Central orchestration layer that coordinates all agent activities,
 * maintains system coherence, and ensures alignment with user learning objectives.
 */
export class MasterControlProgram {
  private static instance: MasterControlProgram;
  private taskProcessor: TaskProcessor;
  private systemStateManager: SystemStateManager;
  private communicationManager: CommunicationManager;
  private userContextManager: UserContextManager;

  private constructor() {
    this.taskProcessor = new TaskProcessor();
    
    const agentRegistry = this.taskProcessor.getAgentRegistry();
    const registeredAgents = agentRegistry.getRegisteredAgentTypes();
    
    this.systemStateManager = new SystemStateManager(registeredAgents);
    this.communicationManager = new CommunicationManager();
    this.userContextManager = new UserContextManager(this.communicationManager);
    
    console.log('MCP initialized with agents:', registeredAgents);
  }

  /**
   * Get the singleton instance of the MCP
   */
  public static getInstance(): MasterControlProgram {
    if (!MasterControlProgram.instance) {
      MasterControlProgram.instance = new MasterControlProgram();
    }
    return MasterControlProgram.instance;
  }

  /**
   * Submit a task to be handled by the appropriate agent(s)
   */
  public async submitTask(task: AgentTask): Promise<void> {
    try {
      await this.taskProcessor.submitTask(task);
      this.systemStateManager.updateMetrics(true);
    } catch (error) {
      console.error('Error submitting task:', error);
      this.systemStateManager.updateMetrics(false);
    }
  }

  /**
   * Get the current system state
   */
  public getSystemState(): SystemState {
    return this.systemStateManager.getSystemState();
  }

  /**
   * Broadcast a message to all agents or specific agents
   */
  public broadcastMessage(message: AgentMessage, targetAgents?: AgentType[]): void {
    this.communicationManager.broadcastMessage(message, targetAgents);
  }

  /**
   * Initialize the system for a specific user
   */
  public async initializeForUser(userId: string): Promise<void> {
    await this.userContextManager.initializeForUser(userId, 
      (key, value) => this.systemStateManager.setGlobalVariable(key, value)
    );
    
    // Create initial cognitive profile task
    this.submitTask({
      id: `initial-cognitive-profiling-${Date.now()}`,
      userId,
      taskType: 'COGNITIVE_PROFILING',
      description: 'Initial cognitive profiling for user',
      priority: 'HIGH',
      targetAgentTypes: ['COGNITIVE_PROFILE'],
      context: ['initial_setup', 'user_profile'],
      data: {},
      createdAt: new Date().toISOString(),
    });
  }
}

// Export a singleton instance for use throughout the application
export const mcp = MasterControlProgram.getInstance();
