(function() {
  const __process__ = process;
  const program = () => {
    #{source}
  };
  const handleError = (err) => {
    printFinal(['err', '' + err, err.stack]);
  }
  const printFinal = (data) => {
    __process__.stdout.write(JSON.stringify(data), "utf-8", () => {
      __process__.exit(0);
    });
  };

  try {
  let result = program();
    if (typeof result == 'undefined' && result !== null) {
      printFinal(["ok"]);
    } else {
      try {
        printFinal(['ok', result]);
      } catch (e) {
        handleError(e);
      }
    }
  } catch (e) {
    handleError(e);
  }
})();
