// Mark Analyze Output TotalMark AverageMark HightMark LowestMark

const marks = { math: 78, english: 67, bangla: 55 };

const getMarksAnalyze = function (marks) {
  let totalMark = 0;
  let hightMark = 0;
  let lowestMark = Infinity;

  for (const mark in marks) {
    totalMark = totalMark + marks[mark];
    if (marks[mark] > hightMark) {
      hightMark = marks[mark];
    }
    if (marks[mark] < lowestMark) {
      lowestMark = marks[mark];
    }
  }

  const markLength = Object.keys(marks).length;
  const averageMarks = totalMark / markLength;

  return { totalMark, averageMarks, hightMark, lowestMark };
};

const result = getMarksAnalyze(marks);
console.log(result);
