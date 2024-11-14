// import { getFirstDayOfMonth } from './getMonthDays.js'
// import getMonthDays from './getMonthDays.js'

// var nextmonth = 0;
// var active = nextmonth;

// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('.parent-calendar h1');
//     const parent = document.querySelector('.parent-calendar');
//     const slidebtns = document.querySelector('.slide-btns');
//     const containerCalendar = document.querySelector('.container-calendar')

//     const daysWeek = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

//     function createCalendar(month, year, calendar, wrapper, otherclass){
//         wrapper.setAttribute('class', `currentCell`)
//         wrapper.classList.add(`cell${month}`);
//         wrapper.classList.add(`${otherclass}`);
//         let ul = document.createElement('ul');
//         let h1 = document.createElement('h1');
//         ul.setAttribute('class', 'span-wide');
//         h1.setAttribute('class', 'span-wide');
//         h1.textContent = month;
//         for (let i=0; i<=6; i++){
//             let li = document.createElement('li');
//             li.textContent = daysWeek[i]; 
//             ul.append(li);    
//         }
//         wrapper.append(h1);
//         wrapper.append(ul);
//         document.querySelector('.container-calendar').append(wrapper);

//         for (let n=0; n<=42; n++) {
//             const span = document.createElement('span');
//             wrapper.append(span)
//         }
          
//         let d = 0;
//         const container = document.querySelector(`.cell${month}`)
//         let childcells = container.querySelectorAll('span')
//         childcells.forEach(cell=>cell.textContent = "");//reset the calendar
//         for (let n=getFirstDayOfMonth(month, year); n<=42; n+=1){
//             if (d < getMonthDays(month, year)) {
//                 d++;
//                 console.log(container);
//                 childcells[n].setAttribute('class', 'cells')
//                 childcells[n].textContent = d;
//             }

            
//         }
//         console.log(calendar);
        
//     }
    
    
//     class CalendarStructure{
//         constructor(month, year, animatedClass){
//             this.month = month;
//             this.year = year;
//             this.animatedClass = animatedClass;
//             this.initializeCalendar = this.initializeCalendar.bind(this);
            
//         }
//         get firstdayOfWeek() {
//             return getFirstDayOfMonth(this.month, this.year)
//         }

//         initializeCalendar(){
//             this.wrapper = document.createElement('div');
//             createCalendar(this.month, this.year, this, this.wrapper, this.animatedClass)
//         }
//     }

//     const fowardBtn = slidebtns.querySelector('.foward');
//     const backBtn = slidebtns.querySelector('.back');
    
//     // var nextcalendar;
//     var slideCals;

//     function showSlide(index, direction) {

//         const containerCalendar = document.querySelector('.container-calendar')
//         containerCalendar.setAttribute('data-direction', direction)
//         slideCals = document.querySelectorAll('.currentCell');

//         console.log(slideCals.length)

//         slideCals.forEach((slide, i) => {
//             if ((i === index)) {
//                 slide.classList.add('active');
//                 slide.classList.remove('exit')
//             }else if (slide.classList.contains('active')) {
//                 slide.classList.remove('active')
//                 slide.classList.add('exit')
//             } 
//             // else {
//             //     slide.classList.remove('active, exit')
//             // }
//         })
//     }
    
    

//     fowardBtn.addEventListener('click', function(){
//         const container = containerCalendar.querySelectorAll('.currentCell');
//         console.log(container.length)
//         // document.querySelector('.container-calendar').setAttribute('data-direction', direction)

//         let animatedClass;
    
//         nextmonth++
//         let nextcalendar = new CalendarStructure(nextmonth, 2024);
//         nextcalendar.initializeCalendar();
//         // active = (nextmonth + 1) % container.length;
//         active ++
//         // console.log(container.length)
//         showSlide(active - 1, 'next')
//     })

    
//     var newmonth;
//     var container; 
//     container = containerCalendar.querySelectorAll('.currentCell');
//     newmonth = container.length;
//     backBtn.addEventListener('click', function(){
//         const container = containerCalendar.querySelectorAll('.currentCell');
//         // active = (nextmonth + 1) % container.length;
//         console.log(container.length);
//         // if (active < nextmonth) {
//         //     active = (active - 1 + container.length) % container.length;
//         //     showSlide(active - 1, 'prev')
//         // } else {
        
