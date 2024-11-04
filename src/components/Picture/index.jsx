// eslint-disable-next-line react/prop-types
const Picture = ({picture, title}) => {
  if(!picture){
    return null
  }
  return (
    <div>
    <img src={picture} alt={title} className="w-5/6" />
  </div>
  )
}

export default Picture