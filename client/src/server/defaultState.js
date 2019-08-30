export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Dev",
      password: "password"
    },
    {
      id: "U2",
      name: "C. Eeyo",
      password: "password"
    }
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1"
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1"
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1"
    }
  ],
  tasks: [
    {
      name: "Refactor tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
      startDate: "8 / 1 / 2019",
      endDate: "11 / 11 / 2018",
      description: "test",
      objectives: " "
    },
    {
      name: "Meet with CTO",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
      startDate: "11 / 11 / 2018",
      endDate: "11 / 11 / 2018",
      description: "test",
      objectives: " "
    },
    {
      name: "Compile ES6",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
      startDate: "11 / 11 / 2018",
      endDate: "11 / 11 / 2018",
      description: "test",
      objectives: " "
    },
    {
      name: "Update component snapshots",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true,
      startDate: "11 / 11 / 2018",
      endDate: "11 / 11 / 2018",
      description: "test",
      objectives: " "
    },
    {
      name: "Production optimizations",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: false,
      startDate: "11 / 11 / 2018",
      endDate: "11 / 11 / 2018",
      description: "test",
      objectives: " "
    }
  ],
  defTasks: {
    name: "",
    group: "",
    owner: "",
    isComplete: false,
    startDate: "",
    endDate: "",
    description: "",
    objectives: ""
  }
};
