var projectList = [
    {
        projectName:"Accident Record feature enhancment",
        projectDept:"IT",
        projectHead:"Ram"
    },

    {
        projectName:"Fuding utilisation and allocation",
        projectDept:"Accounts",
        projectHead:"Guru"
    },

    {
        projectName:"Recruitment Drive",
        projectDept:"Human Resource",
        projectHead:"Pooja"
    },

    {
        projectName:"Web app network infrastructure enhancment",
        projectDept:"Operations",
        projectHead:"Arun"
    },
];

const main = document.getElementById('project-content');
const pDept = [];
const pName = [];
const pHead = [];

for (var i=0;i<projectList.length;i++)
{
    pName[i] = document.createElement('h3');
    pName[i].innerText = `Project Name : ${projectList[i]['projectName']}`;
    

    pDept[i] = document.createElement('p');
    pDept[i].innerText =`Department handling the project :  ${projectList[i]['projectDept']}`;

    pHead[i] = document.createElement('p');
    pHead[i].innerText = ` Project Head Name : ${projectList[i]['projectHead']}`;

    main.appendChild(pName[i]);
    main.appendChild(pDept[i]);
    main.appendChild(pHead[i]);
    main.appendChild(document.createElement('hr'));

};