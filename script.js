// getRSSFeedData is a function which has two parameters: RSSUrl and FunctionThatWillCreateHTMLElementsFromRSSData
// The first parameter is supposed to be a url in the form of a string, containing the RSS feed to retrieve
// The second parameter is supposed to be a function (yes, you can pass a function as an argument to another function)
// The function that you pass when you call getRSSFeedData is executed, with the data from the RSS feed as an argument
function getRSSFeedData(RSSUrl, FunctionThatWillCreateHTMLElementsFromRSSData) {
    const APIKey = "api_key=vfwvazfmxejaiwpwb88jntrjplbqmppaqwr8xgsf"; //The 'password' for the API
    const APICount = "count=25"; //Number of results to return
    const APIEndpoint = "https://api.rss2json.com/v1/api.json?rss_url="; //The API which converts XML to JSON
    const APIUrl = APIEndpoint+RSSUrl+"&"+APIKey+"&"+APICount; //The API url from which we will get the data

    fetch(APIUrl) //The function which will get the data
        .then(response => response.json())
        .then(data => FunctionThatWillCreateHTMLElementsFromRSSData(data))
}

// -------  1 -------
//Create three functions CreateHTMLFromFeedOne, CreateHTMLFromFeedTwo, and CreateHTMLFromFeedThree
function createHTMLFromFeedOne(RSSData) {
    let container = document.getElementById("div1")

    for (item of RSSData.items) {
       let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "RSSItem")


        let title = document.createElement("p")
        title.innerHTML = "Title: " + item.title
        wrapper.append(title)

        let description = document.createElement("p")
        description.innerHTML = "Description: " + item.description
        wrapper.append(description)

        container.append(wrapper)
    }
    console.log(RSSData)
}
getRSSFeedData("https://www.bookbrowse.com/rss/book_news.rss", createHTMLFromFeedOne)


function createHTMLFromFeedTwo(RSSData) {
    let container = document.getElementById("div2")

    for (item of RSSData.items) {
        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "RSSItem")

        let title = document.createElement("p")
        title.innerHTML = "Title: " + item.title
        wrapper.append(title)

        let description = document.createElement("p")
        description.innerHTML = "Description: " + item.description
        wrapper.append(description)

        container.append(wrapper)
    }
    console.log(RSSData)
}
getRSSFeedData("https://www.bookbrowse.com/rss/newest_reader_reviews.rss", createHTMLFromFeedTwo)



function createHTMLFromFeedThree(RSSData) {

    let container = document.getElementById("div3")

    for (item of RSSData.items) {
        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "RSSItem")

        let title = document.createElement("p")
        title.innerHTML = "Title: " + item.title
        wrapper.append(title)

        let description = document.createElement("p")
        description.innerHTML = "Description: " + item.description
        wrapper.append(description)

        container.append(wrapper)
    }
    console.log(RSSData)
}
getRSSFeedData("https://www.bookbrowse.com/blogs/editor/rss.cfm", createHTMLFromFeedThree);

//All three functions have a parameter called RSSData
//The goal of these functions is to add content to your HTML page, using the data that will be inside RSSData
//RSSData will be an object, but its structure will depend on the RSS feeds you choose to use (they might be the same, they might be different)
//That is why we need three separate functions: they will need to be customised to your choice of RSS feed
//Before doing anything else, console.log RSSData and (after calling these functions) examine its structure


//Decide which information you want to display on your website (e.g., title, author, date, image, etc)


//Retrieve the HTML element you want to add content to and store it in the variable 'container'
//let container = document.getElementTagName("body");
//Create a loop which will go over all the relevant items in RSSData. It should:
// create an HTML element that will contain all the info from this particular item, stored in the variable 'wrapper'
// create HTML elements for each of the pieces of data you decided to include (e.g., title, author, date, image, etc)
// set the content and attributes of each of these elements, according to your preferences
// append each element to 'wrapper'
// append 'wrapper' to 'container'


// -------  2 -------
//Call the function GetRSSFeedData three times, but with different arguments.
// The first argument will be the RSS url you want to use
// the second argument will be the CreateHTML function you created in 1 that corresponds to the particular RSS url in the first argument
// This should result in content from the RSS feed being added to your website


// -------  3 -------
// retrieve the button and store it in the variable analyticsButton
let analyticsButton = document.getElementById("button");
let analyticsWindow = document.getElementById("analytics");
analyticsButton.addEventListener("click", function() {
    analyticsWindow.classList.toggle("hidden")
});
// retrieve the analytics HTML element and store it in the variable analyticsWindow
// add an event listener to the button that listens for clicks

// create an anonymous event handler function which toggles the class 'hidden' on the analytics element


// -------  4 -------
// Add event listeners to your document that listens for clicks, scrolling and mouse moving
// Create named event handler functions for each of these events: clickAnalyser, scrollAnalyser, mousemoveAnalyser
// If the right conditions are met (use the event object), add the class 'achieved' to the corresponding HTML element in the analytics window
    /*document.addEventListener("click", clickAnalyser)
    document.addEeventListener("scroll", scrollAnalyser)
    document.addEventListener("mousemove", mousemoveAnalyser)*/

let clickCount = 0;
function clickAnalyser(eventObject) {
    if (eventObject.target.parentElement.className === "RSSItem" || eventObject.target.className === "RSSItem") {
        clickCount += 1;
        document.getElementById("click1").classList.add("achieved");
    }
    if (clickCount >= 5) {
        document.getElementById("click5").classList.add("achieved");
    }
}
document.addEventListener("click", clickAnalyser);


let previousPos = window.scrollY; //y-aksen
function scrollAnalyser() { //not eventobject becuase you interact with the window not an object
    if(previousPos > window.scrollY) {
        previousPos = window.scrollY;
        document.getElementById("scrollup").classList.add("achieved");
    }
    else if(previousPos < window.scrollY) {
        previousPos = window.scrollY;
        document.getElementById("scrolldown").classList.add("achieved");
    }

}
document.addEventListener("scroll", scrollAnalyser);

function mousemoveAnalyser(eventObject) {
    if(eventObject.clientY < 10 && eventObject.clientX < 10) { //10 pixels. øverste pixel hedder 0,0, jo længere vi går nedad jo mere stiger den og jo længere vi går horizonalt jo mere stiger den
        document.getElementById("mouseupperleftcorner").classList.add("achieved");
}
    else if((window.innerHeight - eventObject.clientY) < 10 && (window.innerWidth - eventObject.clientX) < 10) {     //client y og x er vores x og y koordinater og regnes op fra venstre hjørne. hvis man vil nede i det andet hjørne og vide hvor stor vinduet er. innerwidth og inner height er maksimum størrelse.
        document.getElementById("mouselowerrightcorner").classList.add("achieved");
    }
}
document.addEventListener("mousemove", mousemoveAnalyser);

// clickAnalyser:
// the user clicks on an RSS feed items
// the user clicks on five RSS feed items

// scrollAnalyser:
// the user scrolls up
// the user scrolls down


// mousemoveAnalyser:
// the user puts the mouse within a 10 pixel radius of the upper left corner
// the user puts the mouse within a 10 pixel radius of the lower right corner
