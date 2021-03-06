package com.stevensportal.coursesreview.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stevensportal.coursesreview.entity.Major;

/**
 * @author staneja14
 *
 */
@Repository
public interface MajorRepository extends CrudRepository<Major, Integer> {
	
	
}
