let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, singer)
});

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("...")); // ignored
  setTimeout(() => resolve("...")) //ignored
});

let promise = new Promise(function(resolve, reject) {
  // not taking our time to do the job
  resolve(123); // immediately give the result: 123
});

promise.then(
  function(result) { /* handle a succesful result */},
  function(error) { /* handle an error */ }
)

let promise = new Promise(function(resolve, reject) {
setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => alert(result), // doesn't run
  error => alert(error) //shows "Error: Whoops!" after 1 second
);

let promise = new Promise(resolve => {
  setTimeout(() => resolve("done"), 1000);
});

promise.then(alert); // shows "done!" after 1 second

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second

new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => stop loading indicator)
  // so the loading indicator is always stopped before we go on
  .the(result => show result, err => show error)

new Promise((resolve, reject) => {
  setTimeout(() => resolve("value", 2000));
})
  .finally(() => alert("Promise ready")) // triggers first
  .then(result => alert(result)); // <-- .then shows "value"

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready")) // triggers first
  .catch(err => alert(err)); // <-- .catch shows the error

// the promise becomes resolved immediately upon creation
let promise = new Promise(resolve => resolve("done"));

promise.then(alert); // done! (shows up right now)

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onLoad = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);

}


function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
});

}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(script => alert('Another handler...'));