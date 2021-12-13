//Function returns idx:th element from a comma separated list of elements
//Leading and trailing white spaces are removed  
function GetValue(elems,idx)
{
    elem_list = elems.split(",");
    elem = elem_list[idx];	  		
    return elem.replace(/^\s+|\s+$/g, '');
}	  
	  	  
	  	  	   
function bin2hex(bin_value)
{
    while((bin_value.length%8) != 0)
        bin_value += "0";
        
    bin_length = bin_value.length;
    
    if ((bin_length % 8) > 0)
    {
	    for (i=0; i<(8-(bin_length%8));i++)
	        bin_value += "0";
    }
    
    hex_value="";
    hex_length = 0;
    
    for (i=0; i<bin_length; i+=4)
    {
	    quartet = bin_value.substring(i,4+i)
    	
	    if (quartet=="0000")
		    hex_value += "0";
		else if (quartet=="0001")
		    hex_value += "1";
	    else if (quartet=="0010")
		    hex_value += "2";
	    else if (quartet=="0011")
		    hex_value += "3";
	    else if (quartet=="0100")
		    hex_value += "4";
	    else if (quartet=="0101")
		    hex_value += "5";
	    else if (quartet=="0110")
		    hex_value += "6";
	    else if (quartet=="0111")
		    hex_value += "7";
	    else if (quartet=="1000")
		    hex_value += "8";
	    else if (quartet=="1001")
		    hex_value += "9";
	    else if (quartet=="1010")
		    hex_value += "A";
	    else if (quartet=="1011")
		    hex_value += "B";
	    else if (quartet=="1100")
		    hex_value += "C";
	    else if (quartet=="1101")
		    hex_value += "D";
	    else if (quartet=="1110")
		    hex_value += "E";
	    else if (quartet=="1111")
		    hex_value += "F";
	                        
	    hex_length += 1;
	    
	    if ((hex_length %2) == 0)
		    hex_value += " ";
    }

    //alert(bin_length + ":" + bin_length/8 + ":" + bin_length%8);
    
    //if ((bin_length%8) > 0)	
	  //  hex_value += "0";

    //if ((hex_value.length%3) > 0)	
	  //  hex_value += "0";

    return hex_value;
}

function hex2bin(hex_value)
{
	hex_length = hex_value.length;
	bin_value ='';
		
	for (i=0; i<hex_length; i+=1)
	{
		digit = hex_value.substring(i,1+i)
		
		if (digit == '0')
			bin_value += "0000";
		else if (digit == '1')
			bin_value += "0001";
		else if (digit == '2')
			bin_value += "0010";
		else if (digit == '3')        
			bin_value += "0011";
		else if (digit == '4')        
			bin_value += "0100";
		else if (digit == '5')        
			bin_value += "0101";
		else if (digit == '6')        
			bin_value += "0110";
		else if (digit == '7')        
			bin_value += "0111";
		else if (digit == '8')        
			bin_value += "1000";
		else if (digit == '9')        
			bin_value += "1001";
		else if (digit == 'a')        
			bin_value += "1010";
		else if (digit == 'b')        
			bin_value += "1011";
		else if (digit == 'c')        
			bin_value += "1100";
		else if (digit == 'd')        
			bin_value += "1101";
		else if (digit == 'e')        
			bin_value += "1110";
		else if (digit == 'f')        
			bin_value += "1111";
		else if (digit == 'A')        
			bin_value += "1010";
		else if (digit == 'B')        
			bin_value += "1011";
		else if (digit == 'C')        
			bin_value += "1100";
		else if (digit == 'D')        
			bin_value += "1101";
		else if (digit == 'E')        
			bin_value += "1110";
		else if (digit == 'F')        
			bin_value += "1111";
	}	                       
	
	return bin_value;
}

function digit2bin(digit_value)
{
	digit_length = digit_value.length;
	bin_value ='';
		
	for (i=0; i<digit_length; i+=1)
	{
		digit = digit_value.substring(i,1+i)
		
		if (digit == '0')
			bin_value += "0000";
		else if (digit == '1')
			bin_value += "0001";
		else if (digit == '2')
			bin_value += "0010";
		else if (digit == '3')        
			bin_value += "0011";
		else if (digit == '4')        
			bin_value += "0100";
		else if (digit == '5')        
			bin_value += "0101";
		else if (digit == '6')        
			bin_value += "0110";
		else if (digit == '7')        
			bin_value += "0111";
		else if (digit == '8')        
			bin_value += "1000";
		else if (digit == '9')        
			bin_value += "1001";
		else if (digit == '*')        
			bin_value += "1010";
		else if (digit == '#')        
			bin_value += "1011";
		else if (digit == '+')        
			bin_value += "1100";
	}	                       
	
	return bin_value;
}

function dec2bin(dec_value,bit_length)
{
    bin_value = "";
    remainder = 1;
    while (dec_value != 0)
    {
        reminder = dec_value % 2;
        bin_value = reminder + bin_value;
        dec_value = Math.floor(dec_value/2);
    }
    if (bin_value.length < bit_length)
    {
        while (bin_value.length<bit_length)
        {
	        bin_value = "0" + bin_value;
        }
    }
    else if (bin_value.length > bit_length)
    {
        bin_value = "dec2bin conversion failed, resolution too short!";
    }
	
	return bin_value;
}

