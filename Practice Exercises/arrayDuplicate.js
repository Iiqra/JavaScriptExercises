function duplicateNumber(){
    let my_array=[-1,4,0,2,7,-3,1,7,4]
    for(let i=0;i<my_array.length;i++)
    {
        for(let j=i+1;j<my_array.length;j++)
        {
            if((my_array[i] == my_array[j]) && (i!=j))
            {
                console.log("Duplicate Element: "+my_array[j]);
            }
        }
    }
}
duplicateNumber()

function duplicateString()
{
    const arry = ["bcd", "abd", "jude", "bcd", "oiu", "gzw", "oiu"]

const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(arry);
console.log("Duplicate Strings: "+duplicateElements);
}
duplicateString()

//common elements between two arrays(integers)
function findCommonELEMENTS()
{
    let array1 = ["Python", "JAVA", "PHP", "C#", "C++", "SQL"]

    let array2 = ["MySQL", "SQL", "SQLite", "Oracle", "PostgreSQL", "DB2", "JAVA"]
    
    console.log("Array1 : "+array1.toString(array1));
    console.log("Array2 : "+array2.toString(array2));
    
    const intersection = [...new Set(array1.filter(element => array2.includes(element)))];
    console.log("Common elements are: "+intersection)
 }
 findCommonELEMENTS()
