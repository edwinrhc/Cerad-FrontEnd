import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobExecutionHistory } from '../../core/models/batch.interface';
import { BatchHistoryService } from '../../core/services/batch-history.service';

@Component({
  selector: 'app-batch-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './batch-history.component.html',
  styleUrl: './batch-history.component.css'
})
export class BatchHistoryComponent implements OnInit {

  jobNames: string[] = [];
  executions: JobExecutionHistory[] = [];
  selectedJob = '';
  count = 5;

  constructor(private historySvc: BatchHistoryService) {}

  ngOnInit(): void {
    this.historySvc.listJobNames().subscribe(names => {
      this.jobNames = names;
      if (names.length > 0) {
        this.selectedJob = names[0];
        this.fetchExecutions();
      }
    });
  }

  fetchExecutions(): void {
    this.historySvc
      .getJobHistory(this.selectedJob, this.count)
      .subscribe(history => this.executions = history);
  }
}
