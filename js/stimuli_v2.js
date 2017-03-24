// for word stimuli

//var probes = [
//	'backgrounds', 'widespread', 'dropping'
//	];
	
//var primes = [
//	'amy', 'rose', 'krosch'
//	];


//var probes = [
//	'Ca01_1.jpg', 'Ho01_1.jpg', 'mb007_1.jpg'
//	];
	
var probes = new Array('britafilt_25.jpeg','coat74.50.jpeg','drone_69.95','showercaddy_29.00.jpeg',
'cofeemaker_89.99.jpg','bureau_191.jpeg','graphcalc_41.00.jpeg','sofa_389.00.jpg',
'kitchenaidemixer_199.00.jpg','lamp_31.49.jpg','camera_139.jpeg','printer32.99.jpeg',
'drill_58.99.jpeg','basketball_34.00.jpeg','aircondition_181.jpg',
'gps_89.jpeg','treadmill_393.jpeg','officechair_125.95.jpg','vacuum_49.99.jpg','tent_176.jpeg');
var probe_imgs = preload_images(probes, '../kr/images/targets/')
	

var primes = new Array('a1.jpg','a2.jpg','2e.jpg','1e.jpg','3e.jpg','a4.jpg','5e.jpg','6e.jpg','4e.jpg','7e.jpg','8e.jpg','a7.jpg','9e.jpg','a5.jpg','10e.jpg','a3.jpg','a6.jpg','8e.jpg',
'a9.jpg','a10.jpg');
var prime_imgs = preload_images(primes, '../kr/images/primes/')


codes = ['1a1.25','2a2.74.50','3e2.69.95','4e1.29.00','5e3.89.99','6a4.191','7e5.41.00','8e389.00','9e4.199.00','10e7.31.49','11e8.139',
'12a7.32.99','13e9.58.99','14a5.34.00','15e10.181','16a3.89','17e9.393','18a8.125.95','19e9.49.99','20e10.176'];

var buttons = new Array('yes.png', 'no.png', 'start.png', 'next.png');
var button_imgs = preload_images(buttons, '../images/')

// If using error_feedback, you need to define the possible codes, and 
// the correct response for each.
var list_of_codes = new Array('common_word', 'rare_word','pseudo_word', 'consonants');
var correct_responses = new Array(1, 1, 2, 2);
