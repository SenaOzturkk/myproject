import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  const [ refresh, setRefresh ] = useState(true);

  useEffect(() => {
    setRefresh(false);
    setRefresh(true);
  }, [users])

  const handleClickUp = (user) => {
    user.point += 1;
  };

  const handleClickDown = (user) => {
    user.point -= 1;
  };

  return (
    <ListGroup className="list">
      <div className="list-text-line"></div>
      <select>
        <option value="most">Most Voted (Z -> A)</option>
        <option value="less">Less Voted (A -> Z)</option>
      </select>
      {users.length > 0 && refresh ?  (
        <>
          {users.map((user) => (
            <ListGroupItem className="list-item" key={user.id}>
              <div className="points">
                {user.point} POINTS
              
                <div className="list-items-text">
                  <div className="list-item-title">{user.name}</div>
                  <div className="list-item-subtitle">{user.url}</div>
                  <div className="list-buttons">
                    <button onClick={() => handleClickUp(user)} className="list-button1">
                      ↑ Up Vote
                    </button>
                    <button onClick={() => handleClickDown(user)} className="list-button2">
                      ↓ Down Vote
                    </button>          
                  </div>
                </div>
                <div>
                  <Button
                    className="list-button1"
                    onClick={(e) => removeUser(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center mt-2">User Not Found</h4>
      )}
    </ListGroup>
  );
};
