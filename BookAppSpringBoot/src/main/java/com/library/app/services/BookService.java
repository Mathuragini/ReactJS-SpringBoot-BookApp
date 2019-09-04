package com.library.app.services;

import java.util.List;

import com.library.app.entity.Book;




public interface BookService {
	void saveBook(Book book);// save book
	List<Book> getAllBook();		//	Get All Book
	Book findBookById(Long id); // find book by id - bookID
	Book deleteBookById(Long id);	//	Delete Book
	void updateBook(Book book);		//	Update Book
	
}
