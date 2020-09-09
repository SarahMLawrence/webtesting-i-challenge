const { isTSEnumDeclaration } = require("@babel/types");

module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20){
    item.enhancement = item.enhancement + 1;
  }
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability = item.durability - 5;
  }else{
    item.durability = item.durability - 10
  }
  if(item.enhancement > 16){
    item.enhancement = item.enhancement -1
  }
  
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if(item.enhancement === 0){
    item.name = item.name
  }
  if(item.enhancement > 0){
    item.name = `[+7] ${item.name}`
  }

  return { ...item };
}
