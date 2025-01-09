import { useLocation } from 'react-router-dom'
import SingleInterior from '../components/SingleInterior'

const SingleProjectPage = () => {
 const location =  useLocation()
 console.log(location?.state?.data);
  return (
    <SingleInterior/>
  )
}

export default SingleProjectPage