
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MultiAgentSystem } from '@/services/agents';
import { TaskType } from '@/services/agents/types/agentTypes';
import { TaskSubmissionOptions } from './types';

/**
 * Hook for managing task submissions to the multi-agent system
 */
export function useTaskSubmission() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState<Record<string, boolean>>({});

  /**
   * Submit a task to the multi-agent system
   */
  const submitTask = async (taskType: TaskType, data: any = {}, options?: TaskSubmissionOptions) => {
    if (!MultiAgentSystem.getInstance().isInitialized()) {
      toast({
        title: 'System Not Ready',
        description: 'The learning system is not initialized yet.',
        variant: 'destructive',
      });
      return null;
    }
    
    try {
      const taskId = `task-${Date.now()}`;
      setSubmitting(prev => ({ ...prev, [taskType]: true }));
      
      // In a real implementation, we would submit the task to the system
      // For now, we'll just log it
      console.log(`Submitting task ${taskType} with ID ${taskId}`, data);
      
      // Simulate a delay and response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        taskId,
        status: 'submitted',
        message: `Task ${taskType} submitted successfully`
      };
    } catch (error) {
      console.error(`Error submitting task ${taskType}:`, error);
      toast({
        title: 'Error',
        description: 'Failed to submit the task.',
        variant: 'destructive',
      });
      return null;
    } finally {
      setSubmitting(prev => ({ ...prev, [taskType]: false }));
    }
  };

  /**
   * Generate learning recommendations
   */
  const generateRecommendations = async () => {
    return submitTask(TaskType.LEARNING_PATH_GENERATION);
  };
  
  /**
   * Generate cognitive profile
   */
  const generateCognitiveProfile = async () => {
    return submitTask(TaskType.COGNITIVE_PROFILING);
  };
  
  /**
   * Optimize study schedule
   */
  const optimizeStudySchedule = async (options: any) => {
    return submitTask(TaskType.SCHEDULE_OPTIMIZATION, options);
  };
  
  /**
   * Generate assessment
   */
  const generateAssessment = async (topicIds: string[]) => {
    return submitTask(TaskType.ASSESSMENT_GENERATION, { topicIds });
  };

  return {
    submitTask,
    generateRecommendations,
    generateCognitiveProfile,
    optimizeStudySchedule,
    generateAssessment,
    submitting
  };
}
