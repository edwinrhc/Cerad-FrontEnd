import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobExecutionHistory } from '../models/batch.interface';

@Injectable({ providedIn: 'root' })
export class BatchHistoryService {
  private baseUrl = 'http://localhost:8085/api/batch';

  constructor(private http: HttpClient) {}

  listJobNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/jobs`);
  }

  getJobHistory(jobName: string, count: number = 5): Observable<JobExecutionHistory[]> {
    return this.http.get<JobExecutionHistory[]>(`${this.baseUrl}/jobs/${jobName}/history?count=${count}`);
  }
}
