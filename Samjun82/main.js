function chekAge(age) {
    if(age < 18) {
     console.log("you are not allowed")
    } else if(age >= 18 && age <=99) {
     console.log("you are welcome!")
    } else if(age >= 100 && age <=120) {
     console.log("are you still breathing?")
    } else {
     console.log("are you human?")
    }
    
    }
    chekAge(200)