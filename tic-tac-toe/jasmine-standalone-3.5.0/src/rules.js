function Rules() {
}

Rules.prototype.isEmpty = function(_str) {
  return (!_str || 0 === _str.length);
}
