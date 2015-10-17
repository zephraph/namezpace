var extend = require('extend');

var Namespace = GLOBAL.__namezpace__ || {};

function namezpace(scope, definition) {
  var item, root;
  if (!Namespace.hasOwnProperty(__dirname)) {
    Namespace[__dirname] = {};
  }
  root = Namespace[__dirname];

  // Traverse scope and build an object tree as needed
  // TODO: Add better error handling
  if( typeof scope === 'string' ) {
    scope = scope.split('.');
    for (var i = 0; i < scope.length; ++i) {
      item = scope[i];
      if (root[item] == null) {
        root[item] = {};
      }
      root = root[item];
    }
  } else {
    return root;
  }

  if (typeof definition === 'function') {
    definition.apply(root);
  } else if (typeof definition === 'object' && definition !== null) {
    root = extend(true, root, definition);
  }

  return root;
};

Object.defineProperty(namezpace, 'local', {
  get: function() {
    return Namespace[__dirname];
  }
});

GLOBAL.__namezpace__ = GLOBAL.__namezpace__ || Namespace;

module.exports = namezpace;
