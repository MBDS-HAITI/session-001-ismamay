import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetails.css";

function CourseDetails({ data }) {
    const { id } = useParams();
    const navigate = useNavigate();


    const course = data.find((c) => c._id === id);

    if (!course) {
        return (
            <div className="details-container">
                <h2 className="not-found">Course not found</h2>
                <button className="back-btn" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="details-container">

            <div className="details-card">
                <h1 className="details-title">{course.name}</h1>

                <p className="details-item">
                    <strong>Code :</strong> {course.code}
                </p>

                <p className="details-item">
                    <strong>ID :</strong> {course._id}
                </p>

                <button className="back-btn" onClick={() => navigate("/CoursesTable")}>
                    Back to Courses
                </button>
            </div>

        </div>
    );
}

export default CourseDetails;
