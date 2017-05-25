// Generated by CoffeeScript 1.7.1
var CrmModule, CustomModule1, Request, xml2js, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require('underscore');

xml2js = require("xml2js");

CrmModule = require('./crm-module');

Request = require('../../request');

CustomModule1 = (function(_super) {
  __extends(CustomModule1, _super);

  function CustomModule1() {
    return CustomModule1.__super__.constructor.apply(this, arguments);
  }

  CustomModule1.prototype.name = 'CustomModule1';

  CustomModule1.prototype.getMyRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.getSearchRecordsByPDC = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.deleteRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.convertLead = function(lead_id, options, cb) {
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

  CustomModule1.prototype.getRelatedRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.updateRelatedRecords = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.getUsers = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.uploadFile = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.downloadFile = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.deleteFile = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.uploadPhoto = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.downloadPhoto = function() {
    throw new Error('Not Implemented');
  };

  CustomModule1.prototype.deletePhoto = function() {
    throw new Error('Not Implemented');
  };

  return CustomModule1;

})(CrmModule);

module.exports = CustomModule1;