package com.geoideas.eventx.shared;

import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;

public class EventDTO {
    private static final String DELIMITER = ":";
    private int eventId;
    private String event;
    private String context;
    private String entityId;
    private String entity;
    private int version;
    private JsonObject data;
    private boolean sent;
    private String received;
    private String eventType;
    private int revision;
    private String hash;

    public EventDTO(){
        this.eventId = -1;
        this.event = "";
        this.context = "";
        this.entityId = "";
        this.entity = "";
        this.version = -1;
        this.data = new JsonObject();
        this.received = "";
        this.eventType = "";
        this.revision = -1;
        this.hash = "";
    }

    
    public EventDTO(String context,String event, String eventType, int revision, String entityId, String entity, int version, JsonObject data) {
        this();
        this.context = context;
        this.event = event != null && !event.isBlank() ? event : "";
        this.entityId = entityId;
        this.entity = entity != null && !entity.isBlank() ? entity : "";
        this.version = version;
        this.data = data;
        this.eventType = eventType;
        this.revision = revision;
    }

    public EventDTO fromJson(JsonObject json){
        this.context = json.getString("context", "");
        this.eventId = json.getInteger("eventId", -1);
        setEvent(json.getString("event", ""));
        this.entityId = json.getString("entityId", "");
        setEntity(json.getString("entity", ""));
        this.version = json.getInteger("version", -1);
        this.data = json.getJsonObject("data", new JsonObject());
        this.sent = json.getBoolean("sent",false);
        this.received = json.getString("received", "");
        this.eventType = json.getString("eventType", "");
        this.revision = json.getInteger("revision", -1);
        this.hash = json.getString("hash", "");
        return this;
    }


    public JsonObject toJson(){
        return new JsonObject(Json.encode(this));
    }

    public String getContext() {
        return context;
    }

    public EventDTO setContext(String context) {
        this.context = context;
	return this;
    }
    
    public int getEventId() {
        return eventId;
    }

    public EventDTO setEventId(int event_id) {
        this.eventId = event_id;
        return this;
    }

    public String getEvent() {
        return event;
    }

    public EventDTO setEvent(String event) {
        this.event = event != null && !event.isBlank() ? event : "";
        return this;
    }

    public String getEntityId() {
        return entityId;
    }

    public EventDTO setEntityId(String entity_id) {
        this.entityId = entity_id;
        return this;
    }

    public String getEntity() {
        return entity;
    }

    public EventDTO setEntity(String entity) {
        this.entity = entity != null && !entity.isBlank() ? entity : "";
        return this;
    }

    public int getVersion() {
        return version;
    }

    public EventDTO setVersion(int version) {
        this.version = version;
        return this;
    }

    public JsonObject getData() {
        return data;
    }

    public EventDTO setData(JsonObject data) {
        this.data = data;
        return this;
    }

    public boolean isSent() {
        return sent;
    }

    public EventDTO setSent(boolean sent) {
        this.sent = sent;
        return this;
    }

    public String getReceived() {
        return received;
    }

    public EventDTO setReceived(String received) {
        this.received = received;
        return this;
    }

    public String getEventType() {
        return eventType;
    }

    public EventDTO setEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }

    public int getRevision() {
        return revision;
    }

    public EventDTO setRevision(int revision) {
        this.revision = revision;
        return this;
    }

    public String getHash() {
        return hash;
    }

    public EventDTO setHash(String hash) {
        this.hash = hash;
        return this;
    }
}
