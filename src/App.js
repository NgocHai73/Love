import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import './App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
function App() {
  const [check, setCheck] = useState(false)
  const [top,setTop] = useState(0)
  const [left,setLeft] = useState(0)
  const [check_yes,setCheckYes] = useState(false)  
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [msg,setMsg] = useState("")
  const [value,setValue] =useState("")
  useEffect(()=>{
    setMsg("")
  },[])
  const onMouseEnterHandler=async()=>
  {
      var min = 1;
      var max = window.innerHeight-200;
      var rand =  min + (Math.random() * (max-min));
      await setTop(rand)
      var min_w = -1 * window.innerWidth/2;
      var max_w = window.innerWidth/2;
      var rand_w =  min_w + (Math.random() * (max_w-min_w));
      console.log(rand)
      await setLeft(rand_w)
      setMsg("")
  }

  const onMouseEnterHandler2=()=>
  {
    setCheckYes(true)
  }

  const onMouseLeave=(e)=>{
    setCheckYes(false)
    setMsg("Đố em bắt được anh  !")
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChange=(e)=>{
    var textArray = [
       "Nếu anh gọi em một tiếng “bạn gái” em có dám đồng ý không?"
, "Người theo đuổi anh rất nhiều, gạt đi cũng không hết, vậy mà anh chỉ quan tâm mỗi mình em."
,"Em rảnh không? Mình yêu nhau cho bận đi."
, "Quan trọng không phải là đi những đâu, ăn những gì, nói chuyện gì,… mà là cùng với ai. Anh thích cùng với em!"
, "Bệnh nào cũng có thuốc chữa nhưng sẽ không bao giờ có thuốc chữa được bệnh anh mãi yêu em."
, "Cho anh xin mật khẩu, để đăng nhập vào trái tim em."
, "Trên đời này, có ba thứ làm cho anh mê muội, chìm đắm không lối thoát, đó là: tiền, đồ ăn ngon và em."
,"Anh là đứa rất hiếm khi cố gắng. Nhưng cứ nghĩ tới chuyện sẽ làm bạn trai của em là anh lại không thể tiếp tục lười",
, "Em đừng đi tìm ai đó nữa, bất cứ chàng trai  nào khác ngoài anh ra đều là sai số của cuộc đời em."
,"Nếu người đó là em, muộn một chút cũng không sao."
, "Anh vừa bói quẻ cho em, mệnh của em khuyết một nửa nửa đó là anh đấy."
, "Tại sao em có nhà mà không ở, lại cứ ở trong tâm trí anh."
,"Em có biết em khác vì sao ở điểm nào không? Sao ở trên trời, còn em ở trong tim anh."
,"Trời đổ mưa rồi, sao em chưa đổ anh.",
 "Anh xin lỗi nhé vì chưa được cho phép mà đã tự ý thích em.",
" Em không bị cận sao đến giờ vẫn chưa nhìn ra anh thích em."
  ];
    var randomIndex = Math.floor(Math.random() * textArray.length); 
    var randomElement = textArray[randomIndex];
    setValue(randomElement)
  }
  return (
    <div className="App">
       {/* <Image src="./hi.png" />
          <img src={require('./hi.png')}/> */}
      {
        !check && <div style={{padding:20}}>
         
          <div style={{color:"white",fontWeight:"bold",fontSize:25}}>
            Chào cậu! Mình có lời muốn hỏi cậu.
            </div>
            <div style={{color:"white",fontWeight:"bold",fontSize:25}}>
            Em phải trả lời thật lòng nhé!
            </div>
          <div style={{padding:20}}>
            <button className= 'btn btn-primary m-5'onClick={() => setCheck(true)}>Yes</button> 
            <button onMouseOver ={onMouseEnterHandler2} onMouseEnter={onMouseEnterHandler2} onMouseLeave={onMouseLeave} className= {check_yes ?"btn btn-primary m-5":'btn btn-danger m-5'} onClick={() => {setCheck(true)}}>{check_yes?"Yes":"No"}</button>
          </div>
        </div>
      }
      {
       check && 
         <div>
            <div style={{color:"white",fontWeight:"bold",fontSize:25}}>
                Em yêu Anh phải không?
            </div>
             <div style={{padding:20}}>
               <button className= 'btn btn-primary m-1' onClick={()=> {setIsOpen(true);setMsg("")}}>Có</button>
             </div>
             <div >
               <span style={{color:"orange",fontWeight:'bold',fontSize:20}} >
                 {msg}
               <button className= 'btn btn-danger' onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeave} style={{marginTop:top,marginLeft:left}} >Không</button>
               </span>
             </div>
         </div>
      }
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{padding:10,fontSize:20,fontWeight:'bold'}}>
          Tại sao cậu lại yêu tớ vậy?
          </div>
        <form>
        <textarea onChange={onChange} value={value} class="form-control" rows='4' ></textarea>
        </form>
      </Modal>
    </div>
  );
}

export default App;
