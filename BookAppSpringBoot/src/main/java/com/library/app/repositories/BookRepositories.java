package com.library.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.app.entity.Book;



public interface BookRepositories extends JpaRepository<Book, Long> {
	Book findBookBybookId(Long id);
}
