import { ActivityId } from './Activity';
import { PollId } from './Poll';
import { StudentId } from './Student';

export type Project = {
    _id: ProjectId;
    name: string;
    requiredActivitiesIds: ActivityId[];
    pollIds: PollId[];
    status:
        | 'InPreparation'
        | 'WaitingForWorker'
        | 'Fetching'
        | 'Validating'
        | 'CreateGroups'
        | 'CreateGraph'
        | 'FindPaths'
        | 'Distributing'
        | 'Allocating'
        | 'FinishedCalc'
        | 'StoreData'
        | 'Finished';
    failedCalculating: boolean;
    reasonForFailing: string;
    studentIds: StudentId[];
};

export type ProjectId = string;
