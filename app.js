const f= document.querySelector('form');
const final=[10,10,10,10,10,10,10,10,10,10];
const credits=[1,1,1,3,3,3,3,3,3,3]
const total=240;
f.addEventListener('submit',(e)=>{
  e.preventDefault();
  //console.log(form.s1.value);  
  let arr=[f.s1.value,f.s2.value,f.s3.value,f.s4.value,f.s5.value,f.s6.value,f.s7.value,f.s8.value,f.s9.value,f.s10.value];
  var multiarr=[0,0,0,0,0,0,0,0,0,0];
  console.log(arr);
  arr.forEach((element,index)=>{
    if(element=='s'){
      multiarr[index]=10;
    }
    else if(element=='a'){
      multiarr[index]=9;
    }
    else if(element=='c'){
      multiarr[index]=7;
    }
    else if(element=='b'){
      multiarr[index]=8;
    } 
    else if(element=='d'){
      multiarr[index]=6;
    }
  })
console.log(multiarr);
  display(multiarr);
});
function display(value){
  let temp=0;
  console.log(value+"  is the final total");
  for(let i=0;i<10;i++){
    value[i]*=credits[i];
    temp+=value[i];
  }
  console.log(value);
  console.log(temp);
  const result= temp/total *100;
  console.log(result/10);
  alert('CONGRATS YOUR SGPA: '+result/10)
}
