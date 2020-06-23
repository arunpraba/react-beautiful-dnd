import React from "react";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 300px;
  background: white;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const Move = styled.div`
  width: 20px;
  height: 20px;
  background: orange;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TaskList = styled.div`
  padding: 8px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? "palevioletred" : "white"};
  flex-grow: 1;
  min-height: 100px;
`;

function Column({ column, tasks, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Header>
            <Title>{column.title}</Title>
            <Move {...provided.dragHandleProps} />
          </Header>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
