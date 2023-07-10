var checkIfInstanceOf = function (obj, classFunction) {
  try {
    obj.__proto__;
    classFunction.name;
    classFunction instanceof Error && new error('')
  } catch {
    return false;
  }

  const protos = [];
  let currentProto = obj.__proto__;

  while (currentProto?.constructor?.name) {
    protos.push(currentProto?.constructor?.name);
    currentProto = currentProto.__proto__;
  }

  return protos.includes(classFunction.name);
};

console.log(checkIfInstanceOf(Error(), Error()));