function text2hex(text_value)
{
    var text_char = 0;
    var hex_char = "";
		
    hex_value = "";

	text_length = text_value.length;    
	for (i=0; i<text_length; i+=1)
	{
		text_char = text_ascii_value(text_value,i);
		hex_char = text_char;
		
		hex_value += hex_char;
    }
    return hex_value;
}

function text2bin(text_value)
{
    //return text_value;
    //return text2hex(text_value);
    return hex2bin(text2hex(text_value));
}

function ipv42bin(text_ip)
{
    var ip_bin = "";
    ip_list = text_ip.split(".");
	for (idx=0; idx<4; idx+=1)
	    ip_bin += dec2bin(ip_list[idx],8);
	return ip_bin;
}

function ipv62bin(text_ip)
{
    var ip_bin = "";
    ip_list = text_ip.split(":");
	for (idx=0; idx<6; idx+=1)
	    ip_bin += hex2bin(ip_list[idx],16);
	return ip_bin;
}

function OnEnableDisable_Ctrl(ctrl_stat,ctrl_val)
{
    if (ctrl_stat.value != "0")
    {
        ctrl_val.disabled = false;
    }
    else
    {
        ctrl_val.disabled = true;
    }
    
}    

function OnShowHide_Ctrl(ctrl_stat,ctrl_id)
{
    if (document.getElementById(ctrl_stat).value != "0")
    {
        document.getElementById(ctrl_id).style.display = "";
    }
    else
    {
        document.getElementById(ctrl_id).style.display = "none";
    }
    
}    

function text_ascii_value(c,idx)
{
	// restrict input to a single character
	c = c.charAt(idx);

	// loop through all possible ASCII values
	var i;
	for (i = 0; i < 256; ++ i)
	{
		// convert i into a 2-digit hex string
		var h = i.toString(16);
		if (h.length == 1)
			h = "0" + h;

		// insert a % character into the string
		h = "%" + h;

		// determine the character represented by the escape code
		h = unescape (h);

		// if the characters match, we've found the ASCII value
		if (h == c)
			break;
	}
	
	return i.toString(16);
}

function WriteToFile(filename, text) 
{
    try 
    {
        var fso, s;
        fso = new ActiveXObject("Scripting.FileSystemObject");
        s = fso.OpenTextFile(filename , 8, 1, -2);
        s.writeline(text);
        s.Close();
    }
    catch(err)
    {
        var strErr = 'Error:';
        strErr += '\nNumber:' + err.number;
        strErr += '\nDescription:' + err.description;
        alert(strErr);
    }
}


function Autosize_IFrame(ctrl)
{
    ctrl.height = ctrl.contentWindow.document.getElementById("Form1").offsetHeight + 20;                
}

function Update_Height() 
{
    window.parent.document.getElementById('LIP_Proto_IFrame').height = document.getElementById("Form1").offsetHeight + 20; 
}

function createComplement(bin_value) 
{
    var complement = "";
    for(var i = 0; i < bin_value.length; i++) 
    {
        digit = bin_value.charAt(i);
        if (digit == "0")
           complement += "1";
        else if(digit == "1")
           complement += "0";
    }
    return complement;
}

function Longitude2Bin(longitude)
{
    //convert to float
    dec_value = parseFloat(longitude, 10) //Value in dec
    //Convert to LIP
    lip_value = dec_value / 0.0000107288360595703125
    lip_value = parseInt(lip_value, 10)
    
    var negative = lip_value < 0
    if (negative) 
    {
       //prepare for two's complement 
        lip_value += 1
        lip_value *= -1
    }
    
    hex_value = lip_value.toString(16)
    bin_value = hex2bin(hex_value)

    while (bin_value.length < 25)
        bin_value = "0" + bin_value;
        
    if (negative) 
        bin_value = createComplement(bin_value)

    return bin_value
}

function Latitude2Bin(latitude)
{
    //convert to float
    dec_value = parseFloat(latitude, 10) //Value in dec
    //Convert to LIP
    lip_value = dec_value / 0.0000107288360595703125
    lip_value = parseInt(lip_value, 10)
    
    var negative = lip_value < 0
    if (negative) 
    {
       //prepare for two's complement 
        lip_value += 1
        lip_value *= -1
    }
    
    hex_value = lip_value.toString(16)
    bin_value = hex2bin(hex_value)
    //Convert to bin	  	
    while (bin_value.length < 24)
        bin_value = "0" + bin_value;

    if (negative) 
        bin_value = createComplement(bin_value)

    return bin_value
}


function T5_Encode(T5_id, T5_data)
{
    var T5_value = "";   
    var T5_data_length = 0;
    var T5_data_octets = 0;
    var T5_data_bits_left = 0;
    
    T5_value += dec2bin(T5_id,5);
    
    T5_data_length = T5_data.length;
    if (T5_data_length < 64)
    {
        T5_value += dec2bin(parseInt(T5_data_length, 10),6);
    }
    else
    {
        T5_value += "000000";
        T5_data_octets = Math.floor(T5_data_length / 8);
        T5_data_bits_left = (T5_data_length % 8);
        if (T5_data_bits_left != 0)
        {
            T5_data_octets += 1;
            T5_data += dec2bin("15",8 - T5_data_bits_left);
        }
        T5_data_octets -= 7;
        T5_value += dec2bin(parseInt(T5_data_octets, 10),7);
    }
    
    T5_value += T5_data;
    
    return T5_value;
}
