function calculateFinalScore(obj) {

    if (typeof obj !== 'object') {

        return "Invalid Input";

    }

    const rajibInfo = obj;

    const testScore = rajibInfo.testScore;

    const testScorePont = Math.min(testScore, 50);

    const schoolGrade = rajibInfo.schoolGrade;

    const schoolGradePont = Math.min(schoolGrade, 30);

    const isFamily = rajibInfo.isFamily;

    let parentProfession;

    if (isFamily === true) {

        parentProfession = 20;

    } else {

        parentProfession = 0;

    }

    const totalPoint = testScorePont + schoolGradePont + parentProfession;

    if (80 <= totalPoint) {

        return true;

    }

    return false;

}
const rajibInfo = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFamily: true
}
const result = calculateFinalScore(rajibInfo);
console.log(result);
