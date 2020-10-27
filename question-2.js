let notification = [
  { message: "Lorem", read: true },
  { message: "Ipsum", read: true },
  { message: "Dolor", read: true },
  { message: "Sit", read: false },
  { message: "Amet", read: true },
];

let allRead = true;

let arrLength = notification.length - 1;
let falseResult = 0;

function arryMap(n, data) {
  let valueObject = data[n];
  if (!valueObject.read) {
    falseResult++;
  }

  if (falseResult !== 0) {
    allRead = false;
    return console.log(allRead);
  }
  if (n === 0) {
    return console.log(allRead);
  }
  return arryMap(n - 1, data);
}

arryMap(arrLength, notification);
