import React, { useState } from 'react';
import data from './accordian/data';

const Accordian = () => {

  const [click,setClick] = useState(null);
  const [enableMS,setEnableMS]= useState(false);
  const [multi,setMulti] = useState([]);


function handleQuestion (id){
  console.log("id:"+id);
  setClick(id == click ?null :id )
}
function handleMultiQuestion (id){
  let copy = [...multi];
  const index = copy.indexOf(id);
  console.log("index id:"+index+"|btn:"+enableMS);
  if(index==-1){
    copy.push(id)
  }
  else{
    copy.splice(index,1);
  }
  //console.log("multi:"+multi);
  setMulti(copy);
}

  

  return (
 
    <div className='wrapper accordian max-lg:100 flex flex-row min-h-screen justify-center  bg-stone-400'>
      <div className='wrap mx-auto w-4/5'>
        <h1  className='text-center mb-2'>Accordian</h1>
        <button className='bg-slate-800 text-white p-2 border-r-2 mx-auto' onClick={()=>setEnableMS(!enableMS)}>
          {enableMS ?'Disable MultiSelection' :'Enable MultiSelection' }
        </button>
        {data && data.length>0 ? 
        data.map((dataItem) =>
          <div className='bg-slate-300 my-2 mx-auto max-w-xl p-2 outline-none border-collapse'>
            <div className="question cursor-pointer">
              <h3 onClick={enableMS ? ()=>handleMultiQuestion(dataItem.id)
               :()=>handleQuestion(dataItem.id)}>{dataItem.question}</h3>
            </div>
            {enableMS ? multi.indexOf(dataItem.id) !==-1 &&
            <div className="ans">
            {dataItem.answer}
          </div>
            : click === dataItem.id &&
            <div className="ans">
              {dataItem.answer}
            </div> }
          </div>
        

        ) : <span>Data not present</span>}
      </div>
    </div>
  )
}

export default Accordian