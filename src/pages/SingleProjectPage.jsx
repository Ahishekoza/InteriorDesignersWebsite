import { useLocation } from 'react-router-dom'
import SingleInterior from '../components/SingleInterior'

const SingleProjectPage = () => {
 const location =  useLocation()
 console.log(location)
 const imagesAndThumbnails = location?.state?.data;
  return (
    <SingleInterior imagesInfo={imagesAndThumbnails}/>
  )
}

export default SingleProjectPage