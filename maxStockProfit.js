function maxStockProfit(priceArr) {
    var maxProfit =-1;
     var buyPrice   =   0;
     var sellPrice  = 0;

     var changeBuyPrice =   true;

     for(var i=0; i<priceArr.length;i++)    {
         if(changeBuyPrice)buyPrice = priceArr[i];
         sellPrice  =   priceArr[i +1];

         if(sellPrice < buyPrice)   {
             changeBuyPrice =true;
         }
         else{
             var tempProfit = sellPrice - buyPrice;
             if(tempProfit > maxProfit)  maxProfit =tempProfit;
             changeBuyPrice =false;
         }
         }

         return console.log(maxProfit);
     }



maxStockProfit([23,57,36,25,37,45])