package com.jusoft.smittek.agrizi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ServiceNotFound extends Exception {

    private static final long serialVersionUId = 1L;

    public ServiceNotFound(String message) {
        super(message);
    }

}
