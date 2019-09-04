package com.library.app.entity;

import javax.persistence.Table;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
@Table(schema = "library_spring", name = "book")
public class Book implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long bookId;
	String bookName;
	String bookISBN;
	
	public String getBookISBN() {
		return bookISBN;
	}
	public void setBookISBN(String bookISBN) {
		this.bookISBN = bookISBN;
	}
	
	public Long getBookId() {
		return bookId;
	}
	public void setBookId(Long bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	
	

	
	
}
