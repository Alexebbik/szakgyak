package com.jusoft.smittek.agrizi.model;

import javax.persistence.*;

@Entity
@Table(name = "servicetypes")

public class Servicetype {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "type")
    private String type;

    public Servicetype() { }

    public Servicetype(long id, String type) {
        this.id = id;
        this.type = type;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
