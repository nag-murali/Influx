
var nagendra;
let groupOnce = false;

class Trip_group {
  
    constructor( ){
        this
    }

    add_member(member){
        this[`${member}`] = { expenses : [],
                               total : 0 };
      
    }

    add_expenses(member, expense_Byone){
        this[`${member}`].expenses.push(expense_Byone)
        this[`${member}`].total += expense_Byone;
    }
}

function TripGroup(){
     if(groupOnce){
         console.log("group already created");
         return;
     }
    nagendra = new Trip_group( );
    groupOnce = true;
    console.log(nagendra);
};

function AddMember(member) {
      //console.log(Object.keys(nagendra));
      let members = Object.keys(nagendra);
      if(members.includes(member)){
          console.log("Member already present");
      }else{
        nagendra.add_member(member);
        
      }
    console.log(nagendra)
}

function AddExpenses(member, expense){
     
    nagendra.add_expenses(member , expense);
    console.log(nagendra)
}

function split( ){
    let members = Object.keys(nagendra);
    let mean_expense = 0;
    let more_expense_person = "";
  var Members_expenses =  members.map( (each) => { 
       mean_expense +=  nagendra[each].total;
       return nagendra[each].total;
    })
 
    mean_expense = mean_expense / members.length;
   for(let i = 0; i < Members_expenses.length; i++){
    Members_expenses[i] -= mean_expense;
    if(Members_expenses[i] > 0){
        more_expense_person = members[i];
    } 
    
   };

   for(let i = 0; i < Members_expenses.length; i++ ){
    if(Members_expenses[i] < 0){
        console.log(members[i] + " owes " +more_expense_person +" "+ (-Members_expenses[i]));

    }else if(Members_expenses[i] == 0){
        console.log(members[i] + " owes " + (Members_expenses[i]));
    }
   }
  

}


function main( ) {
   members = ["Rahul", "Vignesh", "Rohit"]
    TripGroup();
   
    for(let  i = 0; i < members.length; i++){
        AddMember(members[i]);
    }
    AddExpenses("Rahul", 10 );
    AddExpenses("Vignesh", 20 );
    AddExpenses("Rohit", 30 )
    split();
};

main();
