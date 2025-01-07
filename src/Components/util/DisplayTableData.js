import DisplayTableTitle from './DisplayTableTitle';

export default function DisplayTableData({titleAry, rs}){

   // Define an inline style object
   const style = {    
    border: '5px solid black',    
  };

    console.log(titleAry);    
    
  
  return (
    <>
    Hello World in DisplayTableData
    <table cellPadding="2" cellSpacing="2" style={style}>
        <tr>
            <DisplayTableTitle title={titleAry}/>
        </tr>
        {

          // study point
          // it must must check if "rs && rs.length > 0"
          // since react will display it first without get data, so rs must = null in first init          
          rs && rs.length > 0 && typeof rs === 'object'? (
            rs.map((_rs, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  {
                    Object.entries(_rs).map(([key, value]) => {
                      //console.log(`${key}: ${value}`);
                      if(titleAry.includes(key)){
                        return(<td>{value}</td>)           
                      }                                 
                    })
                  }
                </tr>
              );
            
            })
          )
          :(<tr>no value la</tr>)
        }
    </table>
    </>
  );
}