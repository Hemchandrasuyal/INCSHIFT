package com.starapp.showlist_employees_to_manager.dto;

public class ManagerRequest {
public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
int employeeId;
String projectId;
public ManagerRequest(int employeeId, String projectId) {
	super();
	this.employeeId = employeeId;
	this.projectId = projectId;
}

}
