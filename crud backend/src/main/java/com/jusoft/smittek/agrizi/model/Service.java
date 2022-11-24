package com.jusoft.smittek.agrizi.model;

import javax.persistence.*;

@Entity
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "userid")
    private long userid;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "telephone")
    private String telephone;
    @Column(name = "type")
    private int type;
    @Column(name = "status")
    private boolean status;
    @Column(name = "price")
    private int price;
    @Column(name = "time")
    private String time;

    public Service() {
        super();
    }

    public Service(long id, long userid, String name, String email, String telephone, int type, boolean status, int price, String time) {
        this.id = id;
        this.userid = userid;
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.type = type;
        this.status = status;
        this.price = price;
        this.time = time;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserid() {
    return userid;
  }

    public void setUserid(long userid) {
    this.userid = userid;
  }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public boolean isStatus() {
    return status;
  }

    public void setStatus(boolean status) {
      this.status = status;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
