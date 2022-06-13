let count =0;
function tableupdate(event){
    event.preventDefault() 
 count++

  
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        const address=document.getElementById("address").value;
        const pin=document.getElementById("pincode").value;
        const state=document.getElementById("state").value;
        const country=document.getElementById("country").value;
        const gender=document.getElementById("gender").value;
        const food1=document.getElementById("food1").value;
        const food2=document.getElementById("food2").value;


        // console.log(fname)
        // console.log(lname)
        // console.log(address)
        // console.log(pin)
        // console.log(state)
        // console.log(country)
        // console.log(gender)
        // console.log(food1)
        // console.log(food2)
 

        const telement=document.getElementById('table')
        const row = telement.insertRow();
        let ss=row.insertCell();
        ss.innerText=count;

        let ffname=row.insertCell();
        ffname.innerText=fname;

        let llname=row.insertCell();
        llname.innerText=lname;

        let aaddress= row.insertCell();
        aaddress.innerText=address;

        let ppin= row.insertCell();
        ppin.innerText=pin;

        let sstate= row.insertCell();
        sstate.innerText=state;

        let ccountry =row.insertCell();
        ccountry.innerText=country;

        let ggender =row.insertCell();
        ggender.innerText=gender;

        let ffood1= row.insertCell();
        ffood1.innerText=food1;
        
        let ffood2= row.insertCell();
        ffood2.innerText=food2;    
    
 }
