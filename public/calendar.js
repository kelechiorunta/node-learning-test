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

// import { getFirstDayOfMonth, getMonthname } from './getMonthDays.js';
// import getMonthDays from './getMonthDays.js';

// let currentMonth = 11; // Starts with January
// let activeIndex = 0; // Tracks the current active slide
// let currentYear = 2024; // Tracks the current year

// document.addEventListener('DOMContentLoaded', () => {
//     const daysWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     const slideContainer = document.querySelector('.container-calendar');
//     const forwardBtn = document.querySelector('.foward');
//     const backBtn = document.querySelector('.back');
//     const slideSet = new Set();

//     // Helper function to create a calendar view
//     function createCalendar(month, year, animatedClass, wrapper, container) {
//         const displayMonth = month === 0 ? 1 : month; // Display January as "1" and December as "12"
//         const displayYear = year;
//         // const wrapper = document.createElement('div');
//         wrapper.className = `currentCell ${animatedClass}`;
//         wrapper.classList.add(`cell${displayMonth}-${year}`);

//         const ul = document.createElement('ul');
//         const h1 = document.createElement('h1');
//         ul.className = 'span-wide';
//         h1.className = 'span-wide';
//         h1.textContent = `${getMonthname(displayMonth)}, ${displayYear}`;

//         daysWeek.forEach(day => {
//             const li = document.createElement('li');
//             li.textContent = day;
//             ul.append(li);
//         });

//         wrapper.append(h1);
//         wrapper.append(ul);

//         // Append day elements to the wrapper
//         for (let i = 0; i < 42; i++) {
//             const span = document.createElement('span');
//             wrapper.append(span);
//         }

//         if (!wrapper.classList.contains(`${displayMonth}-${displayYear}`)){
//             slideSet.add(wrapper);
//             container.append(wrapper);
//         }
       
        

//         const firstDayIndex = getFirstDayOfMonth(displayMonth, displayYear);
//         const daysInMonth = getMonthDays(displayMonth, displayYear);
//         const spans = wrapper.querySelectorAll('span');
//         spans.forEach((span, index) => {
//             span.textContent = index >= firstDayIndex && index - firstDayIndex < daysInMonth ? index - firstDayIndex + 1 : "";
//         });

//         // console.log(calendar)
//     }

//     // Calendar structure class to manage individual calendar cells
//     class CalendarStructure {
//         constructor(month, year, animatedClass, wrapper, container) {
//             this.month = month;
//             this.year = year;
//             this.animatedClass = animatedClass;
//             this.wrapper = wrapper
//             this.container = container;
//             this.initializeCalendar = this.initializeCalendar.bind(this);

//             // Fire a custom event when the div is created
//             const event = new CustomEvent('divCreated', {
//                 detail: { div: this.wrapper } // Attach the div to the event's details
//             });
//             this.container.dispatchEvent(event);

//             // this.container.addEventListener('divCreated', function(e){
//             //     // console.log('A new div was created:', e.detail.div)
//             //     console.log('A new div was created:', e.detail.div);
//             // })
//         }

//         initializeCalendar() {
            
//              createCalendar(this.month, this.year, this.animatedClass, this.wrapper, this.container);
            
//             console.log(this.wrapper)
//             // if (this.wrapper){
//             //     createCalendar(this.month, this.year, this.animatedClass, this.wrapper, this.container);           
//             // }
//         }
//         get isActive() {
//             return this.animatedClass;
//         }
//         set animateClass(x){
//             return this.animatedClass = x;
//         }
//         set changeMonth(x){
//             return this.month = x;
//         }
//     }

//     // Function to update the active slide with animations
//     function showSlide(index, direction='next') {
//         slideContainer.setAttribute('data-direction', direction);
//         const slides = document.querySelectorAll('.currentCell');
//         if (index < 0) {
//             index = Math.abs(index)
//         }
//         slideSet.keys().forEach((slide, i) => {
//             // slide.classList.remove('active', 'exit', 'prev', 'next')
//             if (i === index) {
//                 slide.classList.add('active');
//                 slide.classList.remove('exit');
//             } else {
                
//                 slide.classList.remove('active');
//                 slide.classList.add('exit');
//                 // slideContainer.removeChild(slide)
//             }
//         });

//         console.log(slideSet.size)
//         const sliders = slideSet.keys();
//         let text = "";
//         for (const x of sliders) {
//         // text += x;
//         console.log(x)
//         }
//     }

