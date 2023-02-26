package com.starapp.incshift.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.starapp.incshift.entity.ProjectEmployeeMapping;
import com.starapp.incshift.entity.Timesheet;

public interface ProjectEmployeeMappingRepository extends JpaRepository<ProjectEmployeeMapping,String>{
	@Query("select t from ProjectEmployeeMapping t where t.project.Projectid in(SELECT c.Projectid from Project c where c.employee.Employeeid=?1) ")
	List<ProjectEmployeeMapping> findByemployeeId(int Employeeid);
	
	
	
}
