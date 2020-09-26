function socialicons_imHeader_pluginAppObj_03() {
    
    var containerWidth;
    var btnWidth;
    var btnHeight;
    var btnMargin;
    var numBtn; 
    
    x5engine.boot.push(function(){
        
        btnWidth = 35;
        btnHeight = 35;
        btnMargin = 0;
        numBtn = $("#imHeader_pluginAppObj_03 .social-icon").length;
        
        $('#imContent').on('breakpointChangedOrFluid', function (e, breakpoint) {
            resizeSocials_imHeader_pluginAppObj_03();
        });
        resizeSocials_imHeader_pluginAppObj_03();
    });

       function resizeSocials_imHeader_pluginAppObj_03() {
           
           /*reset margins*/
           $("#imHeader_pluginAppObj_03 .social-icon").removeClass("last-item-row");
           $("#imHeader_pluginAppObj_03 .social-icon").removeClass("last-row");
           $("#imHeader_pluginAppObj_03 .social-icon").removeClass("one-row");
                 
           containerWidth = $('#imHeader_pluginAppObj_03').width();
           
           var buttonPerRow = 1;
           if("horizontal" === "horizontal")
                buttonPerRow = getButtonPerRow();
               
           if(buttonPerRow == 1){
               $("#imHeader_pluginAppObj_03 .social-icon:last-child").addClass("last-row");
           }
           else if(numBtn == buttonPerRow){
               $("#imHeader_pluginAppObj_03 .social-icon").addClass("last-row");
               $("#imHeader_pluginAppObj_03 .social-icon:last-child").addClass("last-item-row");  
            }
           else{
               $("#imHeader_pluginAppObj_03 .social-icon:nth-child(" + buttonPerRow + "n)").addClass("last-item-row");
               $("#imHeader_pluginAppObj_03 .social-icon:nth-child(n+" + parseInt(buttonPerRow+1) + ")").addClass("last-row");
           }
             
           var fact = containerWidth < btnWidth ? containerWidth / btnWidth : 1;
           $('#imHeader_pluginAppObj_03 .social-icon, #imHeader_pluginAppObj_03 .sides-container').css({
               width: btnWidth * fact,
               height: btnHeight * fact
           });
       }

        function getButtonPerRow() {
            var remaining = containerWidth - btnWidth;
            var count = 1;
            while (remaining >= btnWidth + (count == numBtn-1 ? 0 : btnMargin)) {
                count++;
                if(count == numBtn)
                    break;
                
                remaining -= btnWidth + btnMargin;
            }           
            return count;
        }
}