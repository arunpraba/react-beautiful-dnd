export const InitialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Search & Persistance" },
    "task-2": { id: "task-2", content: "Sort By & Option Style" },
    "task-3": { id: "task-3", content: "Card and Alignments" },
    "task-4": { id: "task-4", content: "Remove See details" },
    "task-5": { id: "task-6", content: "Filter Alignments" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todo",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
