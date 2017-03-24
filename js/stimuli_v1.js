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
	

var primes = new Array('1e.jpg','2e.jpg','a2.jpg','a1.jpg','a3.jpg','4e.jpg','a5.jpg','a6.jpg','a4.jpg','a7.jpg','a8.jpg','7e.jpg','a9.jpg','5e.jpg','a10.jpg','3e.jpg','6e.jpg','a8.jpg',
'9e.jpg','10e.jpg');
var prime_imgs = preload_images(primes, '../kr/images/primes/')

var statics = new Array
('static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg','static.jpg');
var statics_images =preload_images(statics,'../kr/images/')

var blank = new Array
('blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg','blank.jpg');
var blank_images =preload_images(statics,'../kr/images/')

var values = new Array
('$25.00','$74.50','$69.95','$29.00','$89.99','$191.00','$41.00','$389.00','$199.00','$31.49','$139.00',
'$32.99','$58.99','$34.00','$181.00','$3.89','$393.00','$125.95','$49.99','$176');

codes = ['1e1.25','2e2.74.50','3a2.69.95','4a1.29.00','5a3.89.99','6e4.191','7a5.41.00','8a389.00','9a4.199.00','10a7.31.49','11a8.139',
'12e7.32.99','13a9.58.99','14e5.34.00','15a10.181','16e3.89','17e9.393','18a8.125.95','19e9.49.99','20e10.176'];

var buttons = new Array('yes.png', 'no.png', 'start.png', 'next.png');
var button_imgs = preload_images(buttons, '../images/')

// If using error_feedback, you need to define the possible codes, and 
// the correct response for each.
var list_of_codes = new Array('common_word', 'rare_word','pseudo_word', 'consonants');
var correct_responses = new Array(1, 1, 2, 2);


var blank = '../blank.jpg';