//     // Function to handle forward button click
//     function handleForwardSlide() {
//         const slides = document.querySelectorAll('.currentCell');

//         if (activeIndex === slides.length - 1) { // If on the last slide, add a new one
//             currentMonth++;
//             if (currentMonth > 12) {
//                 currentMonth = 1;
//                 currentYear++;
//             }

//             // slideContainer.addEventListener('divCreated', function(e){
//             //     // Check if the slideContainer contains e.detail.div
//             //     if (Array.from(slideContainer.children).includes(e.detail.div)) {
//             //      slideContainer.removeChild(e.detail.div);
//             //  }
             
//             //      console.log('A new div was created:', e.detail.div);
//             //  })

//             const wrapper = document.createElement('div');
//             const newCalendar = new CalendarStructure(currentMonth, currentYear, 'next', wrapper, slideContainer);
//             newCalendar.initializeCalendar();
            
//         }

//         activeIndex++
//         showSlide(activeIndex, 'next');
//     }

//     // Function to handle back button click
//     function handleBackSlide() {
//         // const activeSlide = document.querySelector(`.cell${activeIndex + 1}`);
//         // if (activeIndex === 0 ) { // If on the first slide, add a new previous month
//             // return
//             currentMonth--;
//             if (currentMonth <= 1) { // Go to December of the previous year
//                 // return 
//                 currentMonth = 12;
//                 currentYear--;
//                 // activeIndex = 0
//                 // activeIndex--
//             }
//             // else {
//             //      currentMonth--;
//             // //     // activeIndex--
//             //  }

//             // slideContainer.addEventListener('divCreated', function(e){
//             //     // Check if the slideContainer contains e.detail.div
//             //     if (Array.from(slideContainer.children).includes(e.detail.div)) {
//             //      slideContainer.removeChild(e.detail.div);
//             //  }
             
//             //      console.log('A new div was created:', e.detail.div);
//             //  })

//             const wrapper = document.createElement('div');
//             const newCalendar = new CalendarStructure(currentMonth, currentYear, 'prev', wrapper, slideContainer);
//             newCalendar.initializeCalendar();
//             console.log(newCalendar.isActive)

//             // Recalculate activeIndex to reflect the newly added previous month
//             // activeIndex = 0;
//         // } 
//         //  else {
//         // if (activeIndex > 0){
//             activeIndex--
//             showSlide((activeIndex), 'prev');
//         // }else{
//         //     activeIndex++
//         //     showSlide((activeIndex), 'prev');
//         // }
//         console.log(activeIndex)
//             //= (activeIndex + 1) % slides.length;
//     //   }
//         //  showSlide((activeIndex), 'prev');
//     }

//     // Button event listeners
//     forwardBtn.addEventListener('click', handleForwardSlide);
//     backBtn.addEventListener('click', handleBackSlide);

//     // Initial setup
//     const wrapper = document.createElement('div');
//     const initialCalendar = new CalendarStructure(currentMonth, currentYear, '', wrapper, slideContainer);
//     initialCalendar.initializeCalendar();
//     showSlide(activeIndex, '');
// });
import { getFirstDayOfMonth, getMonthname } from './getMonthDays.js';
import getMonthDays from './getMonthDays.js';

let currentMonth = 1; // Starts with January
let activeIndex = 0; // Tracks the current active slide
let currentYear = 2024; // Tracks the current year

