import React from "react";

const StudentCard = ({
    first_name,
    last_name,
    date_of_birth,
    current_grade,
}) => {
    return (
        <li className="bg-neutral-50 rounded-lg py-3 px-10 flex flex-col gap-4">
            <span>Name: {first_name + " " + last_name}</span>
            <span>DOB: {date_of_birth}</span>
            <span>Grade: {current_grade}</span>
        </li>
    );
};

export default StudentCard;
