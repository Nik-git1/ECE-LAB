import React, { useEffect, useRef } from "react";
import "./SparkAnimation.css"; // import the CSS file
// import { useInView } from "react-intersection-observer";


function MySvgComponent() {
  const pathsRef = useRef([]);

  useEffect(() => {
    pathsRef.current.forEach((path) => {
      const length = path.getTotalLength();
      // path.style.transition = path.style.WebkitTransition = "none";
      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition =
        "stroke-dashoffset 2.5s ease-in-out";
      path.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <div >
    <svg
    x="0px"
    y="0px"
    viewBox="0 0 960 560"
    style={{ enableBackground: "new 0 0 1000 560", objectFit: "cover" }}
    xmlSpace="preserve"
    width="100vw"
    height="100vh"
    preserveAspectRatio="xMidYMid slice"
  >
    <g id="lines">
      <polyline  ref={(path) => (pathsRef.current[2] = path)}
        className="st01"
        points="838.4,0 743.5,66.3 743.5,177 720,194.3 	"
      />
      <polyline  ref={(path) => (pathsRef.current[3] = path)}
        className="st0"
        points="853.5,0.2 755.5,69 755.5,184 723.7,207.5 705,207.5 698.3,213 	"
      />
      <path  ref={(path) => (pathsRef.current[4] = path)} className="st01" d="M876.3,0.2c0,0-104.3,71.8-97.1,67.5" />
      <line  ref={(path) => (pathsRef.current[5] = path)}  className="st0" x1="885" y1="0.2" x2="803.7" y2="57.7" />
      <polyline  ref={(path) => (pathsRef.current[6] = path)}
        className="st01"
        points="698,225.5 713,225.5 766.5,187.7 766.5,100 908.3,0.4 	"
      />
      <polyline  ref={(path) => (pathsRef.current[7] = path)} className="st0" points="927.3,0.3 779.5,103 779.5,111 	" />
      <polyline  ref={(path) => (pathsRef.current[8] = path)}
        className="st01"
        points="799.2,97.3 788.5,106.5 788.5,190 779.5,197 	"
      />
      <polyline  ref={(path) => (pathsRef.current[9] = path)}
        className="st0"
        points="761.5,212.8 730.3,233.5 676.3,234 666,226.7 	"
      />
      <polyline  ref={(path) => (pathsRef.current[10] = path)} className="st01" points="823.5,107 823.5,103 960,7.7 	" />
      <polyline  ref={(path) => (pathsRef.current[11] = path)} className="st0" points="960.2,13.7 832.5,102.8 832.5,107 	" />
      <line  ref={(path) => (pathsRef.current[12] = path)} className="st01" x1="960" y1="21" x2="844.3" y2="102.8" />
      <polyline  ref={(path) => (pathsRef.current[13] = path)}
        className="st0"
        points="960,28.8 813.5,132.2 811.5,173 811.5,176 803.2,183 	"
      />
      <polyline  ref={(path) => (pathsRef.current[14] = path)}
        className="st01"
        points="841.2,138.1 946.5,62.6 946.5,56 959.7,47.1 	"
      />
      <polyline  ref={(path) => (pathsRef.current[15] = path)}
        className="st0"
        points="	"
      />
      <line  ref={(path) => (pathsRef.current[16] = path)} className="st0" x1="959.6" y1="81" x2="857" y2="151" />
      <polyline  ref={(path) => (pathsRef.current[17] = path)} className="st01" points="959.9,92.5 730.3,253.5 670,253.5 	" />
      <polyline  ref={(path) => (pathsRef.current[18] = path)}
        className="st0"
        points="960,121.5 935,121.5 730.3,267.5 667,267.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[19] = path)} className="st01" points="685.2,282.8 698,291.5 960,291.5 	" />
      <polyline  ref={(path) => (pathsRef.current[25] = path)}
        className="st01"
        points=""
      />
      <polyline  ref={(path) => (pathsRef.current[260] = path)}
        className="st0"
        points=""
      />
      <polyline  ref={(path) => (pathsRef.current[261] = path)}
        className="st0"
        points="732.2,331.9 736.5,329 736.5,323 745,316.5 927,316.5 943.5,329.5 960,329.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[262] = path)}
        className="st0"
        points="	"
      />
      <line  ref={(path) => (pathsRef.current[263] = path)} className="st0" x1="772" y1="331.5" x2="876" y2="331.5" />
      <polyline  ref={(path) => (pathsRef.current[26] = path)}
        className="st0"
        points=""
      />
      <polyline  ref={(path) => (pathsRef.current[26] = path)}
        className="st01"
        points="667,352.5 677,352.5 698.3,336.5 714,336.5 725,344.5 738,344.5 	"
      />
      <line  ref={(path) => (pathsRef.current[27] = path)} className="st01" x1="789" y1="343.5" x2="868" y2="343.5" />
      <polyline  ref={(path) => (pathsRef.current[28] = path)}
        className="st0"
        points="663.2,374.8 674,367.5 685,367.5 691.5,364.5 742,364.5 755,355.5 843,355.5 846,355.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[29] = path)}
        className="st01"
        points="700,371.5 738,371.5 748,378.5 862,378.5 908.3,344.5 960,344.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[30] = path)}
        className="st0"
        points="669.5,383.5 674.5,378.5 723,378.5 730.3,385.5 960,385.5 	"
      />
      <line  ref={(path) => (pathsRef.current[31] = path)} className="st01" x1="879" y1="378.5" x2="960" y2="378.5" />
      <polyline  ref={(path) => (pathsRef.current[32] = path)}
        className="st01"
        points="886,371.5 904,371.5 908.3,374.8 959.6,374.5 	"
      />
      <line  ref={(path) => (pathsRef.current[33] = path)} className="st01" x1="919" y1="369.5" x2="960" y2="369.5" />
      <polyline  ref={(path) => (pathsRef.current[34] = path)} className="st01" points="918.9,355.5 922.8,351.5 960,351.5 	" />
      <polyline  ref={(path) => (pathsRef.current[35] = path)}
        className="st01"
        points="897.3,364.8 905.5,359.5 905.5,353 912.5,347.5 960,347.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[36] = path)}
        className="st01"
        points="677.2,394.3 674.5,390.5 674.5,386 679.5,382.5 720,382.5 727,388.5 960,388.5 	"
      />
      <path  ref={(path) => (pathsRef.current[37] = path)} className="st01" d="M960,394.3" />
      <polyline  ref={(path) => (pathsRef.current[38] = path)} className="st0" points="716.2,388.9 724,392.5 960,392.5 	" />
      <line  ref={(path) => (pathsRef.current[39] = path)} className="st01" x1="700" y1="396.5" x2="960" y2="396.5" />
      <polyline  ref={(path) => (pathsRef.current[40] = path)}
        className="st0"
        points="702,408.5 727,408.5 735.5,401.5 960,401.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[41] = path)}
        className="st01"
        points="667.2,409.5 677,415.5 738,415.5 744,409.5 960,409.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[42] = path)}
        className="st0"
        points="654,419.5 730,419.5 743.5,428.5 766,428.5 775.9,421.5 960,421.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[43] = path)}
        className="st0"
        points="749,424.5 751,424.5 764,424.5 775.9,417.5 960,417.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[44] = path)}
        className="st0"
        points="650.9,434.9 657,437.5 681,437.5 694,431.5 720,431.5 730.3,437.5 843,437.5 864.5,453.5 960,453.5"
      />
      <polyline  ref={(path) => (pathsRef.current[45] = path)} className="st0" points="862,446 868,448.5 960,448.5 	" />
      <line  ref={(path) => (pathsRef.current[46] = path)} className="st01" x1="876" y1="442.5" x2="960" y2="442.5" />
      <polyline  ref={(path) => (pathsRef.current[47] = path)}
        className="st0"
        points="856,434.5 862,434.5 868,438.5 960,438.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[48] = path)}
        className="st01"
        points="761,263.5 776,263.5 868.2,199.5 923,199.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[49] = path)}
        className="st0"
        points="919,188.5 934,188.5 939,192.5 952,192.5 959.6,186.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[50] = path)}
        className="st01"
        points="959.1,193.3 955,197.5 936,197.5 932,194.5 865,194.5 801.4,240.5 794,240.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[51] = path)}
        className="st0"
        points="832.5,258 832.2,263.5 838.4,269.5 872,269.5 879,265.5 960.2,263.8 	"
      />
      <polyline  ref={(path) => (pathsRef.current[52] = path)}
        className="st01"
        points="849,253.5 844,253.5 838.5,250.5 838.5,246 865.8,225.5 935,225.5 945,216.5 960,216.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[53] = path)} className="st01" points="954,227.5 959,227.5 960,227.5 	" />
      <line  ref={(path) => (pathsRef.current[54] = path)} className="st0" x1="870" y1="241.5" x2="960" y2="241.5" />
      <polyline  ref={(path) => (pathsRef.current[55] = path)} className="st01" points="803.7,269.5 809,272.5 919,272.5 	" />
      <polyline  ref={(path) => (pathsRef.current[56] = path)}
        className="st0"
        points="495,383 503.5,385.5 503.5,418 512.5,424.5 512.5,437 501.5,446 501.5,525 512.5,533.5 533,533.5"
      />
      <polyline  ref={(path) => (pathsRef.current[58] = path)}
        className="st0"
        points="569.9,536.5 575.5,531.5 663,531.5 702.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[59] = path)}
        className="st01"
        points="508.9,560 533,542.5 667,542.5 690.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[60] = path)}
        className="st0"
        points="523.5,560 537.5,548.5 661,548.5 677,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[61] = path)}
        className="st01"
        points="534.8,442.5 532.9,468 585.4,505 587.5,508 708.8,505.5 719.5,513.5 719.5,540 746.5,560.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[62] = path)}
        className="st0"
        points="525.5,454 525.5,478 561.5,504.5 561.5,513 569.9,519.5 674,519.5 732.2,560.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[63] = path)}
        className="st0"
        points="578.8,511.2 584,514.5 700,514.5 707.5,518.5 707.5,532 	"
      />
      <polyline  ref={(path) => (pathsRef.current[64] = path)}
        className="st0"
        points="552.5,432 552.5,462 596.5,493.5 732,493.5 740.5,499 740.5,534 775.9,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[65] = path)} className="st01" points="748.5,496 749,533.5 788.8,560.2 	" />
      <polyline  ref={(path) => (pathsRef.current[66] = path)}
        className="st0"
        points="760.5,501 760.5,528 782.5,542.5 830,542.5 834.5,545.8 834.5,555 828.5,557.4 828.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[67] = path)}
        className="st01"
        points="561.5,421 561.5,458 604,488.5 813,488.5 902,551.5 960,551.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[68] = path)}
        className="st0"
        points="567.5,431 567.5,454 610,482.5 815,482.5 902.5,544.3 959.6,545.8 	"
      />
      <polyline  ref={(path) => (pathsRef.current[69] = path)}
        className="st01"
        points="584.3,453.8 618.5,477.5 815,477.5 902.5,539.5 960,539.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[70] = path)}
        className="st0"
        points="584.3,432.5 632.5,467.5 811,467.5 902,530.5 960,530.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[71] = path)}
        className="st01"
        points="569.8,412.7 634.5,458.5 823,458.5 876.8,496.5 960,496.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[72] = path)}
        className="st0"
        points="584.5,410 584.5,415 636.2,453.5 834,453.5 882.5,488.5 960,488.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[73] = path)}
        className="st01"
        points="614.7,421.3 616.5,428.3 643.1,446.5 838,446.5 865.8,464.5 960,464.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[74] = path)}
        className="st0"
        points="635.5,421.4 642.5,424.5 642.5,439 648.1,442.5 698,442.5 707.5,434.5 722,434.5 730.3,442.5 842,442.5 864,458.5 960,458.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[75] = path)}
        className="st01"
        points="766.1,497.1 771.5,501 771.5,528 784,537.5 832,537.5 841.5,544.3 841.5,558 	"
      />
      <polyline  ref={(path) => (pathsRef.current[76] = path)} className="st0" points="488,399.4 494.5,404 494.5,560 	" />
      <line  ref={(path) => (pathsRef.current[77] = path)} className="st01" x1="485.5" y1="421" x2="485.5" y2="557" />
      <polyline  ref={(path) => (pathsRef.current[78] = path)}
        className="st0"
        points="485.2,409.4 477.5,415.5 477.5,431 472.5,434.5 472.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[79] = path)}
        className="st01"
        points="441.5,399.4 462.5,415 462.5,424 458,428 459,551.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[80] = path)}
        className="st0"
        points="439,410.5 445.5,415 445.5,534 420.5,551.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[81] = path)} className="st01" points="437.5,421 437.5,528 415,542.5 	" />
      <polyline  ref={(path) => (pathsRef.current[82] = path)}
        className="st0"
        points="387.5,560 387.5,546 430.5,516.5 430.5,428 424,424 	"
      />
      <polyline  ref={(path) => (pathsRef.current[83] = path)}
        className="st01"
        points="420,410.2 414.5,412.7 414.5,424 420.5,428.5 420.5,497 378.5,528.1 378.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[84] = path)}
        className="st0"
        points="405.8,410.2 396.5,415.5 396.5,425 408.5,434.5 408.5,494 364.5,525.5 364.5,560 	"
      />
      <line  ref={(path) => (pathsRef.current[85] = path)} className="st01" x1="307" y1="551.2" x2="323.5" y2="539.5" />
      <polyline  ref={(path) => (pathsRef.current[86] = path)} className="st0" points="288.5,551.2 329.5,521.6 335.5,524 	" />
      <polyline  ref={(path) => (pathsRef.current[87] = path)}
        className="st01"
        points="274.9,545.8 381.5,471.5 381.5,404 376,399.4 	"
      />
      <polyline  ref={(path) => (pathsRef.current[88] = path)}
        className="st0"
        points="390.5,400.1 386.5,401.8 386.5,435 390.5,438 390.5,478 348.5,507.1 348.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[89] = path)}
        className="st01"
        points="374.5,413 374.5,433 371.5,434.5 371.5,467 255.5,548.5 255.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[90] = path)}
        className="st0"
        points="246.5,560 246.5,545 360.5,464.9 360.5,435 369.5,431 369.5,416 364.5,412.5 364.5,402 	"
      />
      <polyline  ref={(path) => (pathsRef.current[91] = path)}
        className="st01"
        points="360.5,424 360.5,428 352.5,432.5 352.5,462 236.5,542.5 236.5,557 	"
      />
      <polyline  ref={(path) => (pathsRef.current[92] = path)}
        className="st0"
        points="189.8,560.6 222.5,536.5 231,536.5 341.5,458.5 341.5,433 348.5,428 348.5,413 353.5,408.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[93] = path)}
        className="st01"
        points="162,560.8 214.5,524.5 223,524.5 323.5,451 323.5,435 	"
      />
      
      <polyline  ref={(path) => (pathsRef.current[96] = path)}
        className="st0"
        points="0,548.5 123,548.5 189.8,499.5 208,499.5 276.5,449.2 276.5,428 	"
      />
      <polyline  ref={(path) => (pathsRef.current[97] = path)}
        className="st01"
        points="259,451.5 252,451.5 208.5,484.5 208.5,488 	"
      />
      <polyline  ref={(path) => (pathsRef.current[98] = path)}
        className="st0"
        points="290.8,421.2 284.5,424.5 284.5,452 211,503.5 198,503.5 116.5,560 	"
      />
      <polyline  ref={(path) => (pathsRef.current[99] = path)} className="st01" points="93,560 86,554.5 0,554.2 	" />
      <polyline  ref={(path) => (pathsRef.current[100] = path)} className="st0" points="0,539.5 108,539.5 259,434.5 	" />
      <polyline  ref={(path) => (pathsRef.current[101] = path)}
        className="st01"
        points="255.2,419.5 242.5,428.5 242.5,440 107,533.5 0,536.4 	"
      />
      <polyline  ref={(path) => (pathsRef.current[102] = path)} className="st0" points="164.5,473 164.5,480 100.5,524 	" />
      <polyline  ref={(path) => (pathsRef.current[104] = path)} className="st0" points="138.5,480 138.5,485 103,511.2 	" />
      <polyline  ref={(path) => (pathsRef.current[105] = path)}
        className="st01"
        points="105.5,471.5 96.5,469.8 81.5,481.5 81.5,489 	"
      />
      <polyline  ref={(path) => (pathsRef.current[106] = path)} className="st0" points="84,495.6 120.8,469.5 132,469.5 	" />
      <polyline  ref={(path) => (pathsRef.current[107] = path)}
        className="st0"
        points="0,530.5 39,530.5 74.5,505.5 74.5,478 93,464.9 179.5,464.5 255.2,412.5 269,412.5 274.9,408.5 	"
      />
      
      <polyline  ref={(path) => (pathsRef.current[109] = path)}
        className="st0"
        points="274.4,362.6 271.4,361.2 264.7,367.5 217,367.5 210.5,372 210.5,400 157.7,437.5 71,437.5 
  32.5,465.7 32.5,492 32.5,494 19,503.5 0,503.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[110] = path)}
        className="st0"
        points="227.5,395 227.5,398 162,445.5 76,445.5 43.5,469.5 43.5,496 23.3,509.5 0,509.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[111] = path)}
        className="st0"
        points="0,524.5 35,524.5 63.5,503.5 63.5,475 86,459.5 173,459.5 250.3,403.5 263,403.5 269.5,399.4 
  269.5,383 276.5,377.5 286,377.5 288.5,375 	"
      />
      <polyline  ref={(path) => (pathsRef.current[112] = path)} className="st01" points="194.5,353.8 205.7,345.5 225,345.5 	" />
      <line  ref={(path) => (pathsRef.current[113] = path)} className="st01" x1="1" y1="399.5" x2="10" y2="399.5" />
    <polyline  ref={(path) => (pathsRef.current[116] = path)}
        className="st01"
        points="97.5,249 97.5,257 73.5,273.3 73.5,284 78.8,285.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[117] = path)} className="st0" points="86.3,276.7 120.8,253.3 122,247.7 	" />
      <polyline  ref={(path) => (pathsRef.current[118] = path)} className="st01" points="135.3,249 135.2,253.7 99,280 	" />
      <polyline  ref={(path) => (pathsRef.current[119] = path)} className="st01" points="0,337.5 5,337.5 13.3,342.7 	" />
      <polyline  ref={(path) => (pathsRef.current[120] = path)}
        className="st01"
        points="11.9,325.6 17.5,321.7 17.5,310 3.3,299.5 -1,299.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[121] = path)}
        className="st0"
        points="0.6,356 22.2,356.4 30.5,349.8 32.5,348.6 32.5,317 46,307.5 85,307.5 91.7,302.7 	"
      />
      <polyline  ref={(path) => (pathsRef.current[122] = path)}
        className="st01"
        points="49.3,320.8 40.5,326.7 40.5,352 23.3,363.5 0,363.5 	"
      />
      <path  ref={(path) => (pathsRef.current[123] = path)}
        className="st0"
        d="M0.6,368.3c0,0,57.1,2,72.9,0s20-7.1,20-7.1l20.4-14.1"
      />
      <polyline  ref={(path) => (pathsRef.current[124] = path)}
        className="st01"
        points="60.2,329.8 78.8,344.5 103,344.5 159.8,304.5 173,304.5 190,293 197.5,291.7 	"
      />
      <path  ref={(path) => (pathsRef.current[125] = path)}
        className="st0"
        d="M144.5,332v-6c0,0,8.9-7.5,9.2-7.9c0.3-0.4,10.8,0,10.8,0l25.5-18.6h40l12.8-10H291l2.9,2.2"
      />
      <polyline  ref={(path) => (pathsRef.current[126] = path)}
        className="st01"
        points="295.3,240.7 301.5,243.8 301.5,277 293.9,283.5 186,283.5 174.5,291.7 174.5,294 	"
      />
      <polyline  ref={(path) => (pathsRef.current[127] = path)}
        className="st0"
        points="100.6,335.6 104.1,333.5 107,333.5 186.5,278.5 257,278.5 275,264.5 287,264.5 292.3,269.3 	"
      />
      <polyline  ref={(path) => (pathsRef.current[128] = path)}
        className="st01"
        points="291,260.5 272,260.5 262.7,267.5 255,267.5 248,262.5 222,262.5 219.2,264 	"
      />
      <polyline  ref={(path) => (pathsRef.current[129] = path)}
        className="st0"
        points="128,301.5 132,301.5 197.5,254.5 265,254.5 269,256.5 286,256.5 292.3,252.3 	"
      />
      <polyline  ref={(path) => (pathsRef.current[130] = path)}
        className="st0"
        points="	"
      />
      <polyline  ref={(path) => (pathsRef.current[131] = path)}
        className="st0"
        points="127.5,286.1 180.5,249.5 216,249.5 219.5,245.5 225,245.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[132] = path)}
        className="st01"
        points="274.2,249.3 270.3,247.5 253,247.5 241.3,239.5 63,239.5 59.5,242.3 59.5,246 	"
      />
      <polyline  ref={(path) => (pathsRef.current[133] = path)}
        className="st0"
        points="1,245.5 40,245.5 56.9,233.5 285,233.5 290.8,228.7 	"
      />
      <polyline  ref={(path) => (pathsRef.current[134] = path)}
        className="st0"
        points="276.2,207.2 268,212.5 255,212.5 252.7,209.5 187,209.5 176.2,219.5 47,219.5 30.5,230.5 1,230.5 	
  "
      />
      <polyline  ref={(path) => (pathsRef.current[135] = path)}
        className="st0"
        points="	"
      />
      <polyline  ref={(path) => (pathsRef.current[136] = path)}
        className="st01"
        points="242.2,195.3 233.8,201.5 182,201.5 169.3,208.5 40,208.5 24.7,221.5 -1,221.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[137] = path)}
        className="st01"
        points=""
      />
      <polyline  ref={(path) => (pathsRef.current[138] = path)}
        className="st0"
        points="227.5,193.2 222.6,189.5 180,189.5 159.8,202.5 37,202.5 20.7,214.5 1,214.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[139] = path)}
        className="st01"
        points="153.7,194.8 149.3,195.5 32,195.5 16,207.5 1,207.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[140] = path)}
        className="st0"
        points="159,186.5 152,186.5 142.6,192.5 29,192.5 13.3,203.5 0,203.5 	"
      />
      <path  ref={(path) => (pathsRef.current[141] = path)} className="st01" d="M93.5,179c3.2-0.3,41.8,0,41.8,0l7.3,4" />
      <polyline  ref={(path) => (pathsRef.current[142] = path)}
        className="st0"
        points="149.8,173.5 148,171.5 68,171.5 49.3,185 22,186.5 10,195 0.8,195.3 	"
      />
      <path  ref={(path) => (pathsRef.current[143] = path)}
        className="st01"
        d=""
      />
      <polyline  ref={(path) => (pathsRef.current[144] = path)}
        className="st01"
        points="-1,167.5 11,167.5 24.7,157.5 230,157.5 242.2,167.5 270,167.5 272.7,169.8 	"
      />
      <path  ref={(path) => (pathsRef.current[145] = path)} className="st01" d="M0.6,137.6c2.1,0,260.8,0,260.8,0l14.9-9.6" />
      <polyline  ref={(path) => (pathsRef.current[146] = path)}
        className="st0"
        points="289.6,123.6 283.7,119.5 271,119.5 252.3,132.5 19,132.5 12,128.5 1,128.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[147] = path)} className="st01" points="1,119.5 10,119.5 21.7,128.5 201,128.5 	" />
      <polyline  ref={(path) => (pathsRef.current[148] = path)} className="st0" points="-0.1,145.8 4,142.5 232,142.5 	" />
      <polyline  ref={(path) => (pathsRef.current[149] = path)}
        className="st01"
        points="305,146.2 301.5,142.5 286,142.5 282.3,140.5 275,140.5 262.3,150.5 30,150.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[150] = path)} className="st0" points="0,52.5 36,52.5 67.7,73.5 253,73.5 	" />
      <polyline  ref={(path) => (pathsRef.current[151] = path)} className="st01" points="245,90.5 283,90.5 313,111.5 327,111.9 	" />
      <polyline  ref={(path) => (pathsRef.current[152] = path)}
        className="st0"
        points="0,48.5 54,48.5 73.5,34.5 97,34.5 114.3,21.5 159,21.5 179.3,7 	"
      />
      <polyline  ref={(path) => (pathsRef.current[153] = path)}
        className="st01"
        points="83,38.5 102,38.5 118.1,27.5 173,27.5 189.5,14.7 189.5,0 	"
      />
      <polyline  ref={(path) => (pathsRef.current[154] = path)}
        className="st0"
        points="211.5,0 211.5,21 182.5,40.8 182.5,45 176.2,50.5 133,50.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[155] = path)} className="st0" points="72,61.5 101,61.5 133,38.5 152,38.5 	" />
      <polyline  ref={(path) => (pathsRef.current[156] = path)} className="st01" points="116.1,62 125.3,68.5 223,68.5 230.7,63 	" />
      <polyline  ref={(path) => (pathsRef.current[157] = path)} className="st0" points="222.6,0.4 232,7 231,48.5 238,52.4 	" />
      <polyline  ref={(path) => (pathsRef.current[158] = path)}
        className="st01"
        points="252.5,1 252.5,57 289.6,82.5 330,82.5 369.5,111.5 369.5,146 383.3,156 	"
      />
      <polyline  ref={(path) => (pathsRef.current[159] = path)}
        className="st0"
        points="318,90.5 330,90.5 363.5,113 363.5,152 368.3,156 	"
      />
      <path  ref={(path) => (pathsRef.current[160] = path)}
        className="st01"
        d="M317.9,97.7c1.3,0.8,16.6-0.1,16.6-0.1l21,15.4v22"
      />
      <polyline  ref={(path) => (pathsRef.current[161] = path)} className="st0" points="11.5,16.5 17.5,11.5 108,11.5 122,1 	" />
      <polyline  ref={(path) => (pathsRef.current[162] = path)}
        className="st01"
        points="8.5,28 8.5,25 23,15.5 129,15.5 149.8,0 	"
      />
      <polyline  ref={(path) => (pathsRef.current[163] = path)}
        className="st0"
        points="266.5,1 266.5,60 293.9,79.5 332,79.5 374.5,109.7 374.5,138 383.3,144.2 	"
      />
      <path ref={(path) => (pathsRef.current[164] = path)}
        className="st01"
        d="M272.5,1v59c0,0-0.1,0.5,0.2,0.9c0.3,0.4,0.2,0.5,0.8,0.7c0.5,0.2,0.6,0.2,1.2,0.2c0.6,0.1,0.9,0.1,1.3-0.1
  s0.6-0.4,1-0.7s0.3-0.1,0.5-1.1V0"
      />
      
      <path  ref={(path) => (pathsRef.current[166] = path)}
        className="st0"
        d="M330.5,62V33c0,0,0-1.1,0.5-1.6s0.8-0.8,1.2-1c0.5-0.2,0.5-0.2,1.2,0s1.3,0.8,1.7,1.2c0.3,0.5,0.3,1.3,0.3,1.3
  v29l32.8,23.5h6.7"
      />
     
      <polyline  ref={(path) => (pathsRef.current[168] = path)}
        className="st0"
        points="383,1 384.8,72.8 404.5,87 404.5,118 412.5,123.2 412.5,141 408.3,144.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[169] = path)}
        className="st01"
        points="392.7,-0.1 388.5,2.2 388.5,70 408.5,85.5 408.5,114 417.5,121.5 417.5,143 420.7,145.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[170] = path)}
        className="st0"
        points="405.7,0.9 399.5,4.5 399.5,68 416.6,80.7 418.5,82 418.5,100 420.7,101.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[171] = path)} className="st01" points="" />
      <polyline  ref={(path) => (pathsRef.current[172] = path)}
        className="st01"
        points="420.5,-0.1 420.7,4.3 412.5,8.8 412.5,50 416.6,51.1 	"
      />
      <polyline  ref={(path) => (pathsRef.current[173] = path)}
        className="st0"
        points="426.5,0 426.5,62 421.5,65.2 421.5,74 427.5,78.5 427.5,95 443.5,105.5 443.5,118 429.5,128 
  429.5,143 432.5,144.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[174] = path)}
        className="st01"
        points="448.2,146.2 439.5,140.1 439.5,129 448.5,121.5 448.5,100 455.5,94.9 455.5,69 445.5,61.5 445.5,1 	
  "
      />
      <polyline  ref={(path) => (pathsRef.current[175] = path)} className="st0" points="435.5,0 435.5,65 439.5,67.5 440,88.5 	" />
      <polyline  ref={(path) => (pathsRef.current[176] = path)} className="st0" points="441.5,0 441.5,65 445.7,67.5 	" />
     
      <path  ref={(path) => (pathsRef.current[178] = path)}
        className="st01"
        d="M460.3,105.6c0,0,5.2-3.1,5.2-4.3s0-36.2,0-36.2l-10-8V0"
      />
      <polyline  ref={(path) => (pathsRef.current[179] = path)} className="st0" points="460.5,1 460.5,55 469.5,62 469.5,133 	" />
      
      <path  ref={(path) => (pathsRef.current[181] = path)}
        className="st0"
        d="M469.5,0v53l10,6.2l0.4,69.2c0,0,4.6,1.5,4.6,2.5s0,13,0,13"
      />
      <polyline  ref={(path) => (pathsRef.current[182] = path)}
        className="st01"
        points="439.3,160 445.7,164.5 460,164.5 475,154.5 486,154.5 492.5,150.5 492.5,133 484.5,128.5 484.5,59 
  475,51.1 474.7,-0.1 	"
      />
      <polyline  ref={(path) => (pathsRef.current[183] = path)}
        className="st0"
        points="479.5,0 479.5,45 486.4,55.2 522.5,82 522.5,100 519,103.5 520.3,135 486.7,160 	"
      />
      <polyline  ref={(path) => (pathsRef.current[184] = path)}
        className="st0"
        points="503.8,133 510.5,128 510.5,116 492.5,103.5 492.5,74 493.7,72 	"
      />
      <polyline  ref={(path) => (pathsRef.current[185] = path)} className="st01" points="504.5,82 504.5,95 510.5,97.6 	" />
      <polyline  ref={(path) => (pathsRef.current[186] = path)}
        className="st0"
        points="528.8,106.8 524.5,109.7 524.5,153 519.7,157.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[187] = path)}
        className="st01"
        points="533.2,146.6 540.5,140.5 540.5,98 533.2,94.9 	"
      />
      <polyline  ref={(path) => (pathsRef.current[188] = path)}
        className="st0"
        points="487,7.5 484,7.5 484.5,31.3 492.5,36.5 577,36.5 581.5,42 581.5,75 569.5,85.5 569.5,118 565.3,120 	
  "
      />
      <polyline  ref={(path) => (pathsRef.current[189] = path)}
        className="st01"
        points="629.5,1 629.5,16 624.5,20.8 624.5,73 581.5,103.5 581.5,155 	"
      />
      <polyline  ref={(path) => (pathsRef.current[190] = path)} className="st0" points="650.5,110 650.5,132 633,144.2 	" />
      <polyline  ref={(path) => (pathsRef.current[191] = path)} className="st0" points="605.3,111.1 613.5,117.6 613.5,165 	" />
      <path  ref={(path) => (pathsRef.current[192] = path)}
        className="st01"
        d="M676.5,144.2l-10-6.2v-32l5.2-3.7c0,0-0.7-7.9-0.7-8.2s-9.1-6.7-9.1-6.7s-1.2,0-2.6,0c-1.3,0-4.7-1-4.7-1
  s-2.9-1.1-4-1.9s-1.8-1.2-2.6-2.6s-0.7-2-0.7-2V26c0,0-0.8-0.4-1.5-0.5s-1.4,0.1-1.4,0.1c-0.7,0.1-1.1,0-1.8,0.4
  c-0.7,0.4-0.9,0.8-1.2,1.4c-0.2,0.7-0.2,1.6-0.2,1.6v26c0,0,0,0.5-0.3,1c-0.3,0.5-1.4,0.7-1.4,0.7l-1.4-0.2l-1.8-0.5V25.2l6-4.2V1"
      />
      <polyline  ref={(path) => (pathsRef.current[193] = path)}
        className="st01"
        points=""
      />
     
      <polyline  ref={(path) => (pathsRef.current[195] = path)}
        className="st0"
        points="747.2,0.4 687.5,42 687.5,70 704.5,82.2 704.5,104 698,107.2 	"
      />
      <polyline  ref={(path) => (pathsRef.current[196] = path)}
        className="st01"
        points="756,0.6 710.5,33 710.5,111 700.5,119.5 700.5,132 	"
      />
      <polyline  ref={(path) => (pathsRef.current[197] = path)}
        className="st0"
        points="700.2,144.4 707.5,138.6 707.5,120 717.5,111.9 717.5,45 782.3,0 	"
      />
      <polyline  ref={(path) => (pathsRef.current[199] = path)}
        className="st0"
        points="817.5,0 733.5,59 733.5,172 712.7,187.3 700.3,187 686,196.7 670.3,196.3 664.3,201.3 	"
      />
      <polyline  ref={(path) => (pathsRef.current[201] = path)}
        className="st01"
        points="666.4,210.9 678.3,201.5 689,201.5 704.3,190.5 718,190.5 738.5,175 738.5,62 828,0 	"
      />
     
      <path  ref={(path) => (pathsRef.current[203] = path)}
        className="st01"
        d="M654.8,237.8l3.8,2.7H733c0,0,95-65.2,95.3-66.2c0.3-1,1-42.3,1-42.3L960,41"
      />
      <path  ref={(path) => (pathsRef.current[204] = path)}
        className="st0"
        d="M2,57.2c7.4-0.1,14.7,0,22.1-0.1L57,80.5h135c0,0,0.7-0.2,0.7,0.8s0.3,1.2-1.2,1.3c-1.5,0.2-90.7-0.2-90.7-0.2
  s-1.4-0.2-2.1,0.5s-0.9,1.2-0.9,1.8c0,0.7,0.2,1.2,0.6,1.4c0.3,0.2,0.2,0.3,0.8,0.8s1.6,0.4,1.8,0.5h113.7l12.8,7.5v22l-4.7,2.6"
      />
      <path  ref={(path) => (pathsRef.current[205] = path)}
        className="st0"
        d="M215.8,95.1l-2.6-2l-30.1-0.2l-5.2,3.6h-71.2c-0.1,0-1,0.1-1.6-0.8c-0.5-0.7-0.2-1.4-0.2-1.4
  c0.2-0.8,1.1-1.5,2-1.6l65,0.2c0.2,0.1,0.9,0.2,1.7-0.2c0.2-0.1,0.7-0.4,0.8-0.9c0,0,0.2-0.6-0.2-1.2c-0.3-0.5-0.8-0.6-1.4-0.8
  c-0.5-0.1-1.4-0.2-2.5,0L98.1,90l-9.8-6.6l-35.2-0.2l-13.7-9.3L0,74"
      />
      <path  ref={(path) => (pathsRef.current[206] = path)}
        className="st0"
        d="M0,90.5h88.3l14.7,9.9l59.9,0c0.4-0.1,1.1-0.2,1.9,0.1c0.3,0.1,1.2,0.4,1.3,1c0.1,0.4-0.3,0.8-0.4,1
  c-0.5,0.6-1.2,0.7-1.4,0.7L98.5,103c-0.4,0-1.3,0-2.2,0.6c-0.3,0.2-0.9,0.6-1.1,1.3c-0.1,0.2-0.2,0.7,0,1.3c0.4,1,1.5,1.4,1.9,1.5
  c0.6,0.2,1.1,0.2,2.1,0.2c0.7,0,1.2,0,1.6-0.1l71.2-0.6l14.6-10.7H201"
      />
      <path  ref={(path) => (pathsRef.current[207] = path)}
        className="st0"
        d="M190,105.3L173.1,118l-74.2-0.1c-0.9,0-1.6-0.2-2-0.3c-0.5-0.2-1.1-0.5-1.4-1.1c-0.1-0.1-0.2-0.6-0.1-1.1
  c0.3-0.9,1.3-1.2,1.3-1.2l62.2,0.2c0.3,0,0.8,0.1,1.3,0c0.9-0.1,1.5-0.1,2-0.6c0.6-0.5,0.7-1.2,0.8-1.3c0-0.1,0.1-0.7-0.2-1.2
  c-0.4-1-1.4-1.3-1.6-1.3l-128-0.1l-7.4,0.1L11.4,99.5L0,99.7"
      />
      <path  ref={(path) => (pathsRef.current[208] = path)}
        className="st0"
        d="M287,0c0,0.3-0.1,58.4-0.1,58.4s-0.2,0.1,0.7,0.7c0.8,0.6,0.4,0.6,1.3,0.7c0.9,0.1,0.8,0.2,1.4-0.1
  c0.7-0.2,1.3-0.7,1.6-0.9S292,0,292,0"
      />
      <polyline  ref={(path) => (pathsRef.current[209] = path)}
        className="st01"
        points="296.6,0 296.5,1 296.5,69 300,72.5 337,72.5 383.3,105.5 385.2,124 394.5,132.5 394.5,153 400.7,156 
    "
      />
      <path  ref={(path) => (pathsRef.current[210] = path)} className="st0" d="M301.5,65.2" />
      <path  ref={(path) => (pathsRef.current[211] = path)} className="st01" d="M301.2,0" />
      <path  ref={(path) => (pathsRef.current[212] = path)}
        className="st0"
        d="M301.2,0L301,65.8c0,0,0.2,0.6,1,1.1s0.5,0.6,1.4,0.6c0.9,0,1.1,0,1.7-0.4c0.6-0.4,0.9-0.5,1.2-1
  s-0.1-66-0.1-66"
      />
      <path  ref={(path) => (pathsRef.current[213] = path)}
        className="st0"
        d="M326.4,61.4c0.1,0.2,0.2,0.7,0.5,1.1c0.2,0.2,0.4,0.6,0.9,0.8c0.7,0.2,1.3-0.1,1.5-0.2
  c0.5-0.2,0.7-0.6,0.8-0.8"
      />
      <path  ref={(path) => (pathsRef.current[214] = path)}
        className="st01"
        d="M326.8,62l-0.3-29.1c0,0-0.2-0.5-0.8-0.9c-0.5-0.4-1.1-0.8-1.8-0.8s-0.7-0.1-1.4,0.6c-0.8,0.7-0.9,1-1.2,1.6
  c-0.2,0.6-0.2,2.8-0.2,2.8l0.3,25.9c0,0,0,0.6-0.6,1.1c-0.6,0.5-2.2,1-2.2,1s-1.1-0.1-1.8-0.6c-0.7-0.5-1.2-0.8-1.2-1.9
  c-0.1-1.2-0.2-44.2-0.2-44.2l3.1-2.4V0"
      />
      <path  ref={(path) => (pathsRef.current[215] = path)}
        className="st0"
        d="M347.6,0l0,11.1l17.1,11.3l0.4,40.7c0,0.1-0.2,1.3,0.5,2.1c0.6,0.6,1.4,0.7,2,0.7c0.6,0,1.5,0,2.1-0.6
  c0.7-0.6,0.8-1.8,0.4-2.8l-0.5-43.3c0-0.2-0.1-1.2,0.6-1.9c0.5-0.5,1.1-0.6,1.6-0.7c0.5-0.1,1.1-0.2,1.7,0.1c0.9,0.4,1,1.4,1.1,1.7
  c0.2,0.8-0.1,1.4-0.1,1.7V76"
      />
      <path  ref={(path) => (pathsRef.current[216] = path)} className="st01" d="M519.9,0" />
      <path  ref={(path) => (pathsRef.current[217] = path)}
        className="st0"
        d="M519.9,0c0,0-0.8,0.7-1,1.8c-0.2,1.1-0.2,1.6-0.2,2.4s0.2,1.3,0.7,1.8c0.4,0.4,0.8,0.8,1.2,1
  c0.4,0.2,1.3,0.6,1.3,0.6h92c0,0-0.1-0.1,1.2,0.5s1.8,1.2,2.2,2.1c0.4,0.9,0.8,2.1,0.7,3.4c-0.1,1.3-0.2,2-0.8,2.8
  c-0.7,0.8-1.2,1.5-2,1.8c-0.8,0.3-1.6,0.8-1.6,0.8s-113-1.3-114,0"
      />
      <path  ref={(path) => (pathsRef.current[218] = path)}
        className="st01"
        d="M500.1,18.8l-3.1,0.2c-1,0.4-1.8,1.1-2.4,1.8c-0.7,0.7-0.7,1.5-0.6,2.8c0.1,1.3,0.2,1.7,1.3,2.8
  c1.2,1.2,1.9,1.3,3.1,1.8c1.2,0.4,2.6,0.2,2.6,0.2c0.3,0,91,0,91,0"
      />
      <path  ref={(path) => (pathsRef.current[219] = path)}
        className="st0"
        d="M519.9,54.6c0.3-1,0.9-2.8,2.5-4.2c0.3-0.3,1.3-1.2,3.8-2.1c3-1.1,5.6-1.2,6-1.2c9-0.4,33.7-0.3,33.7-0.2l0,0
  c0.4,0,0.9,0.1,1.6,0.2c2.3,0.6,3.7,1.9,4.2,2.4c0.9,0.8,2.4,2.3,2.8,4.8c0.1,0.3,0.4,2.8-0.9,5.1c-0.3,0.6-0.8,1.1-1.8,2.2
  c-0.6,0.6-1.1,1.2-3,2.8c-1.9,1.7-2.5,2.2-3.9,3.5c-0.9,0.9-1.7,1.6-2.2,2l-1.2,2.2v32"
      />
      <path  ref={(path) => (pathsRef.current[220] = path)}
        className="st0"
        d="M540.3,79.5l-2.8-2.8l-5.8-0.2c-0.2,0.1-0.6,0.1-1.1,0c-0.7-0.2-1.5-0.7-1.7-1.6c-0.1-0.5,0.1-1,0.2-1.2
  c0.4-0.8,1.2-1.1,1.4-1.2l7.8,0.1c0.3,0.1,0.8,0.2,1.5,0c0.3-0.1,1.1-0.3,1.3-1c0.1-0.4,0-0.7-0.2-1.3c-0.2-0.5-0.3-0.8-0.6-1
  c-0.5-0.4-1.1-0.3-1.2-0.2l-16.3,0.2c-0.2,0-0.6,0-1.1-0.1c-0.4-0.1-1.2-0.3-1.4-0.9c-0.1-0.4,0.1-0.9,0.2-1.2c0.3-0.6,0.8-0.9,1-1
  l26.7-0.1c0.3,0,0.7,0,1.2,0.2c0.3,0.2,0.5,0.4,0.8,0.7c0.4,0.4,0.7,0.7,0.8,1.2c0.1,0.3,0.1,0.7,0.2,1.3c0,0.5,0,0.8,0,1.1
  l0.6,27.4l-4.8,3.6l-0.2,9.8l9.2,6.2l0.5,25.5c-0.1,0.2-0.3,0.6-0.7,0.9c-0.7,0.5-1.4,0.4-1.8,0.3c-0.6-0.1-1-0.3-1.2-0.5
  c0,0-0.6,0.4-0.5-2.1c0.1-2.5-0.2-21.4-0.2-21.4c0-0.3-0.1-0.8-0.5-1.2c-0.4-0.4-1-0.4-1.8-0.4c-0.8,0-1.5,0-2.2,0.4
  c0,0-0.8,0.5-1.2,1.8l0.4,28.3l-9.5,6.3"
      />
     
      <polyline  ref={(path) => (pathsRef.current[222] = path)}
        className="st0"
        points="808.8,125.3 809,120.5 817.8,114.8 818,88.7 943.5,0 	"
      />
      <polyline  ref={(path) => (pathsRef.current[223] = path)} className="st0" points="824.5,94.8 824.7,89.3 952.5,0 	" />
      <line  ref={(path) => (pathsRef.current[224] = path)} className="st01" x1="960" y1="1.5" x2="834.5" y2="89.2" />
      <line  ref={(path) => (pathsRef.current[225] = path)} className="st0" x1="800.5" y1="113" x2="800.5" y2="162" />
      <path  ref={(path) => (pathsRef.current[226] = path)}
        className="st0"
        d="M685.8,156.8c1.2,0,8.7,0.3,8.7,0.3s0.3-0.2,1.2,0.3c0.8,0.5,1.2,0.3,1.3,2s0.2,9,0.2,9c0.2,0.2,0.5,0.7,1.2,1
  c0.1,0.1,0.9,0.4,1.8,0.3c1.1-0.1,1.7-0.7,2.2-1c0.6-0.5,1-1,1.2-1.3l-0.3-11.2l0.8-1.2l0,0l0,0l0,0l0,0l0,0c0.2-0.3,0.8-0.8,1.7-1
  c1-0.2,1.9,0.4,2.4,0.7c0.7,0.4,1.4,1,1.4,1.3v7.8c0,0.8,0.5,1.2,0.8,1.3c0,0,0.2,0.2,1.6,0.3l0,0l0,0c0.1,0,1,0.1,1.6-0.7
  c0.6-0.7,0.3-1.6,0.3-1.7l-0.7-23.2c0-0.1,0.1-1.6,1.2-2.2c0.6-0.3,1.2-0.2,1.7-0.2c0.4,0.1,1.3,0.2,2,1c0.7,0.8,0.8,1.7,0.8,2
  l-0.3,24.5c0,0.1-0.3,1,0.2,1.7c0.4,0.5,1.1,0.5,1.7,0.5c0,0,0.6,0,2.3-0.5l0,0c0.3-0.6,0.6-1.1,0.8-1.7l-0.2-119.2l9.2-6.5
  l14.8-0.2L803.7,0"
      />
      <polyline  ref={(path) => (pathsRef.current[227] = path)}
        className="st0"
        points="637.4,0.2 636.9,19.8 631.7,22.7 631.8,86.9 638,91.5 660.8,91.3 666.7,95.8 666.8,101.3 
  662.8,104.7 663.3,135.7 653.5,142.5 653.5,160 683.8,180.5 709,180.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[228] = path)}
        className="st0"
        points="893,185.5 888,185.5 884.8,188 849.8,187.8 795.5,225.8 	"
      />
      <polyline  ref={(path) => (pathsRef.current[229] = path)}
        className="st01"
        points="803.7,493.3 790.7,493.2 782,499.3 781.7,507.5 804.2,523.7 847.8,522.8 895.8,556.3 960,556.2 	"
      />
      <path  ref={(path) => (pathsRef.current[230] = path)}
        className="st0"
        d="M791.7,526.5l7.5,5.3l38,0.2c0,0,16.3,10.7,16.3,11.3c0,0.7,0.3,16.7,0.3,16.7"
      />
      <path  ref={(path) => (pathsRef.current[231] = path)}
        className="st0"
        d="M258.8,316.8l-61.5-0.2L61.3,412L10,412.7c-0.3-0.1-1.4-0.3-2.5,0.5c-0.2,0.1-1.3,0.9-1.2,2
  c0.2,1.2,1.8,1.6,2,1.7c0.8,0.2,1.5,0.1,1.8,0l42.8-0.2c0.1,0,0.9-0.3,1.5,0.2c0.8,0.6,0.7,1.7,0.7,1.8c-0.1,0.9-0.8,1.4-1,1.5
  c-0.8,0.5-1.8,0.5-2.7,0L28,419.8c-0.3,0.1-1.1,0.3-1.7,1c-0.2,0.2-0.8,1.3-0.5,1.9c0.3,0.5,1.1,0.8,2,0.8h17.3
  c0.1,0,0.9,0.1,1.2,0.9c0.2,0.9-0.5,1.5-0.7,1.7c-0.9,0.9-2.1,0.8-2.3,0.8l-20.7-0.2l-3.5-2.3l-0.5-2.8l-2.7-2H0"
      />
      <path  ref={(path) => (pathsRef.current[232] = path)}
        className="st01"
        d="M-0.2,390.8l12.1,0.4L28.6,379l28.9-0.2c0.1,0,1,0,1.5,0.7c0.6,0.7,0.6,1.6,0.2,2.3c-0.4,0.7-1.3,1.1-2.2,1
  l-23.3-0.2l-1.3,0.7l0,0c-0.5,0.4-0.7,1.1-0.5,1.7c0.3,0.7,1.3,1.1,2.2,0.7l25-0.2c0.1,0,0.9,0.1,1.3,0.8c0,0,0.6,0.9,0.2,1.8
  c-0.3,0.7-1.2,1.1-2,1L33.7,389c-0.1,0-1.2,0.1-1.7,1.2c0,0.1-0.4,0.9,0,1.7c0.4,0.8,1.4,1.2,2.5,1l42.3,0.2l118.3-83.7l51.8,0.1
  l4.2-2.9H272l2.7-1.3"
      />
      <path  ref={(path) => (pathsRef.current[233] = path)}
        className="st0"
        d="M290.3,307c0,0-5,4-5.5,4s-30.7-0.3-30.7-0.3l-4,3l-54.8-0.7L77.7,396.2L30,395.8c-0.1,0-0.9,0-1.5,0.7
  c-0.4,0.5-0.7,1.3-0.3,2c0.4,0.8,1.5,1.1,2.5,0.7l34.7-0.2c0.2-0.1,0.9-0.2,1.7,0.2c0.8,0.4,1.3,1.3,1.2,2.2
  c-0.2,1.3-2,1.8-2.3,1.8c-0.7,0.2-1.3,0.1-1.7,0L27,402.5l-1.8,0.5l0,0c-0.6,0.4-0.9,1-0.8,1.5c0.1,0.7,1.2,0.8,2.7,1
  c1,0.2,32.2-0.2,32.2-0.2c0.9-0.1,1.8,0.3,2.2,1c0.5,0.9,0,1.7,0,1.8c-0.4,0.9-1.4,1.1-2.2,1.3c-0.7,0.2-1.3,0.2-1.7,0.2L0,409.3"
      />
      <path  ref={(path) => (pathsRef.current[234] = path)}
        className="st0"
        d="M275.6,329.7c-0.7,0.3-12.2,8.8-12.2,8.8s-10.4-0.7-10.9,0.1c-0.5,0.8-16.7,12.8-16.7,12.8l-26.2,0l-17.5,13.2
  H188"
      />
      <path  ref={(path) => (pathsRef.current[235] = path)}
        className="st01"
        d="M188.3,371.8c1-1.2,23.5-16.8,23.5-16.8l24.7-0.3l18-12.5l18,0.2l2.7-2.2"
      />
      <polyline  ref={(path) => (pathsRef.current[236] = path)}
        className="st0"
        points="274.7,349.5 269.7,345.5 257,345.5 239.2,358.2 214.7,358.5 201.5,368 201.5,376 193.5,381.7 
  186,381.5 	"
      />
      <path  ref={(path) => (pathsRef.current[237] = path)} className="st0" d="M184.3,391" />
      <path  ref={(path) => (pathsRef.current[238] = path)}
        className="st01"
        d="M184.3,390.3l-2.7,2l-0.2,13.7c-0.1,0.2-0.4,1.1,0,2c0.6,1.1,1.9,1.3,2.3,1.3c0.2,0,1.6,0.2,2.7-0.8
  c1-0.9,1.1-2.1,1-2.3c-0.5-1,0-10,0-10c0-0.3,0.2-1,0.8-1.7c0.2-0.2,0.8-0.8,1.8-0.8c0.9,0,2,0.5,2.3,1.5c0.3,0.7,0.1,1.4,0,1.7
  l0.2,3.7l0.3,2.7l0,0c0.1,0.1,0.8,0.8,1.8,0.8c1,0,1.6-0.6,1.8-0.8c0.9-0.9,1.2-2.1,1-2.3c-0.3-0.3-0.5-14.2-0.5-14.2
  c0-0.1-0.2-1.3,0.7-2c0.8-0.8,2-0.4,2.3-0.3c0.2,0.1,1.3,0.4,1.8,1.5c0.5,1,0.1,2,0,2.2l-0.2,8.3c0.1,0.2,0.4,1.1,1.3,1.3
  c0.7,0.2,1.2-0.1,1.8-0.3c0.5-0.2,1.1-0.5,1.5-1.2c0.6-0.9,0.4-1.9,0.3-2.2c-0.2-0.5,0-25.3,0-25.3l10.3-7.5l28-0.2l13.5-9.5"
      />
      <path  ref={(path) => (pathsRef.current[239] = path)}
        className="st0"
        d="M243.7,330c-0.7,0.7-12.5,8.7-12.5,8.7l-28.7-0.7L175,358.2l-0.5,41.5l-38.3,26.5c-0.1,0.1-0.8,0.8-0.7,1.7
  c0.2,1,1.3,1.4,1.5,1.5l3.2-0.3l26-18.8c0.3-0.3,1.5-1.1,3-1c0.4,0,1.4,0.1,2.3,0.8c0.2,0.2,1.2,1,1.2,2.2c0,1.2-0.9,2.4-2.3,2.8
  l-29.5,20.3L69.3,435l-40.7,28.3l0.2,21.2l-5,4.3L0,489"
      />
      <path  ref={(path) => (pathsRef.current[240] = path)}
        className="st01"
        d="M215.9,328.6l-4,3.1l-14,0.1l-32.3,22.8l-0.2,10.5l-44.8,31c-0.8,0.2-1.5,0.8-1.7,1.5c-0.3,1,0.5,1.8,0.7,2
  c1.1,1.2,3.1,0.7,3.3,0.7c1.2-0.3,2-1.1,2.3-1.5l31.7-22.3c0.1-0.1,1-1.1,2.3-0.8c0.8,0.1,1.8,0.7,1.8,1.5c0,0.2,0,0.7-2.3,2.7
  c-0.7,0.6-1.2,1-1.7,1.3l-54.5,38.2c-1,0.5-1.5,1.4-1.3,2.2c0.2,1.1,1.8,1.3,2,1.3c1,0.2,1.9-0.3,2.7-0.7c0.7-0.3,1.2-0.7,1.5-1
  l17.2-12.2c0.2-0.2,1.1-0.9,2.3-0.8c0.3,0,1.4,0.1,2,1c0.5,0.9,0.2,1.8,0.2,2c-0.4,1.2-1.5,1.8-1.7,1.8l-22.2,15.5H64l-47.8,34H0"
      />
      <path  ref={(path) => (pathsRef.current[241] = path)}
        className="st0"
        d="M0,443.3l35.2,0.2l25.7-18.2l24.7-0.2l27.8-19.3c1.2-0.9,1.8-1.9,1.5-2.3c-0.3-0.5-1.5-0.2-1.7-0.2l0,0l0,0
  l0,0l-2,0.7l-19.5,14c-0.3,0.3-1.5,1.3-3.2,1.2c-0.3,0-2.4-0.2-2.7-1.5c-0.2-0.7,0.3-1.6,1.2-2.2"
      />
      <path  ref={(path) => (pathsRef.current[242] = path)}
        className="st0"
        d="M0,435.2l40.8,0.3l19.7-14.2l9-0.2L107,395c0.1-0.1,0.8-0.9,0.7-2c0-0.2-0.1-1.2-1-1.7
  c-0.7-0.4-1.6-0.3-2.3,0.2l-31.8,22.8c-0.2,0.2-1.4,1.3-3,1.2c-0.4,0-1.9-0.2-2.3-1.3c-0.4-1.1,0.4-2.1,0.5-2.2l131.8-92l50-0.3
  l4.5,3.2l15.7-0.3l5.5-3.7"
      />
      <polyline  ref={(path) => (pathsRef.current[243] = path)}
        className="st01"
        points="960,335 896.7,335.3 856.2,364 812.2,364.3 	"
      />
      <polyline  ref={(path) => (pathsRef.current[244] = path)}
        className="st0"
        points="755.8,371 751.5,368.3 751.5,363 758.5,359.5 787,359.5 801.5,369.5 857,369.5 901.7,338 960,337.7 	
  "
      />
      <polyline  ref={(path) => (pathsRef.current[245] = path)}
        className="st01"
        points="960,340.7 906.7,340.5 858.5,374.8 793.7,374.3 789.8,371.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[246] = path)}
        className="st0"
        points="686,323.7 689.9,321 717,321.4 730.8,311.5 934,311.5 947.8,321.5 960,321.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[247] = path)}
        className="st01"
        points="666.7,334 677.6,326.3 677.7,318.6 672.4,315.7 672.7,311.4 677,308.5 938,308.5 941.5,305.5 
  952,305.5 956.5,309 960,308.8 	"
      />
      <polyline  ref={(path) => (pathsRef.current[248] = path)}
        className="st0"
        points="653.8,288.7 657.7,285.5 680,285.5 700.3,299.5 950,300.2 960,306.7 	"
      />
      <polyline  ref={(path) => (pathsRef.current[249] = path)} className="st0" points="726.8,296.2 955.3,296.3 960,299.2 	" />
      <polyline  ref={(path) => (pathsRef.current[250] = path)}
        className="st01"
        points="705.2,276.6 713.3,282.2 936.7,282.5 943.8,275.5 960,275.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[251] = path)}
        className="st0"
        points="798.7,277.9 931.5,277.9 939,270.5 960,270.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[252] = path)}
        className="st0"
        points="768.8,276.3 771.5,274.5 775,274.5 853.8,218.5 925.3,218.5 943.7,205.5 954,205.5 960,209.5 	"
      />
      <polyline  ref={(path) => (pathsRef.current[253] = path)}
        className="st0"
        points="322.1,149.1 315.5,153.8 316,171.3 309.9,176.4 305.9,176.1 302.4,179.3 302.1,185.9 297.1,189.8 
  290,190.4 267.1,174 235.2,173.8 217.4,161.6 33.8,161.5 29,161.5 15.8,171 0,171.2 	"
      />
      <line  ref={(path) => (pathsRef.current[254] = path)} className="st0" x1="960" y1="235" x2="867" y2="235.5" />
      <polyline  ref={(path) => (pathsRef.current[255] = path)}
        className="st0"
        points="960,259.5 877,259.5 868,266.5 851,266.5 	"
      />{" "}
    
    </g>
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  <text x="50%" y="40%" textAnchor="middle" fontSize="40" fill="black" fontWeight="300">
    Basic
  </text>
  <text x="49%" y="52%" textAnchor="middle" fontSize="40" fill="black" fontWeight="300">
    Electronics
  </text>
  <text x="49%" y="64%" textAnchor="middle" fontSize="40" fill="black" fontWeight="300">
    Lab
  </text>
