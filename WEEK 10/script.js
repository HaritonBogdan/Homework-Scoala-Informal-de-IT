// Functia care primeste un parametru de tipul integer, string, object, array, callback

function intParam(int) {
  console.log(int);
}

// Functia care accepta mai multi parametrii de mai multe tipuri

function multipleParams(str, obj, arr) {
  console.log(str, obj, arr);
}

// o functie care accepta un numar nedefinit de argumente care returneaza suma lor

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

// o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca booleanul este true
// si rejected daca este false cu alta valoare, prindeti ce returneaza functia si afisati cu console.log valoarea

function boolPromise(bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve("Boolean was true.");
    } else {
      reject("Boolean was false.");
    }
  });
}

boolPromise(true)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

boolPromise(false)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
