export interface JobExecutionHistory {
  id: number;
  jobName: string;
  status: string;
  startTime: string; // formato ISO (string)
  endTime: string;
  durationInSeconds: number | null;
}
