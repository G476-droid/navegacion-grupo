import { Student } from "../types";

export type RootStackParamList = {
    Home: undefined
    Detail: {student : Student}
    Edit: {student: Student; mode: 'view' | 'edit'}
};
