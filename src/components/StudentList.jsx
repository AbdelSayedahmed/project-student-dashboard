import React from "react";
import data from '/src/data/data.json';
import "/src/styles/StudentList.css"

export default function StudentList() {
    const middleInitial = (str) => `${str[0]}.`;

    function formatDate(inputDate) {
        const parts = inputDate.split('/');
      
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const month = months[parseInt(parts[0], 10) - 1];
        const day = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
      
        return `${month} ${day}, ${year}`;
      }

    return (
        <div>
          {data.map((item) => (
            <div key={item.id} className="card">
                <img src={item.profilePhoto} alt={`${item.names.preferredName}'s profile photo`} />
                <div className="container">
                    <h3>{item.names.preferredName} {middleInitial(item.names.middleName)} {item.names.surname}</h3>
                    <p>{item.username}</p>
                    <p><span>Birthday: </span>{formatDate(item.dob)}</p>
                    <button>Show More...</button>
                </div>
            </div>
          ))}
        </div>
      );
}