class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    changeName(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log(`Department ${this.id}:  ${this.name}`);
    }
    
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, public reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['Karina']);
it.describe();
it.addEmployee("Karl");
it.addEmployee("Max");
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.printReports();

