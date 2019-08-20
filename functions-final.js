const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

module.exports = {
  f1: (...fns) => (...args) => fns.map(fn => fn.apply(null, args)),
  f2: (fn) => val => fn(val),
  f3: (arr, fn = Boolean) => arr.every(fn),
  f4: (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    ),
  f5: arr => arr.filter(Boolean),
  f6: (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0),
  f7: (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  },
  f8: arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i)),
  f9: flatten,
  f10: (n, val = 0) => Array(n).fill(val),
  f11: (arr, fn = Boolean) => !arr.some(fn),
  f12: arr => arr[Math.floor(Math.random() * arr.length)],
  f13: ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  },
}
