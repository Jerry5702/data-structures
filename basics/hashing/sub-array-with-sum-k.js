let A = [507, 517, 518, 519, 521, 529, 532, 537, 540, 542, 547, 558, 559, 560, 571, 573, 582, 583, 585, 586, 588, 589, 596, 597, 601, 604, 606, 607, 613, 615, 616, 618, 623, 632, 633, 641, 643, 647, 651, 653, 654, 657, 660, 667, 670, 673, 676, 680, 684, 687, 688, 696, 699, 701, 707, 708, 710, 712, 713, 719, 721, 722, 723, 727, 730, 731, 732, 739, 744, 751, 759, 771, 776, 777, 780, 785, 788, 797, 798, 802, 807, 812, 817, 820, 821, 825, 826, 827, 828, 832, 833, 835, 836, 838, 843, 846, 848, 849, 851, 852, 855, 857, 858, 859, 866, 875, 878, 879, 882, 883, 891, 897, 904, 906, 916, 918, 920, 921, 925, 929, 935, 942, 943, 945, 950, 956, 958, 962, 963, 967, 973, 974, 975, 977, 981, 983, 989, 994, 996, 999, 1001, 1003, 1004, 1005, 1011, 1012, 1016, 1019, 1023, 1024, 1025, 1027, 1029, 1033, 1035, 1037, 1038, 1039, 1040, 1044, 1053, 1056, 1061, 1064, 1066, 1069, 1071, 1076, 1078, 1084, 1085, 1086, 1088, 1096, 1097, 1099, 1102, 1111, 1113, 1114, 1115, 1116, 1119, 1122, 1130, 1139, 1146, 1148, 1149, 1150, 1161, 1162, 1163, 1164, 1168, 1172, 1175, 1178, 1183, 1187, 1192, 1196, 1198, 1199, 1202, 1206, 1207, 1209, 1215, 1223, 1229, 1236, 1237, 1240, 1242, 1248, 1249, 1252, 1253, 1254, 1264, 1267, 1270, 1276, 1288, 1289, 1293, 1294, 1295, 1296, 1298, 1299, 1301, 1303, 1305, 1308, 1315, 1316, 1317, 1322, 1323, 1327, 1328, 1330, 1338, 1340, 1345, 1349, 1350, 1354, 1355, 1356, 1357, 1359, 1361, 1362, 1363, 1364, 1367, 1368, 1372, 1374, 1376, 1382, 1386, 1387, 1390, 1393, 1394, 1395, 1396, 1399, 1401, 1404, 1407, 1408, 1409, 1410, 1412, 1414, 1418, 1423, 1429, 1431, 1433, 1437, 1438, 1440, 1441, 1443, 1449, 1451, 1453, 1454, 1457, 1459, 1464, 1465, 1466, 1471, 1475, 1479, 1481, 1487, 1494, 1495, 1496, 1499, 1503, 1507, 1510, 1513, 1516, 1517, 1520, 1523, 1534, 1535, 1536, 1540, 1541, 1542, 1544, 1547, 1548, 1559, 1561, 1563, 1569, 1573, 1574, 1575, 1576, 1580, 1583, 1584, 1585, 1588, 1590, 1595, 1601, 1607, 1610, 1613, 1616, 1617, 1621, 1625, 1636, 1641, 1644, 1648, 1649, 1657, 1661, 1665, 1666, 1670, 1671, 1674, 1677, 1679, 1681, 1683, 1684, 1686, 1687, 1688, 1691, 1692, 1693, 1694, 1695, 1696, 1701, 1702, 1704, 1705, 1709, 1711, 1713, 1718, 1723, 1727, 1729, 1732, 1733, 1741, 1742, 1745, 1751, 1755, 1758, 1760, 1761, 1763, 1766, 1770, 1771, 1777, 1779, 1788, 1790, 1793, 1797, 1799, 1806, 1809, 1810, 1811, 1815, 1816, 1820, 1822, 1828, 1829, 1830, 1832, 1833, 1838, 1840, 1846, 1851, 1854, 1865, 1867, 1868, 1870, 1874, 1876, 1880, 1883, 1886, 1887, 1889, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1906, 1908, 1910, 1911, 1912, 1913, 1914, 1916, 1921, 1930, 1936, 1937, 1939, 1943, 1946, 1951, 1952, 1953, 1958, 1966, 1967, 1969, 1972, 1975, 1977, 1981, 1984, 1986, 1987, 1995, 1997, 1999, 2000];
let B = 2763;

//A = [1, 2, 3, 4, 5]
//B = 5

//A = [5, 10, 20, 100, 105];
//B = 110;

//A = [ 1, 1000000000 ]
//B = 1000000000

//A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101];
//B = 500500;

const getSubArraySumUsingPointers = (array, pfSum, sum) => {
    for (let i = 0; i < pfSum.length; i++) {
        let subArray = new Array();        
        for (let j = i; j < pfSum.length; j++) {
            const localSum = (i === 0) ? (Number(pfSum[j])) : (Number(pfSum[j]) - Number(pfSum[i - 1]));
            if (localSum < sum) {
                subArray.push(array[j]);
            } else if (localSum === sum) {
                debugger;
                subArray.push(array[j]);
                return subArray;
            } else if (localSum > sum) {
                debugger;
                break;
            }
        }
    }
    debugger;
    return [-1];
}

const getSubArraySumUsingHashing = (array, pfSum, sum) => {
    
}

const solve = (A, B) => {
    let pfSum = new Array();
    pfSum[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        pfSum[i] = Number(pfSum[i - 1]) + Number(A[i]);
    }
    debugger;
    return getSubArraySumUsingPointers(A, pfSum, B);
}


console.log(solve(A, B));