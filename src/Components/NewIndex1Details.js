import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function NewIndex1Details() {

    let { index_id , location} = useParams();

    return (
      <>
      <h1>NewIndex1Details</h1><br/>
      <h4>WIth Detail ID : {index_id}</h4>
      <h4>WIth Detail Location : {location}</h4>
      <Link to ='/newindex1'>Back</Link>
      </>
    )
  }