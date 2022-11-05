package com.jusoft.smittek.agrizi.users.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UserNotFound extends Exception {

    private static final long serialVersionUId = 1L;

    public UserNotFound(String message) {
        super(message);
    }

}
