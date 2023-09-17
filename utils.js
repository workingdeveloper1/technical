/**
 * Fungsi untuk mengecualikan daftar employees yang sudah ada dalam array selected_employees
 */
export function getUnselectedEmployee(employees, selected_employees){
    for (let i = 0; i < selected_employees.length; i++) {
        for (let j = 0; j < employees.length; j++) {
            if (selected_employees[i]["name"] == employees[j]["name"]) {
                employees.splice(j,1)
            }
        }
        
    }
    
    return employees
}

/**
 * Fungsi untuk menyalin field amount dari daftar benefit ke item benefit lainnya berdasarkan kriteria tertentu
 * Fungsi ini juga menghandle kondisi ketika array kriteria mempunyai lebih dari satu element, contohnya => const kriteria = [{'Gaji Pokok':['Tunjangan Hari Raya (THR)','Tunjangan shift']}, {'Tunjangan shift':['Uang makan']}];
 * Fungsi ini juga menghandle kondisi ketika object pada array kriteria mempunyai lebih dari satu field/properties, contohnya: const kriteria = [{'Gaji Pokok':['Tunjangan Hari Raya (THR)','Tunjangan shift'], 'Tunjangan shift' : ['Gaji Pokok']}];
 */
export function copyAmountField(benefit, kriteria){
    for (let i = 0; i < kriteria.length; i++) {
        let objKeys = Object.keys(kriteria[i])
        objKeys.forEach(key => {
            let keyAmount = 0;
            for (let j = 0; j < benefit.length; j++) {
                if (key == benefit[j]["name"]) {
                    keyAmount = benefit[j]["amount"]
                    break
                }
            }

            kriteria[i][key].forEach(value => {
                for (let j = 0; j < benefit.length; j++) {
                    if (value == benefit[j]["name"]) {
                        benefit[j]["amount"] = keyAmount
                    }
                }
            })
        });  
    }
}