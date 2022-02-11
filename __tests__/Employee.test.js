const Employee = require('./lib/Employee');
const employee = new Employee('Guy', '100', 'guy@gmail.com');

test('Get the constructor values for the Employee object', () => {
    expect(employee.name).toBe('Guy');
    expect(employee.id).toBe('100');
    expect(employee.email).toBe('guy@gmail.com');
});

test('Get name from the getName() method', () => {
    expect(employee.getName()).toBe('Guy');
});

test('Get id from the getId() method', () => {
    expect(employee.getId()).toBe('100');
});

test('Get email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('guy@gmail.com');
});

test('Get role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});