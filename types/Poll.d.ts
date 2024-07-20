import { ActivityId } from './Activity';

export type PollChoice = {
    _id: string;
    answer: string;
    activityId: ActivityId;
    studentIds: string[];
    limit?: number;
};

export type Poll = {
    _id: PollId;
    question: string;
    choices: PollChoice[];
};

export type PollId = string;
