/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.geoideas.eventx.shared;

/**
 *
 * @author owen
 */
public class Error {
    public static final int EVENT_CONTENT_ERROR = 1000;
    public static final int DUPLICATE_EVENT = 1001;
    public static final int DUPLICATE_HASH = 1002;
    public static final int UNKNOWN_ERROR = 1111;
    
    public static final String EVENT_CONTENT_ERROR_MESSAGE = "Error in the event message format";
    public static final String DUPLICATE_EVENT_MESSAGE = "An event with the same ENTITY, ENTITYID and REVISION already exists";
    public static final String DUPLICATE_HASH_MESSAGE = "An event with the same HASH already exists";
    public static final String UNKNOWN_ERROR_MESSAGE = "An unknown error has occured";
}
