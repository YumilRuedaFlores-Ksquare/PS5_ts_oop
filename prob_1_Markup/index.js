const btnDaily   = document.querySelector('#btndaily');
const btnMonthly = document.querySelector('#btnmonthly');
const btnWeekly  = document.querySelector('#btnweekly');

const grid = document.querySelector('#grid-container');
//It would be cool use an intaface with to make a pre-format for OBJ:
/* obj:
    title: ',
    hours: ,
    time: 
*/
const skeleton = function(obj) {
    //create elements
    const newElement = function(element){
        return document.createElement(element);
    }
    const selectSVG = function(title){
        if(title == 'Work'){
            return "img/work.svg";
        } else if(title == 'Play'){
            return "img/play.svg";
        }else if(title == 'Study'){
            return "img/study.svg";
        }else if(title == 'Exercise'){
            return "img/exercise.svg";
        }else if(title == 'Social'){
            return "img/social.svg";
        }else if(title == 'Self Care'){
            return "img/self-care.svg";
        }else{
            return "img/social.svg";
        }
    }
    //div general
    const gridItem = newElement('div');
    gridItem.classList.add("grid-item");

    //water mark with color
    const newsvg = newElement('img');
    newsvg.src = selectSVG(obj.title);
    newsvg.alt = "svg";

    //bottom div
    const bottomGrid = newElement('div');
    bottomGrid.classList.add("grid-textcontentainer");
    //title container (title + dots)
    const titleGrid = newElement('div');
    titleGrid.classList.add("title-container");
    
    //TITLE
    const titletxt = document.createElement('p');
    //take the title from my obj
    titletxt.textContent = obj.title; 
    titletxt.classList.add("title-grid");
    titleGrid.appendChild(titletxt);

    //dots
    const dots = newElement('img');
    dots.src = "img/dots.svg";
    dots.alt = "svg dots";
    titleGrid.appendChild(dots);
    //I have to use Fragment???

    //HOURS
    const hourstxt = document.createElement('p');
    //take the info from my obj
    hourstxt.textContent = obj.hours + "hrs"; 
    hourstxt.classList.add("hours-grid");

    //TIME 
    const timetxt = document.createElement('p');
    //take the info from my obj
    timetxt.textContent = `Last Week - ${obj.time} hrs `; 
    timetxt.classList.add("time-grid");

    
    gridItem.appendChild(newsvg);
    bottomGrid.appendChild(titleGrid);
    bottomGrid.appendChild(hourstxt);
    bottomGrid.appendChild(timetxt);
    gridItem.appendChild(bottomGrid);
    
    grid.appendChild(gridItem);

}

let myTest = {
    title: 'Alfa',
    hours: 32,
    time: 36
};

skeleton(myTest);
skeleton(myTest);
skeleton(myTest);

