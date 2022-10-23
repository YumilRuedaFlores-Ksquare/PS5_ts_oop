const btnDaily   = document.querySelector('#btn-daily');
const btnMonthly = document.querySelector('#btn-monthly');
const btnWeekly  = document.querySelector('#btn-weekly');

const grid = document.querySelector('#grid-container');

const _url ='https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json';

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
    gridItem.setAttribute('id','item');

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
const clean = function(){
    const elements = document.querySelectorAll('.grid-item');
    elements.forEach(function(userItem) {
        userItem.remove();
    });
}
function request(type, url){
    fetch(url)
    .then((response) => response.json())
    .then(data => {
        data.forEach((element, i) => {
            const myTest = {
                title: '',
                hours:0,
                time: 0
            };
            if(type == 'daily'){
                myTest.title = data[i].title;
                myTest.hours = data[i].timeframes.daily.current;
                myTest.time = data[i].timeframes.daily.previous
            }
            if(type == 'weekly'){
                myTest.title = data[i].title;
                myTest.hours = data[i].timeframes.weekly.current;
                myTest.time = data[i].timeframes.weekly.previous
            }
            if(type == 'monthly'){
                myTest.title = data[i].title;
                myTest.hours = data[i].timeframes.monthly.current;
                myTest.time = data[i].timeframes.monthly.previous
            }   
            skeleton(myTest);

        })
     
    })
    .catch(error => console.error(error));
}

request('daily', _url);

btnDaily.addEventListener('click', function(){
    clean();
    request('daily', _url);
})
btnMonthly.addEventListener('click',function(){
    clean();
    request('monthly', _url);
})
btnWeekly.addEventListener('click',function(){
    clean();
    request('weekly', _url);
})
