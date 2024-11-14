const presentyear = new Date().getFullYear();

export const getFirstDayOfMonth = (monthnumber, currentyear=presentyear) => {
    let d = new Date(`${monthnumber}-1-${currentyear}`);
    if (d.getDay() === 0){
        return 6;
    } else {
    return d.getDay() - 1 }; //Considering Monday as the first day of the week not Sunday
}

const getMonthDays = (monthnumber, currentyear=presentyear) => {
    switch (monthnumber){
        case 1:
            return 31;
        case 2:
            if (currentyear % 4 === 0) {
                return 29;
              } else {
                return 28;
              }
        case 3: 
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
    }
}

export default getMonthDays

// heading.innerHTML = `${getFirstDayOfMonth(11, 2024)}, ${getMonthDays(11)}`;

    // function createCalendar(month, year, cal, wrapper){
    //     let parent = document.querySelector('.parent-calendar');
    //     const childcells = parent.querySelectorAll('span');
    //     let d = 0;
    //     childcells.forEach(cell=>cell.textContent = "");//reset the calendar
    //     for (let n=getFirstDayOfMonth(month, year); n<=42; n+=1){
            
    //         if (d < getMonthDays(month, year)) {
    //             d++;
    //             childcells[n].textContent = d;
    //         }

            
    //     }
    //     console.log(cal);
    //     document.querySelector('.slide-calendar').append(wrapper)
        
    // }