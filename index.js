module.exports = function(Model) {
  Model.prototype.friendlyErrors = function() {
    var friendlyErrors = this.errors.slice(0);

    for(var i = 0; i < friendlyErrors.length; ++i) {
      var error = friendlyErrors[i],
          attr = error.attr;
      if(this.model.attrs[attr])
        error.friendlyName = this.model.attrs[attr].friendlyName;
    }

    return friendlyErrors;
  };

  Model.prototype.errorMessages = function() {
    var errors = this.friendlyErrors();
    var messages = [];
    errors.forEach(function(error) {
      var name = error.friendlyName ? error.friendlyName : (error.attr.charAt(0).toUpperCase() + error.attr.slice(1));
      messages.push(name + " " + error.message);
    });
    return messages;
  };
};
