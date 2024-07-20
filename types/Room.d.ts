import { ProjectId } from './Project';
import { StudentId } from './Student';

export type Room = {
    roomNumber: number;
    studentIds: StudentId[];
    gender: gender;
    projectId: ProjectId;
};

export type gender = 'm' | 'f';
