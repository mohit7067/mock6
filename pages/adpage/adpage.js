
let submit =document.querySelector("#submit")

submit.addEventListener('click',GetCarsData)



function GetCarsData(event)
{
    let name=document.querySelector("#brand").value
    let type=document.querySelector("#type").value;
    let year=document.querySelector("#year").value;
    let kms=document.querySelector("#km").value;
    let description =document.querySelector("#description").value;
    let price=document.querySelector("#price").value;
    
    if(name &&type &&year&&kms&&description&&price){

        OTP()
        data={name,type,year,kms,description,price}
    }
    else {
        alert("Please Enter all required feilds")
    }
    

    event.preventDefault()
}

async function PostinDB(data){
  
    try {
        let res = await fetch("https://pacific-plains-53138.herokuapp.com/cars", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        if (res) {
          alert("successfully registered");
          
        }
      } catch (error) {
        console.log(error);
        alert("Please try again later")
      }
}

function OTP()
{  
    let otpcontainer=document.querySelector(".otpmodal")
     otpcontainer.style="border: 1px solid ; border-radius:30px"
   let h1 = document.createElement("h2")
      h1.innerHTML='Enter OTP'
      let div=document.createElement("div")
    let box1=document.createElement("input")
     box1.setAttribute('class',"box1")

     
      box1.addEventListener('input',()=>{

         if(box1.value.length==1)
         {
          box2.focus()
         }
         
         
       })
       
     
    
    let box2=document.createElement("input")
    box2.setAttribute('class',"box2")
    box2.addEventListener('input',()=>{

      if(box2.value.length==1)
      {
       box3.focus()
      }
      
      
    })
    
    let box3=document.createElement("input")
    box3.setAttribute('class',"box3")
    box3.addEventListener('input',()=>{

      if(box3.value.length==1)
      {
       box4.focus()
      }
    
      
      
    })
    
    let box4=document.createElement("input")
    box4.setAttribute('class',"box4")
    
    let btn =document.createElement('button')
    btn.innerHTML="sumbit"
    btn.setAttribute('class',"otpsubmit")
    btn.addEventListener('click',otpcheck)
    div.append(box1,box2,box3,box4)
    otpcontainer.append(h1,div,btn)
}



function otpcheck(){

   let box1= document.querySelector(".box1").value
   let box2=document.querySelector('.box2').value
   let box3=document.querySelector('.box3').value
   let box4=document.querySelector('.box4').value

   


   let finalotp=`${box1}${box2}${box3}${box4}`

  if(finalotp=="1234")
  
  {
    let brand=document.querySelector("#brand").value
    let type=document.querySelector("#type").value;
    let year=document.querySelector("#year").value;
    let kms=document.querySelector("#km").value;
    let Description =document.querySelector("#description").value;
    let Price=document.querySelector("#price").value;
    let data={brand,type,year,kms,Description,Price}
    PostinDB(data)
  }
  else {
            alert("OTP is incorrect !")
            location.reload()
        }
}