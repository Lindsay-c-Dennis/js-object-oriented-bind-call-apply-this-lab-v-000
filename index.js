function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnFunctionOf(functionToBeCopied, thisValue) {
  const newFunc = function() { 
    functionToBeCopied.bind(thisValue);
  return newFunc;  
  }
}