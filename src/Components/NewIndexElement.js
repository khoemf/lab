/*
//data structure of CORE_CONCEPTS
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  }]
 */

// call with <NewIndexElement  
//              title={CORE_CONCEPTS[0].title}  
 //             description={CORE_CONCEPTS[0].description} 
  //            image={CORE_CONCEPTS[0].image}/>

  // or 

      // <NewIndexElement {...CORE_CONCEPTS[1]}/>
export default function NewIndexElement(props) {

    return (
      <>
      <h1>{props.title}</h1>
      Desc:{props.description}<br/>@@@
      </>
    )
  }
  
  
/*
export default function NewIndexElement({description,title,image}) {

    return (
      <>
      <h1>{title}</h1>
      Desc:{description}<br/>XXXXyyy
      </>
    )
  }
  */

/*
  // call by <NewIndexElement {...CORE_CONCEPTS[0]}/>
  // no attribute "concept" in <NewIndexElement/>

  export default function NewIndexElement({...concept}) {

    return (
      <>
      <h1>{concept.title}</h1>
      Desc:{concept.description}<br/>!
      </>
    )
  }
  */

  
/*  

//call <NewIndexElement concept = {CORE_CONCEPTS[0]}/>
  //require attribute "concept" in <NewIndexElement/>

  export default function NewIndexElement({concept}) {

  return (
      <>
      <h1>{concept.title}</h1>
      Desc:{concept.description}<br/>===
      </>
    )
  }
  
  */