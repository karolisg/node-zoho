// Generated by CoffeeScript 1.7.1
var CrmModule, CustomModule9, Request, xml2js, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

xml2js = require("xml2js");

CrmModule = require('./crm-module');

Request = require('../../request');

CustomModule9 = (function(_super) {
  __extends(CustomModule9, _super);

  function CustomModule9() {
    return CustomModule9.__super__.constructor.apply(this, arguments);
  }

  CustomModule9.prototype.name = 'CustomModule9';

  CustomModule9.prototype.getMyRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.getSearchRecordsByPDC = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.deleteRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.convertLead = function(lead_id, options, cb) {
    var defaults, query, records, request, url;
    if (!lead_id) {
      throw new Error('Requires a Lead Id');
    }
    if (!options) {
      throw new Error('Requires an options');
    }
    defaults = {
      createPotential: false,
      assignTo: null,
      notifyLeadOwner: true,
      notifyNewEntityOwner: true
    };
    _.defaults(options, options);
    records = [_.pick(options, ['createPotential', 'assignTo', 'notifyLeadOwner', 'notifyNewEntityOwner'])];
    if (options.createPotential === true && !_.isObject(options.potential)) {
      throw new Error('Requires a potential');
    } else if (options.createPotential === true) {
      records.push(options.potential);
    }
    query = {
      leadId: lead_id,
      newFormat: 1,
      xmlData: this.build(records)
    };
    options = {
      method: 'POST'
    };
    url = this.buildUrl(query, ['convertLead'], options);
    request = new Request(this, url);
    return request.request((function(_this) {
      return function(err, response) {
        var processed;
        if (err) {
          if (_.isFunction(cb)) {
            return cb(err, null);
          }
        } else {
          processed = _this.processRecord(response.data);
          response.data = processed;
          if (_.isFunction(cb)) {
            return cb(null, response);
          }
        }
      };
    })(this));
  };

  CustomModule9.prototype.getRelatedRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.updateRelatedRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.getUsers = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.uploadFile = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.downloadFile = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.deleteFile = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.uploadPhoto = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.downloadPhoto = function() {
    throw new Error('Not Implemented');
  };

  CustomModule9.prototype.deletePhoto = function() {
    throw new Error('Not Implemented');
  };

  return CustomModule9;

})(CrmModule);

module.exports = CustomModule9;
