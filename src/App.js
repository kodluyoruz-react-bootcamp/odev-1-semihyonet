import getData from "./lib/service"


// This function gets the data from the web and waits for the promise to end. Then logs it out.
getData(8).then((data) =>{
    console.log(data)
});

