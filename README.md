A simple Employee Register Maintenance System.

The system is to help Human Resource Managers to keep record of their employees information.
It's a register against which Human Resource managers can check the current number of employees, the role of each employee and where possible measure their perfomance.


Stories:
1. The user should be able to register on the system with their company details like, company name, industry,company address, and company email address.

2. The users should be able to login using their email address and a choosen password.

3. When a user log's in they should be taken to the main register that records all present employee.

4. The main register page should have a logout button and Add new Employee button at the top.

5. When a user clicks the logout button they will be taken to the login page.

6. When a user  clicks the Add New Employee button they should be presented with a form with the fields for adding basic employee information like their name, their contacts, address, job title and roles.

7. Clicking submit button on the new employee form, the employee should appear on the register.

8. Also a user should be able to select a single or several employee and execute an action like exit from register, update details, or print employee profile.

Objects
1. 
function Employee(name, social_sec_num, email, address, title, roles) {
    this.name = name;
    this.social_sec_num = social_sec_num;
    this.email = email;
    this.address = address;
    this.title = title;
    this.roles = roles
}

2. function User(name, social_sec_num, email, address, title, roles, password, rights) {
    Employee.call(name, social_sec_num, email, address, title, roles);
    this.password = password;
    this.rights = rights;
}

4. function Register() {
    employees = [],
    this.add = function() {};
    this.delete = function() {};
    this.update = function() {};
}

Any normal Employee will be an instance of the Employee object.

System users Will be an object that inherits from the Employee Object.