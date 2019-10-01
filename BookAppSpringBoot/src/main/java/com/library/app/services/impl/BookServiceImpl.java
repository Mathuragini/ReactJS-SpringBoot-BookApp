package com.library.app.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.app.entity.Book;
import com.library.app.repositories.BookRepositories;
import com.library.app.services.BookService;



@Service
public class BookServiceImpl implements BookService {
	@Autowired
	BookRepositories bookRespository;
	
	public void saveBook(Book book) {
		bookRespository.save(book);
	}
	
	@Override
	public List<Book> getAllBook(){
		return bookRespository.findAll();
	}
	
	
	@Override
	public Book findBookById(Long id) {
		// TODO Auto-generated method stub
		return bookRespository.findBookBybookId(id);
	}
	
	public Book deleteBookById(Long id) {
		bookRespository.deleteById(id);
		 return null;
	}

	@Override
	public void updateBook(Long id,Book book) {
		if(bookRespository.getOne(id)!=null) {
			book.setBookId(id);
			bookRespository.save(book);	
		}
			
	}


}
