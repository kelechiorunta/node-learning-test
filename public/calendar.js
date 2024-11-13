import { getFirstDayOfMonth } from './getMonthDays.js'
import getMonthDays from './getMonthDays.js'

var nextmonth = 0;
var active = nextmonth;

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.parent-calendar h1');
    const parent = document.querySelector('.parent-calendar');
    const slidebtns = document.querySelector('.slide-btns');
    const containerCalendar = document.querySelector('.container-calendar')

    

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
    const daysWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

    function createCalendar(month, year, calendar, wrapper, otherclass){
        wrapper.setAttribute('class', `currentCell`)
        wrapper.classList.add(`cell${month}`);
        wrapper.classList.add(`${otherclass}`);
        let ul = document.createElement('ul');
        let h1 = document.createElement('h1');
        ul.setAttribute('class', 'span-wide');
        h1.setAttribute('class', 'span-wide');
        h1.textContent = month;
        for (let i=0; i<=6; i++){
            let li = document.createElement('li');
            li.textContent = daysWeek[i]; 
            ul.append(li);    
        }
        wrapper.append(h1);
        wrapper.append(ul);
        document.querySelector('.container-calendar').append(wrapper);

        for (let n=0; n<=42; n++) {
            const span = document.createElement('span');
            wrapper.append(span)
        }
          
        let d = 0;
        const container = document.querySelector(`.cell${month}`)
        let childcells = container.querySelectorAll('span')
        childcells.forEach(cell=>cell.textContent = "");//reset the calendar
        for (let n=getFirstDayOfMonth(month, year); n<=42; n+=1){
            if (d < getMonthDays(month, year)) {
                d++;
                console.log(container);
                childcells[n].setAttribute('class', 'cells')
                childcells[n].textContent = d;
            }

            
        }
        // console.log(calendar);
        // document.querySelector('.slide-calendar').append(wrapper)
        
    }
    
    // createCalendar(12,2024);
    // heading.innerHTML = `${getFirstDayOfMonth(2)}`
    
    class CalendarStructure{
        constructor(month, year, animatedClass){
            this.month = month;
            this.year = year;
            this.animatedClass = animatedClass;
            this.initializeCalendar = this.initializeCalendar.bind(this);
            
        }
        get firstdayOfWeek() {
            return getFirstDayOfMonth(this.month, this.year)
        }

        initializeCalendar(){
            this.wrapper = document.createElement('div');
            createCalendar(this.month, this.year, this, this.wrapper, this.animatedClass)
        }
    }

    // const cal1 = new CalendarStructure(11, 2024);
    // const cal2 = new CalendarStructure(12, 2024);
    // const cal3 = new CalendarStructure(1, 2025);
    // const cal4 = new CalendarStructure(2, 2025);

    
    // cal2.initializeCalendar();
    // document.querySelector('.slide-calendar').innerHTML = (callCal)
    // cal1.initializeCalendar();
    // cal2.initializeCalendar();
    // cal3.initializeCalendar();
    // cal4.initializeCalendar();

    const fowardBtn = slidebtns.querySelector('.foward');
    const backBtn = slidebtns.querySelector('.back');
    
    // var nextcalendar;
    var slideCals;

    function showSlide(index, direction) {

        const containerCalendar = document.querySelector('.container-calendar')
        containerCalendar.setAttribute('data-direction', direction)
        slideCals = document.querySelectorAll('.currentCell');

        console.log(slideCals.length)

        slideCals.forEach((slide, i) => {
            if ((i === index)) {
                slide.classList.add('active');
                slide.classList.remove('exit')
            }else if (slide.classList.contains('active')) {
                slide.classList.remove('active')
                slide.classList.add('exit')
            } 
            // else {
            //     slide.classList.remove('active, exit')
            // }
        })
    }
    
    

    fowardBtn.addEventListener('click', function(){
        const container = containerCalendar.querySelectorAll('.currentCell');
        console.log(container.length)
        // document.querySelector('.container-calendar').setAttribute('data-direction', direction)

        let animatedClass;
    
        nextmonth++
        let nextcalendar = new CalendarStructure(nextmonth, 2024);
        nextcalendar.initializeCalendar();
        // active = (nextmonth + 1) % container.length;
        active ++
        // console.log(container.length)
        showSlide(active - 1, 'next')
    })

    
    var newmonth;
    var container; 
    container = containerCalendar.querySelectorAll('.currentCell');
    newmonth = container.length;
    backBtn.addEventListener('click', function(){
        const container = containerCalendar.querySelectorAll('.currentCell');
        // active = (nextmonth + 1) % container.length;
        console.log(container.length);
        // if (active < nextmonth) {
        //     active = (active - 1 + container.length) % container.length;
        //     showSlide(active - 1, 'prev')
        // } else {
        
            newmonth --
            showSlide(newmonth, 'prev')
        // }
        
    })
})