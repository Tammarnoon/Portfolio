// eslint-disable-next-line react/prop-types
const FomattedDate = ({children, isHighLight}) => {
  return (
    <div className="text-xl">
    <span className={`text-primaryA text-xl font-semibold ${isHighLight ? "text-primaryB" : ""}`}>
      {children}
      </span>
  </div>
  )
}

export default FomattedDate