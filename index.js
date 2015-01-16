module.exports = function (gid){
  var xorval = gid > 31578 ? 474 : 31578;
  var letter = gid > 31578 ? 'o' : '';
  return letter + parseInt((gid ^ xorval)).toString(36);
}
