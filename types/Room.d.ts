import { StudentId } from './Student';

export type Room = {
    roomNumber: number;
    studentIds: StudentId[];
    gender: gender;
};

export type gender = 'm' | 'f';
