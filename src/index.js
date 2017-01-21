'use strict';

function post(){
    this.secret = '';
    this.package_name = '';
    return this;
};

post.prototype.init = function(secret, package_name) {
    this.secret = secret;
    this.package_name = package_name;
    return this;
};

post.prototype.dump = function() {
    console.log(this);
    return this;
};

exports.post = post;