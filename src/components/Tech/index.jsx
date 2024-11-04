/* eslint-disable react/prop-types */
const Tech = ({isHighLight, data}) => {
  return (
    <div>
      <div className="flex gap-4 text-sm">
      {
        data.map((e, i) => (

          <div key={`${e}-tech-${i}`} className={`rounded-md bg-primaryB text-gray-200 py-2 px-2 pt-1 ${isHighLight ? "text-gray-50" : "" }`}>{e}</div>
        ))
      }
                
    </div>
    </div>
    
  )
}

export default Tech