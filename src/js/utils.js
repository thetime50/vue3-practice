
const proxy2attr = (obj) => {
  const res = {};
  Object.entries(obj).forEach(([key, value]) => {
    res[key] = value;
  });
  return res;
};

const dummy = {};

export {
  dummy,
  proxy2attr,
};
