{
  function log(...items) {
    console.log("1.", ...items);
  }
  let promise = new Promise(function (resolve, reject) {
    const flag = Math.round(Math.random());
    setTimeout(() => {
      flag ? resolve("Done!") : reject(new Error("Whoops!"));
    }, 1000);
  });

  // promise.then(
  //   (result) => console.log(result),
  //   (error) => console.log("FUCK! " + error)
  // );

  promise
    .then((result) => log("result"))
    .finally(() => log("I'm drinking coffee"))
    .catch((error) => log(`FUCKING ERROR: ${error}`))
    .finally(() => delete promise);

  log("Hello");
}

{
  function log(...items) {
    console.log("2.", ...items);
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script Loading Error ${src}`));

      document.head.append(script);
    });
  }

  let promise = loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
  );

  promise.then(null, log).then(log);
}

// tasks

{
  const log = (...items) => console.log("TASK 1.", ...items)
  let promise = new Promise((resolve, reject) => {
    resolve(1)

    setTimeout(() => resolve(2), 1000)
  })

  promise.then(log)
}

{
  console.log(1);
  setTimeout(() => console.log(2), 0);
  for (let i = 0; i < 10 ** 20; i++) {}
}
