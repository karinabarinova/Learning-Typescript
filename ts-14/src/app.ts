abstract class Department {
    protected employees: string[] = [];
    static fiscalYear = 2021;

    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
        return {name};
    }

    static changeFiscalYear(year: number) {
        if (year) {
            this.fiscalYear = year;
            return this.fiscalYear;
        }
        throw new Error('Please provide a valid value');
    }

    changeName(n: string) {
        this.name = n;
    }

    abstract describe(this: Department): void;
    
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

    describe() {
        console.log('IT Department - ID: ', this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    constructor(id: string, public reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Karina') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Inna');
console.log(employee1)
console.log(Department.fiscalYear);

const it = new ITDepartment('d1', ['Karina']);
it.describe();
it.addEmployee("Karl");
it.addEmployee("Max");
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
// accounting.printReports();
accounting.addEmployee('Karina');
accounting.addEmployee('Menu');
// accounting.printEmployeeInformation();
accounting.mostRecentReport = 'Year End Report';
console.log(accounting.mostRecentReport);
Department.changeFiscalYear(2022);
console.log(Department.fiscalYear);
accounting.describe();
