function computer(speed, hdspace, ram){
	this.speed= speed;
	this.hdspace= hdspace;
	this.ram= ram;
}
	


	var work_computer = new computer('2ghz', '80gb', '1gb');
	var home_computer = new computer('1.5ghz', '40gb', '512mb');
	var laptop_computer = new computer('1ghz','20gb','256mb');

	function getPrice(){
	var	the_Price =  500;

		the_Price += (this.speed == '2ghz') ? 200 : 100;
		the_Price += (this.hdspace == '80gb') ? 50 : 25;
		the_Price += (this.ram == '1gb') ? 150 : 75;
			return the_Price;
    }	
	function computer(speed, hdspace, ram){
	this.speed= speed;
	this.hdspace= hdspace;
	this.ram= ram;
	this.Price= getPrice;

    }
        document.write(work_computer.Price());