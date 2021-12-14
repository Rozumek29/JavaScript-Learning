const liczby =  [686, 805, 318, 920, 646, 281, 699, 876, 476, 302, 20, 955, 310, 326, 160, 805, 103, 237, 899, 657, 676, 949, 919, 967, 925, 417, 496, 765, 704, 646, 688, 781, 787, 840, 514, 188, 817, 575, 367, 854, 946, 580, 73, 601, 452, 728, 885, 363, 602, 493, 184, 838, 364, 520, 541, 204, 655, 893, 412, 794, 132, 585, 723, 637, 452, 196, 648, 345, 199, 540, 672, 546, 299, 606, 581, 521, 924, 207, 572, 924, 437, 148, 655, 486, 586, 321, 825, 752, 986, 681, 571, 699, 596, 333, 357, 627, 146, 336, 921, 442, 651, 794, 968, 756, 558, 542, 560, 121, 951, 518, 173, 313, 621, 400, 62, 148, 748, 32, 237, 865, 142, 535, 515, 826, 60, 19, 817, 899, 516, 29, 174, 176, 868, 275, 22, 956, 132, 721, 985, 475, 615, 278, 773, 144, 193, 467, 861, 691, 354, 209, 28, 75, 716, 285, 778, 329, 496, 67, 37, 583, 893, 646, 440, 742, 447, 288, 555, 706, 108, 970, 921, 128, 594, 867, 760, 870, 566, 658, 251, 697, 568, 825, 707, 698, 386, 665, 822, 846, 341, 135, 985, 591, 202, 798, 481, 468, 16, 555, 505, 565, 566, 329, 731, 211, 346, 306, 32, 596, 767, 112, 452, 773, 590, 319, 64, 492, 174, 381, 610, 333, 534, 226, 902, 894, 855, 933, 244, 795, 658, 840, 886, 293, 287, 733, 970, 598, 788, 756, 540, 939, 818, 364, 42, 72, 938, 375, 529, 584, 909, 48, 440, 79, 243, 787, 955, 698, 849, 751, 595, 629, 117, 345, 901, 305, 814, 140, 644, 462, 152, 585, 404, 269, 485, 956, 844, 863, 901, 219, 477, 533, 49, 569, 721, 895, 909, 842, 281, 92, 63, 673, 299, 943, 67, 347, 31, 771, 139, 381, 538, 69, 473, 785, 603, 75, 162, 317, 894, 676, 254, 905, 88, 693, 827, 551, 710, 603, 24, 345, 632, 307, 454, 378, 746, 700, 919, 60, 109, 95, 253, 911, 168, 667, 659, 742, 875, 151, 148, 978, 392, 255, 61, 125, 914, 757, 110, 40, 203, 190, 561, 781, 331, 139, 157, 95, 825, 450, 450, 868, 614, 592, 19, 690, 715, 524, 53, 878, 263, 252, 398, 856, 924, 366, 292, 81, 144, 120, 682, 667, 647, 764, 669, 380, 580, 735, 370, 655, 646, 352, 370, 169, 909, 317, 34, 886, 826, 508, 922, 174, 766, 924, 589, 528, 80, 342, 86, 520, 436, 18, 49, 741, 67, 223, 976, 406, 850, 570, 660, 395, 36, 575, 975, 884, 844, 80, 964, 425, 127, 795, 954, 463, 868, 687, 137, 697, 560, 844, 933, 961, 816, 880, 177, 614, 416, 640, 379, 37, 496, 877, 223, 691, 579, 775, 715, 247, 274, 111, 125, 123, 130, 409, 612, 914, 276, 965, 147, 415, 361, 660, 542, 681, 826, 863, 983, 926, 979, 62, 490, 725, 396, 108, 147, 120, 220, 178, 663, 261, 458, 143, 584, 135, 714, 350, 498, 303, 105, 499, 51, 209, 455, 634, 369, 765, 816, 459, 73, 163, 351, 239, 399, 350, 592, 572, 139, 490, 202, 798, 696, 292, 823, 459, 174, 136, 258, 502, 905, 550, 445, 763, 581, 687, 122, 555, 554, 165, 158, 317, 904, 715, 608, 152, 238, 775, 547, 551, 665, 940, 104, 942, 228, 566, 532, 405, 312, 696, 313, 863, 541, 381, 181, 338, 453, 516, 513, 33, 393, 389, 632, 638, 405, 148, 97, 311, 769, 404, 345, 775, 355, 634, 336, 856, 815, 962, 462, 738, 852, 24, 635, 104, 173, 212, 403, 800, 471, 563, 987, 856, 350, 318, 432, 722, 254, 60, 148, 43, 938, 837, 419, 209, 274, 193, 490, 572, 124, 271, 515, 521, 531, 348, 551, 122, 552, 312, 765, 406, 155, 397, 382, 637, 653, 86, 671, 937, 424, 956, 931, 37, 574, 543, 434, 321, 153, 23, 762, 118, 939, 670, 853, 587, 63, 725, 532, 860, 185, 747, 319, 568, 706, 890, 439, 948, 788, 977, 908, 472, 455, 92, 939, 396, 299, 386, 651, 866, 398, 777, 677, 373, 116, 978, 439, 553, 151, 882, 34, 934, 416, 494, 921, 921, 422, 622, 296, 770, 96, 958, 913, 503, 673, 753, 766, 457, 532, 762, 364, 308, 127, 746, 587, 62, 517, 816, 821, 475, 889, 407, 521, 399, 512, 903, 520, 619, 458, 674, 929, 495, 110, 424, 801, 357, 533, 978, 120, 868, 164, 574, 669, 54, 197, 211, 857, 183, 308, 60, 870, 174, 352, 265, 724, 69, 955, 833, 877, 683, 601, 311, 414, 746, 495, 503, 482, 491, 875, 506, 661, 652, 287, 392, 206, 326, 385, 786, 440, 31, 58, 370, 185, 491, 111, 948, 177, 69, 331, 918, 356, 201, 76, 951, 961, 859, 644, 99, 537, 142, 892, 947, 371, 187, 271, 407, 892, 862, 570, 482, 897, 946, 296, 486, 117, 30, 338, 685, 715, 744, 488, 740, 411, 371, 661, 265, 448, 891, 161, 352, 601, 164, 280, 617, 910, 914, 119, 764, 164, 727, 180, 912, 624, 536, 437, 248, 229, 419, 491, 664, 812, 725, 252, 698, 450, 327, 620, 562, 205, 847, 638, 63, 410, 551, 188, 825, 224, 54, 821, 938, 273, 870, 239, 918, 600, 575, 450, 827, 50, 935, 329, 704, 789, 352, 60, 656, 57, 458, 753, 955, 155, 491, 402, 235, 552, 865, 960, 592, 502, 465, 623, 397, 626, 591, 156, 321, 129, 74, 222, 819, 46, 306, 408, 117, 899, 757, 354, 723, 487, 359, 318, 228, 670, 200, 442, 506, 37, 85, 391, 937, 303, 254, 294, 279, 144, 794, 892, 761, 362, 110, 131, 585, 677, 377, 270, 394, 235, 514, 854, 150, 867, 783, 270, 454, 122, 459, 771, 825, 711, 165, 575, 255, 734, 473, 149, 893, 609, 273, 975, 561, 600, 302, 382, 320, 276, 265, 873, 203, 274, 668, 161, 439, 574, 82, 525, 761, 772, 233, 966, 92, 690, 524, 226, 430, 779, 828, 728, 397, 727, 155, 88, 819, 479, 962, 15, 746, 684, 648];

let min = Math.min(...liczby);

let sum = 0;

liczby.forEach(summ);

function summ(element){
    sum += element;
}

alert(
    "Najmniejsza wartość => "+min+
    "\nSuma wszystkich liczb => "+sum
);