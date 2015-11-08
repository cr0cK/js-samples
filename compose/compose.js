const compose = (...funcs) => value => {
  return funcs.reduceRight((previousValue, f) => {
    return f(previousValue);
  }, value);
}

const length = str => str.length;
const split = sep => str => str.split(sep);

const wordCount = (str) => {
  const parts = split(' ')(str);
  return length(parts);
}

const wordCount2 = compose(length, split(' '));

export { wordCount, wordCount2 };
