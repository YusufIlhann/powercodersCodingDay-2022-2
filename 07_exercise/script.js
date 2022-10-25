let array = [1,2,3,4,5,6,7];

const dayOfTheWeek = day => {
    if (day < 1 || day > 7) return null
 
    switch (day) {
     case 1:
       return 'Sunday'
       break
     case 2:
       return 'Monday'
       break
     case 3:
       return 'Tuesday'
       break
     case 4:
       return 'Wednesday'
       break
     case 5:
       return 'Thursday'
       break
     case 6:
       return 'Friday'
       break
     case 7:
       return 'Saturday'
    }
 }
 for (var i=0; i<array.length; i++) {

    console.log(dayOfTheWeek(array[i]));
}
