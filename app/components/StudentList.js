import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
    return (
        <>
            <h2 className="block font-medium text-xl">Students</h2>
            <ul className="flex gap-3 flex-wrap p-4">
                {students.map((student) => {
                    return <StudentCard {...student} />;
                })}
            </ul>
        </>
    );
};

export default StudentList;
