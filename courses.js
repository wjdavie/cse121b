// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTH', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
    ],
    enrollStudent = function(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent = function(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum = sectionNum 
        );
        if (sectionIndex >=0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
};

function setCourseInfo(course) {
    courseName = document.querySelector("#courseName");
    courseNum = document.querySelector("#courseNum");
}; 

function renderSections(sections) {
    const html = section.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
};

document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectioniNumber").value;
    aCourse.enrollStudentStudent(sectionNum);
});
 document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum); 
 });

 setCourseInfo(aCourse);
renderSections(aCourse.sections);

/* COULD USE THIS TO MAKE THE CODE MORE EFFICIENT
changeEnrollment: function (sectionNum, add = true) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  }*/