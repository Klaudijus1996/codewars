

function calculateTip(amount, rating) {

    if (rating == 'Excellent') {
        return amount*20/100
    } else if (rating == 'Great') {
        return amount*15/100
    } else if (rating == 'Good') {
        return amount*10/100
    } else if (rating == 'Poor') {
        return amount*5/100
    } else if (rating == /'Terrible'/i) {
        return amount*0/100
    }

  }

  console.log(calculateTip(20, "Excellent"), 4);
  console.log(calculateTip(26.95, "good"), 3);


// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
  

// const ex = amount*20/100 
// jeigu tips >= 20% tai rating 