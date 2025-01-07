export default function DisplayTableTitle({title}){
  
  return (
    <>    
    {        
      title.map((titleEle) => (<td>{titleEle}</td>))        
    }
    </>
  );
}