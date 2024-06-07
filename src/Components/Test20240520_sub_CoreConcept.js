
export default function CoreConcept(props){
    console.log(props)
    return (
      <>
      <h1>FAIFAI</h1>
      <ul>
        <li>{props.title}</li>
        <li>{props.description}</li>
      </ul>
      </>
    )
  }