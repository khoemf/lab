import React from 'react'

//reference https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659750#search
// title : 65. Problem: Props Are Not Forwarded To Inner Elements
//learn how to pass {children} props

export function Test20240818ForDisplayTitle({title, children, ...props}) {
  //1
  //point to note : $children is a magic Props, the name must be children. Cannot change to others variable
  //it shows all html tag inside/between tag "Test20240818ForDisplayTitle"


  //2
  //"...props" is a javascript feature called "Rest Property".
  //This syntax groups all remaining object properties into a new object(named props in this case)
  //this syntax is very useful to set a tag with multiple attributes

  //If don't use this group syntax. It needs to pass {id , className, onClick} , type one by one
  //and set <span id={id} , className={className}, onClick={onClick}
  //now you can append any other attributes in the tag "<Test20240818ForDisplayTitle>".
  //with syntax <span {...props}/>
  //no code change inside compontent "Test20240818ForDisplayTitle". 
  //It appends the attribute in the $props to "<span>" automatically


  return (
    <>
      <hr/>
      <b>Common Title</b> : <span {...props}>{title}</span><br/><br/>
      {children}
      <hr/>
    </>
  );
}
export default function Test20240818() {

  function handleOnClick(){
    console.log("hello!!1");
  }
  return (
    <>
    <div>Test20240818</div>
    <br/>

    <Test20240818ForDisplayTitle id="aa" title='天氣提示' className="aaa" onClick={handleOnClick}>    
    <h1>上午09時25分天文台特別天氣提示：香港今日天氣不穩定 雨勢大伴隨狂風雷暴</h1>    
    <div>
    香港天文台於今日上午09時25分發出特別天氣提示，受廣闊低壓槽影響，本港天氣情況顯著不穩定。市民須留意，今日將有時出現大雨及狂風雷暴，外出時請攜帶適當雨具，並注意個人安全。建議市民盡量留在室內，避免前往山區或低窪地帶，以免遭遇突發水浸或山泥傾瀉。此外，請密切關注天文台的最新天氣報告及警告，並遵循政府部門的安全指示，確保個人及家庭的安全。</div>    
    <div>
    End of report!!      
    </div>
    </Test20240818ForDisplayTitle>



    <Test20240818ForDisplayTitle title='Bloomberg Message' id="bb" className="bbb" onClick={handleOnClick}>    
    <h1>台積電首家歐洲晶圓廠動土動工 獲德國政府50億歐元補貼</h1>    
    <div>
    「我們依靠半導體來實現可持續未來技術，但我們不能依賴世界其他地區的半導體供應，」德國總理朔爾茨周二出席德累斯頓市的工廠開工儀式時說。這家晶圓廠耗資100億歐元(110億美元)，其中約一半資金由國家補貼提供。</div>    
    <div>
    德國正牽頭推動歐盟在2030年前生產全球五分之一半導體的計畫。在遭遇新冠疫情導致的供應鏈受阻和中美關係惡化之後，歐盟正尋求擴大產能。美國、日本和其他國家也在向晶片行業提供大量補貼以實現本地化生產。
    </div>
    </Test20240818ForDisplayTitle>

    </>
  )
}
