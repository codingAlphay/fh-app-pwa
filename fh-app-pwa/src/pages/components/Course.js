export default function Course({course}) {
    const jg = course.jg;
    const group = course.group;
    const [title, type] = course.courseName.split(' / ');
    const room = course.room;
    const lecturer = course.lecturer;
    const date = course.date;
    const info = course.info; // "Klausur" or "virtuelle Präsenz"
    const startTime = course.startTime;
    const endTime = course.endTime;
    // to do: check the different lecture types to change the color
    function getColor() {
        if(info == "Klausur") {
            return 'red'
        } else if(info == "virtuelle Präsenz") {
            return 'black dark:border-white dark:after:bg-white dark:text-white'
        } else {
            return 'blue'
        }
    }
    return (
        <div className="flex mx-2 my-8">
            {/* workaround: Tailwind isn't generating the classes properly when appending the classes dynamically with template literals */}
            <p className="hidden border-black border-white text-red after:bg-red border-red text-green after:bg-green border-green after:bg-black after:bg-white text-blue after:bg-blue border-blue">Course</p>

            {(startTime || type || endTime) &&
                <div className={`flex flex-col justify-between font-bold text-10 pr-2.5 border-r-2 ${getColor() ? `border-${getColor()}` : ''} relative after:content-[''] after:w-[10px] after:h-[10px] after:absolute after:top-1/2 after:-right-1 after:translate-x-[20%] after:-translate-y-1/2 after:rounded-full ${getColor() ? `after:bg-${getColor()}` : ''}`}>
                    {startTime && <p className="tracking-wide text-time-span">{startTime}</p>}
                    {type && <p className={getColor() ? `text-time-span tracking-widest text-${getColor()}` : ''}>{type}</p>}
                    {endTime && <p className="tracking-wide text-time-span">{endTime}</p>}
                </div>
            }
            {(jg || group || title || room || lecturer) &&
                <div className="py-4 pl-4">
                    {(jg || group) && (
                        <p className="tracking-wider text-maintitle-column opacity-40">
                            {jg}
                            {jg && group && <> | </>}
                            {group && <>Group {group}</>}
                        </p>
                    )}
                    {title && <h2 className="font-bold text-maintitle-course mt-0.5 mb-1.5">{title}</h2>}
                    {(room || lecturer) && (
                        <p className="font-semibold uppercase text-maintitle-column">
                            {room}
                            {room && lecturer && <> • </>}
                            {lecturer}
                        </p>
                    )}
                </div>
            }
        </div>
    )
}
