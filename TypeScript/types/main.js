// 基础类型
function doFor () {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('提升', i);
}
doFor();