//             newmonth --
//             showSlide(newmonth, 'prev')
//         // }
        
//     })
// })

// import { getFirstDayOfMonth } from './getMonthDays.js'
// import getMonthDays from './getMonthDays.js'

// let currentMonth = 0; // Tracks the current month index relative to the starting month
// let activeIndex = 0; // Tracks the current active slide

// document.addEventListener('DOMContentLoaded', () => {
//     const daysWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//     function createCalendar(month, year, container, animatedClass) {
//         const wrapper = document.createElement('div');
//         wrapper.className = `currentCell  ${animatedClass}`;
//         wrapper.classList.add(`cell${month}`)
        
//         const ul = document.createElement('ul');
//         const h1 = document.createElement('h1');
//         ul.className = 'span-wide';
//         h1.className = 'span-wide';
//         h1.textContent = month;
        
//         daysWeek.forEach(day => {
//             const li = document.createElement('li');
//             li.textContent = day;
//             ul.append(li);
//         });
        
//         wrapper.append(h1);
//         wrapper.append(ul);

//         // Append days to the wrapper
//         for (let i = 0; i < 42; i++) {
//             const span = document.createElement('span');
//             wrapper.append(span);
//         }

//         container.append(wrapper);

//         const firstDayIndex = getFirstDayOfMonth(month, year);
//         const daysInMonth = getMonthDays(month, year);
//         const spans = wrapper.querySelectorAll('span');
//         spans.forEach((span, index) => span.textContent = index >= firstDayIndex && index - firstDayIndex < daysInMonth ? index - firstDayIndex + 1 : "");
//     }

//     class CalendarStructure {
//         constructor(month, year, animatedClass) {
//             this.month = month;
//             this.year = year;
//             this.animatedClass = animatedClass;
//             this.initializeCalendar = this.initializeCalendar.bind(this);
//         }

//         initializeCalendar(container) {
//             createCalendar(this.month, this.year, container, this.animatedClass);
//         }
//     }

//     const slideContainer = document.querySelector('.container-calendar');
//     const forwardBtn = document.querySelector('.foward');
//     const backBtn = document.querySelector('.back');
    
//     function showSlide(index, direction) {
//         slideContainer.setAttribute('data-direction', direction);
//         const slides = document.querySelectorAll('.currentCell');

//         slides.forEach((slide, i) => {
//             // if (i === index){
//             //     slide.classList.add('active');
//             //     slide.classList.remove('exit')
//             // } else if (slide.classList.contains('active')) {
//             //     slide.classList.remove('acitve');
//             //     slide.classList.add('exit')
//             // } else {
//                 slide.classList.toggle('active', i === index);
//                 slide.classList.toggle('exit', i !== index);
//             // }
//         });
//     }

//     function handleForwardSlide() {
//         const slides = document.querySelectorAll('.currentCell');
        
//         if (activeIndex === slides.length - 1) { // We're at the last slide
//             currentMonth++;
//             const newCalendar = new CalendarStructure(currentMonth, 2024, 'next');
//             newCalendar.initializeCalendar(slideContainer);
//         }
        
//         activeIndex++;
//         showSlide(activeIndex, 'next');
//     }

//     function handleBackSlide() {
//         if (activeIndex === 0) { // At the first slide, create previous month
//             currentMonth--;
//             const newCalendar = new CalendarStructure(currentMonth, 2024, 'prev');
//             newCalendar.initializeCalendar(slideContainer);

//             // Refresh slides to include the newly added calendar at the beginning
//             activeIndex = 0; // Reset to the first slide
//         } else {
//             activeIndex--;
//         }
//         showSlide(activeIndex, 'prev');
//     }

//     forwardBtn.addEventListener('click', handleForwardSlide);
//     backBtn.addEventListener('click', handleBackSlide);
    
//     // Initial setup
//     const initialCalendar = new CalendarStructure(currentMonth, 2024, 'next');
//     initialCalendar.initializeCalendar(slideContainer);
//     showSlide(activeIndex, 'next');
// });

import { getFirstDayOfMonth } from './getMonthDays.js';
import getMonthDays from './getMonthDays.js';

