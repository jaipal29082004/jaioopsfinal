import React from "react";

const AddStudentForm = ({ setStudents }) => {
    const handleAddStudent = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const newStudent = {
            first_name: form.get("firstName"),
            last_name: form.get("lastName"),
            date_of_birth: form.get("DOB"),
            current_grade: form.get("grade"),
        };
        setStudents((prev) => [...prev, newStudent]);
        e.target.reset();
    };
    return (
        <form onSubmit={handleAddStudent} className="max-w-sm mx-auto">
            <div class="mb-5">
                <label
                    for="firstname"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    First Name
                </label>
                <input
                    id="firstname"
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    required
                />
            </div>

            <div class="mb-5">
                <label
                    for="lastname"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    Last Name
                </label>
                <input
                    id="lastname"
                    name="lastName"
                    type="text"
                    placeholder="last name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    required
                />
            </div>

            <div class="mb-5">
                <label
                    for="dob"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    DOB
                </label>
                <input
                    id="dob"
                    name="DOB"
                    type="text"
                    placeholder="DOB"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    required
                />
            </div>

            <div class="mb-5">
                <label
                    for="grade"
                    class="block mb-2 text-sm font-medium text-gray-900">
                    DOB
                </label>
                <input
                    id="grade"
                    name="grade"
                    type="text"
                    placeholder="Grade"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                    required
                />
            </div>

            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md  text-sm w-full px-10 py-2.5 text-center max-w-min ">
                Submit
            </button>
        </form>
    );
};

export default AddStudentForm;
