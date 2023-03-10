package com.starapp.incshift.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.starapp.incshift.entity.Employee;
import com.starapp.incshift.entity.Project;
import com.starapp.incshift.repository.dto.EmployeeLogin;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{
//	@Query("SELECT c.Projectid from Project c ")
//	List<String> findAllUsers();
//	
//List<Project> findProjectByprojectName(String projectName);
//
//@Query("SELECT c.Projectid from Project c where c.employee.Employeeid=?1 ")
//List<String> findAllProject(int Employeeid);
//
//@Query("select t.timesheetId from Timesheet t where t.project.Projectid in(SELECT c.Projectid from Project c where c.employee.Employeeid=?1) ")
//List<String> findAllTimesheet(int Employeeid);
	
    @Query("SELECT e from Employee e where e.Employeeid=?1 and e.Password=?2 ")
	Employee findByemployeeIdAndPAssword(int employeeId,String Password);

}



