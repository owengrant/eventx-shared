/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/// <reference path="./event_service-proxy.d.ts" />

/** @module spooch-event-service-js/event_service */
!function (factory) {
  if (typeof require === 'function' && typeof module !== 'undefined') {
    factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD loader
    define('spooch-event-service-js/event_service-proxy', [], factory);
  } else {
    // plain old include
    EventService = factory();
  }
}(function () {

  /**
   @class
  */
  var EventService = function(eb, address) {
    var j_eb = eb;
    var j_address = address;
    var closed = false;
    var that = this;
    var convCharCollection = function(coll) {
      var ret = [];
      for (var i = 0;i < coll.length;i++) {
        ret.push(String.fromCharCode(coll[i]));
      }
      return ret;
    };

    /**

     @public
     @param event {Object} 
     @param complete {function} 
     */
    this.publish =  function(event, complete) {
      var __args = arguments;
      if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"event":__args[0]}, {"action":"publish"}, function(err, result) { __args[1](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param newEvent {Object} 
     @param oldEvent {Object} 
     @param complete {function} 
     */
    this.publishOCC =  function(newEvent, oldEvent, complete) {
      var __args = arguments;
      if (__args.length === 3 && (typeof __args[0] === 'object' && __args[0] != null) && (typeof __args[1] === 'object' && __args[1] != null) && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"newEvent":__args[0], "oldEvent":__args[1]}, {"action":"publishOCC"}, function(err, result) { __args[2](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param eventId {number} 
     @param complete {function} 
     */
    this.poll =  function(eventId, complete) {
      var __args = arguments;
      if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"eventId":__args[0]}, {"action":"poll"}, function(err, result) { __args[1](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param eventId {number} 
     @param event {string} 
     @param complete {function} 
     */
    this.pollEvent =  function(eventId, event, complete) {
      var __args = arguments;
      if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"eventId":__args[0], "event":__args[1]}, {"action":"pollEvent"}, function(err, result) { __args[2](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param eventId {number} 
     @param entity {string} 
     @param complete {function} 
     */
    this.pollEntity =  function(eventId, entity, complete) {
      var __args = arguments;
      if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"eventId":__args[0], "entity":__args[1]}, {"action":"pollEntity"}, function(err, result) { __args[2](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param eventId {number} 
     @param entity {string} 
     @param event {string} 
     @param complete {function} 
     */
    this.pollEntityEvent =  function(eventId, entity, event, complete) {
      var __args = arguments;
      if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"eventId":__args[0], "entity":__args[1], "event":__args[2]}, {"action":"pollEntityEvent"}, function(err, result) { __args[3](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param entityId {number} 
     @param entity {string} 
     @param complete {function} 
     */
    this.pollEntityById =  function(entityId, entity, complete) {
      var __args = arguments;
      if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"entityId":__args[0], "entity":__args[1]}, {"action":"pollEntityById"}, function(err, result) { __args[2](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param entityId {number} 
     @param entity {string} 
     @param complete {function} 
     */
    this.findLastEvent =  function(entityId, entity, complete) {
      var __args = arguments;
      if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"entityId":__args[0], "entity":__args[1]}, {"action":"findLastEvent"}, function(err, result) { __args[2](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

    /**

     @public
     @param hash {string} 
     @param complete {function} 
     */
    this.find =  function(hash, complete) {
      var __args = arguments;
      if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
        if (closed) {
          throw new Error('Proxy is closed');
        }
        j_eb.send(j_address, {"hash":__args[0]}, {"action":"find"}, function(err, result) { __args[1](err, result && result.body); });
        return;
      } else throw new TypeError('function invoked with invalid arguments');
    };

  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = EventService;
    } else {
      exports.EventService = EventService;
    }
  } else {
    return EventService;
  }
});