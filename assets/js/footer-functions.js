additionTest();
subtractionTest();
multiplicationTest();
divisionTest();
additionAndSubtractionTest();
additionAndMultiplicationTest();
additionAndDivisonTest();
subtractionAndMultiplicationTest();
subtractionAndDivisonTest();
allOperatorTest();




function additionTest() {
    testCompute(2, "1+1");
    testCompute(3, "1+1+1");
    testCompute(6, "3+2+1");
}

function subtractionTest() {
    testCompute(0, "1-1");
    testCompute(-1, "1-1-1");
    testCompute(2, "5-2-1");
}

function multiplicationTest() {
    testCompute(1, "1*1");
    testCompute(2, "1*1*2");
    testCompute(50, "5*5*2");
}

function divisionTest() {
    testCompute(1, "1/1");
    testCompute(1, "10/2/5");
    testCompute(10, "20/2");
}


function additionAndSubtractionTest() {
    testCompute(0, "1+1-2");
    testCompute(15, "10+6-1");
    testCompute(20, "10-2+12");
}


function additionAndMultiplicationTest() {
    testCompute(0, "1+1*2");
    testCompute(16, "10+6*1");
    testCompute(34, "10+2*12");
}

function subtractionAndMultiplicationTest() {
    testCompute(-1, "1-1*2");
    testCompute(4, "10-6*1");
    testCompute(-14, "10-2*12");
}





function additionAndDivisonTest() {
    testCompute(1.5, "1+1/2");
    testCompute(16, "10+6/1");
    testCompute(10.5, "10+2/4");
}

function subtractionAndDivisonTest() {
    testCompute(0.5, "1-1/2");
    testCompute(4, "10-6/1");
    testCompute(9.5, "10-2/4");
}


function allOperatorTest() {
    testCompute(-12, "1+2-3*10/2");
    testCompute(-11, "1+3-3*10/2");
    testCompute(-4, "3-2-3*10/2+10");
}