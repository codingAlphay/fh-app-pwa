import React from 'react';
import { useEffect, useState } from "react";
import handler from '../../api/fetch';
import CalendarModule from 'react-calendar'

function Calendar(props) {
  // API data is stored in the state
  const [allLectures, setAllLectures] = useState([]);
  const [selectedLectures, setSelectedLectures] = useState([]);
  
  const [value, onChange] = useState(new Date());


  useEffect(() => {
    async function fetchData() {
      const now = new Date();
      const currentMonth = now.getMonth() + 1; // Add 1 because getMonth() returns zero-based months
      const currentYear = now.getFullYear();
      const isSecondSemester = currentMonth >= 2 && currentMonth <= 7;

      // Calculate the "from" and "until" dates based on the current semester
      let from, until;

      if (isSecondSemester) {
        // if requested in second semester
        from = `01.09.${currentYear - (currentMonth < 9 ? 1 : 0)}`;
        until = `31.07.${currentYear}`;
      } else {
        from = `01.09.${currentYear - (currentMonth < 9 ? 1 : 0)}`;
        until = `31.07.${currentYear + (currentMonth < 9 ? 0 : 1)}`;
      }

      // Construct the API URL with the calculated dates and pkz
      const apiUrl = `infoboard/getrpdata?from=${from}&until=${until}&pkz=2110653142`;
      const newData = await handler(apiUrl)
      setAllLectures(newData)
    }
    fetchData()
  }, []);

  useEffect(() => {
    onDateSelect(new Date());
  }, [allLectures]);
  
  async function onDateSelect(date) {
    let selected = new Date(date)
    onChange(selected)
    
    let compareString = selected.getFullYear() + '-' + ('0' + (selected.getMonth() + 1)).slice(-2) + '-' + ('0' + selected.getDate()).slice(-2)
    checkForLectures(compareString)
  }

  async function checkForLectures(selectedDate) {
    const lecturesOfTheDate = allLectures.filter(item => item.date === selectedDate);
    setSelectedLectures(lecturesOfTheDate)
    console.log(allLectures)
    console.log(lecturesOfTheDate)
  }
  async function determineSemesterForApi() {

  }
    return (
        <div>
          <div className='text-center'>
            <CalendarModule 
              locale='de-DE'
              onChange={(e) => onDateSelect(e)}
              value={value}
              minDetail={"month"}
              next2Label={null}
              nextLabel={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.022 14.999V18.25C13.022 18.662 13.357 19 13.774 19C13.962 19 14.149 18.929 14.292 18.794C16.067 17.109 19.237 14.102 20.688 12.725C20.888 12.536 21 12.273 21 12C21 11.726 20.888 11.464 20.688 11.275C19.237 9.898 16.067 6.89 14.292 5.207C14.149 5.071 13.962 5 13.774 5C13.357 5 13.022 5.337 13.022 5.75V9.001H4.002C3.471 9.001 3 9.471 3 10.001V13.999C3 14.529 3.471 14.999 4.002 14.999H13.022Z" fill="#008E4D"/>
                </svg>
              }
              prev2Label={null}
              prevLabel={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.978 9.001L10.978 5.75C10.978 5.338 10.643 5 10.226 5C10.038 5 9.851 5.071 9.708 5.206C7.933 6.891 4.763 9.898 3.312 11.275C3.112 11.464 3 11.727 3 12C3 12.274 3.112 12.536 3.312 12.725C4.763 14.102 7.933 17.11 9.708 18.793C9.851 18.929 10.038 19 10.226 19C10.643 19 10.978 18.663 10.978 18.25L10.978 14.999L19.998 14.999C20.529 14.999 21 14.529 21 13.999L21 10.001C21 9.471 20.529 9.001 19.998 9.001L10.978 9.001Z" fill="#008E4D"/>
                </svg>
              }
              />
          </div>
            {
                selectedLectures.map((item) => (
                    <div>
                        <h1>{item.courseName}</h1>
                        <p>{item.lecturer}</p>
                        <p>{item.date}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Calendar;