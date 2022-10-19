import React, { useState } from "react";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import Sidebar from "../component/Sidebar";

const board = {
  columns: [
    {
      id: 1,
      title: "To Do",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "UP NEXT",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "IN PROGRESS",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "IN PREVIEW",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
    {
      id: 5,
      title: "DONE",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
  ],
};

function ControlledBoard() {
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const handleColumnAdded = (newBoard, newColumn) => {
    console.info("column added!");
    setBoard(newBoard);
  };

  const handleColumnConfirmed = (newColumnName) => {
    console.info("Column id requested");

    const newColumn = {
      id: "testing-but-this-should-be-unique",
      ...newColumnName,
    };
    return newColumn;
  };

  return (
    <Board
      onCardDragEnd={handleCardMove}
      disableColumnDrag
      allowAddColumn={true}
      onNewColumnConfirm={handleColumnConfirmed}
      onColumnNew={handleColumnAdded}
    >
      {controlledBoard}
    </Board>
  );
}

function UncontrolledBoard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 m-8">
        <div className="text-4xl text-center">KANBAN BOARD</div>
        <Board
          allowRemoveLane
          allowRenameColumn
          allowRemoveCard
          initialBoard={board}
          allowAddCard={{ on: "top" }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ...draftCard,
          })}
          onCardNew={console.log}
        />
      </div>
    </div>
  );
}

export default UncontrolledBoard;
