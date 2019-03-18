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


/**
 @class
*/
export default class EventService {

  constructor (eb: any, address: string);

  publish(event: Object, complete: (err: any, result: Object) => any) : void;

  publishOCC(newEvent: Object, oldEvent: Object, complete: (err: any, result: Object) => any) : void;

  poll(eventId: number, complete: (err: any, result: Array) => any) : void;

  pollEvent(eventId: number, event: string, complete: (err: any, result: Array) => any) : void;

  pollEntity(eventId: number, entity: string, complete: (err: any, result: Array) => any) : void;

  pollEntityEvent(eventId: number, entity: string, event: string, complete: (err: any, result: Array) => any) : void;

  pollEntityById(entityId: string, entity: string, complete: (err: any, result: Array) => any) : void;

  pollContext(eventId: number, context: string, complete: (err: any, result: Array) => any) : void;

  findLastEvent(entityId: string, entity: string, complete: (err: any, result: Array) => any) : void;

  find(hash: string, complete: (err: any, result: Array) => any) : void;
}