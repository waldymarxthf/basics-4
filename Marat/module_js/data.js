
export function presentTime(){
    const data = new Date();

    const hourAndMinute = data.getHours() + ':' + data.getMinutes();
    return hourAndMinute
}


console.log(presentTime());
