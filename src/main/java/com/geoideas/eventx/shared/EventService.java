package com.geoideas.eventx.shared;

import io.vertx.core.AsyncResult;
import io.vertx.core.Handler;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.core.Vertx;


public interface EventService {

    public static final int PUBLISH_ERROR = 001;
    public static final String PUBLISH_ERROR_MESSAGE = "Failed to publish event";

    public static EventServiceVertxEBProxy create(Vertx vertx, String address){
        return new EventServiceVertxEBProxy(vertx,address);
    }

    void publish(JsonObject event, Handler<AsyncResult<JsonObject>> complete);
    void publishOCC(JsonObject newEvent, JsonObject oldEvent, Handler<AsyncResult<JsonObject>> complete);
    void poll(int eventId, Handler<AsyncResult<JsonArray>> complete);
    void pollEvent(int eventId, String event, Handler<AsyncResult<JsonArray>> complete);
    void pollEntity(int eventId, String entity, Handler<AsyncResult<JsonArray>> complete);
    void pollEntityEvent(int eventId, String entity, String event, Handler<AsyncResult<JsonArray>> complete);
    void pollEntityById(int entityId, String entity, Handler<AsyncResult<JsonArray>> complete);
    void findLastEvent(int entityId, String entity, Handler<AsyncResult<JsonArray>> complete);
    void find(String hash, Handler<AsyncResult<JsonArray>> complete);
}
