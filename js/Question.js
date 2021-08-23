class Question {
  constructor(){
    this.ques1=createButton("COLD")
    this.ques2=createButton("COUGH")
    this.ques3=createButton("Difficulties while breathing")
    this.ques4=createButton("NONE OF THE FOLLOWING!!")
    this.ques=createElement("h2")

    this.next1=createButton("NEXT")
    this.next2=createButton("NEXT")

    this.q2=createElement("h2")
    this.q3=createButton("Diabetes")
    this.q4=createButton("Hypertension")
    this.q6=createButton("Lung disease")
   this.q5=createButton("none of the following ")

   this.qu1 = createElement("h2");
   this.qu2=createButton("Yes")
    this.qu3=createButton("No")
   
  }

display(){


 
 this.ques1.position(250,190)

 
 this.ques2.position(250,240)


 this.ques3.position(250,300)


 this.ques4.position(250,360)

 this.next1.position(780,500)

 this.next2.position(630,350)
 this.ques.html("Are u experiencing any of the following symptoms ?")
 this.ques.position(250,130)
 this.q3.hide()

 this.q4.hide()
 
 this.q5.hide()
 this.q6.hide()
this.next2.hide();

this.qu1.hide();
this.qu2.hide();
this.qu3.hide();

this.ques1.mousePressed(()=>{
  score = score+2;
})

 this.ques4.mousePressed(()=>{
   console.log("working")
   this.ques1.hide()
   this.ques2.hide()
   this.ques3.hide()
   this.ques4.hide()
   this.ques.hide()
   this.next1.hide();
   this.next2.show();
   clear()
background(bg7)
 
 })

 this.next1.mousePressed(()=>{
  background(bg1)
 
  this.ques1.hide()
  this.ques2.hide()
  this.ques3.hide()
  this.ques4.hide()
  this.ques.hide()

 this.q3.show()
 this.q2.show();
  this.q4.show()
  this.next1.hide();
  this.next2.show();
this.q5.show()
this.q6.show()
this.q2.html("Have you ever had any one of the following?")
this.q2.position(100,10)
this.q3.position(250,130)
this.q4.position(250,170)
this.q5.position(250,215)
this.q6.position(250,260)
})


this.q5.mousePressed(()=>{
background(bg7)
this. q2.hide()
this.q3.hide()
this.q4.hide()
this.q5.hide()
this.q6.hide()
})

this.next2.mousePressed(()=>{
background(bg2)
 
this. q2.hide()
this.q3.hide()
this.q4.hide()
this.q5.hide()
this.q6.hide()

this.qu1.show();
this.qu2.show();
this.qu3.show();
this.qu1.html(" Have you travelled anywhere internationally in the last 14 days?");
this.qu1.position(100,0)
this.qu2.position(200,130)
this.qu3.position(250,130)
})

  
}

}

