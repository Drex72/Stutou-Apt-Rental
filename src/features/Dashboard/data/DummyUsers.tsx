import { IUser } from "../../../interfaces/IAPIResponse";

export const dummyUsers: IUser[] = [
    {
        _id: '1',
        activated: false,
        apartments: [],
        email: 'david@gmail.com',
        firstname: 'Okunoye',
        lastname: 'David',
        reported: 1,
        status: 'owner'
    }
]

export const UserFilterOptions = [
    { value: "all", label: "All" },
    { value: "owner", label: "Owner" },
    { value: "student", label: "Student" },
];
