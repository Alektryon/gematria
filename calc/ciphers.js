// ciphers.js

/*
new cipher(
	"English Ordinal", // cipher name
	"English", // category
	120, 57, 36, // hue, saturation, lightness
	[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122], // lowercase characters
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], // values
	true, // characters with diacritic marks have the same value as regular ones, default is "true"
	true, // enabled state, default is "false"
	false, // case sensitive cipher, default is "false"
	false, // multi character/syllable cipher, default is "false"
	false, // wheel cipher, default is "false"
	"Simple cipher based on alphabetical order." // brief description
)
*/

cipherList = [
	new cipher(
		"English Standard",
		"Modern",
		50, 78, 63,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800],
		true,
		true,
		false
	),
	new cipher(
		"Reverse Standard",
		"Modern",
		48, 49, 72,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800],
		true,
		false,
		false
	),
	new cipher(
		"English Ordinal",
		"Modern",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		true,
		false
	),
	new cipher(
		"Reverse Ordinal",
		"Modern",
		146, 74, 50,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"English Reduction",
		"Modern",
		216, 95, 73,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8],
		true,
		true,
		false
	),
	new cipher(
		"Reverse Reduction",
		"Modern",
		180, 60, 69,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Standard",
		"Elizabethan",
		48, 49, 72,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,20,30,40,50,60,70,80,90,100,200,200,300,400,500,600],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan R Standard",
		"Elizabethan",
		50, 78, 63,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[1,2,3,4,5,5,6,7,8,9,10,20,30,40,50,60,70,70,80,90,100,200,300,400,500,600],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Simple",
		"Elizabethan",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Reverse",
		"Elizabethan",
		146, 74, 50,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Reduction",
		"Elizabethan",
		180, 60, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,6],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan R Reduction",
		"Elizabethan",
		207, 77, 64,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[1,2,3,4,5,5,6,7,8,9,1,2,3,4,5,6,7,7,8,9,1,2,3,4,5,6],
		true,
		false,
		false
	),
	new cipher(
		"Kaye Cipher",
		"Elizabethan",
		0, 65, 66,
		[107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,38,128624,97,98,99,100,101,102,103,104,105,106],
		[10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,35,],
		true,
		false,
		false
	),
	new cipher(
		"Modern Kaye",
		"Elizabethan",
		352, 61, 78,
		[106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,97,98,99,100,101,102,103,104,105],
		[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		false,
		false
	),
	new cipher(
		"Agrippa Key",
		"Latin",
		256, 95, 76,
		[97,98,99,100,101,102,103,104,105,107,108,109,110,111,112,113,114,115,116,117,120,121,122,106,118,10680,119],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Beatus of Liebana",
		"Latin",
		216, 95, 73,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,20,30,40,50,60,70,80,90,100,200,200,200,300,400,500],
		true,
		false,
		false
	),
	new cipher(
		"Cabala Simplex",
		"Latin",
		180, 60, 65,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,3,10,11,12,13,14,15,16,17,18,19,19,19,20,21,22],
		true,
		false,
		false
	),
	new cipher(
		"Roman Numerals",
		"Latin",
		150, 50, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,0,100,500,0,0,0,0,1,1,0,50,1000,0,0,0,0,0,0,0,5,5,0,10,0,0],
		true,
		false,
		false
	),
	new cipher(
		"English Qaballa",
		"Thelemic",
		13, 68, 64,
		[97,108,119,104,115,100,111,122,107,118,103,114,99,110,121,106,117,102,113,98,109,120,105,116,101,112],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Cipher X",
		"Thelemic",
		36, 94, 64,
		[107,102,119,114,109,100,121,116,97,118,113,104,99,120,111,106,101,108,103,98,115,110,105,122,117,112],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Trigrammaton Qabalah",
		"Thelemic",
		195, 68, 69,
		[105,108,99,104,112,97,120,106,119,116,111,103,102,101,114,115,113,107,121,122,98,109,118,100,110,117],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		true,
		false,
		false
	),
	new cipher(
		"Elevenfold Qabalah",
		"Thelemic",
		110, 66, 66,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,11,1,2,3,4,5,6,7,8,9,10,11,1,2,3,4],
		true,
		false,
		false
	),
	new cipher(
		"Toavotea Key",
		"Thelemic",
		30, 50, 70,
		[97,105,113,121,102,110,118,100,108,116,98,106,114,122,103,111,119,101,109,117,99,107,115,104,112,120],
		[1,4,6,8,10,12,14,16,18,20,22,24,26,0,2,3,5,7,11,13,17,19,23,29,31,28],
		true,
		false,
		false
	),
	new cipher(
		"Mars Kamea Gematria",
		"Thelemic",
		0, 70, 60,
		[97,115,119,98,107,111,121,100,104,108,117,102,106,110,114,118,103,112,116,120,99,109,113,122,101,105],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		true,
		false,
		false
	),
	new cipher(
		"English Qabalah 31",
		"Thelemic",
		52, 66, 70,
		[97,102,107,112,117,122,101,106,111,116,121,100,105,110,115,120,99,104,109,114,119,98,103,108,113,118],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Alphanumeric Qabbala",
		"Alphanumeric",
		60, 33, 62,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		true,
		false
	),
	new cipher(
		"Alphanumeric Primes",
		"Alphanumeric",
		34, 53, 73,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149],
		true,
		false,
		false
	),
	new cipher(
		"Alphanumeric Trigonal",
		"Alphanumeric",
		101, 22, 64,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,378,406,435,465,496,528,561,595,630],
		true,
		false,
		false
	),
	new cipher(
		"Alphanumeric Squares",
		"Alphanumeric",
		175, 19, 61,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841,900,961,1024,1089,1156,1225],
		true,
		false,
		false
	),
	new cipher(
		"Alphanumeric Case Sensitive",
		"Alphanumeric",
		32, 68, 62,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		false,
		true
	),
	new cipher(
		"Alphanumeric Halves",
		"Alphanumeric",
		59, 21, 57,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0],
		true,
		false,
		false
	),
	new cipher(
		"Synx",
		"Alphanumeric",
		180, 44, 66,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,9,10,12,14,15,18,20,21,28,30,35,36,42,45,60,63,70,84,90,105,126,140,180,210,252,315,420,630,1260],
		true,
		false,
		false
	),
	new cipher(
		"Trigonal",
		"Polygonal",
		46, 57, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351],
		true,
		false,
		false
	),
	new cipher(
		"Squares",
		"Polygonal",
		48,58,58,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676],
		true,
		false,
		false
	),
	new cipher(
		"Pentagonal",
		"Polygonal",
		50,59,56,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,5,12,22,35,51,70,92,117,145,176,210,247,287,330,376,425,477,532,590,651,715,782,852,925,1001],
		true,
		false,
		false
	),
	new cipher(
		"Hexagonal",
		"Polygonal",
		52,60,54,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,6,15,28,45,66,91,120,153,190,231,276,325,378,435,496,561,630,703,780,861,946,1035,1128,1225,1326],
		true,
		false,
		false
	),
	new cipher(
		"Heptagonal",
		"Polygonal",
		54,61,52,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,7,18,34,55,81,112,148,189,235,286,342,403,469,540,616,697,783,874,970,1071,1177,1288,1404,1525,1651],
		true,
		false,
		false
	),
	new cipher(
		"Octagonal",
		"Polygonal",
		56,62,50,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,8,21,40,65,96,133,176,225,280,341,408,481,560,645,736,833,936,1045,1160,1281,1408,1541,1680,1825,1976],
		true,
		false,
		false
	),
	new cipher(
		"Enneagonal",
		"Polygonal",
		58,63,48,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,9,24,46,75,111,154,204,261,325,396,474,559,651,750,856,969,1089,1216,1350,1491,1639,1794,1956,2125,2301],
		true,
		false,
		false
	),
	new cipher(
		"Decagonal",
		"Polygonal",
		60,64,46,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,10,27,52,85,126,175,232,297,370,451,540,637,742,855,976,1105,1242,1387,1540,1701,1870,2047,2232,2425,2626],
		true,
		false,
		false
	),
	new cipher(
		"Kabbalistic",
		"Other",
		170, 70, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,20,4,5,80,3,8,10,10,20,30,40,50,70,80,100,200,300,400,6,6,6,60,10,7],
		true,
		false,
		false
	),
	new cipher(
		"Primes",
		"Other",
		42, 55, 64,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101],
		true,
		false,
		false
	),
	new cipher(
		"Angelic Gematria",
		"Other",
		276, 100, 85,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
		true,
		false,
		false
	),
	new cipher(
		"Satanic Gematria",
		"Other",
		0, 100, 66,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		false,
		false
	),
	new cipher(
		"Prime Qabalah",
		"Other",
		89, 59, 70,
		[97,101,105,111,117,98,99,100,102,103,104,106,107,108,109,110,112,113,114,115,116,118,119,120,121,122],
		[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],
		true,
		false,
		false
	),
	new cipher(
		"William G. Gray",
		"Other",
		150, 70, 60,
		[2,97,0,101,0,105,0,111,0,117,0,98,0,99,0,100,0,102,0,103,0,104,0,106,0,107,0,108,0,109,0,110,0,112,0,113,0,114,0,115,0,116,0,118,0,119,0,120,0,121,0,122,0,116,104],
		[0,0,0,0,0,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
		true,
		false,
		false,
		true,
		false,
		""
	),
	new cipher(
		"Standard Alternative",
		"Extra",
		43, 80, 56,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170],
		true,
		false,
		false
	),
	new cipher(
		"R Standard Alternative",
		"Extra",
		43, 80, 67,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Ordinal starting at 10",
		"Extra",
		60, 33, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		false,
		false
	),
	new cipher(
		"Reverse Satanic",
		"Extra",
		0, 61, 61,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97],
		[36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],
		true,
		false,
		false
	),
	new cipher(
		"Case Sensitive",
		"Extra",
		190, 50, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
		true,
		false,
		true
	),
	new cipher(
		"Alt Case Sensitive",
		"Extra",
		127, 36, 62,
		[65,97,66,98,67,99,68,100,69,101,70,102,71,103,72,104,73,105,74,106,75,107,76,108,77,109,78,110,79,111,80,112,81,113,82,114,83,115,84,116,85,117,86,118,87,119,88,120,89,121,90,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
		true,
		false,
		true
	),
	new cipher(
		"Zeroing Key",
		"Extra",
		216, 50, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[13,12,11,10,9,8,7,6,5,4,3,2,1,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13],
		true,
		false,
		false
	),
	new cipher(
		"Mirroring Key",
		"Extra",
		144, 33, 64,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Alphanumeric",
		"Experimental",
		33, 67, 67,
		[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,29,30,31,32,33],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan 360",
		"Experimental",
		41, 100, 49,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,8,9,10,10,12,15,18,20,24,30,36,40,45,60,72,72,90,120,180,360],
		true,
		false,
		false
	),
	new cipher(
		"Illuminati",
		"Experimental",
		33, 91, 58,
		[109,108,107,106,105,104,103,102,101,100,99,98,97,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Illuminati Reverse",
		"Experimental",
		60, 53, 62,
		[122,121,120,119,118,117,116,115,114,113,112,111,110,97,98,99,100,101,102,103,104,105,106,107,108,109],
		[1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Divisors of 1296",
		"Experimental",
		30, 60, 70,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[0,1,2,3,4,6,8,9,12,16,18,24,27,36,48,54,72,81,108,144,162,216,324,432,648,1296],
		true,
		false,
		false,
		false,
		false,
		""
	),
	new cipher(
		"Synx fraud",
		"Experimental",
		270, 27, 72,
		[49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,38],
		[1,2,3,4,5,6,7,9,10,12,14,15,18,20,21,28,30,35,36,42,45,60,63,70,84,90,105,126,140,180,210,252,315,420,630,1260],
		true,
		false,
		false,
		false,
		false,
		""
	),
	new cipher(
		"QWERTY",
		"Experimental",
		90, 60, 70,
		[113,119,101,114,116,121,117,105,111,112,97,115,100,102,103,104,106,107,108,122,120,99,118,98,110,109],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false,
		false,
		false,
		""
	),
	new cipher(
		"Numeric QWERTY",
		"Experimental",
		90, 60, 60,
		[49,50,51,52,53,54,55,56,57,48,113,119,101,114,116,121,117,105,111,112,97,115,100,102,103,104,106,107,108,122,120,99,118,98,110,109],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
		true,
		false,
		false,
		false,
		false,
		""
	),
	new cipher(
		"Illuminati Novice",
		"Cryptography",
		60, 50, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["12.","11.","10.","9.","8.","7.","6.","5.","4.","4.","3.","2.","1.","13.","14.","15.","16.","17.","18.","19.","20.","20.","21.","22.","23.","24."],
		true,
		false,
		false,
		false,
		true,
		""
	),
	new cipher(
		"Franz Bardon",
		"Cryptography",
		30, 70, 65,
		[2,97,0,98,0,99,104,100,0,101,0,102,0,103,0,105,0,107,0,108,0,108,104,109,0,110,0,111,0,112,0,114,0,115,0,116,0,116,122,117,0,118,0,119,0,121,0,122,0,122,104],
		["E","R","H","M","A","V","W","O","Z","S","SCH","L","G","U","F","T","N","B","K","I","D","P","'","C","CH"],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"Rydumy",
		"Cryptography",
		30, 40, 70,
		[2,97,0,98,0,99,0,100,0,101,0,102,0,103,0,103,106,103,122,104,0,105,0,106,0,107,0,108,0,109,0,110,0,111,0,112,0,112,115,113,0,114,0,115,0,116,0,116,115,117,0,118,0,119,0,120,0,121,0,122,0],
		["Y","P","Z","T","O","W","C","QU","X","K","U","V","G","R","N","M","E","B","PH","Q","L","H","D","TH","I","F","J","CH","A","S"],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"Alfabeto Carbonaro",
		"Cryptography",
		180, 50, 70,
		[1,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["O","P","G","T","I","V","C","H","E","J","K","R","N","M","A","B","Q","L","Z","D","U","F","W","X","Y","S"],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"Cryptographic AQ",
		"Cryptography",
		60, 33, 62,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["0.","1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12.","13.","14.","15.","16.","17.","18.","19.","20.","21.","22.","23.","24.","25.","26.","27.","28.","29.","30.","31.","32.","33.","34.","35."],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"Heximal AQ",
		"Cryptography",
		150, 40, 60,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["00.","01.","02.","03.","04.","05.","10.","11.","12.","13.","14.","15.","20.","21.","22.","23.","24.","25.","30.","31.","32.","33.","34.","35.","40.","41.","42.","43.","44.","45.","50.","51.","52.","53.","54.","55."],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"English Trigon",
		"Cryptography",
		30, 70, 70,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["10.","20.","21.","30.","31.","32.","40.","41.","42.","43.","50.","51.","52.","53.","54.","60.","61.","62.","63.","64.","65.","70.","71.","72.","73.","74.","75.","76.","80.","81.","82.","83.","84.","85.","86.","87."],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"AQ Astrology",
		"Cryptography",
		90, 60, 70,
		[1,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		["☉︎","☿","♀","☽︎","♂","♃","♄","♅","♆","♇","☊","☋","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","Ⅰ.","Ⅱ.","Ⅲ.","Ⅳ.","Ⅴ.","Ⅵ.","Ⅶ.","Ⅷ.","Ⅸ.","Ⅹ.","Ⅺ.","Ⅻ."],
		true,
		false,
		false,
		true,
		true,
		""
	),
	new cipher(
		"Hebrew Gematria",
		"Hebrew",
		50, 78, 63,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1498,1500,1502,1501,1504,1503,1505,1506,1508,1507,1510,1509,1511,1512,1513,1514],
		[1,2,3,4,5,6,7,8,9,10,20,20,30,40,40,50,50,60,70,80,80,90,90,100,200,300,400],
		true,
		false,
		false
	),
	new cipher(
		"Hebrew Ordinal",
		"Hebrew",
		33, 91, 58,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1498,1500,1502,1501,1504,1503,1505,1506,1508,1507,1510,1509,1511,1512,1513,1514],
		[1,2,3,4,5,6,7,8,9,10,11,11,12,13,13,14,14,15,16,17,17,18,18,19,20,21,22],
		true,
		false,
		false
	),
	new cipher(
		"Hebrew Reduction",
		"Hebrew",
		45, 95, 53,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1498,1500,1502,1501,1504,1503,1505,1506,1508,1507,1510,1509,1511,1512,1513,1514],
		[1,2,3,4,5,6,7,8,9,1,2,2,3,4,4,5,5,6,7,8,8,9,9,1,2,3,4,2,4,5,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Hebrew Sofit",
		"Hebrew",
		44, 62, 73,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Greek Isopsephy",
		"Greek",
		191, 71, 71,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Greek Ordinal",
		"Greek",
		154, 70, 67,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27],
		true,
		false,
		false
	),
	new cipher(
		"Greek Reduction",
		"Greek",
		141, 53, 80,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,6,7,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Greek Ordinal 24",
		"Greek",
		218, 75, 81,
		[945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,963,962,964,965,966,967,968,969],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Arabic",
		"Arabic",
		25, 64, 59,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Ordinal",
		"Arabic",
		25, 59, 64,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Reduction",
		"Arabic",
		25, 54, 69,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,1,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1],
		true,
		false,
		false
	),
	new cipher(
		"Russian Standard",
		"Russian",
		50, 78, 63,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Standard",
		"Russian",
		48, 49, 72,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[6000,5000,4000,3000,2000,1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	),
	new cipher(
		"Russian Ordinal",
		"Russian",
		120, 65, 62,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Ordinal",
		"Russian",
		146, 74, 50,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	),
	new cipher(
		"Russian Reduction",
		"Russian",
		216, 95, 73,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Reduction",
		"Russian",
		180, 60, 69,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	),
	new cipher(
		"Cyrillic Numerals",
		"Russian",
		300, 60, 70,
		[1072,1074,1075,1076,1077,1109,1079,1080,1139,1110,1082,1083,1084,1085,1135,1086,1087,1095,1088,1089,1090,1145,1092,1093,1137,1121,1094],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Glagolitic Numerals",
		"Russian",
		60, 50, 65,
		[1072,1073,1074,1075,1169,1076,1077,1108,1101,1078,1109,1079,1110,1080,1115,1106,1082,1083,1113,1084,1085,1114,1086,1087,1088,1089,1090,1091,1092,1093,1121,1097,1094,1095,1119,1096,1098,1099,1100,1123,1103,1102],
		[1,2,3,4,4,5,6,6,6,7,8,9,10,20,30,30,40,50,50,60,70,70,80,90,100,200,300,400,500,600,700,800,900,1000,1000,2000,3000,3000,3000,4000,4000,5000],
		true,
		false,
		false
	)
]