import { Link } from "react-router-dom";
import NewIndexElement from "./NewIndexElement"
import {CORE_CONCEPTS} from "../data/data.js"
export default function NewIndex1() {
    return (
      <>
      <h1>This is About</h1>
      <br/>
      <Link to='/newindex1details/111/tw'>Index content 111</Link>      <br/>
      <Link to='/newindex1details/222/kowloon'>Index content 222</Link>      <br/>
      <Link to='/newindex1details/333/lamtin'>Index content 333</Link>      <br/>
      <hr/>
      <NewIndexElement 
        title={CORE_CONCEPTS[0].title} 
        description={CORE_CONCEPTS[0].description} 
        image={CORE_CONCEPTS[0].image}/>



      <NewIndexElement props={CORE_CONCEPTS[1]}/>
      <NewIndexElement {...CORE_CONCEPTS[2]}/>
      <NewIndexElement {...CORE_CONCEPTS[3]}/>
      </>
    )
  }