document.addEventListener('DOMContentLoaded', () => {
    const daysWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const slideContainer = document.querySelector('.container-calendar');
    const forwardBtn = document.querySelector('.foward');
    const backBtn = document.querySelector('.back');
    const slideSet = new Set();

    // Helper function to create a unique slide identifier
    function getSlideKey(month, year, animate) {
        return `slide-${month}-${year}-${animate}`;
    }

    // Helper function to create a calendar view
    function createCalendar(month, year, animatedClass, wrapper, container) {
        const displayMonth = month === 0 ? 1 : month; // Display January as "1" and December as "12"
        const displayYear = year;

        wrapper.className = `currentCell ${animatedClass}`;
        wrapper.classList.add(`cell${displayMonth}-${year}`);
        wrapper.setAttribute('data-slide-key', getSlideKey(displayMonth, displayYear, animatedClass));

        const ul = document.createElement('ul');
        const h1 = document.createElement('h1');
        ul.className = 'span-wide';
        h1.className = 'span-wide';
        h1.textContent = `${getMonthname(displayMonth)}, ${displayYear}`;

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

        const firstDayIndex = getFirstDayOfMonth(displayMonth, displayYear);
        const daysInMonth = getMonthDays(displayMonth, displayYear);
        const spans = wrapper.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.textContent = index >= firstDayIndex && index - firstDayIndex < daysInMonth ? index - firstDayIndex + 1 : "";
        });

        if (slideSet.has(wrapper) || !wrapper.classList.contains(`cell${displayMonth}-${year}`) ){
            // slideSet.delete(wrapper);
            // slideContainer.remove(wrapper) 
            alert('exists')
            
        }else{
            slideSet.add(wrapper)
            container.append(wrapper);
        }
        
        
    }

    // Calendar structure class to manage individual calendar cells
    class CalendarStructure {
        constructor(month, year, animatedClass, wrapper, container) {
            this.month = month;
            this.year = year;
            this.animatedClass = animatedClass;
            this.wrapper = wrapper;
            this.container = container;
            this.initializeCalendar = this.initializeCalendar.bind(this);
        }

        initializeCalendar() {
            createCalendar(this.month, this.year, this.animatedClass, this.wrapper, this.container);
        }
    }

    // Function to update the active slide with animations
    function showSlide(index, direction = 'next') {
        slideContainer.setAttribute('data-direction', direction);
        const slides = Array.from(slideSet.keys());

        if (index < 0 ){
            
            index = Math.abs(index);
            // slideSet.delete(slides[index - 1]);
            
            // currentMonth--
        }

        slideSet.values().forEach((slide, i) => {
            slide.classList.remove('active', 'exit');
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('exit');
            } else {
                slide.classList.remove('active');
                slide.classList.add('exit');
                // slideSet.delete(slide + 1)
            }
        });

        console.log(`SlideSet size: ${slideSet.size}`);
        console.log(index)
    }

    // Function to handle forward button click
    function handleForwardSlide() {
        currentMonth++;
        if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
        const slideKey = getSlideKey(currentMonth, currentYear, 'next');

        console.log([...slideSet.keys()])

        // Check if the slide already exists
        if (![...slideSet.keys()].some(slide => slide.getAttribute('data-slide-key') === slideKey)) {
            const wrapper = document.createElement('div');
            const newCalendar = new CalendarStructure(currentMonth, currentYear, 'next', wrapper, slideContainer);
            newCalendar.initializeCalendar();

            // Add to Set and limit size
            //  slideSet.add(wrapper);
            // limitSlideSetSize(5); // Keep only the last 5 slides
        }

        activeIndex++;
        showSlide(activeIndex, 'next');

        
    }

    // Function to handle back button click
    function handleBackSlide() {
        
        currentMonth--;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
        }
        const slideKey = getSlideKey(currentMonth, currentYear, 'prev');

        console.log([...slideSet.keys()])

        // Check if the slide already exists
        if (![...slideSet.keys()].some(slide => slide.getAttribute('data-slide-key') === slideKey)) {
            const wrapper = document.createElement('div');
            const newCalendar = new CalendarStructure(currentMonth, currentYear, 'prev', wrapper, slideContainer);
            newCalendar.initializeCalendar();

            // Add to Set and limit size
            // slideSet.add(wrapper);
            // limitSlideSetSize(5); // Keep only the last 5 slides
        }
            activeIndex--;
            showSlide(activeIndex, 'prev');
        
    }

    // Helper function to limit the number of slides stored in the Set
    function limitSlideSetSize(maxSize) {
        while (slideSet.size > maxSize) {
            const firstSlide = slideSet.values().next().value; // Get the first element in the Set
            slideSet.delete(firstSlide);
            slideContainer.removeChild(firstSlide); // Remove the slide from the DOM
        }
    }

    // Button event listeners
    forwardBtn.addEventListener('click', handleForwardSlide);
    backBtn.addEventListener('click', handleBackSlide);

    // Initial setup
    const wrapper = document.createElement('div');
    const initialCalendar = new CalendarStructure(currentMonth, currentYear, '', wrapper, slideContainer);
    initialCalendar.initializeCalendar();
    // slideSet.add(wrapper);
    showSlide(activeIndex, '');
});