let currentMonth = 1; // Starts with January
let activeIndex = 0; // Tracks the current active slide
let currentYear = 2024; // Tracks the current year

document.addEventListener('DOMContentLoaded', () => {
    const daysWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const slideContainer = document.querySelector('.container-calendar');
    const forwardBtn = document.querySelector('.foward');
    const backBtn = document.querySelector('.back');

    // Helper function to create a calendar view
    function createCalendar(month, year, container, animatedClass, calendar) {
        const displayMonth = month === 0 ? 1 : month; // Display January as "1" and December as "12"
        const displayYear = year;
        const wrapper = document.createElement('div');
        wrapper.className = `currentCell ${animatedClass}`;
        wrapper.classList.add(`cell${displayMonth}`);

        const ul = document.createElement('ul');
        const h1 = document.createElement('h1');
        ul.className = 'span-wide';
        h1.className = 'span-wide';
        h1.textContent = `${displayMonth}, ${displayYear}`;

        daysWeek.forEach(day => {
            const li = document.createElement('li');
            li.textContent = day;
            ul.append(li);
        });

        wrapper.append(h1);
        wrapper.append(ul);

        // Append day elements to the wrapper
        for (let i = 0; i < 42; i++) {
            const span = document.createElement('span');
            wrapper.append(span);
        }

        container.append(wrapper);

        const firstDayIndex = getFirstDayOfMonth(displayMonth, displayYear);
        const daysInMonth = getMonthDays(displayMonth, displayYear);
        const spans = wrapper.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.textContent = index >= firstDayIndex && index - firstDayIndex < daysInMonth ? index - firstDayIndex + 1 : "";
        });

        console.log(calendar)
    }

    // Calendar structure class to manage individual calendar cells
    class CalendarStructure {
        constructor(month, year, animatedClass) {
            this.month = month;
            this.year = year;
            this.animatedClass = animatedClass;
            this.initializeCalendar = this.initializeCalendar.bind(this);
        }

        initializeCalendar(container) {
                createCalendar(this.month, this.year, container, this.animatedClass);
            }
            
    }

    // Function to update the active slide with animations
    function showSlide(index, direction='next') {
        slideContainer.setAttribute('data-direction', direction);
        const slides = document.querySelectorAll('.currentCell');

        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'exit');
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('exit');
            } else {
                slide.classList.remove('active');
                slide.classList.add('exit');
            }
        });

        console.log(slides)
    }

    // Function to handle forward button click
    function handleForwardSlide() {
        const slides = document.querySelectorAll('.currentCell');

        if (activeIndex === slides.length - 1) { // If on the last slide, add a new one
            currentMonth++;
            if (currentMonth > 12) {
                currentMonth = 1;
                currentYear++;
            }

            const newCalendar = new CalendarStructure(currentMonth, currentYear, 'next');
            newCalendar.initializeCalendar(slideContainer);
        }

        activeIndex++
        showSlide(activeIndex, 'next');
    }

    // Function to handle back button click
    function handleBackSlide() {
        // const activeSlide = document.querySelector(`.cell${activeIndex + 1}`);
        //  if (!activeSlide ) { // If on the first slide, add a new previous month
             currentMonth--;
            if (currentMonth < 1) { // Go to December of the previous year
                currentMonth = 12;
                currentYear--;
                // activeIndex--
            }
            // else {
            //     currentMonth--;
            //     // activeIndex--
            // }

            const newCalendar = new CalendarStructure(currentMonth, currentYear, 'prev');
            newCalendar.initializeCalendar(slideContainer);

            // Recalculate activeIndex to reflect the newly added previous month
            // activeIndex = 0;
        // } 
        //  else {
            activeIndex++//= (activeIndex + 1) % slides.length;
        //  }
        showSlide(activeIndex, 'prev');
    }

    // Button event listeners
    forwardBtn.addEventListener('click', handleForwardSlide);
    backBtn.addEventListener('click', handleBackSlide);

    // Initial setup
    const initialCalendar = new CalendarStructure(currentMonth, currentYear, '');
    initialCalendar.initializeCalendar(slideContainer);
    showSlide(activeIndex, '');
});

