

function shoppingTime(memberId, money) {
    // you can only write your code here!
    var brand = {
        stacattu: {
            price: 1500000,
            bought: 0
        },
        zoro: {
            price: 500000,
            bought: 0
        },
        hnn: {
            price: 250000,
            bought: 0
        },
        uniklooh: {
            price: 175000,
            bought: 0
        },
        casing: {
            price: 50000,
            bought: 0
        }
    }
    var member = {
        memberId: memberId,
        balance: money,
        listPurchased: [],
        changeMoney: money
    }
    if(!memberId){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    var listPurchased = [];
    while(member.changeMoney >= 0){
        if(member.changeMoney - brand.stacattu.price >= 0 && brand.stacattu.bought < 1){
            listPurchased.push('Sepatu Stacattu');
            member.changeMoney = member.changeMoney - brand.stacattu.price;
            brand.stacattu.bought++;
        }
        else if(member.changeMoney - brand.zoro.price >= 0 && brand.zoro.bought < 1){
            listPurchased.push('Baju Zoro');
            member.changeMoney = member.changeMoney - brand.zoro.price;
            brand.zoro.bought++;
        }
        else if(member.changeMoney - brand.hnn.price >= 0 && brand.hnn.bought < 1){
            listPurchased.push('Baju H&N');
            member.changeMoney = member.changeMoney - brand.hnn.price;
            brand.hnn.bought++;
        }
        else if(member.changeMoney - brand.uniklooh.price >= 0 && brand.uniklooh.bought < 1){
            listPurchased.push('Sweater Uniklooh');
            member.changeMoney = member.changeMoney - brand.uniklooh.price;
            brand.uniklooh.bought++;
        }
        else if(member.changeMoney - brand.casing.price >= 0 && brand.casing.bought < 1){
            listPurchased.push('Casing Handphone');
            member.changeMoney = member.changeMoney - brand.casing.price;
            brand.casing.bought++;
        }
        else{
            break;
        }
    }
    if(listPurchased.length === 0){
        return 'Mohon maaf, uang tidak cukup'
    }
    member.listPurchased = listPurchased;
    return member;
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja