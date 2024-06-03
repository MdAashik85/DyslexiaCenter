$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
function quote(){
    let ar = ['""The greatest wealth is health. Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend. Non-violence is the greatest power. And truth is the greatest strength." – Virgil',
    '"Wellness is not a medical fix but a way of living - a lifestyle sensitive and responsive to all the dimensions of body, mind, and spirit, an approach to life we each design to achieve our highest potential for well-being now and forever." – Greg Anderson',
    '"Take care of your body. Its the only place you have to live. If you have a good health, you have everything. You can focus on your work, family, friends and all other things in your life. But if your health is not good, then everything else will suffer. So, take care of your body and your health." – Jim Rohn',
    '"The greatest wealth is health." - Virgil',
    '"The first wealth is health. You must have health to make, to keep, or to enjoy money. It is far more valuable than money. And there are many people who have all the money in the world but lack health and the enjoyment of life that goes with it. Wealth can buy you many things, but it cant buy you health or happiness. You have to work for those things." – Ralph Waldo Emerson',
    '"A cheerful mind is the best physician." - William Cowper']
    let i=ar.length
    let res=Math.floor(Math.random()*i)
    let a =ar[res]
    let re = document.getElementById('myP1')
    re.innerHTML = `Quote is: ${a}`
  }
function clue(){
    const arr = ['Blue','Red','Yellow','Goldish']
              arr.forEach(val =>{
                  const opp = document.createElement('label')
                  opp.textContent = val
                  const op = document.createElement('input')
                  op.type='radio'
                  op.name='el'
                  op.id=val
                  document.getElementById('ress1').appendChild(op)
                  document.getElementById('ress1').appendChild(opp)
              })
    const arr1 = ['70','72.4','80','73.4']
              arr1.forEach(val =>{
                  const opp = document.createElement('label')
                  opp.textContent = val
                  const op = document.createElement('input')
                  op.type='radio'
                  op.name='el1'
                  op.id=val
                  document.getElementById('ress2').appendChild(op)
                  document.getElementById('ress2').appendChild(opp)
              })
    const arr2 = ['EHRG','HSIF','Wrong code','GRHE']
              arr2.forEach(val =>{
                  const opp = document.createElement('label')
                  opp.textContent = val
                  const op = document.createElement('input')
                  op.type='radio'
                  op.name='el2'
                  op.id=val
                  document.getElementById('ress3').appendChild(op)
                  document.getElementById('ress3').appendChild(opp)
              })
    const arr3 = ['Monday','Sunday','Wednesday','Tuesday']
              arr3.forEach(val =>{
                  const opp = document.createElement('label')
                  opp.textContent = val
                  const op = document.createElement('input')
                  op.type='radio'
                  op.name='el3'
                  op.id=val
                  document.getElementById('ress4').appendChild(op)
                  document.getElementById('ress4').appendChild(opp)
              })
    const arr4 = ['Narendra Modi','Rajendra Prasad','Droupathi Murmu','A.P.J.Abdul Kalam']
              arr4.forEach(val =>{
                  const opp = document.createElement('label')
                  opp.textContent = val
                  const op = document.createElement('input')
                  op.type='radio'
                  op.name='el4'
                  op.id=val
                  document.getElementById('ress5').appendChild(op)
                  document.getElementById('ress5').appendChild(opp)
              })
  }
  function sub(){
    let ans = 0
    let a1 = document.getElementById('Blue').checked
    let a2 = document.getElementById('Red').checked
    let a3 = document.getElementById('Yellow').checked
    let a4 = document.getElementById('Goldish').checked
    let b1 = document.getElementById('70').checked
    let b2 = document.getElementById('72.4').checked
    let b3 = document.getElementById('80').checked
    let b4 = document.getElementById('73.4').checked
    let c1 = document.getElementById('EHRG').checked
    let c2 = document.getElementById('HSIF').checked
    let c3 = document.getElementById('Wrong code').checked
    let c4 = document.getElementById('GRHE').checked
    let d1 = document.getElementById('Monday').checked
    let d2 = document.getElementById('Sunday').checked
    let d3 = document.getElementById('Wednesday').checked
    let d4 = document.getElementById('Tuesday').checked
    let e1 = document.getElementById('Narendra Modi').checked
    let e2 = document.getElementById('Rajendra Prasad').checked
    let e4 = document.getElementById('Droupathi Murmu').checked
    let e3 = document.getElementById('A.P.J.Abdul Kalam').checked
    if((a4 && b4)&&(c4 && d4)&&(e4 && e4)){
      ans = "Genius"
    }
    else if(((a1||a2||a3) && b4)&&(c4 && d4)&& (e4&&e4)){
      ans = "Brilliant"
    }
    else if((a4 && (b1||b2||b3))&&(c4 && d4)&& (e4&&e4)){
      ans = "Brilliant"
    }
    else if((a4 && b4)&&((c1||c2||c3) && d4)&& (e4&&e4)){
      ans = "Brilliant"
    }
    else if((a4 && b4)&&(c4 && (d1||d2||d3))&& (e4&&e4)){
      ans = "Brilliant"
    }
    else if((a4 && b4)&&(c4 && d4)&&(e1||e2||e3))
    {
      ans = "Brilliant"
    }
    else if(((a1||a2||a3)||(b1||b2||b3))&&(c4 && d4)&& (e4&&e4)){
      ans = "Above Average"
    }
    else if(((a1||a2||a3)||b4)&&((c1||c2||c3) && d4)&& (e4&&e4)){
      ans = "Above Average"
    }
    else if(((a1||a2||a3)||b4)&&(c4 && (d1||d2||d3))&& (e4&&e4)){
      ans = "Above Average"
    }
    else if(((a1||a2||a3)||b4)&&(c4 && d4)||(e1||e2||e3)){
      ans = "Above Average"
    }
    else if(((a1||a2||a3)||(b1||b2||b3))&&((c1||c2||c3) && d4)&& (e4&&e4)){
      ans = "Average"
    }
    else if(((a1||a2||a3)||(b1||b2||b3))&&(c4 && (d1||d2||d3))&& (e4&&e4)){
      ans = "Average"
    }
    else if(((a1||a2||a3)||(b1||b2||b3))&&(c4 && d4)&& (e1||e2||e3)){
      ans = "Average"
    }
    else
    {
      ans = "Too poor"
    }
    let re = document.getElementById('ress1p')
    re.innerHTML = `Your IQ level is: ${ans}`
  }
function ana(){
  let ans =0
  let a =document.getElementById('o1').checked
  let b = document.getElementById('o2').checked
  let c =document.getElementById('o3').checked
  let d= document.getElementById('o4').checked
  let e =document.getElementById('o5').checked
  let a1= document.getElementById('a1')
  let b1 = document.getElementById('a2')
  let c1 = document.getElementById('a3')
  let d1 = document.getElementById('a4')
  let e1 = document.getElementById('a5')
  if (a){
    ans = a1
  }
  else if (b){
    ans = b1
  }
  else if (c){
    ans = c1
  }
  else if(d){
    ans = d1
  }
  else if (e){
    ans = e1
  }
  let re = document.getElementById('resp')
  re.innerHTML= ans
}
  