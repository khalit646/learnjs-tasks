function topSalary(salaries){
    let max = -1;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)){
        if(max < salary){
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}