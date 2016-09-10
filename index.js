var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign(obj, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newRecipe = Object.assign({}, obj)
  delete newRecipe.key
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
