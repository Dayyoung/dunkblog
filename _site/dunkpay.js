 /* 
 BeeconJS JavaScript Library v0.1.3
 http://beeconjs.com/
 
 Copyright 2015, Dayyoung You
 Dual licensed under the MIT or GPL Version 2 licenses.
 Visit http://beeconjs.com/license 
 */
var Bees = [];
var Bee = function (url, key , strict) {
  this.url = url;
  this.key = key;
  this.BEECODE = null;
  this.buttonList = [];
  Bees.push(this);
  this.data = null;
  this.strict = strict;
}

var BeeButton = function(mark,action) {
  this.mark = mark;
  this.action = action;
}

Bee.prototype.addButton = function(position,mark,action)
{
  this.buttonList[position-1]= new BeeButton(mark,action);
}

Bee.prototype.addData = function(data)
{
  this.data= data;
}