import React from 'react';
import { useEffect, useState } from "react";
import handler from '../../api/fetch';
import CalendarModule from 'react-calendar'
import Course from '../Course';
import {ColorRing} from 'react-loader-spinner'

function Calendar(props) {
  // API data is stored in the state
  const [allLectures, setAllLectures] = useState(null);
  // Matching lectures of a picked date stored in the state 
  const [selectedLectures, setSelectedLectures] = useState(null);
  // Picked date stored in the state
  const [date, setDate] = useState(new Date());
  // Save loading state in the state
  const [loading, isLoading] = useState(true)
  // Save first 
  const [firstBoot, setFirstBoot] = useState(false)

  useEffect(() => {
    isLoading(true)
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
  }, [])

  // Find matching lectures for the down part and add label to the calendar
  useEffect(() => {
    checkForLectures(new Date())
    addLabels()
  }, [allLectures])
  
  // Will be triggered everytime the user picks a date
  function refreshCalendar(date) {
    let selected = new Date(date)
    setDate(selected)
    checkForLectures(selected)
    //addLabels() disabled becaus adds multiple timesq
  }
  
  // Check for lectures on a picked date
  function checkForLectures(date) {
    let compareString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
    const lecturesOfTheDate = allLectures && allLectures.filter(item => item.date === compareString);
    setSelectedLectures(lecturesOfTheDate)
  }

  // Simple function to receive de-DE locale date string
  function convertDateToDE(enDate) {
    const date = new Date(enDate)
    const options = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
    const formattedDate = date.toLocaleDateString('de-DE', options);
    return formattedDate
  }

  // Adds labels (tiles) underneath the days in the calendar
  async function addLabels() {
    for (const key in allLectures) {
      if (allLectures.hasOwnProperty.call(allLectures, key)) {
        const { date } = allLectures[key]
        const deDate = convertDateToDE(date)
        const field = document.querySelector('[aria-label="'+deDate+'"]')
        if(field) {
          const probableExistingContainer = document.getElementById(deDate)
          const courseInfo = allLectures[key].info && allLectures[key].info

          if(probableExistingContainer) {
            if(courseInfo == "virtuelle Präsenz") {
              const virtualLectureElement = document.createElement("div")
              virtualLectureElement.classList = "h-[3px] w-[7px] rounded-full mx-[2px] bg-black dark:bg-white"
              probableExistingContainer.appendChild(virtualLectureElement)
            } else if(courseInfo == "Klausur") {
              const examLectureElement = document.createElement("div")
              examLectureElement.classList = "h-[3px] w-[7px] rounded-full mx-[2px] bg-red"
              probableExistingContainer.appendChild(examLectureElement)
            } else {
              const classicLectureElement = document.createElement("div")
              classicLectureElement.classList = "h-[3px] w-[7px] rounded-full mx-[2px] bg-blue"
              probableExistingContainer.appendChild(classicLectureElement)
            }
          } else {
            const container = document.createElement("div")
            container.classList = "absolute left-1/2 -translate-x-1/2 bottom-2 flex justify-center "
            container.id = deDate

            if(courseInfo == "virtuelle Präsenz") {
              const virtualLectureElement = document.createElement("div")
              virtualLectureElement.classList = "h-[3px] w-[7px] rounded-full mx-[2px] bg-black dark:bg-white"
              container.appendChild(virtualLectureElement)
            } else if(courseInfo == "Klausur") {
              const examLectureElement = document.createElement("div")
              examLectureElement.classList = "h-[3px] w-[7px] rounded-full mx-[2px] bg-red"
              container.appendChild(examLectureElement)
            } else {
              const classicLectureElement = document.createElement("div")
              classicLectureElement.classList = "h-[3px] w-[7px] rounded-full mx-[2px] bg-blue"
              container.appendChild(classicLectureElement)
            }
            
            field.parentElement.appendChild(container)
            isLoading(false)
          }
        }
      }
    }
  }
  
  return (
    <>
      <div className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${!loading  && 'hidden'}`}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={['#FB3131', '#008E4D', '#2CC5DA', '#FFFFFF', '#D2D2D2']}
        />
      </div>
      <div className={`mb-28 ${loading  && 'hidden'}`}>
        <div className='text-center'>
          <CalendarModule 
            locale='de-DE'
            onChange={(e) => refreshCalendar(e)}
            value={date}
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
            tileClassName={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? 'sunday' : null}
            onActiveStartDateChange={({ action, activeStartDate, value, view }) => addLabels()}
            />
        </div>
         <div className=''>
          {
            selectedLectures && selectedLectures.map((item) => (
              <Course course={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Calendar;
