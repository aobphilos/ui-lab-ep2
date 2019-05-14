import { ReportType } from '..';

export class Report {
  constructor(
    public reportType: ReportType = ReportType.REGULAR_REPORT,
    public isIncludeSealingCard: boolean = false,
    public isIncludeSealingBox: boolean = false,
    public isIncludeOriginalReport: boolean = false,
  ) {}
}
