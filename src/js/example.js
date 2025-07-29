export function func(container) {
  let idInterval = null;
  let count = 555;
  idInterval = setInterval(() => {
    container.textContent = count;
    console.log("debagggg", count);
    count += 10;
    if (count > 640) {
      clearInterval(idInterval);
    }
  }, 2000);
}
