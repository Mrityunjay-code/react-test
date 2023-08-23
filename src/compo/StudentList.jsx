import React from 'react';

const StudentList = ({ studentNames }) => {
  return (
    <ul>
      {studentNames.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default StudentList;
