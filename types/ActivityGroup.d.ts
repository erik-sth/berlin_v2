import { Activity, ActivityId } from './Activity';

// Represents a group of activities assigned to specific students
export type ActivityGroup = {
    _id: number; // Unique identifier for the group
    requiredActivities: ActivityId[]; // List of required activity names
    studentIds: string[]; // IDs of students belonging to this group
    validDistributionNumbersForTheseGroup: number[][]; // Valid path distribution numbers
    paths: PathData[]; // List of possible paths for this group
};

// Represents data for a specific path within an activity group
export type PathData = {
    pathElements: Activity[]; // List of activities in this path
    testStudentDistributionValue: number; // Value indicating test distribution for students
};
