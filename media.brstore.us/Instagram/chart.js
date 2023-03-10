function osFunction() {
    var x = document.getElementById("os").value;
    document.getElementById("osname").innerHTML = x;
   }
   
   
   $(document).ready(function() {
    $("#slider1").slider({
    range: "min",
    animate: true,
    value:50,
    min: 50,
    max: 10000,
    step: 1,
    slide: function(event, ui) {
    update(1,ui.value); //changed
    }
    });
    
    $("#slider2").slider({
    range: "min",
    animate: true,
    value:5,
    min: 5,
    max: 1000,
    step: 1,
    slide: function(event, ui) {
    update(2,ui.value); //changed
    }
    });
    
    $("#slider3").slider({
    range: "min",
    animate: true,
    value:50,
    min: 50,
    max: 10000,
    step: 1,
    slide: function(event, ui) {
    update(3,ui.value); //changed
    }
    });
    
    $("#slider4").slider({
    range: "min",
    animate: true,
    value:500,
    min: 500,
    max: 10000000,
    step: 1,
    slide: function(event, ui) {
    update(4,ui.value); //changed
    }
    });
    
    //Added, set initial value.
    $("#cpuamt").val(50);
    
    $("#ramamt").val(5);
    
    $("#ssdamt").val(20);
    
    $("#ipsamt").val(500);
    
    update();
   });
   
   function update(slider,val) {
    var formatNumber = {
    separador: ",",
    sepDecimal: '.',
    formatear:function (num){
    num +='';
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
    }
    return this.simbol + splitLeft + splitRight;
    },
    new:function(num, simbol){
    this.simbol = simbol ||'';
    return this.formatear(num);
    }
    }
    
    //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
    var $cpuamt = slider == 1?val:$("#cpuamt").val();
    var $ramamt = slider == 2?val:$("#ramamt").val();
    var $ssdamt = slider == 3?val:$("#ssdamt").val();
    var $ipsamt = slider == 4?val:$("#ipsamt").val();
    
    $cpu = ($cpuamt * 0.01);
    $ram = ($ramamt * 0.5);
    $ssd = ($ssdamt * 0.02);
    $ips = ($ipsamt * 0.0020);
    
    $total = $cpu + $ram + $ssd + $ips
    
    $( "#cpuamt" ).val($cpuamt);
    $( "#cpuamt-label" ).text($cpuamt);
    $( "#total-cpuamt" ).html('<label><span class="currency-value">$</span> '+$cpu+ '</label>');
    
    $( "#ramamt" ).val($ramamt);
    $( "#ramamt-label" ).html($ramamt);
    $( "#total-ramamt" ).html('<label><span class="currency-value">$</span> '+$ram+ '</label>');
    
    $( "#ssdamt" ).val($ssdamt);
    $( "#ssdamt-label" ).html($ssdamt);
    $( "#total-ssdamt" ).html('<label><span class="currency-value">$</span> '+$ssd+ '</label>');
    
    $( "#ipsamt" ).val($ipsamt);
    $( "#ipsamt-label" ).text($ipsamt);
    $( "#total-ipsamt" ).html('<label><span class="currency-value">$</span> '+$ips+ '</label>');
    
    $( "#total" ).val($total);
    $( "#total-label" ).html('<label><span class="currency-value">??</span> '+$total+ '<span class="month-range">/Month</span></label>');
    
    $('#cpu-value').html($cpuamt+ ' Likes');
    $('#ram-value').html($ramamt+ ' Comments');
    $('#ssd-value').html($ssdamt+ ' Followers');
    $('#ips-value').html($ipsamt+ ' Views');
   }