import { ProjectId } from './Project';

export type Activity = {
    _id: ActivityId;
    name: string;
    startTime: Date;
    endTime: Date;
    activityGroupId: string;
    studentIds: string[];
    studentLimit: number;
    projectId: ProjectId;
};

export type ActivityId = string;
