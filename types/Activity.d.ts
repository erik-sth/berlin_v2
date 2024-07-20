export type Activity = {
    _id: ActivityId;
    name: string;
    startTime: Date;
    endTime: Date;
    activityGroupId: string;
    studentIds: string[];
    studentLimit: number;
};

export type ActivityId = string;
