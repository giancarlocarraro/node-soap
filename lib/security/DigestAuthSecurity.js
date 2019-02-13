"use strict";

var _ = require('lodash');

function DigestAuthSecurity(username, password, defaults) {
  this._username = username;
  this._password = password;
  this.defaults = {};
  _.merge(this.defaults, defaults);
}

DigestAuthSecurity.prototype.addHeaders = function(headers) {
  //headers.Authorization = 'Basic ' + new Buffer((this._username + ':' + this._password) || '').toString('base64');
};

DigestAuthSecurity.prototype.toXML = function() {
  return '';
};

DigestAuthSecurity.prototype.addOptions = function(options) {
  _.merge(options, {'auth': { 'user': this._username,'pass': this._password,'sendImmediately': false}});
  _.merge(options, this.defaults);
};

module.exports = DigestAuthSecurity;