</svg>

   <g id="Circles">
      <circle className="st1" cx="229.5" cy="196" r="2.8" />
      <circle className="st1" cx="235" cy="142" r="2.8" />
      <circle className="st1" cx="279" cy="126.5" r="2.8" />
      <circle className="st1" cx="292.3" cy="126" r="2.8" />

      <circle className="st1" cx="306.7" cy="148.5" r="2.8" />

      <circle className="st1" cx="325.5" cy="148" r="2.8" />
      <circle className="st1" cx="230" cy="180" r="2.8" />
      <circle className="st1" cx="152.2" cy="176.5" r="2.8" />
      <circle className="st1" cx="91.5" cy="179" r="2.8" />
      <circle className="st1" cx="145.3" cy="185" r="2.8" />

      <circle className="st1" cx="162" cy="186.5" r="2.8" />
      <circle className="st1" cx="157" cy="194.5" r="2.8" />
      <circle className="st1" cx="211" cy="195.5" r="2.8" />
      <circle className="st1" cx="122.5" cy="245.5" r="2.8" />
      <circle className="st1" cx="81.5" cy="286" r="2.8" />

      <circle className="st1" cx="97.5" cy="246.5" r="2.8" />
      <circle className="st1" cx="83.5" cy="246.3" r="2.8" />
      <circle className="st1" cx="69" cy="247" r="2.8" />
      <circle className="st1" cx="60" cy="249" r="2.8" />
      <circle className="st1" cx="152" cy="328.5" r="2.8" />
      <circle className="st1" cx="145" cy="335" r="2.8" />
      <circle className="st1" cx="200" cy="292" r="2.8" />
      <circle className="st1" cx="175.5" cy="297" r="2.8" />
      <circle className="st1" cx="296" cy="294" r="2.8" />
      <circle className="st1" cx="258" cy="264" r="2.8" />

      <circle className="st1" cx="218" cy="266.5" r="2.8" />
      <circle className="st1" cx="294.5" cy="270.5" r="2.8" />
      <circle className="st1" cx="293.7" cy="260.5" r="2.8" />
      <circle className="st1" cx="295" cy="250.5" r="2.8" />
      <circle className="st1" cx="278" cy="240" r="2.8" />
      <circle className="st1" cx="277" cy="251" r="2.8" />
      <circle className="st1" cx="228.5" cy="245.5" r="2.8" />
      <circle className="st1" cx="294" cy="239.5" r="2.8" />
      <circle className="st1" cx="281" cy="192.5" r="2.8" />
      <circle className="st1" cx="293.5" cy="227" r="2.8" />
      <circle className="st1" cx="295" cy="217.5" r="2.8" />
      <circle className="st1" cx="277" cy="215" r="2.8" />
      <circle className="st1" cx="292.5" cy="205.5" r="2.8" />
      <circle className="st1" cx="279" cy="206" r="2.8" />
      <circle className="st1" cx="292.5" cy="304.5" r="2.8" />
      <circle className="st1" cx="277.3" cy="304.5" r="2.8" />
      <circle className="st1" cx="12.5" cy="400" r="2.8" />
      <circle className="st1" cx="90.3" cy="322.5" r="2.8" />
      <circle className="st1" cx="86.7" cy="317" r="2.8" />
      <circle className="st1" cx="98.5" cy="337.5" r="2.8" />
      <circle className="st1" cx="116.5" cy="345.5" r="2.8" />
      <circle className="st1" cx="58.8" cy="328" r="2.8" />
      <circle className="st1" cx="16" cy="343" r="2.8" />
      <circle className="st1" cx="9" cy="326.5" r="2.8" />
      <circle className="st1" cx="52" cy="320" r="2.8" />
      <circle className="st1" cx="94" cy="300.5" r="2.8" />
      <circle className="st1" cx="84" cy="299.5" r="2.8" />
      <circle className="st1" cx="125.5" cy="301.5" r="2.8" />
      <circle className="st1" cx="177.5" cy="259.5" r="2.8" />
      <circle className="st1" cx="125.5" cy="288" r="2.8" />
      <circle className="st1" cx="135" cy="246.5" r="2.8" />
      <circle className="st1" cx="163.2" cy="470.2" r="2.8" />
      <circle className="st1" cx="101" cy="513" r="2.8" />
      <circle className="st1" cx="138.5" cy="477.3" r="2.8" />
      <circle className="st1" cx="55.5" cy="528" r="2.8" />
      <circle className="st1" cx="81.5" cy="525" r="2.8" />
      <ellipse
        transform="matrix(0.905 -0.4254 0.4254 0.905 -197.1245 91.2273)"
        className="st1"
        cx="105.7"
        cy="487"
        rx="2.8"
        ry="2.8"
      />
      <circle className="st1" cx="82.5" cy="498" r="2.8" />
      <circle className="st1" cx="135" cy="470" r="2.8" />
      <circle className="st1" cx="82" cy="491.8" r="2.8" />
      <circle className="st1" cx="108" cy="471.5" r="2.8" />
      <circle className="st1" cx="230" cy="440.5" r="2.8" />
      <circle className="st1" cx="258.2" cy="418.5" r="2.8" />
      <circle className="st1" cx="278" cy="406.8" r="2.8" />
      <circle className="st1" cx="276.7" cy="372" r="2.8" />
      <circle className="st1" cx="262" cy="384" r="2.8" />
      <circle className="st1" cx="227.5" cy="393" r="2.8" />
      <circle className="st1" cx="219.5" cy="375" r="2.8" />
      <circle className="st1" cx="277.2" cy="364" r="2.8" />
      <circle className="st1" cx="187.2" cy="389.2" r="2.8" />
      <circle className="st1" cx="261" cy="350" r="2.8" />
      <circle className="st1" cx="276.5" cy="351" r="2.8" />
      <circle className="st1" cx="183.5" cy="382" r="2.8" />
      <circle className="st1" cx="187" cy="374" r="2.8" />
      <circle className="st1" cx="186" cy="364" r="2.8" />
      <circle className="st1" cx="193" cy="355.5" r="2.8" />
      <circle className="st1" cx="227.8" cy="345.5" r="2.8" />
      <circle className="st1" cx="208" cy="324.5" r="2.8" />
      <circle className="st1" cx="218" cy="326.5" r="2.8" />
      <circle className="st1" cx="230.5" cy="327.5" r="2.8" />
      <circle className="st1" cx="246" cy="328" r="2.8" />
      <circle className="st1" cx="278.5" cy="338.5" r="2.8" />
      <circle className="st1" cx="278.5" cy="328.3" r="2.8" />
      <circle className="st1" cx="277.5" cy="317" r="2.8" />
      <circle className="st1" cx="261.5" cy="316.5" r="2.8" />
      <circle className="st1" cx="96" cy="187" r="2.8" />
      <circle className="st1" cx="374" cy="398" r="2.8" />
      <circle className="st1" cx="375" cy="410.3" r="2.8" />
      <circle className="st1" cx="364.7" cy="399.5" r="2.8" />
      <circle className="st1" cx="327" cy="538" r="2.8" />
      <circle className="st1" cx="338.2" cy="525.5" r="2.8" />
      <circle className="st1" cx="305.7" cy="553.5" r="2.8" />
      <circle className="st1" cx="286.8" cy="553" r="2.8" />
      <circle className="st1" cx="273" cy="547.5" r="2.8" />
      <circle className="st1" cx="360.5" cy="421.3" r="2.8" />
      <circle className="st1" cx="356" cy="407" r="2.8" />
      <circle className="st1" cx="343" cy="408.5" r="2.8" />
      <circle className="st1" cx="323.5" cy="432.3" r="2.8" />
      <circle className="st1" cx="326" cy="419.8" r="2.8" />
      <circle className="st1" cx="325.8" cy="408.2" r="2.8" />
      <circle className="st1" cx="294" cy="421" r="2.8" />
      <circle className="st1" cx="276" cy="426" r="2.8" />
      <circle className="st1" cx="261.5" cy="432.5" r="2.8" />
      <circle className="st1" cx="208" cy="491" r="2.8" />
      <circle className="st1" cx="262.8" cy="452.2" r="2.8" />
      <circle className="st1" cx="98" cy="523" r="2.8" />
      <circle className="st1" cx="525.8" cy="452" r="2.8" />
      <circle className="st1" cx="514.7" cy="420.5" r="2.8" />
      <circle className="st1" cx="492" cy="382.7" r="2.8" />
      <circle className="st1" cx="568.5" cy="538.3" r="2.8" />
      <circle className="st1" cx="536" cy="533" r="2.8" />
      <circle className="st1" cx="485.7" cy="398.5" r="2.8" />
      <circle className="st1" cx="485.5" cy="419" r="2.8" />
      <circle className="st1" cx="487.5" cy="407.8" r="2.8" />
      <circle className="st1" cx="459" cy="554" r="2.8" />
      <circle className="st1" cx="465.5" cy="435.5" r="2.8" />
      <circle className="st1" cx="418.8" cy="553.8" r="2.8" />
      <circle className="st1" cx="414" cy="544.3" r="2.8" />
      <circle className="st1" cx="440.2" cy="397.2" r="2.8" />
      <circle className="st1" cx="437.5" cy="409" r="2.8" />
      <circle className="st1" cx="437" cy="418.8" r="2.8" />
      <circle className="st1" cx="422" cy="423" r="2.8" />
      <circle className="st1" cx="422.3" cy="409.5" r="2.8" />
      <circle className="st1" cx="408.5" cy="410" r="2.8" />
      <circle className="st1" cx="407.5" cy="398" r="2.8" />
      <circle className="st1" cx="393.5" cy="398.5" r="2.8" />
      <circle className="st1" cx="831" cy="513" r="2.8" />
      <circle className="st1" cx="793" cy="501.5" r="2.8" />
      <circle className="st1" cx="790.8" cy="524.2" r="2.8" />
      <circle className="st1" cx="767" cy="494" r="2.8" />
      <circle className="st1" cx="760.5" cy="498.7" r="2.8" />
      <circle className="st1" cx="749" cy="493.2" r="2.8" />
      <circle className="st1" cx="708" cy="535.2" r="2.8" />
      <circle className="st1" cx="582.5" cy="431.2" r="2.8" />
      <circle className="st1" cx="614.8" cy="418.5" r="2.8" />
      <circle className="st1" cx="612.5" cy="407.2" r="2.8" />
      <circle className="st1" cx="584.5" cy="408" r="2.8" />
      <circle className="st1" cx="568" cy="410.7" r="2.8" />
      <circle className="st1" cx="608.5" cy="456.5" r="2.8" />
      <circle className="st1" cx="583" cy="452.5" r="2.8" />
      <circle className="st1" cx="577.5" cy="509.5" r="2.8" />
      <circle className="st1" cx="567.5" cy="428.5" r="2.8" />
      <circle className="st1" cx="561.5" cy="418.5" r="2.8" />
      <circle className="st1" cx="552.7" cy="430" r="2.8" />
      <circle className="st1" cx="535.5" cy="408.5" r="2.8" />
      <circle className="st1" cx="534.5" cy="440" r="2.8" />
      <circle className="st1" cx="667.5" cy="386" r="2.8" />
      <circle className="st1" cx="679.5" cy="397" r="2.8" />
      <circle className="st1" cx="713.8" cy="388.5" r="2.8" />
      <circle className="st1" cx="697" cy="396.5" r="2.8" />
      <circle className="st1" cx="724.3" cy="404" r="2.8" />
      <circle className="st1" cx="699.7" cy="408.5" r="2.8" />
      <circle className="st1" cx="682.3" cy="407.5" r="2.8" />
      <circle className="st1" cx="665.5" cy="407.3" r="2.8" />
      <circle className="st1" cx="746.5" cy="424.5" r="2.8" />
      <circle className="st1" cx="762" cy="420" r="2.8" />
      <circle className="st1" cx="859.5" cy="444.5" r="2.8" />
      <circle className="st1" cx="853.8" cy="435.5" r="2.8" />
      <circle className="st1" cx="873.3" cy="443" r="2.8" />
      <circle className="st1" cx="800" cy="472" r="2.8" />
      <circle className="st1" cx="652" cy="419.5" r="2.8" />
      <circle className="st1" cx="665.3" cy="430.5" r="2.8" />
      <circle className="st1" cx="678.5" cy="433.5" r="2.8" />
      <circle className="st1" cx="649.8" cy="432.5" r="2.8" />
      <circle className="st1" cx="806.3" cy="493.5" r="2.8" />
      <circle className="st1" cx="633.5" cy="420.5" r="2.8" />
      <circle className="st1" cx="765.5" cy="346" r="2.8" />
      <circle className="st1" cx="786.5" cy="343.5" r="2.8" />
      <circle className="st1" cx="926.7" cy="331.5" r="2.8" />
      <circle className="st1" cx="905.2" cy="330.2" r="2.8" />
      <circle className="st1" cx="862" cy="349.8" r="2.8" />
      <circle className="st1" cx="871" cy="343.5" r="2.8" />
      <circle className="st1" cx="809.5" cy="364.5" r="2.8" />
      <circle className="st1" cx="848.8" cy="356" r="2.8" />
      <circle className="st1" cx="654.5" cy="359.8" r="2.8" />
      <circle className="st1" cx="916" cy="370" r="2.8" />
      <circle className="st1" cx="894.8" cy="366" r="2.8" />
      <circle className="st1" cx="917.8" cy="358" r="2.8" />
      <circle className="st1" cx="943.5" cy="365" r="2.8" />
      <circle className="st1" cx="883.5" cy="371.5" r="2.8" />
      <circle className="st1" cx="876.5" cy="378.5" r="2.8" />
      <circle className="st1" cx="697.5" cy="371.5" r="2.8" />
      <circle className="st1" cx="736.2" cy="377.2" r="2.8" />
      <circle className="st1" cx="788.5" cy="370" r="2.8" />
      <circle className="st1" cx="758.8" cy="373" r="2.8" />
      <circle className="st1" cx="661.5" cy="377" r="2.8" />
      <circle className="st1" cx="802" cy="268" r="2.8" />
      <circle className="st1" cx="922" cy="272.5" r="2.8" />
      <circle className="st1" cx="796.3" cy="277.5" r="2.8" />
      <circle className="st1" cx="703.5" cy="275" r="2.8" />
      <circle className="st1" cx="668.5" cy="279" r="2.8" />
      <circle className="st1" cx="682.5" cy="281.5" r="2.8" />
      <circle className="st1" cx="724.5" cy="296" r="2.8" />
      <circle className="st1" cx="653.5" cy="291.5" r="2.8" />
      <circle className="st1" cx="652.5" cy="304.5" r="2.8" />
      <circle className="st1" cx="932" cy="304.5" r="2.8" />
      <circle className="st1" cx="665" cy="336" r="2.8" />
      <circle className="st1" cx="648.5" cy="331" r="2.8" />
      <circle className="st1" cx="684" cy="325.5" r="2.8" />
      <circle className="st1" cx="729.5" cy="334" r="2.8" />
      <circle className="st1" cx="750.5" cy="327" r="2.8" />
      <circle className="st1" cx="759" cy="332" r="2.8" />
      <circle className="st1" cx="770" cy="332" r="2.8" />
      <circle className="st1" cx="878.7" cy="331.5" r="2.8" />
      <circle className="st1" cx="740.5" cy="344.5" r="2.8" />
      <circle className="st1" cx="665" cy="353" r="2.8" />
      <circle className="st1" cx="438" cy="158" r="2.8" />
      <circle className="st1" cx="406" cy="146" r="2.8" />
      <circle className="st1" cx="406" cy="125" r="2.8" />
      <circle className="st1" cx="403.5" cy="157" r="2.8" />
      <circle className="st1" cx="388" cy="136.5" r="2.8" />
      <circle className="st1" cx="386" cy="145.5" r="2.8" />
      <circle className="st1" cx="386" cy="158" r="2.8" />
      <circle className="st1" cx="371" cy="157.5" r="2.8" />
      <circle className="st1" cx="356" cy="138" r="2.8" />
      <circle className="st1" cx="355.5" cy="147.5" r="2.8" />
      <circle className="st1" cx="115" cy="60.2" r="2.8" />
      <circle className="st1" cx="233" cy="61.5" r="2.8" />
      <circle className="st1" cx="330" cy="112" r="2.8" />
      <circle className="st1" cx="242.5" cy="90.5" r="2.8" />
      <circle className="st1" cx="256" cy="74" r="2.8" />
      <circle className="st1" cx="217.5" cy="97" r="2.8" />
      <circle className="st1" cx="203.5" cy="97.5" r="2.8" />
      <circle className="st1" cx="192.5" cy="104" r="2.8" />
      <circle className="st1" cx="204" cy="128.5" r="2.8" />
      <circle className="st1" cx="220.5" cy="120.5" r="2.8" />
      <circle className="st1" cx="435" cy="146" r="2.8" />
      <circle className="st1" cx="423" cy="147.5" r="2.8" />
      <circle className="st1" cx="375" cy="79" r="2.8" />
      <circle className="st1" cx="367" cy="70" r="2.8" />
      <circle className="st1" cx="378" cy="85" r="2.8" />
      <circle className="st1" cx="388" cy="93" r="2.8" />
      <circle className="st1" cx="9.5" cy="8.5" r="2.8" />
      <circle className="st1" cx="9" cy="18.5" r="2.8" />
      <circle className="st1" cx="315.5" cy="91" r="2.8" />
      <circle className="st1" cx="315.5" cy="98" r="2.8" />
      <circle className="st1" cx="324.5" cy="106" r="2.8" />
      <circle className="st1" cx="8.5" cy="31" r="2.8" />
      <circle className="st1" cx="181.5" cy="5.5" r="2.8" />
      <circle className="st1" cx="80.5" cy="39" r="2.8" />
      <circle className="st1" cx="57.5" cy="54" r="2.8" />
      <circle className="st1" cx="69.5" cy="61.5" r="2.8" />
      <circle className="st1" cx="240.5" cy="54" r="2.8" />
      <circle className="st1" cx="155" cy="39" r="2.8" />
      <circle className="st1" cx="130.5" cy="50.5" r="2.8" />
      <circle className="st1" cx="131.5" cy="65" r="2.8" />
      <circle className="st1" cx="531" cy="94.5" r="2.8" />
      <circle className="st1" cx="531.5" cy="106.5" r="2.8" />
      <circle className="st1" cx="517.5" cy="159.5" r="2.8" />
      <circle className="st1" cx="505.5" cy="80" r="2.8" />
      <circle className="st1" cx="513" cy="99" r="2.8" />
      <circle className="st1" cx="501.8" cy="134.5" r="2.8" />
      <circle className="st1" cx="496" cy="70.5" r="2.8" />
      <circle className="st1" cx="485" cy="162.5" r="2.8" />
      <circle className="st1" cx="470.5" cy="148" r="2.8" />
      <circle className="st1" cx="448" cy="69.5" r="2.8" />
      <circle className="st1" cx="430.5" cy="68" r="2.8" />
      <circle className="st1" cx="440.5" cy="91.5" r="2.8" />
      <circle className="st1" cx="470" cy="136" r="2.8" />
      <circle className="st1" cx="453" cy="157.5" r="2.8" />
      <circle className="st1" cx="450.5" cy="148" r="2.8" />
      <circle className="st1" cx="433" cy="110" r="2.8" />
      <circle className="st1" cx="423.5" cy="103" r="2.8" />
      <circle className="st1" cx="419.5" cy="111" r="2.8" />
      <circle className="st1" cx="409" cy="63.5" r="2.8" />
      <circle className="st1" cx="420" cy="52" r="2.8" />
      <circle className="st1" cx="675.5" cy="215" r="2.8" />
      <circle className="st1" cx="664.5" cy="212.5" r="2.8" />
      <circle className="st1" cx="662.3" cy="203" r="2.8" />
      <circle className="st1" cx="695.5" cy="108.5" r="2.8" />
      <circle className="st1" cx="692.5" cy="98" r="2.8" />
      <circle className="st1" cx="678.5" cy="122" r="2.8" />
      <circle className="st1" cx="676.5" cy="110" r="2.8" />
      <circle className="st1" cx="683.5" cy="157.5" r="2.8" />
      <circle className="st1" cx="698.5" cy="146.5" r="2.8" />
      <circle className="st1" cx="701" cy="135" r="2.8" />
      <circle className="st1" cx="712" cy="180.5" r="2.8" />
      <circle className="st1" cx="678.5" cy="146.5" r="2.8" />
      <circle className="st1" cx="563" cy="122" r="2.8" />
      <circle className="st1" cx="458.5" cy="107.5" r="2.8" />
      <circle className="st1" cx="542" cy="82.5" r="2.8" />
      <circle className="st1" cx="611.5" cy="28.5" r="2.8" />
      <circle className="st1" cx="595" cy="28.5" r="2.8" />
      <circle className="st1" cx="490" cy="8" r="2.8" />
      <circle className="st1" cx="520.5" cy="57.5" r="2.8" />
      <circle className="st1" cx="561.5" cy="107" r="2.8" />
      <circle className="st1" cx="650.5" cy="108" r="2.8" />
      <circle className="st1" cx="659" cy="100" r="2.8" />
      <circle className="st1" cx="631" cy="146.5" r="2.8" />
      <circle className="st1" cx="596" cy="143.5" r="2.8" />
      <circle className="st1" cx="582" cy="157.5" r="2.8" />
      <circle className="st1" cx="549" cy="156.5" r="2.8" />
      <circle className="st1" cx="535.5" cy="157" r="2.8" />
      <circle className="st1" cx="604" cy="109.5" r="2.8" />
      <circle className="st1" cx="613.8" cy="167.5" r="2.8" />
      <circle className="st1" cx="531.5" cy="148.5" r="2.8" />
      <circle className="st1" cx="832.5" cy="91" r="2.8" />
      <circle className="st1" cx="824.5" cy="97.5" r="2.8" />
      <circle className="st1" cx="809" cy="128" r="2.8" />
      <circle className="st1" cx="811.8" cy="114" r="2.8" />
      <circle className="st1" cx="800.5" cy="111" r="2.8" />
      <circle className="st1" cx="801" cy="165" r="2.8" />
      <circle className="st1" cx="807.5" cy="102" r="2.8" />
      <circle className="st1" cx="802" cy="96" r="2.8" />
      <circle className="st1" cx="777" cy="78" r="2.8" />
      <circle className="st1" cx="801.5" cy="59" r="2.8" />
      <circle className="st1" cx="776.5" cy="70" r="2.8" />
      <circle className="st1" cx="762.5" cy="84.5" r="2.8" />
      <circle className="st1" cx="780.5" cy="113.5" r="2.8" />
      <circle className="st1" cx="803" cy="174.5" r="2.8" />
      <circle className="st1" cx="696" cy="225.7" r="2.8" />
      <circle className="st1" cx="696.5" cy="215.5" r="2.8" />
      <circle className="st1" cx="713.5" cy="214.2" r="2.8" />
      <circle className="st1" cx="728.5" cy="224" r="2.8" />
      <circle className="st1" cx="777.5" cy="198.5" r="2.8" />
      <circle className="st1" cx="926.2" cy="200" r="2.8" />
      <circle className="st1" cx="791.5" cy="241.5" r="2.8" />
      <circle className="st1" cx="764.5" cy="250" r="2.8" />
      <circle className="st1" cx="795" cy="229" r="2.8" />
      <circle className="st1" cx="844.5" cy="198" r="2.8" />
      <circle className="st1" cx="917" cy="188.5" r="2.8" />
      <circle className="st1" cx="896" cy="186.5" r="2.8" />
      <circle className="st1" cx="889" cy="166" r="2.8" />
      <circle className="st1" cx="833.5" cy="110" r="2.8" />
      <circle className="st1" cx="842" cy="105" r="2.8" />
      <circle className="st1" cx="717.8" cy="196.5" r="2.8" />
      <circle className="st1" cx="664.5" cy="267.5" r="2.8" />
      <circle className="st1" cx="675" cy="261.5" r="2.8" />
      <circle className="st1" cx="667.5" cy="253.5" r="2.8" />
      <circle className="st1" cx="640.7" cy="237" r="2.8" />
      <circle className="st1" cx="653" cy="235.5" r="2.8" />
      <circle className="st1" cx="666" cy="233" r="2.8" />
      <circle className="st1" cx="665" cy="225.5" r="2.8" />
      <circle className="st1" cx="855" cy="152.5" r="2.8" />
      <circle className="st1" cx="835.5" cy="163.5" r="2.8" />
      <circle className="st1" cx="836.5" cy="149" r="2.8" />
      <circle className="st1" cx="839" cy="140" r="2.8" />
      <circle className="st1" cx="800.5" cy="184" r="2.8" />
      <circle className="st1" cx="727.5" cy="171" r="2.8" />
      <circle className="st1" cx="824" cy="110" r="2.8" />
      <circle className="st1" cx="758.5" cy="263.5" r="2.8" />
      <circle className="st1" cx="849" cy="265" r="2.8" />
      <circle className="st1" cx="834" cy="255.5" r="2.8" />
      <circle className="st1" cx="872.5" cy="249.3" r="2.8" />
      <circle className="st1" cx="868" cy="242.5" r="2.8" />
      <circle className="st1" cx="864.5" cy="235.5" r="2.8" />
      <circle className="st1" cx="951.5" cy="246" r="2.8" />
      <circle className="st1" cx="951.5" cy="228" r="2.8" />
      <circle className="st1" cx="871.8" cy="230.5" r="2.8" />
      <circle className="st1" cx="852" cy="254" r="2.8" />
      <circle className="st1" cx="813.5" cy="263.5" r="2.8" />
      <circle className="st1" cx="766.5" cy="278.5" r="2.8" />
      <circle className="st1" cx="893" cy="208.5" r="2.8" />
      <circle className="st1" cx="753.8" cy="257.5" r="2.8" />
      <circle className="st1" cx="763.5" cy="211" r="2.8" />
      <polyline  ref={(path) => (pathsRef.current[25] = path)}
        className="st1"
        points="875,230.5 937,230.5 946.8,220.5 960,220.5 	"
      />
    </g>
  </svg>
  </div>
  );
}

export default MySvgComponent;
