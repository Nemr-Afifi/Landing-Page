/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const allSections = document.querySelectorAll('section');           //Storing all the sections with queryselectorand storing into a global var
let myNavbar = document.getElementById("navbar__list");             //Getting and storing the navbar__list into a global var

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function CreateaNav(){
    allSections.forEach(section =>{
        let textOfLink = section.getAttribute("data-nav");          //Getting the section text through the data-nav of each section
        let NewLi = document.createElement("li");                   //Creating a new Li 
        let NewLink = document.createElement("a");                  //Creating the Link a
        NewLink.classList.add("menu__link");                        //Adding the class to the Link a
        NewLink.textContent = textOfLink ;                          //Adding the text of data-nac to the links
                                                                    
        NewLink.addEventListener("click",()=> {                     //Adding The eventListerner to scroll to sections smoothly 
            section.scrollIntoView({behavior: "smooth"});           //Helping Source :
        });                                                         //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

        NewLi.appendChild(NewLink);                                 //Appending the Child to the Li
        myNavbar.appendChild(NewLi);                                //Appending the child to the navbar itself
    })
}
CreateaNav();                                                       //calling createnav f

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", ()=> {
    allSections.forEach( location => {
        let area = location.getBoundingClientRect().top;
        if(area <150 && area > -150 ){                              //specifies at which location is the veiwport and if it's there or not
            allSections.forEach((deactSection)=>{
               
                if(deactSection.classList.contains("your-active-class")){       // if the specified class exists removes it 
                    deactSection.classList.remove("your-active-class");
                } 
            })
            
            location.classList.add("your-active-class");                        // adds the class when in the mentioned Vw
        }
    })
})                                                                  // additional helping resources https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
                                                                    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
                                                                    // https://www.codegrepper.com/code-examples/javascript/add+class+when+element+in+viewport+vanilla+javascript
                                                                    // https://pretagteam.com/question/add-class-when-element-in-viewport-vanilla-javascript



//                 if(deactSection.classList.contains("your-active-class"))

   /*     area.left >= 0 &&
        area.bottom <=(window.innerHeight || document.documentElement.clientHeight) &&
        area.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
*/

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// additional items 
// back to top button functions

const topBtn = document.getElementById("backTopBtn")
window.onscroll = () => {scrollAppear()};

function scrollAppear(){
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
// takes the page back to the top on function calling
function activeTopBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

