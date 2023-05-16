export default function Grade({grade}) {
    const title = grade.bez;
    const percent = grade.prozent;
    const finalGrade = grade.note;
    return (
        <div className="flex justify-between mx-4 my-8">
            {(title || percent) &&
                <div>
                    {title && <h3 className="font-bold text-maintitle-course mt-0.5 mb-1.5">{title}</h3>}
                    {percent && <p className="font-semibold uppercase text-maintitle-column">{percent}%</p>}
                </div>
            }
            {finalGrade &&
                <div className="py-4 pl-4">
                    <div className={`w-8 h-8 flex justify-center items-center font-bold text-white bg-${finalGrade == 5 ? 'red' : 'blue'} rounded-full`}>{finalGrade}</div>
                </div>
            }
        </div>
    )
}
