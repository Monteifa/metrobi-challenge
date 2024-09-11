const string1 = '{[]}';
const string2 = '{(])}';
const string3 = '{([)]}';

const bracketMap = new Map([['}', '{'], [(']', '[')], [(')', '(')]]);

const question4 = (string) => {
  let opened = [];
  let closing = '';

  for (const char of string) {
    if (['{', '[', '('].includes(char)) {
      opened.push(char);
    }

    if (['}', ']', ')'].includes(char)) {
      if (closing && bracketMap.get(char) !== opened.at(-1)) return false;

      closing = char;

      opened.pop();
    }
  }

  return true;
};

console.log(question4(string1));
console.log(question4(string2));
console.log(question4(string3));
